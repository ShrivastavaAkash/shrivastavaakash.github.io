Recently, While working on one of the class library projects I got stuck with an interesting problem. The class library project had 2 NuGet packages that referenced same dependency but with different versions.

Now, in an application project having a configuration file of its own, these kind of problems are dealt with by using [binding redirect](https://docs.microsoft.com/en-us/dotnet/framework/configure-apps/file-schema/runtime/bindingredirect-element) entries in the configuration file.
However, since the class library project I was working on was supposed to be referenced as a dependency, it did not have its own config file, it was meant to use the config (and binding redirects) of the project in which it was to be referenced.

## Binding Redirects

In .NET, binding redirects are there to handle version conflicts or version redirection among referenced assemblies.

For example, if you add a NuGet reference to a package say (say `SampleNuget`) and this `SampleNuget` package is compiled to have an internal dependency on `NewtonSoft.Json` version 6.0, then as soon as you add the `SampleNuget` a binding redirect entry gets automatically added to your project's config file which looks something like this:

```xml
<dependentAssembly>
    <assemblyIdentity
        name="Newtonsoft.Json"
        publicKeyToken="<public key token value>"
        culture="neutral"
    />
    <bindingRedirect
        oldVersion="0.0.0.0-12.0.0.0"
        newVersion="12.0.0.0"
    />
</dependentAssembly>
```

This entry means that whenever `Newtonsoft.Json` assembly is requested the runtime will load the latest version despite the requested version being lower.
This way you can manage that your project is using the latest version of referenced assemblies instead of legacy ones.

Similarly, If a project has two references (say **A** & **B**), now project **A** has a compiled dependency on `NewtonSoft.JSON version 6.0` and project **B** has a compiled dependency on `NewtonSoft.json version 9.0` then using these Binding Redirects entries you can make sure that a package is not loaded multiple times just because of version differences.
Since due to binding redirect rules both projects will be provided `NewtonSoft.Json version 12.0`.

## How to handle these without a config file

Since the config file was out of picture in my situation, I explored more options to handle these conflicts from code itself.

I ended up using the [AppDomain.AssemblyResolve](https://docs.microsoft.com/en-us/dotnet/api/system.appdomain.assemblyresolve?view=netframework-4.8) event that is raised whenever a request to load a referenced assembly is failed.
You can bind an `EventHandler` of type [ResolveEventHandler](https://docs.microsoft.com/en-us/dotnet/api/system.resolveeventhandler?view=netframework-4.8), and if this `EventHandler` returns an alternate assembly then the runtime ends us using the alternate assembly instead of the one it requested.
This way you can implement the similar redirection that would be achieved via those `BindingRedirect` XML entries in config file.

A simple (really simple) handler would be something like:

```csharp
ResolveEventHandler eventHandler = (sender, args) => {
    // Get just the name of assmebly
    // Aseembly name excluding version and other metadata
    string name = new Regex(",.*").Replace(args.Name, string.Empty);

    // Load whatever version available
    return Assembly.Load(name);
}
```

In an actual application you might want to check for already loaded assembly in current `AppDomain` (see [AppDomain.GetAssemblies Method](https://docs.microsoft.com/en-us/dotnet/api/system.appdomain.getassemblies?view=netframework-4.8)) and whether you can use any of those as a replacement.
If none of the assemblies loaded in AppDomain match the name of assembly we need, then just load a new one (using [AppDomain.Load](https://docs.microsoft.com/en-us/dotnet/api/system.appdomain.load?view=netframework-4.8)).

## Some links you should check out for more info

- [&lt;bindingRedirect&gt; Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/framework/configure-apps/file-schema/runtime/bindingredirect-element)
- [Redirecting Assembly Loads at Runtime](https://blog.slaks.net/2013-12-25/redirecting-assembly-loads-at-runtime/)
