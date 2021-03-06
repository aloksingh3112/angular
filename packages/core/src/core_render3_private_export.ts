/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// clang-format off
export {
  defineBase as ɵdefineBase,
  defineComponent as ɵdefineComponent,
  defineDirective as ɵdefineDirective,
  definePipe as ɵdefinePipe,
  defineNgModule as ɵdefineNgModule,
  detectChanges as ɵdetectChanges,
  renderComponent as ɵrenderComponent,
  AttributeMarker as ɵAttributeMarker,
  ComponentType as ɵComponentType,
  ComponentFactory as ɵRender3ComponentFactory,
  ComponentRef as ɵRender3ComponentRef,
  DirectiveType as ɵDirectiveType,
  RenderFlags as ɵRenderFlags,
  directiveInject as ɵdirectiveInject,
  injectAttribute as ɵinjectAttribute,
  getFactoryOf as ɵgetFactoryOf,
  getInheritedFactory as ɵgetInheritedFactory,
  setComponentScope as ɵsetComponentScope,
  templateRefExtractor as ɵtemplateRefExtractor,
  ProvidersFeature as ɵProvidersFeature,
  InheritDefinitionFeature as ɵInheritDefinitionFeature,
  NgOnChangesFeature as ɵNgOnChangesFeature,
  LifecycleHooksFeature as ɵLifecycleHooksFeature,
  NgModuleType as ɵNgModuleType,
  NgModuleRef as ɵRender3NgModuleRef,
  CssSelectorList as ɵCssSelectorList,
  markDirty as ɵmarkDirty,
  NgModuleFactory as ɵNgModuleFactory,
  NO_CHANGE as ɵNO_CHANGE,
  container as ɵcontainer,
  nextContext as ɵnextContext,
  elementStart as ɵelementStart,
  namespaceHTML as ɵnamespaceHTML,
  namespaceMathML as ɵnamespaceMathML,
  namespaceSVG as ɵnamespaceSVG,
  element as ɵelement,
  listener as ɵlistener,
  text as ɵtext,
  embeddedViewStart as ɵembeddedViewStart,
  projection as ɵprojection,
  bind as ɵbind,
  interpolation1 as ɵinterpolation1,
  interpolation2 as ɵinterpolation2,
  interpolation3 as ɵinterpolation3,
  interpolation4 as ɵinterpolation4,
  interpolation5 as ɵinterpolation5,
  interpolation6 as ɵinterpolation6,
  interpolation7 as ɵinterpolation7,
  interpolation8 as ɵinterpolation8,
  interpolationV as ɵinterpolationV,
  pipeBind1 as ɵpipeBind1,
  pipeBind2 as ɵpipeBind2,
  pipeBind3 as ɵpipeBind3,
  pipeBind4 as ɵpipeBind4,
  pipeBindV as ɵpipeBindV,
  pureFunction0 as ɵpureFunction0,
  pureFunction1 as ɵpureFunction1,
  pureFunction2 as ɵpureFunction2,
  pureFunction3 as ɵpureFunction3,
  pureFunction4 as ɵpureFunction4,
  pureFunction5 as ɵpureFunction5,
  pureFunction6 as ɵpureFunction6,
  pureFunction7 as ɵpureFunction7,
  pureFunction8 as ɵpureFunction8,
  pureFunctionV as ɵpureFunctionV,
  getCurrentView as ɵgetCurrentView,
  getDirectives as ɵgetDirectives,
  getHostElement as ɵgetHostElement,
  restoreView as ɵrestoreView,
  containerRefreshStart as ɵcontainerRefreshStart,
  containerRefreshEnd as ɵcontainerRefreshEnd,
  queryRefresh as ɵqueryRefresh,
  viewQuery as ɵviewQuery,
  staticViewQuery as ɵstaticViewQuery,
  staticContentQuery as ɵstaticContentQuery,
  loadViewQuery as ɵloadViewQuery,
  contentQuery as ɵcontentQuery,
  loadContentQuery as ɵloadContentQuery,
  elementEnd as ɵelementEnd,
  elementProperty as ɵelementProperty,
  componentHostSyntheticProperty as ɵcomponentHostSyntheticProperty,
  componentHostSyntheticListener as ɵcomponentHostSyntheticListener,
  projectionDef as ɵprojectionDef,
  reference as ɵreference,
  enableBindings as ɵenableBindings,
  disableBindings as ɵdisableBindings,
  allocHostVars as ɵallocHostVars,
  elementAttribute as ɵelementAttribute,
  elementContainerStart as ɵelementContainerStart,
  elementContainerEnd as ɵelementContainerEnd,
  elementStyling as ɵelementStyling,
  elementHostAttrs as ɵelementHostAttrs,
  elementStylingMap as ɵelementStylingMap,
  elementStyleProp as ɵelementStyleProp,
  elementStylingApply as ɵelementStylingApply,
  elementClassProp as ɵelementClassProp,
  textBinding as ɵtextBinding,
  template as ɵtemplate,
  embeddedViewEnd as ɵembeddedViewEnd,
  store as ɵstore,
  load as ɵload,
  pipe as ɵpipe,
  BaseDef as ɵBaseDef,
  ComponentDef as ɵComponentDef,
  ComponentDefWithMeta as ɵComponentDefWithMeta,
  DirectiveDef as ɵDirectiveDef,
  DirectiveDefWithMeta as ɵDirectiveDefWithMeta,
  PipeDef as ɵPipeDef,
  PipeDefWithMeta as ɵPipeDefWithMeta,
  whenRendered as ɵwhenRendered,
  i18n as ɵi18n,
  i18nAttributes as ɵi18nAttributes,
  i18nExp as ɵi18nExp,
  i18nStart as ɵi18nStart,
  i18nEnd as ɵi18nEnd,
  i18nApply as ɵi18nApply,
  i18nPostprocess as ɵi18nPostprocess,
  setClassMetadata as ɵsetClassMetadata,
  resolveWindow as ɵresolveWindow,
  resolveDocument as ɵresolveDocument,
  resolveBody as ɵresolveBody,
} from './render3/index';


export {
  compileComponent as ɵcompileComponent,
  compileDirective as ɵcompileDirective,
} from './render3/jit/directive';
export {
  compileNgModule as ɵcompileNgModule,
  compileNgModuleDefs as ɵcompileNgModuleDefs,
  patchComponentDefWithScope as ɵpatchComponentDefWithScope,
  resetCompiledComponents as ɵresetCompiledComponents,
  flushModuleScopingQueueAsMuchAsPossible as ɵflushModuleScopingQueueAsMuchAsPossible,
  transitiveScopesFor as ɵtransitiveScopesFor,
} from './render3/jit/module';
export {
  compilePipe as ɵcompilePipe,
} from './render3/jit/pipe';

export {
  NgModuleDef as ɵNgModuleDef,
  NgModuleDefWithMeta as ɵNgModuleDefWithMeta,
  NgModuleTransitiveScopes as ɵNgModuleTransitiveScopes,
} from './metadata/ng_module';

export {
  sanitizeHtml as ɵsanitizeHtml,
  sanitizeStyle as ɵsanitizeStyle,
  defaultStyleSanitizer as ɵdefaultStyleSanitizer,
  sanitizeScript as ɵsanitizeScript,
  sanitizeUrl as ɵsanitizeUrl,
  sanitizeResourceUrl as ɵsanitizeResourceUrl,
  sanitizeUrlOrResourceUrl as ɵsanitizeUrlOrResourceUrl,
} from './sanitization/sanitization';

export {
  bypassSanitizationTrustHtml as ɵbypassSanitizationTrustHtml,
  bypassSanitizationTrustStyle as ɵbypassSanitizationTrustStyle,
  bypassSanitizationTrustScript as ɵbypassSanitizationTrustScript,
  bypassSanitizationTrustUrl as ɵbypassSanitizationTrustUrl,
  bypassSanitizationTrustResourceUrl as ɵbypassSanitizationTrustResourceUrl,
} from './sanitization/bypass';

export {
  getLContext as ɵgetLContext
} from './render3/context_discovery';

export {
  NG_ELEMENT_ID as ɵNG_ELEMENT_ID,
  NG_COMPONENT_DEF as ɵNG_COMPONENT_DEF,
  NG_DIRECTIVE_DEF as ɵNG_DIRECTIVE_DEF,
  NG_PIPE_DEF as ɵNG_PIPE_DEF,
  NG_MODULE_DEF as ɵNG_MODULE_DEF,
  NG_BASE_DEF as ɵNG_BASE_DEF
} from './render3/fields';

export {
  NG_INJECTABLE_DEF as ɵNG_INJECTABLE_DEF,
  NG_INJECTOR_DEF as ɵNG_INJECTOR_DEF,
} from './di/interface/defs';

export {
  Player as ɵPlayer,
  PlayerFactory as ɵPlayerFactory,
  PlayState as ɵPlayState,
  PlayerHandler as ɵPlayerHandler,
} from './render3/interfaces/player';

export {
  LContext as ɵLContext,
} from './render3/interfaces/context';

export {
  bindPlayerFactory as ɵbindPlayerFactory,
} from './render3/styling/player_factory';

export {
  addPlayer as ɵaddPlayer,
  getPlayers as ɵgetPlayers,
} from './render3/players';

// we reexport these symbols just so that they are retained during the dead code elimination
// performed by rollup while it's creating fesm files.
//
// no code actually imports these symbols from the @angular/core entry point
export {
  compileNgModuleFactory__POST_R3__ as ɵcompileNgModuleFactory__POST_R3__,
  isBoundToModule__POST_R3__ as ɵisBoundToModule__POST_R3__
} from './application_ref';
export {
  SWITCH_COMPILE_COMPONENT__POST_R3__ as ɵSWITCH_COMPILE_COMPONENT__POST_R3__,
  SWITCH_COMPILE_DIRECTIVE__POST_R3__ as ɵSWITCH_COMPILE_DIRECTIVE__POST_R3__,
  SWITCH_COMPILE_PIPE__POST_R3__ as ɵSWITCH_COMPILE_PIPE__POST_R3__,
} from './metadata/directives';
export {
  SWITCH_COMPILE_NGMODULE__POST_R3__ as ɵSWITCH_COMPILE_NGMODULE__POST_R3__,
} from './metadata/ng_module';
export {
  getDebugNode__POST_R3__ as ɵgetDebugNode__POST_R3__,
} from './debug/debug_node';
export {
  SWITCH_COMPILE_INJECTABLE__POST_R3__ as ɵSWITCH_COMPILE_INJECTABLE__POST_R3__,
} from './di/injectable';
export {
  SWITCH_IVY_ENABLED__POST_R3__ as ɵSWITCH_IVY_ENABLED__POST_R3__,
} from './ivy_switch';
export {
  SWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__ as ɵSWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__,
} from './change_detection/change_detector_ref';
export {
  Compiler_compileModuleSync__POST_R3__ as ɵCompiler_compileModuleSync__POST_R3__,
  Compiler_compileModuleAsync__POST_R3__ as ɵCompiler_compileModuleAsync__POST_R3__,
  Compiler_compileModuleAndAllComponentsSync__POST_R3__ as ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__,
  Compiler_compileModuleAndAllComponentsAsync__POST_R3__ as ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__,
} from './linker/compiler';
export {
  SWITCH_ELEMENT_REF_FACTORY__POST_R3__ as ɵSWITCH_ELEMENT_REF_FACTORY__POST_R3__,
} from './linker/element_ref';
export {
  SWITCH_TEMPLATE_REF_FACTORY__POST_R3__ as ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__,
} from './linker/template_ref';
export {
  SWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__ as ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__,
} from './linker/view_container_ref';
export {
  SWITCH_RENDERER2_FACTORY__POST_R3__ as ɵSWITCH_RENDERER2_FACTORY__POST_R3__,
} from './render/api';

export {getModuleFactory__POST_R3__ as ɵgetModuleFactory__POST_R3__} from './linker/ng_module_factory_loader';

export {
  publishGlobalUtil as ɵpublishGlobalUtil,
  publishDefaultGlobalUtils as ɵpublishDefaultGlobalUtils
} from './render3/global_utils';

export {createInjector as ɵcreateInjector} from './di/r3_injector';

// clang-format on
