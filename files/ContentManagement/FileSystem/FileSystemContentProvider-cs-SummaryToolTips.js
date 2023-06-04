﻿NDSummary.OnToolTipsLoaded("File:ContentManagement/FileSystem/FileSystemContentProvider.cs",{152:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype152\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">Chroma.&#8203;ContentManagement.&#8203;FileSystem.</span>&#8203;FileSystemContentProvider</div></div></div></div>",154:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype154\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public string</span> ContentRoot { <span class=\"SHKeyword\">get</span> }</div></div></div>",156:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype156\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> FileSystemContentProvider(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">contentRoot</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"> <span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",157:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype157\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> T Load&lt;T&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">relativePath,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">params</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">object</span>[]&nbsp;</td><td class=\"PName last\">args</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">where</span> T : DisposableResource</div></div></div>",158:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype158\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Unload&lt;T&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PName last\">resource</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">where</span> T : DisposableResource</div></div></div>",159:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype159\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Stream Open(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">relativePath</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",160:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype160\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public byte</span>[] Read(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">relativePath</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",161:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype161\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Track&lt;T&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PName last\">resource</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">where</span> T : DisposableResource</div></div></div>",162:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype162\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> StopTracking&lt;T&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PName last\">resource</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">where</span> T : DisposableResource</div></div></div>",163:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype163\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> RegisterImporter&lt;T&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Func&lt;<span class=\"SHKeyword\">string</span>, <span class=\"SHKeyword\">object</span>[], <span class=\"SHKeyword\">object</span>&gt;&nbsp;</td><td class=\"PName last\">importer</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">where</span> T : DisposableResource</div></div></div>",164:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype164\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> UnregisterImporter&lt;T&gt;()</div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">where</span> T : DisposableResource</div></div></div>",165:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype165\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> IsImporterPresent&lt;T&gt;()</div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">where</span> T : DisposableResource</div></div></div>",166:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype166\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">protected override void</span> FreeManagedResources()</div></div></div>"});