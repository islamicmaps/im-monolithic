/* islamicmaps.org — bundled vendor (build-time) */
var $C=Object.create;var Of=Object.defineProperty;var KC=Object.getOwnPropertyDescriptor;var YC=Object.getOwnPropertyNames;var JC=Object.getPrototypeOf,QC=Object.prototype.hasOwnProperty;var E=(t,e)=>()=>(t&&(e=t(t=0)),e);var ZC=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),he=(t,e)=>{for(var r in e)Of(t,r,{get:e[r],enumerable:!0})},qC=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of YC(e))!QC.call(t,n)&&n!==r&&Of(t,n,{get:()=>e[n],enumerable:!(i=KC(e,n))||i.enumerable});return t};var ev=(t,e,r)=>(r=t!=null?$C(JC(t)):{},qC(e||!t||!t.__esModule?Of(r,"default",{value:t,enumerable:!0}):r,t));var aa,sv,ca,av,rm,Lf=E(()=>{aa=globalThis,sv=globalThis.document||{},ca=globalThis.process||{},av=globalThis.console,rm=globalThis.navigator||{}});function la(t){if(typeof window<"u"&&window.process?.type==="renderer"||typeof process<"u"&&process.versions?.electron)return!0;let e=typeof navigator<"u"&&navigator.userAgent,r=t||e;return!!(r&&r.indexOf("Electron")>=0)}var Ff=E(()=>{});function Ee(){return!(typeof process=="object"&&String(process)==="[object process]"&&!process?.browser)||la()}var Nf=E(()=>{Ff()});function Df(t){return!t&&!Ee()?"Node":la(t)?"Electron":(t||rm.userAgent||"").indexOf("Edge")>-1?"Edge":globalThis.chrome?"Chrome":globalThis.safari?"Safari":globalThis.mozInnerScreenX?"Firefox":"Unknown"}var im=E(()=>{Nf();Ff();Lf()});var Uf,qt=E(()=>{Lf();Nf();im();Uf="4.1.1"});function li(t,e){if(!t)throw new Error(e||"Assertion failed")}var kf=E(()=>{});function Vf(t){if(!t)return 0;let e;switch(typeof t){case"number":e=t;break;case"object":e=t.logLevel||t.priority||0;break;default:return 0}return li(Number.isFinite(e)&&e>=0),e}function nm(t){let{logLevel:e,message:r}=t;t.logLevel=Vf(e);let i=t.args?Array.from(t.args):[];for(;i.length&&i.shift()!==r;);switch(typeof e){case"string":case"function":r!==void 0&&i.unshift(r),t.message=e;break;case"object":Object.assign(t,e);break;default:}typeof t.message=="function"&&(t.message=t.message());let n=typeof t.message;return li(n==="string"||n==="object"),Object.assign(t,{args:i},t.opts)}var om=E(()=>{kf()});var Mr,fa,sm=E(()=>{om();Mr=()=>{},fa=class{constructor({level:e=0}={}){this.userData={},this._onceCache=new Set,this._level=e}set level(e){this.setLevel(e)}get level(){return this.getLevel()}setLevel(e){return this._level=e,this}getLevel(){return this._level}warn(e,...r){return this._log("warn",0,e,r,{once:!0})}error(e,...r){return this._log("error",0,e,r)}log(e,r,...i){return this._log("log",e,r,i)}info(e,r,...i){return this._log("info",e,r,i)}once(e,r,...i){return this._log("once",e,r,i,{once:!0})}_log(e,r,i,n,o={}){let s=nm({logLevel:r,message:i,args:this._buildArgs(r,i,n),opts:o});return this._createLogFunction(e,s,o)}_buildArgs(e,r,i){return[e,r,...i]}_createLogFunction(e,r,i){if(!this._shouldLog(r.logLevel))return Mr;let n=this._getOnceTag(i.tag??r.tag??r.message);if((i.once||r.once)&&n!==void 0){if(this._onceCache.has(n))return Mr;this._onceCache.add(n)}return this._emit(e,r)}_shouldLog(e){return this.getLevel()>=Vf(e)}_getOnceTag(e){if(e!==void 0)try{return typeof e=="string"?e:String(e)}catch{return}}}});function lv(t){try{let e=window[t],r="__storage_test__";return e.setItem(r,r),e.removeItem(r),e}catch{return null}}var ua,am=E(()=>{ua=class{constructor(e,r,i="sessionStorage"){this.storage=lv(i),this.id=e,this.config=r,this._loadConfiguration()}getConfiguration(){return this.config}setConfiguration(e){if(Object.assign(this.config,e),this.storage){let r=JSON.stringify(this.config);this.storage.setItem(this.id,r)}}_loadConfiguration(){let e={};if(this.storage){let r=this.storage.getItem(this.id);e=r?JSON.parse(r):{}}return Object.assign(this.config,e),this}}});function cm(t){let e;return t<10?e=`${t.toFixed(2)}ms`:t<100?e=`${t.toFixed(1)}ms`:t<1e3?e=`${t.toFixed(0)}ms`:e=`${(t/1e3).toFixed(2)}s`,e}function lm(t,e=8){let r=Math.max(e-t.length,0);return`${" ".repeat(r)}${t}`}var fm=E(()=>{});function um(t){return typeof t!="string"?t:(t=t.toUpperCase(),da[t]||da.WHITE)}function dm(t,e,r){return!Ee&&typeof t=="string"&&(e&&(t=`\x1B[${um(e)}m${t}\x1B[39m`),r&&(t=`\x1B[${um(r)+fv}m${t}\x1B[49m`)),t}var da,fv,hm=E(()=>{qt();(function(t){t[t.BLACK=30]="BLACK",t[t.RED=31]="RED",t[t.GREEN=32]="GREEN",t[t.YELLOW=33]="YELLOW",t[t.BLUE=34]="BLUE",t[t.MAGENTA=35]="MAGENTA",t[t.CYAN=36]="CYAN",t[t.WHITE=37]="WHITE",t[t.BRIGHT_BLACK=90]="BRIGHT_BLACK",t[t.BRIGHT_RED=91]="BRIGHT_RED",t[t.BRIGHT_GREEN=92]="BRIGHT_GREEN",t[t.BRIGHT_YELLOW=93]="BRIGHT_YELLOW",t[t.BRIGHT_BLUE=94]="BRIGHT_BLUE",t[t.BRIGHT_MAGENTA=95]="BRIGHT_MAGENTA",t[t.BRIGHT_CYAN=96]="BRIGHT_CYAN",t[t.BRIGHT_WHITE=97]="BRIGHT_WHITE"})(da||(da={}));fv=10});function pm(t,e=["constructor"]){let r=Object.getPrototypeOf(t),i=Object.getOwnPropertyNames(r),n=t;for(let o of i){let s=n[o];typeof s=="function"&&(e.find(a=>o===a)||(n[o]=s.bind(t)))}}var gm=E(()=>{});function fi(){let t;if(Ee()&&aa.performance)t=aa?.performance?.now?.();else if("hrtime"in ca){let e=ca?.hrtime?.();t=e[0]*1e3+e[1]/1e6}else t=Date.now();return t}var mm=E(()=>{qt()});function uv(t,e,r){if(typeof e=="string"){let i=r.time?lm(cm(r.total)):"";e=r.time?`${t}: ${i}  ${e}`:`${t}: ${e}`,e=dm(e,r.color,r.background)}return e}function dv(t){for(let e in t)for(let r in t[e])return r||"untitled";return"empty"}var ui,Hf,Ce,zf=E(()=>{qt();sm();am();fm();hm();gm();kf();mm();ui={debug:Ee()&&console.debug||console.log,log:console.log,info:console.info,warn:console.warn,error:console.error},Hf={enabled:!0,level:0},Ce=class extends fa{constructor({id:e}={id:""}){super({level:0}),this.VERSION=Uf,this._startTs=fi(),this._deltaTs=fi(),this.userData={},this.LOG_THROTTLE_TIMEOUT=0,this.id=e,this.userData={},this._storage=new ua(`__probe-${this.id}__`,{[this.id]:Hf}),this.timeStamp(`${this.id} started`),pm(this),Object.seal(this)}isEnabled(){return this._getConfiguration().enabled}getLevel(){return this._getConfiguration().level}getTotal(){return Number((fi()-this._startTs).toPrecision(10))}getDelta(){return Number((fi()-this._deltaTs).toPrecision(10))}set priority(e){this.level=e}get priority(){return this.level}getPriority(){return this.level}enable(e=!0){return this._updateConfiguration({enabled:e}),this}setLevel(e){return this._updateConfiguration({level:e}),this}get(e){return this._getConfiguration()[e]}set(e,r){this._updateConfiguration({[e]:r})}settings(){console.table?console.table(this._storage.config):console.log(this._storage.config)}assert(e,r){if(!e)throw new Error(r||"Assertion failed")}warn(e,...r){return this._log("warn",0,e,r,{method:ui.warn,once:!0})}error(e,...r){return this._log("error",0,e,r,{method:ui.error})}deprecated(e,r){return this.warn(`\`${e}\` is deprecated and will be removed in a later version. Use \`${r}\` instead`)}removed(e,r){return this.error(`\`${e}\` has been removed. Use \`${r}\` instead`)}probe(e,r,...i){return this._log("log",e,r,i,{method:ui.log,time:!0,once:!0})}log(e,r,...i){return this._log("log",e,r,i,{method:ui.debug})}info(e,r,...i){return this._log("info",e,r,i,{method:console.info})}once(e,r,...i){return this._log("once",e,r,i,{method:ui.debug||ui.info,once:!0})}table(e,r,i){return r?this._log("table",e,r,i&&[i]||[],{method:console.table||Mr,tag:dv(r)}):Mr}time(e,r){return this._log("time",e,r,[],{method:console.time?console.time:console.info})}timeEnd(e,r){return this._log("time",e,r,[],{method:console.timeEnd?console.timeEnd:console.info})}timeStamp(e,r){return this._log("time",e,r,[],{method:console.timeStamp||Mr})}group(e,r,i={collapsed:!1}){let n=(i.collapsed?console.groupCollapsed:console.group)||console.info;return this._log("group",e,r,[],{method:n})}groupCollapsed(e,r,i={}){return this.group(e,r,Object.assign({},i,{collapsed:!0}))}groupEnd(e){return this._log("groupEnd",e,"",[],{method:console.groupEnd||Mr})}withGroup(e,r,i){this.group(e,r)();try{i()}finally{this.groupEnd(e)()}}trace(){console.trace&&console.trace()}_shouldLog(e){return this.isEnabled()&&super._shouldLog(e)}_emit(e,r){let i=r.method;li(i),r.total=this.getTotal(),r.delta=this.getDelta(),this._deltaTs=fi();let n=uv(this.id,r.message,r);return i.bind(console,n,...r.args)}_getConfiguration(){return this._storage.config[this.id]||this._updateConfiguration(Hf),this._storage.config[this.id]}_updateConfiguration(e){let r=this._storage.config[this.id]||{...Hf};this._storage.setConfiguration({[this.id]:{...r,...e}})}};Ce.VERSION=Uf});var _m=E(()=>{globalThis.probe={}});var Bk,_n=E(()=>{zf();zf();_m();Bk=new Ce({id:"@probe.gl/log"})});function En(){let t;if(typeof window<"u"&&window.performance)t=window.performance.now();else if(typeof process<"u"&&process.hrtime){let e=process.hrtime();t=e[0]*1e3+e[1]/1e6}else t=Date.now();return t}var lu=E(()=>{});var wr,fu=E(()=>{lu();wr=class{constructor(e,r){this.sampleSize=1,this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this.name=e,this.type=r,this.reset()}reset(){return this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this}setSampleSize(e){return this.sampleSize=e,this}incrementCount(){return this.addCount(1),this}decrementCount(){return this.subtractCount(1),this}addCount(e){return this._count+=e,this._samples++,this._checkSampling(),this}subtractCount(e){return this._count-=e,this._samples++,this._checkSampling(),this}addTime(e){return this._time+=e,this.lastTiming=e,this._samples++,this._checkSampling(),this}timeStart(){return this._startTime=En(),this._timerPending=!0,this}timeEnd(){return this._timerPending?(this.addTime(En()-this._startTime),this._timerPending=!1,this._checkSampling(),this):this}getSampleAverageCount(){return this.sampleSize>0?this.lastSampleCount/this.sampleSize:0}getSampleAverageTime(){return this.sampleSize>0?this.lastSampleTime/this.sampleSize:0}getSampleHz(){return this.lastSampleTime>0?this.sampleSize/(this.lastSampleTime/1e3):0}getAverageCount(){return this.samples>0?this.count/this.samples:0}getAverageTime(){return this.samples>0?this.time/this.samples:0}getHz(){return this.time>0?this.samples/(this.time/1e3):0}_checkSampling(){this._samples===this.sampleSize&&(this.lastSampleTime=this._time,this.lastSampleCount=this._count,this.count+=this._count,this.time+=this._time,this.samples+=this._samples,this._time=0,this._count=0,this._samples=0)}}});var Xe,Bm=E(()=>{fu();Xe=class{constructor(e){this.stats={},this.id=e.id,this.stats={},this._initializeStats(e.stats),Object.seal(this)}get(e,r="count"){return this._getOrCreate({name:e,type:r})}get size(){return Object.keys(this.stats).length}reset(){for(let e of Object.values(this.stats))e.reset();return this}forEach(e){for(let r of Object.values(this.stats))e(r)}getTable(){let e={};return this.forEach(r=>{e[r.name]={time:r.time||0,count:r.count||0,average:r.getAverageTime()||0,hz:r.getHz()||0}}),e}_initializeStats(e=[]){e.forEach(r=>this._getOrCreate(r))}_getOrCreate(e){let{name:r,type:i}=e,n=this.stats[r];return n||(e instanceof wr?n=e:n=new wr(r,i),this.stats[r]=n),n}}});var Cn=E(()=>{Bm();fu();lu()});function pw(t,e){let r=t.stats,i=!1;for(let c of e)r[c]||(t.get(c),i=!0);let n=Object.keys(r).length,o=gA.get(t);if(!i&&o?.orderedStatNames===e&&o.statCount===n)return;let s={},a=mA.get(e);a||(a=new Set(e),mA.set(e,a));for(let c of e)r[c]&&(s[c]=r[c]);for(let[c,l]of Object.entries(r))a.has(c)||(s[c]=l);for(let c of Object.keys(r))delete r[c];Object.assign(r,s),gA.set(t,{orderedStatNames:e,statCount:n})}var dw,hw,gA,mA,kd,ja,Vd=E(()=>{Cn();dw="GPU Time and Memory",hw=["Adapter","GPU","GPU Type","GPU Backend","Frame Rate","CPU Time","GPU Time","GPU Memory","Buffer Memory","Texture Memory","Referenced Buffer Memory","Referenced Texture Memory","Swap Chain Texture"],gA=new WeakMap,mA=new WeakMap,kd=class{stats=new Map;getStats(e){return this.get(e)}get(e){this.stats.has(e)||this.stats.set(e,new Xe({id:e}));let r=this.stats.get(e);return e===dw&&pw(r,hw),r}},ja=new kd});var x,Je=E(()=>{_n();x=new Ce({id:"luma.gl"})});function St(t="id"){Hd[t]=Hd[t]||1;let e=Hd[t]++;return`${t}-${e}`}var Hd,Ci=E(()=>{Hd={}});function yw(t,e){let r={...e};for(let i in t)t[i]!==void 0&&(r[i]=t[i]);return r}function TA(t,e){let r=t.stats,i=!1;for(let c of e)r[c]||(t.get(c),i=!0);let n=Object.keys(r).length,o=yA.get(t);if(!i&&o?.orderedStatNames===e&&o.statCount===n)return;let s={},a=xA.get(e);a||(a=new Set(e),xA.set(e,a));for(let c of e)r[c]&&(s[c]=r[c]);for(let[c,l]of Object.entries(r))a.has(c)||(s[c]=l);for(let c of Object.keys(r))delete r[c];Object.assign(r,s),yA.set(t,{orderedStatNames:e,statCount:n})}function SA(t){return t.type==="webgl"?Aw:bw}function Xn(t){let e=t.userData[gw];return e?.enabled?e:null}function sr(){return globalThis.performance?.now?.()??Date.now()}function xw(t,e){let r=Xn(t);if(!(!r||!r.activeDefaultFramebufferAcquireDepth))switch(r.transientCanvasResourceCreates=(r.transientCanvasResourceCreates||0)+1,e){case"Texture":r.transientCanvasTextureCreates=(r.transientCanvasTextureCreates||0)+1;break;case"TextureView":r.transientCanvasTextureViewCreates=(r.transientCanvasTextureViewCreates||0)+1;break;case"Sampler":r.transientCanvasSamplerCreates=(r.transientCanvasSamplerCreates||0)+1;break;case"Framebuffer":r.transientCanvasFramebufferCreates=(r.transientCanvasFramebufferCreates||0)+1;break;default:break}}function Tw(t){let e=Object.getPrototypeOf(t);for(;e;){let r=Object.getPrototypeOf(e);if(!r||r===O.prototype)return Sw(e)||t[Symbol.toStringTag]||t.constructor.name;e=r}return t[Symbol.toStringTag]||t.constructor.name}function Sw(t){let e=Object.getOwnPropertyDescriptor(t,Symbol.toStringTag);return typeof e?.get=="function"?e.get.call(t):typeof e?.value=="string"?e.value:null}var gw,_A,bA,AA,mw,_w,bw,Aw,yA,xA,O,ge=E(()=>{Ci();gw="cpu-hotspot-profiler",_A="GPU Resource Counts",bA="Resource Counts",AA="GPU Time and Memory",mw=["Resources","Buffers","Textures","Samplers","TextureViews","Framebuffers","QuerySets","Shaders","RenderPipelines","ComputePipelines","PipelineLayouts","VertexArrays","RenderPasss","ComputePasss","CommandEncoders","CommandBuffers"],_w=["Resources","Buffers","Textures","Samplers","TextureViews","Framebuffers","QuerySets","Shaders","RenderPipelines","SharedRenderPipelines","ComputePipelines","PipelineLayouts","VertexArrays","RenderPasss","ComputePasss","CommandEncoders","CommandBuffers"],bw=mw.flatMap(t=>[`${t} Created`,`${t} Active`]),Aw=_w.flatMap(t=>[`${t} Created`,`${t} Active`]),yA=new WeakMap,xA=new WeakMap,O=class{static defaultProps={id:"undefined",handle:void 0,userData:void 0};toString(){return`${this[Symbol.toStringTag]||this.constructor.name}:"${this.id}"`}id;props;userData={};_device;destroyed=!1;allocatedBytes=0;allocatedBytesName=null;_attachedResources=new Set;constructor(e,r,i){if(!e)throw new Error("no device");this._device=e,this.props=yw(r,i);let n=this.props.id!=="undefined"?this.props.id:St(this[Symbol.toStringTag]);this.props.id=n,this.id=n,this.userData=this.props.userData||{},this.addStats()}destroy(){this.destroyed||this.destroyResource()}delete(){return this.destroy(),this}getProps(){return this.props}attachResource(e){this._attachedResources.add(e)}detachResource(e){this._attachedResources.delete(e)}destroyAttachedResource(e){this._attachedResources.delete(e)&&e.destroy()}destroyAttachedResources(){for(let e of this._attachedResources)e.destroy();this._attachedResources=new Set}destroyResource(){this.destroyed||(this.destroyAttachedResources(),this.removeStats(),this.destroyed=!0)}removeStats(){let e=Xn(this._device),r=e?sr():0,i=[this._device.statsManager.getStats(_A),this._device.statsManager.getStats(bA)],n=SA(this._device);for(let s of i)TA(s,n);let o=this.getStatsName();for(let s of i)s.get("Resources Active").decrementCount(),s.get(`${o}s Active`).decrementCount();e&&(e.statsBookkeepingCalls=(e.statsBookkeepingCalls||0)+1,e.statsBookkeepingTimeMs=(e.statsBookkeepingTimeMs||0)+(sr()-r))}trackAllocatedMemory(e,r=this.getStatsName()){let i=Xn(this._device),n=i?sr():0,o=this._device.statsManager.getStats(AA);this.allocatedBytes>0&&this.allocatedBytesName&&(o.get("GPU Memory").subtractCount(this.allocatedBytes),o.get(`${this.allocatedBytesName} Memory`).subtractCount(this.allocatedBytes)),o.get("GPU Memory").addCount(e),o.get(`${r} Memory`).addCount(e),i&&(i.statsBookkeepingCalls=(i.statsBookkeepingCalls||0)+1,i.statsBookkeepingTimeMs=(i.statsBookkeepingTimeMs||0)+(sr()-n)),this.allocatedBytes=e,this.allocatedBytesName=r}trackReferencedMemory(e,r=this.getStatsName()){this.trackAllocatedMemory(e,`Referenced ${r}`)}trackDeallocatedMemory(e=this.getStatsName()){if(this.allocatedBytes===0){this.allocatedBytesName=null;return}let r=Xn(this._device),i=r?sr():0,n=this._device.statsManager.getStats(AA);n.get("GPU Memory").subtractCount(this.allocatedBytes),n.get(`${this.allocatedBytesName||e} Memory`).subtractCount(this.allocatedBytes),r&&(r.statsBookkeepingCalls=(r.statsBookkeepingCalls||0)+1,r.statsBookkeepingTimeMs=(r.statsBookkeepingTimeMs||0)+(sr()-i)),this.allocatedBytes=0,this.allocatedBytesName=null}trackDeallocatedReferencedMemory(e=this.getStatsName()){this.trackDeallocatedMemory(`Referenced ${e}`)}addStats(){let e=this.getStatsName(),r=Xn(this._device),i=r?sr():0,n=[this._device.statsManager.getStats(_A),this._device.statsManager.getStats(bA)],o=SA(this._device);for(let s of n)TA(s,o);for(let s of n)s.get("Resources Created").incrementCount(),s.get("Resources Active").incrementCount(),s.get(`${e}s Created`).incrementCount(),s.get(`${e}s Active`).incrementCount();r&&(r.statsBookkeepingCalls=(r.statsBookkeepingCalls||0)+1,r.statsBookkeepingTimeMs=(r.statsBookkeepingTimeMs||0)+(sr()-i)),xw(this._device,e)}getStatsName(){return Tw(this)}}});var F,Wa=E(()=>{ge();F=class t extends O{static INDEX=16;static VERTEX=32;static UNIFORM=64;static STORAGE=128;static INDIRECT=256;static QUERY_RESOLVE=512;static MAP_READ=1;static MAP_WRITE=2;static COPY_SRC=4;static COPY_DST=8;get[Symbol.toStringTag](){return"Buffer"}usage;indexType;updateTimestamp;constructor(e,r){let i={...r};(r.usage||0)&t.INDEX&&!r.indexType&&(r.data instanceof Uint32Array?i.indexType="uint32":r.data instanceof Uint16Array?i.indexType="uint16":r.data instanceof Uint8Array&&(i.indexType="uint8")),delete i.data,super(e,i,t.defaultProps),this.usage=i.usage||0,this.indexType=i.indexType,this.updateTimestamp=e.incrementTimestamp()}clone(e){return this.device.createBuffer({...this.props,...e})}static DEBUG_DATA_MAX_LENGTH=32;debugData=new ArrayBuffer(0);_setDebugData(e,r,i){let n=null,o;ArrayBuffer.isView(e)?(n=e,o=e.buffer):o=e;let s=Math.min(e?e.byteLength:i,t.DEBUG_DATA_MAX_LENGTH);if(o===null)this.debugData=new ArrayBuffer(s);else{let a=Math.min(n?.byteOffset||0,o.byteLength),c=Math.max(0,o.byteLength-a),l=Math.min(s,c);this.debugData=new Uint8Array(o,a,l).slice().buffer}}static defaultProps={...O.defaultProps,usage:0,byteLength:0,byteOffset:0,data:null,indexType:"uint16",onMapped:void 0}}});var jd,ve,zd,Ga=E(()=>{jd=class{getDataTypeInfo(e){let[r,i,n]=zd[e],o=e.includes("norm"),s=!o&&!e.startsWith("float"),a=e.startsWith("s");return{signedType:r,primitiveType:i,byteLength:n,normalized:o,integer:s,signed:a}}getNormalizedDataType(e){let r=e;switch(r){case"uint8":return"unorm8";case"sint8":return"snorm8";case"uint16":return"unorm16";case"sint16":return"snorm16";default:return r}}alignTo(e,r){switch(r){case 1:return e;case 2:return e+e%2;default:return e+(4-e%4)%4}}getDataType(e){let r=ArrayBuffer.isView(e)?e.constructor:e;if(r===Uint8ClampedArray)return"uint8";let i=Object.values(zd).find(n=>r===n[4]);if(!i)throw new Error(r.name);return i[0]}getTypedArrayConstructor(e){let[,,,,r]=zd[e];return r}},ve=new jd,zd={uint8:["uint8","u32",1,!1,Uint8Array],sint8:["sint8","i32",1,!1,Int8Array],unorm8:["uint8","f32",1,!0,Uint8Array],snorm8:["sint8","f32",1,!0,Int8Array],uint16:["uint16","u32",2,!1,Uint16Array],sint16:["sint16","i32",2,!1,Int16Array],unorm16:["uint16","u32",2,!0,Uint16Array],snorm16:["sint16","i32",2,!0,Int16Array],float16:["float16","f16",2,!1,Uint16Array],float32:["float32","f32",4,!1,Float32Array],uint32:["uint32","u32",4,!1,Uint32Array],sint32:["sint32","i32",4,!1,Int32Array]}});var Wd,Vt,Xa=E(()=>{Ga();Wd=class{getVertexFormatInfo(e){let r;e.endsWith("-webgl")&&(e.replace("-webgl",""),r=!0);let[i,n]=e.split("x"),o=i,s=n?parseInt(n):1,a=ve.getDataTypeInfo(o),c={type:o,components:s,byteLength:a.byteLength*s,integer:a.integer,signed:a.signed,normalized:a.normalized};return r&&(c.webglOnly=!0),c}makeVertexFormat(e,r,i){let n=i?ve.getNormalizedDataType(e):e;switch(n){case"unorm8":return r===1?"unorm8":r===3?"unorm8x3-webgl":`${n}x${r}`;case"snorm8":return r===1?"snorm8":r===3?"snorm8x3-webgl":`${n}x${r}`;case"uint8":case"sint8":if(r===1||r===3)throw new Error(`size: ${r}`);return`${n}x${r}`;case"uint16":return r===1?"uint16":r===3?"uint16x3-webgl":`${n}x${r}`;case"sint16":return r===1?"sint16":r===3?"sint16x3-webgl":`${n}x${r}`;case"unorm16":return r===1?"unorm16":r===3?"unorm16x3-webgl":`${n}x${r}`;case"snorm16":return r===1?"snorm16":r===3?"snorm16x3-webgl":`${n}x${r}`;case"float16":if(r===1||r===3)throw new Error(`size: ${r}`);return`${n}x${r}`;default:return r===1?n:`${n}x${r}`}}getVertexFormatFromAttribute(e,r,i){if(!r||r>4)throw new Error(`size ${r}`);let n=r,o=ve.getDataType(e);return this.makeVertexFormat(o,n,i)}getCompatibleVertexFormat(e){let r;switch(e.primitiveType){case"f32":r="float32";break;case"i32":r="sint32";break;case"u32":r="uint32";break;case"f16":return e.components<=2?"float16x2":"float16x4"}return e.components===1?r:`${r}x${e.components}`}},Vt=new Wd});function Jd(t){let e=vA[t];if(!e)throw new Error(`Unsupported texture format ${t}`);return e}function CA(){return vA}var ye,$,Et,Ew,$a,Gd,Ka,Xd,Cw,$d,ar,Kd,Yd,Ya,EA,vw,Rw,vA,Qd=E(()=>{ye="texture-compression-bc",$="texture-compression-astc",Et="texture-compression-etc2",Ew="texture-compression-etc1-webgl",$a="texture-compression-pvrtc-webgl",Gd="texture-compression-atc-webgl",Ka="float32-renderable-webgl",Xd="float16-renderable-webgl",Cw="rgb9e5ufloat-renderable-webgl",$d="snorm8-renderable-webgl",ar="norm16-webgl",Kd="norm16-renderable-webgl",Yd="snorm16-renderable-webgl",Ya="float32-filterable",EA="float16-filterable-webgl";vw={r8unorm:{},rg8unorm:{},"rgb8unorm-webgl":{},rgba8unorm:{},"rgba8unorm-srgb":{},r8snorm:{render:$d},rg8snorm:{render:$d},"rgb8snorm-webgl":{},rgba8snorm:{render:$d},r8uint:{},rg8uint:{},rgba8uint:{},r8sint:{},rg8sint:{},rgba8sint:{},bgra8unorm:{},"bgra8unorm-srgb":{},r16unorm:{f:ar,render:Kd},rg16unorm:{f:ar,render:Kd},"rgb16unorm-webgl":{f:ar,render:!1},rgba16unorm:{f:ar,render:Kd},r16snorm:{f:ar,render:Yd},rg16snorm:{f:ar,render:Yd},"rgb16snorm-webgl":{f:ar,render:!1},rgba16snorm:{f:ar,render:Yd},r16uint:{},rg16uint:{},rgba16uint:{},r16sint:{},rg16sint:{},rgba16sint:{},r16float:{render:Xd,filter:"float16-filterable-webgl"},rg16float:{render:Xd,filter:EA},rgba16float:{render:Xd,filter:EA},r32uint:{},rg32uint:{},rgba32uint:{},r32sint:{},rg32sint:{},rgba32sint:{},r32float:{render:Ka,filter:Ya},rg32float:{render:!1,filter:Ya},"rgb32float-webgl":{render:Ka,filter:Ya},rgba32float:{render:Ka,filter:Ya},"rgba4unorm-webgl":{channels:"rgba",bitsPerChannel:[4,4,4,4],packed:!0},"rgb565unorm-webgl":{channels:"rgb",bitsPerChannel:[5,6,5,0],packed:!0},"rgb5a1unorm-webgl":{channels:"rgba",bitsPerChannel:[5,5,5,1],packed:!0},rgb9e5ufloat:{channels:"rgb",packed:!0,render:Cw},rg11b10ufloat:{channels:"rgb",bitsPerChannel:[11,11,10,0],packed:!0,p:1,render:Ka},rgb10a2unorm:{channels:"rgba",bitsPerChannel:[10,10,10,2],packed:!0,p:1},rgb10a2uint:{channels:"rgba",bitsPerChannel:[10,10,10,2],packed:!0,p:1},stencil8:{attachment:"stencil",bitsPerChannel:[8,0,0,0],dataType:"uint8"},depth16unorm:{attachment:"depth",bitsPerChannel:[16,0,0,0],dataType:"uint16"},depth24plus:{attachment:"depth",bitsPerChannel:[24,0,0,0],dataType:"uint32"},depth32float:{attachment:"depth",bitsPerChannel:[32,0,0,0],dataType:"float32"},"depth24plus-stencil8":{attachment:"depth-stencil",bitsPerChannel:[24,8,0,0],packed:!0},"depth32float-stencil8":{attachment:"depth-stencil",bitsPerChannel:[32,8,0,0],packed:!0}},Rw={"bc1-rgb-unorm-webgl":{f:ye},"bc1-rgb-unorm-srgb-webgl":{f:ye},"bc1-rgba-unorm":{f:ye},"bc1-rgba-unorm-srgb":{f:ye},"bc2-rgba-unorm":{f:ye},"bc2-rgba-unorm-srgb":{f:ye},"bc3-rgba-unorm":{f:ye},"bc3-rgba-unorm-srgb":{f:ye},"bc4-r-unorm":{f:ye},"bc4-r-snorm":{f:ye},"bc5-rg-unorm":{f:ye},"bc5-rg-snorm":{f:ye},"bc6h-rgb-ufloat":{f:ye},"bc6h-rgb-float":{f:ye},"bc7-rgba-unorm":{f:ye},"bc7-rgba-unorm-srgb":{f:ye},"etc2-rgb8unorm":{f:Et},"etc2-rgb8unorm-srgb":{f:Et},"etc2-rgb8a1unorm":{f:Et},"etc2-rgb8a1unorm-srgb":{f:Et},"etc2-rgba8unorm":{f:Et},"etc2-rgba8unorm-srgb":{f:Et},"eac-r11unorm":{f:Et},"eac-r11snorm":{f:Et},"eac-rg11unorm":{f:Et},"eac-rg11snorm":{f:Et},"astc-4x4-unorm":{f:$},"astc-4x4-unorm-srgb":{f:$},"astc-5x4-unorm":{f:$},"astc-5x4-unorm-srgb":{f:$},"astc-5x5-unorm":{f:$},"astc-5x5-unorm-srgb":{f:$},"astc-6x5-unorm":{f:$},"astc-6x5-unorm-srgb":{f:$},"astc-6x6-unorm":{f:$},"astc-6x6-unorm-srgb":{f:$},"astc-8x5-unorm":{f:$},"astc-8x5-unorm-srgb":{f:$},"astc-8x6-unorm":{f:$},"astc-8x6-unorm-srgb":{f:$},"astc-8x8-unorm":{f:$},"astc-8x8-unorm-srgb":{f:$},"astc-10x5-unorm":{f:$},"astc-10x5-unorm-srgb":{f:$},"astc-10x6-unorm":{f:$},"astc-10x6-unorm-srgb":{f:$},"astc-10x8-unorm":{f:$},"astc-10x8-unorm-srgb":{f:$},"astc-10x10-unorm":{f:$},"astc-10x10-unorm-srgb":{f:$},"astc-12x10-unorm":{f:$},"astc-12x10-unorm-srgb":{f:$},"astc-12x12-unorm":{f:$},"astc-12x12-unorm-srgb":{f:$},"pvrtc-rgb4unorm-webgl":{f:$a},"pvrtc-rgba4unorm-webgl":{f:$a},"pvrtc-rgb2unorm-webgl":{f:$a},"pvrtc-rgba2unorm-webgl":{f:$a},"etc1-rbg-unorm-webgl":{f:Ew},"atc-rgb-unorm-webgl":{f:Gd},"atc-rgba-unorm-webgl":{f:Gd},"atc-rgbai-unorm-webgl":{f:Gd}},vA={...vw,...Rw}});function Bw({format:t,width:e,height:r,depth:i,byteAlignment:n}){let o=me.getInfo(t),{bytesPerPixel:s,bytesPerBlock:a=s,blockWidth:c=1,blockHeight:l=1,compressed:f=!1}=o,u=f?Math.ceil(e/c):e,d=f?Math.ceil(r/l):r,h=u*a,p=Math.ceil(h/n)*n,g=d,m=p*g*i;return{bytesPerPixel:s,bytesPerRow:p,rowsPerImage:g,depthOrArrayLayers:i,bytesPerImage:p*g,byteLength:m}}function Ow(t){let e=Jd(t),r={format:t,create:e.f??!0,render:e.render??!0,filter:e.filter??!0,blend:e.blend??!0,store:e.store??!0},i=RA(t),n=t.startsWith("depth")||t.startsWith("stencil"),o=i?.signed,s=i?.integer,a=i?.webgl,c=!!i?.compressed;return r.render&&=!n&&!c,r.filter&&=!n&&!o&&!s&&!a,r}function RA(t){let e=Lw(t);if(me.isCompressed(t)){e.channels="rgb",e.components=3,e.bytesPerPixel=1,e.srgb=!1,e.compressed=!0,e.bytesPerBlock=Nw(t);let i=Fw(t);i&&(e.blockWidth=i.blockWidth,e.blockHeight=i.blockHeight)}let r=e.packed?null:Mw.exec(t);if(r){let[,i,n,o,s,a]=r,c=`${o}${n}`,l=ve.getDataTypeInfo(c),f=l.byteLength*8,u=i?.length??1,d=[f,u>=2?f:0,u>=3?f:0,u>=4?f:0];e={format:t,attachment:e.attachment,dataType:l.signedType,components:u,channels:i,integer:l.integer,signed:l.signed,normalized:l.normalized,bitsPerChannel:d,bytesPerPixel:l.byteLength*u,packed:e.packed,srgb:e.srgb},a==="-webgl"&&(e.webgl=!0),s==="-srgb"&&(e.srgb=!0)}return t.endsWith("-webgl")&&(e.webgl=!0),t.endsWith("-srgb")&&(e.srgb=!0),e}function Lw(t){let e=Jd(t),r=e.bytesPerPixel||1,i=e.bitsPerChannel||[8,8,8,8];return delete e.bitsPerChannel,delete e.bytesPerPixel,delete e.f,delete e.render,delete e.filter,delete e.blend,delete e.store,{...e,format:t,attachment:e.attachment||"color",channels:e.channels||"r",components:e.components||e.channels?.length||1,bytesPerPixel:r,bitsPerChannel:i,dataType:e.dataType||"uint8",srgb:e.srgb??!1,packed:e.packed??!1,webgl:e.webgl??!1,integer:e.integer??!1,signed:e.signed??!1,normalized:e.normalized??!1,compressed:e.compressed??!1}}function Fw(t){let r=/.*-(\d+)x(\d+)-.*/.exec(t);if(r){let[,i,n]=r;return{blockWidth:Number(i),blockHeight:Number(n)}}return t.startsWith("bc")||t.startsWith("etc1")||t.startsWith("etc2")||t.startsWith("eac")||t.startsWith("atc")?{blockWidth:4,blockHeight:4}:t.startsWith("pvrtc-rgb4")||t.startsWith("pvrtc-rgba4")?{blockWidth:4,blockHeight:4}:t.startsWith("pvrtc-rgb2")||t.startsWith("pvrtc-rgba2")?{blockWidth:8,blockHeight:4}:null}function Nw(t){return t.startsWith("bc1")||t.startsWith("bc4")||t.startsWith("etc1")||t.startsWith("etc2-rgb8")||t.startsWith("etc2-rgb8a1")||t.startsWith("eac-r11")||t==="atc-rgb-unorm-webgl"?8:t.startsWith("bc2")||t.startsWith("bc3")||t.startsWith("bc5")||t.startsWith("bc6h")||t.startsWith("bc7")||t.startsWith("etc2-rgba8")||t.startsWith("eac-rg11")||t.startsWith("astc")||t==="atc-rgba-unorm-webgl"||t==="atc-rgbai-unorm-webgl"?16:t.startsWith("pvrtc")?8:16}var Mw,Pw,ww,Iw,Zd,me,Ja=E(()=>{Ga();Qd();Mw=/^(r|rg|rgb|rgba|bgra)([0-9]*)([a-z]*)(-srgb)?(-webgl)?$/,Pw=["rgb","rgba","bgra"],ww=["depth","stencil"],Iw=["bc1","bc2","bc3","bc4","bc5","bc6","bc7","etc1","etc2","eac","atc","astc","pvrtc"],Zd=class{isColor(e){return Pw.some(r=>e.startsWith(r))}isDepthStencil(e){return ww.some(r=>e.startsWith(r))}isCompressed(e){return Iw.some(r=>e.startsWith(r))}getInfo(e){return RA(e)}getCapabilities(e){return Ow(e)}computeMemoryLayout(e){return Bw(e)}},me=new Zd});function vi(t){return typeof ImageData<"u"&&t instanceof ImageData||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement||typeof VideoFrame<"u"&&t instanceof VideoFrame||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas}function $n(t){if(typeof ImageData<"u"&&t instanceof ImageData||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)return{width:t.width,height:t.height};if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement)return{width:t.naturalWidth,height:t.naturalHeight};if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)return{width:t.videoWidth,height:t.videoHeight};if(typeof VideoFrame<"u"&&t instanceof VideoFrame)return{width:t.displayWidth,height:t.displayHeight};throw new Error("Unknown image type")}var qd=E(()=>{});function Dw(t,e){let r=eh(t),i=e.map(eh).filter(n=>n!==void 0);return[r,...i].filter(n=>n!==void 0)}function eh(t){if(t!==void 0){if(t===null||typeof t=="string"||typeof t=="number"||typeof t=="boolean")return t;if(t instanceof Error)return t.message;if(Array.isArray(t))return t.map(eh);if(typeof t=="object"){if(Uw(t)){let e=String(t);if(e!=="[object Object]")return e}return kw(t)?Vw(t):t.constructor?.name||"Object"}return String(t)}}function Uw(t){return"toString"in t&&typeof t.toString=="function"&&t.toString!==Object.prototype.toString}function kw(t){return"message"in t&&"type"in t}function Vw(t){let e=typeof t.type=="string"?t.type:"message",r=typeof t.message=="string"?t.message:"",i=typeof t.lineNum=="number"?t.lineNum:null,n=typeof t.linePos=="number"?t.linePos:null,o=i!==null&&n!==null?` @ ${i}:${n}`:i!==null?` @ ${i}`:"";return`${e}${o}: ${r}`.trim()}function Hw(t,e){return t!=null?!!t:e!==void 0?e!=="production":!1}function zw(){return Hw(x.get("debug"),jw())}function jw(){let t=globalThis.process;if(t?.env)return t.env.NODE_ENV}var Kn,Yn,ot,th=E(()=>{Vd();Je();Ci();Wa();Xa();Ja();qd();Qd();Kn=class{};Yn=class{features;disabledFeatures;constructor(e=[],r){this.features=new Set(e),this.disabledFeatures=r||{}}*[Symbol.iterator](){yield*this.features}has(e){return!this.disabledFeatures?.[e]&&this.features.has(e)}},ot=class t{static defaultProps={id:null,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,createCanvasContext:void 0,webgl:{},onError:(e,r)=>{},onResize:(e,r)=>{let[i,n]=e.getDevicePixelSize();x.log(1,`${e} resized => ${i}x${n}px`)()},onPositionChange:(e,r)=>{let[i,n]=e.getPosition();x.log(1,`${e} repositioned => ${i},${n}`)()},onVisibilityChange:e=>x.log(1,`${e} Visibility changed ${e.isVisible}`)(),onDevicePixelRatioChange:(e,r)=>x.log(1,`${e} DPR changed ${r.oldRatio} => ${e.devicePixelRatio}`)(),debug:zw(),debugGPUTime:!1,debugShaders:x.get("debug-shaders")||void 0,debugFramebuffers:!!x.get("debug-framebuffers"),debugFactories:!!x.get("debug-factories"),debugWebGL:!!x.get("debug-webgl"),debugSpectorJS:void 0,debugSpectorJSUrl:void 0,_reuseDevices:!1,_requestMaxLimits:!0,_cacheShaders:!0,_destroyShaders:!1,_cachePipelines:!0,_sharePipelines:!0,_destroyPipelines:!1,_initializeFeatures:!0,_disabledFeatures:{"compilation-status-async-webgl":!0},_handle:void 0};get[Symbol.toStringTag](){return"Device"}toString(){return`Device(${this.id})`}id;props;userData={};statsManager=ja;_factories={};timestamp=0;_reused=!1;_moduleData={};_textureCaps={};_debugGPUTimeQuery=null;constructor(e){this.props={...t.defaultProps,...e},this.id=this.props.id||St(this[Symbol.toStringTag].toLowerCase())}getVertexFormatInfo(e){return Vt.getVertexFormatInfo(e)}isVertexFormatSupported(e){return!0}getTextureFormatInfo(e){return me.getInfo(e)}getTextureFormatCapabilities(e){let r=this._textureCaps[e];if(!r){let i=this._getDeviceTextureFormatCapabilities(e);r=this._getDeviceSpecificTextureFormatCapabilities(i),this._textureCaps[e]=r}return r}getMipLevelCount(e,r,i=1){let n=Math.max(e,r,i);return 1+Math.floor(Math.log2(n))}isExternalImage(e){return vi(e)}getExternalImageSize(e){return $n(e)}isTextureFormatSupported(e){return this.getTextureFormatCapabilities(e).create}isTextureFormatFilterable(e){return this.getTextureFormatCapabilities(e).filter}isTextureFormatRenderable(e){return this.getTextureFormatCapabilities(e).render}isTextureFormatCompressed(e){return me.isCompressed(e)}getSupportedCompressedTextureFormats(){let e=[];for(let r of Object.keys(CA()))this.isTextureFormatCompressed(r)&&this.isTextureFormatSupported(r)&&e.push(r);return e}pushDebugGroup(e){this.commandEncoder.pushDebugGroup(e)}popDebugGroup(){this.commandEncoder?.popDebugGroup()}insertDebugMarker(e){this.commandEncoder?.insertDebugMarker(e)}loseDevice(){return!1}incrementTimestamp(){return this.timestamp++}reportError(e,r,...i){if(!this.props.onError(e,r)){let o=Dw(r,i);return x.error(this.type==="webgl"?"%cWebGL":"%cWebGPU","color: white; background: red; padding: 2px 6px; border-radius: 3px;",e.message,...o)}return()=>{}}debug(){if(this.props.debug)debugger;else x.once(0,`'Type luma.log.set({debug: true}) in console to enable debug breakpoints',
or create a device with the 'debug: true' prop.`)()}getDefaultCanvasContext(){if(!this.canvasContext)throw new Error("Device has no default CanvasContext. See props.createCanvasContext");return this.canvasContext}createFence(){throw new Error("createFence() not implemented")}beginRenderPass(e){return this.commandEncoder.beginRenderPass(e)}beginComputePass(e){return this.commandEncoder.beginComputePass(e)}generateMipmapsWebGPU(e){throw new Error("not implemented")}_createSharedRenderPipelineWebGL(e){throw new Error("_createSharedRenderPipelineWebGL() not implemented")}_createBindGroupLayoutWebGPU(e,r){throw new Error("_createBindGroupLayoutWebGPU() not implemented")}_createBindGroupWebGPU(e,r,i,n,o){throw new Error("_createBindGroupWebGPU() not implemented")}_supportsDebugGPUTime(){return this.features.has("timestamp-query")&&!!(this.props.debug||this.props.debugGPUTime)}_enableDebugGPUTime(e=256){if(!this._supportsDebugGPUTime())return null;if(this._debugGPUTimeQuery)return this._debugGPUTimeQuery;try{this._debugGPUTimeQuery=this.createQuerySet({type:"timestamp",count:e}),this.commandEncoder=this.createCommandEncoder({id:this.commandEncoder.props.id,timeProfilingQuerySet:this._debugGPUTimeQuery})}catch{this._debugGPUTimeQuery=null}return this._debugGPUTimeQuery}_disableDebugGPUTime(){this._debugGPUTimeQuery&&(this.commandEncoder.getTimeProfilingQuerySet()===this._debugGPUTimeQuery&&(this.commandEncoder=this.createCommandEncoder({id:this.commandEncoder.props.id})),this._debugGPUTimeQuery.destroy(),this._debugGPUTimeQuery=null)}_isDebugGPUTimeEnabled(){return this._debugGPUTimeQuery!==null}getCanvasContext(){return this.getDefaultCanvasContext()}readPixelsToArrayWebGL(e,r){throw new Error("not implemented")}readPixelsToBufferWebGL(e,r){throw new Error("not implemented")}setParametersWebGL(e){throw new Error("not implemented")}getParametersWebGL(e){throw new Error("not implemented")}withParametersWebGL(e,r){throw new Error("not implemented")}clearWebGL(e){throw new Error("not implemented")}resetWebGL(){throw new Error("not implemented")}getModuleData(e){return this._moduleData[e]||={},this._moduleData[e]}static _getCanvasContextProps(e){return e.createCanvasContext===!0?{}:e.createCanvasContext}_getDeviceTextureFormatCapabilities(e){let r=me.getCapabilities(e),i=o=>(typeof o=="string"?this.features.has(o):o)??!0,n=i(r.create);return{format:e,create:n,render:n&&i(r.render),filter:n&&i(r.filter),blend:n&&i(r.blend),store:n&&i(r.store)}}_normalizeBufferProps(e){(e instanceof ArrayBuffer||ArrayBuffer.isView(e))&&(e={data:e});let r={...e};if((e.usage||0)&F.INDEX&&(e.indexType||(e.data instanceof Uint32Array?r.indexType="uint32":e.data instanceof Uint16Array?r.indexType="uint16":e.data instanceof Uint8Array&&(r.data=new Uint16Array(e.data),r.indexType="uint16")),!r.indexType))throw new Error("indices buffer content must be of type uint16 or uint32");return r}}});var Ww,MA,rh,Ri,PA=E(()=>{th();Vd();Je();Ww="set luma.log.level=1 (or higher) to trace rendering",MA="No matching device found. Ensure `@luma.gl/webgl` and/or `@luma.gl/webgpu` modules are imported.",rh=class t{static defaultProps={...ot.defaultProps,type:"best-available",adapters:void 0,waitForPageLoad:!0};stats=ja;log=x;VERSION="9.3.3";spector;preregisteredAdapters=new Map;constructor(){if(globalThis.luma){if(globalThis.luma.VERSION!==this.VERSION)throw x.error(`Found luma.gl ${globalThis.luma.VERSION} while initialzing ${this.VERSION}`)(),x.error("'yarn why @luma.gl/core' can help identify the source of the conflict")(),new Error("luma.gl - multiple versions detected: see console log");x.error("This version of luma.gl has already been initialized")()}x.log(1,`${this.VERSION} - ${Ww}`)(),globalThis.luma=this}async createDevice(e={}){let r={...t.defaultProps,...e},i=this.selectAdapter(r.type,r.adapters);if(!i)throw new Error(MA);return r.waitForPageLoad&&await i.pageLoaded,await i.create(r)}async attachDevice(e,r){let i=this._getTypeFromHandle(e,r.adapters),n=i&&this.selectAdapter(i,r.adapters);if(!n)throw new Error(MA);return await n?.attach?.(e,r)}registerAdapters(e){for(let r of e)this.preregisteredAdapters.set(r.type,r)}getSupportedAdapters(e=[]){let r=this._getAdapterMap(e);return Array.from(r).map(([,i])=>i).filter(i=>i.isSupported?.()).map(i=>i.type)}getBestAvailableAdapterType(e=[]){let r=["webgpu","webgl","null"],i=this._getAdapterMap(e);for(let n of r)if(i.get(n)?.isSupported?.())return n;return null}selectAdapter(e,r=[]){let i=e;e==="best-available"&&(i=this.getBestAvailableAdapterType(r));let n=this._getAdapterMap(r);return i&&n.get(i)||null}enforceWebGL2(e=!0,r=[]){let n=this._getAdapterMap(r).get("webgl");n||x.warn("enforceWebGL2: webgl adapter not found")(),n?.enforceWebGL2?.(e)}setDefaultDeviceProps(e){Object.assign(t.defaultProps,e)}_getAdapterMap(e=[]){let r=new Map(this.preregisteredAdapters);for(let i of e)r.set(i.type,i);return r}_getTypeFromHandle(e,r=[]){return e instanceof WebGL2RenderingContext?"webgl":typeof GPUDevice<"u"&&e instanceof GPUDevice||e?.queue?"webgpu":e===null?"null":(e instanceof WebGLRenderingContext?x.warn("WebGL1 is not supported",e)():x.warn("Unknown handle type",e)(),null)}},Ri=new rh});function $w(){return Qa||(Xw()||typeof window>"u"?Qa=Promise.resolve():Qa=new Promise(t=>window.addEventListener("load",()=>t()))),Qa}var Jn,Gw,Xw,Qa,wA=E(()=>{qt();Jn=class{get pageLoaded(){return $w()}},Gw=Ee()&&typeof document<"u",Xw=()=>Gw&&document.readyState==="complete",Qa=null});var Za,IA=E(()=>{Za=class{props;_resizeObserver;_intersectionObserver;_observeDevicePixelRatioTimeout=null;_observeDevicePixelRatioMediaQuery=null;_handleDevicePixelRatioChange=()=>this._refreshDevicePixelRatio();_trackPositionInterval=null;_started=!1;get started(){return this._started}constructor(e){this.props=e}start(){if(!(this._started||!this.props.canvas)){this._started=!0,this._intersectionObserver||=new IntersectionObserver(e=>this.props.onIntersection(e)),this._resizeObserver||=new ResizeObserver(e=>this.props.onResize(e)),this._intersectionObserver.observe(this.props.canvas);try{this._resizeObserver.observe(this.props.canvas,{box:"device-pixel-content-box"})}catch{this._resizeObserver.observe(this.props.canvas,{box:"content-box"})}this._observeDevicePixelRatioTimeout=setTimeout(()=>this._refreshDevicePixelRatio(),0),this.props.trackPosition&&this._trackPosition()}}stop(){this._started&&(this._started=!1,this._observeDevicePixelRatioTimeout&&(clearTimeout(this._observeDevicePixelRatioTimeout),this._observeDevicePixelRatioTimeout=null),this._observeDevicePixelRatioMediaQuery&&(this._observeDevicePixelRatioMediaQuery.removeEventListener("change",this._handleDevicePixelRatioChange),this._observeDevicePixelRatioMediaQuery=null),this._trackPositionInterval&&(clearInterval(this._trackPositionInterval),this._trackPositionInterval=null),this._resizeObserver?.disconnect(),this._intersectionObserver?.disconnect())}_refreshDevicePixelRatio(){this._started&&(this.props.onDevicePixelRatioChange(),this._observeDevicePixelRatioMediaQuery?.removeEventListener("change",this._handleDevicePixelRatioChange),this._observeDevicePixelRatioMediaQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this._observeDevicePixelRatioMediaQuery.addEventListener("change",this._handleDevicePixelRatioChange,{once:!0}))}_trackPosition(e=100){this._trackPositionInterval||(this._trackPositionInterval=setInterval(()=>{this._started?this.props.onPositionChange():this._trackPositionInterval&&(clearInterval(this._trackPositionInterval),this._trackPositionInterval=null)},e))}}});function BA(){let t,e;return{promise:new Promise((i,n)=>{t=i,e=n}),resolve:t,reject:e}}var OA=E(()=>{});function ih(t,e){if(!t){let r=new Error(e??"luma.gl assertion failed.");throw Error.captureStackTrace?.(r,ih),r}}function kr(t,e){return ih(t,e),t}var nh=E(()=>{});function Kw(t){if(typeof t=="string"){let e=document.getElementById(t);if(!e)throw new Error(`${t} is not an HTML element`);return e}return t||document.body}function Yw(t){let e=document.getElementById(t);if(!cr.isHTMLCanvas(e))throw new Error("Object is not a canvas element");return e}function Jw(t){let{width:e,height:r}=t,i=document.createElement("canvas");i.id=St("lumagl-auto-created-canvas"),i.width=e||1,i.height=r||1,i.style.width=Number.isFinite(e)?`${e}px`:"100%",i.style.height=Number.isFinite(r)?`${r}px`:"100%",t?.visible||(i.style.visibility="hidden");let n=Kw(t?.container||null);return n.insertBefore(i,n.firstChild),i}function Qw(t,e,r,i,n){let o=t,s=LA(o[0],e,r),a=FA(o[1],e,i,n),c=LA(o[0]+1,e,r),l=c===r-1?c:c-1;c=FA(o[1]+1,e,i,n);let f;return n?(c=c===0?c:c+1,f=a,a=c):f=c===i-1?c:c-1,{x:s,y:a,width:Math.max(l-s+1,1),height:Math.max(f-a+1,1)}}function LA(t,e,r){return Math.min(Math.round(t*e),r-1)}function FA(t,e,r,i){return i?Math.max(0,r-1-Math.round(t*e)):Math.min(Math.round(t*e),r-1)}var cr,oh=E(()=>{qt();IA();Ci();OA();nh();cr=class t{static isHTMLCanvas(e){return typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement}static isOffscreenCanvas(e){return typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas}static defaultProps={id:void 0,canvas:null,width:800,height:600,useDevicePixels:!0,autoResize:!0,container:null,visible:!0,alphaMode:"opaque",colorSpace:"srgb",trackPosition:!1};id;props;canvas;htmlCanvas;offscreenCanvas;type;initialized;isInitialized=!1;isVisible=!0;cssWidth;cssHeight;devicePixelRatio;devicePixelWidth;devicePixelHeight;drawingBufferWidth;drawingBufferHeight;_initializedResolvers=BA();_canvasObserver;_position=[0,0];destroyed=!1;_needsDrawingBufferResize=!0;toString(){return`${this[Symbol.toStringTag]}(${this.id})`}constructor(e){this.props={...t.defaultProps,...e},e=this.props,this.initialized=this._initializedResolvers.promise,Ee()?e.canvas?typeof e.canvas=="string"?this.canvas=Yw(e.canvas):this.canvas=e.canvas:this.canvas=Jw(e):this.canvas={width:e.width||1,height:e.height||1},t.isHTMLCanvas(this.canvas)?(this.id=e.id||this.canvas.id,this.type="html-canvas",this.htmlCanvas=this.canvas):t.isOffscreenCanvas(this.canvas)?(this.id=e.id||"offscreen-canvas",this.type="offscreen-canvas",this.offscreenCanvas=this.canvas):(this.id=e.id||"node-canvas-context",this.type="node"),this.cssWidth=this.htmlCanvas?.clientWidth||this.canvas.width,this.cssHeight=this.htmlCanvas?.clientHeight||this.canvas.height,this.devicePixelWidth=this.canvas.width,this.devicePixelHeight=this.canvas.height,this.drawingBufferWidth=this.canvas.width,this.drawingBufferHeight=this.canvas.height,this.devicePixelRatio=globalThis.devicePixelRatio||1,this._position=[0,0],this._canvasObserver=new Za({canvas:this.htmlCanvas,trackPosition:this.props.trackPosition,onResize:r=>this._handleResize(r),onIntersection:r=>this._handleIntersection(r),onDevicePixelRatioChange:()=>this._observeDevicePixelRatio(),onPositionChange:()=>this.updatePosition()})}destroy(){this.destroyed||(this.destroyed=!0,this._stopObservers(),this.device=null)}setProps(e){return"useDevicePixels"in e&&(this.props.useDevicePixels=e.useDevicePixels||!1,this._updateDrawingBufferSize()),this}getCurrentFramebuffer(e){return this._resizeDrawingBufferIfNeeded(),this._getCurrentFramebuffer(e)}getCSSSize(){return[this.cssWidth,this.cssHeight]}getPosition(){return this._position}getDevicePixelSize(){return[this.devicePixelWidth,this.devicePixelHeight]}getDrawingBufferSize(){return[this.drawingBufferWidth,this.drawingBufferHeight]}getMaxDrawingBufferSize(){let e=this.device.limits.maxTextureDimension2D;return[e,e]}setDrawingBufferSize(e,r){e=Math.floor(e),r=Math.floor(r),!(this.drawingBufferWidth===e&&this.drawingBufferHeight===r)&&(this.drawingBufferWidth=e,this.drawingBufferHeight=r,this._needsDrawingBufferResize=!0)}getDevicePixelRatio(){return typeof window<"u"&&window.devicePixelRatio||1}cssToDevicePixels(e,r=!0){let i=this.cssToDeviceRatio(),[n,o]=this.getDrawingBufferSize();return Qw(e,i,n,o,r)}getPixelSize(){return this.getDevicePixelSize()}getAspect(){let[e,r]=this.getDrawingBufferSize();return e>0&&r>0?e/r:1}cssToDeviceRatio(){try{let[e]=this.getDrawingBufferSize(),[r]=this.getCSSSize();return r?e/r:1}catch{return 1}}resize(e){this.setDrawingBufferSize(e.width,e.height)}_setAutoCreatedCanvasId(e){this.htmlCanvas?.id==="lumagl-auto-created-canvas"&&(this.htmlCanvas.id=e)}_startObservers(){this.destroyed||this._canvasObserver.start()}_stopObservers(){this._canvasObserver.stop()}_handleIntersection(e){if(this.destroyed)return;let r=e.find(n=>n.target===this.canvas);if(!r)return;let i=r.isIntersecting;this.isVisible!==i&&(this.isVisible=i,this.device.props.onVisibilityChange(this))}_handleResize(e){if(this.destroyed)return;let r=e.find(l=>l.target===this.canvas);if(!r)return;let i=kr(r.contentBoxSize?.[0]);this.cssWidth=i.inlineSize,this.cssHeight=i.blockSize;let n=this.getDevicePixelSize(),o=r.devicePixelContentBoxSize?.[0]?.inlineSize||i.inlineSize*devicePixelRatio,s=r.devicePixelContentBoxSize?.[0]?.blockSize||i.blockSize*devicePixelRatio,[a,c]=this.getMaxDrawingBufferSize();this.devicePixelWidth=Math.max(1,Math.min(o,a)),this.devicePixelHeight=Math.max(1,Math.min(s,c)),this._updateDrawingBufferSize(),this.device.props.onResize(this,{oldPixelSize:n})}_updateDrawingBufferSize(){if(this.props.autoResize)if(typeof this.props.useDevicePixels=="number"){let e=this.props.useDevicePixels;this.setDrawingBufferSize(this.cssWidth*e,this.cssHeight*e)}else this.props.useDevicePixels?this.setDrawingBufferSize(this.devicePixelWidth,this.devicePixelHeight):this.setDrawingBufferSize(this.cssWidth,this.cssHeight);this._initializedResolvers.resolve(),this.isInitialized=!0,this.updatePosition()}_resizeDrawingBufferIfNeeded(){this._needsDrawingBufferResize&&(this._needsDrawingBufferResize=!1,(this.drawingBufferWidth!==this.canvas.width||this.drawingBufferHeight!==this.canvas.height)&&(this.canvas.width=this.drawingBufferWidth,this.canvas.height=this.drawingBufferHeight,this._configureDevice()))}_observeDevicePixelRatio(){if(this.destroyed||!this._canvasObserver.started)return;let e=this.devicePixelRatio;this.devicePixelRatio=window.devicePixelRatio,this.updatePosition(),this.device.props.onDevicePixelRatioChange?.(this,{oldRatio:e})}updatePosition(){if(this.destroyed)return;let e=this.htmlCanvas?.getBoundingClientRect();if(e){let r=[e.left,e.top];if(this._position??=r,r[0]!==this._position[0]||r[1]!==this._position[1]){let n=this._position;this._position=r,this.device.props.onPositionChange?.(this,{oldPosition:n})}}}}});var Qn,NA=E(()=>{oh();Qn=class extends cr{static defaultProps=cr.defaultProps}});var Zn,DA=E(()=>{oh();Zn=class extends cr{}});var Re,sh=E(()=>{ge();Re=class t extends O{static defaultProps={...O.defaultProps,type:"color-sampler",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"nearest",minFilter:"nearest",mipmapFilter:"none",lodMinClamp:0,lodMaxClamp:32,compare:"less-equal",maxAnisotropy:1};get[Symbol.toStringTag](){return"Sampler"}constructor(e,r){r=t.normalizeProps(e,r),super(e,r,t.defaultProps)}static normalizeProps(e,r){return r}}});var Zw,N,ah=E(()=>{ge();sh();Je();Ja();Zw={"1d":"1d","2d":"2d","2d-array":"2d",cube:"2d","cube-array":"2d","3d":"3d"},N=class t extends O{static SAMPLE=4;static STORAGE=8;static RENDER=16;static COPY_SRC=1;static COPY_DST=2;static TEXTURE=4;static RENDER_ATTACHMENT=16;dimension;baseDimension;format;width;height;depth;mipLevels;samples;byteAlignment;ready=Promise.resolve(this);isReady=!0;updateTimestamp;get[Symbol.toStringTag](){return"Texture"}toString(){return`Texture(${this.id},${this.format},${this.width}x${this.height})`}constructor(e,r,i){if(r=t.normalizeProps(e,r),super(e,r,t.defaultProps),this.dimension=this.props.dimension,this.baseDimension=Zw[this.dimension],this.format=this.props.format,this.width=this.props.width,this.height=this.props.height,this.depth=this.props.depth,this.mipLevels=this.props.mipLevels,this.samples=this.props.samples||1,this.dimension==="cube"&&(this.depth=6),this.props.width===void 0||this.props.height===void 0)if(e.isExternalImage(r.data)){let n=e.getExternalImageSize(r.data);this.width=n?.width||1,this.height=n?.height||1}else this.width=1,this.height=1,(this.props.width===void 0||this.props.height===void 0)&&x.warn(`${this} created with undefined width or height. This is deprecated. Use DynamicTexture instead.`)();this.byteAlignment=i?.byteAlignment||1,this.updateTimestamp=e.incrementTimestamp()}clone(e){return this.device.createTexture({...this.props,...e})}setSampler(e){this.sampler=e instanceof Re?e:this.device.createSampler(e)}copyImageData(e){let{data:r,depth:i,...n}=e;this.writeData(r,{...n,depthOrArrayLayers:n.depthOrArrayLayers??i})}computeMemoryLayout(e={}){let r=this._normalizeTextureReadOptions(e),{width:i=this.width,height:n=this.height,depthOrArrayLayers:o=this.depth}=r,{format:s,byteAlignment:a}=this;return me.computeMemoryLayout({format:s,width:i,height:n,depth:o,byteAlignment:a})}readBuffer(e,r){throw new Error("readBuffer not implemented")}readDataAsync(e){throw new Error("readBuffer not implemented")}writeBuffer(e,r){throw new Error("readBuffer not implemented")}writeData(e,r){throw new Error("readBuffer not implemented")}readDataSyncWebGL(e){throw new Error("readDataSyncWebGL not available")}generateMipmapsWebGL(){throw new Error("generateMipmapsWebGL not available")}static normalizeProps(e,r){let i={...r},{width:n,height:o}=i;return typeof n=="number"&&(i.width=Math.max(1,Math.ceil(n))),typeof o=="number"&&(i.height=Math.max(1,Math.ceil(o))),i}_initializeData(e){this.device.isExternalImage(e)?this.copyExternalImage({image:e,width:this.width,height:this.height,depth:this.depth,mipLevel:0,x:0,y:0,z:0,aspect:"all",colorSpace:"srgb",premultipliedAlpha:!1,flipY:!1}):e&&this.copyImageData({data:e,mipLevel:0,x:0,y:0,z:0,aspect:"all"})}_normalizeCopyImageDataOptions(e){let{data:r,depth:i,...n}=e,o=this._normalizeTextureWriteOptions({...n,depthOrArrayLayers:n.depthOrArrayLayers??i});return{data:r,depth:o.depthOrArrayLayers,...o}}_normalizeCopyExternalImageOptions(e){let r=t._omitUndefined(e),i=r.mipLevel??0,n=this._getMipLevelSize(i),o=this.device.getExternalImageSize(e.image),s={...t.defaultCopyExternalImageOptions,...n,...o,...r};return s.width=Math.min(s.width,n.width-s.x),s.height=Math.min(s.height,n.height-s.y),s.depth=Math.min(s.depth,n.depthOrArrayLayers-s.z),s}_normalizeTextureReadOptions(e){let r=t._omitUndefined(e),i=r.mipLevel??0,n=this._getMipLevelSize(i),o={...t.defaultTextureReadOptions,...n,...r};return o.width=Math.min(o.width,n.width-o.x),o.height=Math.min(o.height,n.height-o.y),o.depthOrArrayLayers=Math.min(o.depthOrArrayLayers,n.depthOrArrayLayers-o.z),o}_getSupportedColorReadOptions(e){let r=this._normalizeTextureReadOptions(e),i=me.getInfo(this.format);switch(this._validateColorReadAspect(r),this._validateColorReadFormat(i),this.dimension){case"2d":case"cube":case"cube-array":case"2d-array":case"3d":return r;default:throw new Error(`${this} color readback does not support ${this.dimension} textures`)}}_validateColorReadAspect(e){if(e.aspect!=="all")throw new Error(`${this} color readback only supports aspect 'all'`)}_validateColorReadFormat(e){if(e.compressed)throw new Error(`${this} color readback does not support compressed formats (${this.format})`);switch(e.attachment){case"color":return;case"depth":throw new Error(`${this} color readback does not support depth formats (${this.format})`);case"stencil":throw new Error(`${this} color readback does not support stencil formats (${this.format})`);case"depth-stencil":throw new Error(`${this} color readback does not support depth-stencil formats (${this.format})`);default:throw new Error(`${this} color readback does not support format ${this.format}`)}}_normalizeTextureWriteOptions(e){let r=t._omitUndefined(e),i=r.mipLevel??0,n=this._getMipLevelSize(i),o={...t.defaultTextureWriteOptions,...n,...r};o.width=Math.min(o.width,n.width-o.x),o.height=Math.min(o.height,n.height-o.y),o.depthOrArrayLayers=Math.min(o.depthOrArrayLayers,n.depthOrArrayLayers-o.z);let s=me.computeMemoryLayout({format:this.format,width:o.width,height:o.height,depth:o.depthOrArrayLayers,byteAlignment:this.byteAlignment}),a=s.bytesPerPixel*o.width;if(o.bytesPerRow=r.bytesPerRow??s.bytesPerRow,o.rowsPerImage=r.rowsPerImage??o.height,o.bytesPerRow<a)throw new Error(`bytesPerRow (${o.bytesPerRow}) must be at least ${a} for ${this.format}`);if(o.rowsPerImage<o.height)throw new Error(`rowsPerImage (${o.rowsPerImage}) must be at least ${o.height} for ${this.format}`);let c=this.device.getTextureFormatInfo(this.format).bytesPerPixel;if(c&&o.bytesPerRow%c!==0)throw new Error(`bytesPerRow (${o.bytesPerRow}) must be a multiple of bytesPerPixel (${c}) for ${this.format}`);return o}_getMipLevelSize(e){let r=Math.max(1,this.width>>e),i=this.baseDimension==="1d"?1:Math.max(1,this.height>>e),n=this.dimension==="3d"?Math.max(1,this.depth>>e):this.depth;return{width:r,height:i,depthOrArrayLayers:n}}getAllocatedByteLength(){let e=0;for(let r=0;r<this.mipLevels;r++){let{width:i,height:n,depthOrArrayLayers:o}=this._getMipLevelSize(r);e+=me.computeMemoryLayout({format:this.format,width:i,height:n,depth:o,byteAlignment:1}).byteLength}return e*this.samples}static _omitUndefined(e){return Object.fromEntries(Object.entries(e).filter(([,r])=>r!==void 0))}static defaultProps={...O.defaultProps,data:null,dimension:"2d",format:"rgba8unorm",usage:t.SAMPLE|t.RENDER|t.COPY_DST,width:void 0,height:void 0,depth:1,mipLevels:1,samples:void 0,sampler:{},view:void 0};static defaultCopyDataOptions={data:void 0,byteOffset:0,bytesPerRow:void 0,rowsPerImage:void 0,width:void 0,height:void 0,depthOrArrayLayers:void 0,depth:1,mipLevel:0,x:0,y:0,z:0,aspect:"all"};static defaultCopyExternalImageOptions={image:void 0,sourceX:0,sourceY:0,width:void 0,height:void 0,depth:1,mipLevel:0,x:0,y:0,z:0,aspect:"all",colorSpace:"srgb",premultipliedAlpha:!1,flipY:!1};static defaultTextureReadOptions={x:0,y:0,z:0,width:void 0,height:void 0,depthOrArrayLayers:1,mipLevel:0,aspect:"all"};static defaultTextureWriteOptions={byteOffset:0,bytesPerRow:void 0,rowsPerImage:void 0,x:0,y:0,z:0,width:void 0,height:void 0,depthOrArrayLayers:1,mipLevel:0,aspect:"all"}}});var st,UA=E(()=>{ge();st=class t extends O{get[Symbol.toStringTag](){return"TextureView"}constructor(e,r){super(e,r,t.defaultProps)}static defaultProps={...O.defaultProps,format:void 0,dimension:void 0,aspect:"all",baseMipLevel:0,mipLevelCount:void 0,baseArrayLayer:0,arrayLayerCount:void 0}}});function kA(t,e,r){let i="",n=e.split(/\r?\n/),o=t.slice().sort((s,a)=>s.lineNum-a.lineNum);switch(r?.showSourceCode||"no"){case"all":let s=0;for(let a=1;a<=n.length;a++){let c=n[a-1],l=o[s];for(c&&l&&(i+=VA(c,a,r));o.length>s&&l.lineNum===a;){let f=o[s++];f&&(i+=ch(f,n,f.lineNum,{...r,inlineSource:!1}))}}for(;o.length>s;){let a=o[s++];a&&(i+=ch(a,[],0,{...r,inlineSource:!1}))}return i;case"issues":case"no":for(let a of t)i+=ch(a,n,a.lineNum,{inlineSource:r?.showSourceCode!=="no"});return i}}function ch(t,e,r,i){if(i?.inlineSource){let o=qw(e,r),s=t.linePos>0?`${" ".repeat(t.linePos+5)}^^^
`:"";return`
${o}${s}${t.type.toUpperCase()}: ${t.message}

`}let n=t.type==="error"?"red":"orange";return i?.html?`<div class='luma-compiler-log-${t.type}' style="color:${n};"><b> ${t.type.toUpperCase()}: ${t.message}</b></div>`:`${t.type.toUpperCase()}: ${t.message}`}function qw(t,e,r){let i="";for(let n=e-2;n<=e;n++){let o=t[n-1];o!==void 0&&(i+=VA(o,e,r))}return i}function VA(t,e,r){let i=r?.html?t3(t):t;return`${e3(String(e),4)}: ${i}${r?.html?"<br/>":`
`}`}function e3(t,e){let r="";for(let i=t.length;i<e;++i)r+=" ";return r+t}function t3(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}var HA=E(()=>{});function r3(t){return i3(t.source)||t.id||St(`unnamed ${t.stage}-shader`)}function i3(t,e="unnamed"){return/#define[\s*]SHADER_NAME[\s*]([A-Za-z0-9_-]+)[\s*]/.exec(t)?.[1]??e}var Vr,lh=E(()=>{ge();Ci();HA();Vr=class t extends O{get[Symbol.toStringTag](){return"Shader"}stage;source;compilationStatus="pending";constructor(e,r){r={...r,debugShaders:r.debugShaders||e.props.debugShaders||"errors"},super(e,{id:r3(r),...r},t.defaultProps),this.stage=this.props.stage,this.source=this.props.source}getCompilationInfoSync(){return null}getTranslatedSource(){return null}async debugShader(){let e=this.props.debugShaders;switch(e){case"never":return;case"errors":if(this.compilationStatus==="success")return;break;case"warnings":case"always":break}let r=await this.getCompilationInfo();e==="warnings"&&r?.length===0||this._displayShaderLog(r,this.id)}_displayShaderLog(e,r){if(typeof document>"u"||!document?.createElement)return;let i=r,n=`${this.stage} shader "${i}"`,o=kA(e,this.source,{showSourceCode:"all",html:!0}),s=this.getTranslatedSource(),a=document.createElement("div");a.innerHTML=`<h1>Compilation error in ${n}</h1>
<div style="display:flex;position:fixed;top:10px;right:20px;gap:2px;">
<button id="copy">Copy source</button><br/>
<button id="close">Close</button>
</div>
<code><pre>${o}</pre></code>`,s&&(a.innerHTML+=`<br /><h1>Translated Source</h1><br /><br /><code><pre>${s}</pre></code>`),a.style.top="0",a.style.left="0",a.style.background="white",a.style.position="fixed",a.style.zIndex="9999",a.style.maxWidth="100vw",a.style.maxHeight="100vh",a.style.overflowY="auto",document.body.appendChild(a),a.querySelector(".luma-compiler-log-error")?.scrollIntoView(),a.querySelector("button#close").onclick=()=>{a.remove()},a.querySelector("button#copy").onclick=()=>{navigator.clipboard.writeText(this.source)}}static defaultProps={...O.defaultProps,language:"auto",stage:void 0,source:"",sourceMap:null,entryPoint:"main",debugShaders:void 0}}});var Hr,zA=E(()=>{ge();ah();Je();Hr=class t extends O{get[Symbol.toStringTag](){return"Framebuffer"}width;height;constructor(e,r={}){super(e,r,t.defaultProps),this.width=this.props.width,this.height=this.props.height}clone(e){let r=this.colorAttachments.map(n=>n.texture.clone(e)),i=this.depthStencilAttachment&&this.depthStencilAttachment.texture.clone(e);return this.device.createFramebuffer({...this.props,...e,colorAttachments:r,depthStencilAttachment:i})}resize(e){let r=!e;if(e){let[i,n]=Array.isArray(e)?e:[e.width,e.height];r=r||n!==this.height||i!==this.width,this.width=i,this.height=n}r&&(x.log(2,`Resizing framebuffer ${this.id} to ${this.width}x${this.height}`)(),this.resizeAttachments(this.width,this.height))}autoCreateAttachmentTextures(){if(this.props.colorAttachments.length===0&&!this.props.depthStencilAttachment)throw new Error("Framebuffer has noattachments");this.colorAttachments=this.props.colorAttachments.map((r,i)=>{if(typeof r=="string"){let n=this.createColorTexture(r,i);return this.attachResource(n),n.view}return r instanceof N?r.view:r});let e=this.props.depthStencilAttachment;if(e)if(typeof e=="string"){let r=this.createDepthStencilTexture(e);this.attachResource(r),this.depthStencilAttachment=r.view}else e instanceof N?this.depthStencilAttachment=e.view:this.depthStencilAttachment=e}createColorTexture(e,r){return this.device.createTexture({id:`${this.id}-color-attachment-${r}`,usage:N.RENDER_ATTACHMENT,format:e,width:this.width,height:this.height,sampler:{magFilter:"linear",minFilter:"linear"}})}createDepthStencilTexture(e){return this.device.createTexture({id:`${this.id}-depth-stencil-attachment`,usage:N.RENDER_ATTACHMENT,format:e,width:this.width,height:this.height})}resizeAttachments(e,r){if(this.colorAttachments.forEach((i,n)=>{let o=i.texture.clone({width:e,height:r});this.destroyAttachedResource(i),this.colorAttachments[n]=o.view,this.attachResource(o.view)}),this.depthStencilAttachment){let i=this.depthStencilAttachment.texture.clone({width:e,height:r});this.destroyAttachedResource(this.depthStencilAttachment),this.depthStencilAttachment=i.view,this.attachResource(i)}this.updateAttachments()}static defaultProps={...O.defaultProps,width:1,height:1,colorAttachments:[],depthStencilAttachment:null}}});var Qe,fh=E(()=>{ge();Qe=class t extends O{get[Symbol.toStringTag](){return"RenderPipeline"}shaderLayout;bufferLayout;linkStatus="pending";hash="";sharedRenderPipeline=null;get isPending(){return this.linkStatus==="pending"||this.vs.compilationStatus==="pending"||this.fs?.compilationStatus==="pending"}get isErrored(){return this.linkStatus==="error"||this.vs.compilationStatus==="error"||this.fs?.compilationStatus==="error"}constructor(e,r){super(e,r,t.defaultProps),this.shaderLayout=this.props.shaderLayout,this.bufferLayout=this.props.bufferLayout||[],this.sharedRenderPipeline=this.props._sharedRenderPipeline||null}static defaultProps={...O.defaultProps,vs:null,vertexEntryPoint:"vertexMain",vsConstants:{},fs:null,fragmentEntryPoint:"fragmentMain",fsConstants:{},shaderLayout:null,bufferLayout:[],topology:"triangle-list",colorAttachmentFormats:void 0,depthStencilAttachmentFormat:void 0,parameters:{},varyings:void 0,bufferMode:void 0,disableWarnings:!1,_sharedRenderPipeline:void 0,bindings:void 0,bindGroups:void 0}}});var qn,jA=E(()=>{ge();qn=class extends O{get[Symbol.toStringTag](){return"SharedRenderPipeline"}constructor(e,r){super(e,r,{...O.defaultProps,handle:void 0,vs:void 0,fs:void 0,varyings:void 0,bufferMode:void 0})}}});var eo,WA=E(()=>{ge();eo=class t extends O{get[Symbol.toStringTag](){return"ComputePipeline"}hash="";shaderLayout;constructor(e,r){super(e,r,t.defaultProps),this.shaderLayout=r.shaderLayout}static defaultProps={...O.defaultProps,shader:void 0,entryPoint:void 0,constants:{},shaderLayout:void 0}}});var to,GA=E(()=>{WA();fh();Je();Ci();to=class t{static defaultProps={...Qe.defaultProps};static getDefaultPipelineFactory(e){let r=e.getModuleData("@luma.gl/core");return r.defaultPipelineFactory||=new t(e),r.defaultPipelineFactory}device;_hashCounter=0;_hashes={};_renderPipelineCache={};_computePipelineCache={};_sharedRenderPipelineCache={};get[Symbol.toStringTag](){return"PipelineFactory"}toString(){return`PipelineFactory(${this.device.id})`}constructor(e){this.device=e}createRenderPipeline(e){if(!this.device.props._cachePipelines)return this.device.createRenderPipeline(e);let r={...Qe.defaultProps,...e},i=this._renderPipelineCache,n=this._hashRenderPipeline(r),o=i[n]?.resource;if(o)i[n].useCount++,this.device.props.debugFactories&&x.log(3,`${this}: ${i[n].resource} reused, count=${i[n].useCount}, (id=${e.id})`)();else{let s=this.device.type==="webgl"&&this.device.props._sharePipelines?this.createSharedRenderPipeline(r):void 0;o=this.device.createRenderPipeline({...r,id:r.id?`${r.id}-cached`:St("unnamed-cached"),_sharedRenderPipeline:s}),o.hash=n,i[n]={resource:o,useCount:1},this.device.props.debugFactories&&x.log(3,`${this}: ${o} created, count=${i[n].useCount}`)()}return o}createComputePipeline(e){if(!this.device.props._cachePipelines)return this.device.createComputePipeline(e);let r={...eo.defaultProps,...e},i=this._computePipelineCache,n=this._hashComputePipeline(r),o=i[n]?.resource;return o?(i[n].useCount++,this.device.props.debugFactories&&x.log(3,`${this}: ${i[n].resource} reused, count=${i[n].useCount}, (id=${e.id})`)()):(o=this.device.createComputePipeline({...r,id:r.id?`${r.id}-cached`:void 0}),o.hash=n,i[n]={resource:o,useCount:1},this.device.props.debugFactories&&x.log(3,`${this}: ${o} created, count=${i[n].useCount}`)()),o}release(e){if(!this.device.props._cachePipelines){e.destroy();return}let r=this._getCache(e),i=e.hash;r[i].useCount--,r[i].useCount===0?(this._destroyPipeline(e),this.device.props.debugFactories&&x.log(3,`${this}: ${e} released and destroyed`)()):r[i].useCount<0?(x.error(`${this}: ${e} released, useCount < 0, resetting`)(),r[i].useCount=0):this.device.props.debugFactories&&x.log(3,`${this}: ${e} released, count=${r[i].useCount}`)()}createSharedRenderPipeline(e){let r=this._hashSharedRenderPipeline(e),i=this._sharedRenderPipelineCache[r];return i||(i={resource:this.device._createSharedRenderPipelineWebGL(e),useCount:0},this._sharedRenderPipelineCache[r]=i),i.useCount++,i.resource}releaseSharedRenderPipeline(e){if(!e.sharedRenderPipeline)return;let r=this._hashSharedRenderPipeline(e.sharedRenderPipeline.props),i=this._sharedRenderPipelineCache[r];i&&(i.useCount--,i.useCount===0&&(i.resource.destroy(),delete this._sharedRenderPipelineCache[r]))}_destroyPipeline(e){let r=this._getCache(e);return this.device.props._destroyPipelines?(delete r[e.hash],e.destroy(),e instanceof Qe&&this.releaseSharedRenderPipeline(e),!0):!1}_getCache(e){let r;if(e instanceof eo&&(r=this._computePipelineCache),e instanceof Qe&&(r=this._renderPipelineCache),!r)throw new Error(`${this}`);if(!r[e.hash])throw new Error(`${this}: ${e} matched incorrect entry`);return r}_hashComputePipeline(e){let{type:r}=this.device,i=this._getHash(e.shader.source),n=this._getHash(JSON.stringify(e.shaderLayout));return`${r}/C/${i}SL${n}`}_hashRenderPipeline(e){let r=e.vs?this._getHash(e.vs.source):0,i=e.fs?this._getHash(e.fs.source):0,n=this._getWebGLVaryingHash(e),o=this._getHash(JSON.stringify(e.shaderLayout)),s=this._getHash(JSON.stringify(e.bufferLayout)),{type:a}=this.device;switch(a){case"webgl":let c=this._getHash(JSON.stringify(e.parameters));return`${a}/R/${r}/${i}V${n}T${e.topology}P${c}SL${o}BL${s}`;case"webgpu":default:let l=this._getHash(JSON.stringify({vertexEntryPoint:e.vertexEntryPoint,fragmentEntryPoint:e.fragmentEntryPoint})),f=this._getHash(JSON.stringify(e.parameters)),u=this._getWebGPUAttachmentHash(e);return`${a}/R/${r}/${i}V${n}T${e.topology}EP${l}P${f}SL${o}BL${s}A${u}`}}_hashSharedRenderPipeline(e){let r=e.vs?this._getHash(e.vs.source):0,i=e.fs?this._getHash(e.fs.source):0,n=this._getWebGLVaryingHash(e);return`webgl/S/${r}/${i}V${n}`}_getHash(e){return this._hashes[e]===void 0&&(this._hashes[e]=this._hashCounter++),this._hashes[e]}_getWebGLVaryingHash(e){let{varyings:r=[],bufferMode:i=null}=e;return this._getHash(JSON.stringify({varyings:r,bufferMode:i}))}_getWebGPUAttachmentHash(e){let r=e.colorAttachmentFormats??[this.device.preferredColorFormat],i=e.parameters?.depthWriteEnabled?e.depthStencilAttachmentFormat||this.device.preferredDepthFormat:null;return this._getHash(JSON.stringify({colorAttachmentFormats:r,depthStencilAttachmentFormat:i}))}}});var ro,XA=E(()=>{lh();Je();ro=class t{static defaultProps={...Vr.defaultProps};static getDefaultShaderFactory(e){let r=e.getModuleData("@luma.gl/core");return r.defaultShaderFactory||=new t(e),r.defaultShaderFactory}device;_cache={};get[Symbol.toStringTag](){return"ShaderFactory"}toString(){return`${this[Symbol.toStringTag]}(${this.device.id})`}constructor(e){this.device=e}createShader(e){if(!this.device.props._cacheShaders)return this.device.createShader(e);let r=this._hashShader(e),i=this._cache[r];if(i)i.useCount++,this.device.props.debugFactories&&x.log(3,`${this}: Reusing shader ${i.resource.id} count=${i.useCount}`)();else{let n=this.device.createShader({...e,id:e.id?`${e.id}-cached`:void 0});this._cache[r]=i={resource:n,useCount:1},this.device.props.debugFactories&&x.log(3,`${this}: Created new shader ${n.id}`)()}return i.resource}release(e){if(!this.device.props._cacheShaders){e.destroy();return}let r=this._hashShader(e),i=this._cache[r];if(i)if(i.useCount--,i.useCount===0)this.device.props._destroyShaders&&(delete this._cache[r],i.resource.destroy(),this.device.props.debugFactories&&x.log(3,`${this}: Releasing shader ${e.id}, destroyed`)());else{if(i.useCount<0)throw new Error(`ShaderFactory: Shader ${e.id} released too many times`);this.device.props.debugFactories&&x.log(3,`${this}: Releasing shader ${e.id} count=${i.useCount}`)()}}_hashShader(e){return`${e.stage}:${e.source}`}}});function $A(t,e,r){let i=t.bindings.find(n=>n.name===e||`${n.name.toLocaleLowerCase()}uniforms`===e.toLocaleLowerCase());return!i&&!r?.ignoreWarnings&&x.warn(`Binding ${e} not set: Not found in shader layout.`)(),i||null}function io(t,e){if(!e)return{};if(n3(e))return Object.fromEntries(Object.entries(e).map(([n,o])=>[Number(n),{...o}]));let r={};for(let[i,n]of Object.entries(e)){let s=$A(t,i)?.group??0;r[s]||={},r[s][i]=n}return r}function qa(t){let e={};for(let r of Object.values(t))Object.assign(e,r);return e}function n3(t){let e=Object.keys(t);return e.length>0&&e.every(r=>/^\d+$/.test(r))}var KA=E(()=>{Je()});var no,YA=E(()=>{ge();no=class t extends O{static defaultClearColor=[0,0,0,1];static defaultClearDepth=1;static defaultClearStencil=0;get[Symbol.toStringTag](){return"RenderPass"}constructor(e,r){r=t.normalizeProps(e,r),super(e,r,t.defaultProps)}static normalizeProps(e,r){return r}static defaultProps={...O.defaultProps,framebuffer:null,parameters:void 0,clearColor:t.defaultClearColor,clearColors:void 0,clearDepth:t.defaultClearDepth,clearStencil:t.defaultClearStencil,depthReadOnly:!1,stencilReadOnly:!1,discard:!1,occlusionQuerySet:void 0,timestampQuerySet:void 0,beginTimestampIndex:void 0,endTimestampIndex:void 0}}});var oo,JA=E(()=>{ge();oo=class t extends O{get[Symbol.toStringTag](){return"CommandEncoder"}_timeProfilingQuerySet=null;_timeProfilingSlotCount=0;_gpuTimeMs;constructor(e,r){super(e,r,t.defaultProps),this._timeProfilingQuerySet=r.timeProfilingQuerySet??null,this._timeProfilingSlotCount=0,this._gpuTimeMs=void 0}async resolveTimeProfilingQuerySet(){if(this._gpuTimeMs=void 0,!this._timeProfilingQuerySet)return;let e=Math.floor(this._timeProfilingSlotCount/2);if(e<=0)return;let r=e*2,i=await this._timeProfilingQuerySet.readResults({firstQuery:0,queryCount:r}),n=0n;for(let o=0;o<r;o+=2)n+=i[o+1]-i[o];this._gpuTimeMs=Number(n)/1e6}getTimeProfilingSlotCount(){return this._timeProfilingSlotCount}getTimeProfilingQuerySet(){return this._timeProfilingQuerySet}_applyTimeProfilingToPassProps(e){let r=e||{};if(!this._supportsTimestampQueries()||!this._timeProfilingQuerySet||r.timestampQuerySet!==void 0||r.beginTimestampIndex!==void 0||r.endTimestampIndex!==void 0)return r;let i=this._timeProfilingSlotCount;return i+1>=this._timeProfilingQuerySet.props.count?r:(this._timeProfilingSlotCount+=2,{...r,timestampQuerySet:this._timeProfilingQuerySet,beginTimestampIndex:i,endTimestampIndex:i+1})}_supportsTimestampQueries(){return this.device.features.has("timestamp-query")}static defaultProps={...O.defaultProps,measureExecutionTime:void 0,timeProfilingQuerySet:void 0}}});var so,QA=E(()=>{ge();so=class t extends O{get[Symbol.toStringTag](){return"CommandBuffer"}constructor(e,r){super(e,r,t.defaultProps)}static defaultProps={...O.defaultProps}}});function Mi(t){let e=ec(t),r=c3[e];if(!r)throw new Error(`Unsupported variable shader type: ${t}`);return r}function ZA(t){let e=qA(t),r=a3[e];if(!r)throw new Error(`Unsupported attribute shader type: ${t}`);let[i,n]=r,o=i==="i32"||i==="u32",s=i!=="u32",a=s3[i]*n;return{primitiveType:i,components:n,byteLength:a,integer:o,signed:s}}function o3(t,e){return e===1?t:`vec${e}<${t}>`}function qA(t){return l3[t]||t}function ec(t){return f3[t]||t}var uh,dh,s3,a3,c3,l3,f3,tc=E(()=>{uh=class{getVariableShaderTypeInfo(e){return Mi(e)}getAttributeShaderTypeInfo(e){return ZA(e)}makeShaderAttributeType(e,r){return o3(e,r)}resolveAttributeShaderTypeAlias(e){return qA(e)}resolveVariableShaderTypeAlias(e){return ec(e)}};dh=new uh,s3={f32:4,f16:2,i32:4,u32:4},a3={f32:["f32",1],"vec2<f32>":["f32",2],"vec3<f32>":["f32",3],"vec4<f32>":["f32",4],f16:["f16",1],"vec2<f16>":["f16",2],"vec3<f16>":["f16",3],"vec4<f16>":["f16",4],i32:["i32",1],"vec2<i32>":["i32",2],"vec3<i32>":["i32",3],"vec4<i32>":["i32",4],u32:["u32",1],"vec2<u32>":["u32",2],"vec3<u32>":["u32",3],"vec4<u32>":["u32",4]},c3={f32:{type:"f32",components:1},f16:{type:"f16",components:1},i32:{type:"i32",components:1},u32:{type:"u32",components:1},"vec2<f32>":{type:"f32",components:2},"vec3<f32>":{type:"f32",components:3},"vec4<f32>":{type:"f32",components:4},"vec2<f16>":{type:"f16",components:2},"vec3<f16>":{type:"f16",components:3},"vec4<f16>":{type:"f16",components:4},"vec2<i32>":{type:"i32",components:2},"vec3<i32>":{type:"i32",components:3},"vec4<i32>":{type:"i32",components:4},"vec2<u32>":{type:"u32",components:2},"vec3<u32>":{type:"u32",components:3},"vec4<u32>":{type:"u32",components:4},"mat2x2<f32>":{type:"f32",components:4},"mat2x3<f32>":{type:"f32",components:6},"mat2x4<f32>":{type:"f32",components:8},"mat3x2<f32>":{type:"f32",components:6},"mat3x3<f32>":{type:"f32",components:9},"mat3x4<f32>":{type:"f32",components:12},"mat4x2<f32>":{type:"f32",components:8},"mat4x3<f32>":{type:"f32",components:12},"mat4x4<f32>":{type:"f32",components:16},"mat2x2<f16>":{type:"f16",components:4},"mat2x3<f16>":{type:"f16",components:6},"mat2x4<f16>":{type:"f16",components:8},"mat3x2<f16>":{type:"f16",components:6},"mat3x3<f16>":{type:"f16",components:9},"mat3x4<f16>":{type:"f16",components:12},"mat4x2<f16>":{type:"f16",components:8},"mat4x3<f16>":{type:"f16",components:12},"mat4x4<f16>":{type:"f16",components:16},"mat2x2<i32>":{type:"i32",components:4},"mat2x3<i32>":{type:"i32",components:6},"mat2x4<i32>":{type:"i32",components:8},"mat3x2<i32>":{type:"i32",components:6},"mat3x3<i32>":{type:"i32",components:9},"mat3x4<i32>":{type:"i32",components:12},"mat4x2<i32>":{type:"i32",components:8},"mat4x3<i32>":{type:"i32",components:12},"mat4x4<i32>":{type:"i32",components:16},"mat2x2<u32>":{type:"u32",components:4},"mat2x3<u32>":{type:"u32",components:6},"mat2x4<u32>":{type:"u32",components:8},"mat3x2<u32>":{type:"u32",components:6},"mat3x3<u32>":{type:"u32",components:9},"mat3x4<u32>":{type:"u32",components:12},"mat4x2<u32>":{type:"u32",components:8},"mat4x3<u32>":{type:"u32",components:12},"mat4x4<u32>":{type:"u32",components:16}},l3={vec2i:"vec2<i32>",vec3i:"vec3<i32>",vec4i:"vec4<i32>",vec2u:"vec2<u32>",vec3u:"vec3<u32>",vec4u:"vec4<u32>",vec2f:"vec2<f32>",vec3f:"vec3<f32>",vec4f:"vec4<f32>",vec2h:"vec2<f16>",vec3h:"vec3<f16>",vec4h:"vec4<f16>"},f3={vec2i:"vec2<i32>",vec3i:"vec3<i32>",vec4i:"vec4<i32>",vec2u:"vec2<u32>",vec3u:"vec3<u32>",vec4u:"vec4<u32>",vec2f:"vec2<f32>",vec3f:"vec3<f32>",vec4f:"vec4<f32>",vec2h:"vec2<f16>",vec3h:"vec3<f16>",vec4h:"vec4<f16>",mat2x2f:"mat2x2<f32>",mat2x3f:"mat2x3<f32>",mat2x4f:"mat2x4<f32>",mat3x2f:"mat3x2<f32>",mat3x3f:"mat3x3<f32>",mat3x4f:"mat3x4<f32>",mat4x2f:"mat4x2<f32>",mat4x3f:"mat4x3<f32>",mat4x4f:"mat4x4<f32>",mat2x2i:"mat2x2<i32>",mat2x3i:"mat2x3<i32>",mat2x4i:"mat2x4<i32>",mat3x2i:"mat3x2<i32>",mat3x3i:"mat3x3<i32>",mat3x4i:"mat3x4<i32>",mat4x2i:"mat4x2<i32>",mat4x3i:"mat4x3<i32>",mat4x4i:"mat4x4<i32>",mat2x2u:"mat2x2<u32>",mat2x3u:"mat2x3<u32>",mat2x4u:"mat2x4<u32>",mat3x2u:"mat3x2<u32>",mat3x3u:"mat3x3<u32>",mat3x4u:"mat3x4<u32>",mat4x2u:"mat4x2<u32>",mat4x3u:"mat4x3<u32>",mat4x4u:"mat4x4<u32>",mat2x2h:"mat2x2<f16>",mat2x3h:"mat2x3<f16>",mat2x4h:"mat2x4<f16>",mat3x2h:"mat3x2<f16>",mat3x3h:"mat3x3<f16>",mat3x4h:"mat3x4<f16>",mat4x2h:"mat4x2<f16>",mat4x3h:"mat4x3<f16>",mat4x4h:"mat4x4<f16>"}});function rc(t,e){let r={};for(let i of t.attributes){let n=u3(t,e,i.name);n&&(r[i.name]=n)}return r}function ey(t,e,r=16){let i=rc(t,e),n=new Array(r).fill(null);for(let o of Object.values(i))n[o.location]=o;return n}function u3(t,e,r){let i=d3(t,r),n=h3(e,r);if(!i)return null;let o=dh.getAttributeShaderTypeInfo(i.type),s=Vt.getCompatibleVertexFormat(o),a=n?.vertexFormat||s,c=Vt.getVertexFormatInfo(a);return{attributeName:n?.attributeName||i.name,bufferName:n?.bufferName||i.name,location:i.location,shaderType:i.type,primitiveType:o.primitiveType,shaderComponents:o.components,vertexFormat:a,bufferDataType:c.type,bufferComponents:c.components,normalized:c.normalized,integer:o.integer,stepMode:n?.stepMode||i.stepMode||"vertex",byteOffset:n?.byteOffset||0,byteStride:n?.byteStride||0}}function d3(t,e){let r=t.attributes.find(i=>i.name===e);return r||x.warn(`shader layout attribute "${e}" not present in shader`),r||null}function h3(t,e){p3(t);let r=g3(t,e);return r||(r=m3(t,e),r)?r:(x.warn(`layout for attribute "${e}" not present in buffer layout`),null)}function p3(t){for(let e of t)(e.attributes&&e.format||!e.attributes&&!e.format)&&x.warn(`BufferLayout ${name} must have either 'attributes' or 'format' field`)}function g3(t,e){for(let r of t)if(r.format&&r.name===e)return{attributeName:r.name,bufferName:e,stepMode:r.stepMode,vertexFormat:r.format,byteOffset:0,byteStride:r.byteStride||0};return null}function m3(t,e){for(let r of t){let i=r.byteStride;if(typeof r.byteStride!="number")for(let o of r.attributes||[]){let s=Vt.getVertexFormatInfo(o.format);i+=s.byteLength}let n=r.attributes?.find(o=>o.attribute===e);if(n)return{attributeName:n.attribute,bufferName:r.name,stepMode:r.stepMode,vertexFormat:n.format,byteOffset:n.byteOffset,byteStride:i}}return null}var hh=E(()=>{Je();tc();Xa()});var ao,ty=E(()=>{hh();ge();ao=class t extends O{static defaultProps={...O.defaultProps,shaderLayout:void 0,bufferLayout:[]};get[Symbol.toStringTag](){return"VertexArray"}maxVertexAttributes;attributeInfos;indexBuffer=null;attributes;constructor(e,r){super(e,r,t.defaultProps),this.maxVertexAttributes=e.limits.maxVertexAttributes,this.attributes=new Array(this.maxVertexAttributes).fill(null),this.attributeInfos=ey(r.shaderLayout,r.bufferLayout,this.maxVertexAttributes)}setConstantWebGL(e,r){this.device.reportError(new Error("constant attributes not supported"),this)()}}});var co,ry=E(()=>{ge();co=class t extends O{static defaultProps={...O.defaultProps,layout:void 0,buffers:{}};get[Symbol.toStringTag](){return"TransformFeedback"}constructor(e,r){super(e,r,t.defaultProps)}}});var lo,iy=E(()=>{ge();lo=class t extends O{get[Symbol.toStringTag](){return"QuerySet"}constructor(e,r){super(e,r,t.defaultProps)}static defaultProps={...O.defaultProps,type:void 0,count:void 0}}});var fo,ny=E(()=>{ge();fo=class t extends O{static defaultProps={...O.defaultProps};get[Symbol.toStringTag](){return"Fence"}constructor(e,r={}){super(e,r,t.defaultProps)}}});function Ct(t,e){switch(e){case 1:return t;case 2:return t+t%2;default:return t+(4-t%4)%4}}function uo(t){let[,,,,e]=_3[t];return e}var _3,ph=E(()=>{_3={uint8:["uint8","u32",1,!1,Uint8Array],sint8:["sint8","i32",1,!1,Int8Array],unorm8:["uint8","f32",1,!0,Uint8Array],snorm8:["sint8","f32",1,!0,Int8Array],uint16:["uint16","u32",2,!1,Uint16Array],sint16:["sint16","i32",2,!1,Int16Array],unorm16:["uint16","u32",2,!0,Uint16Array],snorm16:["sint16","i32",2,!0,Int16Array],float16:["float16","f16",2,!1,Uint16Array],float32:["float32","f32",4,!1,Float32Array],uint32:["uint32","u32",4,!1,Uint32Array],sint32:["sint32","i32",4,!1,Int32Array]}});function sy(t,e={}){let r={...t},i=e.layout??"std140",n={},o=0;for(let[s,a]of Object.entries(r))o=gh(n,s,a,o,i);return o=Ct(o,lr(r,i)),{layout:i,byteLength:o*4,uniformTypes:r,fields:n}}function ho(t,e){let r=ec(t),i=Mi(r),n=/^mat(\d)x(\d)<.+>$/.exec(r);if(n){let s=Number(n[1]),a=Number(n[2]),c=oy(a,r,i.type,e),l=A3(c.size,c.alignment,e);return{alignment:c.alignment,size:s*l,components:s*a,columns:s,rows:a,columnStride:l,shaderType:r,type:i.type}}let o=/^vec(\d)<.+>$/.exec(r);return o?oy(Number(o[1]),r,i.type,e):{alignment:1,size:1,components:1,columns:1,rows:1,columnStride:1,shaderType:r,type:i.type}}function mh(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}function gh(t,e,r,i,n){if(typeof r=="string"){let o=ho(r,n),s=Ct(i,o.alignment);return t[e]={offset:s,...o},s+o.size}if(Array.isArray(r)){if(Array.isArray(r[0]))throw new Error(`Nested arrays are not supported for ${e}`);let o=r[0],s=r[1],a=cy(o,n),c=Ct(i,lr(r,n));for(let l=0;l<s;l++)gh(t,`${e}[${l}]`,o,c+l*a,n);return c+a*s}if(mh(r)){let o=lr(r,n),s=Ct(i,o);for(let[a,c]of Object.entries(r))s=gh(t,`${e}.${a}`,c,s,n);return Ct(s,o)}throw new Error(`Unsupported CompositeShaderType for ${e}`)}function ay(t,e){if(typeof t=="string")return ho(t,e).size;if(Array.isArray(t)){let i=t[0],n=t[1];if(Array.isArray(i))throw new Error("Nested arrays are not supported");return cy(i,e)*n}let r=0;for(let i of Object.values(t)){let n=i;r=Ct(r,lr(n,e)),r+=ay(n,e)}return Ct(r,lr(t,e))}function lr(t,e){if(typeof t=="string")return ho(t,e).alignment;if(Array.isArray(t)){let i=t[0],n=lr(i,e);return ly(e)?Math.max(n,4):n}let r=1;for(let i of Object.values(t)){let n=lr(i,e);r=Math.max(r,n)}return y3(e)?Math.max(r,4):r}function oy(t,e,r,i){return{alignment:t===2?2:4,size:t===3?3:t,components:t,columns:1,rows:t,columnStride:t===3?3:t,shaderType:e,type:r}}function cy(t,e){let r=ay(t,e),i=lr(t,e);return b3(r,i,e)}function b3(t,e,r){return Ct(t,ly(r)?4:e)}function A3(t,e,r){return r==="std140"?4:Ct(t,e)}function ly(t){return t==="std140"||t==="wgsl-uniform"}function y3(t){return t==="std140"||t==="wgsl-uniform"}var _h=E(()=>{ph();tc()});function bh(t){return(!ic||ic.byteLength<t)&&(ic=new ArrayBuffer(t)),ic}function Ah(t,e){let r=bh(t.BYTES_PER_ELEMENT*e);return new t(r,0,e)}var ic,yh=E(()=>{});function x3(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Pi(t){return Array.isArray(t)?t.length===0||typeof t[0]=="number":x3(t)}var xh=E(()=>{});function T3(t){return!!t&&typeof t=="object"&&!Array.isArray(t)&&!ArrayBuffer.isView(t)}function S3(t,e,r){return Array.prototype.slice.call(t,e,r)}var nc,fy=E(()=>{yh();xh();Je();_h();nc=class{layout;constructor(e){this.layout=e}has(e){return!!this.layout.fields[e]}get(e){let r=this.layout.fields[e];return r?{offset:r.offset,size:r.size}:void 0}getFlatUniformValues(e){let r={};for(let[i,n]of Object.entries(e)){let o=this.layout.uniformTypes[i];o?this._flattenCompositeValue(r,i,o,n):this.layout.fields[i]&&(r[i]=n)}return r}getData(e){let r=bh(this.layout.byteLength);new Uint8Array(r,0,this.layout.byteLength).fill(0);let i={i32:new Int32Array(r),u32:new Uint32Array(r),f32:new Float32Array(r),f16:new Uint16Array(r)},n=this.getFlatUniformValues(e);for(let[o,s]of Object.entries(n))this._writeLeafValue(i,o,s);return new Uint8Array(r,0,this.layout.byteLength)}_flattenCompositeValue(e,r,i,n){if(n!==void 0){if(typeof i=="string"||this.layout.fields[r]){e[r]=n;return}if(Array.isArray(i)){let o=i[0],s=i[1];if(Array.isArray(o))throw new Error(`Nested arrays are not supported for ${r}`);if(typeof o=="string"&&Pi(n)){this._flattenPackedArray(e,r,o,s,n);return}if(!Array.isArray(n)){x.warn(`Unsupported uniform array value for ${r}:`,n)();return}for(let a=0;a<Math.min(n.length,s);a++){let c=n[a];c!==void 0&&this._flattenCompositeValue(e,`${r}[${a}]`,o,c)}return}if(mh(i)&&T3(n)){for(let[o,s]of Object.entries(n)){if(s===void 0)continue;let a=`${r}.${o}`;this._flattenCompositeValue(e,a,i[o],s)}return}x.warn(`Unsupported uniform value for ${r}:`,n)()}}_flattenPackedArray(e,r,i,n,o){let s=o,c=ho(i,this.layout.layout).components;for(let l=0;l<n;l++){let f=l*c;if(f>=s.length)break;c===1?e[`${r}[${l}]`]=Number(s[f]):e[`${r}[${l}]`]=S3(o,f,f+c)}}_writeLeafValue(e,r,i){let n=this.layout.fields[r];if(!n){x.warn(`Uniform ${r} not found in layout`)();return}let{type:o,components:s,columns:a,rows:c,offset:l,columnStride:f}=n,u=e[o];if(s===1){u[l]=Number(i);return}let d=i;if(a===1){for(let p=0;p<s;p++)u[l+p]=Number(d[p]??0);return}let h=0;for(let p=0;p<a;p++){let g=l+p*f;for(let m=0;m<c;m++)u[g+m]=Number(d[h++]??0)}}}});function uy(t,e,r=16){if(t===e)return!0;let i=t,n=e;if(!Pi(i)||!Pi(n)||i.length!==n.length)return!1;let o=Math.min(r,E3);if(i.length>o)return!1;for(let s=0;s<i.length;++s)if(n[s]!==i[s])return!1;return!0}function dy(t){return Pi(t)?t.slice():t}var E3,hy=E(()=>{xh();E3=128});var oc,py=E(()=>{hy();oc=class{name;uniforms={};modifiedUniforms={};modified=!0;bindingLayout={};needsRedraw="initialized";constructor(e){if(this.name=e?.name||"unnamed",e?.name&&e?.shaderLayout){let r=e?.shaderLayout.bindings?.find(n=>n.type==="uniform"&&n.name===e?.name);if(!r)throw new Error(e?.name);let i=r;for(let n of i.uniforms||[])this.bindingLayout[n.name]=n}}setUniforms(e){for(let[r,i]of Object.entries(e))this._setUniform(r,i),this.needsRedraw||this.setNeedsRedraw(`${this.name}.${r}=${i}`)}setNeedsRedraw(e){this.needsRedraw=this.needsRedraw||e}getAllUniforms(){return this.modifiedUniforms={},this.needsRedraw=!1,this.uniforms||{}}_setUniform(e,r){uy(this.uniforms[e],r)||(this.uniforms[e]=dy(r),this.modifiedUniforms[e]=!0,this.modified=!0)}}});function v3(t){return t.type==="webgpu"?"wgsl-uniform":"std140"}var C3,zr,gy=E(()=>{Wa();Je();_h();py();fy();C3=1024,zr=class{device;uniformBlocks=new Map;shaderBlockLayouts=new Map;shaderBlockWriters=new Map;uniformBuffers=new Map;constructor(e,r){this.device=e;for(let[i,n]of Object.entries(r)){let o=i,s=sy(n.uniformTypes??{},{layout:n.layout??v3(e)}),a=new nc(s);this.shaderBlockLayouts.set(o,s),this.shaderBlockWriters.set(o,a);let c=new oc({name:i});c.setUniforms(a.getFlatUniformValues(n.defaultUniforms||{})),this.uniformBlocks.set(o,c)}}destroy(){for(let e of this.uniformBuffers.values())e.destroy()}setUniforms(e){for(let[r,i]of Object.entries(e)){let n=r,s=this.shaderBlockWriters.get(n)?.getFlatUniformValues(i||{});this.uniformBlocks.get(n)?.setUniforms(s||{})}this.updateUniformBuffers()}getUniformBufferByteLength(e){let r=this.shaderBlockLayouts.get(e)?.byteLength||0;return Math.max(r,C3)}getUniformBufferData(e){let r=this.uniformBlocks.get(e)?.getAllUniforms()||{};return this.shaderBlockWriters.get(e)?.getData(r)||new Uint8Array(0)}createUniformBuffer(e,r){r&&this.setUniforms(r);let i=this.getUniformBufferByteLength(e),n=this.device.createBuffer({usage:F.UNIFORM|F.COPY_DST,byteLength:i}),o=this.getUniformBufferData(e);return n.write(o),n}getManagedUniformBuffer(e){if(!this.uniformBuffers.get(e)){let r=this.getUniformBufferByteLength(e),i=this.device.createBuffer({usage:F.UNIFORM|F.COPY_DST,byteLength:r});this.uniformBuffers.set(e,i)}return this.uniformBuffers.get(e)}updateUniformBuffers(){let e=!1;for(let r of this.uniformBlocks.keys()){let i=this.updateUniformBuffer(r);e||=i}return e&&x.log(3,`UniformStore.updateUniformBuffers(): ${e}`)(),e}updateUniformBuffer(e){let r=this.uniformBlocks.get(e),i=this.uniformBuffers.get(e),n=!1;if(i&&r?.needsRedraw){n||=r.needsRedraw;let o=this.getUniformBufferData(e);i=this.uniformBuffers.get(e),i?.write(o);let s=this.uniformBlocks.get(e)?.getAllUniforms();x.log(4,`Writing to uniform buffer ${String(e)}`,o,s)()}return n}}});var L=E(()=>{PA();wA();th();NA();DA();Wa();ah();UA();lh();sh();zA();fh();jA();GA();XA();YA();JA();QA();ty();ry();iy();ny();gy();Ga();ph();tc();Xa();Ja();qd();Je();KA();nh();yh();hh()});var Ar,Gx=E(()=>{(function(t){t[t.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",t[t.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",t[t.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT",t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN",t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC_COLOR=768]="SRC_COLOR",t[t.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.DST_COLOR=774]="DST_COLOR",t[t.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",t[t.CONSTANT_COLOR=32769]="CONSTANT_COLOR",t[t.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",t[t.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",t[t.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA",t[t.FUNC_ADD=32774]="FUNC_ADD",t[t.FUNC_SUBTRACT=32778]="FUNC_SUBTRACT",t[t.FUNC_REVERSE_SUBTRACT=32779]="FUNC_REVERSE_SUBTRACT",t[t.BLEND_EQUATION=32777]="BLEND_EQUATION",t[t.BLEND_EQUATION_RGB=32777]="BLEND_EQUATION_RGB",t[t.BLEND_EQUATION_ALPHA=34877]="BLEND_EQUATION_ALPHA",t[t.BLEND_DST_RGB=32968]="BLEND_DST_RGB",t[t.BLEND_SRC_RGB=32969]="BLEND_SRC_RGB",t[t.BLEND_DST_ALPHA=32970]="BLEND_DST_ALPHA",t[t.BLEND_SRC_ALPHA=32971]="BLEND_SRC_ALPHA",t[t.BLEND_COLOR=32773]="BLEND_COLOR",t[t.ARRAY_BUFFER_BINDING=34964]="ARRAY_BUFFER_BINDING",t[t.ELEMENT_ARRAY_BUFFER_BINDING=34965]="ELEMENT_ARRAY_BUFFER_BINDING",t[t.LINE_WIDTH=2849]="LINE_WIDTH",t[t.ALIASED_POINT_SIZE_RANGE=33901]="ALIASED_POINT_SIZE_RANGE",t[t.ALIASED_LINE_WIDTH_RANGE=33902]="ALIASED_LINE_WIDTH_RANGE",t[t.CULL_FACE_MODE=2885]="CULL_FACE_MODE",t[t.FRONT_FACE=2886]="FRONT_FACE",t[t.DEPTH_RANGE=2928]="DEPTH_RANGE",t[t.DEPTH_WRITEMASK=2930]="DEPTH_WRITEMASK",t[t.DEPTH_CLEAR_VALUE=2931]="DEPTH_CLEAR_VALUE",t[t.DEPTH_FUNC=2932]="DEPTH_FUNC",t[t.STENCIL_CLEAR_VALUE=2961]="STENCIL_CLEAR_VALUE",t[t.STENCIL_FUNC=2962]="STENCIL_FUNC",t[t.STENCIL_FAIL=2964]="STENCIL_FAIL",t[t.STENCIL_PASS_DEPTH_FAIL=2965]="STENCIL_PASS_DEPTH_FAIL",t[t.STENCIL_PASS_DEPTH_PASS=2966]="STENCIL_PASS_DEPTH_PASS",t[t.STENCIL_REF=2967]="STENCIL_REF",t[t.STENCIL_VALUE_MASK=2963]="STENCIL_VALUE_MASK",t[t.STENCIL_WRITEMASK=2968]="STENCIL_WRITEMASK",t[t.STENCIL_BACK_FUNC=34816]="STENCIL_BACK_FUNC",t[t.STENCIL_BACK_FAIL=34817]="STENCIL_BACK_FAIL",t[t.STENCIL_BACK_PASS_DEPTH_FAIL=34818]="STENCIL_BACK_PASS_DEPTH_FAIL",t[t.STENCIL_BACK_PASS_DEPTH_PASS=34819]="STENCIL_BACK_PASS_DEPTH_PASS",t[t.STENCIL_BACK_REF=36003]="STENCIL_BACK_REF",t[t.STENCIL_BACK_VALUE_MASK=36004]="STENCIL_BACK_VALUE_MASK",t[t.STENCIL_BACK_WRITEMASK=36005]="STENCIL_BACK_WRITEMASK",t[t.VIEWPORT=2978]="VIEWPORT",t[t.SCISSOR_BOX=3088]="SCISSOR_BOX",t[t.COLOR_CLEAR_VALUE=3106]="COLOR_CLEAR_VALUE",t[t.COLOR_WRITEMASK=3107]="COLOR_WRITEMASK",t[t.UNPACK_ALIGNMENT=3317]="UNPACK_ALIGNMENT",t[t.PACK_ALIGNMENT=3333]="PACK_ALIGNMENT",t[t.MAX_TEXTURE_SIZE=3379]="MAX_TEXTURE_SIZE",t[t.MAX_VIEWPORT_DIMS=3386]="MAX_VIEWPORT_DIMS",t[t.SUBPIXEL_BITS=3408]="SUBPIXEL_BITS",t[t.RED_BITS=3410]="RED_BITS",t[t.GREEN_BITS=3411]="GREEN_BITS",t[t.BLUE_BITS=3412]="BLUE_BITS",t[t.ALPHA_BITS=3413]="ALPHA_BITS",t[t.DEPTH_BITS=3414]="DEPTH_BITS",t[t.STENCIL_BITS=3415]="STENCIL_BITS",t[t.POLYGON_OFFSET_UNITS=10752]="POLYGON_OFFSET_UNITS",t[t.POLYGON_OFFSET_FACTOR=32824]="POLYGON_OFFSET_FACTOR",t[t.TEXTURE_BINDING_2D=32873]="TEXTURE_BINDING_2D",t[t.SAMPLE_BUFFERS=32936]="SAMPLE_BUFFERS",t[t.SAMPLES=32937]="SAMPLES",t[t.SAMPLE_COVERAGE_VALUE=32938]="SAMPLE_COVERAGE_VALUE",t[t.SAMPLE_COVERAGE_INVERT=32939]="SAMPLE_COVERAGE_INVERT",t[t.COMPRESSED_TEXTURE_FORMATS=34467]="COMPRESSED_TEXTURE_FORMATS",t[t.VENDOR=7936]="VENDOR",t[t.RENDERER=7937]="RENDERER",t[t.VERSION=7938]="VERSION",t[t.IMPLEMENTATION_COLOR_READ_TYPE=35738]="IMPLEMENTATION_COLOR_READ_TYPE",t[t.IMPLEMENTATION_COLOR_READ_FORMAT=35739]="IMPLEMENTATION_COLOR_READ_FORMAT",t[t.BROWSER_DEFAULT_WEBGL=37444]="BROWSER_DEFAULT_WEBGL",t[t.STATIC_DRAW=35044]="STATIC_DRAW",t[t.STREAM_DRAW=35040]="STREAM_DRAW",t[t.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.BUFFER_SIZE=34660]="BUFFER_SIZE",t[t.BUFFER_USAGE=34661]="BUFFER_USAGE",t[t.CURRENT_VERTEX_ATTRIB=34342]="CURRENT_VERTEX_ATTRIB",t[t.VERTEX_ATTRIB_ARRAY_ENABLED=34338]="VERTEX_ATTRIB_ARRAY_ENABLED",t[t.VERTEX_ATTRIB_ARRAY_SIZE=34339]="VERTEX_ATTRIB_ARRAY_SIZE",t[t.VERTEX_ATTRIB_ARRAY_STRIDE=34340]="VERTEX_ATTRIB_ARRAY_STRIDE",t[t.VERTEX_ATTRIB_ARRAY_TYPE=34341]="VERTEX_ATTRIB_ARRAY_TYPE",t[t.VERTEX_ATTRIB_ARRAY_NORMALIZED=34922]="VERTEX_ATTRIB_ARRAY_NORMALIZED",t[t.VERTEX_ATTRIB_ARRAY_POINTER=34373]="VERTEX_ATTRIB_ARRAY_POINTER",t[t.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING=34975]="VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",t[t.CULL_FACE=2884]="CULL_FACE",t[t.FRONT=1028]="FRONT",t[t.BACK=1029]="BACK",t[t.FRONT_AND_BACK=1032]="FRONT_AND_BACK",t[t.BLEND=3042]="BLEND",t[t.DEPTH_TEST=2929]="DEPTH_TEST",t[t.DITHER=3024]="DITHER",t[t.POLYGON_OFFSET_FILL=32823]="POLYGON_OFFSET_FILL",t[t.SAMPLE_ALPHA_TO_COVERAGE=32926]="SAMPLE_ALPHA_TO_COVERAGE",t[t.SAMPLE_COVERAGE=32928]="SAMPLE_COVERAGE",t[t.SCISSOR_TEST=3089]="SCISSOR_TEST",t[t.STENCIL_TEST=2960]="STENCIL_TEST",t[t.NO_ERROR=0]="NO_ERROR",t[t.INVALID_ENUM=1280]="INVALID_ENUM",t[t.INVALID_VALUE=1281]="INVALID_VALUE",t[t.INVALID_OPERATION=1282]="INVALID_OPERATION",t[t.OUT_OF_MEMORY=1285]="OUT_OF_MEMORY",t[t.CONTEXT_LOST_WEBGL=37442]="CONTEXT_LOST_WEBGL",t[t.CW=2304]="CW",t[t.CCW=2305]="CCW",t[t.DONT_CARE=4352]="DONT_CARE",t[t.FASTEST=4353]="FASTEST",t[t.NICEST=4354]="NICEST",t[t.GENERATE_MIPMAP_HINT=33170]="GENERATE_MIPMAP_HINT",t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.INT=5124]="INT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.FLOAT=5126]="FLOAT",t[t.DOUBLE=5130]="DOUBLE",t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.ALPHA=6406]="ALPHA",t[t.RGB=6407]="RGB",t[t.RGBA=6408]="RGBA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",t[t.VERTEX_SHADER=35633]="VERTEX_SHADER",t[t.COMPILE_STATUS=35713]="COMPILE_STATUS",t[t.DELETE_STATUS=35712]="DELETE_STATUS",t[t.LINK_STATUS=35714]="LINK_STATUS",t[t.VALIDATE_STATUS=35715]="VALIDATE_STATUS",t[t.ATTACHED_SHADERS=35717]="ATTACHED_SHADERS",t[t.ACTIVE_ATTRIBUTES=35721]="ACTIVE_ATTRIBUTES",t[t.ACTIVE_UNIFORMS=35718]="ACTIVE_UNIFORMS",t[t.MAX_VERTEX_ATTRIBS=34921]="MAX_VERTEX_ATTRIBS",t[t.MAX_VERTEX_UNIFORM_VECTORS=36347]="MAX_VERTEX_UNIFORM_VECTORS",t[t.MAX_VARYING_VECTORS=36348]="MAX_VARYING_VECTORS",t[t.MAX_COMBINED_TEXTURE_IMAGE_UNITS=35661]="MAX_COMBINED_TEXTURE_IMAGE_UNITS",t[t.MAX_VERTEX_TEXTURE_IMAGE_UNITS=35660]="MAX_VERTEX_TEXTURE_IMAGE_UNITS",t[t.MAX_TEXTURE_IMAGE_UNITS=34930]="MAX_TEXTURE_IMAGE_UNITS",t[t.MAX_FRAGMENT_UNIFORM_VECTORS=36349]="MAX_FRAGMENT_UNIFORM_VECTORS",t[t.SHADER_TYPE=35663]="SHADER_TYPE",t[t.SHADING_LANGUAGE_VERSION=35724]="SHADING_LANGUAGE_VERSION",t[t.CURRENT_PROGRAM=35725]="CURRENT_PROGRAM",t[t.NEVER=512]="NEVER",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.GEQUAL=518]="GEQUAL",t[t.ALWAYS=519]="ALWAYS",t[t.KEEP=7680]="KEEP",t[t.REPLACE=7681]="REPLACE",t[t.INCR=7682]="INCR",t[t.DECR=7683]="DECR",t[t.INVERT=5386]="INVERT",t[t.INCR_WRAP=34055]="INCR_WRAP",t[t.DECR_WRAP=34056]="DECR_WRAP",t[t.NEAREST=9728]="NEAREST",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR",t[t.TEXTURE_MAG_FILTER=10240]="TEXTURE_MAG_FILTER",t[t.TEXTURE_MIN_FILTER=10241]="TEXTURE_MIN_FILTER",t[t.TEXTURE_WRAP_S=10242]="TEXTURE_WRAP_S",t[t.TEXTURE_WRAP_T=10243]="TEXTURE_WRAP_T",t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE=5890]="TEXTURE",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_BINDING_CUBE_MAP=34068]="TEXTURE_BINDING_CUBE_MAP",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t[t.MAX_CUBE_MAP_TEXTURE_SIZE=34076]="MAX_CUBE_MAP_TEXTURE_SIZE",t[t.TEXTURE0=33984]="TEXTURE0",t[t.ACTIVE_TEXTURE=34016]="ACTIVE_TEXTURE",t[t.REPEAT=10497]="REPEAT",t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",t[t.TEXTURE_WIDTH=4096]="TEXTURE_WIDTH",t[t.TEXTURE_HEIGHT=4097]="TEXTURE_HEIGHT",t[t.FLOAT_VEC2=35664]="FLOAT_VEC2",t[t.FLOAT_VEC3=35665]="FLOAT_VEC3",t[t.FLOAT_VEC4=35666]="FLOAT_VEC4",t[t.INT_VEC2=35667]="INT_VEC2",t[t.INT_VEC3=35668]="INT_VEC3",t[t.INT_VEC4=35669]="INT_VEC4",t[t.BOOL=35670]="BOOL",t[t.BOOL_VEC2=35671]="BOOL_VEC2",t[t.BOOL_VEC3=35672]="BOOL_VEC3",t[t.BOOL_VEC4=35673]="BOOL_VEC4",t[t.FLOAT_MAT2=35674]="FLOAT_MAT2",t[t.FLOAT_MAT3=35675]="FLOAT_MAT3",t[t.FLOAT_MAT4=35676]="FLOAT_MAT4",t[t.SAMPLER_2D=35678]="SAMPLER_2D",t[t.SAMPLER_CUBE=35680]="SAMPLER_CUBE",t[t.LOW_FLOAT=36336]="LOW_FLOAT",t[t.MEDIUM_FLOAT=36337]="MEDIUM_FLOAT",t[t.HIGH_FLOAT=36338]="HIGH_FLOAT",t[t.LOW_INT=36339]="LOW_INT",t[t.MEDIUM_INT=36340]="MEDIUM_INT",t[t.HIGH_INT=36341]="HIGH_INT",t[t.FRAMEBUFFER=36160]="FRAMEBUFFER",t[t.RENDERBUFFER=36161]="RENDERBUFFER",t[t.RGBA4=32854]="RGBA4",t[t.RGB5_A1=32855]="RGB5_A1",t[t.RGB565=36194]="RGB565",t[t.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",t[t.STENCIL_INDEX=6401]="STENCIL_INDEX",t[t.STENCIL_INDEX8=36168]="STENCIL_INDEX8",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.RENDERBUFFER_WIDTH=36162]="RENDERBUFFER_WIDTH",t[t.RENDERBUFFER_HEIGHT=36163]="RENDERBUFFER_HEIGHT",t[t.RENDERBUFFER_INTERNAL_FORMAT=36164]="RENDERBUFFER_INTERNAL_FORMAT",t[t.RENDERBUFFER_RED_SIZE=36176]="RENDERBUFFER_RED_SIZE",t[t.RENDERBUFFER_GREEN_SIZE=36177]="RENDERBUFFER_GREEN_SIZE",t[t.RENDERBUFFER_BLUE_SIZE=36178]="RENDERBUFFER_BLUE_SIZE",t[t.RENDERBUFFER_ALPHA_SIZE=36179]="RENDERBUFFER_ALPHA_SIZE",t[t.RENDERBUFFER_DEPTH_SIZE=36180]="RENDERBUFFER_DEPTH_SIZE",t[t.RENDERBUFFER_STENCIL_SIZE=36181]="RENDERBUFFER_STENCIL_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE=36048]="FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",t[t.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME=36049]="FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",t[t.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL=36050]="FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",t[t.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE=36051]="FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",t[t.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",t[t.DEPTH_ATTACHMENT=36096]="DEPTH_ATTACHMENT",t[t.STENCIL_ATTACHMENT=36128]="STENCIL_ATTACHMENT",t[t.DEPTH_STENCIL_ATTACHMENT=33306]="DEPTH_STENCIL_ATTACHMENT",t[t.NONE=0]="NONE",t[t.FRAMEBUFFER_COMPLETE=36053]="FRAMEBUFFER_COMPLETE",t[t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT=36054]="FRAMEBUFFER_INCOMPLETE_ATTACHMENT",t[t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT=36055]="FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",t[t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS=36057]="FRAMEBUFFER_INCOMPLETE_DIMENSIONS",t[t.FRAMEBUFFER_UNSUPPORTED=36061]="FRAMEBUFFER_UNSUPPORTED",t[t.FRAMEBUFFER_BINDING=36006]="FRAMEBUFFER_BINDING",t[t.RENDERBUFFER_BINDING=36007]="RENDERBUFFER_BINDING",t[t.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",t[t.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER",t[t.MAX_RENDERBUFFER_SIZE=34024]="MAX_RENDERBUFFER_SIZE",t[t.INVALID_FRAMEBUFFER_OPERATION=1286]="INVALID_FRAMEBUFFER_OPERATION",t[t.UNPACK_FLIP_Y_WEBGL=37440]="UNPACK_FLIP_Y_WEBGL",t[t.UNPACK_PREMULTIPLY_ALPHA_WEBGL=37441]="UNPACK_PREMULTIPLY_ALPHA_WEBGL",t[t.UNPACK_COLORSPACE_CONVERSION_WEBGL=37443]="UNPACK_COLORSPACE_CONVERSION_WEBGL",t[t.READ_BUFFER=3074]="READ_BUFFER",t[t.UNPACK_ROW_LENGTH=3314]="UNPACK_ROW_LENGTH",t[t.UNPACK_SKIP_ROWS=3315]="UNPACK_SKIP_ROWS",t[t.UNPACK_SKIP_PIXELS=3316]="UNPACK_SKIP_PIXELS",t[t.PACK_ROW_LENGTH=3330]="PACK_ROW_LENGTH",t[t.PACK_SKIP_ROWS=3331]="PACK_SKIP_ROWS",t[t.PACK_SKIP_PIXELS=3332]="PACK_SKIP_PIXELS",t[t.TEXTURE_BINDING_3D=32874]="TEXTURE_BINDING_3D",t[t.UNPACK_SKIP_IMAGES=32877]="UNPACK_SKIP_IMAGES",t[t.UNPACK_IMAGE_HEIGHT=32878]="UNPACK_IMAGE_HEIGHT",t[t.MAX_3D_TEXTURE_SIZE=32883]="MAX_3D_TEXTURE_SIZE",t[t.MAX_ELEMENTS_VERTICES=33e3]="MAX_ELEMENTS_VERTICES",t[t.MAX_ELEMENTS_INDICES=33001]="MAX_ELEMENTS_INDICES",t[t.MAX_TEXTURE_LOD_BIAS=34045]="MAX_TEXTURE_LOD_BIAS",t[t.MAX_FRAGMENT_UNIFORM_COMPONENTS=35657]="MAX_FRAGMENT_UNIFORM_COMPONENTS",t[t.MAX_VERTEX_UNIFORM_COMPONENTS=35658]="MAX_VERTEX_UNIFORM_COMPONENTS",t[t.MAX_ARRAY_TEXTURE_LAYERS=35071]="MAX_ARRAY_TEXTURE_LAYERS",t[t.MIN_PROGRAM_TEXEL_OFFSET=35076]="MIN_PROGRAM_TEXEL_OFFSET",t[t.MAX_PROGRAM_TEXEL_OFFSET=35077]="MAX_PROGRAM_TEXEL_OFFSET",t[t.MAX_VARYING_COMPONENTS=35659]="MAX_VARYING_COMPONENTS",t[t.FRAGMENT_SHADER_DERIVATIVE_HINT=35723]="FRAGMENT_SHADER_DERIVATIVE_HINT",t[t.RASTERIZER_DISCARD=35977]="RASTERIZER_DISCARD",t[t.VERTEX_ARRAY_BINDING=34229]="VERTEX_ARRAY_BINDING",t[t.MAX_VERTEX_OUTPUT_COMPONENTS=37154]="MAX_VERTEX_OUTPUT_COMPONENTS",t[t.MAX_FRAGMENT_INPUT_COMPONENTS=37157]="MAX_FRAGMENT_INPUT_COMPONENTS",t[t.MAX_SERVER_WAIT_TIMEOUT=37137]="MAX_SERVER_WAIT_TIMEOUT",t[t.MAX_ELEMENT_INDEX=36203]="MAX_ELEMENT_INDEX",t[t.RED=6403]="RED",t[t.RGB8=32849]="RGB8",t[t.RGBA8=32856]="RGBA8",t[t.RGB10_A2=32857]="RGB10_A2",t[t.TEXTURE_3D=32879]="TEXTURE_3D",t[t.TEXTURE_WRAP_R=32882]="TEXTURE_WRAP_R",t[t.TEXTURE_MIN_LOD=33082]="TEXTURE_MIN_LOD",t[t.TEXTURE_MAX_LOD=33083]="TEXTURE_MAX_LOD",t[t.TEXTURE_BASE_LEVEL=33084]="TEXTURE_BASE_LEVEL",t[t.TEXTURE_MAX_LEVEL=33085]="TEXTURE_MAX_LEVEL",t[t.TEXTURE_COMPARE_MODE=34892]="TEXTURE_COMPARE_MODE",t[t.TEXTURE_COMPARE_FUNC=34893]="TEXTURE_COMPARE_FUNC",t[t.SRGB=35904]="SRGB",t[t.SRGB8=35905]="SRGB8",t[t.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",t[t.COMPARE_REF_TO_TEXTURE=34894]="COMPARE_REF_TO_TEXTURE",t[t.RGBA32F=34836]="RGBA32F",t[t.RGB32F=34837]="RGB32F",t[t.RGBA16F=34842]="RGBA16F",t[t.RGB16F=34843]="RGB16F",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",t[t.TEXTURE_BINDING_2D_ARRAY=35869]="TEXTURE_BINDING_2D_ARRAY",t[t.R11F_G11F_B10F=35898]="R11F_G11F_B10F",t[t.RGB9_E5=35901]="RGB9_E5",t[t.RGBA32UI=36208]="RGBA32UI",t[t.RGB32UI=36209]="RGB32UI",t[t.RGBA16UI=36214]="RGBA16UI",t[t.RGB16UI=36215]="RGB16UI",t[t.RGBA8UI=36220]="RGBA8UI",t[t.RGB8UI=36221]="RGB8UI",t[t.RGBA32I=36226]="RGBA32I",t[t.RGB32I=36227]="RGB32I",t[t.RGBA16I=36232]="RGBA16I",t[t.RGB16I=36233]="RGB16I",t[t.RGBA8I=36238]="RGBA8I",t[t.RGB8I=36239]="RGB8I",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER",t[t.R8=33321]="R8",t[t.RG8=33323]="RG8",t[t.R16F=33325]="R16F",t[t.R32F=33326]="R32F",t[t.RG16F=33327]="RG16F",t[t.RG32F=33328]="RG32F",t[t.R8I=33329]="R8I",t[t.R8UI=33330]="R8UI",t[t.R16I=33331]="R16I",t[t.R16UI=33332]="R16UI",t[t.R32I=33333]="R32I",t[t.R32UI=33334]="R32UI",t[t.RG8I=33335]="RG8I",t[t.RG8UI=33336]="RG8UI",t[t.RG16I=33337]="RG16I",t[t.RG16UI=33338]="RG16UI",t[t.RG32I=33339]="RG32I",t[t.RG32UI=33340]="RG32UI",t[t.R8_SNORM=36756]="R8_SNORM",t[t.RG8_SNORM=36757]="RG8_SNORM",t[t.RGB8_SNORM=36758]="RGB8_SNORM",t[t.RGBA8_SNORM=36759]="RGBA8_SNORM",t[t.RGB10_A2UI=36975]="RGB10_A2UI",t[t.TEXTURE_IMMUTABLE_FORMAT=37167]="TEXTURE_IMMUTABLE_FORMAT",t[t.TEXTURE_IMMUTABLE_LEVELS=33503]="TEXTURE_IMMUTABLE_LEVELS",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.HALF_FLOAT=5131]="HALF_FLOAT",t[t.RG=33319]="RG",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.INT_2_10_10_10_REV=36255]="INT_2_10_10_10_REV",t[t.CURRENT_QUERY=34917]="CURRENT_QUERY",t[t.QUERY_RESULT=34918]="QUERY_RESULT",t[t.QUERY_RESULT_AVAILABLE=34919]="QUERY_RESULT_AVAILABLE",t[t.ANY_SAMPLES_PASSED=35887]="ANY_SAMPLES_PASSED",t[t.ANY_SAMPLES_PASSED_CONSERVATIVE=36202]="ANY_SAMPLES_PASSED_CONSERVATIVE",t[t.MAX_DRAW_BUFFERS=34852]="MAX_DRAW_BUFFERS",t[t.DRAW_BUFFER0=34853]="DRAW_BUFFER0",t[t.DRAW_BUFFER1=34854]="DRAW_BUFFER1",t[t.DRAW_BUFFER2=34855]="DRAW_BUFFER2",t[t.DRAW_BUFFER3=34856]="DRAW_BUFFER3",t[t.DRAW_BUFFER4=34857]="DRAW_BUFFER4",t[t.DRAW_BUFFER5=34858]="DRAW_BUFFER5",t[t.DRAW_BUFFER6=34859]="DRAW_BUFFER6",t[t.DRAW_BUFFER7=34860]="DRAW_BUFFER7",t[t.DRAW_BUFFER8=34861]="DRAW_BUFFER8",t[t.DRAW_BUFFER9=34862]="DRAW_BUFFER9",t[t.DRAW_BUFFER10=34863]="DRAW_BUFFER10",t[t.DRAW_BUFFER11=34864]="DRAW_BUFFER11",t[t.DRAW_BUFFER12=34865]="DRAW_BUFFER12",t[t.DRAW_BUFFER13=34866]="DRAW_BUFFER13",t[t.DRAW_BUFFER14=34867]="DRAW_BUFFER14",t[t.DRAW_BUFFER15=34868]="DRAW_BUFFER15",t[t.MAX_COLOR_ATTACHMENTS=36063]="MAX_COLOR_ATTACHMENTS",t[t.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",t[t.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",t[t.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",t[t.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",t[t.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",t[t.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",t[t.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",t[t.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",t[t.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",t[t.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",t[t.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",t[t.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",t[t.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",t[t.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",t[t.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15",t[t.SAMPLER_3D=35679]="SAMPLER_3D",t[t.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",t[t.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",t[t.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",t[t.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",t[t.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",t[t.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",t[t.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",t[t.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",t[t.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",t[t.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",t[t.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",t[t.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY",t[t.MAX_SAMPLES=36183]="MAX_SAMPLES",t[t.SAMPLER_BINDING=35097]="SAMPLER_BINDING",t[t.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",t[t.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",t[t.PIXEL_PACK_BUFFER_BINDING=35053]="PIXEL_PACK_BUFFER_BINDING",t[t.PIXEL_UNPACK_BUFFER_BINDING=35055]="PIXEL_UNPACK_BUFFER_BINDING",t[t.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",t[t.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",t[t.COPY_READ_BUFFER_BINDING=36662]="COPY_READ_BUFFER_BINDING",t[t.COPY_WRITE_BUFFER_BINDING=36663]="COPY_WRITE_BUFFER_BINDING",t[t.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",t[t.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",t[t.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",t[t.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",t[t.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",t[t.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",t[t.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",t[t.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",t[t.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",t[t.UNSIGNED_NORMALIZED=35863]="UNSIGNED_NORMALIZED",t[t.SIGNED_NORMALIZED=36764]="SIGNED_NORMALIZED",t[t.VERTEX_ATTRIB_ARRAY_INTEGER=35069]="VERTEX_ATTRIB_ARRAY_INTEGER",t[t.VERTEX_ATTRIB_ARRAY_DIVISOR=35070]="VERTEX_ATTRIB_ARRAY_DIVISOR",t[t.TRANSFORM_FEEDBACK_BUFFER_MODE=35967]="TRANSFORM_FEEDBACK_BUFFER_MODE",t[t.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS=35968]="MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS",t[t.TRANSFORM_FEEDBACK_VARYINGS=35971]="TRANSFORM_FEEDBACK_VARYINGS",t[t.TRANSFORM_FEEDBACK_BUFFER_START=35972]="TRANSFORM_FEEDBACK_BUFFER_START",t[t.TRANSFORM_FEEDBACK_BUFFER_SIZE=35973]="TRANSFORM_FEEDBACK_BUFFER_SIZE",t[t.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN=35976]="TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN",t[t.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS=35978]="MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS",t[t.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS=35979]="MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS",t[t.INTERLEAVED_ATTRIBS=35980]="INTERLEAVED_ATTRIBS",t[t.SEPARATE_ATTRIBS=35981]="SEPARATE_ATTRIBS",t[t.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER",t[t.TRANSFORM_FEEDBACK_BUFFER_BINDING=35983]="TRANSFORM_FEEDBACK_BUFFER_BINDING",t[t.TRANSFORM_FEEDBACK=36386]="TRANSFORM_FEEDBACK",t[t.TRANSFORM_FEEDBACK_PAUSED=36387]="TRANSFORM_FEEDBACK_PAUSED",t[t.TRANSFORM_FEEDBACK_ACTIVE=36388]="TRANSFORM_FEEDBACK_ACTIVE",t[t.TRANSFORM_FEEDBACK_BINDING=36389]="TRANSFORM_FEEDBACK_BINDING",t[t.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING=33296]="FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING",t[t.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE=33297]="FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE",t[t.FRAMEBUFFER_ATTACHMENT_RED_SIZE=33298]="FRAMEBUFFER_ATTACHMENT_RED_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE=33299]="FRAMEBUFFER_ATTACHMENT_GREEN_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE=33300]="FRAMEBUFFER_ATTACHMENT_BLUE_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE=33301]="FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE=33302]="FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE=33303]="FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE",t[t.FRAMEBUFFER_DEFAULT=33304]="FRAMEBUFFER_DEFAULT",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.DRAW_FRAMEBUFFER_BINDING=36006]="DRAW_FRAMEBUFFER_BINDING",t[t.READ_FRAMEBUFFER_BINDING=36010]="READ_FRAMEBUFFER_BINDING",t[t.RENDERBUFFER_SAMPLES=36011]="RENDERBUFFER_SAMPLES",t[t.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER=36052]="FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER",t[t.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE=36182]="FRAMEBUFFER_INCOMPLETE_MULTISAMPLE",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",t[t.UNIFORM_BUFFER_BINDING=35368]="UNIFORM_BUFFER_BINDING",t[t.UNIFORM_BUFFER_START=35369]="UNIFORM_BUFFER_START",t[t.UNIFORM_BUFFER_SIZE=35370]="UNIFORM_BUFFER_SIZE",t[t.MAX_VERTEX_UNIFORM_BLOCKS=35371]="MAX_VERTEX_UNIFORM_BLOCKS",t[t.MAX_FRAGMENT_UNIFORM_BLOCKS=35373]="MAX_FRAGMENT_UNIFORM_BLOCKS",t[t.MAX_COMBINED_UNIFORM_BLOCKS=35374]="MAX_COMBINED_UNIFORM_BLOCKS",t[t.MAX_UNIFORM_BUFFER_BINDINGS=35375]="MAX_UNIFORM_BUFFER_BINDINGS",t[t.MAX_UNIFORM_BLOCK_SIZE=35376]="MAX_UNIFORM_BLOCK_SIZE",t[t.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS=35377]="MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS",t[t.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS=35379]="MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS",t[t.UNIFORM_BUFFER_OFFSET_ALIGNMENT=35380]="UNIFORM_BUFFER_OFFSET_ALIGNMENT",t[t.ACTIVE_UNIFORM_BLOCKS=35382]="ACTIVE_UNIFORM_BLOCKS",t[t.UNIFORM_TYPE=35383]="UNIFORM_TYPE",t[t.UNIFORM_SIZE=35384]="UNIFORM_SIZE",t[t.UNIFORM_BLOCK_INDEX=35386]="UNIFORM_BLOCK_INDEX",t[t.UNIFORM_OFFSET=35387]="UNIFORM_OFFSET",t[t.UNIFORM_ARRAY_STRIDE=35388]="UNIFORM_ARRAY_STRIDE",t[t.UNIFORM_MATRIX_STRIDE=35389]="UNIFORM_MATRIX_STRIDE",t[t.UNIFORM_IS_ROW_MAJOR=35390]="UNIFORM_IS_ROW_MAJOR",t[t.UNIFORM_BLOCK_BINDING=35391]="UNIFORM_BLOCK_BINDING",t[t.UNIFORM_BLOCK_DATA_SIZE=35392]="UNIFORM_BLOCK_DATA_SIZE",t[t.UNIFORM_BLOCK_ACTIVE_UNIFORMS=35394]="UNIFORM_BLOCK_ACTIVE_UNIFORMS",t[t.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES=35395]="UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES",t[t.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER=35396]="UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER",t[t.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER=35398]="UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER",t[t.OBJECT_TYPE=37138]="OBJECT_TYPE",t[t.SYNC_CONDITION=37139]="SYNC_CONDITION",t[t.SYNC_STATUS=37140]="SYNC_STATUS",t[t.SYNC_FLAGS=37141]="SYNC_FLAGS",t[t.SYNC_FENCE=37142]="SYNC_FENCE",t[t.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE",t[t.UNSIGNALED=37144]="UNSIGNALED",t[t.SIGNALED=37145]="SIGNALED",t[t.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",t[t.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",t[t.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",t[t.WAIT_FAILED=37149]="WAIT_FAILED",t[t.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT",t[t.COLOR=6144]="COLOR",t[t.DEPTH=6145]="DEPTH",t[t.STENCIL=6146]="STENCIL",t[t.MIN=32775]="MIN",t[t.MAX=32776]="MAX",t[t.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",t[t.STREAM_READ=35041]="STREAM_READ",t[t.STREAM_COPY=35042]="STREAM_COPY",t[t.STATIC_READ=35045]="STATIC_READ",t[t.STATIC_COPY=35046]="STATIC_COPY",t[t.DYNAMIC_READ=35049]="DYNAMIC_READ",t[t.DYNAMIC_COPY=35050]="DYNAMIC_COPY",t[t.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",t[t.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8",t[t.INVALID_INDEX=4294967295]="INVALID_INDEX",t[t.TIMEOUT_IGNORED=-1]="TIMEOUT_IGNORED",t[t.MAX_CLIENT_WAIT_TIMEOUT_WEBGL=37447]="MAX_CLIENT_WAIT_TIMEOUT_WEBGL",t[t.UNMASKED_VENDOR_WEBGL=37445]="UNMASKED_VENDOR_WEBGL",t[t.UNMASKED_RENDERER_WEBGL=37446]="UNMASKED_RENDERER_WEBGL",t[t.MAX_TEXTURE_MAX_ANISOTROPY_EXT=34047]="MAX_TEXTURE_MAX_ANISOTROPY_EXT",t[t.TEXTURE_MAX_ANISOTROPY_EXT=34046]="TEXTURE_MAX_ANISOTROPY_EXT",t[t.R16_EXT=33322]="R16_EXT",t[t.RG16_EXT=33324]="RG16_EXT",t[t.RGB16_EXT=32852]="RGB16_EXT",t[t.RGBA16_EXT=32859]="RGBA16_EXT",t[t.R16_SNORM_EXT=36760]="R16_SNORM_EXT",t[t.RG16_SNORM_EXT=36761]="RG16_SNORM_EXT",t[t.RGB16_SNORM_EXT=36762]="RGB16_SNORM_EXT",t[t.RGBA16_SNORM_EXT=36763]="RGBA16_SNORM_EXT",t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",t[t.COMPRESSED_RED_RGTC1_EXT=36283]="COMPRESSED_RED_RGTC1_EXT",t[t.COMPRESSED_SIGNED_RED_RGTC1_EXT=36284]="COMPRESSED_SIGNED_RED_RGTC1_EXT",t[t.COMPRESSED_RED_GREEN_RGTC2_EXT=36285]="COMPRESSED_RED_GREEN_RGTC2_EXT",t[t.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT=36286]="COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT",t[t.COMPRESSED_RGBA_BPTC_UNORM_EXT=36492]="COMPRESSED_RGBA_BPTC_UNORM_EXT",t[t.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT=36493]="COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT",t[t.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT=36494]="COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT",t[t.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT=36495]="COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37493]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ETC2=37494]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37495]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37496]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37497]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",t[t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",t[t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",t[t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",t[t.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",t[t.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",t[t.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",t[t.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL",t[t.COMPRESSED_RGBA_ASTC_4x4_KHR=37808]="COMPRESSED_RGBA_ASTC_4x4_KHR",t[t.COMPRESSED_RGBA_ASTC_5x4_KHR=37809]="COMPRESSED_RGBA_ASTC_5x4_KHR",t[t.COMPRESSED_RGBA_ASTC_5x5_KHR=37810]="COMPRESSED_RGBA_ASTC_5x5_KHR",t[t.COMPRESSED_RGBA_ASTC_6x5_KHR=37811]="COMPRESSED_RGBA_ASTC_6x5_KHR",t[t.COMPRESSED_RGBA_ASTC_6x6_KHR=37812]="COMPRESSED_RGBA_ASTC_6x6_KHR",t[t.COMPRESSED_RGBA_ASTC_8x5_KHR=37813]="COMPRESSED_RGBA_ASTC_8x5_KHR",t[t.COMPRESSED_RGBA_ASTC_8x6_KHR=37814]="COMPRESSED_RGBA_ASTC_8x6_KHR",t[t.COMPRESSED_RGBA_ASTC_8x8_KHR=37815]="COMPRESSED_RGBA_ASTC_8x8_KHR",t[t.COMPRESSED_RGBA_ASTC_10x5_KHR=37816]="COMPRESSED_RGBA_ASTC_10x5_KHR",t[t.COMPRESSED_RGBA_ASTC_10x6_KHR=37817]="COMPRESSED_RGBA_ASTC_10x6_KHR",t[t.COMPRESSED_RGBA_ASTC_10x8_KHR=37818]="COMPRESSED_RGBA_ASTC_10x8_KHR",t[t.COMPRESSED_RGBA_ASTC_10x10_KHR=37819]="COMPRESSED_RGBA_ASTC_10x10_KHR",t[t.COMPRESSED_RGBA_ASTC_12x10_KHR=37820]="COMPRESSED_RGBA_ASTC_12x10_KHR",t[t.COMPRESSED_RGBA_ASTC_12x12_KHR=37821]="COMPRESSED_RGBA_ASTC_12x12_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR=37840]="COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR=37841]="COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR=37842]="COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR=37843]="COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR=37844]="COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR=37845]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR=37846]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR=37847]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR=37848]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR=37849]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR=37850]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR=37851]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR=37852]="COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR=37853]="COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR",t[t.QUERY_COUNTER_BITS_EXT=34916]="QUERY_COUNTER_BITS_EXT",t[t.CURRENT_QUERY_EXT=34917]="CURRENT_QUERY_EXT",t[t.QUERY_RESULT_EXT=34918]="QUERY_RESULT_EXT",t[t.QUERY_RESULT_AVAILABLE_EXT=34919]="QUERY_RESULT_AVAILABLE_EXT",t[t.TIME_ELAPSED_EXT=35007]="TIME_ELAPSED_EXT",t[t.TIMESTAMP_EXT=36392]="TIMESTAMP_EXT",t[t.GPU_DISJOINT_EXT=36795]="GPU_DISJOINT_EXT",t[t.COMPLETION_STATUS_KHR=37297]="COMPLETION_STATUS_KHR",t[t.DEPTH_CLAMP_EXT=34383]="DEPTH_CLAMP_EXT",t[t.FIRST_VERTEX_CONVENTION_WEBGL=36429]="FIRST_VERTEX_CONVENTION_WEBGL",t[t.LAST_VERTEX_CONVENTION_WEBGL=36430]="LAST_VERTEX_CONVENTION_WEBGL",t[t.PROVOKING_VERTEX_WEBL=36431]="PROVOKING_VERTEX_WEBL",t[t.POLYGON_MODE_WEBGL=2880]="POLYGON_MODE_WEBGL",t[t.POLYGON_OFFSET_LINE_WEBGL=10754]="POLYGON_OFFSET_LINE_WEBGL",t[t.LINE_WEBGL=6913]="LINE_WEBGL",t[t.FILL_WEBGL=6914]="FILL_WEBGL",t[t.MAX_CLIP_DISTANCES_WEBGL=3378]="MAX_CLIP_DISTANCES_WEBGL",t[t.MAX_CULL_DISTANCES_WEBGL=33529]="MAX_CULL_DISTANCES_WEBGL",t[t.MAX_COMBINED_CLIP_AND_CULL_DISTANCES_WEBGL=33530]="MAX_COMBINED_CLIP_AND_CULL_DISTANCES_WEBGL",t[t.CLIP_DISTANCE0_WEBGL=12288]="CLIP_DISTANCE0_WEBGL",t[t.CLIP_DISTANCE1_WEBGL=12289]="CLIP_DISTANCE1_WEBGL",t[t.CLIP_DISTANCE2_WEBGL=12290]="CLIP_DISTANCE2_WEBGL",t[t.CLIP_DISTANCE3_WEBGL=12291]="CLIP_DISTANCE3_WEBGL",t[t.CLIP_DISTANCE4_WEBGL=12292]="CLIP_DISTANCE4_WEBGL",t[t.CLIP_DISTANCE5_WEBGL=12293]="CLIP_DISTANCE5_WEBGL",t[t.CLIP_DISTANCE6_WEBGL=12294]="CLIP_DISTANCE6_WEBGL",t[t.CLIP_DISTANCE7_WEBGL=12295]="CLIP_DISTANCE7_WEBGL",t[t.POLYGON_OFFSET_CLAMP_EXT=36379]="POLYGON_OFFSET_CLAMP_EXT",t[t.LOWER_LEFT_EXT=36001]="LOWER_LEFT_EXT",t[t.UPPER_LEFT_EXT=36002]="UPPER_LEFT_EXT",t[t.NEGATIVE_ONE_TO_ONE_EXT=37726]="NEGATIVE_ONE_TO_ONE_EXT",t[t.ZERO_TO_ONE_EXT=37727]="ZERO_TO_ONE_EXT",t[t.CLIP_ORIGIN_EXT=37724]="CLIP_ORIGIN_EXT",t[t.CLIP_DEPTH_MODE_EXT=37725]="CLIP_DEPTH_MODE_EXT",t[t.SRC1_COLOR_WEBGL=35065]="SRC1_COLOR_WEBGL",t[t.SRC1_ALPHA_WEBGL=34185]="SRC1_ALPHA_WEBGL",t[t.ONE_MINUS_SRC1_COLOR_WEBGL=35066]="ONE_MINUS_SRC1_COLOR_WEBGL",t[t.ONE_MINUS_SRC1_ALPHA_WEBGL=35067]="ONE_MINUS_SRC1_ALPHA_WEBGL",t[t.MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL=35068]="MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL",t[t.MIRROR_CLAMP_TO_EDGE_EXT=34627]="MIRROR_CLAMP_TO_EDGE_EXT"})(Ar||(Ar={}))});var Xx=E(()=>{Gx()});function $x(t=!0){let e=HTMLCanvasElement.prototype;if(!t&&e.originalGetContext){e.getContext=e.originalGetContext,e.originalGetContext=void 0;return}e.originalGetContext=e.getContext,e.getContext=function(r,i){if(r==="webgl"||r==="experimental-webgl"){let n=this.originalGetContext("webgl2",i);return n instanceof HTMLElement&&p2(n),n}return this.originalGetContext(r,i)}}function p2(t){t.getExtension("EXT_color_buffer_float");let e={...f2,WEBGL_disjoint_timer_query:t.getExtension("EXT_disjoint_timer_query_webgl2"),WEBGL_draw_buffers:u2(t),OES_vertex_array_object:d2(t),ANGLE_instanced_arrays:h2(t)},r=t.getExtension;t.getExtension=function(n){let o=r.call(t,n);return o||(n in e?e[n]:null)};let i=t.getSupportedExtensions;t.getSupportedExtensions=function(){return(i.apply(t)||[])?.concat(Object.keys(e))}}var f2,u2,d2,h2,Kx=E(()=>{f2={WEBGL_depth_texture:{UNSIGNED_INT_24_8_WEBGL:34042},OES_element_index_uint:{},OES_texture_float:{},OES_texture_half_float:{HALF_FLOAT_OES:5131},EXT_color_buffer_float:{},OES_standard_derivatives:{FRAGMENT_SHADER_DERIVATIVE_HINT_OES:35723},EXT_frag_depth:{},EXT_blend_minmax:{MIN_EXT:32775,MAX_EXT:32776},EXT_shader_texture_lod:{}},u2=t=>({drawBuffersWEBGL(e){return t.drawBuffers(e)},COLOR_ATTACHMENT0_WEBGL:36064,COLOR_ATTACHMENT1_WEBGL:36065,COLOR_ATTACHMENT2_WEBGL:36066,COLOR_ATTACHMENT3_WEBGL:36067}),d2=t=>({VERTEX_ARRAY_BINDING_OES:34229,createVertexArrayOES(){return t.createVertexArray()},deleteVertexArrayOES(e){return t.deleteVertexArray(e)},isVertexArrayOES(e){return t.isVertexArray(e)},bindVertexArrayOES(e){return t.bindVertexArray(e)}}),h2=t=>({VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE:35070,drawArraysInstancedANGLE(...e){return t.drawArraysInstanced(...e)},drawElementsInstancedANGLE(...e){return t.drawElementsInstanced(...e)},vertexAttribDivisorANGLE(...e){return t.vertexAttribDivisor(...e)}})});async function Xc(t,e){let r=document.getElementsByTagName("head")[0];if(!r)throw new Error("loadScript");let i=document.createElement("script");return i.setAttribute("type","text/javascript"),i.setAttribute("src",t),e&&(i.id=e),new Promise((n,o)=>{i.onload=n,i.onerror=s=>o(new Error(`Unable to load script '${t}': ${s}`)),r.appendChild(i)})}var dp=E(()=>{});function ti(t){let e=t.luma||{_polyfilled:!1,extensions:{},softwareRenderer:!1};return e._polyfilled??=!1,e.extensions||={},t.luma=e,e}var $c=E(()=>{});async function Jx(t){if(!globalThis.SPECTOR)try{await Xc(t.debugSpectorJSUrl||Kc.debugSpectorJSUrl)}catch(e){x.warn(String(e))}}function Qx(t){if(t={...Kc,...t},!t.debugSpectorJS)return null;if(!ze&&globalThis.SPECTOR&&!globalThis.luma?.spector){x.probe(g2,"SPECTOR found and initialized. Start with `luma.spector.displayUI()`")();let{Spector:e}=globalThis.SPECTOR;ze=new e,globalThis.luma&&(globalThis.luma.spector=ze)}if(!ze)return null;if(Yx||(Yx=!0,ze.spyCanvases(),ze?.onCaptureStarted.add(e=>x.info("Spector capture started:",e)()),ze?.onCapture.add(e=>{x.info("Spector capture complete:",e)(),ze?.getResultUI(),ze?.resultView.display(),ze?.resultView.addCapture(e)})),t.gl){let e=t.gl,r=ti(e),i=r.device;ze?.startCapture(t.gl,500),r.device=i,new Promise(n=>setTimeout(n,2e3)).then(n=>{x.info("Spector capture stopped after 2 seconds")(),ze?.stopCapture()})}return ze}var g2,ze,Yx,Kc,hp=E(()=>{L();dp();$c();g2=1,ze=null,Yx=!1,Kc={debugSpectorJS:x.get("debug-spectorjs"),debugSpectorJSUrl:"https://cdn.jsdelivr.net/npm/spectorjs@0.9.30/dist/spector.bundle.js",gl:void 0}});function qx(t){return t.luma=t.luma||{},t.luma}async function e0(){Ee()&&!globalThis.WebGLDebugUtils&&(globalThis.global=globalThis.global||globalThis,globalThis.global.module={},await Xc(m2))}function t0(t,e={}){return e.debugWebGL||e.traceWebGL?b2(t,e):_2(t)}function _2(t){let e=qx(t);return e.realContext?e.realContext:t}function b2(t,e){if(!globalThis.WebGLDebugUtils)return x.warn("webgl-debug not loaded")(),t;let r=qx(t);if(r.debugContext)return r.debugContext;globalThis.WebGLDebugUtils.init({...Ar,...t});let i=globalThis.WebGLDebugUtils.makeDebugContext(t,A2.bind(null,e),y2.bind(null,e));for(let s in Ar)!(s in i)&&typeof Ar[s]=="number"&&(i[s]=Ar[s]);class n{}Object.setPrototypeOf(i,Object.getPrototypeOf(t)),Object.setPrototypeOf(n,i);let o=Object.create(n);return r.realContext=t,r.debugContext=o,o.luma=r,o.debug=!0,o}function Zx(t,e){e=Array.from(e).map(i=>i===void 0?"undefined":i);let r=globalThis.WebGLDebugUtils.glFunctionArgsToString(t,e);return r=`${r.slice(0,100)}${r.length>100?"...":""}`,`gl.${t}(${r})`}function A2(t,e,r,i){i=Array.from(i).map(a=>a===void 0?"undefined":a);let n=globalThis.WebGLDebugUtils.glEnumToString(e),o=globalThis.WebGLDebugUtils.glFunctionArgsToString(r,i),s=`${n} in gl.${r}(${o})`;x.error("%cWebGL","color: white; background: red; padding: 2px 6px; border-radius: 3px;",s)();debugger;throw new Error(s)}function y2(t,e,r){let i="";t.traceWebGL&&x.level>=1&&(i=Zx(e,r),x.info(1,"%cWebGL","color: white; background: blue; padding: 2px 6px; border-radius: 3px;",i)());for(let n of r)if(n===void 0){i=i||Zx(e,r);debugger}}var m2,pp=E(()=>{L();Xx();qt();dp();m2="https://unpkg.com/webgl-debug@2.0.1/index.js"});function gp(t){return Array.isArray(t)||ArrayBuffer.isView(t)&&!(t instanceof DataView)}function ie(t,e,r){return e[t]!==void 0?e[t]:r[t]}var Qo,ce,r0,je,i0,Jo,n0,o0,mp,It,_p,s0,bp=E(()=>{Qo={3042:!1,32773:new Float32Array([0,0,0,0]),32777:32774,34877:32774,32969:1,32968:0,32971:1,32970:0,3106:new Float32Array([0,0,0,0]),3107:[!0,!0,!0,!0],2884:!1,2885:1029,2929:!1,2931:1,2932:513,2928:new Float32Array([0,1]),2930:!0,3024:!0,35725:null,36006:null,36007:null,34229:null,34964:null,2886:2305,33170:4352,2849:1,32823:!1,32824:0,10752:0,32926:!1,32928:!1,32938:1,32939:!1,3089:!1,3088:new Int32Array([0,0,1024,1024]),2960:!1,2961:0,2968:4294967295,36005:4294967295,2962:519,2967:0,2963:4294967295,34816:519,36003:0,36004:4294967295,2964:7680,2965:7680,2966:7680,34817:7680,34818:7680,34819:7680,2978:[0,0,1024,1024],36389:null,36662:null,36663:null,35053:null,35055:null,35723:4352,36010:null,35977:!1,3333:4,3317:4,37440:!1,37441:!1,37443:37444,3330:0,3332:0,3331:0,3314:0,32878:0,3316:0,3315:0,32877:0},ce=(t,e,r)=>e?t.enable(r):t.disable(r),r0=(t,e,r)=>t.hint(r,e),je=(t,e,r)=>t.pixelStorei(r,e),i0=(t,e,r)=>{let i=r===36006?36009:36008;return t.bindFramebuffer(i,e)},Jo=(t,e,r)=>{let n={34964:34962,36662:36662,36663:36663,35053:35051,35055:35052}[r];t.bindBuffer(n,e)};n0={3042:ce,32773:(t,e)=>t.blendColor(...e),32777:"blendEquation",34877:"blendEquation",32969:"blendFunc",32968:"blendFunc",32971:"blendFunc",32970:"blendFunc",3106:(t,e)=>t.clearColor(...e),3107:(t,e)=>t.colorMask(...e),2884:ce,2885:(t,e)=>t.cullFace(e),2929:ce,2931:(t,e)=>t.clearDepth(e),2932:(t,e)=>t.depthFunc(e),2928:(t,e)=>t.depthRange(...e),2930:(t,e)=>t.depthMask(e),3024:ce,35723:r0,35725:(t,e)=>t.useProgram(e),36007:(t,e)=>t.bindRenderbuffer(36161,e),36389:(t,e)=>t.bindTransformFeedback?.(36386,e),34229:(t,e)=>t.bindVertexArray(e),36006:i0,36010:i0,34964:Jo,36662:Jo,36663:Jo,35053:Jo,35055:Jo,2886:(t,e)=>t.frontFace(e),33170:r0,2849:(t,e)=>t.lineWidth(e),32823:ce,32824:"polygonOffset",10752:"polygonOffset",35977:ce,32926:ce,32928:ce,32938:"sampleCoverage",32939:"sampleCoverage",3089:ce,3088:(t,e)=>t.scissor(...e),2960:ce,2961:(t,e)=>t.clearStencil(e),2968:(t,e)=>t.stencilMaskSeparate(1028,e),36005:(t,e)=>t.stencilMaskSeparate(1029,e),2962:"stencilFuncFront",2967:"stencilFuncFront",2963:"stencilFuncFront",34816:"stencilFuncBack",36003:"stencilFuncBack",36004:"stencilFuncBack",2964:"stencilOpFront",2965:"stencilOpFront",2966:"stencilOpFront",34817:"stencilOpBack",34818:"stencilOpBack",34819:"stencilOpBack",2978:(t,e)=>t.viewport(...e),34383:ce,10754:ce,12288:ce,12289:ce,12290:ce,12291:ce,12292:ce,12293:ce,12294:ce,12295:ce,3333:je,3317:je,37440:je,37441:je,37443:je,3330:je,3332:je,3331:je,3314:je,32878:je,3316:je,3315:je,32877:je,framebuffer:(t,e)=>{let r=e&&"handle"in e?e.handle:e;return t.bindFramebuffer(36160,r)},blend:(t,e)=>e?t.enable(3042):t.disable(3042),blendColor:(t,e)=>t.blendColor(...e),blendEquation:(t,e)=>{let r=typeof e=="number"?[e,e]:e;t.blendEquationSeparate(...r)},blendFunc:(t,e)=>{let r=e?.length===2?[...e,...e]:e;t.blendFuncSeparate(...r)},clearColor:(t,e)=>t.clearColor(...e),clearDepth:(t,e)=>t.clearDepth(e),clearStencil:(t,e)=>t.clearStencil(e),colorMask:(t,e)=>t.colorMask(...e),cull:(t,e)=>e?t.enable(2884):t.disable(2884),cullFace:(t,e)=>t.cullFace(e),depthTest:(t,e)=>e?t.enable(2929):t.disable(2929),depthFunc:(t,e)=>t.depthFunc(e),depthMask:(t,e)=>t.depthMask(e),depthRange:(t,e)=>t.depthRange(...e),dither:(t,e)=>e?t.enable(3024):t.disable(3024),derivativeHint:(t,e)=>{t.hint(35723,e)},frontFace:(t,e)=>t.frontFace(e),mipmapHint:(t,e)=>t.hint(33170,e),lineWidth:(t,e)=>t.lineWidth(e),polygonOffsetFill:(t,e)=>e?t.enable(32823):t.disable(32823),polygonOffset:(t,e)=>t.polygonOffset(...e),sampleCoverage:(t,e)=>t.sampleCoverage(e[0],e[1]||!1),scissorTest:(t,e)=>e?t.enable(3089):t.disable(3089),scissor:(t,e)=>t.scissor(...e),stencilTest:(t,e)=>e?t.enable(2960):t.disable(2960),stencilMask:(t,e)=>{e=gp(e)?e:[e,e];let[r,i]=e;t.stencilMaskSeparate(1028,r),t.stencilMaskSeparate(1029,i)},stencilFunc:(t,e)=>{e=gp(e)&&e.length===3?[...e,...e]:e;let[r,i,n,o,s,a]=e;t.stencilFuncSeparate(1028,r,i,n),t.stencilFuncSeparate(1029,o,s,a)},stencilOp:(t,e)=>{e=gp(e)&&e.length===3?[...e,...e]:e;let[r,i,n,o,s,a]=e;t.stencilOpSeparate(1028,r,i,n),t.stencilOpSeparate(1029,o,s,a)},viewport:(t,e)=>t.viewport(...e)};o0={blendEquation:(t,e,r)=>t.blendEquationSeparate(ie(32777,e,r),ie(34877,e,r)),blendFunc:(t,e,r)=>t.blendFuncSeparate(ie(32969,e,r),ie(32968,e,r),ie(32971,e,r),ie(32970,e,r)),polygonOffset:(t,e,r)=>t.polygonOffset(ie(32824,e,r),ie(10752,e,r)),sampleCoverage:(t,e,r)=>t.sampleCoverage(ie(32938,e,r),ie(32939,e,r)),stencilFuncFront:(t,e,r)=>t.stencilFuncSeparate(1028,ie(2962,e,r),ie(2967,e,r),ie(2963,e,r)),stencilFuncBack:(t,e,r)=>t.stencilFuncSeparate(1029,ie(34816,e,r),ie(36003,e,r),ie(36004,e,r)),stencilOpFront:(t,e,r)=>t.stencilOpSeparate(1028,ie(2964,e,r),ie(2965,e,r),ie(2966,e,r)),stencilOpBack:(t,e,r)=>t.stencilOpSeparate(1029,ie(34817,e,r),ie(34818,e,r),ie(34819,e,r))},mp={enable:(t,e)=>t({[e]:!0}),disable:(t,e)=>t({[e]:!1}),pixelStorei:(t,e,r)=>t({[e]:r}),hint:(t,e,r)=>t({[e]:r}),useProgram:(t,e)=>t({35725:e}),bindRenderbuffer:(t,e,r)=>t({36007:r}),bindTransformFeedback:(t,e,r)=>t({36389:r}),bindVertexArray:(t,e)=>t({34229:e}),bindFramebuffer:(t,e,r)=>{switch(e){case 36160:return t({36006:r,36010:r});case 36009:return t({36006:r});case 36008:return t({36010:r});default:return null}},bindBuffer:(t,e,r)=>{let i={34962:[34964],36662:[36662],36663:[36663],35051:[35053],35052:[35055]}[e];return i?t({[i]:r}):{valueChanged:!0}},blendColor:(t,e,r,i,n)=>t({32773:new Float32Array([e,r,i,n])}),blendEquation:(t,e)=>t({32777:e,34877:e}),blendEquationSeparate:(t,e,r)=>t({32777:e,34877:r}),blendFunc:(t,e,r)=>t({32969:e,32968:r,32971:e,32970:r}),blendFuncSeparate:(t,e,r,i,n)=>t({32969:e,32968:r,32971:i,32970:n}),clearColor:(t,e,r,i,n)=>t({3106:new Float32Array([e,r,i,n])}),clearDepth:(t,e)=>t({2931:e}),clearStencil:(t,e)=>t({2961:e}),colorMask:(t,e,r,i,n)=>t({3107:[e,r,i,n]}),cullFace:(t,e)=>t({2885:e}),depthFunc:(t,e)=>t({2932:e}),depthRange:(t,e,r)=>t({2928:new Float32Array([e,r])}),depthMask:(t,e)=>t({2930:e}),frontFace:(t,e)=>t({2886:e}),lineWidth:(t,e)=>t({2849:e}),polygonOffset:(t,e,r)=>t({32824:e,10752:r}),sampleCoverage:(t,e,r)=>t({32938:e,32939:r}),scissor:(t,e,r,i,n)=>t({3088:new Int32Array([e,r,i,n])}),stencilMask:(t,e)=>t({2968:e,36005:e}),stencilMaskSeparate:(t,e,r)=>t({[e===1028?2968:36005]:r}),stencilFunc:(t,e,r,i)=>t({2962:e,2967:r,2963:i,34816:e,36003:r,36004:i}),stencilFuncSeparate:(t,e,r,i,n)=>t({[e===1028?2962:34816]:r,[e===1028?2967:36003]:i,[e===1028?2963:36004]:n}),stencilOp:(t,e,r,i)=>t({2964:e,2965:r,2966:i,34817:e,34818:r,34819:i}),stencilOpSeparate:(t,e,r,i,n)=>t({[e===1028?2964:34817]:r,[e===1028?2965:34818]:i,[e===1028?2966:34819]:n}),viewport:(t,e,r,i,n)=>t({2978:[e,r,i,n]})},It=(t,e)=>t.isEnabled(e),_p={3042:It,2884:It,2929:It,3024:It,32823:It,32926:It,32928:It,3089:It,2960:It,35977:It},s0=new Set([34016,36388,36387,35983,35368,34965,35739,35738,3074,34853,34854,34855,34856,34857,34858,34859,34860,34861,34862,34863,34864,34865,34866,34867,34868,35097,32873,35869,32874,34068])});function dt(t,e){if(x2(e))return;let r={};for(let n in e){let o=Number(n),s=n0[n];s&&(typeof s=="string"?r[s]=!0:s(t,e[n],o))}let i=t.lumaState?.cache;if(i)for(let n in r){let o=o0[n];o(t,e,i)}}function Yc(t,e=Qo){if(typeof e=="number"){let n=e,o=_p[n];return o?o(t,n):t.getParameter(n)}let r=Array.isArray(e)?e:Object.keys(e),i={};for(let n of r){let o=_p[n];i[n]=o?o(t,Number(n)):t.getParameter(Number(n))}return i}function a0(t){dt(t,Qo)}function x2(t){for(let e in t)return!1;return!0}var Ki=E(()=>{bp()});function l0(t,e){if(t===e)return!0;if(c0(t)&&c0(e)&&t.length===e.length){for(let r=0;r<t.length;++r)if(t[r]!==e[r])return!1;return!0}return!1}function c0(t){return Array.isArray(t)||ArrayBuffer.isView(t)}var f0=E(()=>{});function u0(t,e){let r=t[e].bind(t);t[e]=function(n){if(n===void 0||s0.has(n))return r(n);let o=ht.get(t);return n in o.cache||(o.cache[n]=r(n)),o.enable?o.cache[n]:r(n)},Object.defineProperty(t[e],"name",{value:`${e}-from-cache`,configurable:!1})}function T2(t,e,r){if(!t[e])return;let i=t[e].bind(t);t[e]=function(...o){let s=ht.get(t),{valueChanged:a,oldValue:c}=r(s._updateCache,...o);return a&&i(...o),c},Object.defineProperty(t[e],"name",{value:`${e}-to-cache`,configurable:!1})}function S2(t){let e=t.useProgram.bind(t);t.useProgram=function(i){let n=ht.get(t);n.program!==i&&(e(i),n.program=i)}}var ht,Ap=E(()=>{Ki();f0();bp();ht=class{static get(e){return e.lumaState}gl;program=null;stateStack=[];enable=!0;cache=null;log;initialized=!1;constructor(e,r){this.gl=e,this.log=r?.log||(()=>{}),this._updateCache=this._updateCache.bind(this),Object.seal(this)}push(e={}){this.stateStack.push({})}pop(){let e=this.stateStack[this.stateStack.length-1];dt(this.gl,e),this.stateStack.pop()}trackState(e,r){if(this.cache=r?.copyState?Yc(e):Object.assign({},Qo),this.initialized)throw new Error("WebGLStateTracker");this.initialized=!0,this.gl.lumaState=this,S2(e);for(let i in mp){let n=mp[i];T2(e,i,n)}u0(e,"getParameter"),u0(e,"isEnabled")}_updateCache(e){let r=!1,i,n=this.stateStack.length>0?this.stateStack[this.stateStack.length-1]:null;for(let o in e){let s=e[o],a=this.cache[o];l0(s,a)||(r=!0,i=a,n&&!(o in n)&&(n[o]=a),this.cache[o]=s)}return{valueChanged:r,oldValue:i}}}});function d0(t,e,r){let i="",n=c=>{let l=c.statusMessage;l&&(i||=l)};t.addEventListener("webglcontextcreationerror",n,!1);let o=r.failIfMajorPerformanceCaveat!==!0,s={preserveDrawingBuffer:!0,...r,failIfMajorPerformanceCaveat:!0},a=null;try{a||=t.getContext("webgl2",s),!a&&s.failIfMajorPerformanceCaveat&&(i||="Only software GPU is available. Set `failIfMajorPerformanceCaveat: false` to allow.");let c=!1;if(!a&&o&&(s.failIfMajorPerformanceCaveat=!1,a=t.getContext("webgl2",s),c=!0),a||(a=t.getContext("webgl",{}),a&&(a=null,i||="Your browser only supports WebGL1")),!a)throw i||="Your browser does not support WebGL",new Error(`Failed to create WebGL context: ${i}`);let l=ti(a);l.softwareRenderer=c;let{onContextLost:f,onContextRestored:u}=e;return t.addEventListener("webglcontextlost",d=>f(d),!1),t.addEventListener("webglcontextrestored",d=>u(d),!1),a}finally{t.removeEventListener("webglcontextcreationerror",n,!1)}}var h0=E(()=>{$c()});function pt(t,e,r){return r[e]===void 0&&(r[e]=t.getExtension(e)||null),r[e]}var Zo=E(()=>{});function p0(t,e){let r=t.getParameter(7936),i=t.getParameter(7937);pt(t,"WEBGL_debug_renderer_info",e);let n=e.WEBGL_debug_renderer_info,o=t.getParameter(n?n.UNMASKED_VENDOR_WEBGL:7936),s=t.getParameter(n?n.UNMASKED_RENDERER_WEBGL:7937),a=o||r,c=s||i,l=t.getParameter(7938),f=g0(a,c),u=E2(a,c),d=C2(a,c);return{type:"webgl",gpu:f,gpuType:d,gpuBackend:u,vendor:a,renderer:c,version:l,shadingLanguage:"glsl",shadingLanguageVersion:300}}function g0(t,e){return/NVIDIA/i.exec(t)||/NVIDIA/i.exec(e)?"nvidia":/INTEL/i.exec(t)||/INTEL/i.exec(e)?"intel":/Apple/i.exec(t)||/Apple/i.exec(e)?"apple":/AMD/i.exec(t)||/AMD/i.exec(e)||/ATI/i.exec(t)||/ATI/i.exec(e)?"amd":/SwiftShader/i.exec(t)||/SwiftShader/i.exec(e)?"software":"unknown"}function E2(t,e){return/Metal/i.exec(t)||/Metal/i.exec(e)?"metal":/ANGLE/i.exec(t)||/ANGLE/i.exec(e)?"opengl":"unknown"}function C2(t,e){if(/SwiftShader/i.exec(t)||/SwiftShader/i.exec(e))return"cpu";switch(g0(t,e)){case"apple":return v2(t,e)?"integrated":"unknown";case"intel":return"integrated";case"software":return"cpu";case"unknown":return"unknown";default:return"discrete"}}function v2(t,e){return/Apple (M\d|A\d|GPU)/i.test(`${t} ${e}`)}var m0=E(()=>{Zo()});function Jc(t){switch(t){case"uint8":return 5121;case"sint8":return 5120;case"unorm8":return 5121;case"snorm8":return 5120;case"uint16":return 5123;case"sint16":return 5122;case"unorm16":return 5123;case"snorm16":return 5122;case"uint32":return 5125;case"sint32":return 5124;case"float16":return 5131;case"float32":return 5126}throw new Error(String(t))}var yp=E(()=>{});function A0(t){return t in Zc}function Cp(t,e,r){return y0(t,e,r,new Set)}function y0(t,e,r,i){let n=Zc[e];if(!n||i.has(e))return!1;i.add(e);let o=(n.features||[]).every(s=>y0(t,s,r,i));return i.delete(e),o?(n.extensions||[]).every(s=>!!pt(t,s,r)):!1}function x0(t,e,r){let i=e.create,n=qc[e.format];n?.gl===void 0&&(i=!1),n?.x&&(i=i&&!!pt(t,n.x,r)),e.format==="stencil8"&&(i=!1);let o=n?.r===!1?!1:n?.r===void 0||Cp(t,n.r,r),s=i&&e.render&&o&&L2(t,e.format,r);return{format:e.format,create:i&&e.create,render:s,filter:i&&e.filter,blend:i&&e.blend,store:i&&e.store}}function L2(t,e,r){let i=qc[e],n=i?.gl;if(n===void 0||i?.x&&!pt(t,i.x,r))return!1;let o=t.getParameter(32873),s=t.getParameter(36006),a=t.createTexture(),c=t.createFramebuffer();if(!a||!c)return!1;let l=0,f=Number(t.getError());for(;f!==l;)f=t.getError();let u=!1;try{if(t.bindTexture(3553,a),t.texStorage2D(3553,1,n,1,1),Number(t.getError())!==l)return!1;t.bindFramebuffer(36160,c),t.framebufferTexture2D(36160,36064,3553,a,0),u=Number(t.checkFramebufferStatus(36160))===36053&&Number(t.getError())===l}finally{t.bindFramebuffer(36160,s),t.deleteFramebuffer(c),t.bindTexture(3553,o),t.deleteTexture(a)}return u}function el(t){let e=qc[t],r=N2(t),i=me.getInfo(t);return i.compressed&&(e.dataFormat=r),{internalFormat:r,format:e?.dataFormat||F2(i.channels,i.integer,i.normalized,r),type:i.dataType?Jc(i.dataType):e?.types?.[0]||5121,compressed:i.compressed||!1}}function T0(t){switch(me.getInfo(t).attachment){case"depth":return 36096;case"stencil":return 36128;case"depth-stencil":return 33306;default:throw new Error(`Not a depth stencil format: ${t}`)}}function F2(t,e,r,i){if(i===6408||i===6407)return i;switch(t){case"r":return e&&!r?36244:6403;case"rg":return e&&!r?33320:33319;case"rgb":return e&&!r?36248:6407;case"rgba":return e&&!r?36249:6408;case"bgra":throw new Error("bgra pixels not supported by WebGL");default:return 6408}}function N2(t){let r=qc[t]?.gl;if(r===void 0)throw new Error(`Unsupported texture format ${t}`);return r}var qo,es,Yi,Ji,R2,M2,P2,w2,I2,B2,_0,b0,xp,Tp,Sp,Ep,Qc,O2,Zc,qc,Qi=E(()=>{L();Zo();yp();qo="WEBGL_compressed_texture_s3tc",es="WEBGL_compressed_texture_s3tc_srgb",Yi="EXT_texture_compression_rgtc",Ji="EXT_texture_compression_bptc",R2="WEBGL_compressed_texture_etc",M2="WEBGL_compressed_texture_astc",P2="WEBGL_compressed_texture_etc1",w2="WEBGL_compressed_texture_pvrtc",I2="WEBGL_compressed_texture_atc",B2="EXT_texture_norm16",_0="EXT_render_snorm",b0="EXT_color_buffer_float",xp="snorm8-renderable-webgl",Tp="norm16-renderable-webgl",Sp="snorm16-renderable-webgl",Ep="float16-renderable-webgl",Qc="float32-renderable-webgl",O2="rgb9e5ufloat-renderable-webgl",Zc={"float32-renderable-webgl":{extensions:[b0]},"float16-renderable-webgl":{extensions:["EXT_color_buffer_half_float"]},"rgb9e5ufloat-renderable-webgl":{extensions:["WEBGL_render_shared_exponent"]},"snorm8-renderable-webgl":{extensions:[_0]},"norm16-webgl":{extensions:[B2]},"norm16-renderable-webgl":{features:["norm16-webgl"]},"snorm16-renderable-webgl":{features:["norm16-webgl"],extensions:[_0]},"float32-filterable":{extensions:["OES_texture_float_linear"]},"float16-filterable-webgl":{extensions:["OES_texture_half_float_linear"]},"texture-filterable-anisotropic-webgl":{extensions:["EXT_texture_filter_anisotropic"]},"texture-blend-float-webgl":{extensions:["EXT_float_blend"]},"texture-compression-bc":{extensions:[qo,es,Yi,Ji]},"texture-compression-bc5-webgl":{extensions:[Yi]},"texture-compression-bc7-webgl":{extensions:[Ji]},"texture-compression-etc2":{extensions:[R2]},"texture-compression-astc":{extensions:[M2]},"texture-compression-etc1-webgl":{extensions:[P2]},"texture-compression-pvrtc-webgl":{extensions:[w2]},"texture-compression-atc-webgl":{extensions:[I2]}};qc={r8unorm:{gl:33321,rb:!0},r8snorm:{gl:36756,r:xp},r8uint:{gl:33330,rb:!0},r8sint:{gl:33329,rb:!0},rg8unorm:{gl:33323,rb:!0},rg8snorm:{gl:36757,r:xp},rg8uint:{gl:33336,rb:!0},rg8sint:{gl:33335,rb:!0},r16uint:{gl:33332,rb:!0},r16sint:{gl:33331,rb:!0},r16float:{gl:33325,rb:!0,r:Ep},r16unorm:{gl:33322,rb:!0,r:Tp},r16snorm:{gl:36760,r:Sp},"rgba4unorm-webgl":{gl:32854,rb:!0},"rgb565unorm-webgl":{gl:36194,rb:!0},"rgb5a1unorm-webgl":{gl:32855,rb:!0},"rgb8unorm-webgl":{gl:32849},"rgb8snorm-webgl":{gl:36758},rgba8unorm:{gl:32856},"rgba8unorm-srgb":{gl:35907},rgba8snorm:{gl:36759,r:xp},rgba8uint:{gl:36220},rgba8sint:{gl:36238},bgra8unorm:{},"bgra8unorm-srgb":{},rg16uint:{gl:33338},rg16sint:{gl:33337},rg16float:{gl:33327,rb:!0,r:Ep},rg16unorm:{gl:33324,r:Tp},rg16snorm:{gl:36761,r:Sp},r32uint:{gl:33334,rb:!0},r32sint:{gl:33333,rb:!0},r32float:{gl:33326,r:Qc},rgb9e5ufloat:{gl:35901,r:O2},rg11b10ufloat:{gl:35898,rb:!0},rgb10a2unorm:{gl:32857,rb:!0},rgb10a2uint:{gl:36975,rb:!0},"rgb16unorm-webgl":{gl:32852,r:!1},"rgb16snorm-webgl":{gl:36762,r:!1},rg32uint:{gl:33340,rb:!0},rg32sint:{gl:33339,rb:!0},rg32float:{gl:33328,rb:!0,r:Qc},rgba16uint:{gl:36214,rb:!0},rgba16sint:{gl:36232,rb:!0},rgba16float:{gl:34842,r:Ep},rgba16unorm:{gl:32859,rb:!0,r:Tp},rgba16snorm:{gl:36763,r:Sp},"rgb32float-webgl":{gl:34837,x:b0,r:Qc,dataFormat:6407,types:[5126]},rgba32uint:{gl:36208,rb:!0},rgba32sint:{gl:36226,rb:!0},rgba32float:{gl:34836,rb:!0,r:Qc},stencil8:{gl:36168,rb:!0},depth16unorm:{gl:33189,dataFormat:6402,types:[5123],rb:!0},depth24plus:{gl:33190,dataFormat:6402,types:[5125]},depth32float:{gl:36012,dataFormat:6402,types:[5126],rb:!0},"depth24plus-stencil8":{gl:35056,rb:!0,depthTexture:!0,dataFormat:34041,types:[34042]},"depth32float-stencil8":{gl:36013,dataFormat:34041,types:[36269],rb:!0},"bc1-rgb-unorm-webgl":{gl:33776,x:qo},"bc1-rgb-unorm-srgb-webgl":{gl:35916,x:es},"bc1-rgba-unorm":{gl:33777,x:qo},"bc1-rgba-unorm-srgb":{gl:35916,x:es},"bc2-rgba-unorm":{gl:33778,x:qo},"bc2-rgba-unorm-srgb":{gl:35918,x:es},"bc3-rgba-unorm":{gl:33779,x:qo},"bc3-rgba-unorm-srgb":{gl:35919,x:es},"bc4-r-unorm":{gl:36283,x:Yi},"bc4-r-snorm":{gl:36284,x:Yi},"bc5-rg-unorm":{gl:36285,x:Yi},"bc5-rg-snorm":{gl:36286,x:Yi},"bc6h-rgb-ufloat":{gl:36495,x:Ji},"bc6h-rgb-float":{gl:36494,x:Ji},"bc7-rgba-unorm":{gl:36492,x:Ji},"bc7-rgba-unorm-srgb":{gl:36493,x:Ji},"etc2-rgb8unorm":{gl:37492},"etc2-rgb8unorm-srgb":{gl:37494},"etc2-rgb8a1unorm":{gl:37496},"etc2-rgb8a1unorm-srgb":{gl:37497},"etc2-rgba8unorm":{gl:37493},"etc2-rgba8unorm-srgb":{gl:37495},"eac-r11unorm":{gl:37488},"eac-r11snorm":{gl:37489},"eac-rg11unorm":{gl:37490},"eac-rg11snorm":{gl:37491},"astc-4x4-unorm":{gl:37808},"astc-4x4-unorm-srgb":{gl:37840},"astc-5x4-unorm":{gl:37809},"astc-5x4-unorm-srgb":{gl:37841},"astc-5x5-unorm":{gl:37810},"astc-5x5-unorm-srgb":{gl:37842},"astc-6x5-unorm":{gl:37811},"astc-6x5-unorm-srgb":{gl:37843},"astc-6x6-unorm":{gl:37812},"astc-6x6-unorm-srgb":{gl:37844},"astc-8x5-unorm":{gl:37813},"astc-8x5-unorm-srgb":{gl:37845},"astc-8x6-unorm":{gl:37814},"astc-8x6-unorm-srgb":{gl:37846},"astc-8x8-unorm":{gl:37815},"astc-8x8-unorm-srgb":{gl:37847},"astc-10x5-unorm":{gl:37816},"astc-10x5-unorm-srgb":{gl:37848},"astc-10x6-unorm":{gl:37817},"astc-10x6-unorm-srgb":{gl:37849},"astc-10x8-unorm":{gl:37818},"astc-10x8-unorm-srgb":{gl:37850},"astc-10x10-unorm":{gl:37819},"astc-10x10-unorm-srgb":{gl:37851},"astc-12x10-unorm":{gl:37820},"astc-12x10-unorm-srgb":{gl:37852},"astc-12x12-unorm":{gl:37821},"astc-12x12-unorm-srgb":{gl:37853},"pvrtc-rgb4unorm-webgl":{gl:35840},"pvrtc-rgba4unorm-webgl":{gl:35842},"pvrtc-rgb2unorm-webgl":{gl:35841},"pvrtc-rgba2unorm-webgl":{gl:35843},"etc1-rbg-unorm-webgl":{gl:36196},"atc-rgb-unorm-webgl":{gl:35986},"atc-rgba-unorm-webgl":{gl:35986},"atc-rgbai-unorm-webgl":{gl:34798}}});var S0,tl,E0=E(()=>{L();Zo();Qi();S0={"depth-clip-control":"EXT_depth_clamp","timestamp-query":"EXT_disjoint_timer_query_webgl2","compilation-status-async-webgl":"KHR_parallel_shader_compile","polygon-mode-webgl":"WEBGL_polygon_mode","provoking-vertex-webgl":"WEBGL_provoking_vertex","shader-clip-cull-distance-webgl":"WEBGL_clip_cull_distance","shader-noperspective-interpolation-webgl":"NV_shader_noperspective_interpolation","shader-conservative-depth-webgl":"EXT_conservative_depth"},tl=class extends Yn{gl;extensions;testedFeatures=new Set;constructor(e,r,i){super([],i),this.gl=e,this.extensions=r,pt(e,"EXT_color_buffer_float",r)}*[Symbol.iterator](){let e=this.getFeatures();for(let r of e)this.has(r)&&(yield r);return[]}has(e){return this.disabledFeatures?.[e]?!1:(this.testedFeatures.has(e)||(this.testedFeatures.add(e),A0(e)&&Cp(this.gl,e,this.extensions)&&this.features.add(e),this.getWebGLFeature(e)&&this.features.add(e)),this.features.has(e))}initializeFeatures(){let e=this.getFeatures().filter(r=>r!=="polygon-mode-webgl");for(let r of e)this.has(r)}getFeatures(){return[...Object.keys(S0),...Object.keys(Zc)]}getWebGLFeature(e){let r=S0[e];return typeof r=="string"?!!pt(this.gl,r,this.extensions):!!r}}});var rl,C0=E(()=>{L();rl=class extends Kn{get maxTextureDimension1D(){return 0}get maxTextureDimension2D(){return this.getParameter(3379)}get maxTextureDimension3D(){return this.getParameter(32883)}get maxTextureArrayLayers(){return this.getParameter(35071)}get maxBindGroups(){return 0}get maxDynamicUniformBuffersPerPipelineLayout(){return 0}get maxDynamicStorageBuffersPerPipelineLayout(){return 0}get maxSampledTexturesPerShaderStage(){return this.getParameter(35660)}get maxSamplersPerShaderStage(){return this.getParameter(35661)}get maxStorageBuffersPerShaderStage(){return 0}get maxStorageTexturesPerShaderStage(){return 0}get maxUniformBuffersPerShaderStage(){return this.getParameter(35375)}get maxUniformBufferBindingSize(){return this.getParameter(35376)}get maxStorageBufferBindingSize(){return 0}get minUniformBufferOffsetAlignment(){return this.getParameter(35380)}get minStorageBufferOffsetAlignment(){return 0}get maxVertexBuffers(){return 16}get maxVertexAttributes(){return this.getParameter(34921)}get maxVertexBufferArrayStride(){return 2048}get maxInterStageShaderVariables(){return this.getParameter(35659)}get maxComputeWorkgroupStorageSize(){return 0}get maxComputeInvocationsPerWorkgroup(){return 0}get maxComputeWorkgroupSizeX(){return 0}get maxComputeWorkgroupSizeY(){return 0}get maxComputeWorkgroupSizeZ(){return 0}get maxComputeWorkgroupsPerDimension(){return 0}gl;limits={};constructor(e){super(),this.gl=e}getParameter(e){return this.limits[e]===void 0&&(this.limits[e]=this.gl.getParameter(e)),this.limits[e]||0}}});function D2(t){return t<34069?t+34069:t}function U2(t){switch(t){case 36053:return"success";case 36054:return"Mismatched attachments";case 36055:return"No attachments";case 36057:return"Height/width mismatch";case 36061:return"Unsupported or split attachments";case 36182:return"Samples mismatch";default:return`${t}`}}var Bt,il=E(()=>{L();Qi();Bt=class extends Hr{device;gl;handle;colorAttachments=[];depthStencilAttachment=null;constructor(e,r){super(e,r);let i=r.handle===null;this.device=e,this.gl=e.gl,this.handle=this.props.handle||i?this.props.handle:this.gl.createFramebuffer(),i||(e._setWebGLDebugMetadata(this.handle,this,{spector:this.props}),r.handle||(this.autoCreateAttachmentTextures(),this.updateAttachments()))}destroy(){super.destroy(),!this.destroyed&&this.handle!==null&&!this.props.handle&&this.gl.deleteFramebuffer(this.handle)}updateAttachments(){let e=this.gl.bindFramebuffer(36160,this.handle);for(let r=0;r<this.colorAttachments.length;++r){let i=this.colorAttachments[r];if(i){let n=36064+r;this._attachTextureView(n,i)}}if(this.depthStencilAttachment){let r=T0(this.depthStencilAttachment.props.format);this._attachTextureView(r,this.depthStencilAttachment)}if(this.device.props.debug){let r=this.gl.checkFramebufferStatus(36160);if(r!==36053)throw new Error(`Framebuffer ${U2(r)}`)}this.gl.bindFramebuffer(36160,e)}_attachTextureView(e,r){let{gl:i}=this.device,{texture:n}=r,o=r.props.baseMipLevel,s=r.props.baseArrayLayer;switch(i.bindTexture(n.glTarget,n.handle),n.glTarget){case 35866:case 32879:i.framebufferTextureLayer(36160,e,n.handle,o,s);break;case 34067:let a=D2(s);i.framebufferTexture2D(36160,e,a,n.handle,o);break;case 3553:i.framebufferTexture2D(36160,e,3553,n.handle,o);break;default:throw new Error("Illegal texture type")}i.bindTexture(n.glTarget,null)}resizeAttachments(e,r){if(this.handle===null){this.width=e,this.height=r;return}super.resizeAttachments(e,r)}}});var nl,v0=E(()=>{L();il();nl=class extends Qn{device;handle=null;_framebuffer=null;get[Symbol.toStringTag](){return"WebGLCanvasContext"}constructor(e,r){super(r),this.device=e,this._setAutoCreatedCanvasId(`${this.device.id}-canvas`),this._configureDevice()}_configureDevice(){(this.drawingBufferWidth!==this._framebuffer?.width||this.drawingBufferHeight!==this._framebuffer?.height)&&this._framebuffer?.resize([this.drawingBufferWidth,this.drawingBufferHeight])}_getCurrentFramebuffer(){return this._framebuffer||=new Bt(this.device,{id:"canvas-context-framebuffer",handle:null,width:this.drawingBufferWidth,height:this.drawingBufferHeight}),this._framebuffer}}});var ol,R0=E(()=>{L();ol=class extends Zn{device;handle=null;context2d;get[Symbol.toStringTag](){return"WebGLPresentationContext"}constructor(e,r={}){super(r),this.device=e;let i=`${this[Symbol.toStringTag]}(${this.id})`;if(!this.device.getDefaultCanvasContext().offscreenCanvas)throw new Error(`${i}: WebGL PresentationContext requires the default CanvasContext canvas to be an OffscreenCanvas`);let o=this.canvas.getContext("2d");if(!o)throw new Error(`${i}: Failed to create 2d presentation context`);this.context2d=o,this._setAutoCreatedCanvasId(`${this.device.id}-presentation-canvas`),this._configureDevice(),this._startObservers()}present(){this._resizeDrawingBufferIfNeeded(),this.device.submit();let e=this.device.getDefaultCanvasContext(),[r,i]=e.getDrawingBufferSize();if(!(this.drawingBufferWidth===0||this.drawingBufferHeight===0||r===0||i===0||e.canvas.width===0||e.canvas.height===0)){if(r!==this.drawingBufferWidth||i!==this.drawingBufferHeight||e.canvas.width!==this.drawingBufferWidth||e.canvas.height!==this.drawingBufferHeight)throw new Error(`${this[Symbol.toStringTag]}(${this.id}): Default canvas context size ${r}x${i} does not match presentation size ${this.drawingBufferWidth}x${this.drawingBufferHeight}`);this.context2d.clearRect(0,0,this.drawingBufferWidth,this.drawingBufferHeight),this.context2d.drawImage(e.canvas,0,0)}}_configureDevice(){}_getCurrentFramebuffer(e){let r=this.device.getDefaultCanvasContext();return r.setDrawingBufferSize(this.drawingBufferWidth,this.drawingBufferHeight),r.getCurrentFramebuffer(e)}}});function M0(t="id"){vp[t]=vp[t]||1;let e=vp[t]++;return`${t}-${e}`}var vp,P0=E(()=>{vp={}});function k2(t){return t&F.INDEX?34963:t&F.VERTEX?34962:t&F.UNIFORM?35345:34962}function V2(t){return t&F.INDEX||t&F.VERTEX?35044:t&F.UNIFORM?35048:35044}var gt,sl=E(()=>{L();gt=class extends F{device;gl;handle;glTarget;glUsage;glIndexType=5123;byteLength=0;bytesUsed=0;constructor(e,r={}){super(e,r),this.device=e,this.gl=this.device.gl;let i=typeof r=="object"?r.handle:void 0;this.handle=i||this.gl.createBuffer(),e._setWebGLDebugMetadata(this.handle,this,{spector:{...this.props,data:typeof this.props.data}}),this.glTarget=k2(this.props.usage),this.glUsage=V2(this.props.usage),this.glIndexType=this.props.indexType==="uint32"?5125:5123,r.data?this._initWithData(r.data,r.byteOffset,r.byteLength):this._initWithByteLength(r.byteLength||0)}destroy(){!this.destroyed&&this.handle&&(this.removeStats(),this.props.handle?this.trackDeallocatedReferencedMemory("Buffer"):(this.trackDeallocatedMemory(),this.gl.deleteBuffer(this.handle)),this.destroyed=!0,this.handle=null)}_initWithData(e,r=0,i=e.byteLength+r){let n=this.glTarget;this.gl.bindBuffer(n,this.handle),this.gl.bufferData(n,i,this.glUsage),this.gl.bufferSubData(n,r,e),this.gl.bindBuffer(n,null),this.bytesUsed=i,this.byteLength=i,this._setDebugData(e,r,i),this.props.handle?this.trackReferencedMemory(i,"Buffer"):this.trackAllocatedMemory(i)}_initWithByteLength(e){let r=e;e===0&&(r=new Float32Array(0));let i=this.glTarget;return this.gl.bindBuffer(i,this.handle),this.gl.bufferData(i,r,this.glUsage),this.gl.bindBuffer(i,null),this.bytesUsed=e,this.byteLength=e,this._setDebugData(null,0,e),this.props.handle?this.trackReferencedMemory(e,"Buffer"):this.trackAllocatedMemory(e),this}write(e,r=0){let i=ArrayBuffer.isView(e)?e:new Uint8Array(e),n=0,o=void 0,s=36663;this.gl.bindBuffer(s,this.handle),n!==0||o!==void 0?this.gl.bufferSubData(s,r,i,n,o):this.gl.bufferSubData(s,r,i),this.gl.bindBuffer(s,null),this._setDebugData(e,r,e.byteLength)}async mapAndWriteAsync(e,r=0,i=this.byteLength-r){let n=new ArrayBuffer(i);await e(n,"copied"),this.write(n,r)}async readAsync(e=0,r){return this.readSyncWebGL(e,r)}async mapAndReadAsync(e,r=0,i){let n=await this.readAsync(r,i);return await e(n.buffer,"copied")}readSyncWebGL(e=0,r){r=r??this.byteLength-e;let i=new Uint8Array(r),n=0;return this.gl.bindBuffer(36662,this.handle),this.gl.getBufferSubData(36662,e,i,n,r),this.gl.bindBuffer(36662,null),this._setDebugData(i,e,r),i}}});function w0(t){let e=t.split(/\r?\n/),r=[];for(let i of e){if(i.length<=1)continue;let n=i.trim(),o=i.split(":"),s=o[0]?.trim();if(o.length===2){let[h,p]=o;if(!h||!p){r.push({message:n,type:al(s||"info"),lineNum:0,linePos:0});continue}r.push({message:p.trim(),type:al(h),lineNum:0,linePos:0});continue}let[a,c,l,...f]=o;if(!a||!c||!l){r.push({message:o.slice(1).join(":").trim()||n,type:al(s||"info"),lineNum:0,linePos:0});continue}let u=parseInt(l,10);Number.isNaN(u)&&(u=0);let d=parseInt(c,10);Number.isNaN(d)&&(d=0),r.push({message:f.join(":").trim(),type:al(a),lineNum:u,linePos:d})}return r}function al(t){let e=["warning","error","info"],r=t.toLowerCase();return e.includes(r)?r:"info"}var I0=E(()=>{});var cl,B0=E(()=>{L();I0();cl=class extends Vr{device;handle;constructor(e,r){switch(super(e,r),this.device=e,this.props.stage){case"vertex":this.handle=this.props.handle||this.device.gl.createShader(35633);break;case"fragment":this.handle=this.props.handle||this.device.gl.createShader(35632);break;default:throw new Error(this.props.stage)}e._setWebGLDebugMetadata(this.handle,this,{spector:this.props});let i=this._compile(this.source);i&&typeof i.catch=="function"&&i.catch(()=>{this.compilationStatus="error"})}destroy(){this.handle&&(this.removeStats(),this.device.gl.deleteShader(this.handle),this.destroyed=!0,this.handle.destroyed=!0)}get asyncCompilationStatus(){return this._waitForCompilationComplete().then(()=>(this._getCompilationStatus(),this.compilationStatus))}async getCompilationInfo(){return await this._waitForCompilationComplete(),this.getCompilationInfoSync()}getCompilationInfoSync(){let e=this.device.gl.getShaderInfoLog(this.handle);return e?w0(e):[]}getTranslatedSource(){return this.device.getExtension("WEBGL_debug_shaders").WEBGL_debug_shaders?.getTranslatedShaderSource(this.handle)||null}_compile(e){e=e.startsWith("#version ")?e:`#version 300 es
${e}`;let{gl:r}=this.device;if(r.shaderSource(this.handle,e),r.compileShader(this.handle),!this.device.props.debug){this.compilationStatus="pending";return}if(!this.device.features.has("compilation-status-async-webgl")){if(this._getCompilationStatus(),this.debugShader(),this.compilationStatus==="error")throw new Error(`GLSL compilation errors in ${this.props.stage} shader ${this.props.id}`);return}return x.once(1,"Shader compilation is asynchronous")(),this._waitForCompilationComplete().then(()=>{x.info(2,`Shader ${this.id} - async compilation complete: ${this.compilationStatus}`)(),this._getCompilationStatus(),this.debugShader()})}async _waitForCompilationComplete(){let e=async n=>await new Promise(o=>setTimeout(o,n));if(!this.device.features.has("compilation-status-async-webgl")){await e(10);return}let{gl:i}=this.device;for(;;){if(i.getShaderParameter(this.handle,37297))return;await e(10)}}_getCompilationStatus(){this.compilationStatus=this.device.gl.getShaderParameter(this.handle,35713)?"success":"error"}}});function L0(t,e,r,i){if(W2(e))return i(t);let n=t;n.pushState();try{return H2(t,e),dt(n.gl,r),i(t)}finally{n.popState()}}function H2(t,e){let r=t,{gl:i}=r;if(e.cullMode)switch(e.cullMode){case"none":i.disable(2884);break;case"front":i.enable(2884),i.cullFace(1028);break;case"back":i.enable(2884),i.cullFace(1029);break}if(e.frontFace&&i.frontFace(ri("frontFace",e.frontFace,{ccw:2305,cw:2304})),e.unclippedDepth&&t.features.has("depth-clip-control")&&i.enable(34383),e.depthBias!==void 0&&(i.enable(32823),i.polygonOffset(e.depthBias,e.depthBiasSlopeScale||0)),e.provokingVertex&&t.features.has("provoking-vertex-webgl")){let o=r.getExtension("WEBGL_provoking_vertex").WEBGL_provoking_vertex,s=ri("provokingVertex",e.provokingVertex,{first:36429,last:36430});o?.provokingVertexWEBGL(s)}if((e.polygonMode||e.polygonOffsetLine)&&t.features.has("polygon-mode-webgl")){if(e.polygonMode){let o=r.getExtension("WEBGL_polygon_mode").WEBGL_polygon_mode,s=ri("polygonMode",e.polygonMode,{fill:6914,line:6913});o?.polygonModeWEBGL(1028,s),o?.polygonModeWEBGL(1029,s)}e.polygonOffsetLine&&i.enable(10754)}if(t.features.has("shader-clip-cull-distance-webgl")&&(e.clipDistance0&&i.enable(12288),e.clipDistance1&&i.enable(12289),e.clipDistance2&&i.enable(12290),e.clipDistance3&&i.enable(12291),e.clipDistance4&&i.enable(12292),e.clipDistance5&&i.enable(12293),e.clipDistance6&&i.enable(12294),e.clipDistance7&&i.enable(12295)),e.depthWriteEnabled!==void 0&&i.depthMask(j2("depthWriteEnabled",e.depthWriteEnabled)),e.depthCompare&&(e.depthCompare!=="always"?i.enable(2929):i.disable(2929),i.depthFunc(fl("depthCompare",e.depthCompare))),e.clearDepth!==void 0&&i.clearDepth(e.clearDepth),e.stencilWriteMask){let n=e.stencilWriteMask;i.stencilMaskSeparate(1028,n),i.stencilMaskSeparate(1029,n)}if(e.stencilReadMask&&x.warn("stencilReadMask not supported under WebGL"),e.stencilCompare){let n=e.stencilReadMask||4294967295,o=fl("depthCompare",e.stencilCompare);e.stencilCompare!=="always"?i.enable(2960):i.disable(2960),i.stencilFuncSeparate(1028,o,0,n),i.stencilFuncSeparate(1029,o,0,n)}if(e.stencilPassOperation&&e.stencilFailOperation&&e.stencilDepthFailOperation){let n=Rp("stencilPassOperation",e.stencilPassOperation),o=Rp("stencilFailOperation",e.stencilFailOperation),s=Rp("stencilDepthFailOperation",e.stencilDepthFailOperation);i.stencilOpSeparate(1028,o,s,n),i.stencilOpSeparate(1029,o,s,n)}switch(e.blend){case!0:i.enable(3042);break;case!1:i.disable(3042);break;default:}if(e.blendColorOperation||e.blendAlphaOperation){let n=O0("blendColorOperation",e.blendColorOperation||"add"),o=O0("blendAlphaOperation",e.blendAlphaOperation||"add");i.blendEquationSeparate(n,o);let s=ll("blendColorSrcFactor",e.blendColorSrcFactor||"one"),a=ll("blendColorDstFactor",e.blendColorDstFactor||"zero"),c=ll("blendAlphaSrcFactor",e.blendAlphaSrcFactor||"one"),l=ll("blendAlphaDstFactor",e.blendAlphaDstFactor||"zero");i.blendFuncSeparate(s,a,c,l)}}function fl(t,e){return ri(t,e,{never:512,less:513,equal:514,"less-equal":515,greater:516,"not-equal":517,"greater-equal":518,always:519})}function Rp(t,e){return ri(t,e,{keep:7680,zero:0,replace:7681,invert:5386,"increment-clamp":7682,"decrement-clamp":7683,"increment-wrap":34055,"decrement-wrap":34056})}function O0(t,e){return ri(t,e,{add:32774,subtract:32778,"reverse-subtract":32779,min:32775,max:32776})}function ll(t,e,r="color"){return ri(t,e,{one:1,zero:0,src:768,"one-minus-src":769,dst:774,"one-minus-dst":775,"src-alpha":770,"one-minus-src-alpha":771,"dst-alpha":772,"one-minus-dst-alpha":773,"src-alpha-saturated":776,constant:r==="color"?32769:32771,"one-minus-constant":r==="color"?32770:32772,src1:768,"one-minus-src1":769,"src1-alpha":770,"one-minus-src1-alpha":771})}function z2(t,e){return`Illegal parameter ${e} for ${t}`}function ri(t,e,r){if(!(e in r))throw new Error(z2(t,e));return r[e]}function j2(t,e){return e}function W2(t){let e=!0;for(let r in t){e=!1;break}return e}var Mp=E(()=>{L();Ki()});function ul(t){let e={};return t.addressModeU&&(e[10242]=Pp(t.addressModeU)),t.addressModeV&&(e[10243]=Pp(t.addressModeV)),t.addressModeW&&(e[32882]=Pp(t.addressModeW)),t.magFilter&&(e[10240]=wp(t.magFilter)),(t.minFilter||t.mipmapFilter)&&(e[10241]=G2(t.minFilter||"linear",t.mipmapFilter)),t.lodMinClamp!==void 0&&(e[33082]=t.lodMinClamp),t.lodMaxClamp!==void 0&&(e[33083]=t.lodMaxClamp),t.type==="comparison-sampler"&&(e[34892]=34894),t.compare&&(e[34893]=fl("compare",t.compare)),t.maxAnisotropy&&(e[34046]=t.maxAnisotropy),e}function Pp(t){switch(t){case"clamp-to-edge":return 33071;case"repeat":return 10497;case"mirror-repeat":return 33648}}function wp(t){switch(t){case"nearest":return 9728;case"linear":return 9729}}function G2(t,e="none"){if(!e)return wp(t);switch(e){case"none":return wp(t);case"nearest":switch(t){case"nearest":return 9984;case"linear":return 9985}break;case"linear":switch(t){case"nearest":return 9986;case"linear":return 9987}}}var Ip=E(()=>{Mp()});var dl,F0=E(()=>{L();Ip();dl=class extends Re{device;handle;parameters;constructor(e,r){super(e,r),this.device=e,this.parameters=ul(r),this.handle=r.handle||this.device.gl.createSampler(),this._setSamplerParameters(this.parameters)}destroy(){this.handle&&(this.device.gl.deleteSampler(this.handle),this.handle=void 0)}toString(){return`Sampler(${this.id},${JSON.stringify(this.props)})`}_setSamplerParameters(e){for(let[r,i]of Object.entries(e)){let n=Number(r);switch(n){case 33082:case 33083:this.device.gl.samplerParameterf(this.handle,n,i);break;default:this.device.gl.samplerParameteri(this.handle,n,i);break}}}}});function Ot(t,e,r){if(X2(e))return r(t);let{nocatch:i=!0}=e,n=ht.get(t);n.push(),dt(t,e);let o;if(i)o=r(t),n.pop();else try{o=r(t)}finally{n.pop()}return o}function X2(t){for(let e in t)return!1;return!0}var hl=E(()=>{Ki();Ap()});var Lt,Bp=E(()=>{L();Lt=class extends st{device;gl;handle;texture;constructor(e,r){super(e,{...N.defaultProps,...r}),this.device=e,this.gl=this.device.gl,this.handle=null,this.texture=r.texture}}});function pl(t){return $2[t]}var $2,Op=E(()=>{$2={5124:"sint32",5125:"uint32",5122:"sint16",5123:"uint16",5120:"sint8",5121:"uint8",5126:"float32",5131:"float16",33635:"uint16",32819:"uint16",32820:"uint16",33640:"uint32",35899:"uint32",35902:"uint32",34042:"uint32",36269:"uint32"}});function K2(t,e=0){return e?new t.constructor(t.buffer,t.byteOffset+e,(t.byteLength-e)/t.BYTES_PER_ELEMENT):t}function Y2(t,e){if(e%t.BYTES_PER_ELEMENT!==0)throw new Error(`Texture byteOffset ${e} must align to typed array element size ${t.BYTES_PER_ELEMENT}`);return e/t.BYTES_PER_ELEMENT}function J2(t){switch(t){case"1d":break;case"2d":return 3553;case"3d":return 32879;case"cube":return 34067;case"2d-array":return 35866;case"cube-array":break}throw new Error(t)}function gl(t,e,r){return e==="cube"?34069+r:t}var Ft,ml=E(()=>{L();Qi();Ip();hl();Bp();Op();Ft=class extends N{device;gl;handle;sampler=void 0;view;glTarget;glFormat;glType;glInternalFormat;compressed;_textureUnit=0;_framebuffer=null;_framebufferAttachmentKey=null;constructor(e,r){super(e,r,{byteAlignment:1}),this.device=e,this.gl=this.device.gl;let i=el(this.props.format);this.glTarget=J2(this.props.dimension),this.glInternalFormat=i.internalFormat,this.glFormat=i.format,this.glType=i.type,this.compressed=i.compressed,this.handle=this.props.handle||this.gl.createTexture(),this.device._setWebGLDebugMetadata(this.handle,this,{spector:this.props}),this.gl.bindTexture(this.glTarget,this.handle);let{dimension:n,width:o,height:s,depth:a,mipLevels:c,glTarget:l,glInternalFormat:f}=this;if(!this.compressed)switch(n){case"2d":case"cube":this.gl.texStorage2D(l,c,f,o,s);break;case"2d-array":case"3d":this.gl.texStorage3D(l,c,f,o,s,a);break;default:throw new Error(n)}this.gl.bindTexture(this.glTarget,null),this._initializeData(r.data),this.props.handle?this.trackReferencedMemory(this.getAllocatedByteLength(),"Texture"):this.trackAllocatedMemory(this.getAllocatedByteLength(),"Texture"),this.setSampler(this.props.sampler),this.view=new Lt(this.device,{...this.props,texture:this}),Object.seal(this)}destroy(){this.handle&&(this._framebuffer?.destroy(),this._framebuffer=null,this._framebufferAttachmentKey=null,this.removeStats(),this.props.handle?this.trackDeallocatedReferencedMemory("Texture"):(this.gl.deleteTexture(this.handle),this.trackDeallocatedMemory("Texture")),this.destroyed=!0)}createView(e){return new Lt(this.device,{...e,texture:this})}setSampler(e={}){super.setSampler(e);let r=ul(this.sampler.props);this._setSamplerParameters(r)}copyExternalImage(e){let r=this._normalizeCopyExternalImageOptions(e);if(r.sourceX||r.sourceY)throw new Error("WebGL does not support sourceX/sourceY)");let{glFormat:i,glType:n}=this,{image:o,depth:s,mipLevel:a,x:c,y:l,z:f,width:u,height:d}=r,h=gl(this.glTarget,this.dimension,f),p=r.flipY?{37440:!0}:{};return this.gl.bindTexture(this.glTarget,this.handle),Ot(this.gl,p,()=>{switch(this.dimension){case"2d":case"cube":this.gl.texSubImage2D(h,a,c,l,u,d,i,n,o);break;case"2d-array":case"3d":this.gl.texSubImage3D(h,a,c,l,f,u,d,s,i,n,o);break;default:}}),this.gl.bindTexture(this.glTarget,null),{width:r.width,height:r.height}}copyImageData(e){super.copyImageData(e)}readBuffer(e={},r){if(!r)throw new Error(`${this} readBuffer requires a destination buffer`);let i=this._getSupportedColorReadOptions(e),n=e.byteOffset??0,o=this.computeMemoryLayout(i);if(r.byteLength<n+o.byteLength)throw new Error(`${this} readBuffer target is too small (${r.byteLength} < ${n+o.byteLength})`);let s=r;this.gl.bindBuffer(35051,s.handle);try{this._readColorTextureLayers(i,o,a=>{this.gl.readPixels(i.x,i.y,i.width,i.height,this.glFormat,this.glType,n+a)})}finally{this.gl.bindBuffer(35051,null)}return r}async readDataAsync(e={}){throw new Error(`${this} readDataAsync is deprecated; use readBuffer() with an explicit destination buffer or DynamicTexture.readAsync()`)}writeBuffer(e,r={}){let i=this._normalizeTextureWriteOptions(r),{width:n,height:o,depthOrArrayLayers:s,mipLevel:a,byteOffset:c,x:l,y:f,z:u}=i,{glFormat:d,glType:h,compressed:p}=this,g=gl(this.glTarget,this.dimension,u);if(p)throw new Error("writeBuffer for compressed textures is not implemented in WebGL");let{bytesPerPixel:m}=this.device.getTextureFormatInfo(this.format),b=m?i.bytesPerRow/m:void 0,y={3317:this.byteAlignment,...b!==void 0?{3314:b}:{},32878:i.rowsPerImage};this.gl.bindTexture(this.glTarget,this.handle),this.gl.bindBuffer(35052,e.handle),Ot(this.gl,y,()=>{switch(this.dimension){case"2d":case"cube":this.gl.texSubImage2D(g,a,l,f,n,o,d,h,c);break;case"2d-array":case"3d":this.gl.texSubImage3D(g,a,l,f,u,n,o,s,d,h,c);break;default:}}),this.gl.bindBuffer(35052,null),this.gl.bindTexture(this.glTarget,null)}writeData(e,r={}){let i=this._normalizeTextureWriteOptions(r),n=ArrayBuffer.isView(e)?e:new Uint8Array(e),{width:o,height:s,depthOrArrayLayers:a,mipLevel:c,x:l,y:f,z:u,byteOffset:d}=i,{glFormat:h,glType:p,compressed:g}=this,m=gl(this.glTarget,this.dimension,u),b;if(!g){let{bytesPerPixel:v}=this.device.getTextureFormatInfo(this.format);v&&(b=i.bytesPerRow/v)}let y=this.compressed?{}:{3317:this.byteAlignment,...b!==void 0?{3314:b}:{},32878:i.rowsPerImage},_=Y2(n,d),A=g?K2(n,d):n,T=this._getMipLevelSize(c),S=l===0&&f===0&&u===0&&o===T.width&&s===T.height&&a===T.depthOrArrayLayers;this.gl.bindTexture(this.glTarget,this.handle),this.gl.bindBuffer(35052,null),Ot(this.gl,y,()=>{switch(this.dimension){case"2d":case"cube":g?S?this.gl.compressedTexImage2D(m,c,h,o,s,0,A):this.gl.compressedTexSubImage2D(m,c,l,f,o,s,h,A):this.gl.texSubImage2D(m,c,l,f,o,s,h,p,n,_);break;case"2d-array":case"3d":g?S?this.gl.compressedTexImage3D(m,c,h,o,s,a,0,A):this.gl.compressedTexSubImage3D(m,c,l,f,u,o,s,a,h,A):this.gl.texSubImage3D(m,c,l,f,u,o,s,a,h,p,n,_);break;default:}}),this.gl.bindTexture(this.glTarget,null)}_getRowByteAlignment(e,r){return 1}_getFramebuffer(){return this._framebuffer||=this.device.createFramebuffer({id:`framebuffer-for-${this.id}`,width:this.width,height:this.height,colorAttachments:[this]}),this._framebuffer}readDataSyncWebGL(e={}){let r=this._getSupportedColorReadOptions(e),i=this.computeMemoryLayout(r),n=pl(this.glType),o=uo(n),s=new o(i.byteLength/o.BYTES_PER_ELEMENT);return this._readColorTextureLayers(r,i,a=>{let c=new o(s.buffer,s.byteOffset+a,i.bytesPerImage/o.BYTES_PER_ELEMENT);this.gl.readPixels(r.x,r.y,r.width,r.height,this.glFormat,this.glType,c)}),s.buffer}_readColorTextureLayers(e,r,i){let n=this._getFramebuffer(),o=r.bytesPerRow/r.bytesPerPixel,s={3333:this.byteAlignment,...o!==e.width?{3330:o}:{}},a=this.gl.getParameter(3074),c=this.gl.bindFramebuffer(36160,n.handle);try{this.gl.readBuffer(36064),Ot(this.gl,s,()=>{for(let l=0;l<e.depthOrArrayLayers;l++)this._attachReadSubresource(n,e.mipLevel,e.z+l),i(l*r.bytesPerImage)})}finally{this.gl.bindFramebuffer(36160,c||null),this.gl.readBuffer(a)}}_attachReadSubresource(e,r,i){let n=`${r}:${i}`;if(this._framebufferAttachmentKey!==n){switch(this.dimension){case"2d":this.gl.framebufferTexture2D(36160,36064,3553,this.handle,r);break;case"cube":this.gl.framebufferTexture2D(36160,36064,gl(this.glTarget,this.dimension,i),this.handle,r);break;case"2d-array":case"3d":this.gl.framebufferTextureLayer(36160,36064,this.handle,r,i);break;default:throw new Error(`${this} color readback does not support ${this.dimension} textures`)}if(this.device.props.debug){let o=Number(this.gl.checkFramebufferStatus(36160));if(o!==36053)throw new Error(`${e} incomplete for ${this} readback (${o})`)}this._framebufferAttachmentKey=n}}generateMipmapsWebGL(e){if(!(!(this.device.isTextureFormatRenderable(this.props.format)&&this.device.isTextureFormatFilterable(this.props.format))&&(x.warn(`${this} is not renderable or filterable, may not be able to generate mipmaps`)(),!e?.force)))try{this.gl.bindTexture(this.glTarget,this.handle),this.gl.generateMipmap(this.glTarget)}catch(i){x.warn(`Error generating mipmap for ${this}: ${i.message}`)()}finally{this.gl.bindTexture(this.glTarget,null)}}_setSamplerParameters(e){x.log(2,`${this.id} sampler parameters`,this.device.getGLKeys(e))(),this.gl.bindTexture(this.glTarget,this.handle);for(let[r,i]of Object.entries(e)){let n=Number(r),o=i;switch(n){case 33082:case 33083:this.gl.texParameterf(this.glTarget,n,o);break;case 10240:case 10241:this.gl.texParameteri(this.glTarget,n,o);break;case 10242:case 10243:case 32882:this.gl.texParameteri(this.glTarget,n,o);break;case 34046:this.device.features.has("texture-filterable-anisotropic-webgl")&&this.gl.texParameteri(this.glTarget,n,o);break;case 34892:case 34893:this.gl.texParameteri(this.glTarget,n,o);break}}this.gl.bindTexture(this.glTarget,null)}_getActiveUnit(){return this.gl.getParameter(34016)-33984}_bind(e){let{gl:r}=this;return e!==void 0&&(this._textureUnit=e,r.activeTexture(33984+e)),r.bindTexture(this.glTarget,this.handle),e}_unbind(e){let{gl:r}=this;return e!==void 0&&(this._textureUnit=e,r.activeTexture(33984+e)),r.bindTexture(this.glTarget,null),e}}});function N0(t,e,r,i){let n=t,o=i;o===!0&&(o=1),o===!1&&(o=0);let s=typeof o=="number"?[o]:o;switch(r){case 35678:case 35680:case 35679:case 35682:case 36289:case 36292:case 36293:case 36298:case 36299:case 36300:case 36303:case 36306:case 36307:case 36308:case 36311:if(typeof i!="number")throw new Error("samplers must be set to integers");return t.uniform1i(e,i);case 5126:return t.uniform1fv(e,s);case 35664:return t.uniform2fv(e,s);case 35665:return t.uniform3fv(e,s);case 35666:return t.uniform4fv(e,s);case 5124:return t.uniform1iv(e,s);case 35667:return t.uniform2iv(e,s);case 35668:return t.uniform3iv(e,s);case 35669:return t.uniform4iv(e,s);case 35670:return t.uniform1iv(e,s);case 35671:return t.uniform2iv(e,s);case 35672:return t.uniform3iv(e,s);case 35673:return t.uniform4iv(e,s);case 5125:return n.uniform1uiv(e,s,1);case 36294:return n.uniform2uiv(e,s,2);case 36295:return n.uniform3uiv(e,s,3);case 36296:return n.uniform4uiv(e,s,4);case 35674:return t.uniformMatrix2fv(e,!1,s);case 35675:return t.uniformMatrix3fv(e,!1,s);case 35676:return t.uniformMatrix4fv(e,!1,s);case 35685:return n.uniformMatrix2x3fv(e,!1,s);case 35686:return n.uniformMatrix2x4fv(e,!1,s);case 35687:return n.uniformMatrix3x2fv(e,!1,s);case 35688:return n.uniformMatrix3x4fv(e,!1,s);case 35689:return n.uniformMatrix4x2fv(e,!1,s);case 35690:return n.uniformMatrix4x3fv(e,!1,s)}throw new Error("Illegal uniform")}var D0=E(()=>{});function U0(t){switch(t){case"point-list":return 0;case"line-list":return 1;case"line-strip":return 3;case"triangle-list":return 4;case"triangle-strip":return 5;default:throw new Error(t)}}function k0(t){switch(t){case"point-list":return 0;case"line-list":return 1;case"line-strip":return 1;case"triangle-list":return 4;case"triangle-strip":return 4;default:throw new Error(t)}}var Lp=E(()=>{});function Q2(t,e){let r={...t,attributes:t.attributes.map(i=>({...i})),bindings:t.bindings.map(i=>({...i}))};for(let i of e?.attributes||[]){let n=r.attributes.find(o=>o.name===i.name);n?(n.type=i.type||n.type,n.stepMode=i.stepMode||n.stepMode):x.warn(`shader layout attribute ${i.name} not present in shader`)}for(let i of e?.bindings||[]){let n=H0(r,i.name);if(!n){x.warn(`shader layout binding ${i.name} not present in shader`);continue}Object.assign(n,i)}return r}function H0(t,e){return t.bindings.find(r=>r.name===e||r.name===`${e}Uniforms`||`${r.name}Uniforms`===e)}function V0(t,e){return t[e]||t[`${e}Uniforms`]||t[e.replace(/Uniforms$/,"")]}var _l,z0=E(()=>{L();Mp();D0();sl();il();ml();Bp();Lp();_l=class extends Qe{device;handle;vs;fs;introspectedLayout;bindings={};uniforms={};varyings=null;_uniformCount=0;_uniformSetters={};get[Symbol.toStringTag](){return"WEBGLRenderPipeline"}constructor(e,r){super(e,r),this.device=e;let i=this.sharedRenderPipeline||this.device._createSharedRenderPipelineWebGL(r);this.sharedRenderPipeline=i,this.handle=i.handle,this.vs=i.vs,this.fs=i.fs,this.linkStatus=i.linkStatus,this.introspectedLayout=i.introspectedLayout,this.device._setWebGLDebugMetadata(this.handle,this,{spector:{id:this.props.id}}),this.shaderLayout=r.shaderLayout?Q2(this.introspectedLayout,r.shaderLayout):this.introspectedLayout}destroy(){this.destroyed||(this.sharedRenderPipeline&&!this.props._sharedRenderPipeline&&this.sharedRenderPipeline.destroy(),this.destroyResource())}setBindings(e,r){let i=qa(io(this.shaderLayout,e));for(let[n,o]of Object.entries(i)){let s=H0(this.shaderLayout,n);if(s){switch(o||x.warn(`Unsetting binding "${n}" in render pipeline "${this.id}"`)(),s.type){case"uniform":if(!(o instanceof gt)&&!(o.buffer instanceof gt))throw new Error("buffer value");break;case"texture":if(!(o instanceof Lt||o instanceof Ft||o instanceof Bt))throw new Error(`${this} Bad texture binding for ${n}`);break;case"sampler":x.warn(`Ignoring sampler ${n}`)();break;default:throw new Error(s.type)}this.bindings[n]=o}else{let a=this.shaderLayout.bindings.map(c=>`"${c.name}"`).join(", ");r?.disableWarnings||x.warn(`No binding "${n}" in render pipeline "${this.id}", expected one of ${a}`,o)()}}}draw(e){this._syncLinkStatus();let r=e.bindGroups?qa(e.bindGroups):e.bindings||this.bindings,{renderPass:i,parameters:n=this.props.parameters,topology:o=this.props.topology,vertexArray:s,vertexCount:a,instanceCount:c,isInstanced:l=!1,firstVertex:f=0,transformFeedback:u,uniforms:d=this.uniforms}=e,h=U0(o),p=!!s.indexBuffer,g=s.indexBuffer?.glIndexType;if(this.linkStatus!=="success")return x.info(2,`RenderPipeline:${this.id}.draw() aborted - waiting for shader linking`)(),!1;if(!this._areTexturesRenderable(r))return x.info(2,`RenderPipeline:${this.id}.draw() aborted - textures not yet loaded`)(),!1;this.device.gl.useProgram(this.handle),s.bindBeforeRender(i),u&&u.begin(this.props.topology),this._applyBindings(r,{disableWarnings:this.props.disableWarnings}),this._applyUniforms(d);let m=i;return L0(this.device,n,m.glParameters,()=>{p&&l?this.device.gl.drawElementsInstanced(h,a||0,g,f,c||0):p?this.device.gl.drawElements(h,a||0,g,f):l?this.device.gl.drawArraysInstanced(h,f,a||0,c||0):this.device.gl.drawArrays(h,f,a||0),u&&u.end()}),s.unbindAfterRender(i),!0}_areTexturesRenderable(e){let r=!0;for(let i of this.shaderLayout.bindings)V0(e,i.name)||(x.warn(`Binding ${i.name} not found in ${this.id}`)(),r=!1);return r}_applyBindings(e,r){if(this._syncLinkStatus(),this.linkStatus!=="success")return;let{gl:i}=this.device;i.useProgram(this.handle);let n=0,o=0;for(let s of this.shaderLayout.bindings){let a=V0(e,s.name);if(!a)throw new Error(`No value for binding ${s.name} in ${this.id}`);switch(s.type){case"uniform":let{name:c}=s,l=i.getUniformBlockIndex(this.handle,c);if(l===4294967295)throw new Error(`Invalid uniform block name ${c}`);if(i.uniformBlockBinding(this.handle,l,o),a instanceof gt)i.bindBufferBase(35345,o,a.handle);else{let u=a;i.bindBufferRange(35345,o,u.buffer.handle,u.offset||0,u.size||u.buffer.byteLength-(u.offset||0))}o+=1;break;case"texture":if(!(a instanceof Lt||a instanceof Ft||a instanceof Bt))throw new Error("texture");let f;if(a instanceof Lt)f=a.texture;else if(a instanceof Ft)f=a;else if(a instanceof Bt&&a.colorAttachments[0]instanceof Lt)x.warn("Passing framebuffer in texture binding may be deprecated. Use fbo.colorAttachments[0] instead")(),f=a.colorAttachments[0].texture;else throw new Error("No texture");i.activeTexture(33984+n),i.bindTexture(f.glTarget,f.handle),n+=1;break;case"sampler":break;case"storage":case"read-only-storage":throw new Error(`binding type '${s.type}' not supported in WebGL`)}}}_applyUniforms(e){for(let r of this.shaderLayout.uniforms||[]){let{name:i,location:n,type:o,textureUnit:s}=r,a=e[i]??s;a!==void 0&&N0(this.device.gl,n,o,a)}}_syncLinkStatus(){this.linkStatus=this.sharedRenderPipeline.linkStatus}}});function j0(t){return q2[t]}function bl(t){return Z2[t]}function Al(t){return!!G0[t]}function W0(t){return G0[t]}var Z2,G0,q2,yl=E(()=>{Z2={5126:"f32",35664:"vec2<f32>",35665:"vec3<f32>",35666:"vec4<f32>",5124:"i32",35667:"vec2<i32>",35668:"vec3<i32>",35669:"vec4<i32>",5125:"u32",36294:"vec2<u32>",36295:"vec3<u32>",36296:"vec4<u32>",35670:"f32",35671:"vec2<f32>",35672:"vec3<f32>",35673:"vec4<f32>",35674:"mat2x2<f32>",35685:"mat2x3<f32>",35686:"mat2x4<f32>",35687:"mat3x2<f32>",35675:"mat3x3<f32>",35688:"mat3x4<f32>",35689:"mat4x2<f32>",35690:"mat4x3<f32>",35676:"mat4x4<f32>"},G0={35678:{viewDimension:"2d",sampleType:"float"},35680:{viewDimension:"cube",sampleType:"float"},35679:{viewDimension:"3d",sampleType:"float"},35682:{viewDimension:"3d",sampleType:"depth"},36289:{viewDimension:"2d-array",sampleType:"float"},36292:{viewDimension:"2d-array",sampleType:"depth"},36293:{viewDimension:"cube",sampleType:"float"},36298:{viewDimension:"2d",sampleType:"sint"},36299:{viewDimension:"3d",sampleType:"sint"},36300:{viewDimension:"cube",sampleType:"sint"},36303:{viewDimension:"2d-array",sampleType:"uint"},36306:{viewDimension:"2d",sampleType:"uint"},36307:{viewDimension:"3d",sampleType:"uint"},36308:{viewDimension:"cube",sampleType:"uint"},36311:{viewDimension:"2d-array",sampleType:"uint"}},q2={uint8:5121,sint8:5120,unorm8:5121,snorm8:5120,uint16:5123,sint16:5122,unorm16:5123,snorm16:5122,uint32:5125,sint32:5124,float16:5131,float32:5126}});function X0(t,e){let r={attributes:[],bindings:[]};r.attributes=eO(t,e);let i=iO(t,e);for(let a of i){let c=a.uniforms.map(l=>({name:l.name,format:l.format,byteOffset:l.byteOffset,byteStride:l.byteStride,arrayLength:l.arrayLength}));r.bindings.push({type:"uniform",name:a.name,group:0,location:a.location,visibility:(a.vertex?1:0)&(a.fragment?2:0),minBindingSize:a.byteLength,uniforms:c})}let n=rO(t,e),o=0;for(let a of n)if(Al(a.type)){let{viewDimension:c,sampleType:l}=W0(a.type);r.bindings.push({type:"texture",name:a.name,group:0,location:o,viewDimension:c,sampleType:l}),a.textureUnit=o,o+=1}n.length&&(r.uniforms=n);let s=tO(t,e);return s?.length&&(r.varyings=s),r}function eO(t,e){let r=[],i=t.getProgramParameter(e,35721);for(let n=0;n<i;n++){let o=t.getActiveAttrib(e,n);if(!o)throw new Error("activeInfo");let{name:s,type:a}=o,c=t.getAttribLocation(e,s);if(c>=0){let l=bl(a),f=/instance/i.test(s)?"instance":"vertex";r.push({name:s,location:c,stepMode:f,type:l})}}return r.sort((n,o)=>n.location-o.location),r}function tO(t,e){let r=[],i=t.getProgramParameter(e,35971);for(let n=0;n<i;n++){let o=t.getTransformFeedbackVarying(e,n);if(!o)throw new Error("activeInfo");let{name:s,type:a,size:c}=o,l=bl(a),{type:f,components:u}=Mi(l);r.push({location:n,name:s,type:f,size:c*u})}return r.sort((n,o)=>n.location-o.location),r}function rO(t,e){let r=[],i=t.getProgramParameter(e,35718);for(let n=0;n<i;n++){let o=t.getActiveUniform(e,n);if(!o)throw new Error("activeInfo");let{name:s,size:a,type:c}=o,{name:l,isArray:f}=nO(s),u=t.getUniformLocation(e,l),d={location:u,name:l,size:a,type:c,isArray:f};if(r.push(d),d.size>1)for(let h=0;h<d.size;h++){let p=`${l}[${h}]`;u=t.getUniformLocation(e,p);let g={...d,name:p,location:u};r.push(g)}}return r}function iO(t,e){let r=(o,s)=>t.getActiveUniformBlockParameter(e,o,s),i=[],n=t.getProgramParameter(e,35382);for(let o=0;o<n;o++){let s={name:t.getActiveUniformBlockName(e,o)||"",location:r(o,35391),byteLength:r(o,35392),vertex:r(o,35396),fragment:r(o,35398),uniformCount:r(o,35394),uniforms:[]},a=r(o,35395)||[],c=t.getActiveUniforms(e,a,35383),l=t.getActiveUniforms(e,a,35384),f=t.getActiveUniforms(e,a,35387),u=t.getActiveUniforms(e,a,35388);for(let p=0;p<s.uniformCount;++p){let g=a[p];if(g!==void 0){let m=t.getActiveUniform(e,g);if(!m)throw new Error("activeInfo");let b=bl(c[p]);s.uniforms.push({name:m.name,format:b,type:c[p],arrayLength:l[p],byteOffset:f[p],byteStride:u[p]})}}let d=new Set(s.uniforms.map(p=>p.name.split(".")[0]).filter(p=>!!p)),h=s.name.replace(/Uniforms$/,"");if(d.size===1&&!d.has(s.name)&&!d.has(h)){let[p]=d;x.warn(`Uniform block "${s.name}" uses GLSL instance "${p}". luma.gl binds uniform buffers by block name ("${s.name}") and alias ("${h}"). Prefer matching the instance name to one of those to avoid confusing silent mismatches.`)()}i.push(s)}return i.sort((o,s)=>o.location-s.location),i}function nO(t){if(t[t.length-1]!=="]")return{name:t,length:1,isArray:!1};let r=/([^[]*)(\[[0-9]+\])?/.exec(t);return{name:kr(r?.[1],`Failed to parse GLSL uniform name ${t}`),length:r?.[2]?1:0,isArray:!!r?.[2]}}var $0=E(()=>{L();yl()});var K0,xl,Y0=E(()=>{L();$0();yl();K0=4,xl=class extends qn{device;handle;vs;fs;introspectedLayout={attributes:[],bindings:[],uniforms:[]};linkStatus="pending";constructor(e,r){super(e,r),this.device=e,this.handle=r.handle||this.device.gl.createProgram(),this.vs=r.vs,this.fs=r.fs,r.varyings&&r.varyings.length>0&&this.device.gl.transformFeedbackVaryings(this.handle,r.varyings,r.bufferMode||35981),this._linkShaders(),x.time(3,`RenderPipeline ${this.id} - shaderLayout introspection`)(),this.introspectedLayout=X0(this.device.gl,this.handle),x.timeEnd(3,`RenderPipeline ${this.id} - shaderLayout introspection`)()}destroy(){this.destroyed||(this.device.gl.useProgram(null),this.device.gl.deleteProgram(this.handle),this.handle.destroyed=!0,this.destroyResource())}async _linkShaders(){let{gl:e}=this.device;if(e.attachShader(this.handle,this.vs.handle),e.attachShader(this.handle,this.fs.handle),x.time(K0,`linkProgram for ${this.id}`)(),e.linkProgram(this.handle),x.timeEnd(K0,`linkProgram for ${this.id}`)(),!this.device.features.has("compilation-status-async-webgl")){let i=this._getLinkStatus();this._reportLinkStatus(i);return}x.once(1,"RenderPipeline linking is asynchronous")(),await this._waitForLinkComplete(),x.info(2,`RenderPipeline ${this.id} - async linking complete: ${this.linkStatus}`)();let r=this._getLinkStatus();this._reportLinkStatus(r)}async _reportLinkStatus(e){switch(e){case"success":return;default:let r=e==="link-error"?"Link error":"Validation error";switch(this.vs.compilationStatus){case"error":throw this.vs.debugShader(),new Error(`${this} ${r} during compilation of ${this.vs}`);case"pending":await this.vs.asyncCompilationStatus,this.vs.debugShader();break;case"success":break}switch(this.fs?.compilationStatus){case"error":throw this.fs.debugShader(),new Error(`${this} ${r} during compilation of ${this.fs}`);case"pending":await this.fs.asyncCompilationStatus,this.fs.debugShader();break;case"success":break}let i=this.device.gl.getProgramInfoLog(this.handle);this.device.reportError(new Error(`${r} during ${e}: ${i}`),this)(),this.device.debug()}}_getLinkStatus(){let{gl:e}=this.device;return e.getProgramParameter(this.handle,35714)?(this._initializeSamplerUniforms(),e.validateProgram(this.handle),e.getProgramParameter(this.handle,35715)?(this.linkStatus="success","success"):(this.linkStatus="error","validation-error")):(this.linkStatus="error","link-error")}_initializeSamplerUniforms(){let{gl:e}=this.device;e.useProgram(this.handle);let r=0,i=e.getProgramParameter(this.handle,35718);for(let n=0;n<i;n++){let o=e.getActiveUniform(this.handle,n);if(o&&Al(o.type)){let s=o.name.endsWith("[0]"),a=s?o.name.slice(0,-3):o.name,c=e.getUniformLocation(this.handle,a);c!==null&&(r=this._assignSamplerUniform(c,o,s,r))}}}_assignSamplerUniform(e,r,i,n){let{gl:o}=this.device;if(i&&r.size>1){let s=Int32Array.from({length:r.size},(a,c)=>n+c);return o.uniform1iv(e,s),n+r.size}return o.uniform1i(e,n),n+1}async _waitForLinkComplete(){let e=async n=>await new Promise(o=>setTimeout(o,n));if(!this.device.features.has("compilation-status-async-webgl")){await e(10);return}let{gl:i}=this.device;for(;;){if(i.getProgramParameter(this.handle,37297))return;await e(10)}}}});function oO(t,e){let r=e.sourceBuffer,i=e.destinationBuffer;t.gl.bindBuffer(36662,r.handle),t.gl.bindBuffer(36663,i.handle),t.gl.copyBufferSubData(36662,36663,e.sourceOffset??0,e.destinationOffset??0,e.size),t.gl.bindBuffer(36662,null),t.gl.bindBuffer(36663,null)}function sO(t,e){throw new Error("copyBufferToTexture is not supported in WebGL")}function aO(t,e){let{sourceTexture:r,mipLevel:i=0,aspect:n="all",width:o=e.sourceTexture.width,height:s=e.sourceTexture.height,depthOrArrayLayers:a,origin:c=[0,0,0],destinationBuffer:l,byteOffset:f=0,bytesPerRow:u,rowsPerImage:d}=e;if(r instanceof N){r.readBuffer({x:c[0]??0,y:c[1]??0,z:c[2]??0,width:o,height:s,depthOrArrayLayers:a,mipLevel:i,aspect:n,byteOffset:f},l);return}if(n!=="all")throw new Error("aspect not supported in WebGL");if(i!==0||a!==void 0||u||d)throw new Error("not implemented");let{framebuffer:h,destroyFramebuffer:p}=J0(r),g;try{let m=l,b=o||h.width,y=s||h.height,_=kr(h.colorAttachments[0]),A=el(_.texture.props.format),T=A.format,S=A.type;t.gl.bindBuffer(35051,m.handle),g=t.gl.bindFramebuffer(36160,h.handle),t.gl.readPixels(c[0],c[1],b,y,T,S,f)}finally{t.gl.bindBuffer(35051,null),g!==void 0&&t.gl.bindFramebuffer(36160,g),p&&h.destroy()}}function cO(t,e){let{sourceTexture:r,destinationMipLevel:i=0,origin:n=[0,0],destinationOrigin:o=[0,0,0],destinationTexture:s}=e,{width:a=e.destinationTexture.width,height:c=e.destinationTexture.height}=e,{framebuffer:l,destroyFramebuffer:f}=J0(r),[u=0,d=0]=n,[h,p,g]=o,m=t.gl.bindFramebuffer(36160,l.handle),b,y;if(s instanceof Ft)b=s,a=Number.isFinite(a)?a:b.width,c=Number.isFinite(c)?c:b.height,b._bind(0),y=b.glTarget;else throw new Error("invalid destination");switch(y){case 3553:case 34067:t.gl.copyTexSubImage2D(y,i,h,p,u,d,a,c);break;case 35866:case 32879:t.gl.copyTexSubImage3D(y,i,h,p,g,u,d,a,c);break;default:}b&&b._unbind(),t.gl.bindFramebuffer(36160,m),f&&l.destroy()}function J0(t){if(t instanceof N){let{width:e,height:r,id:i}=t;return{framebuffer:t.device.createFramebuffer({id:`framebuffer-for-${i}`,width:e,height:r,colorAttachments:[t]}),destroyFramebuffer:!0}}return{framebuffer:t,destroyFramebuffer:!1}}var Tl,Q0=E(()=>{L();Qi();ml();Tl=class extends so{device;handle=null;commands=[];constructor(e,r={}){super(e,r),this.device=e}_executeCommands(e=this.commands){for(let r of e)switch(r.name){case"copy-buffer-to-buffer":oO(this.device,r.options);break;case"copy-buffer-to-texture":sO(this.device,r.options);break;case"copy-texture-to-buffer":aO(this.device,r.options);break;case"copy-texture-to-texture":cO(this.device,r.options);break;default:throw new Error(r.name)}}}});var lO,Sl,Z0=E(()=>{L();hl();Ki();lO=[1,2,4,8],Sl=class extends no{device;handle=null;glParameters={};constructor(e,r){super(e,r),this.device=e;let i=this.props.framebuffer,n=!i||i.handle===null;n&&e.getDefaultCanvasContext()._resizeDrawingBufferIfNeeded();let o;if(!r?.parameters?.viewport)if(!n&&i){let{width:s,height:a}=i;o=[0,0,s,a]}else{let[s,a]=e.getDefaultCanvasContext().getDrawingBufferSize();o=[0,0,s,a]}if(this.device.pushState(),this.setParameters({viewport:o,...this.props.parameters}),!n&&i?.colorAttachments.length){let s=i.colorAttachments.map((a,c)=>36064+c);this.device.gl.drawBuffers(s)}else n&&this.device.gl.drawBuffers([1029]);this.clear(),this.props.timestampQuerySet&&this.props.beginTimestampIndex!==void 0&&this.props.timestampQuerySet.writeTimestamp(this.props.beginTimestampIndex)}end(){this.destroyed||(this.props.timestampQuerySet&&this.props.endTimestampIndex!==void 0&&this.props.timestampQuerySet.writeTimestamp(this.props.endTimestampIndex),this.device.popState(),this.destroy())}pushDebugGroup(e){}popDebugGroup(){}insertDebugMarker(e){}setParameters(e={}){let r={...this.glParameters};r.framebuffer=this.props.framebuffer||null,this.props.depthReadOnly&&(r.depthMask=!this.props.depthReadOnly),r.stencilMask=this.props.stencilReadOnly?0:1,r[35977]=this.props.discard,e.viewport&&(e.viewport.length>=6?(r.viewport=e.viewport.slice(0,4),r.depthRange=[e.viewport[4],e.viewport[5]]):r.viewport=e.viewport),e.scissorRect&&(r.scissorTest=!0,r.scissor=e.scissorRect),e.blendConstant&&(r.blendColor=e.blendConstant),e.stencilReference!==void 0&&(r[2967]=e.stencilReference,r[36003]=e.stencilReference),"colorMask"in e&&(r.colorMask=lO.map(i=>!!(i&e.colorMask))),this.glParameters=r,dt(this.device.gl,r)}beginOcclusionQuery(e){this.props.occlusionQuerySet?.beginOcclusionQuery()}endOcclusionQuery(){this.props.occlusionQuerySet?.endOcclusionQuery()}clear(){let e={...this.glParameters},r=0;this.props.clearColors&&this.props.clearColors.forEach((i,n)=>{i&&this.clearColorBuffer(n,i)}),this.props.clearColor!==!1&&this.props.clearColors===void 0&&(r|=16384,e.clearColor=this.props.clearColor),this.props.clearDepth!==!1&&(r|=256,e.clearDepth=this.props.clearDepth),this.props.clearStencil!==!1&&(r|=1024,e.clearStencil=this.props.clearStencil),r!==0&&Ot(this.device.gl,e,()=>{this.device.gl.clear(r)})}clearColorBuffer(e=0,r=[0,0,0,0]){Ot(this.device.gl,{framebuffer:this.props.framebuffer},()=>{switch(r.constructor){case Int8Array:case Int16Array:case Int32Array:this.device.gl.clearBufferiv(6144,e,r);break;case Uint8Array:case Uint8ClampedArray:case Uint16Array:case Uint32Array:this.device.gl.clearBufferuiv(6144,e,r);break;case Float32Array:this.device.gl.clearBufferfv(6144,e,r);break;default:throw new Error("clearColorBuffer: color must be typed array")}})}}});var ts,q0=E(()=>{L();Q0();Z0();ts=class extends oo{device;handle=null;commandBuffer;constructor(e,r){super(e,r),this.device=e,this.commandBuffer=new Tl(e,{id:`${this.props.id}-command-buffer`})}destroy(){this.destroyResource()}finish(e){return e?.id&&this.commandBuffer.id!==e.id&&(this.commandBuffer.id=e.id,this.commandBuffer.props.id=e.id),this.destroy(),this.commandBuffer}beginRenderPass(e={}){return new Sl(this.device,this._applyTimeProfilingToPassProps(e))}beginComputePass(e={}){throw new Error("ComputePass not supported in WebGL")}copyBufferToBuffer(e){this.commandBuffer.commands.push({name:"copy-buffer-to-buffer",options:e})}copyBufferToTexture(e){this.commandBuffer.commands.push({name:"copy-buffer-to-texture",options:e})}copyTextureToBuffer(e){this.commandBuffer.commands.push({name:"copy-texture-to-buffer",options:e})}copyTextureToTexture(e){this.commandBuffer.commands.push({name:"copy-texture-to-texture",options:e})}pushDebugGroup(e){}popDebugGroup(){}insertDebugMarker(e){}resolveQuerySet(e,r,i){throw new Error("resolveQuerySet is not supported in WebGL")}writeTimestamp(e,r){e.writeTimestamp(r)}}});function eT(t){let{target:e,source:r,start:i=0,count:n=1}=t,o=r.length,s=n*o,a=0;for(let c=i;a<o;a++)e[c++]=r[a]??0;for(;a<s;)a<s-a?(e.copyWithin(i+a,i,i+a),a*=2):(e.copyWithin(i+a,i,i+s-a),a=s);return t.target}var tT=E(()=>{});function fO(t){return Array.isArray(t)?new Float32Array(t):t}function uO(t,e){if(!t||!e||t.length!==e.length||t.constructor!==e.constructor)return!1;for(let r=0;r<t.length;++r)if(t[r]!==e[r])return!1;return!0}var El,rT=E(()=>{L();qt();yp();tT();El=class t extends ao{get[Symbol.toStringTag](){return"VertexArray"}device;handle;buffer=null;bufferValue=null;static isConstantAttributeZeroSupported(e){return Df()==="Chrome"}constructor(e,r){super(e,r),this.device=e,this.handle=this.device.gl.createVertexArray()}destroy(){super.destroy(),this.buffer&&this.buffer?.destroy(),this.handle&&(this.device.gl.deleteVertexArray(this.handle),this.handle=void 0)}setIndexBuffer(e){let r=e;if(r&&r.glTarget!==34963)throw new Error("Use .setBuffer()");this.device.gl.bindVertexArray(this.handle),this.device.gl.bindBuffer(34963,r?r.handle:null),this.indexBuffer=r,this.device.gl.bindVertexArray(null)}setBuffer(e,r){let i=r;if(i.glTarget===34963)throw new Error("Use .setIndexBuffer()");let{size:n,type:o,stride:s,offset:a,normalized:c,integer:l,divisor:f}=this._getAccessor(e);this.device.gl.bindVertexArray(this.handle),this.device.gl.bindBuffer(34962,i.handle),l?this.device.gl.vertexAttribIPointer(e,n,o,s,a):this.device.gl.vertexAttribPointer(e,n,o,c,s,a),this.device.gl.bindBuffer(34962,null),this.device.gl.enableVertexAttribArray(e),this.device.gl.vertexAttribDivisor(e,f||0),this.attributes[e]=i,this.device.gl.bindVertexArray(null)}setConstantWebGL(e,r){this._enable(e,!1),this.attributes[e]=r}bindBeforeRender(){this.device.gl.bindVertexArray(this.handle),this._applyConstantAttributes()}unbindAfterRender(){this.device.gl.bindVertexArray(null)}_applyConstantAttributes(){for(let e=0;e<this.maxVertexAttributes;++e){let r=this.attributes[e];ArrayBuffer.isView(r)&&this.device.setConstantAttributeWebGL(e,r)}}_getAccessor(e){let r=this.attributeInfos[e];if(!r)throw new Error(`Unknown attribute location ${e}`);let i=Jc(r.bufferDataType);return{size:r.bufferComponents,type:i,stride:r.byteStride,offset:r.byteOffset,normalized:r.normalized,integer:r.integer,divisor:r.stepMode==="instance"?1:0}}_enable(e,r=!0){let n=t.isConstantAttributeZeroSupported(this.device)||e!==0;(r||n)&&(e=Number(e),this.device.gl.bindVertexArray(this.handle),r?this.device.gl.enableVertexAttribArray(e):this.device.gl.disableVertexAttribArray(e),this.device.gl.bindVertexArray(null))}getConstantBuffer(e,r){let i=fO(r),n=i.byteLength*e,o=i.length*e;if(this.buffer&&n!==this.buffer.byteLength)throw new Error(`Buffer size is immutable, byte length ${n} !== ${this.buffer.byteLength}.`);let s=!this.buffer;if(this.buffer=this.buffer||this.device.createBuffer({byteLength:n}),s||=!uO(i,this.bufferValue),s){let a=Ah(r.constructor,o);eT({target:a,source:i,start:0,count:o}),this.buffer.write(a),this.bufferValue=r}return this.buffer}}});function iT(t){return typeof t=="number"?Number.isInteger(t):/^\d+$/.test(t)}var Cl,nT=E(()=>{L();vl();Lp();Cl=class extends co{device;gl;handle;layout;buffers={};unusedBuffers={};bindOnUse=!0;_bound=!1;constructor(e,r){super(e,r),this.device=e,this.gl=e.gl,this.handle=this.props.handle||this.gl.createTransformFeedback(),this.layout=this.props.layout,r.buffers&&this.setBuffers(r.buffers),Object.seal(this)}destroy(){this.gl.deleteTransformFeedback(this.handle),super.destroy()}begin(e="point-list"){this.gl.bindTransformFeedback(36386,this.handle),this.bindOnUse&&this._bindBuffers(),this.gl.beginTransformFeedback(k0(e))}end(){this.gl.endTransformFeedback(),this.bindOnUse&&this._unbindBuffers(),this.gl.bindTransformFeedback(36386,null)}setBuffers(e){this.buffers={},this.unusedBuffers={},this.bind(()=>{for(let[r,i]of Object.entries(e))this.setBuffer(r,i)})}setBuffer(e,r){let i=this._getVaryingIndex(e),{buffer:n,byteLength:o,byteOffset:s}=this._getBufferRange(r);if(i<0){this.unusedBuffers[e]=n,x.warn(`${this.id} unusedBuffers varying buffer ${e}`)();return}this.buffers[i]={buffer:n,byteLength:o,byteOffset:s},this.bindOnUse||this._bindBuffer(i,n,s,o)}getBuffer(e){if(iT(e))return this.buffers[e]||null;let r=this._getVaryingIndex(e);return this.buffers[r]??null}bind(e=this.handle){if(typeof e!="function")return this.gl.bindTransformFeedback(36386,e),this;let r;return this._bound?r=e():(this.gl.bindTransformFeedback(36386,this.handle),this._bound=!0,r=e(),this._bound=!1,this.gl.bindTransformFeedback(36386,null)),r}unbind(){this.bind(null)}_getBufferRange(e){if(e instanceof gt)return{buffer:e,byteOffset:0,byteLength:e.byteLength};let{buffer:r,byteOffset:i=0,byteLength:n=e.buffer.byteLength}=e;return{buffer:r,byteOffset:i,byteLength:n}}_getVaryingIndex(e){if(iT(e))return Number(e);for(let r of this.layout.varyings||[])if(e===r.name)return r.location;return-1}_bindBuffers(){for(let[e,r]of Object.entries(this.buffers)){let{buffer:i,byteLength:n,byteOffset:o}=this._getBufferRange(r);this._bindBuffer(Number(e),i,o,n)}}_unbindBuffers(){for(let e in this.buffers)this.gl.bindBufferBase(35982,Number(e),null)}_bindBuffer(e,r,i=0,n){let o=r&&r.handle;!o||n===void 0?this.gl.bindBufferBase(35982,e,o):this.gl.bindBufferRange(35982,e,o,i,n)}}});var Rl,oT=E(()=>{L();Rl=class extends lo{device;handle;_timestampPairs=[];_pendingReads=new Set;_occlusionQuery=null;_occlusionActive=!1;get[Symbol.toStringTag](){return"QuerySet"}constructor(e,r){if(super(e,r),this.device=e,r.type==="timestamp"){if(r.count<2)throw new Error("Timestamp QuerySet requires at least two query slots");this._timestampPairs=new Array(Math.ceil(r.count/2)).fill(null).map(()=>({activeQuery:null,completedQueries:[]})),this.handle=null}else{if(r.count>1)throw new Error("WebGL occlusion QuerySet can only have one value");let i=this.device.gl.createQuery();if(!i)throw new Error("WebGL query not supported");this.handle=i}Object.seal(this)}destroy(){if(!this.destroyed){this.handle&&this.device.gl.deleteQuery(this.handle);for(let e of this._timestampPairs){e.activeQuery&&(this._cancelPendingQuery(e.activeQuery),this.device.gl.deleteQuery(e.activeQuery.handle));for(let r of e.completedQueries)this._cancelPendingQuery(r),this.device.gl.deleteQuery(r.handle)}this._occlusionQuery&&(this._cancelPendingQuery(this._occlusionQuery),this.device.gl.deleteQuery(this._occlusionQuery.handle));for(let e of Array.from(this._pendingReads))this._cancelPendingQuery(e);this.destroyResource()}}isResultAvailable(e){return this.props.type==="timestamp"?e===void 0?this._timestampPairs.some((r,i)=>this._isTimestampPairAvailable(i)):this._isTimestampPairAvailable(this._getTimestampPairIndex(e)):this._occlusionQuery?this._pollQueryAvailability(this._occlusionQuery):!1}async readResults(e){let r=e?.firstQuery||0,i=e?.queryCount||this.props.count-r;if(this._validateRange(r,i),this.props.type==="timestamp"){let n=new Array(i).fill(0n),o=Math.floor(r/2),s=Math.floor((r+i-1)/2);for(let a=o;a<=s;a++){let c=await this._consumeTimestampPairResult(a),l=a*2,f=l+1;l>=r&&l<r+i&&(n[l-r]=0n),f>=r&&f<r+i&&(n[f-r]=c)}return n}if(!this._occlusionQuery)throw new Error("Occlusion query has not been started");return[await this._consumeQueryResult(this._occlusionQuery)]}async readTimestampDuration(e,r){if(this.props.type!=="timestamp")throw new Error("Timestamp durations require a timestamp QuerySet");if(e<0||r>=this.props.count||r<=e)throw new Error("Timestamp duration range is out of bounds");if(e%2!==0||r!==e+1)throw new Error("WebGL timestamp durations require adjacent even/odd query indices");let i=await this._consumeTimestampPairResult(this._getTimestampPairIndex(e));return Number(i)/1e6}beginOcclusionQuery(){if(this.props.type!=="occlusion")throw new Error("Occlusion queries require an occlusion QuerySet");if(!this.handle)throw new Error("WebGL occlusion query is not available");if(this._occlusionActive)throw new Error("Occlusion query is already active");this.device.gl.beginQuery(35887,this.handle),this._occlusionQuery={handle:this.handle,promise:null,result:null,disjoint:!1,cancelled:!1,pollRequestId:null,resolve:null,reject:null},this._occlusionActive=!0}endOcclusionQuery(){if(!this._occlusionActive)throw new Error("Occlusion query is not active");this.device.gl.endQuery(35887),this._occlusionActive=!1}writeTimestamp(e){if(this.props.type!=="timestamp")throw new Error("Timestamp writes require a timestamp QuerySet");let r=this._getTimestampPairIndex(e),i=this._timestampPairs[r];if(e%2===0){if(i.activeQuery)throw new Error("Timestamp query pair is already active");let n=this.device.gl.createQuery();if(!n)throw new Error("WebGL query not supported");let o={handle:n,promise:null,result:null,disjoint:!1,cancelled:!1,pollRequestId:null,resolve:null,reject:null};this.device.gl.beginQuery(35007,n),i.activeQuery=o;return}if(!i.activeQuery)throw new Error("Timestamp query pair was ended before it was started");this.device.gl.endQuery(35007),i.completedQueries.push(i.activeQuery),i.activeQuery=null}_validateRange(e,r){if(e<0||r<0||e+r>this.props.count)throw new Error("Query read range is out of bounds")}_getTimestampPairIndex(e){if(e<0||e>=this.props.count)throw new Error("Query index is out of bounds");return Math.floor(e/2)}_isTimestampPairAvailable(e){let r=this._timestampPairs[e];return!r||r.completedQueries.length===0?!1:this._pollQueryAvailability(r.completedQueries[0])}_pollQueryAvailability(e){if(e.cancelled||this.destroyed)return e.result=0n,!0;if(e.result!==null||e.disjoint)return!0;if(!this.device.gl.getQueryParameter(e.handle,34919))return!1;let i=!!this.device.gl.getParameter(36795);return e.disjoint=i,e.result=i?0n:BigInt(this.device.gl.getQueryParameter(e.handle,34918)),!0}async _consumeTimestampPairResult(e){let r=this._timestampPairs[e];if(!r||r.completedQueries.length===0)throw new Error("Timestamp query pair has no completed result");let i=r.completedQueries.shift();try{return await this._consumeQueryResult(i)}finally{this.device.gl.deleteQuery(i.handle)}}_consumeQueryResult(e){return e.promise||(this._pendingReads.add(e),e.promise=new Promise((r,i)=>{e.resolve=r,e.reject=i;let n=()=>{if(e.pollRequestId=null,e.cancelled||this.destroyed){this._pendingReads.delete(e),e.promise=null,e.resolve=null,e.reject=null,r(0n);return}if(!this._pollQueryAvailability(e)){e.pollRequestId=this._requestAnimationFrame(n);return}this._pendingReads.delete(e),e.promise=null,e.resolve=null,e.reject=null,e.disjoint?i(new Error("GPU timestamp query was invalidated by a disjoint event")):r(e.result||0n)};n()})),e.promise}_cancelPendingQuery(e){if(this._pendingReads.delete(e),e.cancelled=!0,e.pollRequestId!==null&&(this._cancelAnimationFrame(e.pollRequestId),e.pollRequestId=null),e.resolve){let r=e.resolve;e.promise=null,e.resolve=null,e.reject=null,r(0n)}}_requestAnimationFrame(e){return requestAnimationFrame(e)}_cancelAnimationFrame(e){cancelAnimationFrame(e)}}});var Ml,sT=E(()=>{L();Ml=class extends fo{device;gl;handle;signaled;_signaled=!1;constructor(e,r={}){super(e,{}),this.device=e,this.gl=e.gl;let i=this.props.handle||this.gl.fenceSync(this.gl.SYNC_GPU_COMMANDS_COMPLETE,0);if(!i)throw new Error("Failed to create WebGL fence");this.handle=i,this.signaled=new Promise(n=>{let o=()=>{let s=this.gl.clientWaitSync(this.handle,0,0);s===this.gl.ALREADY_SIGNALED||s===this.gl.CONDITION_SATISFIED?(this._signaled=!0,n()):setTimeout(o,1)};o()})}isSignaled(){if(this._signaled)return!0;let e=this.gl.getSyncParameter(this.handle,this.gl.SYNC_STATUS);return this._signaled=e===this.gl.SIGNALED,this._signaled}destroy(){this.destroyed||this.gl.deleteSync(this.handle)}}});function Fp(t){switch(t){case 6406:case 33326:case 6403:case 36244:return 1;case 33339:case 33340:case 33328:case 33320:case 33319:return 2;case 6407:case 36248:case 34837:return 3;case 6408:case 36249:case 34836:return 4;default:return 0}}function aT(t){switch(t){case 5121:return 1;case 33635:case 32819:case 32820:return 2;case 5126:return 4;default:return 0}}var cT=E(()=>{});function lT(t,e){let{sourceX:r=0,sourceY:i=0,sourceAttachment:n=0}=e||{},{target:o=null,sourceWidth:s,sourceHeight:a,sourceDepth:c,sourceFormat:l,sourceType:f}=e||{},{framebuffer:u,deleteFramebuffer:d}=uT(t),{gl:h,handle:p}=u;s||=u.width,a||=u.height;let g=u.colorAttachments[n]?.texture;if(!g)throw new Error(`Invalid framebuffer attachment ${n}`);c=g?.depth||1,l||=g?.glFormat||6408,f||=g?.glType||5121,o=hO(o,f,l,s,a,c);let m=ve.getDataType(o);f=f||j0(m);let b=h.bindFramebuffer(36160,p);return h.readBuffer(36064+n),h.readPixels(r,i,s,a,l,f,o),h.readBuffer(36064),h.bindFramebuffer(36160,b||null),d&&u.destroy(),o}function fT(t,e){let{target:r,sourceX:i=0,sourceY:n=0,sourceFormat:o=6408,targetByteOffset:s=0}=e||{},{sourceWidth:a,sourceHeight:c,sourceType:l}=e||{},{framebuffer:f,deleteFramebuffer:u}=uT(t);a=a||f.width,c=c||f.height;let d=f;l=l||5121;let h=r;if(!h){let g=Fp(o),m=aT(l),b=s+a*c*g*m;h=d.device.createBuffer({byteLength:b})}let p=t.device.createCommandEncoder();return p.copyTextureToBuffer({sourceTexture:t,width:a,height:c,origin:[i,n],destinationBuffer:h,byteOffset:s}),p.destroy(),u&&f.destroy(),h}function uT(t){return t instanceof Hr?{framebuffer:t,deleteFramebuffer:!1}:{framebuffer:dO(t),deleteFramebuffer:!0}}function dO(t,e){let{device:r,width:i,height:n,id:o}=t;return r.createFramebuffer({...e,id:`framebuffer-for-${o}`,width:i,height:n,colorAttachments:[t]})}function hO(t,e,r,i,n,o){if(t)return t;e||=5121;let s=pl(e),a=ve.getTypedArrayConstructor(s),c=Fp(r);return new a(i*n*c)}var dT=E(()=>{L();yl();cT();Op()});var Np={};he(Np,{WebGLDevice:()=>yr});function pO(t,e,r){switch(r.length){case 1:t.gl.vertexAttrib1fv(e,r);break;case 2:t.gl.vertexAttrib2fv(e,r);break;case 3:t.gl.vertexAttrib3fv(e,r);break;case 4:t.gl.vertexAttrib4fv(e,r);break;default:}}function gO(t,e,r){t.gl.vertexAttribI4iv(e,r)}function mO(t,e,r){t.gl.vertexAttribI4uiv(e,r)}function _O(t,e){if(!t||!e||t.length!==e.length||t.constructor!==e.constructor)return!1;for(let r=0;r<t.length;++r)if(t[r]!==e[r])return!1;return!0}var yr,Pl=E(()=>{L();Ap();h0();$c();m0();E0();C0();v0();R0();hp();pp();Qi();P0();sl();B0();F0();ml();il();z0();Y0();q0();rT();nT();oT();sT();dT();Ki();hl();Zo();yr=class t extends ot{static getDeviceFromContext(e){return e?e.luma?.device??null:null}type="webgl";handle;features;limits;info;canvasContext;preferredColorFormat="rgba8unorm";preferredDepthFormat="depth24plus";commandEncoder;lost;_resolveContextLost;gl;_constants;extensions;_polyfilled=!1;spectorJS;get[Symbol.toStringTag](){return"WebGLDevice"}toString(){return`${this[Symbol.toStringTag]}(${this.id})`}isVertexFormatSupported(e){switch(e){case"unorm8x4-bgra":return!1;default:return!0}}constructor(e){super({...e,id:e.id||M0("webgl-device")});let r=ot._getCanvasContextProps(e);if(!r)throw new Error("WebGLDevice requires props.createCanvasContext to be set");let i=r.canvas?.gl??null,n=t.getDeviceFromContext(i);if(n)throw new Error(`WebGL context already attached to device ${n.id}`);this.canvasContext=new nl(this,r),this.lost=new Promise(f=>{this._resolveContextLost=f});let o={...e.webgl};r.alphaMode==="premultiplied"&&(o.premultipliedAlpha=!0),e.powerPreference!==void 0&&(o.powerPreference=e.powerPreference),e.failIfMajorPerformanceCaveat!==void 0&&(o.failIfMajorPerformanceCaveat=e.failIfMajorPerformanceCaveat);let a=this.props._handle||d0(this.canvasContext.canvas,{onContextLost:f=>this._resolveContextLost?.({reason:"destroyed",message:"Entered sleep mode, or too many apps or browser tabs are using the GPU."}),onContextRestored:f=>console.log("WebGL context restored")},o);if(!a)throw new Error("WebGL context creation failed");if(n=t.getDeviceFromContext(a),n){if(e._reuseDevices)return x.log(1,`Not creating a new Device, instead returning a reference to Device ${n.id} already attached to WebGL context`,n)(),this.canvasContext.destroy(),n._reused=!0,n;throw new Error(`WebGL context already attached to device ${n.id}`)}this.handle=a,this.gl=a,this.spectorJS=Qx({...this.props,gl:this.handle});let c=ti(this.handle);c.device=this,c.extensions||(c.extensions={}),this.extensions=c.extensions,this.info=p0(this.gl,this.extensions),this.limits=new rl(this.gl),this.features=new tl(this.gl,this.extensions,this.props._disabledFeatures),this.props._initializeFeatures&&this.features.initializeFeatures(),new ht(this.gl,{log:(...f)=>x.log(1,...f)()}).trackState(this.gl,{copyState:!1}),(e.debug||e.debugWebGL)&&(this.gl=t0(this.gl,{debugWebGL:!0,traceWebGL:e.debugWebGL}),x.warn("WebGL debug mode activated. Performance reduced.")()),e.debugWebGL&&(x.level=Math.max(x.level,1)),this.commandEncoder=new ts(this,{id:`${this}-command-encoder`}),this.canvasContext._startObservers()}destroy(){if(this.commandEncoder?.destroy(),!this.props._reuseDevices&&!this._reused){let e=ti(this.handle);e.device=null}}get isLost(){return this.gl.isContextLost()}createCanvasContext(e){throw new Error("WebGL only supports a single canvas")}createPresentationContext(e){return new ol(this,e||{})}createBuffer(e){let r=this._normalizeBufferProps(e);return new gt(this,r)}createTexture(e){return new Ft(this,e)}createExternalTexture(e){throw new Error("createExternalTexture() not implemented")}createSampler(e){return new dl(this,e)}createShader(e){return new cl(this,e)}createFramebuffer(e){return new Bt(this,e)}createVertexArray(e){return new El(this,e)}createTransformFeedback(e){return new Cl(this,e)}createQuerySet(e){return new Rl(this,e)}createFence(){return new Ml(this)}createRenderPipeline(e){return new _l(this,e)}_createSharedRenderPipelineWebGL(e){return new xl(this,e)}createComputePipeline(e){throw new Error("ComputePipeline not supported in WebGL")}createCommandEncoder(e={}){return new ts(this,e)}submit(e){let r=null;e||({submittedCommandEncoder:r,commandBuffer:e}=this._finalizeDefaultCommandEncoderForSubmit());try{e._executeCommands(),r&&r.resolveTimeProfilingQuerySet().then(()=>{this.commandEncoder._gpuTimeMs=r._gpuTimeMs}).catch(()=>{})}finally{e.destroy()}}_finalizeDefaultCommandEncoderForSubmit(){let e=this.commandEncoder,r=e.finish();return this.commandEncoder.destroy(),this.commandEncoder=this.createCommandEncoder({id:e.props.id,timeProfilingQuerySet:e.getTimeProfilingQuerySet()}),{submittedCommandEncoder:e,commandBuffer:r}}readPixelsToArrayWebGL(e,r){return lT(e,r)}readPixelsToBufferWebGL(e,r){return fT(e,r)}setParametersWebGL(e){dt(this.gl,e)}getParametersWebGL(e){return Yc(this.gl,e)}withParametersWebGL(e,r){return Ot(this.gl,e,r)}resetWebGL(){x.warn("WebGLDevice.resetWebGL is deprecated, use only for debugging")(),a0(this.gl)}_getDeviceSpecificTextureFormatCapabilities(e){return x0(this.gl,e,this.extensions)}loseDevice(){let e=!1,i=this.getExtension("WEBGL_lose_context").WEBGL_lose_context;return i&&(e=!0,i.loseContext()),this._resolveContextLost?.({reason:"destroyed",message:"Application triggered context loss"}),e}pushState(){ht.get(this.gl).push()}popState(){ht.get(this.gl).pop()}getGLKey(e,r){let i=Number(e);for(let n in this.gl)if(this.gl[n]===i)return`GL.${n}`;return r?.emptyIfUnknown?"":String(e)}getGLKeys(e){let r={emptyIfUnknown:!0};return Object.entries(e).reduce((i,[n,o])=>(i[`${n}:${this.getGLKey(n,r)}`]=`${o}:${this.getGLKey(o,r)}`,i),{})}setConstantAttributeWebGL(e,r){let i=this.limits.maxVertexAttributes;this._constants=this._constants||new Array(i).fill(null);let n=this._constants[e];switch(n&&_O(n,r)&&x.info(1,`setConstantAttributeWebGL(${e}) could have been skipped, value unchanged`)(),this._constants[e]=r,r.constructor){case Float32Array:pO(this,e,r);break;case Int32Array:gO(this,e,r);break;case Uint32Array:mO(this,e,r);break;default:throw new Error("constant")}}getExtension(e){return pt(this.gl,e,this.extensions),this.extensions}_setWebGLDebugMetadata(e,r,i){e.luma=r;let n={props:i.spector,id:i.spector.id};e.__SPECTOR_Metadata=n}}});function bO(t){return typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext?!0:!!(t&&typeof t.createVertexArray=="function")}var rs,Dp,is,hT=E(()=>{L();Kx();hp();pp();rs=1,Dp=class extends Jn{type="webgl";constructor(){super(),ot.defaultProps={...ot.defaultProps,...Kc}}enforceWebGL2(e){$x(e)}isSupported(){return typeof WebGL2RenderingContext<"u"}isDeviceHandle(e){return typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext?!0:(typeof WebGLRenderingContext<"u"&&e instanceof WebGLRenderingContext&&x.warn("WebGL1 is not supported",e)(),!1)}async attach(e,r={}){let{WebGLDevice:i}=await Promise.resolve().then(()=>(Pl(),Np));if(e instanceof i)return e;let n=i.getDeviceFromContext(e);if(n)return n;if(!bO(e))throw new Error("Invalid WebGL2RenderingContext");let o=r.createCanvasContext===!0?{}:r.createCanvasContext;return new i({...r,_handle:e,createCanvasContext:{canvas:e.canvas,autoResize:!1,...o}})}async create(e={}){let{WebGLDevice:r}=await Promise.resolve().then(()=>(Pl(),Np)),i=[];(e.debugWebGL||e.debug)&&i.push(e0()),e.debugSpectorJS&&i.push(Jx(e));let n=await Promise.allSettled(i);for(let o of n)o.status==="rejected"&&x.error(`Failed to initialize debug libraries ${o.reason}`)();try{let o=new r(e);x.groupCollapsed(rs,`WebGLDevice ${o.id} created`)();let s=`${o._reused?"Reusing":"Created"} device with WebGL2 ${o.props.debug?"debug ":""}context: ${o.info.vendor}, ${o.info.renderer} for canvas: ${o.canvasContext.id}`;return x.probe(rs,s)(),x.table(rs,o.info)(),o}finally{x.groupEnd(rs)(),x.info(rs,"%cWebGL call tracing: luma.log.set('debug-webgl') ","color: white; background: blue; padding: 2px 6px; border-radius: 3px;")()}}};is=new Dp});var vl=E(()=>{hT();Pl();sl()});var PS=ZC((Ise,sg)=>{"use strict";sg.exports=Zl;sg.exports.default=Zl;function Zl(t,e,r){r=r||2;var i=e&&e.length,n=i?e[0]*r:t.length,o=vS(t,0,n,r,!0),s=[];if(!o||o.next===o.prev)return s;var a,c,l,f,u,d,h;if(i&&(o=qL(t,e,o,r)),t.length>80*r){a=l=t[0],c=f=t[1];for(var p=r;p<n;p+=r)u=t[p],d=t[p+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>f&&(f=d);h=Math.max(l-a,f-c),h=h!==0?32767/h:0}return Fs(o,s,r,a,c,h,0),s}function vS(t,e,r,i,n){var o,s;if(n===og(t,e,r,i)>0)for(o=e;o<r;o+=i)s=CS(o,t[o],t[o+1],s);else for(o=r-i;o>=e;o-=i)s=CS(o,t[o],t[o+1],s);return s&&ql(s,s.next)&&(Ds(s),s=s.next),s}function si(t,e){if(!t)return t;e||(e=t);var r=t,i;do if(i=!1,!r.steiner&&(ql(r,r.next)||q(r.prev,r,r.next)===0)){if(Ds(r),r=e=r.prev,r===r.next)break;i=!0}else r=r.next;while(i||r!==e);return e}function Fs(t,e,r,i,n,o,s){if(t){!s&&o&&nF(t,i,n,o);for(var a=t,c,l;t.prev!==t.next;){if(c=t.prev,l=t.next,o?JL(t,i,n,o):YL(t)){e.push(c.i/r|0),e.push(t.i/r|0),e.push(l.i/r|0),Ds(t),t=l.next,a=l.next;continue}if(t=l,t===a){s?s===1?(t=QL(si(t),e,r),Fs(t,e,r,i,n,o,2)):s===2&&ZL(t,e,r,i,n,o):Fs(si(t),e,r,i,n,o,1);break}}}}function YL(t){var e=t.prev,r=t,i=t.next;if(q(e,r,i)>=0)return!1;for(var n=e.x,o=r.x,s=i.x,a=e.y,c=r.y,l=i.y,f=n<o?n<s?n:s:o<s?o:s,u=a<c?a<l?a:l:c<l?c:l,d=n>o?n>s?n:s:o>s?o:s,h=a>c?a>l?a:l:c>l?c:l,p=i.next;p!==e;){if(p.x>=f&&p.x<=d&&p.y>=u&&p.y<=h&&rn(n,a,o,c,s,l,p.x,p.y)&&q(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function JL(t,e,r,i){var n=t.prev,o=t,s=t.next;if(q(n,o,s)>=0)return!1;for(var a=n.x,c=o.x,l=s.x,f=n.y,u=o.y,d=s.y,h=a<c?a<l?a:l:c<l?c:l,p=f<u?f<d?f:d:u<d?u:d,g=a>c?a>l?a:l:c>l?c:l,m=f>u?f>d?f:d:u>d?u:d,b=ig(h,p,e,r,i),y=ig(g,m,e,r,i),_=t.prevZ,A=t.nextZ;_&&_.z>=b&&A&&A.z<=y;){if(_.x>=h&&_.x<=g&&_.y>=p&&_.y<=m&&_!==n&&_!==s&&rn(a,f,c,u,l,d,_.x,_.y)&&q(_.prev,_,_.next)>=0||(_=_.prevZ,A.x>=h&&A.x<=g&&A.y>=p&&A.y<=m&&A!==n&&A!==s&&rn(a,f,c,u,l,d,A.x,A.y)&&q(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;_&&_.z>=b;){if(_.x>=h&&_.x<=g&&_.y>=p&&_.y<=m&&_!==n&&_!==s&&rn(a,f,c,u,l,d,_.x,_.y)&&q(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;A&&A.z<=y;){if(A.x>=h&&A.x<=g&&A.y>=p&&A.y<=m&&A!==n&&A!==s&&rn(a,f,c,u,l,d,A.x,A.y)&&q(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function QL(t,e,r){var i=t;do{var n=i.prev,o=i.next.next;!ql(n,o)&&RS(n,i,i.next,o)&&Ns(n,o)&&Ns(o,n)&&(e.push(n.i/r|0),e.push(i.i/r|0),e.push(o.i/r|0),Ds(i),Ds(i.next),i=t=o),i=i.next}while(i!==t);return si(i)}function ZL(t,e,r,i,n,o){var s=t;do{for(var a=s.next.next;a!==s.prev;){if(s.i!==a.i&&aF(s,a)){var c=MS(s,a);s=si(s,s.next),c=si(c,c.next),Fs(s,e,r,i,n,o,0),Fs(c,e,r,i,n,o,0);return}a=a.next}s=s.next}while(s!==t)}function qL(t,e,r,i){var n=[],o,s,a,c,l;for(o=0,s=e.length;o<s;o++)a=e[o]*i,c=o<s-1?e[o+1]*i:t.length,l=vS(t,a,c,i,!1),l===l.next&&(l.steiner=!0),n.push(sF(l));for(n.sort(eF),o=0;o<n.length;o++)r=tF(n[o],r);return r}function eF(t,e){return t.x-e.x}function tF(t,e){var r=rF(t,e);if(!r)return e;var i=MS(r,t);return si(i,i.next),si(r,r.next)}function rF(t,e){var r=e,i=t.x,n=t.y,o=-1/0,s;do{if(n<=r.y&&n>=r.next.y&&r.next.y!==r.y){var a=r.x+(n-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(a<=i&&a>o&&(o=a,s=r.x<r.next.x?r:r.next,a===i))return s}r=r.next}while(r!==e);if(!s)return null;var c=s,l=s.x,f=s.y,u=1/0,d;r=s;do i>=r.x&&r.x>=l&&i!==r.x&&rn(n<f?i:o,n,l,f,n<f?o:i,n,r.x,r.y)&&(d=Math.abs(n-r.y)/(i-r.x),Ns(r,t)&&(d<u||d===u&&(r.x>s.x||r.x===s.x&&iF(s,r)))&&(s=r,u=d)),r=r.next;while(r!==c);return s}function iF(t,e){return q(t.prev,t,e.prev)<0&&q(e.next,t,t.next)<0}function nF(t,e,r,i){var n=t;do n.z===0&&(n.z=ig(n.x,n.y,e,r,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==t);n.prevZ.nextZ=null,n.prevZ=null,oF(n)}function oF(t){var e,r,i,n,o,s,a,c,l=1;do{for(r=t,t=null,o=null,s=0;r;){for(s++,i=r,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||r.z<=i.z)?(n=r,r=r.nextZ,a--):(n=i,i=i.nextZ,c--),o?o.nextZ=n:t=n,n.prevZ=o,o=n;r=i}o.nextZ=null,l*=2}while(s>1);return t}function ig(t,e,r,i,n){return t=(t-r)*n|0,e=(e-i)*n|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function sF(t){var e=t,r=t;do(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next;while(e!==t);return r}function rn(t,e,r,i,n,o,s,a){return(n-s)*(e-a)>=(t-s)*(o-a)&&(t-s)*(i-a)>=(r-s)*(e-a)&&(r-s)*(o-a)>=(n-s)*(i-a)}function aF(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!cF(t,e)&&(Ns(t,e)&&Ns(e,t)&&lF(t,e)&&(q(t.prev,t,e.prev)||q(t,e.prev,e))||ql(t,e)&&q(t.prev,t,t.next)>0&&q(e.prev,e,e.next)>0)}function q(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function ql(t,e){return t.x===e.x&&t.y===e.y}function RS(t,e,r,i){var n=Ql(q(t,e,r)),o=Ql(q(t,e,i)),s=Ql(q(r,i,t)),a=Ql(q(r,i,e));return!!(n!==o&&s!==a||n===0&&Jl(t,r,e)||o===0&&Jl(t,i,e)||s===0&&Jl(r,t,i)||a===0&&Jl(r,e,i))}function Jl(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function Ql(t){return t>0?1:t<0?-1:0}function cF(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&RS(r,r.next,t,e))return!0;r=r.next}while(r!==t);return!1}function Ns(t,e){return q(t.prev,t,t.next)<0?q(t,e,t.next)>=0&&q(t,t.prev,e)>=0:q(t,e,t.prev)<0||q(t,t.next,e)<0}function lF(t,e){var r=t,i=!1,n=(t.x+e.x)/2,o=(t.y+e.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&n<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==t);return i}function MS(t,e){var r=new ng(t.i,t.x,t.y),i=new ng(e.i,e.x,e.y),n=t.next,o=e.prev;return t.next=e,e.prev=t,r.next=n,n.prev=r,i.next=r,r.prev=i,o.next=i,i.prev=o,i}function CS(t,e,r,i){var n=new ng(t,e,r);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Ds(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function ng(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Zl.deviation=function(t,e,r,i){var n=e&&e.length,o=n?e[0]*r:t.length,s=Math.abs(og(t,0,o,r));if(n)for(var a=0,c=e.length;a<c;a++){var l=e[a]*r,f=a<c-1?e[a+1]*r:t.length;s-=Math.abs(og(t,l,f,r))}var u=0;for(a=0;a<i.length;a+=3){var d=i[a]*r,h=i[a+1]*r,p=i[a+2]*r;u+=Math.abs((t[d]-t[p])*(t[h+1]-t[d+1])-(t[d]-t[h])*(t[p+1]-t[d+1]))}return s===0&&u===0?0:Math.abs((u-s)/s)};function og(t,e,r,i){for(var n=0,o=e,s=r-i;o<r;o+=i)n+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return n}Zl.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},i=0,n=0;n<t.length;n++){for(var o=0;o<t[n].length;o++)for(var s=0;s<e;s++)r.vertices.push(t[n][o][s]);n>0&&(i+=t[n-1].length,r.holes.push(i))}return r}});async function mn(t,e,r,i){return i._parse(t,e,r,i)}function Se(t,e){if(!t)throw new Error(e||"loader assertion failed.")}var _t={self:typeof self<"u"&&self,window:typeof window<"u"&&window,global:typeof global<"u"&&global,document:typeof document<"u"&&document},tv=_t.self||_t.window||_t.global||{},rv=_t.window||_t.self||_t.global||{},iv=_t.global||_t.self||_t.window||{},nv=_t.document||{};var Nt=!!(typeof process!="object"||String(process)!=="[object process]"||process.browser);var tm=typeof process<"u"&&process.version&&/v([0-9]*)/.exec(process.version),ov=tm&&parseFloat(tm[1])||0;_n();var jf="4.4.2",hv=jf[0]>="0"&&jf[0]<="9"?`v${jf}`:"";function pv(){let t=new Ce({id:"loaders.gl"});return globalThis.loaders||={},globalThis.loaders.log=t,globalThis.loaders.version=hv,globalThis.probe||={},globalThis.probe.loaders=t,t}var Wf=pv();var gv=t=>typeof t=="boolean",bt=t=>typeof t=="function",At=t=>t!==null&&typeof t=="object",ha=t=>At(t)&&t.constructor==={}.constructor;var Gf=t=>typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer,di=t=>At(t)&&typeof t.byteLength=="number"&&typeof t.slice=="function";var Xf=t=>!!t&&bt(t[Symbol.iterator]),$f=t=>!!t&&bt(t[Symbol.asyncIterator]);var Ue=t=>typeof Response<"u"&&t instanceof Response||At(t)&&bt(t.arrayBuffer)&&bt(t.text)&&bt(t.json);var ke=t=>typeof Blob<"u"&&t instanceof Blob;var bm=t=>typeof ReadableStream<"u"&&t instanceof ReadableStream||At(t)&&bt(t.tee)&&bt(t.cancel)&&bt(t.getReader);var Am=t=>At(t)&&bt(t.read)&&bt(t.pipe)&&gv(t.readable),bn=t=>bm(t)||Am(t);function Kf(t,e){return ym(t||{},e)}function ym(t,e,r=0){if(r>3)return e;let i={...t};for(let[n,o]of Object.entries(e))o&&typeof o=="object"&&!Array.isArray(o)?i[n]=ym(i[n]||{},e[n],r+1):i[n]=e[n];return i}function pa(t){globalThis.loaders||={},globalThis.loaders.modules||={},Object.assign(globalThis.loaders.modules,t)}function Yf(t){return globalThis.loaders?.modules?.[t]||null}var xm="latest";function mv(){return globalThis._loadersgl_?.version||(globalThis._loadersgl_=globalThis._loadersgl_||{},globalThis._loadersgl_.version="4.4.2"),globalThis._loadersgl_.version}var ga=mv();function pe(t,e){if(!t)throw new Error(e||"loaders.gl assertion failed.")}var yt={self:typeof self<"u"&&self,window:typeof window<"u"&&window,global:typeof global<"u"&&global,document:typeof document<"u"&&document},Wk=yt.self||yt.window||yt.global||{},Gk=yt.window||yt.self||yt.global||{},Xk=yt.global||yt.self||yt.window||{},$k=yt.document||{};var se=typeof process!="object"||String(process)!=="[object process]"||process.browser,An=typeof importScripts=="function",Sm=typeof window<"u"&&typeof window.orientation<"u",Tm=typeof process<"u"&&process.version&&/v([0-9]*)/.exec(process.version),Kk=Tm&&parseFloat(Tm[1])||0;var yn=class{name;workerThread;isRunning=!0;result;_resolve=()=>{};_reject=()=>{};constructor(e,r){this.name=e,this.workerThread=r,this.result=new Promise((i,n)=>{this._resolve=i,this._reject=n})}postMessage(e,r){this.workerThread.postMessage({source:"loaders.gl",type:e,payload:r})}done(e){pe(this.isRunning),this.isRunning=!1,this._resolve(e)}error(e){pe(this.isRunning),this.isRunning=!1,this._reject(e)}};var hi=class{terminate(){}};var Jf=new Map;function Em(t){pe(t.source&&!t.url||!t.source&&t.url);let e=Jf.get(t.source||t.url);return e||(t.url&&(e=_v(t.url),Jf.set(t.url,e)),t.source&&(e=Cm(t.source),Jf.set(t.source,e))),pe(e),e}function _v(t){if(!t.startsWith("http"))return t;let e=bv(t);return Cm(e)}function Cm(t){let e=new Blob([t],{type:"application/javascript"});return URL.createObjectURL(e)}function bv(t){return`try {
  importScripts('${t}');
} catch (error) {
  console.error(error);
  throw error;
}`}function Qf(t,e=!0,r){let i=r||new Set;if(t){if(vm(t))i.add(t);else if(vm(t.buffer))i.add(t.buffer);else if(!ArrayBuffer.isView(t)){if(e&&typeof t=="object")for(let n in t)Qf(t[n],e,i)}}return r===void 0?Array.from(i):[]}function vm(t){return t?t instanceof ArrayBuffer||typeof MessagePort<"u"&&t instanceof MessagePort||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas:!1}var Zf=()=>{},er=class{name;source;url;terminated=!1;worker;onMessage;onError;_loadableURL="";static isSupported(){return typeof Worker<"u"&&se||typeof hi<"u"&&!se}constructor(e){let{name:r,source:i,url:n}=e;pe(i||n),this.name=r,this.source=i,this.url=n,this.onMessage=Zf,this.onError=o=>console.log(o),this.worker=se?this._createBrowserWorker():this._createNodeWorker()}destroy(){this.onMessage=Zf,this.onError=Zf,this.worker.terminate(),this.terminated=!0}get isRunning(){return!!this.onMessage}postMessage(e,r){r=r||Qf(e),this.worker.postMessage(e,r)}_getErrorFromErrorEvent(e){let r="Failed to load ";return r+=`worker ${this.name} from ${this.url}. `,e.message&&(r+=`${e.message} in `),e.lineno&&(r+=`:${e.lineno}:${e.colno}`),new Error(r)}_createBrowserWorker(){this._loadableURL=Em({source:this.source,url:this.url});let e=new Worker(this._loadableURL,{name:this.name});return e.onmessage=r=>{r.data?this.onMessage(r.data):this.onError(new Error("No data received"))},e.onerror=r=>{this.onError(this._getErrorFromErrorEvent(r)),this.terminated=!0},e.onmessageerror=r=>console.error(r),e}_createNodeWorker(){let e;if(this.url){let i=this.url.includes(":/")||this.url.startsWith("/")?this.url:`./${this.url}`,n=this.url.endsWith(".ts")||this.url.endsWith(".mjs")?"module":"commonjs";e=new hi(i,{eval:!1,type:n})}else if(this.source)e=new hi(this.source,{eval:!0});else throw new Error("no worker");return e.on("message",r=>{this.onMessage(r)}),e.on("error",r=>{this.onError(r)}),e.on("exit",r=>{}),e}};var xn=class{name="unnamed";source;url;maxConcurrency=1;maxMobileConcurrency=1;onDebug=()=>{};reuseWorkers=!0;props={};jobQueue=[];idleQueue=[];count=0;isDestroyed=!1;static isSupported(){return er.isSupported()}constructor(e){this.source=e.source,this.url=e.url,this.setProps(e)}destroy(){this.idleQueue.forEach(e=>e.destroy()),this.isDestroyed=!0}setProps(e){this.props={...this.props,...e},e.name!==void 0&&(this.name=e.name),e.maxConcurrency!==void 0&&(this.maxConcurrency=e.maxConcurrency),e.maxMobileConcurrency!==void 0&&(this.maxMobileConcurrency=e.maxMobileConcurrency),e.reuseWorkers!==void 0&&(this.reuseWorkers=e.reuseWorkers),e.onDebug!==void 0&&(this.onDebug=e.onDebug)}async startJob(e,r=(n,o,s)=>n.done(s),i=(n,o)=>n.error(o)){let n=new Promise(o=>(this.jobQueue.push({name:e,onMessage:r,onError:i,onStart:o}),this));return this._startQueuedJob(),await n}async _startQueuedJob(){if(!this.jobQueue.length)return;let e=this._getAvailableWorker();if(!e)return;let r=this.jobQueue.shift();if(r){this.onDebug({message:"Starting job",name:r.name,workerThread:e,backlog:this.jobQueue.length});let i=new yn(r.name,e);e.onMessage=n=>r.onMessage(i,n.type,n.payload),e.onError=n=>r.onError(i,n),r.onStart(i);try{await i.result}catch(n){console.error(`Worker exception: ${n}`)}finally{this.returnWorkerToQueue(e)}}}returnWorkerToQueue(e){!se||this.isDestroyed||!this.reuseWorkers||this.count>this._getMaxConcurrency()?(e.destroy(),this.count--):this.idleQueue.push(e),this.isDestroyed||this._startQueuedJob()}_getAvailableWorker(){if(this.idleQueue.length>0)return this.idleQueue.shift()||null;if(this.count<this._getMaxConcurrency()){this.count++;let e=`${this.name.toLowerCase()} (#${this.count} of ${this.maxConcurrency})`;return new er({name:e,source:this.source,url:this.url})}return null}_getMaxConcurrency(){return Sm?this.maxMobileConcurrency:this.maxConcurrency}};var Av={maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:!0,onDebug:()=>{}},Pr=class t{props;workerPools=new Map;static _workerFarm;static isSupported(){return er.isSupported()}static getWorkerFarm(e={}){return t._workerFarm=t._workerFarm||new t({}),t._workerFarm.setProps(e),t._workerFarm}constructor(e){this.props={...Av},this.setProps(e),this.workerPools=new Map}destroy(){for(let e of this.workerPools.values())e.destroy();this.workerPools=new Map}setProps(e){this.props={...this.props,...e};for(let r of this.workerPools.values())r.setProps(this._getWorkerPoolProps())}getWorkerPool(e){let{name:r,source:i,url:n}=e,o=this.workerPools.get(r);return o||(o=new xn({name:r,source:i,url:n}),o.setProps(this._getWorkerPoolProps()),this.workerPools.set(r,o)),o}_getWorkerPoolProps(){return{maxConcurrency:this.props.maxConcurrency,maxMobileConcurrency:this.props.maxMobileConcurrency,reuseWorkers:this.props.reuseWorkers,onDebug:this.props.onDebug}}};function qf(t,e={}){let r=e[t.id]||{},i=se?`${t.id}-worker.js`:`${t.id}-worker-node.js`,n=r.workerUrl;if(!n&&t.id==="compression"&&(n=e.workerUrl),(e._workerType||e?.core?._workerType)==="test"&&(se?n=`modules/${t.module}/dist/${i}`:n=`modules/${t.module}/src/workers/${t.id}-worker-node.ts`),!n){let s=t.version;s==="latest"&&(s=xm);let a=s?`@${s}`:"";n=`https://unpkg.com/@loaders.gl/${t.module}${a}/dist/${i}`}return pe(n),n}function eu(t,e=ga){pe(t,"no worker provided");let r=t.version;return!(!e||!r)}var tu={};function Tn(t={}){let e=t.useLocalLibraries??t.core?.useLocalLibraries,r=t.CDN??t.core?.CDN,i=t.modules;return{...e!==void 0?{useLocalLibraries:e}:{},...r!==void 0?{CDN:r}:{},...i!==void 0?{modules:i}:{}}}async function Ge(t,e=null,r={},i=null){return e&&(t=Rm(t,e,r,i)),tu[t]=tu[t]||yv(t),await tu[t]}function Rm(t,e,r={},i=null){if(r?.core)throw new Error("loadLibrary: options.core must be pre-normalized");if(!r.useLocalLibraries&&t.startsWith("http"))return t;i=i||t;let n=r.modules||{};return n[i]?n[i]:se?r.CDN?(pe(r.CDN.startsWith("http")),`${r.CDN}/${e}@${ga}/dist/libs/${i}`):An?`../src/libs/${i}`:`modules/${e}/src/libs/${i}`:`modules/${e}/dist/libs/${i}`}async function yv(t){if(t.endsWith("wasm"))return await Tv(t);if(!se){let{requireFromFile:r}=globalThis.loaders||{};try{let i=await r?.(t);return i||!t.includes("/dist/libs/")?i:await r?.(t.replace("/dist/libs/","/src/libs/"))}catch(i){if(t.includes("/dist/libs/"))try{return await r?.(t.replace("/dist/libs/","/src/libs/"))}catch{}return console.error(i),null}}if(An)return importScripts(t);let e=await Sv(t);return xv(e,t)}function xv(t,e){if(!se){let{requireFromString:i}=globalThis.loaders||{};return i?.(t,e)}if(An)return eval.call(globalThis,t),null;let r=document.createElement("script");r.id=e;try{r.appendChild(document.createTextNode(t))}catch{r.text=t}return document.body.appendChild(r),null}async function Tv(t){let{readFileAsArrayBuffer:e}=globalThis.loaders||{};if(se||!e||t.startsWith("http"))return await(await fetch(t)).arrayBuffer();try{return await e(t)}catch{if(t.includes("/dist/libs/"))return await e(t.replace("/dist/libs/","/src/libs/"));throw new Error(`Failed to load ArrayBuffer from ${t}`)}}async function Sv(t){let{readFileAsText:e}=globalThis.loaders||{};if(se||!e||t.startsWith("http"))return await(await fetch(t)).text();try{return await e(t)}catch{if(t.includes("/dist/libs/"))return await e(t.replace("/dist/libs/","/src/libs/"));throw new Error(`Failed to load text from ${t}`)}}function ru(t,e){if(!Pr.isSupported())return!1;let r=e?._nodeWorkers??e?.core?._nodeWorkers;if(!se&&!r)return!1;let i=e?.worker??e?.core?.worker;return!!(t.worker&&i)}async function iu(t,e,r,i,n){let o=t.id,s=qf(t,r),c=Pr.getWorkerFarm(r?.core).getWorkerPool({name:o,url:s});r=JSON.parse(JSON.stringify(r)),i=JSON.parse(JSON.stringify(i||{}));let l=await c.startJob("process-on-worker",Ev.bind(null,n));return l.postMessage("process",{input:e,options:r,context:i}),await(await l.result).result}async function Ev(t,e,r,i){switch(r){case"done":e.done(i);break;case"error":e.error(new Error(i.error));break;case"process":let{id:n,input:o,options:s}=i;try{let a=await t(o,s);e.postMessage("done",{id:n,result:a})}catch(a){let c=a instanceof Error?a.message:"unknown error";e.postMessage("error",{id:n,error:c})}break;default:console.warn(`parse-with-worker unknown message ${r}`)}}function Pm(t,e=5){return typeof t=="string"?t.slice(0,e):ArrayBuffer.isView(t)?Mm(t.buffer,t.byteOffset,e):t instanceof ArrayBuffer?Mm(t,0,e):""}function Mm(t,e,r){if(t.byteLength<=e+r)return"";let i=new DataView(t),n="";for(let o=0;o<r;o++)n+=String.fromCharCode(i.getUint8(e+o));return n}function nu(t){try{return JSON.parse(t)}catch{throw new Error(`Failed to parse JSON from data starting with "${Pm(t)}"`)}}function ou(t,e,r){if(r=r||t.byteLength,t.byteLength<r||e.byteLength<r)return!1;let i=new Uint8Array(t),n=new Uint8Array(e);for(let o=0;o<i.length;++o)if(i[o]!==n[o])return!1;return!0}function su(...t){return wm(t)}function wm(t){let e=t.map(o=>o instanceof ArrayBuffer?new Uint8Array(o):o),r=e.reduce((o,s)=>o+s.byteLength,0),i=new Uint8Array(r),n=0;for(let o of e)i.set(o,n),n+=o.byteLength;return i.buffer}function Sn(t,e,r){let i=r!==void 0?new Uint8Array(t).subarray(e,e+r):new Uint8Array(t).subarray(e);return new Uint8Array(i).buffer}function tr(t,e){return Se(t>=0),Se(e>0),t+(e-1)&~(e-1)}function au(t,e,r){let i;if(t instanceof ArrayBuffer)i=new Uint8Array(t);else{let n=t.byteOffset,o=t.byteLength;i=new Uint8Array(t.buffer||t.arrayBuffer,n,o)}return e.set(i,r),r+tr(i.byteLength,4)}async function cu(t){let e=[];for await(let r of t)e.push(Cv(r));return su(...e)}function Cv(t){if(t instanceof ArrayBuffer)return t;if(ArrayBuffer.isView(t)){let{buffer:e,byteOffset:r,byteLength:i}=t;return Im(e,r,i)}return Im(t)}function Im(t,e=0,r=t.byteLength-e){let i=new Uint8Array(t,e,r),n=new Uint8Array(i.length);return n.set(i),n.buffer}var vv="",Om={};function uu(t){for(let e in Om)if(t.startsWith(e)){let r=Om[e];t=t.replace(e,r)}return!t.startsWith("http://")&&!t.startsWith("https://")&&(t=`${vv}${t}`),t}function ma(t){return t&&typeof t=="object"&&t.isBuffer}function gi(t){if(ma(t))return t;if(t instanceof ArrayBuffer)return t;if(Gf(t))return pi(t);if(ArrayBuffer.isView(t)){let e=t.buffer;return t.byteOffset===0&&t.byteLength===t.buffer.byteLength?e:e.slice(t.byteOffset,t.byteOffset+t.byteLength)}if(typeof t=="string"){let e=t;return new TextEncoder().encode(e).buffer}if(t&&typeof t=="object"&&t._toArrayBuffer)return t._toArrayBuffer();throw new Error("toArrayBuffer")}function $e(t){if(t instanceof ArrayBuffer)return t;if(Gf(t))return pi(t);let{buffer:e,byteOffset:r,byteLength:i}=t;return e instanceof ArrayBuffer&&r===0&&i===e.byteLength?e:pi(e,r,i)}function pi(t,e=0,r=t.byteLength-e){let i=new Uint8Array(t,e,r),n=new Uint8Array(i.length);return n.set(i),n.buffer}function du(t){return ArrayBuffer.isView(t)?t:new Uint8Array(t)}var Dt={};he(Dt,{dirname:()=>Mv,filename:()=>Rv,join:()=>Pv,resolve:()=>wv});function Lm(){if(typeof process<"u"&&typeof process.cwd<"u")return process.cwd();let t=window.location?.pathname;return t?.slice(0,t.lastIndexOf("/")+1)||""}function Rv(t){let e=t?t.lastIndexOf("/"):-1;return e>=0?t.substr(e+1):t}function Mv(t){let e=t?t.lastIndexOf("/"):-1;return e>=0?t.substr(0,e):""}function Pv(...t){let e="/";return t=t.map((r,i)=>(i&&(r=r.replace(new RegExp(`^${e}`),"")),i!==t.length-1&&(r=r.replace(new RegExp(`${e}$`),"")),r)),t.join(e)}function wv(...t){let e=[];for(let o=0;o<t.length;o++)e[o]=t[o];let r="",i=!1,n;for(let o=e.length-1;o>=-1&&!i;o--){let s;o>=0?s=e[o]:(n===void 0&&(n=Lm()),s=n),s.length!==0&&(r=`${s}/${r}`,i=s.charCodeAt(0)===vn)}return r=Iv(r,!i),i?`/${r}`:r.length>0?r:"."}var vn=47,hu=46;function Iv(t,e){let r="",i=-1,n=0,o,s=!1;for(let a=0;a<=t.length;++a){if(a<t.length)o=t.charCodeAt(a);else{if(o===vn)break;o=vn}if(o===vn){if(!(i===a-1||n===1))if(i!==a-1&&n===2){if(r.length<2||!s||r.charCodeAt(r.length-1)!==hu||r.charCodeAt(r.length-2)!==hu){if(r.length>2){let c=r.length-1,l=c;for(;l>=0&&r.charCodeAt(l)!==vn;--l);if(l!==c){r=l===-1?"":r.slice(0,l),i=a,n=0,s=!1;continue}}else if(r.length===2||r.length===1){r="",i=a,n=0,s=!1;continue}}e&&(r.length>0?r+="/..":r="..",s=!0)}else{let c=t.slice(i+1,a);r.length>0?r+=`/${c}`:r=c,s=!1}i=a,n=0}else o===hu&&n!==-1?++n:n=-1}return r}var _a=class extends Error{constructor(e,r){super(e),this.reason=r.reason,this.url=r.url,this.response=r.response}reason;url;response};var Lv=/^data:([-\w.]+\/[-\w.+]+)(;|,)/,Fv=/^([-\w.]+\/[-\w.+]+)/;function pu(t,e){return t.toLowerCase()===e.toLowerCase()}function Fm(t){let e=Fv.exec(t);return e?e[1]:t}function gu(t){let e=Lv.exec(t);return e?e[1]:""}var Nm=/\?.*/;function Dm(t){let e=t.match(Nm);return e&&e[0]}function rr(t){return t.replace(Nm,"")}function Um(t){if(t.length<50)return t;let e=t.slice(t.length-15);return`${t.substr(0,32)}...${e}`}function Ir(t){return Ue(t)?t.url:ke(t)?("name"in t?t.name:"")||"":typeof t=="string"?t:""}function mi(t){if(Ue(t)){let e=t.headers.get("content-type")||"",r=rr(t.url);return Fm(e)||gu(r)}return ke(t)?t.type||"":typeof t=="string"?gu(t):""}function km(t){return Ue(t)?t.headers["content-length"]||-1:ke(t)?t.size:typeof t=="string"?t.length:t instanceof ArrayBuffer||ArrayBuffer.isView(t)?t.byteLength:-1}async function ba(t){if(Ue(t))return t;let e={},r=km(t);r>=0&&(e["content-length"]=String(r));let i=Ir(t),n=mi(t);n&&(e["content-type"]=n);let o=await Dv(t);o&&(e["x-first-bytes"]=o),typeof t=="string"&&(t=new TextEncoder().encode(t));let s=new Response(t,{headers:e});return Object.defineProperty(s,"url",{value:i}),s}async function Vm(t){if(!t.ok)throw await Nv(t)}async function Nv(t){let e=Um(t.url),r=`Failed to fetch resource (${t.status}) ${t.statusText}: ${e}`;r=r.length>100?`${r.slice(0,100)}...`:r;let i={reason:t.statusText,url:t.url,response:t};try{let n=t.headers.get("Content-Type");i.reason=!t.bodyUsed&&n?.includes("application/json")?await t.json():await t.text()}catch{}return new _a(r,i)}async function Dv(t){if(typeof t=="string")return`data:,${t.slice(0,5)}`;if(t instanceof Blob){let r=t.slice(0,5);return await new Promise(i=>{let n=new FileReader;n.onload=o=>i(o?.target?.result),n.readAsDataURL(r)})}if(t instanceof ArrayBuffer){let r=t.slice(0,5);return`data:base64,${Uv(r)}`}return null}function Uv(t){let e="",r=new Uint8Array(t);for(let i=0;i<r.byteLength;i++)e+=String.fromCharCode(r[i]);return btoa(e)}function kv(t){return!Vv(t)&&!Hv(t)}function Vv(t){return t.startsWith("http:")||t.startsWith("https:")}function Hv(t){return t.startsWith("data:")}async function mu(t,e){if(typeof t=="string"){let r=uu(t);return kv(r)&&globalThis.loaders?.fetchNode?globalThis.loaders?.fetchNode(r,e):await fetch(r,e)}return await ba(t)}_n();var Rn=new Ce({id:"loaders.gl"}),Aa=class{log(){return()=>{}}info(){return()=>{}}warn(){return()=>{}}error(){return()=>{}}},ya=class{console;constructor(){this.console=console}log(...e){return this.console.log.bind(this.console,...e)}info(...e){return this.console.info.bind(this.console,...e)}warn(...e){return this.console.warn.bind(this.console,...e)}error(...e){return this.console.error.bind(this.console,...e)}};var xa={core:{baseUrl:void 0,fetch:null,mimeType:void 0,fallbackMimeType:void 0,ignoreRegisteredLoaders:void 0,nothrow:!1,log:new ya,useLocalLibraries:!1,CDN:"https://unpkg.com/@loaders.gl",worker:!0,maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:Nt,_nodeWorkers:!1,_workerType:"",limit:0,_limitMB:0,batchSize:"auto",batchDebounceMs:0,metadata:!1,transforms:[]}},Hm={baseUri:"core.baseUrl",fetch:"core.fetch",mimeType:"core.mimeType",fallbackMimeType:"core.fallbackMimeType",ignoreRegisteredLoaders:"core.ignoreRegisteredLoaders",nothrow:"core.nothrow",log:"core.log",useLocalLibraries:"core.useLocalLibraries",CDN:"core.CDN",worker:"core.worker",maxConcurrency:"core.maxConcurrency",maxMobileConcurrency:"core.maxMobileConcurrency",reuseWorkers:"core.reuseWorkers",_nodeWorkers:"core.nodeWorkers",_workerType:"core._workerType",_worker:"core._workerType",limit:"core.limit",_limitMB:"core._limitMB",batchSize:"core.batchSize",batchDebounceMs:"core.batchDebounceMs",metadata:"core.metadata",transforms:"core.transforms",throws:"nothrow",dataType:"(no longer used)",uri:"core.baseUrl",method:"core.fetch.method",headers:"core.fetch.headers",body:"core.fetch.body",mode:"core.fetch.mode",credentials:"core.fetch.credentials",cache:"core.fetch.cache",redirect:"core.fetch.redirect",referrer:"core.fetch.referrer",referrerPolicy:"core.fetch.referrerPolicy",integrity:"core.fetch.integrity",keepalive:"core.fetch.keepalive",signal:"core.fetch.signal"};var _u=["baseUrl","fetch","mimeType","fallbackMimeType","ignoreRegisteredLoaders","nothrow","log","useLocalLibraries","CDN","worker","maxConcurrency","maxMobileConcurrency","reuseWorkers","_nodeWorkers","_workerType","limit","_limitMB","batchSize","batchDebounceMs","metadata","transforms"];function bu(){globalThis.loaders=globalThis.loaders||{};let{loaders:t}=globalThis;return t._state||(t._state={}),t._state}function Au(){let t=bu();return t.globalOptions=t.globalOptions||{...xa,core:{...xa.core}},Ut(t.globalOptions)}function Wm(t,e,r,i){return r=r||[],r=Array.isArray(r)?r:[r],zv(t,r),Ut(Wv(e,t,i))}function Ut(t){let e=Xv(t);Gm(e);for(let r of _u)e.core&&e.core[r]!==void 0&&delete e[r];return e.core&&e.core._workerType!==void 0&&delete e._worker,e}function zv(t,e){zm(t,null,xa,Hm,e);for(let r of e){let i=t&&t[r.id]||{},n=r.options&&r.options[r.id]||{},o=r.deprecatedOptions&&r.deprecatedOptions[r.id]||{};zm(i,r.id,n,o,e)}}function zm(t,e,r,i,n){let o=e||"Top level",s=e?`${e}.`:"";for(let a in t){let c=!e&&At(t[a]),l=a==="baseUri"&&!e,f=a==="workerUrl"&&e;if(!(a in r)&&!l&&!f){if(a in i)Rn.level>0&&Rn.warn(`${o} loader option '${s}${a}' no longer supported, use '${i[a]}'`)();else if(!c&&Rn.level>0){let u=jv(a,n);Rn.warn(`${o} loader option '${s}${a}' not recognized. ${u}`)()}}}}function jv(t,e){let r=t.toLowerCase(),i="";for(let n of e)for(let o in n.options){if(t===o)return`Did you mean '${n.id}.${o}'?`;let s=o.toLowerCase();(r.startsWith(s)||s.startsWith(r))&&(i=i||`Did you mean '${n.id}.${o}'?`)}return i}function Wv(t,e,r){let i=t.options||{},n={...i};i.core&&(n.core={...i.core}),Gm(n),n.core?.log===null&&(n.core={...n.core,log:new Aa}),jm(n,Ut(Au()));let o=Ut(e);return jm(n,o),Gv(n,r),$v(n),n}function jm(t,e){for(let r in e)if(r in e){let i=e[r];ha(i)&&ha(t[r])?t[r]={...t[r],...e[r]}:t[r]=e[r]}}function Gv(t,e){if(!e)return;t.core?.baseUrl!==void 0||(t.core||={},t.core.baseUrl=Dt.dirname(rr(e)))}function Xv(t){let e={...t};return t.core&&(e.core={...t.core}),e}function Gm(t){t.baseUri!==void 0&&(t.core||={},t.core.baseUrl===void 0&&(t.core.baseUrl=t.baseUri));for(let r of _u)if(t[r]!==void 0){let n=t.core=t.core||{};n[r]===void 0&&(n[r]=t[r])}let e=t._worker;e!==void 0&&(t.core||={},t.core._workerType===void 0&&(t.core._workerType=e))}function $v(t){let e=t.core;if(e)for(let r of _u)e[r]!==void 0&&(t[r]=e[r])}function Mn(t){return t?(Array.isArray(t)&&(t=t[0]),Array.isArray(t?.extensions)):!1}function Pn(t){Se(t,"null loader"),Se(Mn(t),"invalid loader");let e;return Array.isArray(t)&&(e=t[1],t=t[0],t={...t,options:{...t.options,...e}}),(t?.parseTextSync||t?.parseText)&&(t.text=!0),t.text||(t.binary=!0),t}var Xm=()=>{let t=bu();return t.loaderRegistry=t.loaderRegistry||[],t.loaderRegistry};function yu(t){let e=Xm();t=Array.isArray(t)?t:[t];for(let r of t){let i=Pn(r);e.find(n=>i===n)||e.unshift(i)}}function $m(){return Xm()}var Kv=/\.([^.]+)$/;async function Jm(t,e=[],r,i){if(!Qm(t))return null;let n=Ut(r||{});if(n.core||={},t instanceof Response&&Km(t)){let s=await t.clone().text(),a=Ta(s,e,{...n,core:{...n.core,nothrow:!0}},i);if(a)return a}let o=Ta(t,e,{...n,core:{...n.core,nothrow:!0}},i);if(o)return o;if(ke(t)&&(t=await t.slice(0,10).arrayBuffer(),o=Ta(t,e,n,i)),!o&&t instanceof Response&&Km(t)){let s=await t.clone().text();o=Ta(s,e,n,i)}if(!o&&!n.core.nothrow)throw new Error(Zm(t));return o}function Km(t){let e=mi(t);return!!(e&&(e.startsWith("text/")||e==="application/json"||e.endsWith("+json")))}function Ta(t,e=[],r,i){if(!Qm(t))return null;let n=Ut(r||{});if(n.core||={},e&&!Array.isArray(e))return Pn(e);let o=[];e&&(o=o.concat(e)),n.core.ignoreRegisteredLoaders||o.push(...$m()),Jv(o);let s=Yv(t,o,n,i);if(!s&&!n.core.nothrow)throw new Error(Zm(t));return s}function Yv(t,e,r,i){let n=Ir(t),o=mi(t),s=rr(n)||i?.url,a=null,c="";return r?.core?.mimeType&&(a=xu(e,r?.core?.mimeType),c=`match forced by supplied MIME type ${r?.core?.mimeType}`),a=a||Qv(e,s),c=c||(a?`matched url ${s}`:""),a=a||xu(e,o),c=c||(a?`matched MIME type ${o}`:""),a=a||qv(e,t),c=c||(a?`matched initial data ${qm(t)}`:""),r?.core?.fallbackMimeType&&(a=a||xu(e,r?.core?.fallbackMimeType),c=c||(a?`matched fallback MIME type ${o}`:"")),c&&Wf.log(1,`selectLoader selected ${a?.name}: ${c}.`),a}function Qm(t){return!(t instanceof Response&&t.status===204)}function Zm(t){let e=Ir(t),r=mi(t),i="No valid loader found (";i+=e?`${Dt.filename(e)}, `:"no url provided, ",i+=`MIME type: ${r?`"${r}"`:"not provided"}, `;let n=t?qm(t):"";return i+=n?` first bytes: "${n}"`:"first bytes: not available",i+=")",i}function Jv(t){for(let e of t)Pn(e)}function Qv(t,e){let r=e&&Kv.exec(e),i=r&&r[1];return i?Zv(t,i):null}function Zv(t,e){e=e.toLowerCase();for(let r of t)for(let i of r.extensions)if(i.toLowerCase()===e)return r;return null}function xu(t,e){for(let r of t)if(r.mimeTypes?.some(i=>pu(e,i))||pu(e,`application/x.${r.id}`))return r;return null}function qv(t,e){if(!e)return null;for(let r of t)if(typeof e=="string"){if(eR(e,r))return r}else if(ArrayBuffer.isView(e)){if(Ym(e.buffer,e.byteOffset,r))return r}else if(e instanceof ArrayBuffer&&Ym(e,0,r))return r;return null}function eR(t,e){return e.testText?e.testText(t):(Array.isArray(e.tests)?e.tests:[e.tests]).some(i=>t.startsWith(i))}function Ym(t,e,r){return(Array.isArray(r.tests)?r.tests:[r.tests]).some(n=>tR(t,e,r,n))}function tR(t,e,r,i){if(di(i))return ou(i,t,i.byteLength);switch(typeof i){case"function":return i($e(t));case"string":let n=Tu(t,e,i.length);return i===n;default:return!1}}function qm(t,e=5){return typeof t=="string"?t.slice(0,e):ArrayBuffer.isView(t)?Tu(t.buffer,t.byteOffset,e):t instanceof ArrayBuffer?Tu(t,0,e):""}function Tu(t,e,r){if(t.byteLength<e+r)return"";let i=new DataView(t),n="";for(let o=0;o<r;o++)n+=String.fromCharCode(i.getUint8(e+o));return n}var rR=256*1024;function*e_(t,e){let r=e?.chunkSize||rR,i=0,n=new TextEncoder;for(;i<t.length;){let o=Math.min(t.length-i,r),s=t.slice(i,i+o);i+=o,yield $e(n.encode(s))}}function*t_(t,e={}){let{chunkSize:r=262144}=e,i=0;for(;i<t.byteLength;){let n=Math.min(t.byteLength-i,r),o=new ArrayBuffer(n),s=new Uint8Array(t,i,n);new Uint8Array(o).set(s),i+=n,yield o}}async function*r_(t,e){let r=e?.chunkSize||1048576,i=0;for(;i<t.size;){let n=i+r,o=await t.slice(i,n).arrayBuffer();i=n,yield o}}function Su(t,e){return Nt?iR(t,e):nR(t,e)}async function*iR(t,e){let r=t.getReader(),i;try{for(;;){let n=i||r.read();e?._streamReadAhead&&(i=r.read());let{done:o,value:s}=await n;if(o)return;yield gi(s)}}catch{r.releaseLock()}}async function*nR(t,e){for await(let r of t)yield gi(r)}function i_(t,e){if(typeof t=="string")return e_(t,e);if(t instanceof ArrayBuffer)return t_(t,e);if(ke(t))return r_(t,e);if(bn(t))return Su(t,e);if(Ue(t)){let r=t.body;if(!r)throw new Error("Readable stream not available on Response");return Su(r,e)}throw new Error("makeIterator")}var n_="Cannot convert supplied data type";function oR(t,e,r){if(e.text&&typeof t=="string")return t;if(ma(t)&&(t=t.buffer),di(t)){let i=du(t);return e.text&&!e.binary?new TextDecoder("utf8").decode(i):gi(i)}throw new Error(n_)}async function o_(t,e,r){if(typeof t=="string"||di(t))return oR(t,e,r);if(ke(t)&&(t=await ba(t)),Ue(t))return await Vm(t),e.binary?await t.arrayBuffer():await t.text();if(bn(t)&&(t=i_(t,r)),Xf(t)||$f(t))return cu(t);throw new Error(n_)}function Sa(t,e){let r=Au(),i=t||r,n=i.fetch??i.core?.fetch;return typeof n=="function"?n:At(n)?o=>mu(o,n):e?.fetch?e?.fetch:mu}function s_(t,e,r){if(r)return r;let i={fetch:Sa(e,t),...t};if(i.url){let n=rr(i.url);i.baseUrl=n,i.queryString=Dm(i.url),i.filename=Dt.filename(n),i.baseUrl=Dt.dirname(n)}return Array.isArray(i.loaders)||(i.loaders=null),i}function a_(t,e){if(t&&!Array.isArray(t))return t;let r;if(t&&(r=Array.isArray(t)?t:[t]),e&&e.loaders){let i=Array.isArray(e.loaders)?e.loaders:[e.loaders];r=r?[...r,...i]:i}return r&&r.length?r:void 0}async function wn(t,e,r,i){e&&!Array.isArray(e)&&!Mn(e)&&(i=void 0,r=e,e=void 0),t=await t,r=r||{};let n=Ir(t),s=a_(e,i),a=await Jm(t,s,r);if(!a)return null;let c=Wm(r,a,s,n);return i=s_({url:n,_parse:wn,loaders:s},c,i||null),await sR(a,t,c,i)}async function sR(t,e,r,i){if(eu(t),r=Kf(t.options,r),Ue(e)){let{ok:o,redirected:s,status:a,statusText:c,type:l,url:f}=e,u=Object.fromEntries(e.headers.entries());i.response={headers:u,ok:o,redirected:s,status:a,statusText:c,type:l,url:f}}e=await o_(e,t,r);let n=t;if(n.parseTextSync&&typeof e=="string")return n.parseTextSync(e,r,i);if(ru(t,r))return await iu(t,e,r,i,wn);if(n.parseText&&typeof e=="string")return await n.parseText(e,r,i);if(n.parse)return await n.parse(e,r,i);throw pe(!n.parseSync),new Error(`${t.id} loader - no parser found and worker is disabled`)}function c_(t){switch(t.constructor){case Int8Array:return"int8";case Uint8Array:case Uint8ClampedArray:return"uint8";case Int16Array:return"int16";case Uint16Array:return"uint16";case Int32Array:return"int32";case Uint32Array:return"uint32";case Float32Array:return"float32";case Float64Array:return"float64";default:return"null"}}function l_(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function f_(t){return Array.isArray(t)?t.length===0||typeof t[0]=="number":!1}function Eu(t){return l_(t)||f_(t)}function Cu(t){let e=1/0,r=1/0,i=1/0,n=-1/0,o=-1/0,s=-1/0,a=t.POSITION?t.POSITION.value:[],c=a&&a.length;for(let l=0;l<c;l+=3){let f=a[l],u=a[l+1],d=a[l+2];e=f<e?f:e,r=u<r?u:r,i=d<i?d:i,n=f>n?f:n,o=u>o?u:o,s=d>s?d:s}return[[e,r,i],[n,o,s]]}function vu(t,e,r){let i=c_(e.value),n=r||u_(e);return{name:t,type:{type:"fixed-size-list",listSize:e.size,children:[{name:"value",type:i}]},nullable:!1,metadata:n}}function u_(t){let e={};return"byteOffset"in t&&(e.byteOffset=t.byteOffset.toString(10)),"byteStride"in t&&(e.byteStride=t.byteStride.toString(10)),"normalized"in t&&(e.normalized=t.normalized.toString()),e}async function ir(t,e,r,i){let n,o;!Array.isArray(e)&&!Mn(e)?(n=[],o=e,i=void 0):(n=e,o=r);let s=Sa(o),a=t;return typeof t=="string"&&(a=await s(t)),ke(t)&&(a=await s(t)),typeof t=="string"&&(Ut(o||{}).core?.baseUrl||(o={...o,core:{...o?.core,baseUrl:t}})),Array.isArray(n)?await wn(a,n,o):await wn(a,n,o)}var d_="4.4.2";var aR=globalThis.loaders?.parseImageNode,Ru=typeof Image<"u",Mu=typeof ImageBitmap<"u",cR=!!aR,Pu=Nt?!0:cR;function h_(t){switch(t){case"auto":return Mu||Ru||Pu;case"imagebitmap":return Mu;case"image":return Ru;case"data":return Pu;default:throw new Error(`@loaders.gl/images: image ${t} not supported in this environment`)}}function p_(){if(Mu)return"imagebitmap";if(Ru)return"image";if(Pu)return"data";throw new Error("Install '@loaders.gl/polyfills' to parse images under Node.js")}function g_(t){let e=lR(t);if(!e)throw new Error("Not an image");return e}function In(t){switch(g_(t)){case"data":return t;case"image":case"imagebitmap":let e=document.createElement("canvas"),r=e.getContext("2d");if(!r)throw new Error("getImageData");return e.width=t.width,e.height=t.height,r.drawImage(t,0,0),r.getImageData(0,0,t.width,t.height);default:throw new Error("getImageData")}}function lR(t){return typeof ImageBitmap<"u"&&t instanceof ImageBitmap?"imagebitmap":typeof Image<"u"&&t instanceof Image?"image":t&&typeof t=="object"&&t.data&&t.width&&t.height?"data":null}var fR=/^data:image\/svg\+xml/,uR=/\.svg((\?|#).*)?$/;function Ea(t){return t&&(fR.test(t)||uR.test(t))}function m_(t,e){if(Ea(e)){let i=new TextDecoder().decode(t);try{typeof unescape=="function"&&typeof encodeURIComponent=="function"&&(i=unescape(encodeURIComponent(i)))}catch(o){throw new Error(o.message)}return`data:image/svg+xml;base64,${btoa(i)}`}return wu(t,e)}function wu(t,e){if(Ea(e))throw new Error("SVG cannot be parsed directly to imagebitmap");return new Blob([new Uint8Array(t)])}async function Ca(t,e,r){let i=m_(t,r),n=self.URL||self.webkitURL,o=typeof i!="string"&&n.createObjectURL(i);try{return await dR(o||i,e)}finally{o&&n.revokeObjectURL(o)}}async function dR(t,e){let r=new Image;return r.src=t,e.image&&e.image.decode&&r.decode?(await r.decode(),r):await new Promise((i,n)=>{try{r.onload=()=>i(r),r.onerror=o=>{let s=o instanceof Error?o.message:"error";n(new Error(s))}}catch(o){n(o)}})}var __=!0;async function b_(t,e,r){let i;Ea(r)?i=await Ca(t,e,r):i=wu(t,r);let n=e&&e.imagebitmap;return await hR(i,n)}async function hR(t,e=null){if((pR(e)||!__)&&(e=null),e)try{return await createImageBitmap(t,e)}catch(r){console.warn(r),__=!1}return await createImageBitmap(t)}function pR(t){if(!t)return!0;for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function A_(t){return!bR(t,"ftyp",4)||!(t[8]&96)?null:gR(t)}function gR(t){switch(mR(t,8,12).replace("\0"," ").trim()){case"avif":case"avis":return{extension:"avif",mimeType:"image/avif"};default:return null}}function mR(t,e,r){return String.fromCharCode(...t.slice(e,r))}function _R(t){return[...t].map(e=>e.charCodeAt(0))}function bR(t,e,r=0){let i=_R(e);for(let n=0;n<i.length;++n)if(i[n]!==t[n+r])return!1;return!0}var xt=!1,Bn=!0;function Br(t){let e=On(t);return yR(e)||SR(e)||xR(e)||TR(e)||AR(e)}function AR(t){let e=new Uint8Array(t instanceof DataView?t.buffer:t),r=A_(e);return r?{mimeType:r.mimeType,width:0,height:0}:null}function yR(t){let e=On(t);return e.byteLength>=24&&e.getUint32(0,xt)===2303741511?{mimeType:"image/png",width:e.getUint32(16,xt),height:e.getUint32(20,xt)}:null}function xR(t){let e=On(t);return e.byteLength>=10&&e.getUint32(0,xt)===1195984440?{mimeType:"image/gif",width:e.getUint16(6,Bn),height:e.getUint16(8,Bn)}:null}function TR(t){let e=On(t);return e.byteLength>=14&&e.getUint16(0,xt)===16973&&e.getUint32(2,Bn)===e.byteLength?{mimeType:"image/bmp",width:e.getUint32(18,Bn),height:e.getUint32(22,Bn)}:null}function SR(t){let e=On(t);if(!(e.byteLength>=3&&e.getUint16(0,xt)===65496&&e.getUint8(2)===255))return null;let{tableMarkers:i,sofMarkers:n}=ER(),o=2;for(;o+9<e.byteLength;){let s=e.getUint16(o,xt);if(n.has(s))return{mimeType:"image/jpeg",height:e.getUint16(o+5,xt),width:e.getUint16(o+7,xt)};if(!i.has(s))return null;o+=2,o+=e.getUint16(o,xt)}return null}function ER(){let t=new Set([65499,65476,65484,65501,65534]);for(let r=65504;r<65520;++r)t.add(r);return{tableMarkers:t,sofMarkers:new Set([65472,65473,65474,65475,65477,65478,65479,65481,65482,65483,65485,65486,65487,65502])}}function On(t){if(t instanceof DataView)return t;if(ArrayBuffer.isView(t))return new DataView(t.buffer);if(t instanceof ArrayBuffer)return new DataView(t);throw new Error("toDataView")}async function y_(t,e){let{mimeType:r}=Br(t)||{},i=globalThis.loaders?.parseImageNode;return Se(i),await i(t,r)}async function x_(t,e,r){e=e||{};let n=(e.image||{}).type||"auto",{url:o}=r||{},s=CR(n),a;switch(s){case"imagebitmap":a=await b_(t,e,o);break;case"image":a=await Ca(t,e,o);break;case"data":a=await y_(t,e);break;default:Se(!1)}return n==="data"&&(a=In(a)),a}function CR(t){switch(t){case"auto":case"data":return p_();default:return h_(t),t}}var vR=["png","jpg","jpeg","gif","webp","bmp","ico","svg","avif"],RR=["image/png","image/jpeg","image/gif","image/webp","image/avif","image/bmp","image/vnd.microsoft.icon","image/svg+xml"],MR={image:{type:"auto",decode:!0}},Ln={dataType:null,batchType:null,id:"image",module:"images",name:"Images",version:d_,mimeTypes:RR,extensions:vR,parse:x_,tests:[t=>!!Br(new DataView(t))],options:MR};var Iu={};function Bu(t){if(Iu[t]===void 0){let e=Nt?wR(t):PR(t);Iu[t]=e}return Iu[t]}function PR(t){let e=["image/png","image/jpeg","image/gif"],r=globalThis.loaders?.imageFormatsNode||e;return!!globalThis.loaders?.parseImageNode&&r.includes(t)}function wR(t){switch(t){case"image/avif":case"image/webp":return IR(t);default:return!0}}function IR(t){try{return document.createElement("canvas").toDataURL(t).indexOf(`data:${t}`)===0}catch{return!1}}_n();var BR=new Ce({id:"deck"}),P=BR;var Ou={};function T_(t){Ou=t}function te(t,e,r,i){P.level>0&&Ou[t]&&Ou[t].call(null,e,r,i)}function OR(t){let e=t[0],r=t[t.length-1];return e==="{"&&r==="}"||e==="["&&r==="]"}var S_={dataType:null,batchType:null,id:"JSON",name:"JSON",module:"",version:"",options:{},extensions:["json","geojson"],mimeTypes:["application/json","application/geo+json"],testText:OR,parseTextSync:JSON.parse};function LR(){let t="9.3.3",e=globalThis.deck&&globalThis.deck.VERSION;if(e&&e!==t)throw new Error(`deck.gl - multiple versions detected: ${e} vs ${t}`);return e||(P.log(1,`deck.gl ${t}`)(),globalThis.deck={...globalThis.deck,VERSION:t,version:t,log:P,_registerLoggers:T_},yu([S_,[Ln,{imagebitmap:{premultiplyAlpha:"none"}}]])),t}var E_=LR();function Or(t,e){if(!t){let r=new Error(e||"shadertools: assertion failed.");throw Error.captureStackTrace?.(r,Or),r}}var Lu={number:{type:"number",validate(t,e){return Number.isFinite(t)&&typeof e=="object"&&(e.max===void 0||t<=e.max)&&(e.min===void 0||t>=e.min)}},array:{type:"array",validate(t,e){return Array.isArray(t)||ArrayBuffer.isView(t)}}};function v_(t){let e={};for(let[r,i]of Object.entries(t))e[r]=FR(i);return e}function FR(t){let e=C_(t);if(e!=="object")return{value:t,...Lu[e],type:e};if(typeof t=="object")return t?t.type!==void 0?{...t,...Lu[t.type],type:t.type}:t.value===void 0?{type:"object",value:t}:(e=C_(t.value),{...t,...Lu[e],type:e}):{type:"object",value:null};throw new Error("props")}function C_(t){return Array.isArray(t)||ArrayBuffer.isView(t)?"array":typeof t}var R_=`#ifdef MODULE_LOGDEPTH
  logdepth_adjustPosition(gl_Position);
#endif
`,M_=`#ifdef MODULE_MATERIAL
  fragColor = material_filterColor(fragColor);
#endif

#ifdef MODULE_LIGHTING
  fragColor = lighting_filterColor(fragColor);
#endif

#ifdef MODULE_FOG
  fragColor = fog_filterColor(fragColor);
#endif

#ifdef MODULE_PICKING
  fragColor = picking_filterHighlightColor(fragColor);
  fragColor = picking_filterPickingColor(fragColor);
#endif

#ifdef MODULE_LOGDEPTH
  logdepth_setFragDepth();
#endif
`;var NR={vertex:R_,fragment:M_},P_=/void\s+main\s*\([^)]*\)\s*\{\n?/,w_=/}\n?[^{}]*$/,Fu=[],Fn="__LUMA_INJECT_DECLARATIONS__";function I_(t){let e={vertex:{},fragment:{}};for(let r in t){let i=t[r],n=DR(r);typeof i=="string"&&(i={order:0,injection:i}),e[n][r]=i}return e}function DR(t){let e=t.slice(0,2);switch(e){case"vs":return"vertex";case"fs":return"fragment";default:throw new Error(e)}}function Nn(t,e,r,i=!1){let n=e==="vertex";for(let o in r){let s=r[o];s.sort((c,l)=>c.order-l.order),Fu.length=s.length;for(let c=0,l=s.length;c<l;++c)Fu[c]=s[c].injection;let a=`${Fu.join(`
`)}
`;switch(o){case"vs:#decl":n&&(t=t.replace(Fn,a));break;case"vs:#main-start":n&&(t=t.replace(P_,c=>c+a));break;case"vs:#main-end":n&&(t=t.replace(w_,c=>a+c));break;case"fs:#decl":n||(t=t.replace(Fn,a));break;case"fs:#main-start":n||(t=t.replace(P_,c=>c+a));break;case"fs:#main-end":n||(t=t.replace(w_,c=>a+c));break;default:t=t.replace(o,c=>c+a)}}return t=t.replace(Fn,""),i&&(t=t.replace(/\}\s*$/,o=>o+NR[e])),t}function _i(t){t.map(e=>UR(e))}function UR(t){if(t.instance)return;_i(t.dependencies||[]);let{propTypes:e={},deprecations:r=[],inject:i={}}=t,n={normalizedInjections:I_(i),parsedDeprecations:kR(r)};e&&(n.propValidators=v_(e)),t.instance=n;let o={};e&&(o=Object.entries(e).reduce((s,[a,c])=>{let l=c?.value;return l&&(s[a]=l),s},{})),t.defaultUniforms={...t.defaultUniforms,...o}}function Nu(t,e,r){t.deprecations?.forEach(i=>{i.regex?.test(e)&&(i.deprecated?r.deprecated(i.old,i.new)():r.removed(i.old,i.new)())})}function kR(t){return t.forEach(e=>{switch(e.type){case"function":e.regex=new RegExp(`\\b${e.old}\\(`);break;default:e.regex=new RegExp(`${e.type} ${e.old};`)}}),t}function bi(t){_i(t);let e={},r={};B_({modules:t,level:0,moduleMap:e,moduleDepth:r});let i=Object.keys(r).sort((n,o)=>r[o]-r[n]).map(n=>e[n]);return _i(i),i}function B_(t){let{modules:e,level:r,moduleMap:i,moduleDepth:n}=t;if(r>=5)throw new Error("Possible loop in shader dependency graph");for(let o of e)i[o.name]=o,(n[o.name]===void 0||n[o.name]<r)&&(n[o.name]=r);for(let o of e)o.dependencies&&B_({modules:o.dependencies,level:r+1,moduleMap:i,moduleDepth:n})}var VR=/^(?:uniform\s+)?(?:(?:lowp|mediump|highp)\s+)?[A-Za-z0-9_]+(?:<[^>]+>)?\s+([A-Za-z0-9_]+)(?:\s*\[[^\]]+\])?\s*;/,HR=/((?:layout\s*\([^)]*\)\s*)*)uniform\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{([\s\S]*?)\}\s*([A-Za-z_][A-Za-z0-9_]*)?\s*;/g;function L_(t){return`${t.name}Uniforms`}function zR(t,e){let r=e==="wgsl"?t.source:e==="vertex"?t.vs:t.fs;if(!r)return null;let i=L_(t);return WR(r,e==="wgsl"?"wgsl":"glsl",i)}function jR(t,e){let r=Object.keys(t.uniformTypes||{});if(!r.length)return null;let i=zR(t,e);return i?{moduleName:t.name,uniformBlockName:L_(t),stage:e,expectedUniformNames:r,actualUniformNames:i,matches:$R(r,i)}:null}function F_(t,e,r={}){let i=jR(t,e);if(!i||i.matches)return i;let n=KR(i);return r.log?.error?.(n,i)(),r.throwOnError!==!1&&Or(!1,n),i}function N_(t){let e=[],r=YR(t);for(let i of r.matchAll(HR)){let n=i[1]?.trim()||null;e.push({blockName:i[2],body:i[3],instanceName:i[4]||null,layoutQualifier:n,hasLayoutQualifier:!!n,isStd140:!!(n&&/\blayout\s*\([^)]*\bstd140\b[^)]*\)/.exec(n))})}return e}function D_(t,e,r,i){let n=N_(t).filter(s=>!s.isStd140),o=new Set;for(let s of n){if(o.has(s.blockName))continue;o.add(s.blockName);let a=i?.label?`${i.label} `:"",c=s.hasLayoutQualifier?`declares ${JR(s.layoutQualifier)} instead of layout(std140)`:"does not declare layout(std140)",l=`${a}${e} shader uniform block ${s.blockName} ${c}. luma.gl host-side shader block packing assumes explicit layout(std140) for GLSL uniform blocks. Add \`layout(std140)\` to the block declaration.`;r?.warn?.(l,s)()}return n}function WR(t,e,r){let i=e==="wgsl"?GR(t,r):XR(t,r);if(!i)return null;let n=[];for(let o of i.split(`
`)){let s=o.replace(/\/\/.*$/,"").trim();if(!s||s.startsWith("#"))continue;let a=e==="wgsl"?s.match(/^([A-Za-z0-9_]+)\s*:/):s.match(VR);a&&n.push(a[1])}return n}function GR(t,e){let r=new RegExp(`\\bstruct\\s+${e}\\b`,"m").exec(t);if(!r)return null;let i=t.indexOf("{",r.index);if(i<0)return null;let n=0;for(let o=i;o<t.length;o++){let s=t[o];if(s==="{"){n++;continue}if(s==="}"&&(n--,n===0))return t.slice(i+1,o)}return null}function XR(t,e){return N_(t).find(i=>i.blockName===e)?.body||null}function $R(t,e){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}function KR(t){let{expectedUniformNames:e,actualUniformNames:r}=t,i=e.filter(a=>!r.includes(a)),n=r.filter(a=>!e.includes(a)),o=[`Expected ${e.length} fields, found ${r.length}.`],s=QR(e,r);return s&&o.push(s),i.length&&o.push(`Missing from shader block (${i.length}): ${O_(i)}.`),n.length&&o.push(`Unexpected in shader block (${n.length}): ${O_(n)}.`),e.length<=12&&r.length<=12&&(i.length||n.length)&&(o.push(`Expected: ${e.join(", ")}.`),o.push(`Actual: ${r.join(", ")}.`)),`${t.moduleName}: ${t.stage} shader uniform block ${t.uniformBlockName} does not match module.uniformTypes. ${o.join(" ")}`}function YR(t){return t.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/.*$/gm,"")}function JR(t){return t.replace(/\s+/g," ").trim()}function QR(t,e){let r=Math.min(t.length,e.length);for(let i=0;i<r;i++)if(t[i]!==e[i])return`First mismatch at field ${i+1}: expected ${t[i]}, found ${e[i]}.`;return t.length>e.length?`Shader block ends after field ${e.length}; expected next field ${t[e.length]}.`:e.length>t.length?`Shader block has extra field ${e.length}: ${e[t.length]}.`:null}function O_(t,e=8){if(t.length<=e)return t.join(", ");let r=t.length-e;return`${t.slice(0,e).join(", ")}, ... (${r} more)`}function U_(t){switch(t?.gpu.toLowerCase()){case"apple":return`#define APPLE_GPU
// Apple optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case"nvidia":return`#define NVIDIA_GPU
// Nvidia optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
`;case"intel":return`#define INTEL_GPU
// Intel optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Intel's built-in 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case"amd":return`#define AMD_GPU
`;default:return`#define DEFAULT_GPU
// Prevent driver from optimizing away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Headless Chrome's software shader 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// If the GPU doesn't have full 32 bits precision, will causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`}}function V_(t,e){if(Number(t.match(/^#version[ \t]+(\d+)/m)?.[1]||100)!==300)throw new Error("luma.gl v9 only supports GLSL 3.00 shader sources");switch(e){case"vertex":return t=k_(t,ZR),t;case"fragment":return t=k_(t,qR),t;default:throw new Error(e)}}var H_=[[/^(#version[ \t]+(100|300[ \t]+es))?[ \t]*\n/,`#version 300 es
`],[/\btexture(2D|2DProj|Cube)Lod(EXT)?\(/g,"textureLod("],[/\btexture(2D|2DProj|Cube)(EXT)?\(/g,"texture("]],ZR=[...H_,[Du("attribute"),"in $1"],[Du("varying"),"out $1"]],qR=[...H_,[Du("varying"),"in $1"]];function k_(t,e){for(let[r,i]of e)t=t.replace(r,i);return t}function Du(t){return new RegExp(`\\b${t}[ \\t]+(\\w+[ \\t]+\\w+(\\[\\w+\\])?;)`,"g")}function Uu(t,e){let r="";for(let i in t){let n=t[i];if(r+=`void ${n.signature} {
`,n.header&&(r+=`  ${n.header}`),e[i]){let o=e[i];o.sort((s,a)=>s.order-a.order);for(let s of o)r+=`  ${s.injection}
`}n.footer&&(r+=`  ${n.footer}`),r+=`}
`}return r}function ku(t){let e={vertex:{},fragment:{}};for(let r of t){let i,n;typeof r!="string"?(i=r,n=i.hook):(i={},n=r),n=n.trim();let[o,s]=n.split(":"),a=n.replace(/\(.+/,""),c=Object.assign(i,{signature:s});switch(o){case"vs":e.vertex[a]=c;break;case"fs":e.fragment[a]=c;break;default:throw new Error(o)}}return e}function z_(t,e){return{name:eM(t,e),language:"glsl",version:tM(t)}}function eM(t,e="unnamed"){let i=/#define[^\S\r\n]*SHADER_NAME[^\S\r\n]*([A-Za-z0-9_-]+)\s*/.exec(t);return i?i[1]:e}function tM(t){let e=100,r=t.match(/[^\s]+/g);if(r&&r.length>=2&&r[0]==="#version"){let i=parseInt(r[1],10);Number.isFinite(i)&&(e=i)}if(e!==100&&e!==300)throw new Error(`Invalid GLSL version ${e}`);return e}var Ve="(?:var<\\s*(uniform|storage(?:\\s*,\\s*[A-Za-z_][A-Za-z0-9_]*)?)\\s*>|var)\\s+([A-Za-z_][A-Za-z0-9_]*)",Ke="\\s*",Ai=[new RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)${Ke}@group\\(\\s*(\\d+)\\s*\\)${Ke}${Ve}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)${Ke}@binding\\(\\s*(auto|\\d+)\\s*\\)${Ke}${Ve}`,"g")],va=[new RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)${Ke}@group\\(\\s*(\\d+)\\s*\\)${Ke}${Ve}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)${Ke}@binding\\(\\s*(auto|\\d+)\\s*\\)${Ke}${Ve}`,"g")],j_=[new RegExp(`@binding\\(\\s*(\\d+)\\s*\\)${Ke}@group\\(\\s*(\\d+)\\s*\\)${Ke}${Ve}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)${Ke}@binding\\(\\s*(\\d+)\\s*\\)${Ke}${Ve}`,"g")],rM=[new RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${Ve}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)\\s*${Ve}`,"g"),new RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${Ve}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${Ve}`,"g")];function Ra(t){let e=t.split(""),r=0,i=0,n=!1,o=!1,s=!1;for(;r<t.length;){let a=t[r],c=t[r+1];if(o){s?s=!1:a==="\\"?s=!0:a==='"'&&(o=!1),r++;continue}if(n){a===`
`||a==="\r"?n=!1:e[r]=" ",r++;continue}if(i>0){if(a==="/"&&c==="*"){e[r]=" ",e[r+1]=" ",i++,r+=2;continue}if(a==="*"&&c==="/"){e[r]=" ",e[r+1]=" ",i--,r+=2;continue}a!==`
`&&a!=="\r"&&(e[r]=" "),r++;continue}if(a==='"'){o=!0,r++;continue}if(a==="/"&&c==="/"){e[r]=" ",e[r+1]=" ",n=!0,r+=2;continue}if(a==="/"&&c==="*"){e[r]=" ",e[r+1]=" ",i=1,r+=2;continue}r++}return e.join("")}function Lr(t,e){let r=Ra(t),i=[];for(let n of e){n.lastIndex=0;let o;for(o=n.exec(r);o;){let s=n===e[0],a=o.index,c=o[0].length;i.push({match:t.slice(a,a+c),index:a,length:c,bindingToken:o[s?1:2],groupToken:o[s?2:1],accessDeclaration:o[3]?.trim(),name:o[4]}),o=n.exec(r)}}return i.sort((n,o)=>n.index-o.index)}function Vu(t,e,r){let i=Lr(t,e);if(!i.length)return t;let n="",o=0;for(let s of i)n+=t.slice(o,s.index),n+=r(s),o=s.index+s.length;return n+=t.slice(o),n}function Hu(t){return/@binding\(\s*auto\s*\)/.test(Ra(t))}function W_(t,e){return Lr(t,e===Ai||e===va?rM:e).find(i=>i.bindingToken==="auto")}var G_=[new RegExp(`@binding\\(\\s*(\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${Ve}\\s*:\\s*([^;]+);`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(\\d+)\\s*\\)\\s*${Ve}\\s*:\\s*([^;]+);`,"g")];function Ma(t,e=[]){let r=Ra(t),i=new Map;for(let o of e)i.set(X_(o.name,o.group,o.location),o.moduleName);let n=[];for(let o of G_){o.lastIndex=0;let s;for(s=o.exec(r);s;){let a=o===G_[0],c=Number(s[a?1:2]),l=Number(s[a?2:1]),f=s[3]?.trim(),u=s[4],d=s[5].trim(),h=i.get(X_(u,l,c));n.push(iM({name:u,group:l,binding:c,owner:h?"module":"application",moduleName:h,accessDeclaration:f,resourceType:d})),s=o.exec(r)}}return n.sort((o,s)=>o.group!==s.group?o.group-s.group:o.binding!==s.binding?o.binding-s.binding:o.name.localeCompare(s.name))}function iM(t){let e={name:t.name,group:t.group,binding:t.binding,owner:t.owner,kind:"unknown",moduleName:t.moduleName,resourceType:t.resourceType};if(t.accessDeclaration){let r=t.accessDeclaration.split(",").map(i=>i.trim());if(r[0]==="uniform")return{...e,kind:"uniform",access:"uniform"};if(r[0]==="storage"){let i=r[1]||"read_write";return{...e,kind:i==="read"?"read-only-storage":"storage",access:i}}}return t.resourceType==="sampler"||t.resourceType==="sampler_comparison"?{...e,kind:"sampler",samplerKind:t.resourceType==="sampler_comparison"?"comparison":"filtering"}:t.resourceType.startsWith("texture_storage_")?{...e,kind:"storage-texture",access:oM(t.resourceType),viewDimension:$_(t.resourceType)}:t.resourceType.startsWith("texture_")?{...e,kind:"texture",viewDimension:$_(t.resourceType),sampleType:nM(t.resourceType),multisampled:t.resourceType.startsWith("texture_multisampled_")}:e}function X_(t,e,r){return`${e}:${r}:${t}`}function $_(t){if(t.includes("cube_array"))return"cube-array";if(t.includes("2d_array"))return"2d-array";if(t.includes("cube"))return"cube";if(t.includes("3d"))return"3d";if(t.includes("2d"))return"2d";if(t.includes("1d"))return"1d"}function nM(t){if(t.startsWith("texture_depth_"))return"depth";if(t.includes("<i32>"))return"sint";if(t.includes("<u32>"))return"uint";if(t.includes("<f32>"))return"float"}function oM(t){return/,\s*([A-Za-z_][A-Za-z0-9_]*)\s*>$/.exec(t)?.[1]}var zu=`

${Fn}
`,Dn=100,sM=`precision highp float;
`;function Q_(t){let e=bi(t.modules||[]),{source:r,bindingAssignments:i}=aM(t.platformInfo,{...t,source:t.source,stage:"vertex",modules:e});return{source:r,getUniforms:q_(e),bindingAssignments:i,bindingTable:Ma(r,i)}}function Z_(t){let{vs:e,fs:r}=t,i=bi(t.modules||[]);return{vs:K_(t.platformInfo,{...t,source:e,stage:"vertex",modules:i}),fs:K_(t.platformInfo,{...t,source:r,stage:"fragment",modules:i}),getUniforms:q_(i)}}function aM(t,e){let{source:r,stage:i,modules:n,hookFunctions:o=[],inject:s={},log:a}=e;Or(typeof r=="string","shader source must be a string");let c=r,l="",f=ku(o),u={},d={},h={};for(let _ in s){let A=typeof s[_]=="string"?{injection:s[_],order:0}:s[_],T=/^(v|f)s:(#)?([\w-]+)$/.exec(_);if(T){let S=T[2],v=T[3];S?v==="decl"?d[_]=[A]:h[_]=[A]:u[_]=[A]}else h[_]=[A]}let p=n,g=fM(c),m=lM(g.source),b=pM(p,e._bindingRegistry,m),y=[];for(let _ of p){a&&Nu(_,c,a);let A=uM(eb(_,"wgsl",a),_,{usedBindingsByGroup:m,bindingRegistry:e._bindingRegistry,reservedBindingKeysByGroup:b});y.push(...A.bindingAssignments);let T=A.source;l+=T;let S=_.injections?.[i]||{};for(let v in S){let M=/^(v|f)s:#([\w-]+)$/.exec(v);if(M){let R=M[2]==="decl"?d:h;R[v]=R[v]||[],R[v].push(S[v])}else u[v]=u[v]||[],u[v].push(S[v])}}return l+=zu,l=Nn(l,i,d),l+=Uu(f[i],u),l+=AM(y),l+=g.source,l=Nn(l,i,h),bM(l),{source:l,bindingAssignments:y}}function K_(t,e){let{source:r,stage:i,language:n="glsl",modules:o,defines:s={},hookFunctions:a=[],inject:c={},prologue:l=!0,log:f}=e;Or(typeof r=="string","shader source must be a string");let u=n==="glsl"?z_(r).version:-1,d=t.shaderLanguageVersion,h=u===100?"#version 100":"#version 300 es",g=r.split(`
`).slice(1).join(`
`),m={};o.forEach(S=>{Object.assign(m,S.defines)}),Object.assign(m,s);let b="";switch(n){case"wgsl":break;case"glsl":b=l?`${h}

// ----- PROLOGUE -------------------------
${`#define SHADER_TYPE_${i.toUpperCase()}`}

${U_(t)}
${i==="fragment"?sM:""}

// ----- APPLICATION DEFINES -------------------------

${cM(m)}

`:`${h}
`;break}let y=ku(a),_={},A={},T={};for(let S in c){let v=typeof c[S]=="string"?{injection:c[S],order:0}:c[S],M=/^(v|f)s:(#)?([\w-]+)$/.exec(S);if(M){let C=M[2],R=M[3];C?R==="decl"?A[S]=[v]:T[S]=[v]:_[S]=[v]}else T[S]=[v]}for(let S of o){f&&Nu(S,g,f);let v=eb(S,i,f);b+=v;let M=S.instance?.normalizedInjections[i]||{};for(let C in M){let R=/^(v|f)s:#([\w-]+)$/.exec(C);if(R){let w=R[2]==="decl"?A:T;w[C]=w[C]||[],w[C].push(M[C])}else _[C]=_[C]||[],_[C].push(M[C])}}return b+="// ----- MAIN SHADER SOURCE -------------------------",b+=zu,b=Nn(b,i,A),b+=Uu(y[i],_),b+=g,b=Nn(b,i,T),n==="glsl"&&u!==d&&(b=V_(b,i)),n==="glsl"&&D_(b,i,f),b.trim()}function q_(t){return function(r){let i={};for(let n of t){let o=n.getUniforms?.(r,i);Object.assign(i,o)}return i}}function cM(t={}){let e="";for(let r in t){let i=t[r];(i||Number.isFinite(i))&&(e+=`#define ${r.toUpperCase()} ${t[r]}
`)}return e}function eb(t,e,r){let i;switch(e){case"vertex":i=t.vs||"";break;case"fragment":i=t.fs||"";break;case"wgsl":i=t.source||"";break;default:Or(!1)}if(!t.name)throw new Error("Shader module must have a name");F_(t,e,{log:r});let n=t.name.toUpperCase().replace(/[^0-9a-z]/gi,"_"),o=`// ----- MODULE ${t.name} ---------------

`;return e!=="wgsl"&&(o+=`#define MODULE_${n}
`),o+=`${i}
`,o}function lM(t){let e=new Map;for(let r of Lr(t,j_)){let i=Number(r.bindingToken),n=Number(r.groupToken);ju(n,i,r.name),yi(e,n,i,`application binding "${r.name}"`)}return e}function fM(t){let e=Lr(t,va),r=new Map;for(let o of e){if(o.bindingToken==="auto")continue;let s=Number(o.bindingToken),a=Number(o.groupToken);ju(a,s,o.name),yi(r,a,s,`application binding "${o.name}"`)}let i={sawSupportedBindingDeclaration:e.length>0},n=Vu(t,va,o=>hM(o,r,i));if(Hu(t)&&!i.sawSupportedBindingDeclaration)throw new Error('Unsupported @binding(auto) declaration form in application WGSL. Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.');return{source:n}}function uM(t,e,r){let i=[],o={sawSupportedBindingDeclaration:Lr(t,Ai).length>0,nextHintedBindingLocation:typeof e.firstBindingSlot=="number"?e.firstBindingSlot:null},s=Vu(t,Ai,a=>dM(a,{module:e,context:r,bindingAssignments:i,relocationState:o}));if(Hu(t)&&!o.sawSupportedBindingDeclaration)throw new Error(`Unsupported @binding(auto) declaration form in module "${e.name}". Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.`);return{source:s,bindingAssignments:i}}function dM(t,e){let{module:r,context:i,bindingAssignments:n,relocationState:o}=e,{match:s,bindingToken:a,groupToken:c,name:l}=t,f=Number(c);if(a==="auto"){let d=tb(f,r.name,l),h=i.bindingRegistry?.get(d),p=h!==void 0?h:o.nextHintedBindingLocation===null?J_(f,i.usedBindingsByGroup):J_(f,i.usedBindingsByGroup,o.nextHintedBindingLocation);return Y_(r.name,f,p,l),h!==void 0&&gM(i.reservedBindingKeysByGroup,f,p,d)?(n.push({moduleName:r.name,name:l,group:f,location:p}),s.replace(/@binding\(\s*auto\s*\)/,`@binding(${p})`)):(yi(i.usedBindingsByGroup,f,p,`module "${r.name}" binding "${l}"`),i.bindingRegistry?.set(d,p),n.push({moduleName:r.name,name:l,group:f,location:p}),o.nextHintedBindingLocation!==null&&h===void 0&&(o.nextHintedBindingLocation=p+1),s.replace(/@binding\(\s*auto\s*\)/,`@binding(${p})`))}let u=Number(a);return Y_(r.name,f,u,l),yi(i.usedBindingsByGroup,f,u,`module "${r.name}" binding "${l}"`),n.push({moduleName:r.name,name:l,group:f,location:u}),s}function hM(t,e,r){let{match:i,bindingToken:n,groupToken:o,name:s}=t,a=Number(o);if(n==="auto"){let c=_M(a,e);return ju(a,c,s),yi(e,a,c,`application binding "${s}"`),i.replace(/@binding\(\s*auto\s*\)/,`@binding(${c})`)}return r.sawSupportedBindingDeclaration=!0,i}function pM(t,e,r){let i=new Map;if(!e)return i;for(let n of t)for(let o of mM(n)){let s=tb(o.group,n.name,o.name),a=e.get(s);if(a!==void 0){let c=i.get(o.group)||new Map,l=c.get(a);if(l&&l!==s)throw new Error(`Duplicate WGSL binding reservation for modules "${l}" and "${s}": group ${o.group}, binding ${a}.`);yi(r,o.group,a,`registered module binding "${s}"`),c.set(a,s),i.set(o.group,c)}}return i}function gM(t,e,r,i){let n=t.get(e);if(!n)return!1;let o=n.get(r);if(!o)return!1;if(o!==i)throw new Error(`Registered module binding "${i}" collided with "${o}": group ${e}, binding ${r}.`);return!0}function mM(t){let e=[],r=t.source||"";for(let i of Lr(r,Ai))e.push({name:i.name,group:Number(i.groupToken)});return e}function ju(t,e,r){if(t===0&&e>=Dn)throw new Error(`Application binding "${r}" in group 0 uses reserved binding ${e}. Application-owned explicit group-0 bindings must stay below ${Dn}.`)}function Y_(t,e,r,i){if(e===0&&r<Dn)throw new Error(`Module "${t}" binding "${i}" in group 0 uses reserved application binding ${r}. Module-owned explicit group-0 bindings must be ${Dn} or higher.`)}function yi(t,e,r,i){let n=t.get(e)||new Set;if(n.has(r))throw new Error(`Duplicate WGSL binding assignment for ${i}: group ${e}, binding ${r}.`);n.add(r),t.set(e,n)}function J_(t,e,r){let i=e.get(t)||new Set,n=r??(t===0?Dn:i.size>0?Math.max(...i)+1:0);for(;i.has(n);)n++;return n}function _M(t,e){let r=e.get(t)||new Set,i=0;for(;r.has(i);)i++;return i}function bM(t){let e=W_(t,Ai);if(!e)return;let r=yM(t,e.index);throw r?new Error(`Unresolved @binding(auto) for module "${r}" binding "${e.name}" remained in assembled WGSL source.`):xM(t,e.index)?new Error(`Unresolved @binding(auto) for application binding "${e.name}" remained in assembled WGSL source.`):new Error(`Unresolved @binding(auto) remained in assembled WGSL source near "${TM(e.match)}".`)}function AM(t){if(t.length===0)return"";let e=`// ----- MODULE WGSL BINDING ASSIGNMENTS ---------------
`;for(let r of t)e+=`// ${r.moduleName}.${r.name} -> @group(${r.group}) @binding(${r.location})
`;return e+=`
`,e}function tb(t,e,r){return`${t}:${e}:${r}`}function yM(t,e){let r=/^\/\/ ----- MODULE ([^\n]+) ---------------$/gm,i,n;for(n=r.exec(t);n&&n.index<=e;)i=n[1],n=r.exec(t);return i}function xM(t,e){let r=t.indexOf(zu);return r>=0?e>r:!0}function TM(t){return t.replace(/\s+/g," ").trim()}var Wu="([a-zA-Z_][a-zA-Z0-9_]*)",SM=new RegExp(`^\\s*\\#\\s*ifdef\\s*${Wu}\\s*$`),EM=new RegExp(`^\\s*\\#\\s*ifndef\\s*${Wu}\\s*(?:\\/\\/.*)?$`),CM=/^\s*\#\s*else\s*(?:\/\/.*)?$/,vM=/^\s*\#\s*endif\s*$/,RM=new RegExp(`^\\s*\\#\\s*ifdef\\s*${Wu}\\s*(?:\\/\\/.*)?$`),MM=/^\s*\#\s*endif\s*(?:\/\/.*)?$/;function rb(t,e){let r=t.split(`
`),i=[],n=[],o=!0;for(let s of r){let a=s.match(RM)||s.match(SM),c=s.match(EM),l=s.match(CM),f=s.match(MM)||s.match(vM);if(a||c){let u=(a||c)?.[1],d=!!e?.defines?.[u],h=a?d:!d,p=o&&h;n.push({parentActive:o,branchTaken:h,active:p}),o=p}else if(l){let u=n[n.length-1];if(!u)throw new Error("Encountered #else without matching #ifdef or #ifndef");u.active=u.parentActive&&!u.branchTaken,u.branchTaken=!0,o=u.active}else f?(n.pop(),o=n.length?n[n.length-1].active:!0):o&&i.push(s)}if(n.length>0)throw new Error("Unterminated conditional block in shader source");return i.join(`
`)}var Fr=class t{static defaultShaderAssembler;_hookFunctions=[];_defaultModules=[];_wgslBindingRegistry=new Map;static getDefaultShaderAssembler(){return t.defaultShaderAssembler=t.defaultShaderAssembler||new t,t.defaultShaderAssembler}addDefaultModule(e){this._defaultModules.find(r=>r.name===(typeof e=="string"?e:e.name))||this._defaultModules.push(e)}removeDefaultModule(e){let r=typeof e=="string"?e:e.name;this._defaultModules=this._defaultModules.filter(i=>i.name!==r)}addShaderHook(e,r){r&&(e=Object.assign(r,{hook:e})),this._hookFunctions.push(e)}assembleWGSLShader(e){let r=this._getModuleList(e.modules),i=this._hookFunctions,{source:n,getUniforms:o,bindingAssignments:s}=Q_({...e,source:e.source,_bindingRegistry:this._wgslBindingRegistry,modules:r,hookFunctions:i}),a={...r.reduce((l,f)=>(Object.assign(l,f.defines),l),{}),...e.defines},c=e.platformInfo.shaderLanguage==="wgsl"?rb(n,{defines:a}):n;return{source:c,getUniforms:o,modules:r,bindingAssignments:s,bindingTable:Ma(c,s)}}assembleGLSLShaderPair(e){let r=this._getModuleList(e.modules),i=this._hookFunctions;return{...Z_({...e,vs:e.vs,fs:e.fs,modules:r,hookFunctions:i}),modules:r}}_getModuleList(e=[]){let r=new Array(this._defaultModules.length+e.length),i={},n=0;for(let o=0,s=this._defaultModules.length;o<s;++o){let a=this._defaultModules[o],c=a.name;r[n++]=a,i[c]=!0}for(let o=0,s=e.length;o<s;++o){let a=e[o],c=a.name;i[c]||(r[n++]=a,i[c]=!0)}return r.length=n,_i(r),r}};var PM=`out vec4 transform_output;
void main() {
  transform_output = vec4(0);
}`,wM=`#version 300 es
${PM}`;function Gu(t){let{input:e,inputChannels:r,output:i}=t||{};if(!e)return wM;if(!r)throw new Error("inputChannels");let n=IM(r),o=ib(e,r);return`#version 300 es
in ${n} ${e};
out vec4 ${i};
void main() {
  ${i} = ${o};
}`}function IM(t){switch(t){case 1:return"float";case 2:return"vec2";case 3:return"vec3";case 4:return"vec4";default:throw new Error(`invalid channels: ${t}`)}}function ib(t,e){switch(e){case 1:return`vec4(${t}, 0.0, 0.0, 1.0)`;case 2:return`vec4(${t}, 0.0, 1.0)`;case 3:return`vec4(${t}, 1.0)`;case 4:return t;default:throw new Error(`invalid channels: ${e}`)}}var qz=1/Math.PI*180,e9=1/180*Math.PI,BM={EPSILON:1e-12,debug:!1,precision:4,printTypes:!1,printDegrees:!1,printRowMajor:!0,_cartographicRadians:!1};globalThis.mathgl=globalThis.mathgl||{config:{...BM}};var ne=globalThis.mathgl.config;function Xu(t,{precision:e=ne.precision}={}){return t=OM(t),`${parseFloat(t.toPrecision(e))}`}function it(t){return Array.isArray(t)||ArrayBuffer.isView(t)&&!(t instanceof DataView)}function re(t,e,r){return FM(t,i=>Math.max(e,Math.min(r,i)))}function Nr(t,e,r){return it(t)?t.map((i,n)=>Nr(i,e[n],r)):r*e+(1-r)*t}function kt(t,e,r){let i=ne.EPSILON;r&&(ne.EPSILON=r);try{if(t===e)return!0;if(it(t)&&it(e)){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(!kt(t[n],e[n]))return!1;return!0}return t&&t.equals?t.equals(e):e&&e.equals?e.equals(t):typeof t=="number"&&typeof e=="number"?Math.abs(t-e)<=ne.EPSILON*Math.max(1,Math.abs(t),Math.abs(e)):!1}finally{ne.EPSILON=i}}function OM(t){return Math.round(t/ne.EPSILON)*ne.EPSILON}function LM(t){return t.clone?t.clone():new Array(t.length)}function FM(t,e,r){if(it(t)){let i=t;r=r||LM(i);for(let n=0;n<r.length&&n<i.length;++n){let o=typeof t=="number"?t:t[n];r[n]=e(o,n,r)}return r}return e(t)}var nr=class extends Array{clone(){return new this.constructor().copy(this)}fromArray(e,r=0){for(let i=0;i<this.ELEMENTS;++i)this[i]=e[i+r];return this.check()}toArray(e=[],r=0){for(let i=0;i<this.ELEMENTS;++i)e[r+i]=this[i];return e}toObject(e){return e}from(e){return Array.isArray(e)?this.copy(e):this.fromObject(e)}to(e){return e===this?this:it(e)?this.toArray(e):this.toObject(e)}toTarget(e){return e?this.to(e):this}toFloat32Array(){return new Float32Array(this)}toString(){return this.formatString(ne)}formatString(e){let r="";for(let i=0;i<this.ELEMENTS;++i)r+=(i>0?", ":"")+Xu(this[i],e);return`${e.printTypes?this.constructor.name:""}[${r}]`}equals(e){if(!e||this.length!==e.length)return!1;for(let r=0;r<this.ELEMENTS;++r)if(!kt(this[r],e[r]))return!1;return!0}exactEquals(e){if(!e||this.length!==e.length)return!1;for(let r=0;r<this.ELEMENTS;++r)if(this[r]!==e[r])return!1;return!0}negate(){for(let e=0;e<this.ELEMENTS;++e)this[e]=-this[e];return this.check()}lerp(e,r,i){if(i===void 0)return this.lerp(this,e,r);for(let n=0;n<this.ELEMENTS;++n){let o=e[n],s=typeof r=="number"?r:r[n];this[n]=o+i*(s-o)}return this.check()}min(e){for(let r=0;r<this.ELEMENTS;++r)this[r]=Math.min(e[r],this[r]);return this.check()}max(e){for(let r=0;r<this.ELEMENTS;++r)this[r]=Math.max(e[r],this[r]);return this.check()}clamp(e,r){for(let i=0;i<this.ELEMENTS;++i)this[i]=Math.min(Math.max(this[i],e[i]),r[i]);return this.check()}add(...e){for(let r of e)for(let i=0;i<this.ELEMENTS;++i)this[i]+=r[i];return this.check()}subtract(...e){for(let r of e)for(let i=0;i<this.ELEMENTS;++i)this[i]-=r[i];return this.check()}scale(e){if(typeof e=="number")for(let r=0;r<this.ELEMENTS;++r)this[r]*=e;else for(let r=0;r<this.ELEMENTS&&r<e.length;++r)this[r]*=e[r];return this.check()}multiplyByScalar(e){for(let r=0;r<this.ELEMENTS;++r)this[r]*=e;return this.check()}check(){if(ne.debug&&!this.validate())throw new Error(`math.gl: ${this.constructor.name} some fields set to invalid numbers'`);return this}validate(){let e=this.length===this.ELEMENTS;for(let r=0;r<this.ELEMENTS;++r)e=e&&Number.isFinite(this[r]);return e}sub(e){return this.subtract(e)}setScalar(e){for(let r=0;r<this.ELEMENTS;++r)this[r]=e;return this.check()}addScalar(e){for(let r=0;r<this.ELEMENTS;++r)this[r]+=e;return this.check()}subScalar(e){return this.addScalar(-e)}multiplyScalar(e){for(let r=0;r<this.ELEMENTS;++r)this[r]*=e;return this.check()}divideScalar(e){return this.multiplyByScalar(1/e)}clampScalar(e,r){for(let i=0;i<this.ELEMENTS;++i)this[i]=Math.min(Math.max(this[i],e),r);return this.check()}get elements(){return this}};function NM(t,e){if(t.length!==e)return!1;for(let r=0;r<t.length;++r)if(!Number.isFinite(t[r]))return!1;return!0}function H(t){if(!Number.isFinite(t))throw new Error(`Invalid number ${JSON.stringify(t)}`);return t}function or(t,e,r=""){if(ne.debug&&!NM(t,e))throw new Error(`math.gl: ${r} some fields set to invalid numbers'`);return t}function $u(t,e){if(!t)throw new Error(`math.gl assertion ${e}`)}var xi=class extends nr{get x(){return this[0]}set x(e){this[0]=H(e)}get y(){return this[1]}set y(e){this[1]=H(e)}len(){return Math.sqrt(this.lengthSquared())}magnitude(){return this.len()}lengthSquared(){let e=0;for(let r=0;r<this.ELEMENTS;++r)e+=this[r]*this[r];return e}magnitudeSquared(){return this.lengthSquared()}distance(e){return Math.sqrt(this.distanceSquared(e))}distanceSquared(e){let r=0;for(let i=0;i<this.ELEMENTS;++i){let n=this[i]-e[i];r+=n*n}return H(r)}dot(e){let r=0;for(let i=0;i<this.ELEMENTS;++i)r+=this[i]*e[i];return H(r)}normalize(){let e=this.magnitude();if(e!==0)for(let r=0;r<this.ELEMENTS;++r)this[r]/=e;return this.check()}multiply(...e){for(let r of e)for(let i=0;i<this.ELEMENTS;++i)this[i]*=r[i];return this.check()}divide(...e){for(let r of e)for(let i=0;i<this.ELEMENTS;++i)this[i]/=r[i];return this.check()}lengthSq(){return this.lengthSquared()}distanceTo(e){return this.distance(e)}distanceToSquared(e){return this.distanceSquared(e)}getComponent(e){return $u(e>=0&&e<this.ELEMENTS,"index is out of range"),H(this[e])}setComponent(e,r){return $u(e>=0&&e<this.ELEMENTS,"index is out of range"),this[e]=r,this.check()}addVectors(e,r){return this.copy(e).add(r)}subVectors(e,r){return this.copy(e).subtract(r)}multiplyVectors(e,r){return this.copy(e).multiply(r)}addScaledVector(e,r){return this.add(new this.constructor(e).multiplyScalar(r))}};var nt={};he(nt,{add:()=>HM,angle:()=>oP,ceil:()=>zM,clone:()=>DM,copy:()=>kM,create:()=>nb,cross:()=>qM,dist:()=>pP,distance:()=>cb,div:()=>hP,divide:()=>ab,dot:()=>ZM,equals:()=>lP,exactEquals:()=>cP,floor:()=>jM,forEach:()=>_P,fromValues:()=>UM,inverse:()=>JM,len:()=>fP,length:()=>fb,lerp:()=>eP,max:()=>GM,min:()=>WM,mul:()=>dP,multiply:()=>sb,negate:()=>YM,normalize:()=>QM,random:()=>tP,rotate:()=>nP,round:()=>XM,scale:()=>$M,scaleAndAdd:()=>KM,set:()=>VM,sqrDist:()=>gP,sqrLen:()=>mP,squaredDistance:()=>lb,squaredLength:()=>ub,str:()=>aP,sub:()=>uP,subtract:()=>ob,transformMat2:()=>rP,transformMat2d:()=>iP,transformMat3:()=>Ku,transformMat4:()=>Yu,zero:()=>sP});var X=typeof Float32Array<"u"?Float32Array:Array,Tt=Math.random;function Ye(t){return t>=0?Math.round(t):t%.5===0?Math.floor(t):Math.round(t)}var u9=Math.PI/180;function nb(){let t=new X(2);return X!=Float32Array&&(t[0]=0,t[1]=0),t}function DM(t){let e=new X(2);return e[0]=t[0],e[1]=t[1],e}function UM(t,e){let r=new X(2);return r[0]=t,r[1]=e,r}function kM(t,e){return t[0]=e[0],t[1]=e[1],t}function VM(t,e,r){return t[0]=e,t[1]=r,t}function HM(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t}function ob(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t}function sb(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t}function ab(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t}function zM(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t}function jM(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t}function WM(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t}function GM(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t}function XM(t,e){return t[0]=Ye(e[0]),t[1]=Ye(e[1]),t}function $M(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t}function KM(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t}function cb(t,e){let r=e[0]-t[0],i=e[1]-t[1];return Math.sqrt(r*r+i*i)}function lb(t,e){let r=e[0]-t[0],i=e[1]-t[1];return r*r+i*i}function fb(t){let e=t[0],r=t[1];return Math.sqrt(e*e+r*r)}function ub(t){let e=t[0],r=t[1];return e*e+r*r}function YM(t,e){return t[0]=-e[0],t[1]=-e[1],t}function JM(t,e){return t[0]=1/e[0],t[1]=1/e[1],t}function QM(t,e){let r=e[0],i=e[1],n=r*r+i*i;return n>0&&(n=1/Math.sqrt(n)),t[0]=e[0]*n,t[1]=e[1]*n,t}function ZM(t,e){return t[0]*e[0]+t[1]*e[1]}function qM(t,e,r){let i=e[0]*r[1]-e[1]*r[0];return t[0]=t[1]=0,t[2]=i,t}function eP(t,e,r,i){let n=e[0],o=e[1];return t[0]=n+i*(r[0]-n),t[1]=o+i*(r[1]-o),t}function tP(t,e){e=e===void 0?1:e;let r=Tt()*2*Math.PI;return t[0]=Math.cos(r)*e,t[1]=Math.sin(r)*e,t}function rP(t,e,r){let i=e[0],n=e[1];return t[0]=r[0]*i+r[2]*n,t[1]=r[1]*i+r[3]*n,t}function iP(t,e,r){let i=e[0],n=e[1];return t[0]=r[0]*i+r[2]*n+r[4],t[1]=r[1]*i+r[3]*n+r[5],t}function Ku(t,e,r){let i=e[0],n=e[1];return t[0]=r[0]*i+r[3]*n+r[6],t[1]=r[1]*i+r[4]*n+r[7],t}function Yu(t,e,r){let i=e[0],n=e[1];return t[0]=r[0]*i+r[4]*n+r[12],t[1]=r[1]*i+r[5]*n+r[13],t}function nP(t,e,r,i){let n=e[0]-r[0],o=e[1]-r[1],s=Math.sin(i),a=Math.cos(i);return t[0]=n*a-o*s+r[0],t[1]=n*s+o*a+r[1],t}function oP(t,e){let r=t[0],i=t[1],n=e[0],o=e[1],s=Math.sqrt((r*r+i*i)*(n*n+o*o)),a=s&&(r*n+i*o)/s;return Math.acos(Math.min(Math.max(a,-1),1))}function sP(t){return t[0]=0,t[1]=0,t}function aP(t){return`vec2(${t[0]}, ${t[1]})`}function cP(t,e){return t[0]===e[0]&&t[1]===e[1]}function lP(t,e){let r=t[0],i=t[1],n=e[0],o=e[1];return Math.abs(r-n)<=1e-6*Math.max(1,Math.abs(r),Math.abs(n))&&Math.abs(i-o)<=1e-6*Math.max(1,Math.abs(i),Math.abs(o))}var fP=fb,uP=ob,dP=sb,hP=ab,pP=cb,gP=lb,mP=ub,_P=function(){let t=nb();return function(e,r,i,n,o,s){let a,c;for(r||(r=2),i||(i=0),n?c=Math.min(n*r+i,e.length):c=e.length,a=i;a<c;a+=r)t[0]=e[a],t[1]=e[a+1],o(t,t,s),e[a]=t[0],e[a+1]=t[1];return e}}();function db(t,e,r){let i=e[0],n=e[1],o=r[3]*i+r[7]*n||1;return t[0]=(r[0]*i+r[4]*n)/o,t[1]=(r[1]*i+r[5]*n)/o,t}function Pa(t,e,r){let i=e[0],n=e[1],o=e[2],s=r[3]*i+r[7]*n+r[11]*o||1;return t[0]=(r[0]*i+r[4]*n+r[8]*o)/s,t[1]=(r[1]*i+r[5]*n+r[9]*o)/s,t[2]=(r[2]*i+r[6]*n+r[10]*o)/s,t}function hb(t,e,r){let i=e[0],n=e[1];return t[0]=r[0]*i+r[2]*n,t[1]=r[1]*i+r[3]*n,t[2]=e[2],t}function pb(t,e,r){let i=e[0],n=e[1];return t[0]=r[0]*i+r[2]*n,t[1]=r[1]*i+r[3]*n,t[2]=e[2],t[3]=e[3],t}function wa(t,e,r){let i=e[0],n=e[1],o=e[2];return t[0]=r[0]*i+r[3]*n+r[6]*o,t[1]=r[1]*i+r[4]*n+r[7]*o,t[2]=r[2]*i+r[5]*n+r[8]*o,t[3]=e[3],t}var Ie={};he(Ie,{add:()=>xP,angle:()=>ed,bezier:()=>LP,ceil:()=>TP,clone:()=>bP,copy:()=>AP,create:()=>Ia,cross:()=>Dr,dist:()=>jP,distance:()=>Ab,div:()=>zP,divide:()=>bb,dot:()=>Un,equals:()=>kP,exactEquals:()=>UP,floor:()=>SP,forEach:()=>XP,fromValues:()=>Ba,hermite:()=>OP,inverse:()=>wP,len:()=>td,length:()=>gb,lerp:()=>IP,max:()=>CP,min:()=>EP,mul:()=>HP,multiply:()=>_b,negate:()=>PP,normalize:()=>Ju,random:()=>FP,rotateX:()=>Qu,rotateY:()=>Zu,rotateZ:()=>qu,round:()=>vP,scale:()=>RP,scaleAndAdd:()=>MP,set:()=>yP,slerp:()=>BP,sqrDist:()=>WP,sqrLen:()=>GP,squaredDistance:()=>yb,squaredLength:()=>xb,str:()=>DP,sub:()=>VP,subtract:()=>mb,transformMat3:()=>kn,transformMat4:()=>Ur,transformQuat:()=>Vn,zero:()=>NP});function Ia(){let t=new X(3);return X!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function bP(t){let e=new X(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function gb(t){let e=t[0],r=t[1],i=t[2];return Math.sqrt(e*e+r*r+i*i)}function Ba(t,e,r){let i=new X(3);return i[0]=t,i[1]=e,i[2]=r,i}function AP(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function yP(t,e,r,i){return t[0]=e,t[1]=r,t[2]=i,t}function xP(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function mb(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function _b(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t}function bb(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t}function TP(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}function SP(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}function EP(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t}function CP(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t}function vP(t,e){return t[0]=Ye(e[0]),t[1]=Ye(e[1]),t[2]=Ye(e[2]),t}function RP(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function MP(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t}function Ab(t,e){let r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(r*r+i*i+n*n)}function yb(t,e){let r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2];return r*r+i*i+n*n}function xb(t){let e=t[0],r=t[1],i=t[2];return e*e+r*r+i*i}function PP(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function wP(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function Ju(t,e){let r=e[0],i=e[1],n=e[2],o=r*r+i*i+n*n;return o>0&&(o=1/Math.sqrt(o)),t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}function Un(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Dr(t,e,r){let i=e[0],n=e[1],o=e[2],s=r[0],a=r[1],c=r[2];return t[0]=n*c-o*a,t[1]=o*s-i*c,t[2]=i*a-n*s,t}function IP(t,e,r,i){let n=e[0],o=e[1],s=e[2];return t[0]=n+i*(r[0]-n),t[1]=o+i*(r[1]-o),t[2]=s+i*(r[2]-s),t}function BP(t,e,r,i){let n=Math.acos(Math.min(Math.max(Un(e,r),-1),1)),o=Math.sin(n),s=Math.sin((1-i)*n)/o,a=Math.sin(i*n)/o;return t[0]=s*e[0]+a*r[0],t[1]=s*e[1]+a*r[1],t[2]=s*e[2]+a*r[2],t}function OP(t,e,r,i,n,o){let s=o*o,a=s*(2*o-3)+1,c=s*(o-2)+o,l=s*(o-1),f=s*(3-2*o);return t[0]=e[0]*a+r[0]*c+i[0]*l+n[0]*f,t[1]=e[1]*a+r[1]*c+i[1]*l+n[1]*f,t[2]=e[2]*a+r[2]*c+i[2]*l+n[2]*f,t}function LP(t,e,r,i,n,o){let s=1-o,a=s*s,c=o*o,l=a*s,f=3*o*a,u=3*c*s,d=c*o;return t[0]=e[0]*l+r[0]*f+i[0]*u+n[0]*d,t[1]=e[1]*l+r[1]*f+i[1]*u+n[1]*d,t[2]=e[2]*l+r[2]*f+i[2]*u+n[2]*d,t}function FP(t,e){e=e===void 0?1:e;let r=Tt()*2*Math.PI,i=Tt()*2-1,n=Math.sqrt(1-i*i)*e;return t[0]=Math.cos(r)*n,t[1]=Math.sin(r)*n,t[2]=i*e,t}function Ur(t,e,r){let i=e[0],n=e[1],o=e[2],s=r[3]*i+r[7]*n+r[11]*o+r[15];return s=s||1,t[0]=(r[0]*i+r[4]*n+r[8]*o+r[12])/s,t[1]=(r[1]*i+r[5]*n+r[9]*o+r[13])/s,t[2]=(r[2]*i+r[6]*n+r[10]*o+r[14])/s,t}function kn(t,e,r){let i=e[0],n=e[1],o=e[2];return t[0]=i*r[0]+n*r[3]+o*r[6],t[1]=i*r[1]+n*r[4]+o*r[7],t[2]=i*r[2]+n*r[5]+o*r[8],t}function Vn(t,e,r){let i=r[0],n=r[1],o=r[2],s=r[3],a=e[0],c=e[1],l=e[2],f=n*l-o*c,u=o*a-i*l,d=i*c-n*a,h=n*d-o*u,p=o*f-i*d,g=i*u-n*f,m=s*2;return f*=m,u*=m,d*=m,h*=2,p*=2,g*=2,t[0]=a+f+h,t[1]=c+u+p,t[2]=l+d+g,t}function Qu(t,e,r,i){let n=[],o=[];return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],o[0]=n[0],o[1]=n[1]*Math.cos(i)-n[2]*Math.sin(i),o[2]=n[1]*Math.sin(i)+n[2]*Math.cos(i),t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t}function Zu(t,e,r,i){let n=[],o=[];return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],o[0]=n[2]*Math.sin(i)+n[0]*Math.cos(i),o[1]=n[1],o[2]=n[2]*Math.cos(i)-n[0]*Math.sin(i),t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t}function qu(t,e,r,i){let n=[],o=[];return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],o[0]=n[0]*Math.cos(i)-n[1]*Math.sin(i),o[1]=n[0]*Math.sin(i)+n[1]*Math.cos(i),o[2]=n[2],t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t}function ed(t,e){let r=t[0],i=t[1],n=t[2],o=e[0],s=e[1],a=e[2],c=Math.sqrt((r*r+i*i+n*n)*(o*o+s*s+a*a)),l=c&&Un(t,e)/c;return Math.acos(Math.min(Math.max(l,-1),1))}function NP(t){return t[0]=0,t[1]=0,t[2]=0,t}function DP(t){return`vec3(${t[0]}, ${t[1]}, ${t[2]})`}function UP(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}function kP(t,e){let r=t[0],i=t[1],n=t[2],o=e[0],s=e[1],a=e[2];return Math.abs(r-o)<=1e-6*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(i-s)<=1e-6*Math.max(1,Math.abs(i),Math.abs(s))&&Math.abs(n-a)<=1e-6*Math.max(1,Math.abs(n),Math.abs(a))}var VP=mb,HP=_b,zP=bb,jP=Ab,WP=yb,td=gb,GP=xb,XP=function(){let t=Ia();return function(e,r,i,n,o,s){let a,c;for(r||(r=3),i||(i=0),n?c=Math.min(n*r+i,e.length):c=e.length,a=i;a<c;a+=r)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],o(t,t,s),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2];return e}}();var rd=[0,0,0],Oa,Y=class t extends xi{static get ZERO(){return Oa||(Oa=new t(0,0,0),Object.freeze(Oa)),Oa}constructor(e=0,r=0,i=0){super(-0,-0,-0),arguments.length===1&&it(e)?this.copy(e):(ne.debug&&(H(e),H(r),H(i)),this[0]=e,this[1]=r,this[2]=i)}set(e,r,i){return this[0]=e,this[1]=r,this[2]=i,this.check()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this.check()}fromObject(e){return ne.debug&&(H(e.x),H(e.y),H(e.z)),this[0]=e.x,this[1]=e.y,this[2]=e.z,this.check()}toObject(e){return e.x=this[0],e.y=this[1],e.z=this[2],e}get ELEMENTS(){return 3}get z(){return this[2]}set z(e){this[2]=H(e)}angle(e){return ed(this,e)}cross(e){return Dr(this,this,e),this.check()}rotateX({radians:e,origin:r=rd}){return Qu(this,this,r,e),this.check()}rotateY({radians:e,origin:r=rd}){return Zu(this,this,r,e),this.check()}rotateZ({radians:e,origin:r=rd}){return qu(this,this,r,e),this.check()}transform(e){return this.transformAsPoint(e)}transformAsPoint(e){return Ur(this,this,e),this.check()}transformAsVector(e){return Pa(this,this,e),this.check()}transformByMatrix3(e){return kn(this,this,e),this.check()}transformByMatrix2(e){return hb(this,this,e),this.check()}transformByQuaternion(e){return Vn(this,this,e),this.check()}};var La,Fa=class t extends xi{static get ZERO(){return La||(La=new t(0,0,0,0),Object.freeze(La)),La}constructor(e=0,r=0,i=0,n=0){super(-0,-0,-0,-0),it(e)&&arguments.length===1?this.copy(e):(ne.debug&&(H(e),H(r),H(i),H(n)),this[0]=e,this[1]=r,this[2]=i,this[3]=n)}set(e,r,i,n){return this[0]=e,this[1]=r,this[2]=i,this[3]=n,this.check()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this.check()}fromObject(e){return ne.debug&&(H(e.x),H(e.y),H(e.z),H(e.w)),this[0]=e.x,this[1]=e.y,this[2]=e.z,this[3]=e.w,this}toObject(e){return e.x=this[0],e.y=this[1],e.z=this[2],e.w=this[3],e}get ELEMENTS(){return 4}get z(){return this[2]}set z(e){this[2]=H(e)}get w(){return this[3]}set w(e){this[3]=H(e)}transform(e){return Ur(this,this,e),this.check()}transformByMatrix3(e){return wa(this,this,e),this.check()}transformByMatrix2(e){return pb(this,this,e),this.check()}transformByQuaternion(e){return Vn(this,this,e),this.check()}applyMatrix4(e){return e.transform(this,this),this}};var Si=class extends nr{toString(){let e="[";if(ne.printRowMajor){e+="row-major:";for(let r=0;r<this.RANK;++r)for(let i=0;i<this.RANK;++i)e+=` ${this[i*this.RANK+r]}`}else{e+="column-major:";for(let r=0;r<this.ELEMENTS;++r)e+=` ${this[r]}`}return e+="]",e}getElementIndex(e,r){return r*this.RANK+e}getElement(e,r){return this[r*this.RANK+e]}setElement(e,r,i){return this[r*this.RANK+e]=H(i),this}getColumn(e,r=new Array(this.RANK).fill(-0)){let i=e*this.RANK;for(let n=0;n<this.RANK;++n)r[n]=this[i+n];return r}setColumn(e,r){let i=e*this.RANK;for(let n=0;n<this.RANK;++n)this[i+n]=r[n];return this}};function Tb(){let t=new X(9);return X!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function Sb(t,e){if(t===e){let r=e[1],i=e[2],n=e[5];t[1]=e[3],t[2]=e[6],t[3]=r,t[5]=e[7],t[6]=i,t[7]=n}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t}function Eb(t,e){let r=e[0],i=e[1],n=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=f*s-a*l,d=-f*o+a*c,h=l*o-s*c,p=r*u+i*d+n*h;return p?(p=1/p,t[0]=u*p,t[1]=(-f*i+n*l)*p,t[2]=(a*i-n*s)*p,t[3]=d*p,t[4]=(f*r-n*c)*p,t[5]=(-a*r+n*o)*p,t[6]=h*p,t[7]=(-l*r+i*c)*p,t[8]=(s*r-i*o)*p,t):null}function Cb(t){let e=t[0],r=t[1],i=t[2],n=t[3],o=t[4],s=t[5],a=t[6],c=t[7],l=t[8];return e*(l*o-s*c)+r*(-l*n+s*a)+i*(c*n-o*a)}function id(t,e,r){let i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],c=e[5],l=e[6],f=e[7],u=e[8],d=r[0],h=r[1],p=r[2],g=r[3],m=r[4],b=r[5],y=r[6],_=r[7],A=r[8];return t[0]=d*i+h*s+p*l,t[1]=d*n+h*a+p*f,t[2]=d*o+h*c+p*u,t[3]=g*i+m*s+b*l,t[4]=g*n+m*a+b*f,t[5]=g*o+m*c+b*u,t[6]=y*i+_*s+A*l,t[7]=y*n+_*a+A*f,t[8]=y*o+_*c+A*u,t}function vb(t,e,r){let i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],c=e[5],l=e[6],f=e[7],u=e[8],d=r[0],h=r[1];return t[0]=i,t[1]=n,t[2]=o,t[3]=s,t[4]=a,t[5]=c,t[6]=d*i+h*s+l,t[7]=d*n+h*a+f,t[8]=d*o+h*c+u,t}function Rb(t,e,r){let i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],c=e[5],l=e[6],f=e[7],u=e[8],d=Math.sin(r),h=Math.cos(r);return t[0]=h*i+d*s,t[1]=h*n+d*a,t[2]=h*o+d*c,t[3]=h*s-d*i,t[4]=h*a-d*n,t[5]=h*c-d*o,t[6]=l,t[7]=f,t[8]=u,t}function nd(t,e,r){let i=r[0],n=r[1];return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=n*e[3],t[4]=n*e[4],t[5]=n*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Mb(t,e){let r=e[0],i=e[1],n=e[2],o=e[3],s=r+r,a=i+i,c=n+n,l=r*s,f=i*s,u=i*a,d=n*s,h=n*a,p=n*c,g=o*s,m=o*a,b=o*c;return t[0]=1-u-p,t[3]=f-b,t[6]=d+m,t[1]=f+b,t[4]=1-l-p,t[7]=h-g,t[2]=d-m,t[5]=h+g,t[8]=1-l-u,t}var od;(function(t){t[t.COL0ROW0=0]="COL0ROW0",t[t.COL0ROW1=1]="COL0ROW1",t[t.COL0ROW2=2]="COL0ROW2",t[t.COL1ROW0=3]="COL1ROW0",t[t.COL1ROW1=4]="COL1ROW1",t[t.COL1ROW2=5]="COL1ROW2",t[t.COL2ROW0=6]="COL2ROW0",t[t.COL2ROW1=7]="COL2ROW1",t[t.COL2ROW2=8]="COL2ROW2"})(od||(od={}));var $P=Object.freeze([1,0,0,0,1,0,0,0,1]),Ae=class extends Si{static get IDENTITY(){return YP()}static get ZERO(){return KP()}get ELEMENTS(){return 9}get RANK(){return 3}get INDICES(){return od}constructor(e,...r){super(-0,-0,-0,-0,-0,-0,-0,-0,-0),arguments.length===1&&Array.isArray(e)?this.copy(e):r.length>0?this.copy([e,...r]):this.identity()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this[4]=e[4],this[5]=e[5],this[6]=e[6],this[7]=e[7],this[8]=e[8],this.check()}identity(){return this.copy($P)}fromObject(e){return this.check()}fromQuaternion(e){return Mb(this,e),this.check()}set(e,r,i,n,o,s,a,c,l){return this[0]=e,this[1]=r,this[2]=i,this[3]=n,this[4]=o,this[5]=s,this[6]=a,this[7]=c,this[8]=l,this.check()}setRowMajor(e,r,i,n,o,s,a,c,l){return this[0]=e,this[1]=n,this[2]=a,this[3]=r,this[4]=o,this[5]=c,this[6]=i,this[7]=s,this[8]=l,this.check()}determinant(){return Cb(this)}transpose(){return Sb(this,this),this.check()}invert(){return Eb(this,this),this.check()}multiplyLeft(e){return id(this,e,this),this.check()}multiplyRight(e){return id(this,this,e),this.check()}rotate(e){return Rb(this,this,e),this.check()}scale(e){return Array.isArray(e)?nd(this,this,e):nd(this,this,[e,e]),this.check()}translate(e){return vb(this,this,e),this.check()}transform(e,r){let i;switch(e.length){case 2:i=Ku(r||[-0,-0],e,this);break;case 3:i=kn(r||[-0,-0,-0],e,this);break;case 4:i=wa(r||[-0,-0,-0,-0],e,this);break;default:throw new Error("Illegal vector")}return or(i,e.length),i}transformVector(e,r){return this.transform(e,r)}transformVector2(e,r){return this.transform(e,r)}transformVector3(e,r){return this.transform(e,r)}},Na,Da=null;function KP(){return Na||(Na=new Ae([0,0,0,0,0,0,0,0,0]),Object.freeze(Na)),Na}function YP(){return Da||(Da=new Ae,Object.freeze(Da)),Da}var le={};he(le,{add:()=>y1,adjoint:()=>t1,clone:()=>QP,copy:()=>ZP,create:()=>JP,decompose:()=>u1,determinant:()=>cd,equals:()=>E1,exactEquals:()=>S1,frob:()=>A1,fromQuat:()=>gd,fromQuat2:()=>c1,fromRotation:()=>n1,fromRotationTranslation:()=>Ib,fromRotationTranslationScale:()=>d1,fromRotationTranslationScaleOrigin:()=>h1,fromScaling:()=>i1,fromTranslation:()=>r1,fromValues:()=>qP,fromXRotation:()=>o1,fromYRotation:()=>s1,fromZRotation:()=>a1,frustum:()=>md,getRotation:()=>f1,getScaling:()=>Bb,getTranslation:()=>l1,identity:()=>wb,invert:()=>ad,lookAt:()=>Ad,mul:()=>C1,multiply:()=>Hn,multiplyScalar:()=>x1,multiplyScalarAndAdd:()=>T1,ortho:()=>bd,orthoNO:()=>Lb,orthoZO:()=>m1,perspective:()=>_d,perspectiveFromFieldOfView:()=>g1,perspectiveNO:()=>Ob,perspectiveZO:()=>p1,rotate:()=>ud,rotateX:()=>dd,rotateY:()=>hd,rotateZ:()=>pd,scale:()=>fd,set:()=>e1,str:()=>b1,sub:()=>v1,subtract:()=>Fb,targetTo:()=>_1,translate:()=>ld,transpose:()=>sd});function JP(){let t=new X(16);return X!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function QP(t){let e=new X(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function ZP(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function qP(t,e,r,i,n,o,s,a,c,l,f,u,d,h,p,g){let m=new X(16);return m[0]=t,m[1]=e,m[2]=r,m[3]=i,m[4]=n,m[5]=o,m[6]=s,m[7]=a,m[8]=c,m[9]=l,m[10]=f,m[11]=u,m[12]=d,m[13]=h,m[14]=p,m[15]=g,m}function e1(t,e,r,i,n,o,s,a,c,l,f,u,d,h,p,g,m){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t[4]=o,t[5]=s,t[6]=a,t[7]=c,t[8]=l,t[9]=f,t[10]=u,t[11]=d,t[12]=h,t[13]=p,t[14]=g,t[15]=m,t}function wb(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function sd(t,e){if(t===e){let r=e[1],i=e[2],n=e[3],o=e[6],s=e[7],a=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=r,t[6]=e[9],t[7]=e[13],t[8]=i,t[9]=o,t[11]=e[14],t[12]=n,t[13]=s,t[14]=a}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}function ad(t,e){let r=e[0],i=e[1],n=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=e[9],d=e[10],h=e[11],p=e[12],g=e[13],m=e[14],b=e[15],y=r*a-i*s,_=r*c-n*s,A=r*l-o*s,T=i*c-n*a,S=i*l-o*a,v=n*l-o*c,M=f*g-u*p,C=f*m-d*p,R=f*b-h*p,I=u*m-d*g,w=u*b-h*g,U=d*b-h*m,D=y*U-_*w+A*I+T*R-S*C+v*M;return D?(D=1/D,t[0]=(a*U-c*w+l*I)*D,t[1]=(n*w-i*U-o*I)*D,t[2]=(g*v-m*S+b*T)*D,t[3]=(d*S-u*v-h*T)*D,t[4]=(c*R-s*U-l*C)*D,t[5]=(r*U-n*R+o*C)*D,t[6]=(m*A-p*v-b*_)*D,t[7]=(f*v-d*A+h*_)*D,t[8]=(s*w-a*R+l*M)*D,t[9]=(i*R-r*w-o*M)*D,t[10]=(p*S-g*A+b*y)*D,t[11]=(u*A-f*S-h*y)*D,t[12]=(a*C-s*I-c*M)*D,t[13]=(r*I-i*C+n*M)*D,t[14]=(g*_-p*T-m*y)*D,t[15]=(f*T-u*_+d*y)*D,t):null}function t1(t,e){let r=e[0],i=e[1],n=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=e[9],d=e[10],h=e[11],p=e[12],g=e[13],m=e[14],b=e[15],y=r*a-i*s,_=r*c-n*s,A=r*l-o*s,T=i*c-n*a,S=i*l-o*a,v=n*l-o*c,M=f*g-u*p,C=f*m-d*p,R=f*b-h*p,I=u*m-d*g,w=u*b-h*g,U=d*b-h*m;return t[0]=a*U-c*w+l*I,t[1]=n*w-i*U-o*I,t[2]=g*v-m*S+b*T,t[3]=d*S-u*v-h*T,t[4]=c*R-s*U-l*C,t[5]=r*U-n*R+o*C,t[6]=m*A-p*v-b*_,t[7]=f*v-d*A+h*_,t[8]=s*w-a*R+l*M,t[9]=i*R-r*w-o*M,t[10]=p*S-g*A+b*y,t[11]=u*A-f*S-h*y,t[12]=a*C-s*I-c*M,t[13]=r*I-i*C+n*M,t[14]=g*_-p*T-m*y,t[15]=f*T-u*_+d*y,t}function cd(t){let e=t[0],r=t[1],i=t[2],n=t[3],o=t[4],s=t[5],a=t[6],c=t[7],l=t[8],f=t[9],u=t[10],d=t[11],h=t[12],p=t[13],g=t[14],m=t[15],b=e*s-r*o,y=e*a-i*o,_=r*a-i*s,A=l*p-f*h,T=l*g-u*h,S=f*g-u*p,v=e*S-r*T+i*A,M=o*S-s*T+a*A,C=l*_-f*y+u*b,R=h*_-p*y+g*b;return c*v-n*M+m*C-d*R}function Hn(t,e,r){let i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],c=e[5],l=e[6],f=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],m=e[13],b=e[14],y=e[15],_=r[0],A=r[1],T=r[2],S=r[3];return t[0]=_*i+A*a+T*u+S*g,t[1]=_*n+A*c+T*d+S*m,t[2]=_*o+A*l+T*h+S*b,t[3]=_*s+A*f+T*p+S*y,_=r[4],A=r[5],T=r[6],S=r[7],t[4]=_*i+A*a+T*u+S*g,t[5]=_*n+A*c+T*d+S*m,t[6]=_*o+A*l+T*h+S*b,t[7]=_*s+A*f+T*p+S*y,_=r[8],A=r[9],T=r[10],S=r[11],t[8]=_*i+A*a+T*u+S*g,t[9]=_*n+A*c+T*d+S*m,t[10]=_*o+A*l+T*h+S*b,t[11]=_*s+A*f+T*p+S*y,_=r[12],A=r[13],T=r[14],S=r[15],t[12]=_*i+A*a+T*u+S*g,t[13]=_*n+A*c+T*d+S*m,t[14]=_*o+A*l+T*h+S*b,t[15]=_*s+A*f+T*p+S*y,t}function ld(t,e,r){let i=r[0],n=r[1],o=r[2],s,a,c,l,f,u,d,h,p,g,m,b;return e===t?(t[12]=e[0]*i+e[4]*n+e[8]*o+e[12],t[13]=e[1]*i+e[5]*n+e[9]*o+e[13],t[14]=e[2]*i+e[6]*n+e[10]*o+e[14],t[15]=e[3]*i+e[7]*n+e[11]*o+e[15]):(s=e[0],a=e[1],c=e[2],l=e[3],f=e[4],u=e[5],d=e[6],h=e[7],p=e[8],g=e[9],m=e[10],b=e[11],t[0]=s,t[1]=a,t[2]=c,t[3]=l,t[4]=f,t[5]=u,t[6]=d,t[7]=h,t[8]=p,t[9]=g,t[10]=m,t[11]=b,t[12]=s*i+f*n+p*o+e[12],t[13]=a*i+u*n+g*o+e[13],t[14]=c*i+d*n+m*o+e[14],t[15]=l*i+h*n+b*o+e[15]),t}function fd(t,e,r){let i=r[0],n=r[1],o=r[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*o,t[9]=e[9]*o,t[10]=e[10]*o,t[11]=e[11]*o,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function ud(t,e,r,i){let n=i[0],o=i[1],s=i[2],a=Math.sqrt(n*n+o*o+s*s),c,l,f,u,d,h,p,g,m,b,y,_,A,T,S,v,M,C,R,I,w,U,D,ee;return a<1e-6?null:(a=1/a,n*=a,o*=a,s*=a,l=Math.sin(r),c=Math.cos(r),f=1-c,u=e[0],d=e[1],h=e[2],p=e[3],g=e[4],m=e[5],b=e[6],y=e[7],_=e[8],A=e[9],T=e[10],S=e[11],v=n*n*f+c,M=o*n*f+s*l,C=s*n*f-o*l,R=n*o*f-s*l,I=o*o*f+c,w=s*o*f+n*l,U=n*s*f+o*l,D=o*s*f-n*l,ee=s*s*f+c,t[0]=u*v+g*M+_*C,t[1]=d*v+m*M+A*C,t[2]=h*v+b*M+T*C,t[3]=p*v+y*M+S*C,t[4]=u*R+g*I+_*w,t[5]=d*R+m*I+A*w,t[6]=h*R+b*I+T*w,t[7]=p*R+y*I+S*w,t[8]=u*U+g*D+_*ee,t[9]=d*U+m*D+A*ee,t[10]=h*U+b*D+T*ee,t[11]=p*U+y*D+S*ee,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function dd(t,e,r){let i=Math.sin(r),n=Math.cos(r),o=e[4],s=e[5],a=e[6],c=e[7],l=e[8],f=e[9],u=e[10],d=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=o*n+l*i,t[5]=s*n+f*i,t[6]=a*n+u*i,t[7]=c*n+d*i,t[8]=l*n-o*i,t[9]=f*n-s*i,t[10]=u*n-a*i,t[11]=d*n-c*i,t}function hd(t,e,r){let i=Math.sin(r),n=Math.cos(r),o=e[0],s=e[1],a=e[2],c=e[3],l=e[8],f=e[9],u=e[10],d=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=o*n-l*i,t[1]=s*n-f*i,t[2]=a*n-u*i,t[3]=c*n-d*i,t[8]=o*i+l*n,t[9]=s*i+f*n,t[10]=a*i+u*n,t[11]=c*i+d*n,t}function pd(t,e,r){let i=Math.sin(r),n=Math.cos(r),o=e[0],s=e[1],a=e[2],c=e[3],l=e[4],f=e[5],u=e[6],d=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=o*n+l*i,t[1]=s*n+f*i,t[2]=a*n+u*i,t[3]=c*n+d*i,t[4]=l*n-o*i,t[5]=f*n-s*i,t[6]=u*n-a*i,t[7]=d*n-c*i,t}function r1(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function i1(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function n1(t,e,r){let i=r[0],n=r[1],o=r[2],s=Math.sqrt(i*i+n*n+o*o),a,c,l;return s<1e-6?null:(s=1/s,i*=s,n*=s,o*=s,c=Math.sin(e),a=Math.cos(e),l=1-a,t[0]=i*i*l+a,t[1]=n*i*l+o*c,t[2]=o*i*l-n*c,t[3]=0,t[4]=i*n*l-o*c,t[5]=n*n*l+a,t[6]=o*n*l+i*c,t[7]=0,t[8]=i*o*l+n*c,t[9]=n*o*l-i*c,t[10]=o*o*l+a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function o1(t,e){let r=Math.sin(e),i=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function s1(t,e){let r=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function a1(t,e){let r=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Ib(t,e,r){let i=e[0],n=e[1],o=e[2],s=e[3],a=i+i,c=n+n,l=o+o,f=i*a,u=i*c,d=i*l,h=n*c,p=n*l,g=o*l,m=s*a,b=s*c,y=s*l;return t[0]=1-(h+g),t[1]=u+y,t[2]=d-b,t[3]=0,t[4]=u-y,t[5]=1-(f+g),t[6]=p+m,t[7]=0,t[8]=d+b,t[9]=p-m,t[10]=1-(f+h),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function c1(t,e){let r=new X(3),i=-e[0],n=-e[1],o=-e[2],s=e[3],a=e[4],c=e[5],l=e[6],f=e[7],u=i*i+n*n+o*o+s*s;return u>0?(r[0]=(a*s+f*i+c*o-l*n)*2/u,r[1]=(c*s+f*n+l*i-a*o)*2/u,r[2]=(l*s+f*o+a*n-c*i)*2/u):(r[0]=(a*s+f*i+c*o-l*n)*2,r[1]=(c*s+f*n+l*i-a*o)*2,r[2]=(l*s+f*o+a*n-c*i)*2),Ib(t,e,r),t}function l1(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function Bb(t,e){let r=e[0],i=e[1],n=e[2],o=e[4],s=e[5],a=e[6],c=e[8],l=e[9],f=e[10];return t[0]=Math.sqrt(r*r+i*i+n*n),t[1]=Math.sqrt(o*o+s*s+a*a),t[2]=Math.sqrt(c*c+l*l+f*f),t}function f1(t,e){let r=new X(3);Bb(r,e);let i=1/r[0],n=1/r[1],o=1/r[2],s=e[0]*i,a=e[1]*n,c=e[2]*o,l=e[4]*i,f=e[5]*n,u=e[6]*o,d=e[8]*i,h=e[9]*n,p=e[10]*o,g=s+f+p,m=0;return g>0?(m=Math.sqrt(g+1)*2,t[3]=.25*m,t[0]=(u-h)/m,t[1]=(d-c)/m,t[2]=(a-l)/m):s>f&&s>p?(m=Math.sqrt(1+s-f-p)*2,t[3]=(u-h)/m,t[0]=.25*m,t[1]=(a+l)/m,t[2]=(d+c)/m):f>p?(m=Math.sqrt(1+f-s-p)*2,t[3]=(d-c)/m,t[0]=(a+l)/m,t[1]=.25*m,t[2]=(u+h)/m):(m=Math.sqrt(1+p-s-f)*2,t[3]=(a-l)/m,t[0]=(d+c)/m,t[1]=(u+h)/m,t[2]=.25*m),t}function u1(t,e,r,i){e[0]=i[12],e[1]=i[13],e[2]=i[14];let n=i[0],o=i[1],s=i[2],a=i[4],c=i[5],l=i[6],f=i[8],u=i[9],d=i[10];r[0]=Math.sqrt(n*n+o*o+s*s),r[1]=Math.sqrt(a*a+c*c+l*l),r[2]=Math.sqrt(f*f+u*u+d*d);let h=1/r[0],p=1/r[1],g=1/r[2],m=n*h,b=o*p,y=s*g,_=a*h,A=c*p,T=l*g,S=f*h,v=u*p,M=d*g,C=m+A+M,R=0;return C>0?(R=Math.sqrt(C+1)*2,t[3]=.25*R,t[0]=(T-v)/R,t[1]=(S-y)/R,t[2]=(b-_)/R):m>A&&m>M?(R=Math.sqrt(1+m-A-M)*2,t[3]=(T-v)/R,t[0]=.25*R,t[1]=(b+_)/R,t[2]=(S+y)/R):A>M?(R=Math.sqrt(1+A-m-M)*2,t[3]=(S-y)/R,t[0]=(b+_)/R,t[1]=.25*R,t[2]=(T+v)/R):(R=Math.sqrt(1+M-m-A)*2,t[3]=(b-_)/R,t[0]=(S+y)/R,t[1]=(T+v)/R,t[2]=.25*R),t}function d1(t,e,r,i){let n=e[0],o=e[1],s=e[2],a=e[3],c=n+n,l=o+o,f=s+s,u=n*c,d=n*l,h=n*f,p=o*l,g=o*f,m=s*f,b=a*c,y=a*l,_=a*f,A=i[0],T=i[1],S=i[2];return t[0]=(1-(p+m))*A,t[1]=(d+_)*A,t[2]=(h-y)*A,t[3]=0,t[4]=(d-_)*T,t[5]=(1-(u+m))*T,t[6]=(g+b)*T,t[7]=0,t[8]=(h+y)*S,t[9]=(g-b)*S,t[10]=(1-(u+p))*S,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function h1(t,e,r,i,n){let o=e[0],s=e[1],a=e[2],c=e[3],l=o+o,f=s+s,u=a+a,d=o*l,h=o*f,p=o*u,g=s*f,m=s*u,b=a*u,y=c*l,_=c*f,A=c*u,T=i[0],S=i[1],v=i[2],M=n[0],C=n[1],R=n[2],I=(1-(g+b))*T,w=(h+A)*T,U=(p-_)*T,D=(h-A)*S,ee=(1-(d+b))*S,Z=(m+y)*S,K=(p+_)*v,oa=(m-y)*v,sa=(1-(d+g))*v;return t[0]=I,t[1]=w,t[2]=U,t[3]=0,t[4]=D,t[5]=ee,t[6]=Z,t[7]=0,t[8]=K,t[9]=oa,t[10]=sa,t[11]=0,t[12]=r[0]+M-(I*M+D*C+K*R),t[13]=r[1]+C-(w*M+ee*C+oa*R),t[14]=r[2]+R-(U*M+Z*C+sa*R),t[15]=1,t}function gd(t,e){let r=e[0],i=e[1],n=e[2],o=e[3],s=r+r,a=i+i,c=n+n,l=r*s,f=i*s,u=i*a,d=n*s,h=n*a,p=n*c,g=o*s,m=o*a,b=o*c;return t[0]=1-u-p,t[1]=f+b,t[2]=d-m,t[3]=0,t[4]=f-b,t[5]=1-l-p,t[6]=h+g,t[7]=0,t[8]=d+m,t[9]=h-g,t[10]=1-l-u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function md(t,e,r,i,n,o,s){let a=1/(r-e),c=1/(n-i),l=1/(o-s);return t[0]=o*2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o*2*c,t[6]=0,t[7]=0,t[8]=(r+e)*a,t[9]=(n+i)*c,t[10]=(s+o)*l,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*o*2*l,t[15]=0,t}function Ob(t,e,r,i,n){let o=1/Math.tan(e/2);if(t[0]=o/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,n!=null&&n!==1/0){let s=1/(i-n);t[10]=(n+i)*s,t[14]=2*n*i*s}else t[10]=-1,t[14]=-2*i;return t}var _d=Ob;function p1(t,e,r,i,n){let o=1/Math.tan(e/2);if(t[0]=o/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,n!=null&&n!==1/0){let s=1/(i-n);t[10]=n*s,t[14]=n*i*s}else t[10]=-1,t[14]=-i;return t}function g1(t,e,r,i){let n=Math.tan(e.upDegrees*Math.PI/180),o=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),a=Math.tan(e.rightDegrees*Math.PI/180),c=2/(s+a),l=2/(n+o);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=l,t[6]=0,t[7]=0,t[8]=-((s-a)*c*.5),t[9]=(n-o)*l*.5,t[10]=i/(r-i),t[11]=-1,t[12]=0,t[13]=0,t[14]=i*r/(r-i),t[15]=0,t}function Lb(t,e,r,i,n,o,s){let a=1/(e-r),c=1/(i-n),l=1/(o-s);return t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*l,t[11]=0,t[12]=(e+r)*a,t[13]=(n+i)*c,t[14]=(s+o)*l,t[15]=1,t}var bd=Lb;function m1(t,e,r,i,n,o,s){let a=1/(e-r),c=1/(i-n),l=1/(o-s);return t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=l,t[11]=0,t[12]=(e+r)*a,t[13]=(n+i)*c,t[14]=o*l,t[15]=1,t}function Ad(t,e,r,i){let n,o,s,a,c,l,f,u,d,h,p=e[0],g=e[1],m=e[2],b=i[0],y=i[1],_=i[2],A=r[0],T=r[1],S=r[2];return Math.abs(p-A)<1e-6&&Math.abs(g-T)<1e-6&&Math.abs(m-S)<1e-6?wb(t):(u=p-A,d=g-T,h=m-S,n=1/Math.sqrt(u*u+d*d+h*h),u*=n,d*=n,h*=n,o=y*h-_*d,s=_*u-b*h,a=b*d-y*u,n=Math.sqrt(o*o+s*s+a*a),n?(n=1/n,o*=n,s*=n,a*=n):(o=0,s=0,a=0),c=d*a-h*s,l=h*o-u*a,f=u*s-d*o,n=Math.sqrt(c*c+l*l+f*f),n?(n=1/n,c*=n,l*=n,f*=n):(c=0,l=0,f=0),t[0]=o,t[1]=c,t[2]=u,t[3]=0,t[4]=s,t[5]=l,t[6]=d,t[7]=0,t[8]=a,t[9]=f,t[10]=h,t[11]=0,t[12]=-(o*p+s*g+a*m),t[13]=-(c*p+l*g+f*m),t[14]=-(u*p+d*g+h*m),t[15]=1,t)}function _1(t,e,r,i){let n=e[0],o=e[1],s=e[2],a=i[0],c=i[1],l=i[2],f=n-r[0],u=o-r[1],d=s-r[2],h=f*f+u*u+d*d;h>0&&(h=1/Math.sqrt(h),f*=h,u*=h,d*=h);let p=c*d-l*u,g=l*f-a*d,m=a*u-c*f;return h=p*p+g*g+m*m,h>0&&(h=1/Math.sqrt(h),p*=h,g*=h,m*=h),t[0]=p,t[1]=g,t[2]=m,t[3]=0,t[4]=u*m-d*g,t[5]=d*p-f*m,t[6]=f*g-u*p,t[7]=0,t[8]=f,t[9]=u,t[10]=d,t[11]=0,t[12]=n,t[13]=o,t[14]=s,t[15]=1,t}function b1(t){return`mat4(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]}, ${t[4]}, ${t[5]}, ${t[6]}, ${t[7]}, ${t[8]}, ${t[9]}, ${t[10]}, ${t[11]}, ${t[12]}, ${t[13]}, ${t[14]}, ${t[15]})`}function A1(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]+t[3]*t[3]+t[4]*t[4]+t[5]*t[5]+t[6]*t[6]+t[7]*t[7]+t[8]*t[8]+t[9]*t[9]+t[10]*t[10]+t[11]*t[11]+t[12]*t[12]+t[13]*t[13]+t[14]*t[14]+t[15]*t[15])}function y1(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t[9]=e[9]+r[9],t[10]=e[10]+r[10],t[11]=e[11]+r[11],t[12]=e[12]+r[12],t[13]=e[13]+r[13],t[14]=e[14]+r[14],t[15]=e[15]+r[15],t}function Fb(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t[6]=e[6]-r[6],t[7]=e[7]-r[7],t[8]=e[8]-r[8],t[9]=e[9]-r[9],t[10]=e[10]-r[10],t[11]=e[11]-r[11],t[12]=e[12]-r[12],t[13]=e[13]-r[13],t[14]=e[14]-r[14],t[15]=e[15]-r[15],t}function x1(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t[9]=e[9]*r,t[10]=e[10]*r,t[11]=e[11]*r,t[12]=e[12]*r,t[13]=e[13]*r,t[14]=e[14]*r,t[15]=e[15]*r,t}function T1(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t[3]=e[3]+r[3]*i,t[4]=e[4]+r[4]*i,t[5]=e[5]+r[5]*i,t[6]=e[6]+r[6]*i,t[7]=e[7]+r[7]*i,t[8]=e[8]+r[8]*i,t[9]=e[9]+r[9]*i,t[10]=e[10]+r[10]*i,t[11]=e[11]+r[11]*i,t[12]=e[12]+r[12]*i,t[13]=e[13]+r[13]*i,t[14]=e[14]+r[14]*i,t[15]=e[15]+r[15]*i,t}function S1(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15]}function E1(t,e){let r=t[0],i=t[1],n=t[2],o=t[3],s=t[4],a=t[5],c=t[6],l=t[7],f=t[8],u=t[9],d=t[10],h=t[11],p=t[12],g=t[13],m=t[14],b=t[15],y=e[0],_=e[1],A=e[2],T=e[3],S=e[4],v=e[5],M=e[6],C=e[7],R=e[8],I=e[9],w=e[10],U=e[11],D=e[12],ee=e[13],Z=e[14],K=e[15];return Math.abs(r-y)<=1e-6*Math.max(1,Math.abs(r),Math.abs(y))&&Math.abs(i-_)<=1e-6*Math.max(1,Math.abs(i),Math.abs(_))&&Math.abs(n-A)<=1e-6*Math.max(1,Math.abs(n),Math.abs(A))&&Math.abs(o-T)<=1e-6*Math.max(1,Math.abs(o),Math.abs(T))&&Math.abs(s-S)<=1e-6*Math.max(1,Math.abs(s),Math.abs(S))&&Math.abs(a-v)<=1e-6*Math.max(1,Math.abs(a),Math.abs(v))&&Math.abs(c-M)<=1e-6*Math.max(1,Math.abs(c),Math.abs(M))&&Math.abs(l-C)<=1e-6*Math.max(1,Math.abs(l),Math.abs(C))&&Math.abs(f-R)<=1e-6*Math.max(1,Math.abs(f),Math.abs(R))&&Math.abs(u-I)<=1e-6*Math.max(1,Math.abs(u),Math.abs(I))&&Math.abs(d-w)<=1e-6*Math.max(1,Math.abs(d),Math.abs(w))&&Math.abs(h-U)<=1e-6*Math.max(1,Math.abs(h),Math.abs(U))&&Math.abs(p-D)<=1e-6*Math.max(1,Math.abs(p),Math.abs(D))&&Math.abs(g-ee)<=1e-6*Math.max(1,Math.abs(g),Math.abs(ee))&&Math.abs(m-Z)<=1e-6*Math.max(1,Math.abs(m),Math.abs(Z))&&Math.abs(b-K)<=1e-6*Math.max(1,Math.abs(b),Math.abs(K))}var C1=Hn,v1=Fb;var Be={};he(Be,{add:()=>yd,ceil:()=>R1,clone:()=>Db,copy:()=>kb,create:()=>Nb,cross:()=>F1,dist:()=>j1,distance:()=>Wb,div:()=>z1,divide:()=>jb,dot:()=>Sd,equals:()=>k1,exactEquals:()=>Xb,floor:()=>M1,forEach:()=>$1,fromValues:()=>Ub,inverse:()=>L1,len:()=>G1,length:()=>Ua,lerp:()=>Ed,max:()=>w1,min:()=>P1,mul:()=>H1,multiply:()=>zb,negate:()=>O1,normalize:()=>Td,random:()=>N1,round:()=>I1,scale:()=>xd,scaleAndAdd:()=>B1,set:()=>Vb,sqrDist:()=>W1,sqrLen:()=>X1,squaredDistance:()=>Gb,squaredLength:()=>ka,str:()=>U1,sub:()=>V1,subtract:()=>Hb,transformMat4:()=>Cd,transformQuat:()=>vd,zero:()=>D1});function Nb(){let t=new X(4);return X!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function Db(t){let e=new X(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function Ub(t,e,r,i){let n=new X(4);return n[0]=t,n[1]=e,n[2]=r,n[3]=i,n}function kb(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Vb(t,e,r,i,n){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t}function yd(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t}function Hb(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t}function zb(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t[3]=e[3]*r[3],t}function jb(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t[3]=e[3]/r[3],t}function R1(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t[3]=Math.ceil(e[3]),t}function M1(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t[3]=Math.floor(e[3]),t}function P1(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t[3]=Math.min(e[3],r[3]),t}function w1(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t[3]=Math.max(e[3],r[3]),t}function I1(t,e){return t[0]=Ye(e[0]),t[1]=Ye(e[1]),t[2]=Ye(e[2]),t[3]=Ye(e[3]),t}function xd(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t}function B1(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t[3]=e[3]+r[3]*i,t}function Wb(t,e){let r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2],o=e[3]-t[3];return Math.sqrt(r*r+i*i+n*n+o*o)}function Gb(t,e){let r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2],o=e[3]-t[3];return r*r+i*i+n*n+o*o}function Ua(t){let e=t[0],r=t[1],i=t[2],n=t[3];return Math.sqrt(e*e+r*r+i*i+n*n)}function ka(t){let e=t[0],r=t[1],i=t[2],n=t[3];return e*e+r*r+i*i+n*n}function O1(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t}function L1(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t[3]=1/e[3],t}function Td(t,e){let r=e[0],i=e[1],n=e[2],o=e[3],s=r*r+i*i+n*n+o*o;return s>0&&(s=1/Math.sqrt(s)),t[0]=r*s,t[1]=i*s,t[2]=n*s,t[3]=o*s,t}function Sd(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function F1(t,e,r,i){let n=r[0]*i[1]-r[1]*i[0],o=r[0]*i[2]-r[2]*i[0],s=r[0]*i[3]-r[3]*i[0],a=r[1]*i[2]-r[2]*i[1],c=r[1]*i[3]-r[3]*i[1],l=r[2]*i[3]-r[3]*i[2],f=e[0],u=e[1],d=e[2],h=e[3];return t[0]=u*l-d*c+h*a,t[1]=-(f*l)+d*s-h*o,t[2]=f*c-u*s+h*n,t[3]=-(f*a)+u*o-d*n,t}function Ed(t,e,r,i){let n=e[0],o=e[1],s=e[2],a=e[3];return t[0]=n+i*(r[0]-n),t[1]=o+i*(r[1]-o),t[2]=s+i*(r[2]-s),t[3]=a+i*(r[3]-a),t}function N1(t,e){e=e===void 0?1:e;let r,i,n,o,s,a;do r=Tt()*2-1,i=Tt()*2-1,s=r*r+i*i;while(s>=1);do n=Tt()*2-1,o=Tt()*2-1,a=n*n+o*o;while(a>=1);let c=Math.sqrt((1-s)/a);return t[0]=e*r,t[1]=e*i,t[2]=e*n*c,t[3]=e*o*c,t}function Cd(t,e,r){let i=e[0],n=e[1],o=e[2],s=e[3];return t[0]=r[0]*i+r[4]*n+r[8]*o+r[12]*s,t[1]=r[1]*i+r[5]*n+r[9]*o+r[13]*s,t[2]=r[2]*i+r[6]*n+r[10]*o+r[14]*s,t[3]=r[3]*i+r[7]*n+r[11]*o+r[15]*s,t}function vd(t,e,r){let i=e[0],n=e[1],o=e[2],s=r[0],a=r[1],c=r[2],l=r[3],f=l*i+a*o-c*n,u=l*n+c*i-s*o,d=l*o+s*n-a*i,h=-s*i-a*n-c*o;return t[0]=f*l+h*-s+u*-c-d*-a,t[1]=u*l+h*-a+d*-s-f*-c,t[2]=d*l+h*-c+f*-a-u*-s,t[3]=e[3],t}function D1(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function U1(t){return`vec4(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}function Xb(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}function k1(t,e){let r=t[0],i=t[1],n=t[2],o=t[3],s=e[0],a=e[1],c=e[2],l=e[3];return Math.abs(r-s)<=1e-6*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(i-a)<=1e-6*Math.max(1,Math.abs(i),Math.abs(a))&&Math.abs(n-c)<=1e-6*Math.max(1,Math.abs(n),Math.abs(c))&&Math.abs(o-l)<=1e-6*Math.max(1,Math.abs(o),Math.abs(l))}var V1=Hb,H1=zb,z1=jb,j1=Wb,W1=Gb,G1=Ua,X1=ka,$1=function(){let t=Nb();return function(e,r,i,n,o,s){let a,c;for(r||(r=4),i||(i=0),n?c=Math.min(n*r+i,e.length):c=e.length,a=i;a<c;a+=r)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],t[3]=e[a+3],o(t,t,s),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2],e[a+3]=t[3];return e}}();var Pd;(function(t){t[t.COL0ROW0=0]="COL0ROW0",t[t.COL0ROW1=1]="COL0ROW1",t[t.COL0ROW2=2]="COL0ROW2",t[t.COL0ROW3=3]="COL0ROW3",t[t.COL1ROW0=4]="COL1ROW0",t[t.COL1ROW1=5]="COL1ROW1",t[t.COL1ROW2=6]="COL1ROW2",t[t.COL1ROW3=7]="COL1ROW3",t[t.COL2ROW0=8]="COL2ROW0",t[t.COL2ROW1=9]="COL2ROW1",t[t.COL2ROW2=10]="COL2ROW2",t[t.COL2ROW3=11]="COL2ROW3",t[t.COL3ROW0=12]="COL3ROW0",t[t.COL3ROW1=13]="COL3ROW1",t[t.COL3ROW2=14]="COL3ROW2",t[t.COL3ROW3=15]="COL3ROW3"})(Pd||(Pd={}));var K1=45*Math.PI/180,Y1=1,Rd=.1,Md=500,J1=Object.freeze([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),V=class extends Si{static get IDENTITY(){return Z1()}static get ZERO(){return Q1()}get ELEMENTS(){return 16}get RANK(){return 4}get INDICES(){return Pd}constructor(e){super(-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0),arguments.length===1&&Array.isArray(e)?this.copy(e):this.identity()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this[4]=e[4],this[5]=e[5],this[6]=e[6],this[7]=e[7],this[8]=e[8],this[9]=e[9],this[10]=e[10],this[11]=e[11],this[12]=e[12],this[13]=e[13],this[14]=e[14],this[15]=e[15],this.check()}set(e,r,i,n,o,s,a,c,l,f,u,d,h,p,g,m){return this[0]=e,this[1]=r,this[2]=i,this[3]=n,this[4]=o,this[5]=s,this[6]=a,this[7]=c,this[8]=l,this[9]=f,this[10]=u,this[11]=d,this[12]=h,this[13]=p,this[14]=g,this[15]=m,this.check()}setRowMajor(e,r,i,n,o,s,a,c,l,f,u,d,h,p,g,m){return this[0]=e,this[1]=o,this[2]=l,this[3]=h,this[4]=r,this[5]=s,this[6]=f,this[7]=p,this[8]=i,this[9]=a,this[10]=u,this[11]=g,this[12]=n,this[13]=c,this[14]=d,this[15]=m,this.check()}toRowMajor(e){return e[0]=this[0],e[1]=this[4],e[2]=this[8],e[3]=this[12],e[4]=this[1],e[5]=this[5],e[6]=this[9],e[7]=this[13],e[8]=this[2],e[9]=this[6],e[10]=this[10],e[11]=this[14],e[12]=this[3],e[13]=this[7],e[14]=this[11],e[15]=this[15],e}identity(){return this.copy(J1)}fromObject(e){return this.check()}fromQuaternion(e){return gd(this,e),this.check()}frustum(e){let{left:r,right:i,bottom:n,top:o,near:s=Rd,far:a=Md}=e;return a===1/0?q1(this,r,i,n,o,s):md(this,r,i,n,o,s,a),this.check()}lookAt(e){let{eye:r,center:i=[0,0,0],up:n=[0,1,0]}=e;return Ad(this,r,i,n),this.check()}ortho(e){let{left:r,right:i,bottom:n,top:o,near:s=Rd,far:a=Md}=e;return bd(this,r,i,n,o,s,a),this.check()}orthographic(e){let{fovy:r=K1,aspect:i=Y1,focalDistance:n=1,near:o=Rd,far:s=Md}=e;$b(r);let a=r/2,c=n*Math.tan(a),l=c*i;return this.ortho({left:-l,right:l,bottom:-c,top:c,near:o,far:s})}perspective(e){let{fovy:r=45*Math.PI/180,aspect:i=1,near:n=.1,far:o=500}=e;return $b(r),_d(this,r,i,n,o),this.check()}determinant(){return cd(this)}getScale(e=[-0,-0,-0]){return e[0]=Math.sqrt(this[0]*this[0]+this[1]*this[1]+this[2]*this[2]),e[1]=Math.sqrt(this[4]*this[4]+this[5]*this[5]+this[6]*this[6]),e[2]=Math.sqrt(this[8]*this[8]+this[9]*this[9]+this[10]*this[10]),e}getTranslation(e=[-0,-0,-0]){return e[0]=this[12],e[1]=this[13],e[2]=this[14],e}getRotation(e,r){e=e||[-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0],r=r||[-0,-0,-0];let i=this.getScale(r),n=1/i[0],o=1/i[1],s=1/i[2];return e[0]=this[0]*n,e[1]=this[1]*o,e[2]=this[2]*s,e[3]=0,e[4]=this[4]*n,e[5]=this[5]*o,e[6]=this[6]*s,e[7]=0,e[8]=this[8]*n,e[9]=this[9]*o,e[10]=this[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}getRotationMatrix3(e,r){e=e||[-0,-0,-0,-0,-0,-0,-0,-0,-0],r=r||[-0,-0,-0];let i=this.getScale(r),n=1/i[0],o=1/i[1],s=1/i[2];return e[0]=this[0]*n,e[1]=this[1]*o,e[2]=this[2]*s,e[3]=this[4]*n,e[4]=this[5]*o,e[5]=this[6]*s,e[6]=this[8]*n,e[7]=this[9]*o,e[8]=this[10]*s,e}transpose(){return sd(this,this),this.check()}invert(){return ad(this,this),this.check()}multiplyLeft(e){return Hn(this,e,this),this.check()}multiplyRight(e){return Hn(this,this,e),this.check()}rotateX(e){return dd(this,this,e),this.check()}rotateY(e){return hd(this,this,e),this.check()}rotateZ(e){return pd(this,this,e),this.check()}rotateXYZ(e){return this.rotateX(e[0]).rotateY(e[1]).rotateZ(e[2])}rotateAxis(e,r){return ud(this,this,e,r),this.check()}scale(e){return fd(this,this,Array.isArray(e)?e:[e,e,e]),this.check()}translate(e){return ld(this,this,e),this.check()}transform(e,r){return e.length===4?(r=Cd(r||[-0,-0,-0,-0],e,this),or(r,4),r):this.transformAsPoint(e,r)}transformAsPoint(e,r){let{length:i}=e,n;switch(i){case 2:n=Yu(r||[-0,-0],e,this);break;case 3:n=Ur(r||[-0,-0,-0],e,this);break;default:throw new Error("Illegal vector")}return or(n,e.length),n}transformAsVector(e,r){let i;switch(e.length){case 2:i=db(r||[-0,-0],e,this);break;case 3:i=Pa(r||[-0,-0,-0],e,this);break;default:throw new Error("Illegal vector")}return or(i,e.length),i}transformPoint(e,r){return this.transformAsPoint(e,r)}transformVector(e,r){return this.transformAsPoint(e,r)}transformDirection(e,r){return this.transformAsVector(e,r)}makeRotationX(e){return this.identity().rotateX(e)}makeTranslation(e,r,i){return this.identity().translate([e,r,i])}},Va,Ha;function Q1(){return Va||(Va=new V([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),Object.freeze(Va)),Va}function Z1(){return Ha||(Ha=new V,Object.freeze(Ha)),Ha}function $b(t){if(t>Math.PI*2)throw Error("expected radians")}function q1(t,e,r,i,n,o){let s=2*o/(r-e),a=2*o/(n-i),c=(r+e)/(r-e),l=(n+i)/(n-i),f=-1,u=-1,d=-2*o;return t[0]=s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=c,t[9]=l,t[10]=f,t[11]=u,t[12]=0,t[13]=0,t[14]=d,t[15]=0,t}function Kb(){let t=new X(4);return X!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function Yb(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function wd(t,e,r){r=r*.5;let i=Math.sin(r);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(r),t}function Id(t,e,r){let i=e[0],n=e[1],o=e[2],s=e[3],a=r[0],c=r[1],l=r[2],f=r[3];return t[0]=i*f+s*a+n*l-o*c,t[1]=n*f+s*c+o*a-i*l,t[2]=o*f+s*l+i*c-n*a,t[3]=s*f-i*a-n*c-o*l,t}function Jb(t,e,r){r*=.5;let i=e[0],n=e[1],o=e[2],s=e[3],a=Math.sin(r),c=Math.cos(r);return t[0]=i*c+s*a,t[1]=n*c+o*a,t[2]=o*c-n*a,t[3]=s*c-i*a,t}function Qb(t,e,r){r*=.5;let i=e[0],n=e[1],o=e[2],s=e[3],a=Math.sin(r),c=Math.cos(r);return t[0]=i*c-o*a,t[1]=n*c+s*a,t[2]=o*c+i*a,t[3]=s*c-n*a,t}function Zb(t,e,r){r*=.5;let i=e[0],n=e[1],o=e[2],s=e[3],a=Math.sin(r),c=Math.cos(r);return t[0]=i*c+n*a,t[1]=n*c-i*a,t[2]=o*c+s*a,t[3]=s*c-o*a,t}function qb(t,e){let r=e[0],i=e[1],n=e[2];return t[0]=r,t[1]=i,t[2]=n,t[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),t}function zn(t,e,r,i){let n=e[0],o=e[1],s=e[2],a=e[3],c=r[0],l=r[1],f=r[2],u=r[3],d,h,p,g,m;return d=n*c+o*l+s*f+a*u,d<0&&(d=-d,c=-c,l=-l,f=-f,u=-u),1-d>1e-6?(h=Math.acos(d),m=Math.sin(h),p=Math.sin((1-i)*h)/m,g=Math.sin(i*h)/m):(p=1-i,g=i),t[0]=p*n+g*c,t[1]=p*o+g*l,t[2]=p*s+g*f,t[3]=p*a+g*u,t}function eA(t,e){let r=e[0],i=e[1],n=e[2],o=e[3],s=r*r+i*i+n*n+o*o,a=s?1/s:0;return t[0]=-r*a,t[1]=-i*a,t[2]=-n*a,t[3]=o*a,t}function tA(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function Bd(t,e){let r=e[0]+e[4]+e[8],i;if(r>0)i=Math.sqrt(r+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{let n=0;e[4]>e[0]&&(n=1),e[8]>e[n*3+n]&&(n=2);let o=(n+1)%3,s=(n+2)%3;i=Math.sqrt(e[n*3+n]-e[o*3+o]-e[s*3+s]+1),t[n]=.5*i,i=.5/i,t[3]=(e[o*3+s]-e[s*3+o])*i,t[o]=(e[o*3+n]+e[n*3+o])*i,t[s]=(e[s*3+n]+e[n*3+s])*i}return t}var rA=yd;var iA=xd,nA=Sd,oA=Ed,sA=Ua;var aA=ka;var cA=Td;var lA=function(){let t=Ia(),e=Ba(1,0,0),r=Ba(0,1,0);return function(i,n,o){let s=Un(n,o);return s<-.999999?(Dr(t,e,n),td(t)<1e-6&&Dr(t,r,n),Ju(t,t),wd(i,t,Math.PI),i):s>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(Dr(t,n,o),i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=1+s,cA(i,i))}}(),W9=function(){let t=Kb(),e=Kb();return function(r,i,n,o,s,a){return zn(t,i,s,a),zn(e,n,o,a),zn(r,t,e,2*a*(1-a)),r}}(),G9=function(){let t=Tb();return function(e,r,i,n){return t[0]=i[0],t[3]=i[1],t[6]=i[2],t[1]=n[0],t[4]=n[1],t[7]=n[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],cA(e,Bd(e,t))}}();var tw=[0,0,0,1],jn=class extends nr{constructor(e=0,r=0,i=0,n=1){super(-0,-0,-0,-0),Array.isArray(e)&&arguments.length===1?this.copy(e):this.set(e,r,i,n)}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this.check()}set(e,r,i,n){return this[0]=e,this[1]=r,this[2]=i,this[3]=n,this.check()}fromObject(e){return this[0]=e.x,this[1]=e.y,this[2]=e.z,this[3]=e.w,this.check()}fromMatrix3(e){return Bd(this,e),this.check()}fromAxisRotation(e,r){return wd(this,e,r),this.check()}identity(){return Yb(this),this.check()}setAxisAngle(e,r){return this.fromAxisRotation(e,r)}get ELEMENTS(){return 4}get x(){return this[0]}set x(e){this[0]=H(e)}get y(){return this[1]}set y(e){this[1]=H(e)}get z(){return this[2]}set z(e){this[2]=H(e)}get w(){return this[3]}set w(e){this[3]=H(e)}len(){return sA(this)}lengthSquared(){return aA(this)}dot(e){return nA(this,e)}rotationTo(e,r){return lA(this,e,r),this.check()}add(e){return rA(this,this,e),this.check()}calculateW(){return qb(this,this),this.check()}conjugate(){return tA(this,this),this.check()}invert(){return eA(this,this),this.check()}lerp(e,r,i){return i===void 0?this.lerp(this,e,r):(oA(this,e,r,i),this.check())}multiplyRight(e){return Id(this,this,e),this.check()}multiplyLeft(e){return Id(this,e,this),this.check()}normalize(){let e=this.len(),r=e>0?1/e:0;return this[0]=this[0]*r,this[1]=this[1]*r,this[2]=this[2]*r,this[3]=this[3]*r,e===0&&(this[3]=1),this.check()}rotateX(e){return Jb(this,this,e),this.check()}rotateY(e){return Qb(this,this,e),this.check()}rotateZ(e){return Zb(this,this,e),this.check()}scale(e){return iA(this,this,e),this.check()}slerp(e,r,i){let n,o,s;switch(arguments.length){case 1:({start:n=tw,target:o,ratio:s}=e);break;case 2:n=this,o=e,s=r;break;default:n=e,o=r,s=i}return zn(this,n,o,s),this.check()}transformVector4(e,r=new Fa){return vd(r,e,this),or(r,4)}lengthSq(){return this.lengthSquared()}setFromAxisAngle(e,r){return this.setAxisAngle(e,r)}premultiply(e){return this.multiplyLeft(e)}multiply(e){return this.multiplyRight(e)}};function Od(t,e=[],r=0){let i=Math.fround(t),n=t-i;return e[r]=i,e[r+1]=n,e}function fA(t){return t-Math.fround(t)}function uA(t){let e=new Float32Array(32);for(let r=0;r<4;++r)for(let i=0;i<4;++i){let n=r*4+i;Od(t[i*4+r],e,n*2)}return e}function Wn(t,e=!0){return t??e}function Ei(t=[0,0,0],e=!0){return e?t.map(r=>r/255):[...t]}function Ld(t,e=!0){let r=Ei(t.slice(0,3),e),i=Number.isFinite(t[3]),n=i?t[3]:1;return[r[0],r[1],r[2],e&&i?n/255:n]}var rw=`#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND

// All these functions are for substituting tan() function from Intel GPU only
const float TWO_PI = 6.2831854820251465;
const float PI_2 = 1.5707963705062866;
const float PI_16 = 0.1963495463132858;

const float SIN_TABLE_0 = 0.19509032368659973;
const float SIN_TABLE_1 = 0.3826834261417389;
const float SIN_TABLE_2 = 0.5555702447891235;
const float SIN_TABLE_3 = 0.7071067690849304;

const float COS_TABLE_0 = 0.9807852506637573;
const float COS_TABLE_1 = 0.9238795042037964;
const float COS_TABLE_2 = 0.8314695954322815;
const float COS_TABLE_3 = 0.7071067690849304;

const float INVERSE_FACTORIAL_3 = 1.666666716337204e-01; // 1/3!
const float INVERSE_FACTORIAL_5 = 8.333333767950535e-03; // 1/5!
const float INVERSE_FACTORIAL_7 = 1.9841270113829523e-04; // 1/7!
const float INVERSE_FACTORIAL_9 = 2.75573188446287533e-06; // 1/9!

float sin_taylor_fp32(float a) {
  float r, s, t, x;

  if (a == 0.0) {
    return 0.0;
  }

  x = -a * a;
  s = a;
  r = a;

  r = r * x;
  t = r * INVERSE_FACTORIAL_3;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_5;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_7;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_9;
  s = s + t;

  return s;
}

void sincos_taylor_fp32(float a, out float sin_t, out float cos_t) {
  if (a == 0.0) {
    sin_t = 0.0;
    cos_t = 1.0;
  }
  sin_t = sin_taylor_fp32(a);
  cos_t = sqrt(1.0 - sin_t * sin_t);
}

float tan_taylor_fp32(float a) {
    float sin_a;
    float cos_a;

    if (a == 0.0) {
        return 0.0;
    }

    // 2pi range reduction
    float z = floor(a / TWO_PI);
    float r = a - TWO_PI * z;

    float t;
    float q = floor(r / PI_2 + 0.5);
    int j = int(q);

    if (j < -2 || j > 2) {
        return 1.0 / 0.0;
    }

    t = r - PI_2 * q;

    q = floor(t / PI_16 + 0.5);
    int k = int(q);
    int abs_k = int(abs(float(k)));

    if (abs_k > 4) {
        return 1.0 / 0.0;
    } else {
        t = t - PI_16 * q;
    }

    float u = 0.0;
    float v = 0.0;

    float sin_t, cos_t;
    float s, c;
    sincos_taylor_fp32(t, sin_t, cos_t);

    if (k == 0) {
        s = sin_t;
        c = cos_t;
    } else {
        if (abs(float(abs_k) - 1.0) < 0.5) {
            u = COS_TABLE_0;
            v = SIN_TABLE_0;
        } else if (abs(float(abs_k) - 2.0) < 0.5) {
            u = COS_TABLE_1;
            v = SIN_TABLE_1;
        } else if (abs(float(abs_k) - 3.0) < 0.5) {
            u = COS_TABLE_2;
            v = SIN_TABLE_2;
        } else if (abs(float(abs_k) - 4.0) < 0.5) {
            u = COS_TABLE_3;
            v = SIN_TABLE_3;
        }
        if (k > 0) {
            s = u * sin_t + v * cos_t;
            c = u * cos_t - v * sin_t;
        } else {
            s = u * sin_t - v * cos_t;
            c = u * cos_t + v * sin_t;
        }
    }

    if (j == 0) {
        sin_a = s;
        cos_a = c;
    } else if (j == 1) {
        sin_a = c;
        cos_a = -s;
    } else if (j == -1) {
        sin_a = -c;
        cos_a = s;
    } else {
        sin_a = -s;
        cos_a = -c;
    }
    return sin_a / cos_a;
}
#endif

float tan_fp32(float a) {
#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND
  return tan_taylor_fp32(a);
#else
  return tan(a);
#endif
}
`,Fd={name:"fp32",vs:rw};var Nd=`
layout(std140) uniform fp64arithmeticUniforms {
  uniform float ONE;
  uniform float SPLIT;
} fp64;

/*
About LUMA_FP64_CODE_ELIMINATION_WORKAROUND

The purpose of this workaround is to prevent shader compilers from
optimizing away necessary arithmetic operations by swapping their sequences
or transform the equation to some 'equivalent' form.

These helpers implement Dekker/Veltkamp-style error tracking. If the compiler
folds constants or reassociates the arithmetic, the high/low split can stop
tracking the rounding error correctly. That failure mode tends to look fine in
simple coordinate setup, but then breaks down inside iterative arithmetic such
as fp64 Mandelbrot loops.

The method is to multiply an artifical variable, ONE, which will be known to
the compiler to be 1 only at runtime. The whole expression is then represented
as a polynomial with respective to ONE. In the coefficients of all terms, only one a
and one b should appear

err = (a + b) * ONE^6 - a * ONE^5 - (a + b) * ONE^4 + a * ONE^3 - b - (a + b) * ONE^2 + a * ONE
*/

float prevent_fp64_optimization(float value) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  return value + fp64.ONE * 0.0;
#else
  return value;
#endif
}

// Divide float number to high and low floats to extend fraction bits
vec2 split(float a) {
  // Keep SPLIT as a runtime uniform so the compiler cannot fold the Dekker
  // split into a constant expression and reassociate the recovery steps.
  float split = prevent_fp64_optimization(fp64.SPLIT);
  float t = prevent_fp64_optimization(a * split);
  float temp = t - a;
  float a_hi = t - temp;
  float a_lo = a - a_hi;
  return vec2(a_hi, a_lo);
}

// Divide float number again when high float uses too many fraction bits
vec2 split2(vec2 a) {
  vec2 b = split(a.x);
  b.y += a.y;
  return b;
}

// Special sum operation when a > b
vec2 quickTwoSum(float a, float b) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float sum = (a + b) * fp64.ONE;
  float err = b - (sum - a) * fp64.ONE;
#else
  float sum = a + b;
  float err = b - (sum - a);
#endif
  return vec2(sum, err);
}

// General sum operation
vec2 twoSum(float a, float b) {
  float s = (a + b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE + (b - v);
#else
  float v = s - a;
  float err = (a - (s - v)) + (b - v);
#endif
  return vec2(s, err);
}

vec2 twoSub(float a, float b) {
  float s = (a - b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE - (b + v);
#else
  float v = s - a;
  float err = (a - (s - v)) - (b + v);
#endif
  return vec2(s, err);
}

vec2 twoSqr(float a) {
  float prod = a * a;
  vec2 a_fp64 = split(a);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err = ((a_fp64.x * a_fp64.x - prod) * fp64.ONE + 2.0 * a_fp64.x *
    a_fp64.y * fp64.ONE * fp64.ONE) + a_fp64.y * a_fp64.y * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;
#endif
  return vec2(prod, err);
}

vec2 twoProd(float a, float b) {
  float prod = a * b;
  vec2 a_fp64 = split(a);
  vec2 b_fp64 = split(b);
  // twoProd is especially sensitive because mul_fp64 and div_fp64 both depend
  // on the split terms and cross terms staying in the original evaluation
  // order. If the compiler folds or reassociates them, the low part tends to
  // collapse to zero or NaN on some drivers.
  float highProduct = prevent_fp64_optimization(a_fp64.x * b_fp64.x);
  float crossProduct1 = prevent_fp64_optimization(a_fp64.x * b_fp64.y);
  float crossProduct2 = prevent_fp64_optimization(a_fp64.y * b_fp64.x);
  float lowProduct = prevent_fp64_optimization(a_fp64.y * b_fp64.y);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err1 = (highProduct - prod) * fp64.ONE;
  float err2 = crossProduct1 * fp64.ONE * fp64.ONE;
  float err3 = crossProduct2 * fp64.ONE * fp64.ONE * fp64.ONE;
  float err4 = lowProduct * fp64.ONE * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err1 = highProduct - prod;
  float err2 = crossProduct1;
  float err3 = crossProduct2;
  float err4 = lowProduct;
#endif
  float err = ((err1 + err2) + err3) + err4;
  return vec2(prod, err);
}

vec2 sum_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSum(a.x, b.x);
  t = twoSum(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 sub_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSub(a.x, b.x);
  t = twoSub(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 mul_fp64(vec2 a, vec2 b) {
  vec2 prod = twoProd(a.x, b.x);
  // y component is for the error
  prod.y += a.x * b.y;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  prod.y += a.y * b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

vec2 div_fp64(vec2 a, vec2 b) {
  float xn = 1.0 / b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  vec2 yn = mul_fp64(a, vec2(xn, 0));
#else
  vec2 yn = a * xn;
#endif
  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;
  vec2 prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

vec2 sqrt_fp64(vec2 a) {
  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);
  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);

  float x = 1.0 / sqrt(a.x);
  float yn = a.x * x;
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  vec2 yn_sqr = twoSqr(yn) * fp64.ONE;
#else
  vec2 yn_sqr = twoSqr(yn);
#endif
  float diff = sub_fp64(a, yn_sqr).x;
  vec2 prod = twoProd(x * 0.5, diff);
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2(yn, 0.0), prod);
#endif
}
`;var dA=`struct Fp64ArithmeticUniforms {
  ONE: f32,
  SPLIT: f32,
};

@group(0) @binding(auto) var<uniform> fp64arithmetic : Fp64ArithmeticUniforms;

fn fp64_nan(seed: f32) -> f32 {
  let nanBits = 0x7fc00000u | select(0u, 1u, seed < 0.0);
  return bitcast<f32>(nanBits);
}

fn fp64_runtime_zero() -> f32 {
  return fp64arithmetic.ONE * 0.0;
}

fn prevent_fp64_optimization(value: f32) -> f32 {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  return value + fp64_runtime_zero();
#else
  return value;
#endif
}

fn split(a: f32) -> vec2f {
  let splitValue = prevent_fp64_optimization(fp64arithmetic.SPLIT + fp64_runtime_zero());
  let t = prevent_fp64_optimization(a * splitValue);
  let temp = prevent_fp64_optimization(t - a);
  let aHi = prevent_fp64_optimization(t - temp);
  let aLo = prevent_fp64_optimization(a - aHi);
  return vec2f(aHi, aLo);
}

fn split2(a: vec2f) -> vec2f {
  var b = split(a.x);
  b.y = b.y + a.y;
  return b;
}

fn quickTwoSum(a: f32, b: f32) -> vec2f {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let sum = prevent_fp64_optimization((a + b) * fp64arithmetic.ONE);
  let err = prevent_fp64_optimization(b - (sum - a) * fp64arithmetic.ONE);
#else
  let sum = prevent_fp64_optimization(a + b);
  let err = prevent_fp64_optimization(b - (sum - a));
#endif
  return vec2f(sum, err);
}

fn twoSum(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a + b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) +
    prevent_fp64_optimization(b - v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) + prevent_fp64_optimization(b - v);
#endif
  return vec2f(s, err);
}

fn twoSub(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a - b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) -
    prevent_fp64_optimization(b + v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) - prevent_fp64_optimization(b + v);
#endif
  return vec2f(s, err);
}

fn twoSqr(a: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * a);
  let aFp64 = split(a);
  let highProduct = prevent_fp64_optimization(aFp64.x * aFp64.x);
  let crossProduct = prevent_fp64_optimization(2.0 * aFp64.x * aFp64.y);
  let lowProduct = prevent_fp64_optimization(aFp64.y * aFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err =
    (prevent_fp64_optimization(highProduct - prod) * fp64arithmetic.ONE +
      crossProduct * fp64arithmetic.ONE * fp64arithmetic.ONE) +
    lowProduct * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
#else
  let err = ((prevent_fp64_optimization(highProduct - prod) + crossProduct) + lowProduct);
#endif
  return vec2f(prod, err);
}

fn twoProd(a: f32, b: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * b);
  let aFp64 = split(a);
  let bFp64 = split(b);
  let highProduct = prevent_fp64_optimization(aFp64.x * bFp64.x);
  let crossProduct1 = prevent_fp64_optimization(aFp64.x * bFp64.y);
  let crossProduct2 = prevent_fp64_optimization(aFp64.y * bFp64.x);
  let lowProduct = prevent_fp64_optimization(aFp64.y * bFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err1 = (highProduct - prod) * fp64arithmetic.ONE;
  let err2 = crossProduct1 * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err3 = crossProduct2 * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err4 =
    lowProduct *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE;
#else
  let err1 = highProduct - prod;
  let err2 = crossProduct1;
  let err3 = crossProduct2;
  let err4 = lowProduct;
#endif
  let err12InputA = prevent_fp64_optimization(err1);
  let err12InputB = prevent_fp64_optimization(err2);
  let err12 = prevent_fp64_optimization(err12InputA + err12InputB);
  let err123InputA = prevent_fp64_optimization(err12);
  let err123InputB = prevent_fp64_optimization(err3);
  let err123 = prevent_fp64_optimization(err123InputA + err123InputB);
  let err1234InputA = prevent_fp64_optimization(err123);
  let err1234InputB = prevent_fp64_optimization(err4);
  let err = prevent_fp64_optimization(err1234InputA + err1234InputB);
  return vec2f(prod, err);
}

fn sum_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSum(a.x, b.x);
  let t = twoSum(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn sub_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSub(a.x, b.x);
  let t = twoSub(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn mul_fp64(a: vec2f, b: vec2f) -> vec2f {
  var prod = twoProd(a.x, b.x);
  let crossProduct1 = prevent_fp64_optimization(a.x * b.y);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct1);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  let crossProduct2 = prevent_fp64_optimization(a.y * b.x);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct2);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

fn div_fp64(a: vec2f, b: vec2f) -> vec2f {
  let xn = prevent_fp64_optimization(1.0 / b.x);
  let yn = mul_fp64(a, vec2f(xn, fp64_runtime_zero()));
  let diff = prevent_fp64_optimization(sub_fp64(a, mul_fp64(b, yn)).x);
  let prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

fn sqrt_fp64(a: vec2f) -> vec2f {
  if (a.x == 0.0 && a.y == 0.0) {
    return vec2f(0.0, 0.0);
  }
  if (a.x < 0.0) {
    let nanValue = fp64_nan(a.x);
    return vec2f(nanValue, nanValue);
  }

  let x = prevent_fp64_optimization(1.0 / sqrt(a.x));
  let yn = prevent_fp64_optimization(a.x * x);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let ynSqr = twoSqr(yn) * fp64arithmetic.ONE;
#else
  let ynSqr = twoSqr(yn);
#endif
  let diff = prevent_fp64_optimization(sub_fp64(a, ynSqr).x);
  let prod = twoProd(prevent_fp64_optimization(x * 0.5), diff);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2f(yn, 0.0), prod);
#endif
}
`;var iw={ONE:1,SPLIT:4097},Dd={name:"fp64arithmetic",source:dA,fs:Nd,vs:Nd,defaultUniforms:iw,uniformTypes:{ONE:"f32",SPLIT:"f32"},fp64ify:Od,fp64LowPart:fA,fp64ifyMatrix4:uA};var hA=`layout(std140) uniform floatColorsUniforms {
  float useByteColors;
} floatColors;

vec3 floatColors_normalize(vec3 inputColor) {
  return floatColors.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 floatColors_normalize(vec4 inputColor) {
  return floatColors.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 floatColors_premultiplyAlpha(vec4 inputColor) {
  return vec4(inputColor.rgb * inputColor.a, inputColor.a);
}

vec4 floatColors_unpremultiplyAlpha(vec4 inputColor) {
  return inputColor.a > 0.0 ? vec4(inputColor.rgb / inputColor.a, inputColor.a) : vec4(0.0);
}

vec4 floatColors_premultiply_alpha(vec4 inputColor) {
  return floatColors_premultiplyAlpha(inputColor);
}

vec4 floatColors_unpremultiply_alpha(vec4 inputColor) {
  return floatColors_unpremultiplyAlpha(inputColor);
}
`,nw=`struct floatColorsUniforms {
  useByteColors: f32
};

@group(0) @binding(auto) var<uniform> floatColors : floatColorsUniforms;

fn floatColors_normalize(inputColor: vec3<f32>) -> vec3<f32> {
  return select(inputColor, inputColor / 255.0, floatColors.useByteColors > 0.5);
}

fn floatColors_normalize4(inputColor: vec4<f32>) -> vec4<f32> {
  return select(inputColor, inputColor / 255.0, floatColors.useByteColors > 0.5);
}

fn floatColors_premultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(inputColor.rgb * inputColor.a, inputColor.a);
}

fn floatColors_unpremultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return select(
    vec4<f32>(0.0),
    vec4<f32>(inputColor.rgb / inputColor.a, inputColor.a),
    inputColor.a > 0.0
  );
}

fn floatColors_premultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return floatColors_premultiplyAlpha(inputColor);
}

fn floatColors_unpremultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return floatColors_unpremultiplyAlpha(inputColor);
}
`,pA={name:"floatColors",props:{},uniforms:{},vs:hA,fs:hA,source:nw,uniformTypes:{useByteColors:"f32"},defaultUniforms:{useByteColors:!0}};var ow=[0,1,1,1],sw=`layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

out vec4 picking_vRGBcolor_Avalid;

// Normalize unsigned byte color to 0-1 range
vec3 picking_normalizeColor(vec3 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

// Normalize unsigned byte color to 0-1 range
vec4 picking_normalizeColor(vec4 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

bool picking_isColorZero(vec3 color) {
  return dot(color, vec3(1.0)) < 0.00001;
}

bool picking_isColorValid(vec3 color) {
  return dot(color, vec3(1.0)) > 0.00001;
}

// Check if this vertex is highlighted 
bool isVertexHighlighted(vec3 vertexColor) {
  vec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
  return
    bool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));
}

// Set the current picking color
void picking_setPickingColor(vec3 pickingColor) {
  pickingColor = picking_normalizeColor(pickingColor);

  if (bool(picking.isActive)) {
    // Use alpha as the validity flag. If pickingColor is [0, 0, 0] fragment is non-pickable
    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));

    if (!bool(picking.isAttribute)) {
      // Stores the picking color so that the fragment shader can render it during picking
      picking_vRGBcolor_Avalid.rgb = pickingColor;
    }
  } else {
    // Do the comparison with selected item color in vertex shader as it should mean fewer compares
    picking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));
  }
}

void picking_setPickingAttribute(float value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.r = value;
  }
}

void picking_setPickingAttribute(vec2 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rg = value;
  }
}

void picking_setPickingAttribute(vec3 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rgb = value;
  }
}
`,aw=`layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

in vec4 picking_vRGBcolor_Avalid;

/*
 * Returns highlight color if this item is selected.
 */
vec4 picking_filterHighlightColor(vec4 color) {
  // If we are still picking, we don't highlight
  if (picking.isActive > 0.5) {
    return color;
  }

  bool selected = bool(picking_vRGBcolor_Avalid.a);

  if (selected) {
    // Blend in highlight color based on its alpha value
    float highLightAlpha = picking.highlightColor.a;
    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);
    float highLightRatio = highLightAlpha / blendedAlpha;

    vec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);
    return vec4(blendedRGB, blendedAlpha);
  } else {
    return color;
  }
}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 picking_filterPickingColor(vec4 color) {
  if (bool(picking.isActive)) {
    if (picking_vRGBcolor_Avalid.a == 0.0) {
      discard;
    }
    return picking_vRGBcolor_Avalid;
  }
  return color;
}

/*
 * Returns picking color if picking is enabled if not
 * highlight color if this item is selected, otherwise unmodified argument.
 */
vec4 picking_filterColor(vec4 color) {
  vec4 highlightColor = picking_filterHighlightColor(color);
  return picking_filterPickingColor(highlightColor);
}
`,za={props:{},uniforms:{},name:"picking",uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useByteColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useByteColors:!0,highlightedObjectColor:[0,0,0],highlightColor:ow},vs:sw,fs:aw,getUniforms:cw};function cw(t={},e){let r={},i=Wn(t.useByteColors,!0);if(t.highlightedObjectColor!==void 0)if(t.highlightedObjectColor===null)r.isHighlightActive=!1;else{r.isHighlightActive=!0;let n=t.highlightedObjectColor.slice(0,3);r.highlightedObjectColor=n}return t.highlightColor&&(r.highlightColor=Ld(t.highlightColor,i)),t.isActive!==void 0&&(r.isActive=!!t.isActive,r.isAttribute=!!t.isAttribute),t.useByteColors!==void 0&&(r.useByteColors=!!t.useByteColors),r}var Gn=20,lw=`
struct skinUniforms {
  jointMatrix: array<mat4x4<f32>, ${Gn}>,
};

@group(0) @binding(auto) var<uniform> skin: skinUniforms;

fn getSkinMatrix(weights: vec4f, joints: vec4u) -> mat4x4<f32> {
  return (weights.x * skin.jointMatrix[joints.x])
       + (weights.y * skin.jointMatrix[joints.y])
       + (weights.z * skin.jointMatrix[joints.z])
       + (weights.w * skin.jointMatrix[joints.w]);
}
`,fw=`
layout(std140) uniform skinUniforms {
  mat4 jointMatrix[SKIN_MAX_JOINTS];
} skin;

mat4 getSkinMatrix(vec4 weights, uvec4 joints) {
  return (weights.x * skin.jointMatrix[joints.x])
       + (weights.y * skin.jointMatrix[joints.y])
       + (weights.z * skin.jointMatrix[joints.z])
       + (weights.w * skin.jointMatrix[joints.w]);
}

`,uw="",Ud={props:{},uniforms:{},name:"skin",bindingLayout:[{name:"skin",group:0}],dependencies:[],source:lw,vs:fw,fs:uw,defines:{SKIN_MAX_JOINTS:Gn},getUniforms:(t={},e)=>{let{scenegraphsFromGLTF:r}=t;if(!r?.gltf?.skins?.[0])return{jointMatrix:[]};let{inverseBindMatrices:i,joints:n,skeleton:o}=r.gltf.skins[0],s=[],a=i.value.length/16;for(let u=0;u<a;u++){let d=i.value.subarray(u*16,u*16+16);s.push(new V(Array.from(d)))}let c=r.gltfNodeIndexToNodeMap.get(o),l={};c.preorderTraversal((u,{worldMatrix:d})=>{l[u.id]=d});let f=new Float32Array(Gn*16);for(let u=0;u<Gn;++u){let d=n[u];if(d===void 0)break;let h=l[r.gltfNodeIndexToNodeMap.get(d).id],p=s[u],g=new V().copy(h).multiplyRight(p),m=u*16;for(let b=0;b<16;b++)f[m+b]=g[b]}return{jointMatrix:f}},uniformTypes:{jointMatrix:["mat4x4<f32>",Gn]}};L();var Th=`precision highp int;

// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
struct AmbientLight {
  vec3 color;
};

struct PointLight {
  vec3 color;
  vec3 position;
  vec3 attenuation; // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

struct UniformLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

layout(std140) uniform lightingUniforms {
  int enabled;
  int directionalLightCount;
  int pointLightCount;
  int spotLightCount;
  vec3 ambientColor;
  UniformLight lights[5];
} lighting;

PointLight lighting_getPointLight(int index) {
  UniformLight light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

SpotLight lighting_getSpotLight(int index) {
  UniformLight light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

DirectionalLight lighting_getDirectionalLight(int index) {
  UniformLight light =
    lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

float getSpotLightAttenuation(SpotLight spotLight, vec3 positionWorldspace) {
  vec3 light_direction = normalize(positionWorldspace - spotLight.position);
  float coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), light_direction)
  );
  float distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}

// #endif
`;var my=`// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
const MAX_LIGHTS: i32 = 5;

struct AmbientLight {
  color: vec3<f32>,
};

struct PointLight {
  color: vec3<f32>,
  position: vec3<f32>,
  attenuation: vec3<f32>, // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct DirectionalLight {
  color: vec3<f32>,
  direction: vec3<f32>,
};

struct UniformLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct lightingUniforms {
  enabled: i32,
  directionalLightCount: i32,
  pointLightCount: i32,
  spotLightCount: i32,
  ambientColor: vec3<f32>,
  lights: array<UniformLight, 5>,
};

@group(2) @binding(auto) var<uniform> lighting : lightingUniforms;

fn lighting_getPointLight(index: i32) -> PointLight {
  let light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

fn lighting_getSpotLight(index: i32) -> SpotLight {
  let light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

fn lighting_getDirectionalLight(index: i32) -> DirectionalLight {
  let light = lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

fn getPointLightAttenuation(pointLight: PointLight, distance: f32) -> f32 {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

fn getSpotLightAttenuation(spotLight: SpotLight, positionWorldspace: vec3<f32>) -> f32 {
  let lightDirection = normalize(positionWorldspace - spotLight.position);
  let coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), lightDirection)
  );
  let distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}
`;var jr=5,R3={color:"vec3<f32>",position:"vec3<f32>",direction:"vec3<f32>",attenuation:"vec3<f32>",coneCos:"vec2<f32>"},cc={props:{},uniforms:{},name:"lighting",defines:{},uniformTypes:{enabled:"i32",directionalLightCount:"i32",pointLightCount:"i32",spotLightCount:"i32",ambientColor:"vec3<f32>",lights:[R3,jr]},defaultUniforms:ac(),bindingLayout:[{name:"lighting",group:2}],firstBindingSlot:0,source:my,vs:Th,fs:Th,getUniforms:M3};function M3(t,e={}){if(t=t&&{...t},!t)return ac();t.lights&&(t={...t,...w3(t.lights),lights:void 0});let{useByteColors:r,ambientLight:i,pointLights:n,spotLights:o,directionalLights:s}=t||{};if(!(i||n&&n.length>0||o&&o.length>0||s&&s.length>0))return{...ac(),enabled:0};let c={...ac(),...P3({useByteColors:r,ambientLight:i,pointLights:n,spotLights:o,directionalLights:s})};return t.enabled!==void 0&&(c.enabled=t.enabled?1:0),c}function P3({useByteColors:t,ambientLight:e,pointLights:r=[],spotLights:i=[],directionalLights:n=[]}){let o=_y(),s=0,a=0,c=0,l=0;for(let f of r){if(s>=jr)break;o[s]={...o[s],color:sc(f,t),position:f.position,attenuation:f.attenuation||[1,0,0]},s++,a++}for(let f of i){if(s>=jr)break;o[s]={...o[s],color:sc(f,t),position:f.position,direction:f.direction,attenuation:f.attenuation||[1,0,0],coneCos:B3(f)},s++,c++}for(let f of n){if(s>=jr)break;o[s]={...o[s],color:sc(f,t),direction:f.direction},s++,l++}return r.length+i.length+n.length>jr&&x.warn(`MAX_LIGHTS exceeded, truncating to ${jr}`)(),{ambientColor:sc(e,t),directionalLightCount:l,pointLightCount:a,spotLightCount:c,lights:o}}function w3(t){let e={pointLights:[],spotLights:[],directionalLights:[]};for(let r of t||[])switch(r.type){case"ambient":e.ambientLight=r;break;case"directional":e.directionalLights?.push(r);break;case"point":e.pointLights?.push(r);break;case"spot":e.spotLights?.push(r);break;default:}return e}function sc(t={},e){let{color:r=[0,0,0],intensity:i=1}=t;return Ei(r,Wn(e,!0)).map(o=>o*i)}function ac(){return{enabled:1,directionalLightCount:0,pointLightCount:0,spotLightCount:0,ambientColor:[.1,.1,.1],lights:_y()}}function _y(){return Array.from({length:jr},()=>I3())}function I3(){return{color:[1,1,1],position:[1,1,2],direction:[1,1,1],attenuation:[1,0,0],coneCos:[1,0]}}function B3(t){let e=t.innerConeAngle??0,r=t.outerConeAngle??Math.PI/4;return[Math.cos(e),Math.cos(r)]}var O3=`#ifdef USE_IBL
@group(2) @binding(auto) var pbr_diffuseEnvSampler: texture_cube<f32>;
@group(2) @binding(auto) var pbr_diffuseEnvSamplerSampler: sampler;
@group(2) @binding(auto) var pbr_specularEnvSampler: texture_cube<f32>;
@group(2) @binding(auto) var pbr_specularEnvSamplerSampler: sampler;
@group(2) @binding(auto) var pbr_brdfLUT: texture_2d<f32>;
@group(2) @binding(auto) var pbr_brdfLUTSampler: sampler;
#endif
`,by=`#ifdef USE_IBL
uniform samplerCube pbr_diffuseEnvSampler;
uniform samplerCube pbr_specularEnvSampler;
uniform sampler2D pbr_brdfLUT;
#endif
`,Ay={name:"ibl",firstBindingSlot:32,bindingLayout:[{name:"pbr_diffuseEnvSampler",group:2},{name:"pbr_specularEnvSampler",group:2},{name:"pbr_brdfLUT",group:2}],source:O3,vs:by,fs:by};var yy=`layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;
`,xy=`layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
  vec3 halfway_direction = normalize(light_direction + view_direction);
  float lambertian = dot(light_direction, normal_worldspace);
  float specular = 0.0;
  if (lambertian > 0.0) {
    float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, material.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (lambertian * material.diffuse * surfaceColor + specular * floatColors_normalize(material.specularColor)) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (material.unlit) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  vec3 view_direction = normalize(cameraPosition - position_worldspace);
  lightColor = material.ambient * surfaceColor * lighting.ambientColor;

  for (int i = 0; i < lighting.pointLightCount; i++) {
    PointLight pointLight = lighting_getPointLight(i);
    vec3 light_position_worldspace = pointLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getPointLightAttenuation(pointLight, distance(light_position_worldspace, position_worldspace));
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.spotLightCount; i++) {
    SpotLight spotLight = lighting_getSpotLight(i);
    vec3 light_position_worldspace = spotLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, spotLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.directionalLightCount; i++) {
    DirectionalLight directionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  
  return lightColor;
}
`;var Ty=`struct phongMaterialUniforms {
  unlit: u32,
  ambient: f32,
  diffuse: f32,
  shininess: f32,
  specularColor: vec3<f32>,
};

@group(3) @binding(auto) var<uniform> phongMaterial : phongMaterialUniforms;

fn lighting_getLightColor(surfaceColor: vec3<f32>, light_direction: vec3<f32>, view_direction: vec3<f32>, normal_worldspace: vec3<f32>, color: vec3<f32>) -> vec3<f32> {
  let halfway_direction: vec3<f32> = normalize(light_direction + view_direction);
  var lambertian: f32 = dot(light_direction, normal_worldspace);
  var specular: f32 = 0.0;
  if (lambertian > 0.0) {
    let specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, phongMaterial.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (
    lambertian * phongMaterial.diffuse * surfaceColor +
    specular * floatColors_normalize(phongMaterial.specularColor)
  ) * color;
}

fn lighting_getLightColor2(surfaceColor: vec3<f32>, cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32> {
  var lightColor: vec3<f32> = surfaceColor;

  if (phongMaterial.unlit != 0u) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  let view_direction: vec3<f32> = normalize(cameraPosition - position_worldspace);
  lightColor = phongMaterial.ambient * surfaceColor * lighting.ambientColor;

  for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
    let pointLight: PointLight = lighting_getPointLight(i);
    let light_position_worldspace: vec3<f32> = pointLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getPointLightAttenuation(
      pointLight,
      distance(light_position_worldspace, position_worldspace)
    );
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      pointLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
    let spotLight: SpotLight = lighting_getSpotLight(i);
    let light_position_worldspace: vec3<f32> = spotLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      spotLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
    let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }  
  
  return lightColor;
}

fn lighting_getSpecularLightColor(cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32>{
  var lightColor = vec3<f32>(0, 0, 0);
  let surfaceColor = vec3<f32>(0, 0, 0);

  if (lighting.enabled != 0) {
    let view_direction = normalize(cameraPosition - position_worldspace);

    for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
      let pointLight: PointLight = lighting_getPointLight(i);
      let light_position_worldspace: vec3<f32> = pointLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getPointLightAttenuation(
        pointLight,
        distance(light_position_worldspace, position_worldspace)
      );
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        pointLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
      let spotLight: SpotLight = lighting_getSpotLight(i);
      let light_position_worldspace: vec3<f32> = spotLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        spotLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
        let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
        lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}
`;var L3=[38.25,38.25,38.25],wi={props:{},name:"gouraudMaterial",bindingLayout:[{name:"gouraudMaterial",group:3}],vs:xy.replace("phongMaterial","gouraudMaterial"),fs:yy.replace("phongMaterial","gouraudMaterial"),source:Ty.replaceAll("phongMaterial","gouraudMaterial"),defines:{LIGHTING_VERTEX:!0},dependencies:[cc,pA],uniformTypes:{unlit:"i32",ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:L3},getUniforms(t){return{...wi.defaultUniforms,...t}}};var Sy=`out vec3 pbr_vPosition;
out vec2 pbr_vUV0;
out vec2 pbr_vUV1;

#ifdef HAS_NORMALS
# ifdef HAS_TANGENTS
out mat3 pbr_vTBN;
# else
out vec3 pbr_vNormal;
# endif
#endif

void pbr_setPositionNormalTangentUV(
  vec4 position,
  vec4 normal,
  vec4 tangent,
  vec2 uv0,
  vec2 uv1
)
{
  vec4 pos = pbrProjection.modelMatrix * position;
  pbr_vPosition = vec3(pos.xyz) / pos.w;

#ifdef HAS_NORMALS
#ifdef HAS_TANGENTS
  vec3 normalW = normalize(vec3(pbrProjection.normalMatrix * vec4(normal.xyz, 0.0)));
  vec3 tangentW = normalize(vec3(pbrProjection.modelMatrix * vec4(tangent.xyz, 0.0)));
  vec3 bitangentW = cross(normalW, tangentW) * tangent.w;
  pbr_vTBN = mat3(tangentW, bitangentW, normalW);
#else // HAS_TANGENTS != 1
  pbr_vNormal = normalize(vec3(pbrProjection.modelMatrix * vec4(normal.xyz, 0.0)));
#endif
#endif

#ifdef HAS_UV
  pbr_vUV0 = uv0;
#else
  pbr_vUV0 = vec2(0.,0.);
#endif

  pbr_vUV1 = uv1;
}
`,Ey=`precision highp float;

layout(std140) uniform pbrMaterialUniforms {
  // Material is unlit
  bool unlit;

  // Base color map
  bool baseColorMapEnabled;
  vec4 baseColorFactor;

  bool normalMapEnabled;  
  float normalScale; // #ifdef HAS_NORMALMAP

  bool emissiveMapEnabled;
  vec3 emissiveFactor; // #ifdef HAS_EMISSIVEMAP

  vec2 metallicRoughnessValues;
  bool metallicRoughnessMapEnabled;

  bool occlusionMapEnabled;
  float occlusionStrength; // #ifdef HAS_OCCLUSIONMAP
  
  bool alphaCutoffEnabled;
  float alphaCutoff; // #ifdef ALPHA_CUTOFF

  vec3 specularColorFactor;
  float specularIntensityFactor;
  bool specularColorMapEnabled;
  bool specularIntensityMapEnabled;

  float ior;

  float transmissionFactor;
  bool transmissionMapEnabled;

  float thicknessFactor;
  float attenuationDistance;
  vec3 attenuationColor;

  float clearcoatFactor;
  float clearcoatRoughnessFactor;
  bool clearcoatMapEnabled;
  bool clearcoatRoughnessMapEnabled;

  vec3 sheenColorFactor;
  float sheenRoughnessFactor;
  bool sheenColorMapEnabled;
  bool sheenRoughnessMapEnabled;

  float iridescenceFactor;
  float iridescenceIor;
  vec2 iridescenceThicknessRange;
  bool iridescenceMapEnabled;

  float anisotropyStrength;
  float anisotropyRotation;
  vec2 anisotropyDirection;
  bool anisotropyMapEnabled;

  float emissiveStrength;
  
  // IBL
  bool IBLenabled;
  vec2 scaleIBLAmbient; // #ifdef USE_IBL
  
  // debugging flags used for shader output of intermediate PBR variables
  // #ifdef PBR_DEBUG
  vec4 scaleDiffBaseMR;
  vec4 scaleFGDSpec;
  // #endif

  int baseColorUVSet;
  mat3 baseColorUVTransform;
  int metallicRoughnessUVSet;
  mat3 metallicRoughnessUVTransform;
  int normalUVSet;
  mat3 normalUVTransform;
  int occlusionUVSet;
  mat3 occlusionUVTransform;
  int emissiveUVSet;
  mat3 emissiveUVTransform;
  int specularColorUVSet;
  mat3 specularColorUVTransform;
  int specularIntensityUVSet;
  mat3 specularIntensityUVTransform;
  int transmissionUVSet;
  mat3 transmissionUVTransform;
  int thicknessUVSet;
  mat3 thicknessUVTransform;
  int clearcoatUVSet;
  mat3 clearcoatUVTransform;
  int clearcoatRoughnessUVSet;
  mat3 clearcoatRoughnessUVTransform;
  int clearcoatNormalUVSet;
  mat3 clearcoatNormalUVTransform;
  int sheenColorUVSet;
  mat3 sheenColorUVTransform;
  int sheenRoughnessUVSet;
  mat3 sheenRoughnessUVTransform;
  int iridescenceUVSet;
  mat3 iridescenceUVTransform;
  int iridescenceThicknessUVSet;
  mat3 iridescenceThicknessUVTransform;
  int anisotropyUVSet;
  mat3 anisotropyUVTransform;
} pbrMaterial;

// Samplers
#ifdef HAS_BASECOLORMAP
uniform sampler2D pbr_baseColorSampler;
#endif
#ifdef HAS_NORMALMAP
uniform sampler2D pbr_normalSampler;
#endif
#ifdef HAS_EMISSIVEMAP
uniform sampler2D pbr_emissiveSampler;
#endif
#ifdef HAS_METALROUGHNESSMAP
uniform sampler2D pbr_metallicRoughnessSampler;
#endif
#ifdef HAS_OCCLUSIONMAP
uniform sampler2D pbr_occlusionSampler;
#endif
#ifdef HAS_SPECULARCOLORMAP
uniform sampler2D pbr_specularColorSampler;
#endif
#ifdef HAS_SPECULARINTENSITYMAP
uniform sampler2D pbr_specularIntensitySampler;
#endif
#ifdef HAS_TRANSMISSIONMAP
uniform sampler2D pbr_transmissionSampler;
#endif
#ifdef HAS_THICKNESSMAP
uniform sampler2D pbr_thicknessSampler;
#endif
#ifdef HAS_CLEARCOATMAP
uniform sampler2D pbr_clearcoatSampler;
#endif
#ifdef HAS_CLEARCOATROUGHNESSMAP
uniform sampler2D pbr_clearcoatRoughnessSampler;
#endif
#ifdef HAS_CLEARCOATNORMALMAP
uniform sampler2D pbr_clearcoatNormalSampler;
#endif
#ifdef HAS_SHEENCOLORMAP
uniform sampler2D pbr_sheenColorSampler;
#endif
#ifdef HAS_SHEENROUGHNESSMAP
uniform sampler2D pbr_sheenRoughnessSampler;
#endif
#ifdef HAS_IRIDESCENCEMAP
uniform sampler2D pbr_iridescenceSampler;
#endif
#ifdef HAS_IRIDESCENCETHICKNESSMAP
uniform sampler2D pbr_iridescenceThicknessSampler;
#endif
#ifdef HAS_ANISOTROPYMAP
uniform sampler2D pbr_anisotropySampler;
#endif
// Inputs from vertex shader

in vec3 pbr_vPosition;
in vec2 pbr_vUV0;
in vec2 pbr_vUV1;

#ifdef HAS_NORMALS
#ifdef HAS_TANGENTS
in mat3 pbr_vTBN;
#else
in vec3 pbr_vNormal;
#endif
#endif

// Encapsulate the various inputs used by the various functions in the shading equation
// We store values in this struct to simplify the integration of alternative implementations
// of the shading terms, outlined in the Readme.MD Appendix.
struct PBRInfo {
  float NdotL;                  // cos angle between normal and light direction
  float NdotV;                  // cos angle between normal and view direction
  float NdotH;                  // cos angle between normal and half vector
  float LdotH;                  // cos angle between light direction and half vector
  float VdotH;                  // cos angle between view direction and half vector
  float perceptualRoughness;    // roughness value, as authored by the model creator (input to shader)
  float metalness;              // metallic value at the surface
  vec3 reflectance0;            // full reflectance color (normal incidence angle)
  vec3 reflectance90;           // reflectance color at grazing angle
  float alphaRoughness;         // roughness mapped to a more linear change in the roughness (proposed by [2])
  vec3 diffuseColor;            // color contribution from diffuse lighting
  vec3 specularColor;           // color contribution from specular lighting
  vec3 n;                       // normal at surface point
  vec3 v;                       // vector from surface point to camera
};

const float M_PI = 3.141592653589793;
const float c_MinRoughness = 0.04;

vec3 calculateFinalColor(PBRInfo pbrInfo, vec3 lightColor);

vec4 SRGBtoLINEAR(vec4 srgbIn)
{
#ifdef MANUAL_SRGB
#ifdef SRGB_FAST_APPROXIMATION
  vec3 linOut = pow(srgbIn.xyz,vec3(2.2));
#else // SRGB_FAST_APPROXIMATION
  vec3 bLess = step(vec3(0.04045),srgbIn.xyz);
  vec3 linOut = mix( srgbIn.xyz/vec3(12.92), pow((srgbIn.xyz+vec3(0.055))/vec3(1.055),vec3(2.4)), bLess );
#endif //SRGB_FAST_APPROXIMATION
  return vec4(linOut,srgbIn.w);;
#else //MANUAL_SRGB
  return srgbIn;
#endif //MANUAL_SRGB
}

vec2 getMaterialUV(int uvSet, mat3 uvTransform)
{
  vec2 baseUV = uvSet == 1 ? pbr_vUV1 : pbr_vUV0;
  return (uvTransform * vec3(baseUV, 1.0)).xy;
}

// Build the tangent basis from interpolated attributes or screen-space derivatives.
mat3 getTBN(vec2 uv)
{
#ifndef HAS_TANGENTS
  vec3 pos_dx = dFdx(pbr_vPosition);
  vec3 pos_dy = dFdy(pbr_vPosition);
  vec3 tex_dx = dFdx(vec3(uv, 0.0));
  vec3 tex_dy = dFdy(vec3(uv, 0.0));
  vec3 t = (tex_dy.t * pos_dx - tex_dx.t * pos_dy) / (tex_dx.s * tex_dy.t - tex_dy.s * tex_dx.t);

#ifdef HAS_NORMALS
  vec3 ng = normalize(pbr_vNormal);
#else
  vec3 ng = cross(pos_dx, pos_dy);
#endif

  t = normalize(t - ng * dot(ng, t));
  vec3 b = normalize(cross(ng, t));
  mat3 tbn = mat3(t, b, ng);
#else // HAS_TANGENTS
  mat3 tbn = pbr_vTBN;
#endif

  return tbn;
}

// Find the normal for this fragment, pulling either from a predefined normal map
// or from the interpolated mesh normal and tangent attributes.
vec3 getMappedNormal(sampler2D normalSampler, mat3 tbn, float normalScale, vec2 uv)
{
  vec3 n = texture(normalSampler, uv).rgb;
  return normalize(tbn * ((2.0 * n - 1.0) * vec3(normalScale, normalScale, 1.0)));
}

vec3 getNormal(mat3 tbn, vec2 uv)
{
#ifdef HAS_NORMALMAP
  vec3 n = getMappedNormal(pbr_normalSampler, tbn, pbrMaterial.normalScale, uv);
#else
  // The tbn matrix is linearly interpolated, so we need to re-normalize
  vec3 n = normalize(tbn[2].xyz);
#endif

  return n;
}

vec3 getClearcoatNormal(mat3 tbn, vec3 baseNormal, vec2 uv)
{
#ifdef HAS_CLEARCOATNORMALMAP
  return getMappedNormal(pbr_clearcoatNormalSampler, tbn, 1.0, uv);
#else
  return baseNormal;
#endif
}

// Calculation of the lighting contribution from an optional Image Based Light source.
// Precomputed Environment Maps are required uniform inputs and are computed as outlined in [1].
// See our README.md on Environment Maps [3] for additional discussion.
#ifdef USE_IBL
vec3 getIBLContribution(PBRInfo pbrInfo, vec3 n, vec3 reflection)
{
  float mipCount = 9.0; // resolution of 512x512
  float lod = (pbrInfo.perceptualRoughness * mipCount);
  // retrieve a scale and bias to F0. See [1], Figure 3
  vec3 brdf = SRGBtoLINEAR(texture(pbr_brdfLUT,
    vec2(pbrInfo.NdotV, 1.0 - pbrInfo.perceptualRoughness))).rgb;
  vec3 diffuseLight = SRGBtoLINEAR(texture(pbr_diffuseEnvSampler, n)).rgb;

#ifdef USE_TEX_LOD
  vec3 specularLight = SRGBtoLINEAR(texture(pbr_specularEnvSampler, reflection, lod)).rgb;
#else
  vec3 specularLight = SRGBtoLINEAR(texture(pbr_specularEnvSampler, reflection)).rgb;
#endif

  vec3 diffuse = diffuseLight * pbrInfo.diffuseColor;
  vec3 specular = specularLight * (pbrInfo.specularColor * brdf.x + brdf.y);

  // For presentation, this allows us to disable IBL terms
  diffuse *= pbrMaterial.scaleIBLAmbient.x;
  specular *= pbrMaterial.scaleIBLAmbient.y;

  return diffuse + specular;
}
#endif

// Basic Lambertian diffuse
// Implementation from Lambert's Photometria https://archive.org/details/lambertsphotome00lambgoog
// See also [1], Equation 1
vec3 diffuse(PBRInfo pbrInfo)
{
  return pbrInfo.diffuseColor / M_PI;
}

// The following equation models the Fresnel reflectance term of the spec equation (aka F())
// Implementation of fresnel from [4], Equation 15
vec3 specularReflection(PBRInfo pbrInfo)
{
  return pbrInfo.reflectance0 +
    (pbrInfo.reflectance90 - pbrInfo.reflectance0) *
    pow(clamp(1.0 - pbrInfo.VdotH, 0.0, 1.0), 5.0);
}

// This calculates the specular geometric attenuation (aka G()),
// where rougher material will reflect less light back to the viewer.
// This implementation is based on [1] Equation 4, and we adopt their modifications to
// alphaRoughness as input as originally proposed in [2].
float geometricOcclusion(PBRInfo pbrInfo)
{
  float NdotL = pbrInfo.NdotL;
  float NdotV = pbrInfo.NdotV;
  float r = pbrInfo.alphaRoughness;

  float attenuationL = 2.0 * NdotL / (NdotL + sqrt(r * r + (1.0 - r * r) * (NdotL * NdotL)));
  float attenuationV = 2.0 * NdotV / (NdotV + sqrt(r * r + (1.0 - r * r) * (NdotV * NdotV)));
  return attenuationL * attenuationV;
}

// The following equation(s) model the distribution of microfacet normals across
// the area being drawn (aka D())
// Implementation from "Average Irregularity Representation of a Roughened Surface
// for Ray Reflection" by T. S. Trowbridge, and K. P. Reitz
// Follows the distribution function recommended in the SIGGRAPH 2013 course notes
// from EPIC Games [1], Equation 3.
float microfacetDistribution(PBRInfo pbrInfo)
{
  float roughnessSq = pbrInfo.alphaRoughness * pbrInfo.alphaRoughness;
  float f = (pbrInfo.NdotH * roughnessSq - pbrInfo.NdotH) * pbrInfo.NdotH + 1.0;
  return roughnessSq / (M_PI * f * f);
}

float maxComponent(vec3 value)
{
  return max(max(value.r, value.g), value.b);
}

float getDielectricF0(float ior)
{
  float clampedIor = max(ior, 1.0);
  float ratio = (clampedIor - 1.0) / (clampedIor + 1.0);
  return ratio * ratio;
}

vec2 normalizeDirection(vec2 direction)
{
  float directionLength = length(direction);
  return directionLength > 0.0001 ? direction / directionLength : vec2(1.0, 0.0);
}

vec2 rotateDirection(vec2 direction, float rotation)
{
  float s = sin(rotation);
  float c = cos(rotation);
  return vec2(direction.x * c - direction.y * s, direction.x * s + direction.y * c);
}

vec3 getIridescenceTint(float iridescence, float thickness, float NdotV)
{
  if (iridescence <= 0.0) {
    return vec3(1.0);
  }

  float phase = 0.015 * thickness * pbrMaterial.iridescenceIor + (1.0 - NdotV) * 6.0;
  vec3 thinFilmTint =
    0.5 + 0.5 * cos(vec3(phase, phase + 2.0943951, phase + 4.1887902));
  return mix(vec3(1.0), thinFilmTint, iridescence);
}

vec3 getVolumeAttenuation(float thickness)
{
  if (thickness <= 0.0) {
    return vec3(1.0);
  }

  vec3 attenuationCoefficient =
    -log(max(pbrMaterial.attenuationColor, vec3(0.0001))) /
    max(pbrMaterial.attenuationDistance, 0.0001);
  return exp(-attenuationCoefficient * thickness);
}

PBRInfo createClearcoatPBRInfo(PBRInfo basePBRInfo, vec3 clearcoatNormal, float clearcoatRoughness)
{
  float perceptualRoughness = clamp(clearcoatRoughness, c_MinRoughness, 1.0);
  float alphaRoughness = perceptualRoughness * perceptualRoughness;
  float NdotV = clamp(abs(dot(clearcoatNormal, basePBRInfo.v)), 0.001, 1.0);

  return PBRInfo(
    basePBRInfo.NdotL,
    NdotV,
    basePBRInfo.NdotH,
    basePBRInfo.LdotH,
    basePBRInfo.VdotH,
    perceptualRoughness,
    0.0,
    vec3(0.04),
    vec3(1.0),
    alphaRoughness,
    vec3(0.0),
    vec3(0.04),
    clearcoatNormal,
    basePBRInfo.v
  );
}

vec3 calculateClearcoatContribution(
  PBRInfo pbrInfo,
  vec3 lightColor,
  vec3 clearcoatNormal,
  float clearcoatFactor,
  float clearcoatRoughness
) {
  if (clearcoatFactor <= 0.0) {
    return vec3(0.0);
  }

  PBRInfo clearcoatPBRInfo = createClearcoatPBRInfo(pbrInfo, clearcoatNormal, clearcoatRoughness);
  return calculateFinalColor(clearcoatPBRInfo, lightColor) * clearcoatFactor;
}

#ifdef USE_IBL
vec3 calculateClearcoatIBLContribution(
  PBRInfo pbrInfo,
  vec3 clearcoatNormal,
  vec3 reflection,
  float clearcoatFactor,
  float clearcoatRoughness
) {
  if (clearcoatFactor <= 0.0) {
    return vec3(0.0);
  }

  PBRInfo clearcoatPBRInfo = createClearcoatPBRInfo(pbrInfo, clearcoatNormal, clearcoatRoughness);
  return getIBLContribution(clearcoatPBRInfo, clearcoatNormal, reflection) * clearcoatFactor;
}
#endif

vec3 calculateSheenContribution(
  PBRInfo pbrInfo,
  vec3 lightColor,
  vec3 sheenColor,
  float sheenRoughness
) {
  if (maxComponent(sheenColor) <= 0.0) {
    return vec3(0.0);
  }

  float sheenFresnel = pow(clamp(1.0 - pbrInfo.VdotH, 0.0, 1.0), 5.0);
  float sheenVisibility = mix(1.0, pbrInfo.NdotL * pbrInfo.NdotV, sheenRoughness);
  return pbrInfo.NdotL *
    lightColor *
    sheenColor *
    (0.25 + 0.75 * sheenFresnel) *
    sheenVisibility *
    (1.0 - pbrInfo.metalness);
}

float calculateAnisotropyBoost(
  PBRInfo pbrInfo,
  vec3 anisotropyTangent,
  float anisotropyStrength
) {
  if (anisotropyStrength <= 0.0) {
    return 1.0;
  }

  vec3 anisotropyBitangent = normalize(cross(pbrInfo.n, anisotropyTangent));
  float bitangentViewAlignment = abs(dot(pbrInfo.v, anisotropyBitangent));
  return mix(1.0, 0.65 + 0.7 * bitangentViewAlignment, anisotropyStrength);
}

vec3 calculateMaterialLightColor(
  PBRInfo pbrInfo,
  vec3 lightColor,
  vec3 clearcoatNormal,
  float clearcoatFactor,
  float clearcoatRoughness,
  vec3 sheenColor,
  float sheenRoughness,
  vec3 anisotropyTangent,
  float anisotropyStrength
) {
  float anisotropyBoost = calculateAnisotropyBoost(pbrInfo, anisotropyTangent, anisotropyStrength);
  vec3 color = calculateFinalColor(pbrInfo, lightColor) * anisotropyBoost;
  color += calculateClearcoatContribution(
    pbrInfo,
    lightColor,
    clearcoatNormal,
    clearcoatFactor,
    clearcoatRoughness
  );
  color += calculateSheenContribution(pbrInfo, lightColor, sheenColor, sheenRoughness);
  return color;
}

void PBRInfo_setAmbientLight(inout PBRInfo pbrInfo) {
  pbrInfo.NdotL = 1.0;
  pbrInfo.NdotH = 0.0;
  pbrInfo.LdotH = 0.0;
  pbrInfo.VdotH = 1.0;
}

void PBRInfo_setDirectionalLight(inout PBRInfo pbrInfo, vec3 lightDirection) {
  vec3 n = pbrInfo.n;
  vec3 v = pbrInfo.v;
  vec3 l = normalize(lightDirection);             // Vector from surface point to light
  vec3 h = normalize(l+v);                        // Half vector between both l and v

  pbrInfo.NdotL = clamp(dot(n, l), 0.001, 1.0);
  pbrInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
  pbrInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
  pbrInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
}

void PBRInfo_setPointLight(inout PBRInfo pbrInfo, PointLight pointLight) {
  vec3 light_direction = normalize(pointLight.position - pbr_vPosition);
  PBRInfo_setDirectionalLight(pbrInfo, light_direction);
}

void PBRInfo_setSpotLight(inout PBRInfo pbrInfo, SpotLight spotLight) {
  vec3 light_direction = normalize(spotLight.position - pbr_vPosition);
  PBRInfo_setDirectionalLight(pbrInfo, light_direction);
}

vec3 calculateFinalColor(PBRInfo pbrInfo, vec3 lightColor) {
  // Calculate the shading terms for the microfacet specular shading model
  vec3 F = specularReflection(pbrInfo);
  float G = geometricOcclusion(pbrInfo);
  float D = microfacetDistribution(pbrInfo);

  // Calculation of analytical lighting contribution
  vec3 diffuseContrib = (1.0 - F) * diffuse(pbrInfo);
  vec3 specContrib = F * G * D / (4.0 * pbrInfo.NdotL * pbrInfo.NdotV);
  // Obtain final intensity as reflectance (BRDF) scaled by the energy of the light (cosine law)
  return pbrInfo.NdotL * lightColor * (diffuseContrib + specContrib);
}

vec4 pbr_filterColor(vec4 colorUnused)
{
  vec2 baseColorUV = getMaterialUV(pbrMaterial.baseColorUVSet, pbrMaterial.baseColorUVTransform);
  vec2 metallicRoughnessUV = getMaterialUV(
    pbrMaterial.metallicRoughnessUVSet,
    pbrMaterial.metallicRoughnessUVTransform
  );
  vec2 normalUV = getMaterialUV(pbrMaterial.normalUVSet, pbrMaterial.normalUVTransform);
  vec2 occlusionUV = getMaterialUV(pbrMaterial.occlusionUVSet, pbrMaterial.occlusionUVTransform);
  vec2 emissiveUV = getMaterialUV(pbrMaterial.emissiveUVSet, pbrMaterial.emissiveUVTransform);
  vec2 specularColorUV = getMaterialUV(
    pbrMaterial.specularColorUVSet,
    pbrMaterial.specularColorUVTransform
  );
  vec2 specularIntensityUV = getMaterialUV(
    pbrMaterial.specularIntensityUVSet,
    pbrMaterial.specularIntensityUVTransform
  );
  vec2 transmissionUV = getMaterialUV(
    pbrMaterial.transmissionUVSet,
    pbrMaterial.transmissionUVTransform
  );
  vec2 thicknessUV = getMaterialUV(pbrMaterial.thicknessUVSet, pbrMaterial.thicknessUVTransform);
  vec2 clearcoatUV = getMaterialUV(pbrMaterial.clearcoatUVSet, pbrMaterial.clearcoatUVTransform);
  vec2 clearcoatRoughnessUV = getMaterialUV(
    pbrMaterial.clearcoatRoughnessUVSet,
    pbrMaterial.clearcoatRoughnessUVTransform
  );
  vec2 clearcoatNormalUV = getMaterialUV(
    pbrMaterial.clearcoatNormalUVSet,
    pbrMaterial.clearcoatNormalUVTransform
  );
  vec2 sheenColorUV = getMaterialUV(
    pbrMaterial.sheenColorUVSet,
    pbrMaterial.sheenColorUVTransform
  );
  vec2 sheenRoughnessUV = getMaterialUV(
    pbrMaterial.sheenRoughnessUVSet,
    pbrMaterial.sheenRoughnessUVTransform
  );
  vec2 iridescenceUV = getMaterialUV(
    pbrMaterial.iridescenceUVSet,
    pbrMaterial.iridescenceUVTransform
  );
  vec2 iridescenceThicknessUV = getMaterialUV(
    pbrMaterial.iridescenceThicknessUVSet,
    pbrMaterial.iridescenceThicknessUVTransform
  );
  vec2 anisotropyUV = getMaterialUV(
    pbrMaterial.anisotropyUVSet,
    pbrMaterial.anisotropyUVTransform
  );

  // The albedo may be defined from a base texture or a flat color
#ifdef HAS_BASECOLORMAP
  vec4 baseColor =
    SRGBtoLINEAR(texture(pbr_baseColorSampler, baseColorUV)) * pbrMaterial.baseColorFactor;
#else
  vec4 baseColor = pbrMaterial.baseColorFactor;
#endif

#ifdef ALPHA_CUTOFF
  if (baseColor.a < pbrMaterial.alphaCutoff) {
    discard;
  }
#endif

  vec3 color = vec3(0, 0, 0);

  float transmission = 0.0;

  if(pbrMaterial.unlit){
    color.rgb = baseColor.rgb;
  }
  else{
    // Metallic and Roughness material properties are packed together
    // In glTF, these factors can be specified by fixed scalar values
    // or from a metallic-roughness map
    float perceptualRoughness = pbrMaterial.metallicRoughnessValues.y;
    float metallic = pbrMaterial.metallicRoughnessValues.x;
#ifdef HAS_METALROUGHNESSMAP
    // Roughness is stored in the 'g' channel, metallic is stored in the 'b' channel.
    // This layout intentionally reserves the 'r' channel for (optional) occlusion map data
    vec4 mrSample = texture(pbr_metallicRoughnessSampler, metallicRoughnessUV);
    perceptualRoughness = mrSample.g * perceptualRoughness;
    metallic = mrSample.b * metallic;
#endif
    perceptualRoughness = clamp(perceptualRoughness, c_MinRoughness, 1.0);
    metallic = clamp(metallic, 0.0, 1.0);
    mat3 tbn = getTBN(normalUV);
    vec3 n = getNormal(tbn, normalUV);                          // normal at surface point
    vec3 v = normalize(pbrProjection.camera - pbr_vPosition);  // Vector from surface point to camera
    float NdotV = clamp(abs(dot(n, v)), 0.001, 1.0);
#ifdef USE_MATERIAL_EXTENSIONS
    bool useExtendedPBR =
      pbrMaterial.specularColorMapEnabled ||
      pbrMaterial.specularIntensityMapEnabled ||
      abs(pbrMaterial.specularIntensityFactor - 1.0) > 0.0001 ||
      maxComponent(abs(pbrMaterial.specularColorFactor - vec3(1.0))) > 0.0001 ||
      abs(pbrMaterial.ior - 1.5) > 0.0001 ||
      pbrMaterial.transmissionMapEnabled ||
      pbrMaterial.transmissionFactor > 0.0001 ||
      pbrMaterial.clearcoatMapEnabled ||
      pbrMaterial.clearcoatRoughnessMapEnabled ||
      pbrMaterial.clearcoatFactor > 0.0001 ||
      pbrMaterial.clearcoatRoughnessFactor > 0.0001 ||
      pbrMaterial.sheenColorMapEnabled ||
      pbrMaterial.sheenRoughnessMapEnabled ||
      maxComponent(pbrMaterial.sheenColorFactor) > 0.0001 ||
      pbrMaterial.sheenRoughnessFactor > 0.0001 ||
      pbrMaterial.iridescenceMapEnabled ||
      pbrMaterial.iridescenceFactor > 0.0001 ||
      abs(pbrMaterial.iridescenceIor - 1.3) > 0.0001 ||
      abs(pbrMaterial.iridescenceThicknessRange.x - 100.0) > 0.0001 ||
      abs(pbrMaterial.iridescenceThicknessRange.y - 400.0) > 0.0001 ||
      pbrMaterial.anisotropyMapEnabled ||
      pbrMaterial.anisotropyStrength > 0.0001 ||
      abs(pbrMaterial.anisotropyRotation) > 0.0001 ||
      length(pbrMaterial.anisotropyDirection - vec2(1.0, 0.0)) > 0.0001;
#else
    bool useExtendedPBR = false;
#endif

    if (!useExtendedPBR) {
      // Keep the baseline metallic-roughness implementation byte-for-byte equivalent in behavior.
      float alphaRoughness = perceptualRoughness * perceptualRoughness;

      vec3 f0 = vec3(0.04);
      vec3 diffuseColor = baseColor.rgb * (vec3(1.0) - f0);
      diffuseColor *= 1.0 - metallic;
      vec3 specularColor = mix(f0, baseColor.rgb, metallic);

      float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);
      float reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);
      vec3 specularEnvironmentR0 = specularColor.rgb;
      vec3 specularEnvironmentR90 = vec3(1.0, 1.0, 1.0) * reflectance90;
      vec3 reflection = -normalize(reflect(v, n));

      PBRInfo pbrInfo = PBRInfo(
        0.0, // NdotL
        NdotV,
        0.0, // NdotH
        0.0, // LdotH
        0.0, // VdotH
        perceptualRoughness,
        metallic,
        specularEnvironmentR0,
        specularEnvironmentR90,
        alphaRoughness,
        diffuseColor,
        specularColor,
        n,
        v
      );

#ifdef USE_LIGHTS
      PBRInfo_setAmbientLight(pbrInfo);
      color += calculateFinalColor(pbrInfo, lighting.ambientColor);

      for(int i = 0; i < lighting.directionalLightCount; i++) {
        if (i < lighting.directionalLightCount) {
          PBRInfo_setDirectionalLight(pbrInfo, lighting_getDirectionalLight(i).direction);
          color += calculateFinalColor(pbrInfo, lighting_getDirectionalLight(i).color);
        }
      }

      for(int i = 0; i < lighting.pointLightCount; i++) {
        if (i < lighting.pointLightCount) {
          PBRInfo_setPointLight(pbrInfo, lighting_getPointLight(i));
          float attenuation = getPointLightAttenuation(lighting_getPointLight(i), distance(lighting_getPointLight(i).position, pbr_vPosition));
          color += calculateFinalColor(pbrInfo, lighting_getPointLight(i).color / attenuation);
        }
      }

      for(int i = 0; i < lighting.spotLightCount; i++) {
        if (i < lighting.spotLightCount) {
          PBRInfo_setSpotLight(pbrInfo, lighting_getSpotLight(i));
          float attenuation = getSpotLightAttenuation(lighting_getSpotLight(i), pbr_vPosition);
          color += calculateFinalColor(pbrInfo, lighting_getSpotLight(i).color / attenuation);
        }
      }
#endif

#ifdef USE_IBL
      if (pbrMaterial.IBLenabled) {
        color += getIBLContribution(pbrInfo, n, reflection);
      }
#endif

#ifdef HAS_OCCLUSIONMAP
      if (pbrMaterial.occlusionMapEnabled) {
        float ao = texture(pbr_occlusionSampler, occlusionUV).r;
        color = mix(color, color * ao, pbrMaterial.occlusionStrength);
      }
#endif

      vec3 emissive = pbrMaterial.emissiveFactor;
#ifdef HAS_EMISSIVEMAP
      if (pbrMaterial.emissiveMapEnabled) {
        emissive *= SRGBtoLINEAR(texture(pbr_emissiveSampler, emissiveUV)).rgb;
      }
#endif
      color += emissive * pbrMaterial.emissiveStrength;

#ifdef PBR_DEBUG
      color = mix(color, baseColor.rgb, pbrMaterial.scaleDiffBaseMR.y);
      color = mix(color, vec3(metallic), pbrMaterial.scaleDiffBaseMR.z);
      color = mix(color, vec3(perceptualRoughness), pbrMaterial.scaleDiffBaseMR.w);
#endif

      return vec4(pow(color, vec3(1.0 / 2.2)), baseColor.a);
    }

    float specularIntensity = pbrMaterial.specularIntensityFactor;
#ifdef HAS_SPECULARINTENSITYMAP
    if (pbrMaterial.specularIntensityMapEnabled) {
      specularIntensity *= texture(pbr_specularIntensitySampler, specularIntensityUV).a;
    }
#endif

    vec3 specularFactor = pbrMaterial.specularColorFactor;
#ifdef HAS_SPECULARCOLORMAP
    if (pbrMaterial.specularColorMapEnabled) {
      specularFactor *= SRGBtoLINEAR(texture(pbr_specularColorSampler, specularColorUV)).rgb;
    }
#endif

    transmission = pbrMaterial.transmissionFactor;
#ifdef HAS_TRANSMISSIONMAP
    if (pbrMaterial.transmissionMapEnabled) {
      transmission *= texture(pbr_transmissionSampler, transmissionUV).r;
    }
#endif
    transmission = clamp(transmission * (1.0 - metallic), 0.0, 1.0);
    float thickness = max(pbrMaterial.thicknessFactor, 0.0);
#ifdef HAS_THICKNESSMAP
    thickness *= texture(pbr_thicknessSampler, thicknessUV).g;
#endif

    float clearcoatFactor = pbrMaterial.clearcoatFactor;
    float clearcoatRoughness = pbrMaterial.clearcoatRoughnessFactor;
#ifdef HAS_CLEARCOATMAP
    if (pbrMaterial.clearcoatMapEnabled) {
      clearcoatFactor *= texture(pbr_clearcoatSampler, clearcoatUV).r;
    }
#endif
#ifdef HAS_CLEARCOATROUGHNESSMAP
    if (pbrMaterial.clearcoatRoughnessMapEnabled) {
      clearcoatRoughness *= texture(pbr_clearcoatRoughnessSampler, clearcoatRoughnessUV).g;
    }
#endif
    clearcoatFactor = clamp(clearcoatFactor, 0.0, 1.0);
    clearcoatRoughness = clamp(clearcoatRoughness, c_MinRoughness, 1.0);
    vec3 clearcoatNormal = getClearcoatNormal(getTBN(clearcoatNormalUV), n, clearcoatNormalUV);

    vec3 sheenColor = pbrMaterial.sheenColorFactor;
    float sheenRoughness = pbrMaterial.sheenRoughnessFactor;
#ifdef HAS_SHEENCOLORMAP
    if (pbrMaterial.sheenColorMapEnabled) {
      sheenColor *= SRGBtoLINEAR(texture(pbr_sheenColorSampler, sheenColorUV)).rgb;
    }
#endif
#ifdef HAS_SHEENROUGHNESSMAP
    if (pbrMaterial.sheenRoughnessMapEnabled) {
      sheenRoughness *= texture(pbr_sheenRoughnessSampler, sheenRoughnessUV).a;
    }
#endif
    sheenRoughness = clamp(sheenRoughness, c_MinRoughness, 1.0);

    float iridescence = pbrMaterial.iridescenceFactor;
#ifdef HAS_IRIDESCENCEMAP
    if (pbrMaterial.iridescenceMapEnabled) {
      iridescence *= texture(pbr_iridescenceSampler, iridescenceUV).r;
    }
#endif
    iridescence = clamp(iridescence, 0.0, 1.0);
    float iridescenceThickness = mix(
      pbrMaterial.iridescenceThicknessRange.x,
      pbrMaterial.iridescenceThicknessRange.y,
      0.5
    );
#ifdef HAS_IRIDESCENCETHICKNESSMAP
    iridescenceThickness = mix(
      pbrMaterial.iridescenceThicknessRange.x,
      pbrMaterial.iridescenceThicknessRange.y,
      texture(pbr_iridescenceThicknessSampler, iridescenceThicknessUV).g
    );
#endif

    float anisotropyStrength = clamp(pbrMaterial.anisotropyStrength, 0.0, 1.0);
    vec2 anisotropyDirection = normalizeDirection(pbrMaterial.anisotropyDirection);
#ifdef HAS_ANISOTROPYMAP
    if (pbrMaterial.anisotropyMapEnabled) {
      vec3 anisotropySample = texture(pbr_anisotropySampler, anisotropyUV).rgb;
      anisotropyStrength *= anisotropySample.b;
      vec2 mappedDirection = anisotropySample.rg * 2.0 - 1.0;
      if (length(mappedDirection) > 0.0001) {
        anisotropyDirection = normalize(mappedDirection);
      }
    }
#endif
    anisotropyDirection = rotateDirection(anisotropyDirection, pbrMaterial.anisotropyRotation);
    vec3 anisotropyTangent = normalize(tbn[0] * anisotropyDirection.x + tbn[1] * anisotropyDirection.y);
    if (length(anisotropyTangent) < 0.0001) {
      anisotropyTangent = normalize(tbn[0]);
    }
    float anisotropyViewAlignment = abs(dot(v, anisotropyTangent));
    perceptualRoughness = mix(
      perceptualRoughness,
      clamp(perceptualRoughness * (1.0 - 0.6 * anisotropyViewAlignment), c_MinRoughness, 1.0),
      anisotropyStrength
    );

    // Roughness is authored as perceptual roughness; as is convention,
    // convert to material roughness by squaring the perceptual roughness [2].
    float alphaRoughness = perceptualRoughness * perceptualRoughness;

    float dielectricF0 = getDielectricF0(pbrMaterial.ior);
    vec3 dielectricSpecularF0 = min(
      vec3(dielectricF0) * specularFactor * specularIntensity,
      vec3(1.0)
    );
    vec3 iridescenceTint = getIridescenceTint(iridescence, iridescenceThickness, NdotV);
    dielectricSpecularF0 = mix(
      dielectricSpecularF0,
      dielectricSpecularF0 * iridescenceTint,
      iridescence
    );
    vec3 diffuseColor = baseColor.rgb * (vec3(1.0) - dielectricSpecularF0);
    diffuseColor *= (1.0 - metallic) * (1.0 - transmission);
    vec3 specularColor = mix(dielectricSpecularF0, baseColor.rgb, metallic);

    float baseLayerEnergy = 1.0 - clearcoatFactor * 0.25;
    diffuseColor *= baseLayerEnergy;
    specularColor *= baseLayerEnergy;

    // Compute reflectance.
    float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);

    // For typical incident reflectance range (between 4% to 100%) set the grazing
    // reflectance to 100% for typical fresnel effect.
    // For very low reflectance range on highly diffuse objects (below 4%),
    // incrementally reduce grazing reflecance to 0%.
    float reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);
    vec3 specularEnvironmentR0 = specularColor.rgb;
    vec3 specularEnvironmentR90 = vec3(1.0, 1.0, 1.0) * reflectance90;
    vec3 reflection = -normalize(reflect(v, n));

    PBRInfo pbrInfo = PBRInfo(
      0.0, // NdotL
      NdotV,
      0.0, // NdotH
      0.0, // LdotH
      0.0, // VdotH
      perceptualRoughness,
      metallic,
      specularEnvironmentR0,
      specularEnvironmentR90,
      alphaRoughness,
      diffuseColor,
      specularColor,
      n,
      v
    );


#ifdef USE_LIGHTS
    // Apply ambient light
    PBRInfo_setAmbientLight(pbrInfo);
    color += calculateMaterialLightColor(
      pbrInfo,
      lighting.ambientColor,
      clearcoatNormal,
      clearcoatFactor,
      clearcoatRoughness,
      sheenColor,
      sheenRoughness,
      anisotropyTangent,
      anisotropyStrength
    );

    // Apply directional light
    for(int i = 0; i < lighting.directionalLightCount; i++) {
      if (i < lighting.directionalLightCount) {
        PBRInfo_setDirectionalLight(pbrInfo, lighting_getDirectionalLight(i).direction);
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getDirectionalLight(i).color,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
      }
    }

    // Apply point light
    for(int i = 0; i < lighting.pointLightCount; i++) {
      if (i < lighting.pointLightCount) {
        PBRInfo_setPointLight(pbrInfo, lighting_getPointLight(i));
        float attenuation = getPointLightAttenuation(lighting_getPointLight(i), distance(lighting_getPointLight(i).position, pbr_vPosition));
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getPointLight(i).color / attenuation,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
      }
    }

    for(int i = 0; i < lighting.spotLightCount; i++) {
      if (i < lighting.spotLightCount) {
        PBRInfo_setSpotLight(pbrInfo, lighting_getSpotLight(i));
        float attenuation = getSpotLightAttenuation(lighting_getSpotLight(i), pbr_vPosition);
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getSpotLight(i).color / attenuation,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
      }
    }
#endif

    // Calculate lighting contribution from image based lighting source (IBL)
#ifdef USE_IBL
    if (pbrMaterial.IBLenabled) {
      color += getIBLContribution(pbrInfo, n, reflection) *
        calculateAnisotropyBoost(pbrInfo, anisotropyTangent, anisotropyStrength);
      color += calculateClearcoatIBLContribution(
        pbrInfo,
        clearcoatNormal,
        -normalize(reflect(v, clearcoatNormal)),
        clearcoatFactor,
        clearcoatRoughness
      );
      color += sheenColor * pbrMaterial.scaleIBLAmbient.x * (1.0 - sheenRoughness) * 0.25;
    }
#endif

 // Apply optional PBR terms for additional (optional) shading
#ifdef HAS_OCCLUSIONMAP
    if (pbrMaterial.occlusionMapEnabled) {
      float ao = texture(pbr_occlusionSampler, occlusionUV).r;
      color = mix(color, color * ao, pbrMaterial.occlusionStrength);
    }
#endif

    vec3 emissive = pbrMaterial.emissiveFactor;
#ifdef HAS_EMISSIVEMAP
    if (pbrMaterial.emissiveMapEnabled) {
      emissive *= SRGBtoLINEAR(texture(pbr_emissiveSampler, emissiveUV)).rgb;
    }
#endif
    color += emissive * pbrMaterial.emissiveStrength;

    if (transmission > 0.0) {
      color = mix(color, color * getVolumeAttenuation(thickness), transmission);
    }

    // This section uses mix to override final color for reference app visualization
    // of various parameters in the lighting equation.
#ifdef PBR_DEBUG
    // TODO: Figure out how to debug multiple lights

    // color = mix(color, F, pbr_scaleFGDSpec.x);
    // color = mix(color, vec3(G), pbr_scaleFGDSpec.y);
    // color = mix(color, vec3(D), pbr_scaleFGDSpec.z);
    // color = mix(color, specContrib, pbr_scaleFGDSpec.w);

    // color = mix(color, diffuseContrib, pbr_scaleDiffBaseMR.x);
    color = mix(color, baseColor.rgb, pbrMaterial.scaleDiffBaseMR.y);
    color = mix(color, vec3(metallic), pbrMaterial.scaleDiffBaseMR.z);
    color = mix(color, vec3(perceptualRoughness), pbrMaterial.scaleDiffBaseMR.w);
#endif

  }

  float alpha = clamp(baseColor.a * (1.0 - transmission), 0.0, 1.0);
  return vec4(pow(color,vec3(1.0/2.2)), alpha);
}
`;var Cy=`struct PBRFragmentInputs {
  pbr_vPosition: vec3f,
  pbr_vUV0: vec2f,
  pbr_vUV1: vec2f,
  pbr_vTBN: mat3x3f,
  pbr_vNormal: vec3f
};

var<private> fragmentInputs: PBRFragmentInputs;

fn pbr_setPositionNormalTangentUV(
  position: vec4f,
  normal: vec4f,
  tangent: vec4f,
  uv0: vec2f,
  uv1: vec2f
)
{
  var pos: vec4f = pbrProjection.modelMatrix * position;
  fragmentInputs.pbr_vPosition = pos.xyz / pos.w;
  fragmentInputs.pbr_vNormal = vec3f(0.0, 0.0, 1.0);
  fragmentInputs.pbr_vTBN = mat3x3f(
    vec3f(1.0, 0.0, 0.0),
    vec3f(0.0, 1.0, 0.0),
    vec3f(0.0, 0.0, 1.0)
  );
  fragmentInputs.pbr_vUV0 = vec2f(0.0, 0.0);
  fragmentInputs.pbr_vUV1 = uv1;

#ifdef HAS_NORMALS
  let normalW: vec3f = normalize((pbrProjection.normalMatrix * vec4f(normal.xyz, 0.0)).xyz);
  fragmentInputs.pbr_vNormal = normalW;
#ifdef HAS_TANGENTS
  let tangentW: vec3f = normalize((pbrProjection.modelMatrix * vec4f(tangent.xyz, 0.0)).xyz);
  let bitangentW: vec3f = cross(normalW, tangentW) * tangent.w;
  fragmentInputs.pbr_vTBN = mat3x3f(tangentW, bitangentW, normalW);
#endif
#endif

#ifdef HAS_UV
  fragmentInputs.pbr_vUV0 = uv0;
#endif
}

struct pbrMaterialUniforms {
  // Material is unlit
  unlit: u32,

  // Base color map
  baseColorMapEnabled: u32,
  baseColorFactor: vec4f,

  normalMapEnabled : u32,
  normalScale: f32,  // #ifdef HAS_NORMALMAP

  emissiveMapEnabled: u32,
  emissiveFactor: vec3f, // #ifdef HAS_EMISSIVEMAP

  metallicRoughnessValues: vec2f,
  metallicRoughnessMapEnabled: u32,

  occlusionMapEnabled: i32,
  occlusionStrength: f32, // #ifdef HAS_OCCLUSIONMAP
  
  alphaCutoffEnabled: i32,
  alphaCutoff: f32, // #ifdef ALPHA_CUTOFF

  specularColorFactor: vec3f,
  specularIntensityFactor: f32,
  specularColorMapEnabled: i32,
  specularIntensityMapEnabled: i32,

  ior: f32,

  transmissionFactor: f32,
  transmissionMapEnabled: i32,

  thicknessFactor: f32,
  attenuationDistance: f32,
  attenuationColor: vec3f,

  clearcoatFactor: f32,
  clearcoatRoughnessFactor: f32,
  clearcoatMapEnabled: i32,
  clearcoatRoughnessMapEnabled: i32,

  sheenColorFactor: vec3f,
  sheenRoughnessFactor: f32,
  sheenColorMapEnabled: i32,
  sheenRoughnessMapEnabled: i32,

  iridescenceFactor: f32,
  iridescenceIor: f32,
  iridescenceThicknessRange: vec2f,
  iridescenceMapEnabled: i32,

  anisotropyStrength: f32,
  anisotropyRotation: f32,
  anisotropyDirection: vec2f,
  anisotropyMapEnabled: i32,

  emissiveStrength: f32,
  
  // IBL
  IBLenabled: i32,
  scaleIBLAmbient: vec2f, // #ifdef USE_IBL
  
  // debugging flags used for shader output of intermediate PBR variables
  // #ifdef PBR_DEBUG
  scaleDiffBaseMR: vec4f,
  scaleFGDSpec: vec4f,
  // #endif

  baseColorUVSet: i32,
  baseColorUVTransform: mat3x3f,
  metallicRoughnessUVSet: i32,
  metallicRoughnessUVTransform: mat3x3f,
  normalUVSet: i32,
  normalUVTransform: mat3x3f,
  occlusionUVSet: i32,
  occlusionUVTransform: mat3x3f,
  emissiveUVSet: i32,
  emissiveUVTransform: mat3x3f,
  specularColorUVSet: i32,
  specularColorUVTransform: mat3x3f,
  specularIntensityUVSet: i32,
  specularIntensityUVTransform: mat3x3f,
  transmissionUVSet: i32,
  transmissionUVTransform: mat3x3f,
  thicknessUVSet: i32,
  thicknessUVTransform: mat3x3f,
  clearcoatUVSet: i32,
  clearcoatUVTransform: mat3x3f,
  clearcoatRoughnessUVSet: i32,
  clearcoatRoughnessUVTransform: mat3x3f,
  clearcoatNormalUVSet: i32,
  clearcoatNormalUVTransform: mat3x3f,
  sheenColorUVSet: i32,
  sheenColorUVTransform: mat3x3f,
  sheenRoughnessUVSet: i32,
  sheenRoughnessUVTransform: mat3x3f,
  iridescenceUVSet: i32,
  iridescenceUVTransform: mat3x3f,
  iridescenceThicknessUVSet: i32,
  iridescenceThicknessUVTransform: mat3x3f,
  anisotropyUVSet: i32,
  anisotropyUVTransform: mat3x3f,
}

@group(3) @binding(auto) var<uniform> pbrMaterial : pbrMaterialUniforms;

// Samplers
#ifdef HAS_BASECOLORMAP
@group(3) @binding(auto) var pbr_baseColorSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_baseColorSamplerSampler: sampler;
#endif
#ifdef HAS_NORMALMAP
@group(3) @binding(auto) var pbr_normalSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_normalSamplerSampler: sampler;
#endif
#ifdef HAS_EMISSIVEMAP
@group(3) @binding(auto) var pbr_emissiveSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_emissiveSamplerSampler: sampler;
#endif
#ifdef HAS_METALROUGHNESSMAP
@group(3) @binding(auto) var pbr_metallicRoughnessSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_metallicRoughnessSamplerSampler: sampler;
#endif
#ifdef HAS_OCCLUSIONMAP
@group(3) @binding(auto) var pbr_occlusionSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_occlusionSamplerSampler: sampler;
#endif
#ifdef HAS_SPECULARCOLORMAP
@group(3) @binding(auto) var pbr_specularColorSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_specularColorSamplerSampler: sampler;
#endif
#ifdef HAS_SPECULARINTENSITYMAP
@group(3) @binding(auto) var pbr_specularIntensitySampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_specularIntensitySamplerSampler: sampler;
#endif
#ifdef HAS_TRANSMISSIONMAP
@group(3) @binding(auto) var pbr_transmissionSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_transmissionSamplerSampler: sampler;
#endif
#ifdef HAS_THICKNESSMAP
@group(3) @binding(auto) var pbr_thicknessSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_thicknessSamplerSampler: sampler;
#endif
#ifdef HAS_CLEARCOATMAP
@group(3) @binding(auto) var pbr_clearcoatSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_clearcoatSamplerSampler: sampler;
#endif
#ifdef HAS_CLEARCOATROUGHNESSMAP
@group(3) @binding(auto) var pbr_clearcoatRoughnessSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_clearcoatRoughnessSamplerSampler: sampler;
#endif
#ifdef HAS_CLEARCOATNORMALMAP
@group(3) @binding(auto) var pbr_clearcoatNormalSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_clearcoatNormalSamplerSampler: sampler;
#endif
#ifdef HAS_SHEENCOLORMAP
@group(3) @binding(auto) var pbr_sheenColorSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_sheenColorSamplerSampler: sampler;
#endif
#ifdef HAS_SHEENROUGHNESSMAP
@group(3) @binding(auto) var pbr_sheenRoughnessSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_sheenRoughnessSamplerSampler: sampler;
#endif
#ifdef HAS_IRIDESCENCEMAP
@group(3) @binding(auto) var pbr_iridescenceSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_iridescenceSamplerSampler: sampler;
#endif
#ifdef HAS_IRIDESCENCETHICKNESSMAP
@group(3) @binding(auto) var pbr_iridescenceThicknessSampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_iridescenceThicknessSamplerSampler: sampler;
#endif
#ifdef HAS_ANISOTROPYMAP
@group(3) @binding(auto) var pbr_anisotropySampler: texture_2d<f32>;
@group(3) @binding(auto) var pbr_anisotropySamplerSampler: sampler;
#endif
// Encapsulate the various inputs used by the various functions in the shading equation
// We store values in this struct to simplify the integration of alternative implementations
// of the shading terms, outlined in the Readme.MD Appendix.
struct PBRInfo {
  NdotL: f32,                  // cos angle between normal and light direction
  NdotV: f32,                  // cos angle between normal and view direction
  NdotH: f32,                  // cos angle between normal and half vector
  LdotH: f32,                  // cos angle between light direction and half vector
  VdotH: f32,                  // cos angle between view direction and half vector
  perceptualRoughness: f32,    // roughness value, as authored by the model creator (input to shader)
  metalness: f32,              // metallic value at the surface
  reflectance0: vec3f,            // full reflectance color (normal incidence angle)
  reflectance90: vec3f,           // reflectance color at grazing angle
  alphaRoughness: f32,         // roughness mapped to a more linear change in the roughness (proposed by [2])
  diffuseColor: vec3f,            // color contribution from diffuse lighting
  specularColor: vec3f,           // color contribution from specular lighting
  n: vec3f,                       // normal at surface point
  v: vec3f,                       // vector from surface point to camera
};

const M_PI = 3.141592653589793;
const c_MinRoughness = 0.04;

fn SRGBtoLINEAR(srgbIn: vec4f ) -> vec4f
{
  var linOut: vec3f = srgbIn.xyz;
#ifdef MANUAL_SRGB
  let bLess: vec3f = step(vec3f(0.04045), srgbIn.xyz);
  linOut = mix(
    srgbIn.xyz / vec3f(12.92),
    pow((srgbIn.xyz + vec3f(0.055)) / vec3f(1.055), vec3f(2.4)),
    bLess
  );
#ifdef SRGB_FAST_APPROXIMATION
  linOut = pow(srgbIn.xyz, vec3f(2.2));
#endif
#endif
  return vec4f(linOut, srgbIn.w);
}

fn getMaterialUV(uvSet: i32, uvTransform: mat3x3f) -> vec2f
{
  var baseUV = fragmentInputs.pbr_vUV0;
  if (uvSet == 1) {
    baseUV = fragmentInputs.pbr_vUV1;
  }
  return (uvTransform * vec3f(baseUV, 1.0)).xy;
}

// Build the tangent basis from interpolated attributes or screen-space derivatives.
fn getTBN(uv: vec2f) -> mat3x3f
{
  let pos_dx: vec3f = dpdx(fragmentInputs.pbr_vPosition);
  let pos_dy: vec3f = dpdy(fragmentInputs.pbr_vPosition);
  let tex_dx: vec3f = dpdx(vec3f(uv, 0.0));
  let tex_dy: vec3f = dpdy(vec3f(uv, 0.0));
  var t: vec3f = (tex_dy.y * pos_dx - tex_dx.y * pos_dy) / (tex_dx.x * tex_dy.y - tex_dy.x * tex_dx.y);

  var ng: vec3f = cross(pos_dx, pos_dy);
#ifdef HAS_NORMALS
  ng = normalize(fragmentInputs.pbr_vNormal);
#endif
  t = normalize(t - ng * dot(ng, t));
  var b: vec3f = normalize(cross(ng, t));
  var tbn: mat3x3f = mat3x3f(t, b, ng);
#ifdef HAS_TANGENTS
  tbn = fragmentInputs.pbr_vTBN;
#endif

  return tbn;
}

// Find the normal for this fragment, pulling either from a predefined normal map
// or from the interpolated mesh normal and tangent attributes.
fn getMappedNormal(
  normalSampler: texture_2d<f32>,
  normalSamplerBinding: sampler,
  tbn: mat3x3f,
  normalScale: f32,
  uv: vec2f
) -> vec3f
{
  let n = textureSample(normalSampler, normalSamplerBinding, uv).rgb;
  return normalize(tbn * ((2.0 * n - 1.0) * vec3f(normalScale, normalScale, 1.0)));
}

fn getNormal(tbn: mat3x3f, uv: vec2f) -> vec3f
{
  // The tbn matrix is linearly interpolated, so we need to re-normalize
  var n: vec3f = normalize(tbn[2].xyz);
#ifdef HAS_NORMALMAP
  n = getMappedNormal(
    pbr_normalSampler,
    pbr_normalSamplerSampler,
    tbn,
    pbrMaterial.normalScale,
    uv
  );
#endif

  return n;
}

fn getClearcoatNormal(tbn: mat3x3f, baseNormal: vec3f, uv: vec2f) -> vec3f
{
#ifdef HAS_CLEARCOATNORMALMAP
  return getMappedNormal(
    pbr_clearcoatNormalSampler,
    pbr_clearcoatNormalSamplerSampler,
    tbn,
    1.0,
    uv
  );
#else
  return baseNormal;
#endif
}

// Calculation of the lighting contribution from an optional Image Based Light source.
// Precomputed Environment Maps are required uniform inputs and are computed as outlined in [1].
// See our README.md on Environment Maps [3] for additional discussion.
#ifdef USE_IBL
fn getIBLContribution(pbrInfo: PBRInfo, n: vec3f, reflection: vec3f) -> vec3f
{
  let mipCount: f32 = 9.0; // resolution of 512x512
  let lod: f32 = pbrInfo.perceptualRoughness * mipCount;
  // retrieve a scale and bias to F0. See [1], Figure 3
  let brdf = SRGBtoLINEAR(
    textureSampleLevel(
      pbr_brdfLUT,
      pbr_brdfLUTSampler,
      vec2f(pbrInfo.NdotV, 1.0 - pbrInfo.perceptualRoughness),
      0.0
    )
  ).rgb;
  let diffuseLight =
    SRGBtoLINEAR(
      textureSampleLevel(pbr_diffuseEnvSampler, pbr_diffuseEnvSamplerSampler, n, 0.0)
    ).rgb;
  var specularLight = SRGBtoLINEAR(
    textureSampleLevel(
      pbr_specularEnvSampler,
      pbr_specularEnvSamplerSampler,
      reflection,
      0.0
    )
  ).rgb;
#ifdef USE_TEX_LOD
  specularLight = SRGBtoLINEAR(
    textureSampleLevel(
      pbr_specularEnvSampler,
      pbr_specularEnvSamplerSampler,
      reflection,
      lod
    )
  ).rgb;
#endif

  let diffuse = diffuseLight * pbrInfo.diffuseColor * pbrMaterial.scaleIBLAmbient.x;
  let specular =
    specularLight * (pbrInfo.specularColor * brdf.x + brdf.y) * pbrMaterial.scaleIBLAmbient.y;

  return diffuse + specular;
}
#endif

// Basic Lambertian diffuse
// Implementation from Lambert's Photometria https://archive.org/details/lambertsphotome00lambgoog
// See also [1], Equation 1
fn diffuse(pbrInfo: PBRInfo) -> vec3<f32> {
  return pbrInfo.diffuseColor / M_PI;
}

// The following equation models the Fresnel reflectance term of the spec equation (aka F())
// Implementation of fresnel from [4], Equation 15
fn specularReflection(pbrInfo: PBRInfo) -> vec3<f32> {
  return pbrInfo.reflectance0 +
    (pbrInfo.reflectance90 - pbrInfo.reflectance0) *
    pow(clamp(1.0 - pbrInfo.VdotH, 0.0, 1.0), 5.0);
}

// This calculates the specular geometric attenuation (aka G()),
// where rougher material will reflect less light back to the viewer.
// This implementation is based on [1] Equation 4, and we adopt their modifications to
// alphaRoughness as input as originally proposed in [2].
fn geometricOcclusion(pbrInfo: PBRInfo) -> f32 {
  let NdotL: f32 = pbrInfo.NdotL;
  let NdotV: f32 = pbrInfo.NdotV;
  let r: f32 = pbrInfo.alphaRoughness;

  let attenuationL = 2.0 * NdotL / (NdotL + sqrt(r * r + (1.0 - r * r) * (NdotL * NdotL)));
  let attenuationV = 2.0 * NdotV / (NdotV + sqrt(r * r + (1.0 - r * r) * (NdotV * NdotV)));
  return attenuationL * attenuationV;
}

// The following equation(s) model the distribution of microfacet normals across
// the area being drawn (aka D())
// Implementation from "Average Irregularity Representation of a Roughened Surface
// for Ray Reflection" by T. S. Trowbridge, and K. P. Reitz
// Follows the distribution function recommended in the SIGGRAPH 2013 course notes
// from EPIC Games [1], Equation 3.
fn microfacetDistribution(pbrInfo: PBRInfo) -> f32 {
  let roughnessSq = pbrInfo.alphaRoughness * pbrInfo.alphaRoughness;
  let f = (pbrInfo.NdotH * roughnessSq - pbrInfo.NdotH) * pbrInfo.NdotH + 1.0;
  return roughnessSq / (M_PI * f * f);
}

fn maxComponent(value: vec3f) -> f32 {
  return max(max(value.r, value.g), value.b);
}

fn getDielectricF0(ior: f32) -> f32 {
  let clampedIor = max(ior, 1.0);
  let ratio = (clampedIor - 1.0) / (clampedIor + 1.0);
  return ratio * ratio;
}

fn normalizeDirection(direction: vec2f) -> vec2f {
  let directionLength = length(direction);
  if (directionLength > 0.0001) {
    return direction / directionLength;
  }

  return vec2f(1.0, 0.0);
}

fn rotateDirection(direction: vec2f, rotation: f32) -> vec2f {
  let s = sin(rotation);
  let c = cos(rotation);
  return vec2f(direction.x * c - direction.y * s, direction.x * s + direction.y * c);
}

fn getIridescenceTint(iridescence: f32, thickness: f32, NdotV: f32) -> vec3f {
  if (iridescence <= 0.0) {
    return vec3f(1.0);
  }

  let phase = 0.015 * thickness * pbrMaterial.iridescenceIor + (1.0 - NdotV) * 6.0;
  let thinFilmTint =
    0.5 +
    0.5 *
    cos(vec3f(phase, phase + 2.0943951, phase + 4.1887902));
  return mix(vec3f(1.0), thinFilmTint, iridescence);
}

fn getVolumeAttenuation(thickness: f32) -> vec3f {
  if (thickness <= 0.0) {
    return vec3f(1.0);
  }

  let attenuationCoefficient =
    -log(max(pbrMaterial.attenuationColor, vec3f(0.0001))) /
    max(pbrMaterial.attenuationDistance, 0.0001);
  return exp(-attenuationCoefficient * thickness);
}

fn createClearcoatPBRInfo(
  basePBRInfo: PBRInfo,
  clearcoatNormal: vec3f,
  clearcoatRoughness: f32
) -> PBRInfo {
  let perceptualRoughness = clamp(clearcoatRoughness, c_MinRoughness, 1.0);
  let alphaRoughness = perceptualRoughness * perceptualRoughness;
  let NdotV = clamp(abs(dot(clearcoatNormal, basePBRInfo.v)), 0.001, 1.0);

  return PBRInfo(
    basePBRInfo.NdotL,
    NdotV,
    basePBRInfo.NdotH,
    basePBRInfo.LdotH,
    basePBRInfo.VdotH,
    perceptualRoughness,
    0.0,
    vec3f(0.04),
    vec3f(1.0),
    alphaRoughness,
    vec3f(0.0),
    vec3f(0.04),
    clearcoatNormal,
    basePBRInfo.v
  );
}

fn calculateClearcoatContribution(
  pbrInfo: PBRInfo,
  lightColor: vec3f,
  clearcoatNormal: vec3f,
  clearcoatFactor: f32,
  clearcoatRoughness: f32
) -> vec3f {
  if (clearcoatFactor <= 0.0) {
    return vec3f(0.0);
  }

  let clearcoatPBRInfo = createClearcoatPBRInfo(pbrInfo, clearcoatNormal, clearcoatRoughness);
  return calculateFinalColor(clearcoatPBRInfo, lightColor) * clearcoatFactor;
}

#ifdef USE_IBL
fn calculateClearcoatIBLContribution(
  pbrInfo: PBRInfo,
  clearcoatNormal: vec3f,
  reflection: vec3f,
  clearcoatFactor: f32,
  clearcoatRoughness: f32
) -> vec3f {
  if (clearcoatFactor <= 0.0) {
    return vec3f(0.0);
  }

  let clearcoatPBRInfo = createClearcoatPBRInfo(pbrInfo, clearcoatNormal, clearcoatRoughness);
  return getIBLContribution(clearcoatPBRInfo, clearcoatNormal, reflection) * clearcoatFactor;
}
#endif

fn calculateSheenContribution(
  pbrInfo: PBRInfo,
  lightColor: vec3f,
  sheenColor: vec3f,
  sheenRoughness: f32
) -> vec3f {
  if (maxComponent(sheenColor) <= 0.0) {
    return vec3f(0.0);
  }

  let sheenFresnel = pow(clamp(1.0 - pbrInfo.VdotH, 0.0, 1.0), 5.0);
  let sheenVisibility = mix(1.0, pbrInfo.NdotL * pbrInfo.NdotV, sheenRoughness);
  return pbrInfo.NdotL *
    lightColor *
    sheenColor *
    (0.25 + 0.75 * sheenFresnel) *
    sheenVisibility *
    (1.0 - pbrInfo.metalness);
}

fn calculateAnisotropyBoost(
  pbrInfo: PBRInfo,
  anisotropyTangent: vec3f,
  anisotropyStrength: f32
) -> f32 {
  if (anisotropyStrength <= 0.0) {
    return 1.0;
  }

  let anisotropyBitangent = normalize(cross(pbrInfo.n, anisotropyTangent));
  let bitangentViewAlignment = abs(dot(pbrInfo.v, anisotropyBitangent));
  return mix(1.0, 0.65 + 0.7 * bitangentViewAlignment, anisotropyStrength);
}

fn calculateMaterialLightColor(
  pbrInfo: PBRInfo,
  lightColor: vec3f,
  clearcoatNormal: vec3f,
  clearcoatFactor: f32,
  clearcoatRoughness: f32,
  sheenColor: vec3f,
  sheenRoughness: f32,
  anisotropyTangent: vec3f,
  anisotropyStrength: f32
) -> vec3f {
  let anisotropyBoost = calculateAnisotropyBoost(pbrInfo, anisotropyTangent, anisotropyStrength);
  var color = calculateFinalColor(pbrInfo, lightColor) * anisotropyBoost;
  color += calculateClearcoatContribution(
    pbrInfo,
    lightColor,
    clearcoatNormal,
    clearcoatFactor,
    clearcoatRoughness
  );
  color += calculateSheenContribution(pbrInfo, lightColor, sheenColor, sheenRoughness);
  return color;
}

fn PBRInfo_setAmbientLight(pbrInfo: ptr<function, PBRInfo>) {
  (*pbrInfo).NdotL = 1.0;
  (*pbrInfo).NdotH = 0.0;
  (*pbrInfo).LdotH = 0.0;
  (*pbrInfo).VdotH = 1.0;
}

fn PBRInfo_setDirectionalLight(pbrInfo: ptr<function, PBRInfo>, lightDirection: vec3<f32>) {
  let n = (*pbrInfo).n;
  let v = (*pbrInfo).v;
  let l = normalize(lightDirection);             // Vector from surface point to light
  let h = normalize(l + v);                      // Half vector between both l and v

  (*pbrInfo).NdotL = clamp(dot(n, l), 0.001, 1.0);
  (*pbrInfo).NdotH = clamp(dot(n, h), 0.0, 1.0);
  (*pbrInfo).LdotH = clamp(dot(l, h), 0.0, 1.0);
  (*pbrInfo).VdotH = clamp(dot(v, h), 0.0, 1.0);
}

fn PBRInfo_setPointLight(pbrInfo: ptr<function, PBRInfo>, pointLight: PointLight) {
  let light_direction = normalize(pointLight.position - fragmentInputs.pbr_vPosition);
  PBRInfo_setDirectionalLight(pbrInfo, light_direction);
}

fn PBRInfo_setSpotLight(pbrInfo: ptr<function, PBRInfo>, spotLight: SpotLight) {
  let light_direction = normalize(spotLight.position - fragmentInputs.pbr_vPosition);
  PBRInfo_setDirectionalLight(pbrInfo, light_direction);
}

fn calculateFinalColor(pbrInfo: PBRInfo, lightColor: vec3<f32>) -> vec3<f32> {
  // Calculate the shading terms for the microfacet specular shading model
  let F = specularReflection(pbrInfo);
  let G = geometricOcclusion(pbrInfo);
  let D = microfacetDistribution(pbrInfo);

  // Calculation of analytical lighting contribution
  let diffuseContrib = (1.0 - F) * diffuse(pbrInfo);
  let specContrib = F * G * D / (4.0 * pbrInfo.NdotL * pbrInfo.NdotV);
  // Obtain final intensity as reflectance (BRDF) scaled by the energy of the light (cosine law)
  return pbrInfo.NdotL * lightColor * (diffuseContrib + specContrib);
}

fn pbr_filterColor(colorUnused: vec4<f32>) -> vec4<f32> {
  let baseColorUV = getMaterialUV(pbrMaterial.baseColorUVSet, pbrMaterial.baseColorUVTransform);
  let metallicRoughnessUV = getMaterialUV(
    pbrMaterial.metallicRoughnessUVSet,
    pbrMaterial.metallicRoughnessUVTransform
  );
  let normalUV = getMaterialUV(pbrMaterial.normalUVSet, pbrMaterial.normalUVTransform);
  let occlusionUV = getMaterialUV(pbrMaterial.occlusionUVSet, pbrMaterial.occlusionUVTransform);
  let emissiveUV = getMaterialUV(pbrMaterial.emissiveUVSet, pbrMaterial.emissiveUVTransform);
  let specularColorUV = getMaterialUV(
    pbrMaterial.specularColorUVSet,
    pbrMaterial.specularColorUVTransform
  );
  let specularIntensityUV = getMaterialUV(
    pbrMaterial.specularIntensityUVSet,
    pbrMaterial.specularIntensityUVTransform
  );
  let transmissionUV = getMaterialUV(
    pbrMaterial.transmissionUVSet,
    pbrMaterial.transmissionUVTransform
  );
  let thicknessUV = getMaterialUV(pbrMaterial.thicknessUVSet, pbrMaterial.thicknessUVTransform);
  let clearcoatUV = getMaterialUV(pbrMaterial.clearcoatUVSet, pbrMaterial.clearcoatUVTransform);
  let clearcoatRoughnessUV = getMaterialUV(
    pbrMaterial.clearcoatRoughnessUVSet,
    pbrMaterial.clearcoatRoughnessUVTransform
  );
  let clearcoatNormalUV = getMaterialUV(
    pbrMaterial.clearcoatNormalUVSet,
    pbrMaterial.clearcoatNormalUVTransform
  );
  let sheenColorUV = getMaterialUV(
    pbrMaterial.sheenColorUVSet,
    pbrMaterial.sheenColorUVTransform
  );
  let sheenRoughnessUV = getMaterialUV(
    pbrMaterial.sheenRoughnessUVSet,
    pbrMaterial.sheenRoughnessUVTransform
  );
  let iridescenceUV = getMaterialUV(
    pbrMaterial.iridescenceUVSet,
    pbrMaterial.iridescenceUVTransform
  );
  let iridescenceThicknessUV = getMaterialUV(
    pbrMaterial.iridescenceThicknessUVSet,
    pbrMaterial.iridescenceThicknessUVTransform
  );
  let anisotropyUV = getMaterialUV(
    pbrMaterial.anisotropyUVSet,
    pbrMaterial.anisotropyUVTransform
  );

  // The albedo may be defined from a base texture or a flat color
  var baseColor: vec4<f32> = pbrMaterial.baseColorFactor;
  #ifdef HAS_BASECOLORMAP
  baseColor = SRGBtoLINEAR(
    textureSample(pbr_baseColorSampler, pbr_baseColorSamplerSampler, baseColorUV)
  ) * pbrMaterial.baseColorFactor;
  #endif

  #ifdef ALPHA_CUTOFF
  if (baseColor.a < pbrMaterial.alphaCutoff) {
    discard;
  }
  #endif

  var color = vec3<f32>(0.0, 0.0, 0.0);
  var transmission = 0.0;

  if (pbrMaterial.unlit != 0u) {
    color = baseColor.rgb;
  } else {
    // Metallic and Roughness material properties are packed together
    // In glTF, these factors can be specified by fixed scalar values
    // or from a metallic-roughness map
    var perceptualRoughness = pbrMaterial.metallicRoughnessValues.y;
    var metallic = pbrMaterial.metallicRoughnessValues.x;
    #ifdef HAS_METALROUGHNESSMAP
    // Roughness is stored in the 'g' channel, metallic is stored in the 'b' channel.
    // This layout intentionally reserves the 'r' channel for (optional) occlusion map data
    let mrSample = textureSample(
      pbr_metallicRoughnessSampler,
      pbr_metallicRoughnessSamplerSampler,
      metallicRoughnessUV
    );
    perceptualRoughness = mrSample.g * perceptualRoughness;
    metallic = mrSample.b * metallic;
    #endif
    perceptualRoughness = clamp(perceptualRoughness, c_MinRoughness, 1.0);
    metallic = clamp(metallic, 0.0, 1.0);
    let tbn = getTBN(normalUV);
    let n = getNormal(tbn, normalUV);                          // normal at surface point
    let v = normalize(pbrProjection.camera - fragmentInputs.pbr_vPosition);  // Vector from surface point to camera
    let NdotV = clamp(abs(dot(n, v)), 0.001, 1.0);
    var useExtendedPBR = false;
    #ifdef USE_MATERIAL_EXTENSIONS
    useExtendedPBR =
      pbrMaterial.specularColorMapEnabled != 0 ||
      pbrMaterial.specularIntensityMapEnabled != 0 ||
      abs(pbrMaterial.specularIntensityFactor - 1.0) > 0.0001 ||
      maxComponent(abs(pbrMaterial.specularColorFactor - vec3f(1.0))) > 0.0001 ||
      abs(pbrMaterial.ior - 1.5) > 0.0001 ||
      pbrMaterial.transmissionMapEnabled != 0 ||
      pbrMaterial.transmissionFactor > 0.0001 ||
      pbrMaterial.clearcoatMapEnabled != 0 ||
      pbrMaterial.clearcoatRoughnessMapEnabled != 0 ||
      pbrMaterial.clearcoatFactor > 0.0001 ||
      pbrMaterial.clearcoatRoughnessFactor > 0.0001 ||
      pbrMaterial.sheenColorMapEnabled != 0 ||
      pbrMaterial.sheenRoughnessMapEnabled != 0 ||
      maxComponent(pbrMaterial.sheenColorFactor) > 0.0001 ||
      pbrMaterial.sheenRoughnessFactor > 0.0001 ||
      pbrMaterial.iridescenceMapEnabled != 0 ||
      pbrMaterial.iridescenceFactor > 0.0001 ||
      abs(pbrMaterial.iridescenceIor - 1.3) > 0.0001 ||
      abs(pbrMaterial.iridescenceThicknessRange.x - 100.0) > 0.0001 ||
      abs(pbrMaterial.iridescenceThicknessRange.y - 400.0) > 0.0001 ||
      pbrMaterial.anisotropyMapEnabled != 0 ||
      pbrMaterial.anisotropyStrength > 0.0001 ||
      abs(pbrMaterial.anisotropyRotation) > 0.0001 ||
      length(pbrMaterial.anisotropyDirection - vec2f(1.0, 0.0)) > 0.0001;
    #endif

    if (!useExtendedPBR) {
      let alphaRoughness = perceptualRoughness * perceptualRoughness;

      let f0 = vec3<f32>(0.04);
      var diffuseColor = baseColor.rgb * (vec3<f32>(1.0) - f0);
      diffuseColor *= 1.0 - metallic;
      let specularColor = mix(f0, baseColor.rgb, metallic);

      let reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);
      let reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);
      let specularEnvironmentR0 = specularColor;
      let specularEnvironmentR90 = vec3<f32>(1.0, 1.0, 1.0) * reflectance90;
      let reflection = -normalize(reflect(v, n));

      var pbrInfo = PBRInfo(
        0.0, // NdotL
        NdotV,
        0.0, // NdotH
        0.0, // LdotH
        0.0, // VdotH
        perceptualRoughness,
        metallic,
        specularEnvironmentR0,
        specularEnvironmentR90,
        alphaRoughness,
        diffuseColor,
        specularColor,
        n,
        v
      );

      #ifdef USE_LIGHTS
      PBRInfo_setAmbientLight(&pbrInfo);
      color += calculateFinalColor(pbrInfo, lighting.ambientColor);

      for (var i = 0; i < lighting.directionalLightCount; i++) {
        if (i < lighting.directionalLightCount) {
          PBRInfo_setDirectionalLight(&pbrInfo, lighting_getDirectionalLight(i).direction);
          color += calculateFinalColor(pbrInfo, lighting_getDirectionalLight(i).color);
        }
      }

      for (var i = 0; i < lighting.pointLightCount; i++) {
        if (i < lighting.pointLightCount) {
          PBRInfo_setPointLight(&pbrInfo, lighting_getPointLight(i));
          let attenuation = getPointLightAttenuation(
            lighting_getPointLight(i),
            distance(lighting_getPointLight(i).position, fragmentInputs.pbr_vPosition)
          );
          color += calculateFinalColor(pbrInfo, lighting_getPointLight(i).color / attenuation);
        }
      }

      for (var i = 0; i < lighting.spotLightCount; i++) {
        if (i < lighting.spotLightCount) {
          PBRInfo_setSpotLight(&pbrInfo, lighting_getSpotLight(i));
          let attenuation = getSpotLightAttenuation(
            lighting_getSpotLight(i),
            fragmentInputs.pbr_vPosition
          );
          color += calculateFinalColor(pbrInfo, lighting_getSpotLight(i).color / attenuation);
        }
      }
      #endif

      #ifdef USE_IBL
      if (pbrMaterial.IBLenabled != 0) {
        color += getIBLContribution(pbrInfo, n, reflection);
      }
      #endif

      #ifdef HAS_OCCLUSIONMAP
      if (pbrMaterial.occlusionMapEnabled != 0) {
        let ao = textureSample(pbr_occlusionSampler, pbr_occlusionSamplerSampler, occlusionUV).r;
        color = mix(color, color * ao, pbrMaterial.occlusionStrength);
      }
      #endif

      var emissive = pbrMaterial.emissiveFactor;
      #ifdef HAS_EMISSIVEMAP
      if (pbrMaterial.emissiveMapEnabled != 0u) {
        emissive *= SRGBtoLINEAR(
          textureSample(pbr_emissiveSampler, pbr_emissiveSamplerSampler, emissiveUV)
        ).rgb;
      }
      #endif
      color += emissive * pbrMaterial.emissiveStrength;

      #ifdef PBR_DEBUG
      color = mix(color, baseColor.rgb, pbrMaterial.scaleDiffBaseMR.y);
      color = mix(color, vec3<f32>(metallic), pbrMaterial.scaleDiffBaseMR.z);
      color = mix(color, vec3<f32>(perceptualRoughness), pbrMaterial.scaleDiffBaseMR.w);
      #endif

      return vec4<f32>(pow(color, vec3<f32>(1.0 / 2.2)), baseColor.a);
    }

    var specularIntensity = pbrMaterial.specularIntensityFactor;
    #ifdef HAS_SPECULARINTENSITYMAP
    if (pbrMaterial.specularIntensityMapEnabled != 0) {
      specularIntensity *= textureSample(
        pbr_specularIntensitySampler,
        pbr_specularIntensitySamplerSampler,
        specularIntensityUV
      ).a;
    }
    #endif

    var specularFactor = pbrMaterial.specularColorFactor;
    #ifdef HAS_SPECULARCOLORMAP
    if (pbrMaterial.specularColorMapEnabled != 0) {
      specularFactor *= SRGBtoLINEAR(
        textureSample(
          pbr_specularColorSampler,
          pbr_specularColorSamplerSampler,
          specularColorUV
        )
      ).rgb;
    }
    #endif

    transmission = pbrMaterial.transmissionFactor;
    #ifdef HAS_TRANSMISSIONMAP
    if (pbrMaterial.transmissionMapEnabled != 0) {
      transmission *= textureSample(
        pbr_transmissionSampler,
        pbr_transmissionSamplerSampler,
        transmissionUV
      ).r;
    }
    #endif
    transmission = clamp(transmission * (1.0 - metallic), 0.0, 1.0);
    var thickness = max(pbrMaterial.thicknessFactor, 0.0);
    #ifdef HAS_THICKNESSMAP
    thickness *= textureSample(
      pbr_thicknessSampler,
      pbr_thicknessSamplerSampler,
      thicknessUV
    ).g;
    #endif

    var clearcoatFactor = pbrMaterial.clearcoatFactor;
    var clearcoatRoughness = pbrMaterial.clearcoatRoughnessFactor;
    #ifdef HAS_CLEARCOATMAP
    if (pbrMaterial.clearcoatMapEnabled != 0) {
      clearcoatFactor *= textureSample(
        pbr_clearcoatSampler,
        pbr_clearcoatSamplerSampler,
        clearcoatUV
      ).r;
    }
    #endif
    #ifdef HAS_CLEARCOATROUGHNESSMAP
    if (pbrMaterial.clearcoatRoughnessMapEnabled != 0) {
      clearcoatRoughness *= textureSample(
        pbr_clearcoatRoughnessSampler,
        pbr_clearcoatRoughnessSamplerSampler,
        clearcoatRoughnessUV
      ).g;
    }
    #endif
    clearcoatFactor = clamp(clearcoatFactor, 0.0, 1.0);
    clearcoatRoughness = clamp(clearcoatRoughness, c_MinRoughness, 1.0);
    let clearcoatNormal = getClearcoatNormal(getTBN(clearcoatNormalUV), n, clearcoatNormalUV);

    var sheenColor = pbrMaterial.sheenColorFactor;
    var sheenRoughness = pbrMaterial.sheenRoughnessFactor;
    #ifdef HAS_SHEENCOLORMAP
    if (pbrMaterial.sheenColorMapEnabled != 0) {
      sheenColor *= SRGBtoLINEAR(
        textureSample(
          pbr_sheenColorSampler,
          pbr_sheenColorSamplerSampler,
          sheenColorUV
        )
      ).rgb;
    }
    #endif
    #ifdef HAS_SHEENROUGHNESSMAP
    if (pbrMaterial.sheenRoughnessMapEnabled != 0) {
      sheenRoughness *= textureSample(
        pbr_sheenRoughnessSampler,
        pbr_sheenRoughnessSamplerSampler,
        sheenRoughnessUV
      ).a;
    }
    #endif
    sheenRoughness = clamp(sheenRoughness, c_MinRoughness, 1.0);

    var iridescence = pbrMaterial.iridescenceFactor;
    #ifdef HAS_IRIDESCENCEMAP
    if (pbrMaterial.iridescenceMapEnabled != 0) {
      iridescence *= textureSample(
        pbr_iridescenceSampler,
        pbr_iridescenceSamplerSampler,
        iridescenceUV
      ).r;
    }
    #endif
    iridescence = clamp(iridescence, 0.0, 1.0);
    var iridescenceThickness = mix(
      pbrMaterial.iridescenceThicknessRange.x,
      pbrMaterial.iridescenceThicknessRange.y,
      0.5
    );
    #ifdef HAS_IRIDESCENCETHICKNESSMAP
    iridescenceThickness = mix(
      pbrMaterial.iridescenceThicknessRange.x,
      pbrMaterial.iridescenceThicknessRange.y,
      textureSample(
        pbr_iridescenceThicknessSampler,
        pbr_iridescenceThicknessSamplerSampler,
        iridescenceThicknessUV
      ).g
    );
    #endif

    var anisotropyStrength = clamp(pbrMaterial.anisotropyStrength, 0.0, 1.0);
    var anisotropyDirection = normalizeDirection(pbrMaterial.anisotropyDirection);
    #ifdef HAS_ANISOTROPYMAP
    if (pbrMaterial.anisotropyMapEnabled != 0) {
      let anisotropySample = textureSample(
        pbr_anisotropySampler,
        pbr_anisotropySamplerSampler,
        anisotropyUV
      ).rgb;
      anisotropyStrength *= anisotropySample.b;
      let mappedDirection = anisotropySample.rg * 2.0 - 1.0;
      if (length(mappedDirection) > 0.0001) {
        anisotropyDirection = normalize(mappedDirection);
      }
    }
    #endif
    anisotropyDirection = rotateDirection(anisotropyDirection, pbrMaterial.anisotropyRotation);
    var anisotropyTangent =
      normalize(tbn[0] * anisotropyDirection.x + tbn[1] * anisotropyDirection.y);
    if (length(anisotropyTangent) < 0.0001) {
      anisotropyTangent = normalize(tbn[0]);
    }
    let anisotropyViewAlignment = abs(dot(v, anisotropyTangent));
    perceptualRoughness = mix(
      perceptualRoughness,
      clamp(perceptualRoughness * (1.0 - 0.6 * anisotropyViewAlignment), c_MinRoughness, 1.0),
      anisotropyStrength
    );

    // Roughness is authored as perceptual roughness; as is convention,
    // convert to material roughness by squaring the perceptual roughness [2].
    let alphaRoughness = perceptualRoughness * perceptualRoughness;

    let dielectricF0 = getDielectricF0(pbrMaterial.ior);
    var dielectricSpecularF0 = min(
      vec3f(dielectricF0) * specularFactor * specularIntensity,
      vec3f(1.0)
    );
    let iridescenceTint = getIridescenceTint(iridescence, iridescenceThickness, NdotV);
    dielectricSpecularF0 = mix(
      dielectricSpecularF0,
      dielectricSpecularF0 * iridescenceTint,
      iridescence
    );
    var diffuseColor = baseColor.rgb * (vec3f(1.0) - dielectricSpecularF0);
    diffuseColor *= (1.0 - metallic) * (1.0 - transmission);
    var specularColor = mix(dielectricSpecularF0, baseColor.rgb, metallic);

    let baseLayerEnergy = 1.0 - clearcoatFactor * 0.25;
    diffuseColor *= baseLayerEnergy;
    specularColor *= baseLayerEnergy;

    // Compute reflectance.
    let reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);

    // For typical incident reflectance range (between 4% to 100%) set the grazing
    // reflectance to 100% for typical fresnel effect.
    // For very low reflectance range on highly diffuse objects (below 4%),
    // incrementally reduce grazing reflectance to 0%.
    let reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);
    let specularEnvironmentR0 = specularColor;
    let specularEnvironmentR90 = vec3<f32>(1.0, 1.0, 1.0) * reflectance90;
    let reflection = -normalize(reflect(v, n));

    var pbrInfo = PBRInfo(
      0.0, // NdotL
      NdotV,
      0.0, // NdotH
      0.0, // LdotH
      0.0, // VdotH
      perceptualRoughness,
      metallic,
      specularEnvironmentR0,
      specularEnvironmentR90,
      alphaRoughness,
      diffuseColor,
      specularColor,
      n,
      v
    );

    #ifdef USE_LIGHTS
    // Apply ambient light
    PBRInfo_setAmbientLight(&pbrInfo);
    color += calculateMaterialLightColor(
      pbrInfo,
      lighting.ambientColor,
      clearcoatNormal,
      clearcoatFactor,
      clearcoatRoughness,
      sheenColor,
      sheenRoughness,
      anisotropyTangent,
      anisotropyStrength
    );

    // Apply directional light
    for (var i = 0; i < lighting.directionalLightCount; i++) {
      if (i < lighting.directionalLightCount) {
        PBRInfo_setDirectionalLight(&pbrInfo, lighting_getDirectionalLight(i).direction);
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getDirectionalLight(i).color,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
      }
    }

    // Apply point light
    for (var i = 0; i < lighting.pointLightCount; i++) {
      if (i < lighting.pointLightCount) {
        PBRInfo_setPointLight(&pbrInfo, lighting_getPointLight(i));
        let attenuation = getPointLightAttenuation(
          lighting_getPointLight(i),
          distance(lighting_getPointLight(i).position, fragmentInputs.pbr_vPosition)
        );
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getPointLight(i).color / attenuation,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
      }
    }

    for (var i = 0; i < lighting.spotLightCount; i++) {
      if (i < lighting.spotLightCount) {
        PBRInfo_setSpotLight(&pbrInfo, lighting_getSpotLight(i));
        let attenuation = getSpotLightAttenuation(lighting_getSpotLight(i), fragmentInputs.pbr_vPosition);
        color += calculateMaterialLightColor(
          pbrInfo,
          lighting_getSpotLight(i).color / attenuation,
          clearcoatNormal,
          clearcoatFactor,
          clearcoatRoughness,
          sheenColor,
          sheenRoughness,
          anisotropyTangent,
          anisotropyStrength
        );
      }
    }
    #endif

    // Calculate lighting contribution from image based lighting source (IBL)
    #ifdef USE_IBL
    if (pbrMaterial.IBLenabled != 0) {
      color += getIBLContribution(pbrInfo, n, reflection) *
        calculateAnisotropyBoost(pbrInfo, anisotropyTangent, anisotropyStrength);
      color += calculateClearcoatIBLContribution(
        pbrInfo,
        clearcoatNormal,
        -normalize(reflect(v, clearcoatNormal)),
        clearcoatFactor,
        clearcoatRoughness
      );
      color += sheenColor * pbrMaterial.scaleIBLAmbient.x * (1.0 - sheenRoughness) * 0.25;
    }
    #endif

    // Apply optional PBR terms for additional (optional) shading
    #ifdef HAS_OCCLUSIONMAP
    if (pbrMaterial.occlusionMapEnabled != 0) {
      let ao = textureSample(pbr_occlusionSampler, pbr_occlusionSamplerSampler, occlusionUV).r;
      color = mix(color, color * ao, pbrMaterial.occlusionStrength);
    }
    #endif

    var emissive = pbrMaterial.emissiveFactor;
    #ifdef HAS_EMISSIVEMAP
    if (pbrMaterial.emissiveMapEnabled != 0u) {
      emissive *= SRGBtoLINEAR(
        textureSample(pbr_emissiveSampler, pbr_emissiveSamplerSampler, emissiveUV)
      ).rgb;
    }
    #endif
    color += emissive * pbrMaterial.emissiveStrength;

    if (transmission > 0.0) {
      color = mix(color, color * getVolumeAttenuation(thickness), transmission);
    }

    // This section uses mix to override final color for reference app visualization
    // of various parameters in the lighting equation.
    #ifdef PBR_DEBUG
    // TODO: Figure out how to debug multiple lights

    // color = mix(color, F, pbr_scaleFGDSpec.x);
    // color = mix(color, vec3(G), pbr_scaleFGDSpec.y);
    // color = mix(color, vec3(D), pbr_scaleFGDSpec.z);
    // color = mix(color, specContrib, pbr_scaleFGDSpec.w);

    // color = mix(color, diffuseContrib, pbr_scaleDiffBaseMR.x);
    color = mix(color, baseColor.rgb, pbrMaterial.scaleDiffBaseMR.y);
    color = mix(color, vec3<f32>(metallic), pbrMaterial.scaleDiffBaseMR.z);
    color = mix(color, vec3<f32>(perceptualRoughness), pbrMaterial.scaleDiffBaseMR.w);
    #endif
  }

  let alpha = clamp(baseColor.a * (1.0 - transmission), 0.0, 1.0);
  return vec4<f32>(pow(color, vec3<f32>(1.0 / 2.2)), alpha);
}
`;var vy=`layout(std140) uniform pbrProjectionUniforms {
  mat4 modelViewProjectionMatrix;
  mat4 modelMatrix;
  mat4 normalMatrix;
  vec3 camera;
} pbrProjection;
`,F3=`struct pbrProjectionUniforms {
  modelViewProjectionMatrix: mat4x4<f32>,
  modelMatrix: mat4x4<f32>,
  normalMatrix: mat4x4<f32>,
  camera: vec3<f32>
};

@group(0) @binding(auto) var<uniform> pbrProjection: pbrProjectionUniforms;
`,Ry={name:"pbrProjection",bindingLayout:[{name:"pbrProjection",group:0}],source:F3,vs:vy,fs:vy,getUniforms:t=>t,uniformTypes:{modelViewProjectionMatrix:"mat4x4<f32>",modelMatrix:"mat4x4<f32>",normalMatrix:"mat4x4<f32>",camera:"vec3<f32>"}};var fr={props:{},uniforms:{},defaultUniforms:{unlit:!1,baseColorMapEnabled:!1,baseColorFactor:[1,1,1,1],normalMapEnabled:!1,normalScale:1,emissiveMapEnabled:!1,emissiveFactor:[0,0,0],metallicRoughnessValues:[1,1],metallicRoughnessMapEnabled:!1,occlusionMapEnabled:!1,occlusionStrength:1,alphaCutoffEnabled:!1,alphaCutoff:.5,IBLenabled:!1,scaleIBLAmbient:[1,1],scaleDiffBaseMR:[0,0,0,0],scaleFGDSpec:[0,0,0,0],specularColorFactor:[1,1,1],specularIntensityFactor:1,specularColorMapEnabled:!1,specularIntensityMapEnabled:!1,ior:1.5,transmissionFactor:0,transmissionMapEnabled:!1,thicknessFactor:0,attenuationDistance:1e9,attenuationColor:[1,1,1],clearcoatFactor:0,clearcoatRoughnessFactor:0,clearcoatMapEnabled:!1,clearcoatRoughnessMapEnabled:!1,sheenColorFactor:[0,0,0],sheenRoughnessFactor:0,sheenColorMapEnabled:!1,sheenRoughnessMapEnabled:!1,iridescenceFactor:0,iridescenceIor:1.3,iridescenceThicknessRange:[100,400],iridescenceMapEnabled:!1,anisotropyStrength:0,anisotropyRotation:0,anisotropyDirection:[1,0],anisotropyMapEnabled:!1,emissiveStrength:1,baseColorUVSet:0,baseColorUVTransform:[1,0,0,0,1,0,0,0,1],metallicRoughnessUVSet:0,metallicRoughnessUVTransform:[1,0,0,0,1,0,0,0,1],normalUVSet:0,normalUVTransform:[1,0,0,0,1,0,0,0,1],occlusionUVSet:0,occlusionUVTransform:[1,0,0,0,1,0,0,0,1],emissiveUVSet:0,emissiveUVTransform:[1,0,0,0,1,0,0,0,1],specularColorUVSet:0,specularColorUVTransform:[1,0,0,0,1,0,0,0,1],specularIntensityUVSet:0,specularIntensityUVTransform:[1,0,0,0,1,0,0,0,1],transmissionUVSet:0,transmissionUVTransform:[1,0,0,0,1,0,0,0,1],thicknessUVSet:0,thicknessUVTransform:[1,0,0,0,1,0,0,0,1],clearcoatUVSet:0,clearcoatUVTransform:[1,0,0,0,1,0,0,0,1],clearcoatRoughnessUVSet:0,clearcoatRoughnessUVTransform:[1,0,0,0,1,0,0,0,1],clearcoatNormalUVSet:0,clearcoatNormalUVTransform:[1,0,0,0,1,0,0,0,1],sheenColorUVSet:0,sheenColorUVTransform:[1,0,0,0,1,0,0,0,1],sheenRoughnessUVSet:0,sheenRoughnessUVTransform:[1,0,0,0,1,0,0,0,1],iridescenceUVSet:0,iridescenceUVTransform:[1,0,0,0,1,0,0,0,1],iridescenceThicknessUVSet:0,iridescenceThicknessUVTransform:[1,0,0,0,1,0,0,0,1],anisotropyUVSet:0,anisotropyUVTransform:[1,0,0,0,1,0,0,0,1]},name:"pbrMaterial",firstBindingSlot:0,bindingLayout:[{name:"pbrMaterial",group:3},{name:"pbr_baseColorSampler",group:3},{name:"pbr_normalSampler",group:3},{name:"pbr_emissiveSampler",group:3},{name:"pbr_metallicRoughnessSampler",group:3},{name:"pbr_occlusionSampler",group:3},{name:"pbr_specularColorSampler",group:3},{name:"pbr_specularIntensitySampler",group:3},{name:"pbr_transmissionSampler",group:3},{name:"pbr_thicknessSampler",group:3},{name:"pbr_clearcoatSampler",group:3},{name:"pbr_clearcoatRoughnessSampler",group:3},{name:"pbr_clearcoatNormalSampler",group:3},{name:"pbr_sheenColorSampler",group:3},{name:"pbr_sheenRoughnessSampler",group:3},{name:"pbr_iridescenceSampler",group:3},{name:"pbr_iridescenceThicknessSampler",group:3},{name:"pbr_anisotropySampler",group:3}],dependencies:[cc,Ay,Ry],source:Cy,vs:Sy,fs:Ey,defines:{LIGHTING_FRAGMENT:!0,HAS_NORMALMAP:!1,HAS_EMISSIVEMAP:!1,HAS_OCCLUSIONMAP:!1,HAS_BASECOLORMAP:!1,HAS_METALROUGHNESSMAP:!1,HAS_SPECULARCOLORMAP:!1,HAS_SPECULARINTENSITYMAP:!1,HAS_TRANSMISSIONMAP:!1,HAS_THICKNESSMAP:!1,HAS_CLEARCOATMAP:!1,HAS_CLEARCOATROUGHNESSMAP:!1,HAS_CLEARCOATNORMALMAP:!1,HAS_SHEENCOLORMAP:!1,HAS_SHEENROUGHNESSMAP:!1,HAS_IRIDESCENCEMAP:!1,HAS_IRIDESCENCETHICKNESSMAP:!1,HAS_ANISOTROPYMAP:!1,USE_MATERIAL_EXTENSIONS:!1,ALPHA_CUTOFF:!1,USE_IBL:!1,PBR_DEBUG:!1},getUniforms:t=>t,uniformTypes:{unlit:"i32",baseColorMapEnabled:"i32",baseColorFactor:"vec4<f32>",normalMapEnabled:"i32",normalScale:"f32",emissiveMapEnabled:"i32",emissiveFactor:"vec3<f32>",metallicRoughnessValues:"vec2<f32>",metallicRoughnessMapEnabled:"i32",occlusionMapEnabled:"i32",occlusionStrength:"f32",alphaCutoffEnabled:"i32",alphaCutoff:"f32",specularColorFactor:"vec3<f32>",specularIntensityFactor:"f32",specularColorMapEnabled:"i32",specularIntensityMapEnabled:"i32",ior:"f32",transmissionFactor:"f32",transmissionMapEnabled:"i32",thicknessFactor:"f32",attenuationDistance:"f32",attenuationColor:"vec3<f32>",clearcoatFactor:"f32",clearcoatRoughnessFactor:"f32",clearcoatMapEnabled:"i32",clearcoatRoughnessMapEnabled:"i32",sheenColorFactor:"vec3<f32>",sheenRoughnessFactor:"f32",sheenColorMapEnabled:"i32",sheenRoughnessMapEnabled:"i32",iridescenceFactor:"f32",iridescenceIor:"f32",iridescenceThicknessRange:"vec2<f32>",iridescenceMapEnabled:"i32",anisotropyStrength:"f32",anisotropyRotation:"f32",anisotropyDirection:"vec2<f32>",anisotropyMapEnabled:"i32",emissiveStrength:"f32",IBLenabled:"i32",scaleIBLAmbient:"vec2<f32>",scaleDiffBaseMR:"vec4<f32>",scaleFGDSpec:"vec4<f32>",baseColorUVSet:"i32",baseColorUVTransform:"mat3x3<f32>",metallicRoughnessUVSet:"i32",metallicRoughnessUVTransform:"mat3x3<f32>",normalUVSet:"i32",normalUVTransform:"mat3x3<f32>",occlusionUVSet:"i32",occlusionUVTransform:"mat3x3<f32>",emissiveUVSet:"i32",emissiveUVTransform:"mat3x3<f32>",specularColorUVSet:"i32",specularColorUVTransform:"mat3x3<f32>",specularIntensityUVSet:"i32",specularIntensityUVTransform:"mat3x3<f32>",transmissionUVSet:"i32",transmissionUVTransform:"mat3x3<f32>",thicknessUVSet:"i32",thicknessUVTransform:"mat3x3<f32>",clearcoatUVSet:"i32",clearcoatUVTransform:"mat3x3<f32>",clearcoatRoughnessUVSet:"i32",clearcoatRoughnessUVTransform:"mat3x3<f32>",clearcoatNormalUVSet:"i32",clearcoatNormalUVTransform:"mat3x3<f32>",sheenColorUVSet:"i32",sheenColorUVTransform:"mat3x3<f32>",sheenRoughnessUVSet:"i32",sheenRoughnessUVTransform:"mat3x3<f32>",iridescenceUVSet:"i32",iridescenceUVTransform:"mat3x3<f32>",iridescenceThicknessUVSet:"i32",iridescenceThicknessUVTransform:"mat3x3<f32>",anisotropyUVSet:"i32",anisotropyUVTransform:"mat3x3<f32>"}};var N3=`struct LayerUniforms {
  opacity: f32,
};

@group(0) @binding(auto)
var<uniform> layer: LayerUniforms;
`,My=`layout(std140) uniform layerUniforms {
  uniform float opacity;
} layer;
`,Sh={name:"layer",source:N3,vs:My,fs:My,getUniforms:t=>({opacity:Math.pow(t.opacity,.45454545454545453)}),uniformTypes:{opacity:"f32"}};var D3=`

@must_use
fn deckgl_premultiplied_alpha(fragColor: vec4<f32>) -> vec4<f32> {
    return vec4(fragColor.rgb * fragColor.a, fragColor.a); 
};
`,Ii={name:"color",dependencies:[],source:D3,getUniforms:t=>({})};var U3=`const SMOOTH_EDGE_RADIUS: f32 = 0.5;

struct VertexGeometry {
  position: vec4<f32>,
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry_: VertexGeometry = VertexGeometry(
  vec4<f32>(0.0, 0.0, 1.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec2<f32>(0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0)
);

struct FragmentGeometry {
  uv: vec2<f32>,
};

var<private> fragmentGeometry: FragmentGeometry;

fn smoothedge(edge: f32, x: f32) -> f32 {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`,Py="#define SMOOTH_EDGE_RADIUS 0.5",k3=`${Py}

struct VertexGeometry {
  vec4 position;
  vec3 worldPosition;
  vec3 worldPositionAlt;
  vec3 normal;
  vec2 uv;
  vec3 pickingColor;
} geometry = VertexGeometry(
  vec4(0.0, 0.0, 1.0, 0.0),
  vec3(0.0),
  vec3(0.0),
  vec3(0.0),
  vec2(0.0),
  vec3(0.0)
);
`,V3=`${Py}

struct FragmentGeometry {
  vec2 uv;
} geometry;

float smoothedge(float edge, float x) {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`,lc={name:"geometry",source:U3,vs:k3,fs:V3};var G;(function(t){t[t.Start=1]="Start",t[t.Move=2]="Move",t[t.End=4]="End",t[t.Cancel=8]="Cancel"})(G||(G={}));var J;(function(t){t[t.None=0]="None",t[t.Left=1]="Left",t[t.Right=2]="Right",t[t.Up=4]="Up",t[t.Down=8]="Down",t[t.Horizontal=3]="Horizontal",t[t.Vertical=12]="Vertical",t[t.All=15]="All"})(J||(J={}));var B;(function(t){t[t.Possible=1]="Possible",t[t.Began=2]="Began",t[t.Changed=4]="Changed",t[t.Ended=8]="Ended",t[t.Recognized=8]="Recognized",t[t.Cancelled=16]="Cancelled",t[t.Failed=32]="Failed"})(B||(B={}));var wy="compute",Eh="auto",po="manipulation",Wr="none",go="pan-x",mo="pan-y";function Ch(t){if(t.includes(Wr))return Wr;let e=t.includes(go),r=t.includes(mo);return e&&r?Wr:e||r?e?go:mo:t.includes(po)?po:Eh}var _o=class{constructor(e,r){this.actions="",this.manager=e,this.set(r)}set(e){e===wy&&(e=this.compute()),this.manager.element&&(this.manager.element.style.touchAction=e,this.actions=e)}update(){this.set(this.manager.options.touchAction)}compute(){let e=[];for(let r of this.manager.recognizers)r.options.enable&&(e=e.concat(r.getTouchAction()));return Ch(e.join(" "))}};function Bi(t){return t.trim().split(/\s+/g)}function fc(t,e,r){if(t)for(let i of Bi(e))t.addEventListener(i,r,!1)}function uc(t,e,r){if(t)for(let i of Bi(e))t.removeEventListener(i,r,!1)}function vh(t){return(t.ownerDocument||t).defaultView}function Rh(t,e){let r=t;for(;r;){if(r===e)return!0;r=r.parentNode}return!1}function dc(t){let e=t.length;if(e===1)return{x:Math.round(t[0].clientX),y:Math.round(t[0].clientY)};let r=0,i=0,n=0;for(;n<e;)r+=t[n].clientX,i+=t[n].clientY,n++;return{x:Math.round(r/e),y:Math.round(i/e)}}function Mh(t){let e=[],r=0;for(;r<t.pointers.length;)e[r]={clientX:Math.round(t.pointers[r].clientX),clientY:Math.round(t.pointers[r].clientY)},r++;return{timeStamp:Date.now(),pointers:e,center:dc(e),deltaX:t.deltaX,deltaY:t.deltaY}}function hc(t,e){let r=e.x-t.x,i=e.y-t.y;return Math.sqrt(r*r+i*i)}function Ph(t,e){let r=e.clientX-t.clientX,i=e.clientY-t.clientY;return Math.sqrt(r*r+i*i)}function Iy(t,e){let r=e.x-t.x,i=e.y-t.y;return Math.atan2(i,r)*180/Math.PI}function wh(t,e){let r=e.clientX-t.clientX,i=e.clientY-t.clientY;return Math.atan2(i,r)*180/Math.PI}function pc(t,e){return t===e?J.None:Math.abs(t)>=Math.abs(e)?t<0?J.Left:J.Right:e<0?J.Up:J.Down}function By(t,e){let r=e.center,i=t.offsetDelta,n=t.prevDelta,o=t.prevInput;return(e.eventType===G.Start||o?.eventType===G.End)&&(n=t.prevDelta={x:o?.deltaX||0,y:o?.deltaY||0},i=t.offsetDelta={x:r.x,y:r.y}),{deltaX:n.x+(r.x-i.x),deltaY:n.y+(r.y-i.y)}}function gc(t,e,r){return{x:e/t||0,y:r/t||0}}function Oy(t,e){return Ph(e[0],e[1])/Ph(t[0],t[1])}function Ly(t,e){return wh(e[1],e[0])-wh(t[1],t[0])}function Fy(t,e){let r=t.lastInterval||e,i=e.timeStamp-r.timeStamp,n,o,s,a;if(e.eventType!==G.Cancel&&(i>25||r.velocity===void 0)){let c=e.deltaX-r.deltaX,l=e.deltaY-r.deltaY,f=gc(i,c,l);o=f.x,s=f.y,n=Math.abs(f.x)>Math.abs(f.y)?f.x:f.y,a=pc(c,l),t.lastInterval=e}else n=r.velocity,o=r.velocityX,s=r.velocityY,a=r.direction;e.velocity=n,e.velocityX=o,e.velocityY=s,e.direction=a}function Ny(t,e){let{session:r}=t,{pointers:i}=e,{length:n}=i;r.firstInput||(r.firstInput=Mh(e)),n>1&&!r.firstMultiple?r.firstMultiple=Mh(e):n===1&&(r.firstMultiple=!1);let{firstInput:o,firstMultiple:s}=r,a=s?s.center:o.center,c=e.center=dc(i);e.timeStamp=Date.now(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=Iy(a,c),e.distance=hc(a,c);let{deltaX:l,deltaY:f}=By(r,e);e.deltaX=l,e.deltaY=f,e.offsetDirection=pc(e.deltaX,e.deltaY);let u=gc(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=u.x,e.overallVelocityY=u.y,e.overallVelocity=Math.abs(u.x)>Math.abs(u.y)?u.x:u.y,e.scale=s?Oy(s.pointers,i):1,e.rotation=s?Ly(s.pointers,i):0,e.maxPointers=r.prevInput?e.pointers.length>r.prevInput.maxPointers?e.pointers.length:r.prevInput.maxPointers:e.pointers.length;let d=t.element;return Rh(e.srcEvent.target,d)&&(d=e.srcEvent.target),e.target=d,Fy(r,e),e}function Dy(t,e,r){let i=r.pointers.length,n=r.changedPointers.length,o=e&G.Start&&i-n===0,s=e&(G.End|G.Cancel)&&i-n===0;r.isFirst=!!o,r.isFinal=!!s,o&&(t.session={}),r.eventType=e;let a=Ny(t,r);t.emit("hammer.input",a),t.recognize(a),t.session.prevInput=a}var bo=class{constructor(e){this.evEl="",this.evWin="",this.evTarget="",this.domHandler=r=>{this.manager.options.enable&&this.handler(r)},this.manager=e,this.element=e.element,this.target=e.options.inputTarget||e.element}callback(e,r){Dy(this.manager,e,r)}init(){fc(this.element,this.evEl,this.domHandler),fc(this.target,this.evTarget,this.domHandler),fc(vh(this.element),this.evWin,this.domHandler)}destroy(){uc(this.element,this.evEl,this.domHandler),uc(this.target,this.evTarget,this.domHandler),uc(vh(this.element),this.evWin,this.domHandler)}};var z3={pointerdown:G.Start,pointermove:G.Move,pointerup:G.End,pointercancel:G.Cancel,pointerout:G.Cancel},j3="pointerdown",W3="pointermove pointerup pointercancel",Ao=class extends bo{constructor(e){super(e),this.evEl=j3,this.evWin=W3,this.store=this.manager.session.pointerEvents=[],this.init()}handler(e){let{store:r}=this,i=!1,n=z3[e.type],o=e.pointerType,s=o==="touch",a=r.findIndex(c=>c.pointerId===e.pointerId);n&G.Start&&(e.buttons||s)?a<0&&(r.push(e),a=r.length-1):n&(G.End|G.Cancel)&&(i=!0),!(a<0)&&(r[a]=e,this.callback(n,{pointers:r,changedPointers:[e],eventType:n,pointerType:o,srcEvent:e}),i&&r.splice(a,1))}};var G3=["","webkit","Moz","MS","ms","o"];function Uy(t,e){let r=e[0].toUpperCase()+e.slice(1);for(let i of G3){let n=i?i+r:e;if(n in t)return n}}var X3=1,ky=2,Vy={touchAction:"compute",enable:!0,inputTarget:null,cssProps:{userSelect:"none",userDrag:"none",touchCallout:"none",tapHighlightColor:"rgba(0,0,0,0)"}},yo=class{constructor(e,r){this.options={...Vy,...r,cssProps:{...Vy.cssProps,...r.cssProps},inputTarget:r.inputTarget||e},this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new Ao(this),this.touchAction=new _o(this,this.options.touchAction),this.toggleCssProps(!0)}set(e){return Object.assign(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this}stop(e){this.session.stopped=e?ky:X3}recognize(e){let{session:r}=this;if(r.stopped)return;this.session.prevented&&e.srcEvent.preventDefault();let i,{recognizers:n}=this,{curRecognizer:o}=r;(!o||o&&o.state&B.Recognized)&&(o=r.curRecognizer=null);let s=0;for(;s<n.length;)i=n[s],r.stopped!==ky&&(!o||i===o||i.canRecognizeWith(o))?i.recognize(e):i.reset(),!o&&i.state&(B.Began|B.Changed|B.Ended)&&(o=r.curRecognizer=i),s++}get(e){let{recognizers:r}=this;for(let i=0;i<r.length;i++)if(r[i].options.event===e)return r[i];return null}add(e){if(Array.isArray(e)){for(let i of e)this.add(i);return this}let r=this.get(e.options.event);return r&&this.remove(r),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e}remove(e){if(Array.isArray(e)){for(let i of e)this.remove(i);return this}let r=typeof e=="string"?this.get(e):e;if(r){let{recognizers:i}=this,n=i.indexOf(r);n!==-1&&(i.splice(n,1),this.touchAction.update())}return this}on(e,r){if(!e||!r)return;let{handlers:i}=this;for(let n of Bi(e))i[n]=i[n]||[],i[n].push(r)}off(e,r){if(!e)return;let{handlers:i}=this;for(let n of Bi(e))r?i[n]&&i[n].splice(i[n].indexOf(r),1):delete i[n]}emit(e,r){let i=this.handlers[e]&&this.handlers[e].slice();if(!i||!i.length)return;let n=r;n.type=e,n.preventDefault=function(){r.srcEvent.preventDefault()};let o=0;for(;o<i.length;)i[o](n),o++}destroy(){this.toggleCssProps(!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}toggleCssProps(e){let{element:r}=this;if(r){for(let[i,n]of Object.entries(this.options.cssProps)){let o=Uy(r.style,i);e?(this.oldCssProps[o]=r.style[o],r.style[o]=n):r.style[o]=this.oldCssProps[o]||""}e||(this.oldCssProps={})}}};var $3=1;function Hy(){return $3++}function Ih(t){return t&B.Cancelled?"cancel":t&B.Ended?"end":t&B.Changed?"move":t&B.Began?"start":""}var Ht=class{constructor(e){this.options=e,this.id=Hy(),this.state=B.Possible,this.simultaneous={},this.requireFail=[]}set(e){return Object.assign(this.options,e),this.manager.touchAction.update(),this}recognizeWith(e){if(Array.isArray(e)){for(let n of e)this.recognizeWith(n);return this}let r;if(typeof e=="string"){if(r=this.manager.get(e),!r)throw new Error(`Cannot find recognizer ${e}`)}else r=e;let{simultaneous:i}=this;return i[r.id]||(i[r.id]=r,r.recognizeWith(this)),this}dropRecognizeWith(e){if(Array.isArray(e)){for(let i of e)this.dropRecognizeWith(i);return this}let r;return typeof e=="string"?r=this.manager.get(e):r=e,r&&delete this.simultaneous[r.id],this}requireFailure(e){if(Array.isArray(e)){for(let n of e)this.requireFailure(n);return this}let r;if(typeof e=="string"){if(r=this.manager.get(e),!r)throw new Error(`Cannot find recognizer ${e}`)}else r=e;let{requireFail:i}=this;return i.indexOf(r)===-1&&(i.push(r),r.requireFailure(this)),this}dropRequireFailure(e){if(Array.isArray(e)){for(let i of e)this.dropRequireFailure(i);return this}let r;if(typeof e=="string"?r=this.manager.get(e):r=e,r){let i=this.requireFail.indexOf(r);i>-1&&this.requireFail.splice(i,1)}return this}hasRequireFailures(){return!!this.requireFail.find(e=>e.options.enable)}canRecognizeWith(e){return!!this.simultaneous[e.id]}emit(e){if(!e)return;let{state:r}=this;r<B.Ended&&this.manager.emit(this.options.event+Ih(r),e),this.manager.emit(this.options.event,e),e.additionalEvent&&this.manager.emit(e.additionalEvent,e),r>=B.Ended&&this.manager.emit(this.options.event+Ih(r),e)}tryEmit(e){this.canEmit()?this.emit(e):this.state=B.Failed}canEmit(){let e=0;for(;e<this.requireFail.length;){if(!(this.requireFail[e].state&(B.Failed|B.Possible)))return!1;e++}return!0}recognize(e){let r={...e};if(!this.options.enable){this.reset(),this.state=B.Failed;return}this.state&(B.Recognized|B.Cancelled|B.Failed)&&(this.state=B.Possible),this.state=this.process(r),this.state&(B.Began|B.Changed|B.Ended|B.Cancelled)&&this.tryEmit(r)}getEventNames(){return[this.options.event]}reset(){}};var zt=class extends Ht{attrTest(e){let r=this.options.pointers;return r===0||e.pointers.length===r}process(e){let{state:r}=this,{eventType:i}=e,n=r&(B.Began|B.Changed),o=this.attrTest(e);return n&&(i&G.Cancel||!o)?r|B.Cancelled:n||o?i&G.End?r|B.Ended:r&B.Began?r|B.Changed:B.Began:B.Failed}};var Gr=class extends Ht{constructor(e={}){super({enable:!0,event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10,...e}),this.pTime=null,this.pCenter=null,this._timer=null,this._input=null,this.count=0}getTouchAction(){return[po]}process(e){let{options:r}=this,i=e.pointers.length===r.pointers,n=e.distance<r.threshold,o=e.deltaTime<r.time;if(this.reset(),e.eventType&G.Start&&this.count===0)return this.failTimeout();if(n&&o&&i){if(e.eventType!==G.End)return this.failTimeout();let s=this.pTime?e.timeStamp-this.pTime<r.interval:!0,a=!this.pCenter||hc(this.pCenter,e.center)<r.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,!a||!s?this.count=1:this.count+=1,this._input=e,this.count%r.taps===0)return this.hasRequireFailures()?(this._timer=setTimeout(()=>{this.state=B.Recognized,this.tryEmit(this._input)},r.interval),B.Began):B.Recognized}return B.Failed}failTimeout(){return this._timer=setTimeout(()=>{this.state=B.Failed},this.options.interval),B.Failed}reset(){clearTimeout(this._timer)}emit(e){this.state===B.Recognized&&(e.tapCount=this.count,this.manager.emit(this.options.event,e))}};var K3=["","start","move","end","cancel","up","down","left","right"],ur=class extends zt{constructor(e={}){super({enable:!0,pointers:1,event:"pan",threshold:10,direction:J.All,...e}),this.pX=null,this.pY=null}getTouchAction(){let{options:{direction:e}}=this,r=[];return e&J.Horizontal&&r.push(mo),e&J.Vertical&&r.push(go),r}getEventNames(){return K3.map(e=>this.options.event+e)}directionTest(e){let{options:r}=this,i=!0,{distance:n}=e,{direction:o}=e,s=e.deltaX,a=e.deltaY;return o&r.direction||(r.direction&J.Horizontal?(o=s===0?J.None:s<0?J.Left:J.Right,i=s!==this.pX,n=Math.abs(e.deltaX)):(o=a===0?J.None:a<0?J.Up:J.Down,i=a!==this.pY,n=Math.abs(e.deltaY))),e.direction=o,i&&n>r.threshold&&!!(o&r.direction)}attrTest(e){return super.attrTest(e)&&(!!(this.state&B.Began)||!(this.state&B.Began)&&this.directionTest(e))}emit(e){this.pX=e.deltaX,this.pY=e.deltaY;let r=J[e.direction].toLowerCase();r&&(e.additionalEvent=this.options.event+r),super.emit(e)}};var Y3=["","start","move","end","cancel","in","out"],Oi=class extends zt{constructor(e={}){super({enable:!0,event:"pinch",threshold:0,pointers:2,...e})}getTouchAction(){return[Wr]}getEventNames(){return Y3.map(e=>this.options.event+e)}attrTest(e){return super.attrTest(e)&&(Math.abs(e.scale-1)>this.options.threshold||!!(this.state&B.Began))}emit(e){if(e.scale!==1){let r=e.scale<1?"in":"out";e.additionalEvent=this.options.event+r}super.emit(e)}};var vt=class{constructor(e,r,i){this.element=e,this.callback=r,this.options=i}};var zy=typeof navigator<"u"&&navigator.userAgent?navigator.userAgent.toLowerCase():"",TK=typeof window<"u"?window:global;var q3=zy.indexOf("firefox")!==-1,jy=4.000244140625,eI=40,tI=.25,mc=class extends vt{constructor(e,r,i){super(e,r,{enable:!0,...i}),this.handleEvent=n=>{if(!this.options.enable)return;let o=n.deltaY;globalThis.WheelEvent&&(q3&&n.deltaMode===globalThis.WheelEvent.DOM_DELTA_PIXEL&&(o/=globalThis.devicePixelRatio),n.deltaMode===globalThis.WheelEvent.DOM_DELTA_LINE&&(o*=eI)),o!==0&&o%jy===0&&(o=Math.floor(o/jy)),n.shiftKey&&o&&(o=o*tI),this.callback({type:"wheel",center:{x:n.clientX,y:n.clientY},delta:-o,srcEvent:n,pointerType:"mouse",target:n.target})},e.addEventListener("wheel",this.handleEvent,{passive:!1})}destroy(){this.element.removeEventListener("wheel",this.handleEvent)}enableEventType(e,r){e==="wheel"&&(this.options.enable=r)}};var Wy=["mousedown","mousemove","mouseup","mouseover","mouseout","mouseleave"],_c=class extends vt{constructor(e,r,i){super(e,r,{enable:!0,...i}),this.handleEvent=o=>{this.handleOverEvent(o),this.handleOutEvent(o),this.handleEnterEvent(o),this.handleLeaveEvent(o),this.handleMoveEvent(o)},this.pressed=!1;let{enable:n}=this.options;this.enableMoveEvent=n,this.enableLeaveEvent=n,this.enableEnterEvent=n,this.enableOutEvent=n,this.enableOverEvent=n,Wy.forEach(o=>e.addEventListener(o,this.handleEvent))}destroy(){Wy.forEach(e=>this.element.removeEventListener(e,this.handleEvent))}enableEventType(e,r){switch(e){case"pointermove":this.enableMoveEvent=r;break;case"pointerover":this.enableOverEvent=r;break;case"pointerout":this.enableOutEvent=r;break;case"pointerenter":this.enableEnterEvent=r;break;case"pointerleave":this.enableLeaveEvent=r;break;default:}}handleOverEvent(e){this.enableOverEvent&&e.type==="mouseover"&&this._emit("pointerover",e)}handleOutEvent(e){this.enableOutEvent&&e.type==="mouseout"&&this._emit("pointerout",e)}handleEnterEvent(e){this.enableEnterEvent&&e.type==="mouseenter"&&this._emit("pointerenter",e)}handleLeaveEvent(e){this.enableLeaveEvent&&e.type==="mouseleave"&&this._emit("pointerleave",e)}handleMoveEvent(e){if(this.enableMoveEvent)switch(e.type){case"mousedown":e.button>=0&&(this.pressed=!0);break;case"mousemove":e.buttons===0&&(this.pressed=!1),this.pressed||this._emit("pointermove",e);break;case"mouseup":this.pressed=!1;break;default:}}_emit(e,r){this.callback({type:e,center:{x:r.clientX,y:r.clientY},srcEvent:r,pointerType:"mouse",target:r.target})}};var Gy=["keydown","keyup"],bc=class extends vt{constructor(e,r,i){super(e,r,{enable:!0,tabIndex:0,...i}),this.handleEvent=n=>{let o=n.target||n.srcElement;o.tagName==="INPUT"&&o.type==="text"||o.tagName==="TEXTAREA"||(this.enableDownEvent&&n.type==="keydown"&&this.callback({type:"keydown",srcEvent:n,key:n.key,target:n.target}),this.enableUpEvent&&n.type==="keyup"&&this.callback({type:"keyup",srcEvent:n,key:n.key,target:n.target}))},this.enableDownEvent=this.options.enable,this.enableUpEvent=this.options.enable,e.tabIndex=this.options.tabIndex,e.style.outline="none",Gy.forEach(n=>e.addEventListener(n,this.handleEvent))}destroy(){Gy.forEach(e=>this.element.removeEventListener(e,this.handleEvent))}enableEventType(e,r){e==="keydown"&&(this.enableDownEvent=r),e==="keyup"&&(this.enableUpEvent=r)}};var Ac=class extends vt{constructor(e,r,i){super(e,r,i),this.handleEvent=n=>{this.options.enable&&this.callback({type:"contextmenu",center:{x:n.clientX,y:n.clientY},srcEvent:n,pointerType:"mouse",target:n.target})},e.addEventListener("contextmenu",this.handleEvent)}destroy(){this.element.removeEventListener("contextmenu",this.handleEvent)}enableEventType(e,r){e==="contextmenu"&&(this.options.enable=r)}};var rI={pointerdown:1,pointermove:2,pointerup:4,mousedown:1,mousemove:2,mouseup:4},iI=0,nI=1,oI=2,sI=1,aI=2,cI=4;function Xy(t){let e=rI[t.srcEvent.type];if(!e)return null;let{buttons:r,button:i}=t.srcEvent,n=!1,o=!1,s=!1;return e===2?(n=!!(r&sI),o=!!(r&cI),s=!!(r&aI)):(n=i===iI,o=i===nI,s=i===oI),{leftButton:n,middleButton:o,rightButton:s}}function $y(t,e){let r=t.center;if(!r)return null;let i=e.getBoundingClientRect(),n=i.width/e.offsetWidth||1,o=i.height/e.offsetHeight||1,s={x:(r.x-i.left-e.clientLeft)/n,y:(r.y-i.top-e.clientTop)/o};return{center:r,offsetCenter:s}}var lI={srcElement:"root",priority:0},yc=class{constructor(e,r){this.handleEvent=i=>{if(this.isEmpty())return;let n=this._normalizeEvent(i),o=i.srcEvent.target;for(;o&&o!==n.rootElement;){if(this._emit(n,o),n.handled)return;o=o.parentNode}this._emit(n,"root")},this.eventManager=e,this.recognizerName=r,this.handlers=[],this.handlersByElement=new Map,this._active=!1}isEmpty(){return!this._active}add(e,r,i,n=!1,o=!1){let{handlers:s,handlersByElement:a}=this,c={...lI,...i},l=a.get(c.srcElement);l||(l=[],a.set(c.srcElement,l));let f={type:e,handler:r,srcElement:c.srcElement,priority:c.priority};n&&(f.once=!0),o&&(f.passive=!0),s.push(f),this._active=this._active||!f.passive;let u=l.length-1;for(;u>=0&&!(l[u].priority>=f.priority);)u--;l.splice(u+1,0,f)}remove(e,r){let{handlers:i,handlersByElement:n}=this;for(let o=i.length-1;o>=0;o--){let s=i[o];if(s.type===e&&s.handler===r){i.splice(o,1);let a=n.get(s.srcElement);a.splice(a.indexOf(s),1),a.length===0&&n.delete(s.srcElement)}}this._active=i.some(o=>!o.passive)}_emit(e,r){let i=this.handlersByElement.get(r);if(i){let n=!1,o=()=>{e.handled=!0},s=()=>{e.handled=!0,n=!0},a=[];for(let c=0;c<i.length;c++){let{type:l,handler:f,once:u}=i[c];if(f({...e,type:l,stopPropagation:o,stopImmediatePropagation:s}),u&&a.push(i[c]),n)break}for(let c=0;c<a.length;c++){let{type:l,handler:f}=a[c];this.remove(l,f)}}}_normalizeEvent(e){let r=this.eventManager.getElement();return{...e,...Xy(e),...$y(e,r),preventDefault:()=>{e.srcEvent.preventDefault()},stopImmediatePropagation:null,stopPropagation:null,handled:!1,rootElement:r}}};function fI(t){if("recognizer"in t)return t;let e,r=Array.isArray(t)?[...t]:[t];if(typeof r[0]=="function"){let i=r.shift(),n=r.shift()||{};e=new i(n)}else e=r.shift();return{recognizer:e,recognizeWith:typeof r[0]=="string"?[r[0]]:r[0],requireFailure:typeof r[1]=="string"?[r[1]]:r[1]}}var xo=class{constructor(e=null,r={}){if(this._onBasicInput=i=>{this.manager.emit(i.srcEvent.type,i)},this._onOtherEvent=i=>{this.manager.emit(i.type,i)},this.options={recognizers:[],events:{},touchAction:"compute",tabIndex:0,cssProps:{},...r},this.events=new Map,this.element=e,!!e){this.manager=new yo(e,this.options);for(let i of this.options.recognizers){let{recognizer:n,recognizeWith:o,requireFailure:s}=fI(i);this.manager.add(n),o&&n.recognizeWith(o),s&&n.requireFailure(s)}this.manager.on("hammer.input",this._onBasicInput),this.wheelInput=new mc(e,this._onOtherEvent,{enable:!1}),this.moveInput=new _c(e,this._onOtherEvent,{enable:!1}),this.keyInput=new bc(e,this._onOtherEvent,{enable:!1,tabIndex:r.tabIndex}),this.contextmenuInput=new Ac(e,this._onOtherEvent,{enable:!1}),this.on(this.options.events)}}getElement(){return this.element}destroy(){this.element&&(this.wheelInput.destroy(),this.moveInput.destroy(),this.keyInput.destroy(),this.contextmenuInput.destroy(),this.manager.destroy())}on(e,r,i){this._addEventHandler(e,r,i,!1)}once(e,r,i){this._addEventHandler(e,r,i,!0)}watch(e,r,i){this._addEventHandler(e,r,i,!1,!0)}off(e,r){this._removeEventHandler(e,r)}_toggleRecognizer(e,r){let{manager:i}=this;if(!i)return;let n=i.get(e);n&&(n.set({enable:r}),i.touchAction.update()),this.wheelInput?.enableEventType(e,r),this.moveInput?.enableEventType(e,r),this.keyInput?.enableEventType(e,r),this.contextmenuInput?.enableEventType(e,r)}_addEventHandler(e,r,i,n,o){if(typeof e!="string"){i=r;for(let[l,f]of Object.entries(e))this._addEventHandler(l,f,i,n,o);return}let{manager:s,events:a}=this;if(!s)return;let c=a.get(e);if(!c){let l=this._getRecognizerName(e)||e;c=new yc(this,l),a.set(e,c),s&&s.on(e,c.handleEvent)}c.add(e,r,i,n,o),c.isEmpty()||this._toggleRecognizer(c.recognizerName,!0)}_removeEventHandler(e,r){if(typeof e!="string"){for(let[o,s]of Object.entries(e))this._removeEventHandler(o,s);return}let{events:i}=this,n=i.get(e);if(n&&(n.remove(e,r),n.isEmpty())){let{recognizerName:o}=n,s=!1;for(let a of i.values())if(a.recognizerName===o&&!a.isEmpty()){s=!0;break}s||this._toggleRecognizer(o,!1)}}_getRecognizerName(e){return this.manager.recognizers.find(r=>r.getEventNames().includes(e))?.options.event}};var Bh={DEFAULT:"default",LNGLAT:"lnglat",METER_OFFSETS:"meter-offsets",LNGLAT_OFFSETS:"lnglat-offsets",CARTESIAN:"cartesian"};Object.defineProperty(Bh,"IDENTITY",{get:()=>(P.deprecated("COORDINATE_SYSTEM.IDENTITY","COORDINATE_SYSTEM.CARTESIAN")(),Bh.CARTESIAN)});var fe={WEB_MERCATOR:1,GLOBE:2,WEB_MERCATOR_AUTO_OFFSET:4,IDENTITY:0},xe={common:0,meters:1,pixels:2},Li={click:"onClick",dblclick:"onClick",panstart:"onDragStart",panmove:"onDrag",panend:"onDragEnd"},Oh={multipan:[ur,{threshold:10,direction:J.Vertical,pointers:2}],pinch:[Oi,{},null,["multipan"]],pan:[ur,{threshold:1},["pinch"],["multipan"]],dblclick:[Gr,{event:"dblclick",taps:2}],click:[Gr,{event:"click"},null,["dblclick"]]};function uI(t,e){if(t===e)return!0;if(Array.isArray(t)){let r=t.length;if(!e||e.length!==r)return!1;for(let i=0;i<r;i++)if(t[i]!==e[i])return!1;return!0}return!1}function Rt(t){let e={},r;return i=>{for(let n in i)if(!uI(i[n],e[n])){r=t(i),e=i;break}return r}}var Ky=[0,0,0,0],dI=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],Yy=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],hI=[0,0,0],Jy=[0,0,0],pI={default:-1,cartesian:0,lnglat:1,"meter-offsets":2,"lnglat-offsets":3};function Xr(t){let e=pI[t];if(e===void 0)throw new Error(`Invalid coordinateSystem: ${t}`);return e}var gI=Rt(_I);function Lh(t,e,r=Jy){r.length<3&&(r=[r[0],r[1],0]);let i=r,n,o=!0;switch(e==="lnglat-offsets"||e==="meter-offsets"?n=r:n=t.isGeospatial?[Math.fround(t.longitude),Math.fround(t.latitude),0]:null,t.projectionMode){case fe.WEB_MERCATOR:(e==="lnglat"||e==="cartesian")&&(n=[0,0,0],o=!1);break;case fe.WEB_MERCATOR_AUTO_OFFSET:e==="lnglat"?i=n:e==="cartesian"&&(i=[Math.fround(t.center[0]),Math.fround(t.center[1]),0],n=t.unprojectPosition(i),i[0]-=r[0],i[1]-=r[1],i[2]-=r[2]);break;case fe.IDENTITY:i=t.position.map(Math.fround),i[2]=i[2]||0;break;case fe.GLOBE:o=!1,n=null;break;default:o=!1}return{geospatialOrigin:n,shaderCoordinateOrigin:i,offsetMode:o}}function mI(t,e,r){let{viewMatrixUncentered:i,projectionMatrix:n}=t,{viewMatrix:o,viewProjectionMatrix:s}=t,a=Ky,c=Ky,l=t.cameraPosition,{geospatialOrigin:f,shaderCoordinateOrigin:u,offsetMode:d}=Lh(t,e,r);return d&&(c=t.projectPosition(f||u),l=[l[0]-c[0],l[1]-c[1],l[2]-c[2]],c[3]=1,a=Be.transformMat4([],c,s),o=i||o,s=le.multiply([],n,o),s=le.multiply([],s,dI)),{viewMatrix:o,viewProjectionMatrix:s,projectionCenter:a,originCommon:c,cameraPosCommon:l,shaderCoordinateOrigin:u,geospatialOrigin:f}}function Qy({viewport:t,devicePixelRatio:e=1,modelMatrix:r=null,coordinateSystem:i="default",coordinateOrigin:n=Jy,autoWrapLongitude:o=!1}){i==="default"&&(i=t.isGeospatial?"lnglat":"cartesian");let s=gI({viewport:t,devicePixelRatio:e,coordinateSystem:i,coordinateOrigin:n});return s.wrapLongitude=o,s.modelMatrix=r||Yy,s}function _I({viewport:t,devicePixelRatio:e,coordinateSystem:r,coordinateOrigin:i}){let{projectionCenter:n,viewProjectionMatrix:o,originCommon:s,cameraPosCommon:a,shaderCoordinateOrigin:c,geospatialOrigin:l}=mI(t,r,i),f=t.getDistanceScales(),u=[t.width*e,t.height*e],d=Be.transformMat4([],[0,0,-t.focalDistance,1],t.projectionMatrix)[3]||1,h={coordinateSystem:Xr(r),projectionMode:t.projectionMode,coordinateOrigin:c,commonOrigin:s.slice(0,3),center:n,pseudoMeters:!!t._pseudoMeters,viewportSize:u,devicePixelRatio:e,focalDistance:d,commonUnitsPerMeter:f.unitsPerMeter,commonUnitsPerWorldUnit:f.unitsPerMeter,commonUnitsPerWorldUnit2:hI,scale:t.scale,wrapLongitude:!1,viewProjectionMatrix:o,modelMatrix:Yy,cameraPosition:a};if(l){let p=t.getDistanceScales(l);switch(r){case"meter-offsets":h.commonUnitsPerWorldUnit=p.unitsPerMeter,h.commonUnitsPerWorldUnit2=p.unitsPerMeter2;break;case"lnglat":case"lnglat-offsets":t._pseudoMeters||(h.commonUnitsPerMeter=p.unitsPerMeter),h.commonUnitsPerWorldUnit=p.unitsPerDegree,h.commonUnitsPerWorldUnit2=p.unitsPerDegree2;break;case"cartesian":h.commonUnitsPerWorldUnit=[1,1,p.unitsPerMeter[2]],h.commonUnitsPerWorldUnit2=[0,0,p.unitsPerMeter2[2]];break;default:break}}return h}var bI=["default","lnglat","meter-offsets","lnglat-offsets","cartesian"],AI=bI.map(t=>`const COORDINATE_SYSTEM_${t.toUpperCase().replaceAll("-","_")}: i32 = ${Xr(t)};`).join(""),yI=Object.keys(fe).map(t=>`const PROJECTION_MODE_${t}: i32 = ${fe[t]};`).join(""),xI=Object.keys(xe).map(t=>`const UNIT_${t.toUpperCase()}: i32 = ${xe[t]};`).join(""),TI=`${AI}
${yI}
${xI}

const TILE_SIZE: f32 = 512.0;
const PI: f32 = 3.1415926536;
const WORLD_SCALE: f32 = TILE_SIZE / (PI * 2.0);
const ZERO_64_LOW: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
const EARTH_RADIUS: f32 = 6370972.0; // meters
const GLOBE_RADIUS: f32 = 256.0;

// -----------------------------------------------------------------------------
// Uniform block (converted from GLSL uniform block)
// -----------------------------------------------------------------------------
struct ProjectUniforms {
  wrapLongitude: i32,
  coordinateSystem: i32,
  commonUnitsPerMeter: vec3<f32>,
  projectionMode: i32,
  scale: f32,
  commonUnitsPerWorldUnit: vec3<f32>,
  commonUnitsPerWorldUnit2: vec3<f32>,
  center: vec4<f32>,
  modelMatrix: mat4x4<f32>,
  viewProjectionMatrix: mat4x4<f32>,
  viewportSize: vec2<f32>,
  devicePixelRatio: f32,
  focalDistance: f32,
  cameraPosition: vec3<f32>,
  coordinateOrigin: vec3<f32>,
  commonOrigin: vec3<f32>,
  pseudoMeters: i32,
};

@group(0) @binding(auto)
var<uniform> project: ProjectUniforms;

// -----------------------------------------------------------------------------
// Geometry data shared across the project helpers.
// The active layer shader is responsible for populating this private module
// state before calling the project functions below.
// -----------------------------------------------------------------------------

// Structure to carry additional geometry data used by deck.gl filters.
struct Geometry {
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  position: vec4<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry: Geometry;
`,Zy=`${TI}

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

// Returns an adjustment factor for commonUnitsPerMeter
fn _project_size_at_latitude(lat: f32) -> f32 {
  let y = clamp(lat, -89.9, 89.9);
  return 1.0 / cos(radians(y));
}

// Overloaded version: scales a value in meters at a given latitude.
fn _project_size_at_latitude_m(meters: f32, lat: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * _project_size_at_latitude(lat);
}

// Computes a non-linear scale factor based on geometry.
// (Note: This function relies on "geometry" being provided.)
fn project_size() -> f32 {
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
      project.pseudoMeters == 0) {
    if (geometry.position.w == 0.0) {
      return _project_size_at_latitude(geometry.worldPosition.y);
    }
    let y: f32 = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
    let y2 = y * y;
    let y4 = y2 * y2;
    let y6 = y4 * y2;
    return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
  }
  return 1.0;
}

// Overloads to scale offsets (meters to world units)
fn project_size_float(meters: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * project_size();
}

fn project_size_vec2(meters: vec2<f32>) -> vec2<f32> {
  return meters * project.commonUnitsPerMeter.xy * project_size();
}

fn project_size_vec3(meters: vec3<f32>) -> vec3<f32> {
  return meters * project.commonUnitsPerMeter * project_size();
}

fn project_size_vec4(meters: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(meters.xyz * project.commonUnitsPerMeter, meters.w);
}

// Returns a rotation matrix aligning the z\u2011axis with the given up vector.
fn project_get_orientation_matrix(up: vec3<f32>) -> mat3x3<f32> {
  let uz = normalize(up);
  let ux = select(
    vec3<f32>(1.0, 0.0, 0.0),
    normalize(vec3<f32>(uz.y, -uz.x, 0.0)),
    abs(uz.z) == 1.0
  );
  let uy = cross(uz, ux);
  return mat3x3<f32>(ux, uy, uz);
}

// Since WGSL does not support "out" parameters, we return a struct.
struct RotationResult {
  needsRotation: bool,
  transform: mat3x3<f32>,
};

fn project_needs_rotation(commonPosition: vec3<f32>) -> RotationResult {
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    return RotationResult(true, project_get_orientation_matrix(commonPosition));
  } else {
    return RotationResult(false, mat3x3<f32>());  // identity alternative if needed
  };
}

// Projects a normal vector from the current coordinate system to world space.
fn project_normal(vector: vec3<f32>) -> vec3<f32> {
  let normal_modelspace = project.modelMatrix * vec4<f32>(vector, 0.0);
  var n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
  let rotResult = project_needs_rotation(geometry.position.xyz);
  if (rotResult.needsRotation) {
    n = rotResult.transform * n;
  }
  return n;
}

// Applies a scale offset based on y-offset (dy)
fn project_offset_(offset: vec4<f32>) -> vec4<f32> {
  let dy: f32 = offset.y;
  let commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
  return vec4<f32>(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}

// Projects lng/lat coordinates to a unit tile [0,1]
fn project_mercator_(lnglat: vec2<f32>) -> vec2<f32> {
  var x = lnglat.x;
  if (project.wrapLongitude != 0) {
    x = ((x + 180.0) % 360.0) - 180.0;
  }
  let y = clamp(lnglat.y, -89.9, 89.9);
  return vec2<f32>(
    radians(x) + PI,
    PI + log(tan(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// Projects lng/lat/z coordinates for a globe projection.
fn project_globe_(lnglatz: vec3<f32>) -> vec3<f32> {
  let lambda = radians(lnglatz.x);
  let phi = radians(lnglatz.y);
  let cosPhi = cos(phi);
  let D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
  return vec3<f32>(
    sin(lambda) * cosPhi,
    -cos(lambda) * cosPhi,
    sin(phi)
  ) * D;
}

// Projects positions (with an optional 64-bit low part) from the input
// coordinate system to the common space.
fn project_position_vec4_f64(position: vec4<f32>, position64Low: vec3<f32>) -> vec4<f32> {
  var position_world = project.modelMatrix * position;

  // Work around for a Mac+NVIDIA bug:
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_mercator_(position_world.xy),
        _project_size_at_latitude_m(position_world.z, position_world.y),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
      position_world = vec4f(position_world.xyz + project.coordinateOrigin, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_globe_(position_world.xyz),
        position_world.w
      );
    }
  }
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
        return vec4<f32>(
          project_mercator_(position_world.xy) - project.commonOrigin.xy,
          project_size_float(position_world.z),
          position_world.w
        );
      }
    }
  }
  if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
      (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
       (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
        project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
    position_world = vec4f(position_world.xyz - project.coordinateOrigin, position_world.w);
  }

  return project_offset_(position_world) +
         project_offset_(project.modelMatrix * vec4<f32>(position64Low, 0.0));
}

// Overloaded versions for different input types.
fn project_position_vec4_f32(position: vec4<f32>) -> vec4<f32> {
  return project_position_vec4_f64(position, ZERO_64_LOW);
}

fn project_position_vec3_f64(position: vec3<f32>, position64Low: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), position64Low);
  return projected_position.xyz;
}

fn project_position_vec3_f32(position: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), ZERO_64_LOW);
  return projected_position.xyz;
}

fn project_position_vec2_f32(position: vec2<f32>) -> vec2<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 0.0, 1.0), ZERO_64_LOW);
  return projected_position.xy;
}

// Transforms a common space position to clip space.
fn project_common_position_to_clipspace_with_projection(position: vec4<f32>, viewProjectionMatrix: mat4x4<f32>, center: vec4<f32>) -> vec4<f32> {
  return viewProjectionMatrix * position + center;
}

// Uses the project viewProjectionMatrix and center.
fn project_common_position_to_clipspace(position: vec4<f32>) -> vec4<f32> {
  return project_common_position_to_clipspace_with_projection(position, project.viewProjectionMatrix, project.center);
}

// Returns a clip space offset corresponding to a given number of screen pixels.
fn project_pixel_size_to_clipspace(pixels: vec2<f32>) -> vec2<f32> {
  let offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
  return offset * project.focalDistance;
}

fn project_meter_size_to_pixel(meters: f32) -> f32 {
  return project_size_float(meters) * project.scale;
}

fn project_unit_size_to_pixel(size: f32, unit: i32) -> f32 {
  if (unit == UNIT_METERS) {
    return project_meter_size_to_pixel(size);
  } else if (unit == UNIT_COMMON) {
    return size * project.scale;
  }
  // UNIT_PIXELS: no scaling applied.
  return size;
}

fn project_pixel_size_float(pixels: f32) -> f32 {
  return pixels / project.scale;
}

fn project_pixel_size_vec2(pixels: vec2<f32>) -> vec2<f32> {
  return pixels / project.scale;
}
`;var SI=["default","lnglat","meter-offsets","lnglat-offsets","cartesian"],EI=SI.map(t=>`const int COORDINATE_SYSTEM_${t.toUpperCase().replaceAll("-","_")} = ${Xr(t)};`).join(""),CI=Object.keys(fe).map(t=>`const int PROJECTION_MODE_${t} = ${fe[t]};`).join(""),vI=Object.keys(xe).map(t=>`const int UNIT_${t.toUpperCase()} = ${xe[t]};`).join(""),qy=`${EI}
${CI}
${vI}
layout(std140) uniform projectUniforms {
bool wrapLongitude;
int coordinateSystem;
vec3 commonUnitsPerMeter;
int projectionMode;
float scale;
vec3 commonUnitsPerWorldUnit;
vec3 commonUnitsPerWorldUnit2;
vec4 center;
mat4 modelMatrix;
mat4 viewProjectionMatrix;
vec2 viewportSize;
float devicePixelRatio;
float focalDistance;
vec3 cameraPosition;
vec3 coordinateOrigin;
vec3 commonOrigin;
bool pseudoMeters;
} project;
const float TILE_SIZE = 512.0;
const float PI = 3.1415926536;
const float WORLD_SCALE = TILE_SIZE / (PI * 2.0);
const vec3 ZERO_64_LOW = vec3(0.0);
const float EARTH_RADIUS = 6370972.0;
const float GLOBE_RADIUS = 256.0;
float project_size_at_latitude(float lat) {
float y = clamp(lat, -89.9, 89.9);
return 1.0 / cos(radians(y));
}
float project_size() {
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
project.pseudoMeters == false) {
if (geometry.position.w == 0.0) {
return project_size_at_latitude(geometry.worldPosition.y);
}
float y = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
float y2 = y * y;
float y4 = y2 * y2;
float y6 = y4 * y2;
return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
}
return 1.0;
}
float project_size_at_latitude(float meters, float lat) {
return meters * project.commonUnitsPerMeter.z * project_size_at_latitude(lat);
}
float project_size(float meters) {
return meters * project.commonUnitsPerMeter.z * project_size();
}
vec2 project_size(vec2 meters) {
return meters * project.commonUnitsPerMeter.xy * project_size();
}
vec3 project_size(vec3 meters) {
return meters * project.commonUnitsPerMeter * project_size();
}
vec4 project_size(vec4 meters) {
return vec4(meters.xyz * project.commonUnitsPerMeter, meters.w);
}
mat3 project_get_orientation_matrix(vec3 up) {
vec3 uz = normalize(up);
vec3 ux = abs(uz.z) == 1.0 ? vec3(1.0, 0.0, 0.0) : normalize(vec3(uz.y, -uz.x, 0));
vec3 uy = cross(uz, ux);
return mat3(ux, uy, uz);
}
bool project_needs_rotation(vec3 commonPosition, out mat3 transform) {
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
transform = project_get_orientation_matrix(commonPosition);
return true;
}
return false;
}
vec3 project_normal(vec3 vector) {
vec4 normal_modelspace = project.modelMatrix * vec4(vector, 0.0);
vec3 n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
mat3 rotation;
if (project_needs_rotation(geometry.position.xyz, rotation)) {
n = rotation * n;
}
return n;
}
vec4 project_offset_(vec4 offset) {
float dy = offset.y;
vec3 commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
return vec4(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}
vec2 project_mercator_(vec2 lnglat) {
float x = lnglat.x;
if (project.wrapLongitude) {
x = mod(x + 180., 360.0) - 180.;
}
float y = clamp(lnglat.y, -89.9, 89.9);
return vec2(
radians(x) + PI,
PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
) * WORLD_SCALE;
}
vec3 project_globe_(vec3 lnglatz) {
float lambda = radians(lnglatz.x);
float phi = radians(lnglatz.y);
float cosPhi = cos(phi);
float D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
return vec3(
sin(lambda) * cosPhi,
-cos(lambda) * cosPhi,
sin(phi)
) * D;
}
vec4 project_position(vec4 position, vec3 position64Low) {
vec4 position_world = project.modelMatrix * position;
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_mercator_(position_world.xy),
project_size_at_latitude(position_world.z, position_world.y),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
position_world.xyz += project.coordinateOrigin;
}
}
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_globe_(position_world.xyz),
position_world.w
);
}
}
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
return vec4(
project_mercator_(position_world.xy) - project.commonOrigin.xy,
project_size(position_world.z),
position_world.w
);
}
}
}
if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
(project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
(project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
position_world.xyz -= project.coordinateOrigin;
}
return project_offset_(position_world) + project_offset_(project.modelMatrix * vec4(position64Low, 0.0));
}
vec4 project_position(vec4 position) {
return project_position(position, ZERO_64_LOW);
}
vec3 project_position(vec3 position, vec3 position64Low) {
vec4 projected_position = project_position(vec4(position, 1.0), position64Low);
return projected_position.xyz;
}
vec3 project_position(vec3 position) {
vec4 projected_position = project_position(vec4(position, 1.0), ZERO_64_LOW);
return projected_position.xyz;
}
vec2 project_position(vec2 position) {
vec4 projected_position = project_position(vec4(position, 0.0, 1.0), ZERO_64_LOW);
return projected_position.xy;
}
vec4 project_common_position_to_clipspace(vec4 position, mat4 viewProjectionMatrix, vec4 center) {
return viewProjectionMatrix * position + center;
}
vec4 project_common_position_to_clipspace(vec4 position) {
return project_common_position_to_clipspace(position, project.viewProjectionMatrix, project.center);
}
vec2 project_pixel_size_to_clipspace(vec2 pixels) {
vec2 offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
return offset * project.focalDistance;
}
float project_size_to_pixel(float meters) {
return project_size(meters) * project.scale;
}
vec2 project_size_to_pixel(vec2 meters) {
return project_size(meters) * project.scale;
}
float project_size_to_pixel(float size, int unit) {
if (unit == UNIT_METERS) return project_size_to_pixel(size);
if (unit == UNIT_COMMON) return size * project.scale;
return size;
}
float project_pixel_size(float pixels) {
return pixels / project.scale;
}
vec2 project_pixel_size(vec2 pixels) {
return pixels / project.scale;
}
`;var RI={};function MI(t=RI){return"viewport"in t?Qy(t):{}}var Fi={name:"project",dependencies:[Fd,lc],source:Zy,vs:qy,getUniforms:MI,uniformTypes:{wrapLongitude:"f32",coordinateSystem:"i32",commonUnitsPerMeter:"vec3<f32>",projectionMode:"i32",scale:"f32",commonUnitsPerWorldUnit:"vec3<f32>",commonUnitsPerWorldUnit2:"vec3<f32>",center:"vec4<f32>",modelMatrix:"mat4x4<f32>",viewProjectionMatrix:"mat4x4<f32>",viewportSize:"vec2<f32>",devicePixelRatio:"f32",focalDistance:"f32",cameraPosition:"vec3<f32>",coordinateOrigin:"vec3<f32>",commonOrigin:"vec3<f32>",pseudoMeters:"f32"}};var PI=`// Define a structure to hold both the clip-space position and the common position.
struct ProjectResult {
  clipPosition: vec4<f32>,
  commonPosition: vec4<f32>,
};

// This function mimics the GLSL version with the 'out' parameter by returning both values.
fn project_position_to_clipspace_and_commonspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> ProjectResult {
  // Compute the projected position.
  let projectedPosition: vec3<f32> = project_position_vec3_f64(position, position64Low);

  // Start with the provided offset.
  var finalOffset: vec3<f32> = offset;

  // Get whether a rotation is needed and the rotation matrix.
  let rotationResult = project_needs_rotation(projectedPosition);

  // If rotation is needed, update the offset.
  if (rotationResult.needsRotation) {
    finalOffset = rotationResult.transform * offset;
  }

  // Compute the common position.
  let commonPosition: vec4<f32> = vec4<f32>(projectedPosition + finalOffset, 1.0);

  // Convert to clip-space.
  let clipPosition: vec4<f32> = project_common_position_to_clipspace(commonPosition);

  return ProjectResult(clipPosition, commonPosition);
}

// A convenience overload that returns only the clip-space position.
fn project_position_to_clipspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> vec4<f32> {
  return project_position_to_clipspace_and_commonspace(position, position64Low, offset).clipPosition;
}
`,wI=`vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset, out vec4 commonPosition
) {
  vec3 projectedPosition = project_position(position, position64Low);
  mat3 rotation;
  if (project_needs_rotation(projectedPosition, rotation)) {
    // offset is specified as ENU
    // when in globe projection, rotate offset so that the ground alighs with the surface of the globe
    offset = rotation * offset;
  }
  commonPosition = vec4(projectedPosition + offset, 1.0);
  return project_common_position_to_clipspace(commonPosition);
}

vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset
) {
  vec4 commonPosition;
  return project_position_to_clipspace(position, position64Low, offset, commonPosition);
}
`,Oe={name:"project32",dependencies:[Fi],source:PI,vs:wI};function Fh(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function dr(t,e){let r=Be.transformMat4([],e,t);return Be.scale(r,r,1/r[3]),r}function To(t,e,r){return t<e?e:t>r?r:t}function II(t){return Math.log(t)*Math.LOG2E}var So=Math.log2||II;function at(t,e){if(!t)throw new Error(e||"@math.gl/web-mercator: assertion failed.")}var ct=Math.PI,ex=ct/4,Ze=ct/180,Nh=180/ct,Ni=512,xc=4003e4,Me=85.051129,tx=1.5;function Dh(t){return So(t)}function Le(t){let[e,r]=t;at(Number.isFinite(e)),at(Number.isFinite(r)&&r>=-90&&r<=90,"invalid latitude");let i=e*Ze,n=r*Ze,o=Ni*(i+ct)/(2*ct),s=Ni*(ct+Math.log(Math.tan(ex+n*.5)))/(2*ct);return[o,s]}function Fe(t){let[e,r]=t,i=e/Ni*(2*ct)-ct,n=2*(Math.atan(Math.exp(r/Ni*(2*ct)-ct))-ex);return[i*Nh,n*Nh]}function Uh(t){let{latitude:e}=t;at(Number.isFinite(e));let r=Math.cos(e*Ze);return Dh(xc*r)-9}function $r(t){let e=Math.cos(t*Ze);return Ni/xc/e}function Di(t){let{latitude:e,longitude:r,highPrecision:i=!1}=t;at(Number.isFinite(e)&&Number.isFinite(r));let n=Ni,o=Math.cos(e*Ze),s=n/360,a=s/o,c=n/xc/o,l={unitsPerMeter:[c,c,c],metersPerUnit:[1/c,1/c,1/c],unitsPerDegree:[s,a,c],degreesPerUnit:[1/s,1/a,1/c]};if(i){let f=Ze*Math.tan(e*Ze)/o,u=s*f/2,d=n/xc*f,h=d/a*c;l.unitsPerDegree2=[0,u,d],l.unitsPerMeter2=[h,0,h]}return l}function Eo(t,e){let[r,i,n]=t,[o,s,a]=e,{unitsPerMeter:c,unitsPerMeter2:l}=Di({longitude:r,latitude:i,highPrecision:!0}),f=Le(t);f[0]+=o*(c[0]+l[0]*s),f[1]+=s*(c[1]+l[1]*s);let u=Fe(f),d=(n||0)+(a||0);return Number.isFinite(n)||Number.isFinite(a)?[u[0],u[1],d]:u}function Tc(t){let{height:e,pitch:r,bearing:i,altitude:n,scale:o,center:s}=t,a=Fh();le.translate(a,a,[0,0,-n]),le.rotateX(a,a,-r*Ze),le.rotateZ(a,a,i*Ze);let c=o/e;return le.scale(a,a,[c,c,c]),s&&le.translate(a,a,Ie.negate([],s)),a}function kh(t){let{width:e,height:r,altitude:i,pitch:n=0,offset:o,center:s,scale:a,nearZMultiplier:c=1,farZMultiplier:l=1}=t,{fovy:f=jt(tx)}=t;i!==void 0&&(f=jt(i));let u=f*Ze,d=n*Ze,h=Kr(f),p=h;s&&(p+=s[2]*a/Math.cos(d)/r);let g=u*(.5+(o?o[1]:0)/r),m=Math.sin(g)*p/Math.sin(To(Math.PI/2-d-g,.01,Math.PI-.01)),b=Math.sin(d)*m+p,y=p*10,_=Math.min(b*l,y);return{fov:u,aspect:e/r,focalDistance:h,near:c,far:_}}function jt(t){return 2*Math.atan(.5/t)*Nh}function Kr(t){return .5/Math.tan(.5*t*Ze)}function Ui(t,e){let[r,i,n=0]=t;return at(Number.isFinite(r)&&Number.isFinite(i)&&Number.isFinite(n)),dr(e,[r,i,n,1])}function hr(t,e,r=0){let[i,n,o]=t;if(at(Number.isFinite(i)&&Number.isFinite(n),"invalid pixel coordinate"),Number.isFinite(o))return dr(e,[i,n,o,1]);let s=dr(e,[i,n,0,1]),a=dr(e,[i,n,1,1]),c=s[2],l=a[2],f=c===l?0:((r||0)-c)/(l-c);return nt.lerp([],s,a,f)}function Sc(t){let{width:e,height:r,bounds:i,minExtent:n=0,maxZoom:o=24,offset:s=[0,0]}=t,[[a,c],[l,f]]=i,u=BI(t.padding),d=Le([a,To(f,-Me,Me)]),h=Le([l,To(c,-Me,Me)]),p=[Math.max(Math.abs(h[0]-d[0]),n),Math.max(Math.abs(h[1]-d[1]),n)],g=[e-u.left-u.right-Math.abs(s[0])*2,r-u.top-u.bottom-Math.abs(s[1])*2];at(g[0]>0&&g[1]>0);let m=g[0]/p[0],b=g[1]/p[1],y=(u.right-u.left)/2/m,_=(u.top-u.bottom)/2/b,A=[(h[0]+d[0])/2+y,(h[1]+d[1])/2+_],T=Fe(A),S=Math.min(o,So(Math.abs(Math.min(m,b))));return at(Number.isFinite(S)),{longitude:T[0],latitude:T[1],zoom:S}}function BI(t=0){return typeof t=="number"?{top:t,bottom:t,left:t,right:t}:(at(Number.isFinite(t.top)&&Number.isFinite(t.bottom)&&Number.isFinite(t.left)&&Number.isFinite(t.right)),t)}var rx=Math.PI/180;function Ec(t,e=0){let{width:r,height:i,unproject:n}=t,o={targetZ:e},s=n([0,i],o),a=n([r,i],o),c,l,f=t.fovy?.5*t.fovy*rx:Math.atan(.5/t.altitude),u=(90-t.pitch)*rx;return f>u-.01?(c=ix(t,0,e),l=ix(t,r,e)):(c=n([0,0],o),l=n([r,0],o)),[s,a,l,c]}function ix(t,e,r){let{pixelUnprojectionMatrix:i}=t,n=dr(i,[e,0,1,1]),o=dr(i,[e,t.height,1,1]),a=(r*t.distanceScales.unitsPerMeter[2]-n[2])/(o[2]-n[2]),c=nt.lerp([],n,o,a),l=Fe(c);return l.push(r),l}var ox=`
layout(std140) uniform shadowUniforms {
  bool drawShadowMap;
  bool useShadowMap;
  vec4 color;
  highp int lightId;
  float lightCount;
  mat4 viewProjectionMatrix0;
  mat4 viewProjectionMatrix1;
  vec4 projectCenter0;
  vec4 projectCenter1;
} shadow;
`,FI=`
const int max_lights = 2;

out vec3 shadow_vPosition[max_lights];

vec4 shadow_setVertexPosition(vec4 position_commonspace) {
  mat4 viewProjectionMatrices[max_lights];
  viewProjectionMatrices[0] = shadow.viewProjectionMatrix0;
  viewProjectionMatrices[1] = shadow.viewProjectionMatrix1;
  vec4 projectCenters[max_lights];
  projectCenters[0] = shadow.projectCenter0;
  projectCenters[1] = shadow.projectCenter1;

  if (shadow.drawShadowMap) {
    return project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[shadow.lightId], projectCenters[shadow.lightId]);
  }
  if (shadow.useShadowMap) {
    for (int i = 0; i < max_lights; i++) {
      if(i < int(shadow.lightCount)) {
        vec4 shadowMap_position = project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[i], projectCenters[i]);
        shadow_vPosition[i] = (shadowMap_position.xyz / shadowMap_position.w + 1.0) / 2.0;
      }
    }
  }
  return gl_Position;
}
`,NI=`
${ox}
${FI}
`,DI=`
const int max_lights = 2;
uniform sampler2D shadow_uShadowMap0;
uniform sampler2D shadow_uShadowMap1;

in vec3 shadow_vPosition[max_lights];

const vec4 bitPackShift = vec4(1.0, 255.0, 65025.0, 16581375.0);
const vec4 bitUnpackShift = 1.0 / bitPackShift;
const vec4 bitMask = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0,  0.0);

float shadow_getShadowWeight(vec3 position, sampler2D shadowMap) {
  vec4 rgbaDepth = texture(shadowMap, position.xy);

  float z = dot(rgbaDepth, bitUnpackShift);
  return smoothstep(0.001, 0.01, position.z - z);
}

vec4 shadow_filterShadowColor(vec4 color) {
  if (shadow.drawShadowMap) {
    vec4 rgbaDepth = fract(gl_FragCoord.z * bitPackShift);
    rgbaDepth -= rgbaDepth.gbaa * bitMask;
    return rgbaDepth;
  }
  if (shadow.useShadowMap) {
    float shadowAlpha = 0.0;
    shadowAlpha += shadow_getShadowWeight(shadow_vPosition[0], shadow_uShadowMap0);
    if(shadow.lightCount > 1.0) {
      shadowAlpha += shadow_getShadowWeight(shadow_vPosition[1], shadow_uShadowMap1);
    }
    shadowAlpha *= shadow.color.a / shadow.lightCount;
    float blendedAlpha = shadowAlpha + color.a * (1.0 - shadowAlpha);

    return vec4(
      mix(color.rgb, shadow.color.rgb, shadowAlpha / blendedAlpha),
      blendedAlpha
    );
  }
  return color;
}
`,UI=`
${ox}
${DI}
`,kI=Rt(WI),VI=Rt(GI),HI=[0,0,0,1],zI=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0];function jI(t,e){let[r,i,n]=t,o=hr([r,i,n],e);return Number.isFinite(n)?o:[o[0],o[1],0]}function WI({viewport:t,center:e}){return new V(t.viewProjectionMatrix).invert().transform(e)}function GI({viewport:t,shadowMatrices:e}){let r=[],i=t.pixelUnprojectionMatrix,n=t.isGeospatial?void 0:1,o=[[0,0,n],[t.width,0,n],[0,t.height,n],[t.width,t.height,n],[0,0,-1],[t.width,0,-1],[0,t.height,-1],[t.width,t.height,-1]].map(s=>jI(s,i));for(let s of e){let a=s.clone().translate(new Y(t.center).negate()),c=o.map(f=>a.transform(f)),l=new V().ortho({left:Math.min(...c.map(f=>f[0])),right:Math.max(...c.map(f=>f[0])),bottom:Math.min(...c.map(f=>f[1])),top:Math.max(...c.map(f=>f[1])),near:Math.min(...c.map(f=>-f[2])),far:Math.max(...c.map(f=>-f[2]))});r.push(l.multiplyRight(s))}return r}function XI(t){let{shadowEnabled:e=!0,project:r}=t;if(!e||!r||!t.shadowMatrices||!t.shadowMatrices.length)return{drawShadowMap:!1,useShadowMap:!1,shadow_uShadowMap0:t.dummyShadowMap,shadow_uShadowMap1:t.dummyShadowMap};let i=Fi.getUniforms(r),n=kI({viewport:r.viewport,center:i.center}),o=[],s=VI({shadowMatrices:t.shadowMatrices,viewport:r.viewport}).slice();for(let c=0;c<t.shadowMatrices.length;c++){let l=s[c],f=l.clone().translate(new Y(r.viewport.center).negate());i.coordinateSystem===Xr("lnglat")&&i.projectionMode===fe.WEB_MERCATOR?(s[c]=f,o[c]=n):(s[c]=l.clone().multiplyRight(zI),o[c]=f.transform(n))}let a={drawShadowMap:!!t.drawToShadowMap,useShadowMap:t.shadowMaps?t.shadowMaps.length>0:!1,color:t.shadowColor||HI,lightId:t.shadowLightId||0,lightCount:t.shadowMatrices.length,shadow_uShadowMap0:t.dummyShadowMap,shadow_uShadowMap1:t.dummyShadowMap};for(let c=0;c<s.length;c++)a[`viewProjectionMatrix${c}`]=s[c],a[`projectCenter${c}`]=o[c];for(let c=0;c<2;c++)a[`shadow_uShadowMap${c}`]=t.shadowMaps&&t.shadowMaps[c]||t.dummyShadowMap;return a}var Cc={name:"shadow",dependencies:[Fi],vs:NI,fs:UI,inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    position = shadow_setVertexPosition(geometry.position);
    `,"fs:DECKGL_FILTER_COLOR":`
    color = shadow_filterShadowColor(color);
    `},getUniforms:XI,uniformTypes:{drawShadowMap:"f32",useShadowMap:"f32",color:"vec4<f32>",lightId:"i32",lightCount:"f32",viewProjectionMatrix0:"mat4x4<f32>",viewProjectionMatrix1:"mat4x4<f32>",projectCenter0:"vec4<f32>",projectCenter1:"vec4<f32>"}};var $I=`struct pickingUniforms {
  isActive: f32,
  isAttribute: f32,
  isHighlightActive: f32,
  useByteColors: f32,
  highlightedObjectColor: vec3<f32>,
  highlightColor: vec4<f32>,
};

@group(0) @binding(auto) var<uniform> picking: pickingUniforms;

fn picking_normalizeColor(color: vec3<f32>) -> vec3<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_normalizeColor4(color: vec4<f32>) -> vec4<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_isColorZero(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) < 0.00001;
}

fn picking_isColorValid(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) > 0.00001;
}
`,Ne={...za,source:$I,defaultUniforms:{...za.defaultUniforms,useByteColors:!0},inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    // for picking depth values
    picking_setPickingAttribute(position.z / position.w);
  `,"vs:DECKGL_FILTER_COLOR":`
  picking_setPickingColor(geometry.pickingColor);
  `,"fs:DECKGL_FILTER_COLOR":{order:99,injection:`
  // use highlight color if this fragment belongs to the selected object.
  color = picking_filterHighlightColor(color);

  // use picking color if rendering to picking FBO.
  color = picking_filterPickingColor(color);
    `}}};var YI=[lc],JI=["vs:DECKGL_FILTER_SIZE(inout vec3 size, VertexGeometry geometry)","vs:DECKGL_FILTER_GL_POSITION(inout vec4 position, VertexGeometry geometry)","vs:DECKGL_FILTER_COLOR(inout vec4 color, VertexGeometry geometry)","fs:DECKGL_FILTER_COLOR(inout vec4 color, FragmentGeometry geometry)"],QI=[];function sx(t){let e=Fr.getDefaultShaderAssembler();for(let i of YI)e.addDefaultModule(i);e._hookFunctions.length=0;let r=t==="glsl"?JI:QI;for(let i of r)e.addShaderHook(i);return e}var ZI=[255,255,255],qI=1,eB=0,vc=class{constructor(e={}){this.type="ambient";let{color:r=ZI}=e,{intensity:i=qI}=e;this.id=e.id||`ambient-${eB++}`,this.color=r,this.intensity=i}};var tB=[255,255,255],rB=1,iB=[0,0,-1],nB=0,Co=class{constructor(e={}){this.type="directional";let{color:r=tB}=e,{intensity:i=rB}=e,{direction:n=iB}=e,{_shadow:o=!1}=e;this.id=e.id||`directional-${nB++}`,this.color=r,this.intensity=i,this.type="directional",this.direction=new Y(n).normalize().toArray(),this.shadow=o}getProjectedLight(e){return this}};var vo=class{constructor(e,r={id:"pass"}){let{id:i}=r;this.id=i,this.device=e,this.props={...r}}setProps(e){Object.assign(this.props,e)}render(e){}cleanup(){}};var oB={depthWriteEnabled:!0,depthCompare:"less-equal",blendColorOperation:"add",blendColorSrcFactor:"src-alpha",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one-minus-dst-alpha",blendAlphaDstFactor:"one"},Wt=class extends vo{constructor(){super(...arguments),this._lastRenderIndex=-1}render(e){this._render(e)}_render(e){let r=this.device.canvasContext,i=e.target??r.getCurrentFramebuffer(),[n,o]=r.getDrawingBufferSize(),s=e.clearCanvas??!0,a=e.clearColor??(s?[0,0,0,0]:!1),c=s?1:!1,l=s?0:!1,f=e.colorMask??15,u={viewport:[0,0,n,o]};e.colorMask&&(u.colorMask=f),e.scissorRect&&(u.scissorRect=e.scissorRect);let d=this.device.beginRenderPass({framebuffer:i,parameters:u,clearColor:a,clearDepth:c,clearStencil:l});try{return this._drawLayers(d,e)}finally{d.end(),this.device.submit()}}_drawLayers(e,r){let{target:i,shaderModuleProps:n,viewports:o,views:s,onViewportActive:a,clearStack:c=!0}=r;r.pass=r.pass||"unknown",c&&(this._lastRenderIndex=-1);let l=[];for(let f of o){let u=s&&s[f.id];a?.(f);let d=this._getDrawLayerParams(f,r),h=f.subViewports||[f];for(let p of h){let g=this._drawLayersInViewport(e,{target:i,shaderModuleProps:n,viewport:p,view:u,pass:r.pass,layers:r.layers},d);l.push(g)}}return l}_getDrawLayerParams(e,{layers:r,pass:i,isPicking:n=!1,layerFilter:o,cullRect:s,views:a,effects:c,shaderModuleProps:l},f=!1){let u=[],d=cx(this._lastRenderIndex+1),h={layer:r[0],viewport:e,isPicking:n,renderPass:i,cullRect:s},p={};for(let g=0;g<r.length;g++){let m=r[g],b=this._shouldDrawLayer(m,h,o,p),y={shouldDrawLayer:b};if(b&&!f){y.shouldDrawLayer=!0,y.layerRenderIndex=d(m,b),y.shaderModuleProps=this._getShaderModuleProps(m,c,i,l);let _=m.context.device.type==="webgpu"?oB:null;y.layerParameters={..._,...m.context.deck?.props.parameters,...a?.[e.id]?.props.parameters,...this.getLayerParameters(m,g,e)}}u[g]=y}return u}_drawLayersInViewport(e,{layers:r,shaderModuleProps:i,pass:n,target:o,viewport:s,view:a},c){let l=sB(this.device,{shaderModuleProps:i,target:o,viewport:s});if(a){let{clear:u,clearColor:d,clearDepth:h,clearStencil:p}=a.props;if(u){let g=[0,0,0,0],m=1,b=0;Array.isArray(d)?g=[...d.slice(0,3),d[3]||255].map(_=>_/255):d===!1&&(g=!1),h!==void 0&&(m=h),p!==void 0&&(b=p),this.device.beginRenderPass({framebuffer:o,parameters:{viewport:l,scissorRect:l},clearColor:g,clearDepth:m,clearStencil:b}).end()}}let f={totalCount:r.length,visibleCount:0,compositeCount:0,pickableCount:0};e.setParameters({viewport:l});for(let u=0;u<r.length;u++){let d=r[u],h=c[u],{shouldDrawLayer:p}=h;if(p&&d.props.pickable&&f.pickableCount++,d.isComposite&&f.compositeCount++,d.isDrawable&&h.shouldDrawLayer){let{layerRenderIndex:g,shaderModuleProps:m,layerParameters:b}=h;f.visibleCount++,this._lastRenderIndex=Math.max(this._lastRenderIndex,g),m.project&&(m.project.viewport=s),d.context.renderPass=e;try{d._drawLayer({renderPass:e,shaderModuleProps:m,uniforms:{layerIndex:g},parameters:b})}catch(y){d.raiseError(y,`drawing ${d} to ${n}`)}}}return f}shouldDrawLayer(e){return!0}getShaderModuleProps(e,r,i){return null}getLayerParameters(e,r,i){return e.props.parameters}_shouldDrawLayer(e,r,i,n){if(!(e.props.visible&&this.shouldDrawLayer(e)))return!1;r.layer=e;let s=e.parent;for(;s;){if(!s.props.visible||!s.filterSubLayer(r))return!1;r.layer=s,s=s.parent}if(i){let a=r.layer.id;if(a in n||(n[a]=i(r)),!n[a])return!1}return e.activateViewport(r.viewport),!0}_getShaderModuleProps(e,r,i,n){let o=this.device.canvasContext.cssToDeviceRatio(),s=e.internalState?.propsInTransition||e.props,a={layer:s,picking:{isActive:!1},project:{viewport:e.context.viewport,devicePixelRatio:o,modelMatrix:s.modelMatrix,coordinateSystem:s.coordinateSystem,coordinateOrigin:s.coordinateOrigin,autoWrapLongitude:e.wrapLongitude}};if(r)for(let c of r)ax(a,c.getShaderModuleProps?.(e,a));for(let c of e.context.defaultShaderModules)c.name in a||(a[c.name]={});return ax(a,this.getShaderModuleProps(e,r,a),n)}};function cx(t=0,e={}){let r={},i=(n,o)=>{let s=n.props._offset,a=n.id,c=n.parent&&n.parent.id,l;if(c&&!(c in e)&&i(n.parent,!1),c in r){let f=r[c]=r[c]||cx(e[c],e);l=f(n,o),r[a]=f}else Number.isFinite(s)?(l=s+(e[c]||0),r[a]=null):l=t;return o&&l>=t&&(t=l+1),e[a]=l,l};return i}function sB(t,{shaderModuleProps:e,target:r,viewport:i}){let n=e?.project?.devicePixelRatio??t.canvasContext.cssToDeviceRatio(),[,o]=t.canvasContext.getDrawingBufferSize(),s=r?r.height:o,a=i;return[a.x*n,s-(a.y+a.height)*n,a.width*n,a.height*n]}function ax(t,...e){for(let r of e)if(r)for(let i in r)t[i]?Object.assign(t[i],r[i]):t[i]=r[i];return t}var Ro=class extends Wt{constructor(e,r){super(e,r);let i=e.createTexture({format:"rgba8unorm",width:1,height:1,sampler:{minFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}}),n=e.createTexture({format:"depth16unorm",width:1,height:1});this.fbo=e.createFramebuffer({id:"shadowmap",width:1,height:1,colorAttachments:[i],depthStencilAttachment:n})}delete(){this.fbo&&(this.fbo.destroy(),this.fbo=null)}getShadowMap(){return this.fbo.colorAttachments[0].texture}render(e){let r=this.fbo,i=this.device.canvasContext.cssToDeviceRatio(),n=e.viewports[0],o=n.width*i,s=n.height*i,a=[1,1,1,1];(o!==r.width||s!==r.height)&&r.resize({width:o,height:s}),super.render({...e,clearColor:a,target:r,pass:"shadow"})}getLayerParameters(e,r,i){return{...e.props.parameters,blend:!1,depthWriteEnabled:!0,depthCompare:"less-equal"}}shouldDrawLayer(e){return e.props.shadowEnabled!==!1}getShaderModuleProps(e,r,i){return{shadow:{project:i.project,drawToShadowMap:!0}}}};var aB={color:[255,255,255],intensity:1},lx=[{color:[255,255,255],intensity:1,direction:[-1,3,-1]},{color:[255,255,255],intensity:.9,direction:[1,-8,-2.5]}],cB=[0,0,0,200/255],ki=class{constructor(e={}){this.id="lighting-effect",this.shadowColor=cB,this.shadow=!1,this.directionalLights=[],this.pointLights=[],this.shadowPasses=[],this.dummyShadowMap=null,this.setProps(e)}setup(e){this.context=e;let{device:r,deck:i}=e;this.shadow&&!this.dummyShadowMap&&(this._createShadowPasses(r),i._addDefaultShaderModule(Cc),this.dummyShadowMap=r.createTexture({width:1,height:1}))}setProps(e){this.ambientLight=void 0,this.directionalLights=[],this.pointLights=[];for(let r in e){let i=e[r];switch(i.type){case"ambient":this.ambientLight=i;break;case"directional":this.directionalLights.push(i);break;case"point":this.pointLights.push(i);break;default:}}this._applyDefaultLights(),this.shadow=this.directionalLights.some(r=>r.shadow),this.context&&this.setup(this.context),this.props=e}preRender({layers:e,layerFilter:r,viewports:i,onViewportActive:n,views:o}){if(this.shadow){this.shadowMatrices=this._calculateMatrices();for(let s=0;s<this.shadowPasses.length;s++)this.shadowPasses[s].render({layers:e,layerFilter:r,viewports:i,onViewportActive:n,views:o,shaderModuleProps:{shadow:{shadowLightId:s,dummyShadowMap:this.dummyShadowMap,shadowMatrices:this.shadowMatrices}}})}}getShaderModuleProps(e,r){let i=this.shadow?{project:r.project,shadowMaps:this.shadowPasses.map(s=>s.getShadowMap()),dummyShadowMap:this.dummyShadowMap,shadowColor:this.shadowColor,shadowMatrices:this.shadowMatrices}:{},n={enabled:!0,lights:this._getLights(e)},o=e.props.material;return{shadow:i,lighting:n,phongMaterial:o,gouraudMaterial:o}}cleanup(e){for(let r of this.shadowPasses)r.delete();this.shadowPasses.length=0,this.dummyShadowMap&&(this.dummyShadowMap.destroy(),this.dummyShadowMap=null,e.deck._removeDefaultShaderModule(Cc))}_calculateMatrices(){let e=[];for(let r of this.directionalLights){let i=new V().lookAt({eye:new Y(r.direction).negate()});e.push(i)}return e}_createShadowPasses(e){for(let r=0;r<this.directionalLights.length;r++){let i=new Ro(e);this.shadowPasses[r]=i}}_applyDefaultLights(){let{ambientLight:e,pointLights:r,directionalLights:i}=this;!e&&r.length===0&&i.length===0&&(this.ambientLight=new vc(aB),this.directionalLights.push(new Co(lx[0]),new Co(lx[1])))}_getLights(e){let r=[];this.ambientLight&&r.push(this.ambientLight);for(let i of this.pointLights)r.push(i.getProjectedLight({layer:e}));for(let i of this.directionalLights)r.push(i.getProjectedLight({layer:e}));return r}};var Vh=class{constructor(e={}){this._pool=[],this.opts={overAlloc:2,poolSize:100},this.setOptions(e)}setOptions(e){Object.assign(this.opts,e)}allocate(e,r,{size:i=1,type:n,padding:o=0,copy:s=!1,initialize:a=!1,maxCount:c}){let l=n||e&&e.constructor||Float32Array,f=r*i+o;if(ArrayBuffer.isView(e)){if(f<=e.length)return e;if(f*e.BYTES_PER_ELEMENT<=e.buffer.byteLength)return new l(e.buffer,0,f)}let u=1/0;c&&(u=c*i+o);let d=this._allocate(l,f,a,u);return e&&s?d.set(e):a||d.fill(0,0,4),this._release(e),d}release(e){this._release(e)}_allocate(e,r,i,n){let o=Math.max(Math.ceil(r*this.opts.overAlloc),1);o>n&&(o=n);let s=this._pool,a=e.BYTES_PER_ELEMENT*o,c=s.findIndex(l=>l.byteLength>=a);if(c>=0){let l=new e(s.splice(c,1)[0],0,o);return i&&l.fill(0),l}return new e(o)}_release(e){if(!ArrayBuffer.isView(e))return;let r=this._pool,{buffer:i}=e,{byteLength:n}=i,o=r.findIndex(s=>s.byteLength>=n);o<0?r.push(i):(o>0||r.length<this.opts.poolSize)&&r.splice(o,0,i),r.length>this.opts.poolSize&&r.shift()}},lt=new Vh;function Hi(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function Po(t,e){let r=t%e;return r<0?e+r:r}function ux(t){return[t[12],t[13],t[14]]}function dx(t){return{left:Vi(t[3]+t[0],t[7]+t[4],t[11]+t[8],t[15]+t[12]),right:Vi(t[3]-t[0],t[7]-t[4],t[11]-t[8],t[15]-t[12]),bottom:Vi(t[3]+t[1],t[7]+t[5],t[11]+t[9],t[15]+t[13]),top:Vi(t[3]-t[1],t[7]-t[5],t[11]-t[9],t[15]-t[13]),near:Vi(t[3]+t[2],t[7]+t[6],t[11]+t[10],t[15]+t[14]),far:Vi(t[3]-t[2],t[7]-t[6],t[11]-t[10],t[15]-t[14])}}var fx=new Y;function Vi(t,e,r,i){fx.set(t,e,r);let n=fx.len();return{distance:i/n,normal:new Y(-t/n,-e/n,-r/n)}}function lB(t){return t-Math.fround(t)}var Mo;function Rc(t,e){let{size:r=1,startIndex:i=0}=e,n=e.endIndex!==void 0?e.endIndex:t.length,o=(n-i)/r;Mo=lt.allocate(Mo,o,{type:Float32Array,size:r*2});let s=i,a=0;for(;s<n;){for(let c=0;c<r;c++){let l=t[s++];Mo[a+c]=l,Mo[a+c+r]=lB(l)}a+=r*2}return Mo.subarray(0,o*r*2)}function hx(t){let e=null,r=!1;for(let i of t)i&&(e?(r||(e=[[e[0][0],e[0][1]],[e[1][0],e[1][1]]],r=!0),e[0][0]=Math.min(e[0][0],i[0][0]),e[0][1]=Math.min(e[0][1],i[0][1]),e[1][0]=Math.max(e[1][0],i[1][0]),e[1][1]=Math.max(e[1][1],i[1][1])):e=i);return e}var fB=Math.PI/180,uB=Hi(),px=[0,0,0],dB={unitsPerMeter:[1,1,1],metersPerUnit:[1,1,1]};function hB({width:t,height:e,orthographic:r,fovyRadians:i,focalDistance:n,padding:o,near:s,far:a}){let c=t/e,l=r?new V().orthographic({fovy:i,aspect:c,focalDistance:n,near:s,far:a}):new V().perspective({fovy:i,aspect:c,near:s,far:a});if(o){let{left:f=0,right:u=0,top:d=0,bottom:h=0}=o,p=re((f+t-u)/2,0,t)-t/2,g=re((d+e-h)/2,0,e)-e/2;l[8]-=p*2/t,l[9]+=g*2/e}return l}var Mc=class t{constructor(e={}){this._frustumPlanes={},this.id=e.id||this.constructor.displayName||"viewport",this.x=e.x||0,this.y=e.y||0,this.width=e.width||1,this.height=e.height||1,this.zoom=e.zoom||0,this.padding=e.padding,this.distanceScales=e.distanceScales||dB,this.focalDistance=e.focalDistance||1,this.position=e.position||px,this.modelMatrix=e.modelMatrix||null;let{longitude:r,latitude:i}=e;this.isGeospatial=Number.isFinite(i)&&Number.isFinite(r),this._initProps(e),this._initMatrices(e),this.equals=this.equals.bind(this),this.project=this.project.bind(this),this.unproject=this.unproject.bind(this),this.projectPosition=this.projectPosition.bind(this),this.unprojectPosition=this.unprojectPosition.bind(this),this.projectFlat=this.projectFlat.bind(this),this.unprojectFlat=this.unprojectFlat.bind(this)}get subViewports(){return null}get metersPerPixel(){return this.distanceScales.metersPerUnit[2]/this.scale}get projectionMode(){return this.isGeospatial?this.zoom<12?fe.WEB_MERCATOR:fe.WEB_MERCATOR_AUTO_OFFSET:fe.IDENTITY}equals(e){return e instanceof t?this===e?!0:e.width===this.width&&e.height===this.height&&e.scale===this.scale&&kt(e.projectionMatrix,this.projectionMatrix)&&kt(e.viewMatrix,this.viewMatrix):!1}project(e,{topLeft:r=!0}={}){let i=this.projectPosition(e),n=Ui(i,this.pixelProjectionMatrix),[o,s]=n,a=r?s:this.height-s;return e.length===2?[o,a]:[o,a,n[2]]}unproject(e,{topLeft:r=!0,targetZ:i}={}){let[n,o,s]=e,a=r?o:this.height-o,c=i&&i*this.distanceScales.unitsPerMeter[2],l=hr([n,a,s],this.pixelUnprojectionMatrix,c),[f,u,d]=this.unprojectPosition(l);return Number.isFinite(s)?[f,u,d]:Number.isFinite(i)?[f,u,i]:[f,u]}projectPosition(e){let[r,i]=this.projectFlat(e),n=(e[2]||0)*this.distanceScales.unitsPerMeter[2];return[r,i,n]}unprojectPosition(e){let[r,i]=this.unprojectFlat(e),n=(e[2]||0)*this.distanceScales.metersPerUnit[2];return[r,i,n]}projectFlat(e){if(this.isGeospatial){let r=Le(e);return r[1]=re(r[1],-318,830),r}return e}unprojectFlat(e){return this.isGeospatial?Fe(e):e}getBounds(e={}){let r={targetZ:e.z||0},i=this.unproject([0,0],r),n=this.unproject([this.width,0],r),o=this.unproject([0,this.height],r),s=this.unproject([this.width,this.height],r);return[Math.min(i[0],n[0],o[0],s[0]),Math.min(i[1],n[1],o[1],s[1]),Math.max(i[0],n[0],o[0],s[0]),Math.max(i[1],n[1],o[1],s[1])]}getDistanceScales(e){return e&&this.isGeospatial?Di({longitude:e[0],latitude:e[1],highPrecision:!0}):this.distanceScales}containsPixel({x:e,y:r,width:i=1,height:n=1}){return e<this.x+this.width&&this.x<e+i&&r<this.y+this.height&&this.y<r+n}getFrustumPlanes(){return this._frustumPlanes.near?this._frustumPlanes:(Object.assign(this._frustumPlanes,dx(this.viewProjectionMatrix)),this._frustumPlanes)}panByPosition(e,r,i){return null}_initProps(e){let r=e.longitude,i=e.latitude;this.isGeospatial&&(Number.isFinite(e.zoom)||(this.zoom=Uh({latitude:i})+Math.log2(this.focalDistance)),this.distanceScales=e.distanceScales||Di({latitude:i,longitude:r}));let n=Math.pow(2,this.zoom);this.scale=n;let{position:o,modelMatrix:s}=e,a=px;if(o&&(a=s?new V(s).transformAsVector(o,[]):o),this.isGeospatial){let c=this.projectPosition([r,i,0]);this.center=new Y(a).scale(this.distanceScales.unitsPerMeter).add(c)}else this.center=this.projectPosition(a)}_initMatrices(e){let{viewMatrix:r=uB,projectionMatrix:i=null,orthographic:n=!1,fovyRadians:o,fovy:s=75,near:a=.1,far:c=1e3,padding:l=null,focalDistance:f=1}=e;this.viewMatrixUncentered=r,this.viewMatrix=new V().multiplyRight(r).translate(new Y(this.center).negate()),this.projectionMatrix=i||hB({width:this.width,height:this.height,orthographic:n,fovyRadians:o||s*fB,focalDistance:f,padding:l,near:a,far:c});let u=Hi();le.multiply(u,u,this.projectionMatrix),le.multiply(u,u,this.viewMatrix),this.viewProjectionMatrix=u,this.viewMatrixInverse=le.invert([],this.viewMatrix)||this.viewMatrix,this.cameraPosition=ux(this.viewMatrixInverse);let d=Hi(),h=Hi();le.scale(d,d,[this.width/2,-this.height/2,1]),le.translate(d,d,[1,-1,0]),le.multiply(h,d,this.viewProjectionMatrix),this.pixelProjectionMatrix=h,this.pixelUnprojectionMatrix=le.invert(Hi(),this.pixelProjectionMatrix),this.pixelUnprojectionMatrix||P.warn("Pixel project matrix not invertible")()}};Mc.displayName="Viewport";var zi=Mc;var Pc=class t extends zi{constructor(e={}){let{latitude:r=0,longitude:i=0,zoom:n=0,pitch:o=0,bearing:s=0,nearZMultiplier:a=.1,farZMultiplier:c=1.01,nearZ:l,farZ:f,orthographic:u=!1,projectionMatrix:d,repeat:h=!1,worldOffset:p=0,position:g,padding:m,legacyMeterSizes:b=!1}=e,{width:y,height:_,altitude:A=1.5}=e,T=Math.pow(2,n);y=y||1,_=_||1;let S,v=null;if(d)A=d[5]/2,S=jt(A);else{e.fovy?(S=e.fovy,A=Kr(S)):S=jt(A);let C;if(m){let{top:R=0,bottom:I=0}=m;C=[0,re((R+_-I)/2,0,_)-_/2]}v=kh({width:y,height:_,scale:T,center:g&&[0,0,g[2]*$r(r)],offset:C,pitch:o,fovy:S,nearZMultiplier:a,farZMultiplier:c}),Number.isFinite(l)&&(v.near=l),Number.isFinite(f)&&(v.far=f)}let M=Tc({height:_,pitch:o,bearing:s,scale:T,altitude:A});p&&(M=new V().translate([512*p,0,0]).multiplyLeft(M)),super({...e,width:y,height:_,viewMatrix:M,longitude:i,latitude:r,zoom:n,...v,fovy:S,focalDistance:A}),this.latitude=r,this.longitude=i,this.zoom=n,this.pitch=o,this.bearing=s,this.altitude=A,this.fovy=S,this.orthographic=u,this._subViewports=h?[]:null,this._pseudoMeters=b,Object.freeze(this)}get subViewports(){if(this._subViewports&&!this._subViewports.length){let e=this.getBounds(),r=Math.floor((e[0]+180)/360),i=Math.ceil((e[2]-180)/360);for(let n=r;n<=i;n++){let o=n?new t({...this,worldOffset:n}):this;this._subViewports.push(o)}}return this._subViewports}projectPosition(e){if(this._pseudoMeters)return super.projectPosition(e);let[r,i]=this.projectFlat(e),n=(e[2]||0)*$r(e[1]);return[r,i,n]}unprojectPosition(e){if(this._pseudoMeters)return super.unprojectPosition(e);let[r,i]=this.unprojectFlat(e),n=(e[2]||0)/$r(i);return[r,i,n]}addMetersToLngLat(e,r){return Eo(e,r)}panByPosition(e,r,i){let n=hr(r,this.pixelUnprojectionMatrix),o=this.projectFlat(e),s=nt.add([],o,nt.negate([],n)),a=nt.add([],this.center,s),[c,l]=this.unprojectFlat(a);return{longitude:c,latitude:l}}panByPosition3D(e,r){let i=e[2]||0,n=nt.sub([],e,this.unproject(r,{targetZ:i}));return{longitude:this.longitude+n[0],latitude:this.latitude+n[1]}}getBounds(e={}){let r=Ec(this,e.z||0);return[Math.min(r[0][0],r[1][0],r[2][0],r[3][0]),Math.min(r[0][1],r[1][1],r[2][1],r[3][1]),Math.max(r[0][0],r[1][0],r[2][0],r[3][0]),Math.max(r[0][1],r[1][1],r[2][1],r[3][1])]}fitBounds(e,r={}){let{width:i,height:n}=this,{longitude:o,latitude:s,zoom:a}=Sc({width:i,height:n,bounds:e,...r});return new t({width:i,height:n,longitude:o,latitude:s,zoom:a})}};Pc.displayName="WebMercatorViewport";var ji=Pc;var gx=[0,0,0];function Hh(t,e,r=!1){let i=e.projectPosition(t);if(r&&e instanceof ji){let[n,o,s=0]=t,a=e.getDistanceScales([n,o]);i[2]=s*a.unitsPerMeter[2]}return i}function pB(t){let{viewport:e,modelMatrix:r,coordinateOrigin:i}=t,{coordinateSystem:n,fromCoordinateSystem:o,fromCoordinateOrigin:s}=t;return n==="default"&&(n=e.isGeospatial?"lnglat":"cartesian"),o===void 0?o=n:o==="default"&&(o=e.isGeospatial?"lnglat":"cartesian"),s===void 0&&(s=i),{viewport:e,coordinateSystem:n,coordinateOrigin:i,modelMatrix:r,fromCoordinateSystem:o,fromCoordinateOrigin:s}}function wc(t,{viewport:e,modelMatrix:r,coordinateSystem:i,coordinateOrigin:n,offsetMode:o}){let[s,a,c=0]=t;switch(r&&([s,a,c]=Be.transformMat4([],[s,a,c,1],r)),i){case"default":return wc(t,{viewport:e,modelMatrix:r,coordinateSystem:e.isGeospatial?"lnglat":"cartesian",coordinateOrigin:n,offsetMode:o});case"lnglat":return Hh([s,a,c],e,o);case"lnglat-offsets":return Hh([s+n[0],a+n[1],c+(n[2]||0)],e,o);case"meter-offsets":return Hh(Eo(n,[s,a,c]),e,o);case"cartesian":return e.isGeospatial?[s+n[0],a+n[1],c+n[2]]:e.projectPosition([s,a,c]);default:throw new Error(`Invalid coordinateSystem: ${i}`)}}function mx(t,e){let{viewport:r,coordinateSystem:i,coordinateOrigin:n,modelMatrix:o,fromCoordinateSystem:s,fromCoordinateOrigin:a}=pB(e),{autoOffset:c=!0}=e,{geospatialOrigin:l=gx,shaderCoordinateOrigin:f=gx,offsetMode:u=!1}=c?Lh(r,i,n):{},d=wc(t,{viewport:r,modelMatrix:o,coordinateSystem:s,coordinateOrigin:a,offsetMode:u});if(u){let h=r.projectPosition(l||f);Ie.sub(d,d,h)}return d}var gB=1,mB=1,Yr=class{time=0;channels=new Map;animations=new Map;playing=!1;lastEngineTime=-1;constructor(){}addChannel(e){let{delay:r=0,duration:i=Number.POSITIVE_INFINITY,rate:n=1,repeat:o=1}=e,s=gB++,a={time:0,delay:r,duration:i,rate:n,repeat:o};return this._setChannelTime(a,this.time),this.channels.set(s,a),s}removeChannel(e){this.channels.delete(e);for(let[r,i]of this.animations)i.channel===e&&this.detachAnimation(r)}isFinished(e){let r=this.channels.get(e);return r===void 0?!1:this.time>=r.delay+r.duration*r.repeat}getTime(e){if(e===void 0)return this.time;let r=this.channels.get(e);return r===void 0?-1:r.time}setTime(e){this.time=Math.max(0,e);let r=this.channels.values();for(let n of r)this._setChannelTime(n,this.time);let i=this.animations.values();for(let n of i){let{animation:o,channel:s}=n;o.setTime(this.getTime(s))}}play(){this.playing=!0}pause(){this.playing=!1,this.lastEngineTime=-1}reset(){this.setTime(0)}attachAnimation(e,r){let i=mB++;return this.animations.set(i,{animation:e,channel:r}),e.setTime(this.getTime(r)),i}detachAnimation(e){this.animations.delete(e)}update(e){this.playing&&(this.lastEngineTime===-1&&(this.lastEngineTime=e),this.setTime(this.time+(e-this.lastEngineTime)),this.lastEngineTime=e)}_setChannelTime(e,r){let i=r-e.delay,n=e.duration*e.repeat;i>=n?e.time=e.duration*e.rate:(e.time=Math.max(0,i)%e.duration,e.time*=e.rate)}};L();function _x(t){let e=typeof window<"u"?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:null;return e?e.call(window,t):setTimeout(()=>t(typeof performance<"u"?performance.now():Date.now()),1e3/60)}function bx(t){let e=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame:null;if(e){e.call(window,t);return}clearTimeout(t)}Cn();var _B=0,bB="Animation Loop",wo=class t{static defaultAnimationLoopProps={device:null,onAddHTML:()=>"",onInitialize:async()=>null,onRender:()=>{},onFinalize:()=>{},onError:e=>console.error(e),stats:void 0,autoResizeViewport:!1};device=null;canvas=null;props;animationProps=null;timeline=null;stats;sharedStats;cpuTime;gpuTime;frameRate;display;_needsRedraw="initialized";_initialized=!1;_running=!1;_animationFrameId=null;_nextFramePromise=null;_resolveNextFrame=null;_cpuStartTime=0;_error=null;_lastFrameTime=0;constructor(e){if(this.props={...t.defaultAnimationLoopProps,...e},e=this.props,!e.device)throw new Error("No device provided");this.stats=e.stats||new Xe({id:`animation-loop-${_B++}`}),this.sharedStats=Ri.stats.get(bB),this.frameRate=this.stats.get("Frame Rate"),this.frameRate.setSampleSize(1),this.cpuTime=this.stats.get("CPU Time"),this.gpuTime=this.stats.get("GPU Time"),this.setProps({autoResizeViewport:e.autoResizeViewport}),this.start=this.start.bind(this),this.stop=this.stop.bind(this),this._onMousemove=this._onMousemove.bind(this),this._onMouseleave=this._onMouseleave.bind(this)}destroy(){this.stop(),this._setDisplay(null),this.device?._disableDebugGPUTime()}delete(){this.destroy()}reportError(e){this.props.onError(e),this._error=e}setNeedsRedraw(e){return this._needsRedraw=this._needsRedraw||e,this}needsRedraw(){let e=this._needsRedraw;return this._needsRedraw=!1,e}setProps(e){return"autoResizeViewport"in e&&(this.props.autoResizeViewport=e.autoResizeViewport||!1),this}async start(){if(this._running)return this;this._running=!0;try{let e;if(!this._initialized){if(this._initialized=!0,await this._initDevice(),this._initialize(),!this._running)return null;await this.props.onInitialize(this._getAnimationProps())}return this._running?(e!==!1&&(this._cancelAnimationFrame(),this._requestAnimationFrame()),this):null}catch(e){let r=e instanceof Error?e:new Error("Unknown error");throw this.props.onError(r),r}}stop(){return this._running&&(this.animationProps&&!this._error&&this.props.onFinalize(this.animationProps),this._cancelAnimationFrame(),this._nextFramePromise=null,this._resolveNextFrame=null,this._running=!1,this._lastFrameTime=0),this}redraw(e){return this.device?.isLost||this._error?this:(this._beginFrameTimers(e),this._setupFrame(),this._updateAnimationProps(),this._renderFrame(this._getAnimationProps()),this._clearNeedsRedraw(),this._resolveNextFrame&&(this._resolveNextFrame(this),this._nextFramePromise=null,this._resolveNextFrame=null),this._endFrameTimers(),this)}attachTimeline(e){return this.timeline=e,this.timeline}detachTimeline(){this.timeline=null}waitForRender(){return this.setNeedsRedraw("waitForRender"),this._nextFramePromise||(this._nextFramePromise=new Promise(e=>{this._resolveNextFrame=e})),this._nextFramePromise}async toDataURL(){if(this.setNeedsRedraw("toDataURL"),await this.waitForRender(),this.canvas instanceof HTMLCanvasElement)return this.canvas.toDataURL();throw new Error("OffscreenCanvas")}_initialize(){this._startEventHandling(),this._initializeAnimationProps(),this._updateAnimationProps(),this._resizeViewport(),this.device?._enableDebugGPUTime()}_setDisplay(e){this.display&&(this.display.destroy(),this.display.animationLoop=null),e&&(e.animationLoop=this),this.display=e}_requestAnimationFrame(){this._running&&(this._animationFrameId=_x(this._animationFrame.bind(this)))}_cancelAnimationFrame(){this._animationFrameId!==null&&(bx(this._animationFrameId),this._animationFrameId=null)}_animationFrame(e){this._running&&(this.redraw(e),this._requestAnimationFrame())}_renderFrame(e){if(this.display){this.display._renderFrame(e);return}this.props.onRender(this._getAnimationProps()),this.device?.submit()}_clearNeedsRedraw(){this._needsRedraw=!1}_setupFrame(){this._resizeViewport()}_initializeAnimationProps(){let e=this.device?.getDefaultCanvasContext();if(!this.device||!e)throw new Error("loop");let r=e?.canvas,i=e.props.useDevicePixels;this.animationProps={animationLoop:this,device:this.device,canvasContext:e,canvas:r,useDevicePixels:i,timeline:this.timeline,needsRedraw:!1,width:1,height:1,aspect:1,time:0,startTime:Date.now(),engineTime:0,tick:0,tock:0,_mousePosition:null}}_getAnimationProps(){if(!this.animationProps)throw new Error("animationProps");return this.animationProps}_updateAnimationProps(){if(!this.animationProps)return;let{width:e,height:r,aspect:i}=this._getSizeAndAspect();(e!==this.animationProps.width||r!==this.animationProps.height)&&this.setNeedsRedraw("drawing buffer resized"),i!==this.animationProps.aspect&&this.setNeedsRedraw("drawing buffer aspect changed"),this.animationProps.width=e,this.animationProps.height=r,this.animationProps.aspect=i,this.animationProps.needsRedraw=this._needsRedraw,this.animationProps.engineTime=Date.now()-this.animationProps.startTime,this.timeline&&this.timeline.update(this.animationProps.engineTime),this.animationProps.tick=Math.floor(this.animationProps.time/1e3*60),this.animationProps.tock++,this.animationProps.time=this.timeline?this.timeline.getTime():this.animationProps.engineTime}async _initDevice(){if(this.device=await this.props.device,!this.device)throw new Error("No device provided");this.canvas=this.device.getDefaultCanvasContext().canvas||null}_createInfoDiv(){if(this.canvas&&this.props.onAddHTML){let e=document.createElement("div");document.body.appendChild(e),e.style.position="relative";let r=document.createElement("div");r.style.position="absolute",r.style.left="10px",r.style.bottom="10px",r.style.width="300px",r.style.background="white",this.canvas instanceof HTMLCanvasElement&&e.appendChild(this.canvas),e.appendChild(r);let i=this.props.onAddHTML(r);i&&(r.innerHTML=i)}}_getSizeAndAspect(){if(!this.device)return{width:1,height:1,aspect:1};let[e,r]=this.device.getDefaultCanvasContext().getDrawingBufferSize(),i=e>0&&r>0?e/r:1;return{width:e,height:r,aspect:i}}_resizeViewport(){this.props.autoResizeViewport&&this.device.gl&&this.device.gl.viewport(0,0,this.device.gl.drawingBufferWidth,this.device.gl.drawingBufferHeight)}_beginFrameTimers(e){let r=e??(typeof performance<"u"?performance.now():Date.now());if(this._lastFrameTime){let i=r-this._lastFrameTime;i>0&&this.frameRate.addTime(i)}this._lastFrameTime=r,this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeStart()}_endFrameTimers(){this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeEnd(),this._updateSharedStats()}_consumeEncodedGpuTime(){if(!this.device)return;let e=this.device.commandEncoder._gpuTimeMs;e!==void 0&&(this.gpuTime.addTime(e),this.device.commandEncoder._gpuTimeMs=void 0)}_updateSharedStats(){if(this.stats!==this.sharedStats){for(let e of Object.keys(this.sharedStats.stats))this.stats.stats[e]||delete this.sharedStats.stats[e];this.stats.forEach(e=>{let r=this.sharedStats.get(e.name,e.type);r.sampleSize=e.sampleSize,r.time=e.time,r.count=e.count,r.samples=e.samples,r.lastTiming=e.lastTiming,r.lastSampleTime=e.lastSampleTime,r.lastSampleCount=e.lastSampleCount,r._count=e._count,r._time=e._time,r._samples=e._samples,r._startTime=e._startTime,r._timerPending=e._timerPending})}}_startEventHandling(){this.canvas&&(this.canvas.addEventListener("mousemove",this._onMousemove.bind(this)),this.canvas.addEventListener("mouseleave",this._onMouseleave.bind(this)))}_onMousemove(e){e instanceof MouseEvent&&(this._getAnimationProps()._mousePosition=[e.offsetX,e.offsetY])}_onMouseleave(e){this._getAnimationProps()._mousePosition=null}};L();L();var zh={};function qe(t="id"){zh[t]=zh[t]||1;let e=zh[t]++;return`${t}-${e}`}var Ic=class{id;userData={};topology;bufferLayout=[];vertexCount;indices;attributes;constructor(e){if(this.id=e.id||qe("geometry"),this.topology=e.topology,this.indices=e.indices||null,this.attributes=e.attributes,this.vertexCount=e.vertexCount,this.bufferLayout=e.bufferLayout||[],this.indices&&!(this.indices.usage&F.INDEX))throw new Error("Index buffer must have INDEX usage")}destroy(){this.indices?.destroy();for(let e of Object.values(this.attributes))e.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices||null}_calculateVertexCount(e){return e.byteLength/12}};function Ax(t,e){if(e instanceof Ic)return e;let r=AB(t,e),{attributes:i,bufferLayout:n}=yB(t,e);return new Ic({topology:e.topology||"triangle-list",bufferLayout:n,vertexCount:e.vertexCount,indices:r,attributes:i})}function AB(t,e){if(!e.indices)return;let r=e.indices.value;return t.createBuffer({usage:F.INDEX,data:r})}function yB(t,e){let r=[],i={};for(let[o,s]of Object.entries(e.attributes)){let a=o;switch(o){case"POSITION":a="positions";break;case"NORMAL":a="normals";break;case"TEXCOORD_0":a="texCoords";break;case"TEXCOORD_1":a="texCoords1";break;case"COLOR_0":a="colors";break}if(s){i[a]=t.createBuffer({data:s.value,id:`${o}-buffer`});let{value:c,size:l,normalized:f}=s;if(l===void 0)throw new Error(`Attribute ${o} is missing a size`);r.push({name:a,format:Vt.getVertexFormatFromAttribute(c,l,f)})}}let n=e._calculateVertexCount(e.attributes,e.indices);return{attributes:i,bufferLayout:r,vertexCount:n}}function yx(t,e){let r={},i="Values";if(t.attributes.length===0&&!t.varyings?.length)return{"No attributes or varyings":{[i]:"N/A"}};for(let n of t.attributes)if(n){let o=`${n.location} ${n.name}: ${n.type}`;r[`in ${o}`]={[i]:n.stepMode||"vertex"}}for(let n of t.varyings||[]){let o=`${n.location} ${n.name}`;r[`out ${o}`]={[i]:JSON.stringify(n)}}return r}var xx="__debugFramebufferState";function Sx(t,e,r){if(t.device.type!=="webgl")return;let i=SB(t.device);if(!i.flushing){if(CB(t)){xB(t,r,i);return}e&&EB(e)&&e.handle!==null&&(i.queuedFramebuffers.includes(e)||i.queuedFramebuffers.push(e))}}function xB(t,e,r){if(r.queuedFramebuffers.length===0)return;let i=t.device,{gl:n}=i,o=n.getParameter(36010),s=n.getParameter(36006),[a,c]=t.device.getDefaultCanvasContext().getDrawingBufferSize(),l=Tx(e.top,8),f=Tx(e.left,8);r.flushing=!0;try{for(let u of r.queuedFramebuffers){let[d,h,p,g,m]=TB({framebuffer:u,targetWidth:a,targetHeight:c,topPx:l,leftPx:f,minimap:e.minimap});n.bindFramebuffer(36008,u.handle),n.bindFramebuffer(36009,null),n.blitFramebuffer(0,0,u.width,u.height,d,h,p,g,16384,9728),l+=m+8}}finally{n.bindFramebuffer(36008,o),n.bindFramebuffer(36009,s),r.flushing=!1}}function TB(t){let{framebuffer:e,targetWidth:r,targetHeight:i,topPx:n,leftPx:o,minimap:s}=t,a=s?Math.max(Math.floor(r/4),1):r,c=s?Math.max(Math.floor(i/4),1):i,l=Math.min(a/e.width,c/e.height),f=Math.max(Math.floor(e.width*l),1),u=Math.max(Math.floor(e.height*l),1),d=o,h=Math.max(i-n-u,0),p=d+f,g=h+u;return[d,h,p,g,u]}function SB(t){return t.userData[xx]||={flushing:!1,queuedFramebuffers:[]},t.userData[xx]}function EB(t){return"colorAttachments"in t}function CB(t){let e=t.props.framebuffer;return!e||e.handle===null}function Tx(t,e){if(!t)return e;let r=Number.parseInt(t,10);return Number.isFinite(r)?r:e}function Bc(t,e,r){if(t===e)return!0;if(!r||!t||!e)return!1;if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1;for(let i=0;i<t.length;i++)if(!Bc(t[i],e[i],r-1))return!1;return!0}if(Array.isArray(e))return!1;if(typeof t=="object"&&typeof e=="object"){let i=Object.keys(t),n=Object.keys(e);if(i.length!==n.length)return!1;for(let o of i)if(!e.hasOwnProperty(o)||!Bc(t[o],e[o],r-1))return!1;return!0}return!1}L();var Wi=class{bufferLayouts;constructor(e){this.bufferLayouts=e}getBufferLayout(e){return this.bufferLayouts.find(r=>r.name===e)||null}getAttributeNamesForBuffer(e){return e.attributes?e.attributes?.map(r=>r.attribute):[e.name]}mergeBufferLayouts(e,r){let i=[...e];for(let n of r){let o=i.findIndex(s=>s.name===n.name);o<0?i.push(n):i[o]=n}return i}getBufferIndex(e){let r=this.bufferLayouts.findIndex(i=>i.name===e);return r===-1&&x.warn(`BufferLayout: Missing buffer for "${e}".`)(),r}};function Ex(t,e){let r=1/0;for(let i of t){let n=e[i];n!==void 0&&(r=Math.min(r,n))}return r}function Cx(t,e){let r=Object.fromEntries(t.attributes.map(n=>[n.name,n.location])),i=e.slice();return i.sort((n,o)=>{let s=n.attributes?n.attributes.map(f=>f.attribute):[n.name],a=o.attributes?o.attributes.map(f=>f.attribute):[o.name],c=Ex(s,r),l=Ex(a,r);return c-l}),i}function jh(t,e){if(!t||!e.some(i=>i.bindingLayout?.length))return t;let r={...t,bindings:t.bindings.map(i=>({...i}))};"attributes"in(t||{})&&(r.attributes=t?.attributes||[]);for(let i of e)for(let n of i.bindingLayout||[])for(let o of vB(n.name)){let s=r.bindings.find(a=>a.name===o);s?.group===0&&(s.group=n.group)}return r}function Oc(t){return!!(t.uniformTypes&&!RB(t.uniformTypes))}function vB(t){let e=new Set([t,`${t}Uniforms`]);return t.endsWith("Uniforms")||e.add(`${t}Sampler`),[...e]}function RB(t){for(let e in t)return!1;return!0}L();function MB(t){return Eu(t)||typeof t=="number"||typeof t=="boolean"}function vx(t,e={}){let r={bindings:{},uniforms:{}};return Object.keys(t).forEach(i=>{let n=t[i];Object.prototype.hasOwnProperty.call(e,i)||MB(n)?r.uniforms[i]=n:r.bindings[i]=n}),r}var pr=class{options={disableWarnings:!1};modules;moduleUniforms;moduleBindings;constructor(e,r){Object.assign(this.options,r);let i=bi(Object.values(e).filter(PB));for(let n of i)e[n.name]=n;x.log(1,"Creating ShaderInputs with modules",Object.keys(e))(),this.modules=e,this.moduleUniforms={},this.moduleBindings={};for(let[n,o]of Object.entries(e))o&&(this._addModule(o),o.name&&n!==o.name&&!this.options.disableWarnings&&x.warn(`Module name: ${n} vs ${o.name}`)())}destroy(){}setProps(e){for(let r of Object.keys(e)){let i=r,n=e[i]||{},o=this.modules[i];if(!o)this.options.disableWarnings||x.warn(`Module ${r} not found`)();else{let s=this.moduleUniforms[i],a=this.moduleBindings[i],c=o.getUniforms?.(n,s)||n,{uniforms:l,bindings:f}=vx(c,o.uniformTypes);this.moduleUniforms[i]=Rx(s,l,o.uniformTypes),this.moduleBindings[i]={...a,...f}}}}getModules(){return Object.values(this.modules)}getUniformValues(){return this.moduleUniforms}getBindingValues(){let e={};for(let r of Object.values(this.moduleBindings))Object.assign(e,r);return e}getDebugTable(){let e={};for(let[r,i]of Object.entries(this.moduleUniforms))for(let[n,o]of Object.entries(i))e[`${r}.${n}`]={type:this.modules[r].uniformTypes?.[n],value:String(o)};return e}_addModule(e){let r=e.name;this.moduleUniforms[r]=Rx({},e.defaultUniforms||{},e.uniformTypes),this.moduleBindings[r]={}}};function Rx(t={},e={},r={}){let i={...t};for(let[n,o]of Object.entries(e))o!==void 0&&(i[n]=Wh(t[n],o,r[n]));return i}function Wh(t,e,r){if(!r||typeof r=="string")return Io(e);if(Array.isArray(r)){if(Gh(e)||!Array.isArray(e))return Io(e);let s=Array.isArray(t)&&!Gh(t)?[...t]:[],a=s.slice();for(let c=0;c<e.length;c++){let l=e[c];l!==void 0&&(a[c]=Wh(s[c],l,r[0]))}return a}if(!Xh(e))return Io(e);let i=r,n=Xh(t)?t:{},o={...n};for(let[s,a]of Object.entries(e))a!==void 0&&(o[s]=Wh(n[s],a,i[s]));return o}function Io(t){return ArrayBuffer.isView(t)?Array.prototype.slice.call(t):Array.isArray(t)?Gh(t)?t.slice():t.map(r=>r===void 0?void 0:Io(r)):Xh(t)?Object.fromEntries(Object.entries(t).map(([e,r])=>[e,r===void 0?void 0:Io(r)])):t}function Gh(t){return ArrayBuffer.isView(t)||Array.isArray(t)&&(t.length===0||typeof t[0]=="number")}function Xh(t){return!!t&&typeof t=="object"&&!Array.isArray(t)&&!ArrayBuffer.isView(t)}function PB(t){return!!t?.dependencies}L();L();var $h={"+X":0,"-X":1,"+Y":2,"-Y":3,"+Z":4,"-Z":5};function Bo(t){return t?Array.isArray(t)?t[0]??null:t:null}function Mx(t){let{dimension:e,data:r}=t;if(!r)return null;switch(e){case"1d":{let i=Bo(r);if(!i)return null;let{width:n}=Oo(i);return{width:n,height:1}}case"2d":{let i=Bo(r);return i?Oo(i):null}case"3d":case"2d-array":{if(!Array.isArray(r)||r.length===0)return null;let i=Bo(r[0]);return i?Oo(i):null}case"cube":{let i=Object.keys(r)[0]??null;if(!i)return null;let n=r[i],o=Bo(n);return o?Oo(o):null}case"cube-array":{if(!Array.isArray(r)||r.length===0)return null;let i=r[0],n=Object.keys(i)[0]??null;if(!n)return null;let o=Bo(i[n]);return o?Oo(o):null}default:return null}}function Oo(t){if(vi(t))return $n(t);if(typeof t=="object"&&"width"in t&&"height"in t)return{width:t.width,height:t.height};throw new Error("Unsupported mip-level data")}function wB(t){return typeof t=="object"&&t!==null&&"data"in t&&"width"in t&&"height"in t}function IB(t){return ArrayBuffer.isView(t)}function Kh(t){let{textureFormat:e,format:r}=t;if(e&&r&&e!==r)throw new Error(`Conflicting texture formats "${e}" and "${r}" provided for the same mip level`);return e??r}function Px(t){let e=$h[t];if(e===void 0)throw new Error(`Invalid cube face: ${t}`);return e}function BB(t,e){return 6*t+Px(e)}function Yh(t){throw new Error("setTexture1DData not supported in WebGL.")}function OB(t){return Array.isArray(t)?t:[t]}function Jr(t,e,r,i){let n=OB(e),o=t,s=[];for(let a=0;a<n.length;a++){let c=n[a];if(vi(c))s.push({type:"external-image",image:c,z:o,mipLevel:a});else if(wB(c))s.push({type:"texture-data",data:c,textureFormat:Kh(c),z:o,mipLevel:a});else if(IB(c)&&r)s.push({type:"texture-data",data:{data:c,width:Math.max(1,r.width>>a),height:Math.max(1,r.height>>a),...i?{format:i}:{}},textureFormat:i,z:o,mipLevel:a});else throw new Error("Unsupported 2D mip-level payload")}return s}function Jh(t){let e=[];for(let r=0;r<t.length;r++)e.push(...Jr(r,t[r]));return e}function Qh(t){let e=[];for(let r=0;r<t.length;r++)e.push(...Jr(r,t[r]));return e}function Zh(t){let e=[];for(let[r,i]of Object.entries(t)){let n=Px(r);e.push(...Jr(n,i))}return e}function qh(t){let e=[];return t.forEach((r,i)=>{for(let[n,o]of Object.entries(r)){let s=BB(i,n);e.push(...Jr(s,o))}}),e}var He=class t{device;id;props;_texture=null;_sampler=null;_view=null;ready;isReady=!1;destroyed=!1;resolveReady=()=>{};rejectReady=()=>{};get texture(){if(!this._texture)throw new Error("Texture not initialized yet");return this._texture}get sampler(){if(!this._sampler)throw new Error("Sampler not initialized yet");return this._sampler}get view(){if(!this._view)throw new Error("View not initialized yet");return this._view}get[Symbol.toStringTag](){return"DynamicTexture"}toString(){let e=this._texture?.width??this.props.width??"?",r=this._texture?.height??this.props.height??"?";return`DynamicTexture:"${this.id}":${e}x${r}px:(${this.isReady?"ready":"loading..."})`}constructor(e,r){this.device=e;let i=qe("dynamic-texture"),n=r;this.props={...t.defaultProps,id:i,...r,data:null},this.id=this.props.id,this.ready=new Promise((o,s)=>{this.resolveReady=o,this.rejectReady=s}),this.initAsync(n)}async initAsync(e){try{let r=await this._loadAllData(e);this._checkNotDestroyed();let i=r.data?LB({...r,width:e.width,height:e.height,format:e.format}):[],n="format"in e&&e.format!==void 0,o="usage"in e&&e.usage!==void 0,a=(()=>{if(this.props.width&&this.props.height)return{width:this.props.width,height:this.props.height};let g=Mx(r);return g||{width:this.props.width||1,height:this.props.height||1}})();if(!a||a.width<=0||a.height<=0)throw new Error(`${this} size could not be determined or was zero`);let c=FB(this.device,i,a,{format:n?e.format:void 0}),l=c.format??this.props.format,f={...this.props,...a,format:l,mipLevels:1,data:void 0};this.device.isTextureFormatCompressed(l)&&!o&&(f.usage=N.SAMPLE|N.COPY_DST);let u=this.props.mipmaps&&!c.hasExplicitMipChain&&!this.device.isTextureFormatCompressed(l);if(this.device.type==="webgpu"&&u){let g=this.props.dimension==="3d"?N.SAMPLE|N.STORAGE|N.COPY_DST|N.COPY_SRC:N.SAMPLE|N.RENDER|N.COPY_DST|N.COPY_SRC;f.usage|=g}let d=this.device.getMipLevelCount(f.width,f.height),h=c.hasExplicitMipChain?c.mipLevels:this.props.mipLevels==="auto"?d:Math.max(1,Math.min(d,this.props.mipLevels??1)),p={...f,mipLevels:h};this._texture=this.device.createTexture(p),this._sampler=this.texture.sampler,this._view=this.texture.view,c.subresources.length&&this._setTextureSubresources(c.subresources),this.props.mipmaps&&!c.hasExplicitMipChain&&!u&&x.warn(`${this} skipping auto-generated mipmaps for compressed texture format`)(),u&&this.generateMipmaps(),this.isReady=!0,this.resolveReady(this.texture),x.info(0,`${this} created`)()}catch(r){let i=r instanceof Error?r:new Error(String(r));this.rejectReady(i)}}destroy(){this._texture&&(this._texture.destroy(),this._texture=null,this._sampler=null,this._view=null),this.destroyed=!0}generateMipmaps(){this.device.type==="webgl"?this.texture.generateMipmapsWebGL():this.device.type==="webgpu"?this.device.generateMipmapsWebGPU(this.texture):x.warn(`${this} mipmaps not supported on ${this.device.type}`)}setSampler(e={}){this._checkReady();let r=e instanceof Re?e:this.device.createSampler(e);this.texture.setSampler(r),this._sampler=r}async readBuffer(e={}){this.isReady||await this.ready;let r=e.width??this.texture.width,i=e.height??this.texture.height,n=e.depthOrArrayLayers??this.texture.depth,o=this.texture.computeMemoryLayout({width:r,height:i,depthOrArrayLayers:n}),s=this.device.createBuffer({byteLength:o.byteLength,usage:F.COPY_DST|F.MAP_READ});this.texture.readBuffer({...e,width:r,height:i,depthOrArrayLayers:n},s);let a=this.device.createFence();return await a.signaled,a.destroy(),s}async readAsync(e={}){this.isReady||await this.ready;let r=e.width??this.texture.width,i=e.height??this.texture.height,n=e.depthOrArrayLayers??this.texture.depth,o=this.texture.computeMemoryLayout({width:r,height:i,depthOrArrayLayers:n}),s=await this.readBuffer(e),a=await s.readAsync(0,o.byteLength);return s.destroy(),a.buffer}resize(e){if(this._checkReady(),e.width===this.texture.width&&e.height===this.texture.height)return!1;let r=this.texture;return this._texture=r.clone(e),this._sampler=this.texture.sampler,this._view=this.texture.view,r.destroy(),x.info(`${this} resized`),!0}getCubeFaceIndex(e){let r=$h[e];if(r===void 0)throw new Error(`Invalid cube face: ${e}`);return r}getCubeArrayFaceIndex(e,r){return 6*e+this.getCubeFaceIndex(r)}setTexture1DData(e){if(this._checkReady(),this.texture.props.dimension!=="1d")throw new Error(`${this} is not 1d`);let r=Yh(e);this._setTextureSubresources(r)}setTexture2DData(e,r=0){if(this._checkReady(),this.texture.props.dimension!=="2d")throw new Error(`${this} is not 2d`);let i=Jr(r,e);this._setTextureSubresources(i)}setTexture3DData(e){if(this.texture.props.dimension!=="3d")throw new Error(`${this} is not 3d`);let r=Jh(e);this._setTextureSubresources(r)}setTextureArrayData(e){if(this.texture.props.dimension!=="2d-array")throw new Error(`${this} is not 2d-array`);let r=Qh(e);this._setTextureSubresources(r)}setTextureCubeData(e){if(this.texture.props.dimension!=="cube")throw new Error(`${this} is not cube`);let r=Zh(e);this._setTextureSubresources(r)}setTextureCubeArrayData(e){if(this.texture.props.dimension!=="cube-array")throw new Error(`${this} is not cube-array`);let r=qh(e);this._setTextureSubresources(r)}_setTextureSubresources(e){for(let r of e){let{z:i,mipLevel:n}=r;switch(r.type){case"external-image":let{image:o,flipY:s}=r;this.texture.copyExternalImage({image:o,z:i,mipLevel:n,flipY:s});break;case"texture-data":let{data:a,textureFormat:c}=r;if(c&&c!==this.texture.format)throw new Error(`${this} mip level ${n} uses format "${c}" but texture format is "${this.texture.format}"`);this.texture.writeData(a.data,{x:0,y:0,z:i,width:a.width,height:a.height,depthOrArrayLayers:1,mipLevel:n});break;default:throw new Error("Unsupported 2D mip-level payload")}}}async _loadAllData(e){let r=await ep(e.data);return{dimension:e.dimension??"2d",data:r??null}}_checkNotDestroyed(){this.destroyed&&x.warn(`${this} already destroyed`)}_checkReady(){this.isReady||x.warn(`${this} Cannot perform this operation before ready`)}static defaultProps={...N.defaultProps,dimension:"2d",data:null,mipmaps:!1}};function LB(t){if(!t.data)return[];let e=t.width&&t.height?{width:t.width,height:t.height}:void 0,r="format"in t?t.format:void 0;switch(t.dimension){case"1d":return Yh(t.data);case"2d":return Jr(0,t.data,e,r);case"3d":return Jh(t.data);case"2d-array":return Qh(t.data);case"cube":return Zh(t.data);case"cube-array":return qh(t.data);default:throw new Error(`Unhandled dimension ${t.dimension}`)}}function FB(t,e,r,i){if(e.length===0)return{subresources:e,mipLevels:1,format:i.format,hasExplicitMipChain:!1};let n=new Map;for(let f of e){let u=n.get(f.z)??[];u.push(f),n.set(f.z,u)}let o=e.some(f=>f.mipLevel>0),s=i.format,a=Number.POSITIVE_INFINITY,c=[];for(let[f,u]of n){let d=[...u].sort((y,_)=>y.mipLevel-_.mipLevel),h=d[0];if(!h||h.mipLevel!==0)throw new Error(`DynamicTexture: slice ${f} is missing mip level 0`);let p=Ix(t,h);if(p.width!==r.width||p.height!==r.height)throw new Error(`DynamicTexture: slice ${f} base level dimensions ${p.width}x${p.height} do not match expected ${r.width}x${r.height}`);let g=wx(h);if(g){if(s&&s!==g)throw new Error(`DynamicTexture: slice ${f} base level format "${g}" does not match texture format "${s}"`);s=g}let m=s&&t.isTextureFormatCompressed(s)?NB(t,p.width,p.height,s):t.getMipLevelCount(p.width,p.height),b=0;for(let y=0;y<d.length;y++){let _=d[y];if(!_||_.mipLevel!==y||y>=m)break;let A=Ix(t,_),T=Math.max(1,p.width>>y),S=Math.max(1,p.height>>y);if(A.width!==T||A.height!==S)break;let v=wx(_);if(v&&(s||(s=v),v!==s))break;b++,c.push(_)}a=Math.min(a,b)}let l=Number.isFinite(a)?Math.max(1,a):1;return{subresources:c.filter(f=>f.mipLevel<l),mipLevels:l,format:s,hasExplicitMipChain:o}}function wx(t){if(t.type==="texture-data")return t.textureFormat??Kh(t.data)}function Ix(t,e){switch(e.type){case"external-image":return t.getExternalImageSize(e.image);case"texture-data":return{width:e.data.width,height:e.data.height};default:throw new Error("Unsupported texture subresource")}}function NB(t,e,r,i){let{blockWidth:n=1,blockHeight:o=1}=t.getTextureFormatInfo(i),s=1;for(let a=1;;a++){let c=Math.max(1,e>>a),l=Math.max(1,r>>a);if(c<n||l<o)break;s++}return s}async function ep(t){if(t=await t,Array.isArray(t))return await Promise.all(t.map(ep));if(t&&typeof t=="object"&&t.constructor===Object){let e=t,r=await Promise.all(Object.values(e).map(ep)),i=Object.keys(e),n={};for(let o=0;o<i.length;o++)n[i[o]]=r[o];return n}return t}var gr=2,DB=1e4,Bx="render pipeline initialization failed",ae=class t{static defaultProps={...Qe.defaultProps,source:void 0,vs:null,fs:null,id:"unnamed",handle:void 0,userData:{},defines:{},modules:[],geometry:null,indexBuffer:null,attributes:{},constantAttributes:{},bindings:{},uniforms:{},varyings:[],isInstanced:void 0,instanceCount:0,vertexCount:0,shaderInputs:void 0,material:void 0,pipelineFactory:void 0,shaderFactory:void 0,transformFeedback:void 0,shaderAssembler:Fr.getDefaultShaderAssembler(),debugShaders:void 0,disableWarnings:void 0};device;id;source;vs;fs;pipelineFactory;shaderFactory;userData={};parameters;topology;bufferLayout;isInstanced=void 0;instanceCount=0;vertexCount;indexBuffer=null;bufferAttributes={};constantAttributes={};bindings={};vertexArray;transformFeedback=null;pipeline;shaderInputs;material=null;_uniformStore;_attributeInfos={};_gpuGeometry=null;props;_pipelineNeedsUpdate="newly created";_needsRedraw="initializing";_destroyed=!1;_lastDrawTimestamp=-1;_bindingTable=[];get[Symbol.toStringTag](){return"Model"}toString(){return`Model(${this.id})`}constructor(e,r){this.props={...t.defaultProps,...r},r=this.props,this.id=r.id||qe("model"),this.device=e,Object.assign(this.userData,r.userData),this.material=r.material||null;let i=Object.fromEntries(this.props.modules?.map(c=>[c.name,c])||[]),n=r.shaderInputs||new pr(i,{disableWarnings:this.props.disableWarnings});this.setShaderInputs(n);let o=UB(e),s=(this.props.modules?.length>0?this.props.modules:this.shaderInputs?.getModules())||[];if(this.props.shaderLayout=jh(this.props.shaderLayout,s)||null,this.device.type==="webgpu"&&this.props.source){let{source:c,getUniforms:l,bindingTable:f}=this.props.shaderAssembler.assembleWGSLShader({platformInfo:o,...this.props,modules:s});this.source=c,this._getModuleUniforms=l,this._bindingTable=f;let u=e.getShaderLayout?.(this.source);this.props.shaderLayout=jh(this.props.shaderLayout||u||null,s)||null}else{let{vs:c,fs:l,getUniforms:f}=this.props.shaderAssembler.assembleGLSLShaderPair({platformInfo:o,...this.props,modules:s});this.vs=c,this.fs=l,this._getModuleUniforms=f,this._bindingTable=[]}this.vertexCount=this.props.vertexCount,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,r.geometry&&this.setGeometry(r.geometry),this.pipelineFactory=r.pipelineFactory||to.getDefaultPipelineFactory(this.device),this.shaderFactory=r.shaderFactory||ro.getDefaultShaderFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=e.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),"isInstanced"in r&&(this.isInstanced=r.isInstanced),r.instanceCount&&this.setInstanceCount(r.instanceCount),r.vertexCount&&this.setVertexCount(r.vertexCount),r.indexBuffer&&this.setIndexBuffer(r.indexBuffer),r.attributes&&this.setAttributes(r.attributes),r.constantAttributes&&this.setConstantAttributes(r.constantAttributes),r.bindings&&this.setBindings(r.bindings),r.transformFeedback&&(this.transformFeedback=r.transformFeedback)}destroy(){this._destroyed||(this.pipelineFactory.release(this.pipeline),this.shaderFactory.release(this.pipeline.vs),this.pipeline.fs&&this.pipeline.fs!==this.pipeline.vs&&this.shaderFactory.release(this.pipeline.fs),this._uniformStore.destroy(),this._gpuGeometry?.destroy(),this._destroyed=!0)}needsRedraw(){this._getBindingsUpdateTimestamp()>this._lastDrawTimestamp&&this.setNeedsRedraw("contents of bound textures or buffers updated");let e=this._needsRedraw;return this._needsRedraw=!1,e}setNeedsRedraw(e){this._needsRedraw||=e}getBindingDebugTable(){return this._bindingTable}predraw(){this.updateShaderInputs(),this.pipeline=this._updatePipeline()}draw(e){let r=this._areBindingsLoading();if(r)return x.info(gr,`>>> DRAWING ABORTED ${this.id}: ${r} not loaded`)(),!1;try{e.pushDebugGroup(`${this}.predraw(${e})`),this.predraw()}finally{e.popDebugGroup()}let i,n=this.pipeline.isErrored;try{if(e.pushDebugGroup(`${this}.draw(${e})`),this._logDrawCallStart(),this.pipeline=this._updatePipeline(),n=this.pipeline.isErrored,n)x.info(gr,`>>> DRAWING ABORTED ${this.id}: ${Bx}`)(),i=!1;else{let o=this._getBindings(),s=this._getBindGroups(),{indexBuffer:a}=this.vertexArray,c=a?a.byteLength/(a.indexType==="uint32"?4:2):void 0;i=this.pipeline.draw({renderPass:e,vertexArray:this.vertexArray,isInstanced:this.isInstanced,vertexCount:this.vertexCount,instanceCount:this.instanceCount,indexCount:c,transformFeedback:this.transformFeedback||void 0,bindings:o,bindGroups:s,_bindGroupCacheKeys:this._getBindGroupCacheKeys(),uniforms:this.props.uniforms,parameters:this.parameters,topology:this.topology})}}finally{e.popDebugGroup(),this._logDrawCallEnd()}return this._logFramebuffer(e),i?(this._lastDrawTimestamp=this.device.timestamp,this._needsRedraw=!1):n?this._needsRedraw=Bx:this._needsRedraw="waiting for resource initialization",i}setGeometry(e){this._gpuGeometry?.destroy();let r=e&&Ax(this.device,e);if(r){this.setTopology(r.topology||"triangle-list");let i=new Wi(this.bufferLayout);this.bufferLayout=i.mergeBufferLayouts(r.bufferLayout,this.bufferLayout),this.vertexArray&&this._setGeometryAttributes(r)}this._gpuGeometry=r}setTopology(e){e!==this.topology&&(this.topology=e,this._setPipelineNeedsUpdate("topology"))}setBufferLayout(e){let r=new Wi(this.bufferLayout);this.bufferLayout=this._gpuGeometry?r.mergeBufferLayouts(e,this._gpuGeometry.bufferLayout):e,this._setPipelineNeedsUpdate("bufferLayout"),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry)}setParameters(e){Bc(e,this.parameters,2)||(this.parameters=e,this._setPipelineNeedsUpdate("parameters"))}setInstanceCount(e){this.instanceCount=e,this.isInstanced===void 0&&e>0&&(this.isInstanced=!0),this.setNeedsRedraw("instanceCount")}setVertexCount(e){this.vertexCount=e,this.setNeedsRedraw("vertexCount")}setShaderInputs(e){this.shaderInputs=e,this._uniformStore=new zr(this.device,this.shaderInputs.modules);for(let[r,i]of Object.entries(this.shaderInputs.modules))if(Oc(i)&&!this.material?.ownsModule(r)){let n=this._uniformStore.getManagedUniformBuffer(r);this.bindings[`${r}Uniforms`]=n}this.setNeedsRedraw("shaderInputs")}setMaterial(e){this.material=e,this.setNeedsRedraw("material")}updateShaderInputs(){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues()),this.setBindings(this._getNonMaterialBindings(this.shaderInputs.getBindingValues())),this.setNeedsRedraw("shaderInputs")}setBindings(e){Object.assign(this.bindings,e),this.setNeedsRedraw("bindings")}setTransformFeedback(e){this.transformFeedback=e,this.setNeedsRedraw("transformFeedback")}setIndexBuffer(e){this.vertexArray.setIndexBuffer(e),this.setNeedsRedraw("indexBuffer")}setAttributes(e,r){let i=r?.disableWarnings??this.props.disableWarnings;e.indices&&x.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`)(),this.bufferLayout=Cx(this.pipeline.shaderLayout,this.bufferLayout);let n=new Wi(this.bufferLayout);for(let[o,s]of Object.entries(e)){let a=n.getBufferLayout(o);if(!a){i||x.warn(`Model(${this.id}): Missing layout for buffer "${o}".`)();continue}let c=n.getAttributeNamesForBuffer(a),l=!1;for(let f of c){let u=this._attributeInfos[f];if(u){let d=this.device.type==="webgpu"?n.getBufferIndex(u.bufferName):u.location;this.vertexArray.setBuffer(d,s),l=!0}}!l&&!i&&x.warn(`Model(${this.id}): Ignoring buffer "${s.id}" for unknown attribute "${o}"`)()}this.setNeedsRedraw("attributes")}setConstantAttributes(e,r){for(let[i,n]of Object.entries(e)){let o=this._attributeInfos[i];o?this.vertexArray.setConstantWebGL(o.location,n):(r?.disableWarnings??this.props.disableWarnings)||x.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${i}"`)()}this.setNeedsRedraw("constants")}_areBindingsLoading(){for(let e of Object.values(this.bindings))if(e instanceof He&&!e.isReady)return e.id;for(let e of Object.values(this.material?.bindings||{}))if(e instanceof He&&!e.isReady)return e.id;return!1}_getBindings(){let e={};for(let[r,i]of Object.entries(this.bindings))i instanceof He?i.isReady&&(e[r]=i.texture):e[r]=i;return e}_getBindGroups(){let e=this.pipeline?.shaderLayout||this.props.shaderLayout||{bindings:[]},r=e.bindings.length?io(e,this._getBindings()):{0:this._getBindings()};if(!this.material)return r;for(let[i,n]of Object.entries(this.material.getBindingsByGroup())){let o=Number(i);r[o]={...r[o]||{},...n}}return r}_getBindGroupCacheKeys(){let e=this.material?.getBindGroupCacheKey(3);return e?{3:e}:{}}_getBindingsUpdateTimestamp(){let e=0;for(let r of Object.values(this.bindings))r instanceof st?e=Math.max(e,r.texture.updateTimestamp):r instanceof F||r instanceof N?e=Math.max(e,r.updateTimestamp):r instanceof He?e=r.texture?Math.max(e,r.texture.updateTimestamp):1/0:r instanceof Re||(e=Math.max(e,r.buffer.updateTimestamp));return Math.max(e,this.material?.getBindingsUpdateTimestamp()||0)}_setGeometryAttributes(e){let r={...e.attributes};for(let[i]of Object.entries(r))!this.pipeline.shaderLayout.attributes.find(n=>n.name===i)&&i!=="positions"&&delete r[i];this.vertexCount=e.vertexCount,this.setIndexBuffer(e.indices||null),this.setAttributes(e.attributes,{disableWarnings:!0}),this.setAttributes(r,{disableWarnings:this.props.disableWarnings}),this.setNeedsRedraw("geometry attributes")}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate||=e,this.setNeedsRedraw(e)}_updatePipeline(){if(this._pipelineNeedsUpdate){let e=null,r=null;this.pipeline&&(x.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),e=this.pipeline.vs,r=this.pipeline.fs),this._pipelineNeedsUpdate=!1;let i=this.shaderFactory.createShader({id:`${this.id}-vertex`,stage:"vertex",source:this.source||this.vs,debugShaders:this.props.debugShaders}),n=null;this.source?n=i:this.fs&&(n=this.shaderFactory.createShader({id:`${this.id}-fragment`,stage:"fragment",source:this.source||this.fs,debugShaders:this.props.debugShaders})),this.pipeline=this.pipelineFactory.createRenderPipeline({...this.props,bindings:void 0,bufferLayout:this.bufferLayout,topology:this.topology,parameters:this.parameters,bindGroups:this._getBindGroups(),vs:i,fs:n}),this._attributeInfos=rc(this.pipeline.shaderLayout,this.bufferLayout),e&&this.shaderFactory.release(e),r&&r!==e&&this.shaderFactory.release(r)}return this.pipeline}_lastLogTime=0;_logOpen=!1;_logDrawCallStart(){let e=x.level>3?0:DB;x.level<2||Date.now()-this._lastLogTime<e||(this._lastLogTime=Date.now(),this._logOpen=!0,x.group(gr,`>>> DRAWING MODEL ${this.id}`,{collapsed:x.level<=2})())}_logDrawCallEnd(){if(this._logOpen){let e=yx(this.pipeline.shaderLayout,this.id);x.table(gr,e)();let r=this.shaderInputs.getDebugTable();x.table(gr,r)();let i=this._getAttributeDebugTable();x.table(gr,this._attributeInfos)(),x.table(gr,i)(),x.groupEnd(gr)(),this._logOpen=!1}}_drawCount=0;_logFramebuffer(e){let r=this.device.props.debugFramebuffers;if(this._drawCount++,!r)return;let i=e.props.framebuffer;Sx(e,i,{id:i?.id||`${this.id}-framebuffer`,minimap:!0})}_getAttributeDebugTable(){let e={};for(let[r,i]of Object.entries(this._attributeInfos)){let n=this.vertexArray.attributes[i.location];e[i.location]={name:r,type:i.shaderType,values:n?this._getBufferOrConstantValues(n,i.bufferDataType):"null"}}if(this.vertexArray.indexBuffer){let{indexBuffer:r}=this.vertexArray,i=r.indexType==="uint32"?new Uint32Array(r.debugData):new Uint16Array(r.debugData);e.indices={name:"indices",type:r.indexType,values:i.toString()}}return e}_getBufferOrConstantValues(e,r){let i=ve.getTypedArrayConstructor(r);return(e instanceof F?new i(e.debugData):e).toString()}_getNonMaterialBindings(e){if(!this.material)return e;let r={};for(let[i,n]of Object.entries(e))this.material.ownsBinding(i)||(r[i]=n);return r}};function UB(t){return{type:t.type,shaderLanguage:t.info.shadingLanguage,shaderLanguageVersion:t.info.shadingLanguageVersion,gpu:t.info.gpu,features:t.features}}L();var Lo=3,Gt=class{device;modules;_materialBindingNames;_materialModuleNames;constructor(e,r={}){this.device=e,this.modules=r.modules||[];let i=new pr(Object.fromEntries(this.modules.map(n=>[n.name,n])));this._materialBindingNames=kB(i),this._materialModuleNames=VB(i)}createMaterial(e={}){return new Lc(this.device,{...e,factory:this})}getBindingNames(){return Array.from(this._materialBindingNames)}ownsBinding(e){if(this._materialBindingNames.has(e))return!0;let r=tp(e);return r?this._materialModuleNames.has(r):!1}ownsModule(e){return this._materialModuleNames.has(e)}getBindingsByGroup(e){return Object.keys(e).length>0?{[Lo]:e}:{}}};function tp(t){return t.endsWith("Uniforms")?t.slice(0,-8):null}function kB(t){let e=new Set;for(let r of Object.values(t.modules))for(let i of r.bindingLayout||[])i.group===Lo&&e.add(i.name);return e}function VB(t){let e=new Set;for(let r of Object.values(t.modules))r.name&&r.bindingLayout?.some(i=>i.group===Lo&&i.name===r.name)&&e.add(r.name);return e}var Lc=class{id;device;factory;shaderInputs;bindings={};_uniformStore;_bindGroupCacheToken={};constructor(e,r={}){this.id=r.id||qe("material"),this.device=e,this.factory=r.factory||new Gt(e,{modules:r.modules||r.shaderInputs?.getModules()||[]});let i=Object.fromEntries((r.shaderInputs?.getModules()||this.factory.modules).map(n=>[n.name,n]));this.shaderInputs=r.shaderInputs||new pr(i),this._uniformStore=new zr(this.device,this.shaderInputs.modules);for(let[n,o]of Object.entries(this.shaderInputs.modules))if(this.ownsModule(n)&&Oc(o)){let s=this._uniformStore.getManagedUniformBuffer(n);this.bindings[`${n}Uniforms`]=s}this.updateShaderInputs(),r.bindings&&this._replaceOwnedBindings(r.bindings)}destroy(){this._uniformStore.destroy()}clone(e={}){let r=this.factory.createMaterial({id:e.id,shaderInputs:e.shaderInputs,bindings:{...this.getResourceBindings(),...e.bindings}});return e.shaderInputs||r.setProps(this.shaderInputs.getUniformValues()),e.moduleProps&&r.setProps(e.moduleProps),r}ownsBinding(e){return this.factory.ownsBinding(e)}ownsModule(e){return this.factory.ownsModule(e)}setProps(e){this.shaderInputs.setProps(e),this.updateShaderInputs()}updateShaderInputs(){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues()),this._setOwnedBindings(this.shaderInputs.getBindingValues())&&(this._bindGroupCacheToken={})}getResourceBindings(){let e={};for(let[r,i]of Object.entries(this.bindings))tp(r)||(e[r]=i);return e}getBindings(){let e={},r=e;for(let[i,n]of Object.entries(this.bindings))n instanceof He?n.isReady&&(r[i]=n.texture):r[i]=n;return e}getBindingsByGroup(){return this.factory.getBindingsByGroup(this.getBindings())}getBindGroupCacheKey(e){return e===Lo?this._bindGroupCacheToken:null}getBindingsUpdateTimestamp(){let e=0;for(let r of Object.values(this.bindings))r instanceof st?e=Math.max(e,r.texture.updateTimestamp):r instanceof F||r instanceof N?e=Math.max(e,r.updateTimestamp):r instanceof He?e=r.texture?Math.max(e,r.texture.updateTimestamp):1/0:r instanceof Re||(e=Math.max(e,r.buffer.updateTimestamp));return e}_replaceOwnedBindings(e){this._setOwnedBindings(e)&&(this._bindGroupCacheToken={})}_setOwnedBindings(e){let r=!1;for(let[i,n]of Object.entries(e))n!==void 0&&this.ownsBinding(i)&&this.bindings[i]!==n&&(this.bindings[i]=n,r=!0);return r}};L();var mr=class t{device;model;transformFeedback;static defaultProps={...ae.defaultProps,outputs:void 0,feedbackBuffers:void 0};static isSupported(e){return e?.info?.type==="webgl"}constructor(e,r=t.defaultProps){if(!t.isSupported(e))throw new Error("BufferTransform not yet implemented on WebGPU");this.device=e,this.model=new ae(this.device,{id:r.id||"buffer-transform-model",fs:r.fs||Gu(),topology:r.topology||"point-list",varyings:r.outputs||r.varyings,...r}),this.transformFeedback=this.device.createTransformFeedback({layout:this.model.pipeline.shaderLayout,buffers:r.feedbackBuffers}),this.model.setTransformFeedback(this.transformFeedback),Object.seal(this)}destroy(){this.model&&this.model.destroy()}delete(){this.destroy()}run(e){e?.inputBuffers&&this.model.setAttributes(e.inputBuffers),e?.outputBuffers&&this.transformFeedback.setBuffers(e.outputBuffers);let r=this.device.beginRenderPass(e);this.model.draw(r),r.end()}getBuffer(e){return this.transformFeedback.getBuffer(e)}readAsync(e){let r=this.getBuffer(e);if(!r)throw new Error("BufferTransform#getBuffer");if(r instanceof F)return r.readAsync();let{buffer:i,byteOffset:n=0,byteLength:o=i.byteLength}=r;return i.readAsync(n,o)}};var Te=class{id;topology;vertexCount;indices;attributes;userData={};constructor(e){let{attributes:r={},indices:i=null,vertexCount:n=null}=e;this.id=e.id||qe("geometry"),this.topology=e.topology,i&&(this.indices=ArrayBuffer.isView(i)?{value:i,size:1}:i),this.attributes={};for(let[o,s]of Object.entries(r)){let a=ArrayBuffer.isView(s)?{value:s}:s;if(!ArrayBuffer.isView(a.value))throw new Error(`${this._print(o)}: must be typed array or object with value as typed array`);if((o==="POSITION"||o==="positions")&&!a.size&&(a.size=3),o==="indices"){if(this.indices)throw new Error("Multiple indices detected");this.indices=a}else this.attributes[o]=a}this.indices&&this.indices.isIndexed!==void 0&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=n||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(e){return`Geometry ${this.id} attribute ${e}`}_setAttributes(e,r){return this}_calculateVertexCount(e,r){if(r)return r.value.length;let i=1/0;for(let n of Object.values(e)){let{value:o,size:s,constant:a}=n;!a&&o&&s!==void 0&&s>=1&&(i=Math.min(i,o.length/s))}return i}};function rp(t,e){if(!t)throw new Error(e)}var Mt=class{id;matrix=new V;display=!0;position=new Y;rotation=new Y;scale=new Y(1,1,1);userData={};props={};constructor(e={}){let{id:r}=e;this.id=r||qe(this.constructor.name),this._setScenegraphNodeProps(e)}getBounds(){return null}destroy(){}delete(){this.destroy()}setProps(e){return this._setScenegraphNodeProps(e),this}toString(){return`{type: ScenegraphNode, id: ${this.id})}`}setPosition(e){return rp(e.length===3,"setPosition requires vector argument"),this.position=e,this}setRotation(e){return rp(e.length===3||e.length===4,"setRotation requires vector argument"),this.rotation=e,this}setScale(e){return rp(e.length===3,"setScale requires vector argument"),this.scale=e,this}setMatrix(e,r=!0){r?this.matrix.copy(e):this.matrix=e}setMatrixComponents(e){let{position:r,rotation:i,scale:n,update:o=!0}=e;return r&&this.setPosition(r),i&&this.setRotation(i),n&&this.setScale(n),o&&this.updateMatrix(),this}updateMatrix(){if(this.matrix.identity(),this.matrix.translate(this.position),this.rotation.length===4){let e=new V().fromQuaternion(this.rotation);this.matrix.multiplyRight(e)}else this.matrix.rotateXYZ(this.rotation);return this.matrix.scale(this.scale),this}update({position:e,rotation:r,scale:i}={}){return e&&this.setPosition(e),r&&this.setRotation(r),i&&this.setScale(i),this.updateMatrix(),this}getCoordinateUniforms(e,r){r=r||this.matrix;let i=new V(e).multiplyRight(r),n=i.invert(),o=n.transpose();return{viewMatrix:e,modelMatrix:r,objectMatrix:r,worldMatrix:i,worldInverseMatrix:n,worldInverseTransposeMatrix:o}}_setScenegraphNodeProps(e){e?.position&&this.setPosition(e.position),e?.rotation&&this.setRotation(e.rotation),e?.scale&&this.setScale(e.scale),this.updateMatrix(),e?.matrix&&this.setMatrix(e.matrix),Object.assign(this.props,e)}};L();var Xt=class t extends Mt{children;constructor(e={}){e=Array.isArray(e)?{children:e}:e;let{children:r=[]}=e;x.assert(r.every(i=>i instanceof Mt),"every child must an instance of ScenegraphNode"),super(e),this.children=r}getBounds(){let e=[[1/0,1/0,1/0],[-1/0,-1/0,-1/0]];return this.traverse((r,{worldMatrix:i})=>{let n=r.getBounds();if(!n)return;let[o,s]=n,a=new Y(o).add(s).divide([2,2,2]);i.transformAsPoint(a,a);let c=new Y(s).subtract(o).divide([2,2,2]);i.transformAsVector(c,c);for(let l=0;l<8;l++){let f=new Y(l&1?-1:1,l&2?-1:1,l&4?-1:1).multiply(c).add(a);for(let u=0;u<3;u++)e[0][u]=Math.min(e[0][u],f[u]),e[1][u]=Math.max(e[1][u],f[u])}}),Number.isFinite(e[0][0])?e:null}destroy(){this.children.forEach(e=>e.destroy()),this.removeAll(),super.destroy()}add(...e){for(let r of e)Array.isArray(r)?this.add(...r):this.children.push(r);return this}remove(e){let r=this.children,i=r.indexOf(e);return i>-1&&r.splice(i,1),this}removeAll(){return this.children=[],this}traverse(e,{worldMatrix:r=new V}={}){let i=new V(r).multiplyRight(this.matrix);for(let n of this.children)n instanceof t?n.traverse(e,{worldMatrix:i}):e(n,{worldMatrix:i})}preorderTraversal(e,{worldMatrix:r=new V}={}){let i=new V(r).multiplyRight(this.matrix);e(this,{worldMatrix:i});for(let n of this.children)n instanceof t?n.preorderTraversal(e,{worldMatrix:i}):e(n,{worldMatrix:i})}};var _r=class extends Mt{model;bounds=null;managedResources;constructor(e){super(e),this.model=e.model,this.managedResources=e.managedResources||[],this.bounds=e.bounds||null,this.setProps(e)}destroy(){this.model&&(this.model.destroy(),this.model=null),this.managedResources.forEach(e=>e.destroy()),this.managedResources=[]}getBounds(){return this.bounds}draw(e){return this.model.draw(e)}};var HB={blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"zero",blendAlphaOperation:"add",blendAlphaSrcFactor:"constant",blendAlphaDstFactor:"zero"},Qr=class extends Wt{constructor(){super(...arguments),this._colorEncoderState=null}render(e){return"pickingFBO"in e?this._drawPickingBuffer(e):{decodePickingColor:null,stats:super._render(e)}}_drawPickingBuffer({layers:e,layerFilter:r,views:i,viewports:n,onViewportActive:o,pickingFBO:s,deviceRect:{x:a,y:c,width:l,height:f},cullRect:u,effects:d,pass:h="picking",pickZ:p,shaderModuleProps:g,clearColor:m}){this.pickZ=p;let b=this._resetColorEncoder(p),y=[a,c,l,f],_=super._render({target:s,layers:e,layerFilter:r,views:i,viewports:n,onViewportActive:o,cullRect:u,effects:d?.filter(T=>T.useInPicking),pass:h,isPicking:!0,shaderModuleProps:g,clearColor:m??[0,0,0,0],colorMask:15,scissorRect:y});return this._colorEncoderState=null,{decodePickingColor:b&&zB.bind(null,b),stats:_}}shouldDrawLayer(e){let{pickable:r,operation:i}=e.props;return r&&i.includes("draw")||i.includes("terrain")||i.includes("mask")}getShaderModuleProps(e,r,i){return{picking:{isActive:1,isAttribute:this.pickZ},lighting:{enabled:!1}}}getLayerParameters(e,r,i){let n={...e.props.parameters},{pickable:o,operation:s}=e.props;return this._colorEncoderState?o&&s.includes("draw")?(Object.assign(n,HB),n.blend=!0,this.device.type==="webgpu"?n.blendConstant=Ox(this._colorEncoderState,e,i):n.blendColor=Ox(this._colorEncoderState,e,i),s.includes("terrain")&&e.state?._hasPickingCover&&(n.blendAlphaSrcFactor="one")):s.includes("terrain")&&(n.blend=!1):n.blend=!1,n}_resetColorEncoder(e){return this._colorEncoderState=e?null:{byLayer:new Map,byAlpha:[]},this._colorEncoderState}};function Ox(t,e,r){let{byLayer:i,byAlpha:n}=t,o,s=i.get(e);return s?(s.viewports.push(r),o=s.a):(o=i.size+1,o<=255?(s={a:o,layer:e,viewports:[r]},i.set(e,s),n[o]=s):(P.warn("Too many pickable layers, only picking the first 255")(),o=0)),[0,0,0,o/255]}function zB(t,e){let r=t.byAlpha[e[3]];return r&&{pickedLayer:r.layer,pickedViewports:r.viewports,pickedObjectIndex:r.layer.decodePickingColor(e)}}var br={NO_STATE:"Awaiting state",MATCHED:"Matched. State transferred from previous layer",INITIALIZED:"Initialized",AWAITING_GC:"Discarded. Awaiting garbage collection",AWAITING_FINALIZATION:"No longer matched. Awaiting garbage collection",FINALIZED:"Finalized! Awaiting garbage collection"},Gi=Symbol.for("component"),et=Symbol.for("propTypes"),Fc=Symbol.for("deprecatedProps"),$t=Symbol.for("asyncPropDefaults"),Pt=Symbol.for("asyncPropOriginal"),ft=Symbol.for("asyncPropResolved");function tt(t,e=()=>!0){return Array.isArray(t)?Lx(t,e,[]):e(t)?[t]:[]}function Lx(t,e,r){let i=-1;for(;++i<t.length;){let n=t[i];Array.isArray(n)?Lx(n,e,r):e(n)&&r.push(n)}return r}function ip({target:t,source:e,start:r=0,count:i=1}){let n=e.length,o=i*n,s=0;for(let a=r;s<n;s++)t[a++]=e[s];for(;s<o;)s<o-s?(t.copyWithin(r+s,r,r+s),s*=2):(t.copyWithin(r+s,r,r+o-s),s=o);return t}Cn();var Fo=class{constructor(e,r,i){this._loadCount=0,this._subscribers=new Set,this.id=e,this.context=i,this.setData(r)}subscribe(e){this._subscribers.add(e)}unsubscribe(e){this._subscribers.delete(e)}inUse(){return this._subscribers.size>0}delete(){}getData(){return this.isLoaded?this._error?Promise.reject(this._error):this._content:this._loader.then(()=>this.getData())}setData(e,r){if(e===this._data&&!r)return;this._data=e;let i=++this._loadCount,n=e;typeof e=="string"&&(n=ir(e)),n instanceof Promise?(this.isLoaded=!1,this._loader=n.then(o=>{this._loadCount===i&&(this.isLoaded=!0,this._error=void 0,this._content=o)}).catch(o=>{this._loadCount===i&&(this.isLoaded=!0,this._error=o||!0)})):(this.isLoaded=!0,this._error=void 0,this._content=e);for(let o of this._subscribers)o.onChange(this.getData())}};var No=class{constructor(e){this.protocol=e.protocol||"resource://",this._context={device:e.device,gl:e.device?.gl,resourceManager:this},this._resources={},this._consumers={},this._pruneRequest=null}contains(e){return e.startsWith(this.protocol)?!0:e in this._resources}add({resourceId:e,data:r,forceUpdate:i=!1,persistent:n=!0}){let o=this._resources[e];o?o.setData(r,i):(o=new Fo(e,r,this._context),this._resources[e]=o),o.persistent=n}remove(e){let r=this._resources[e];r&&(r.delete(),delete this._resources[e])}unsubscribe({consumerId:e}){let r=this._consumers[e];if(r){for(let i in r){let n=r[i],o=this._resources[n.resourceId];o&&o.unsubscribe(n)}delete this._consumers[e],this.prune()}}subscribe({resourceId:e,onChange:r,consumerId:i,requestId:n="default"}){let{_resources:o,protocol:s}=this;e.startsWith(s)&&(e=e.replace(s,""),o[e]||this.add({resourceId:e,data:null,persistent:!1}));let a=o[e];if(this._track(i,n,a,r),a)return a.getData()}prune(){this._pruneRequest||(this._pruneRequest=setTimeout(()=>this._prune(),0))}finalize(){for(let e in this._resources)this._resources[e].delete()}_track(e,r,i,n){let o=this._consumers,s=o[e]=o[e]||{},a=s[r],c=a&&a.resourceId&&this._resources[a.resourceId];c&&(c.unsubscribe(a),this.prune()),i&&(a?(a.onChange=n,a.resourceId=i.id):a={onChange:n,resourceId:i.id},s[r]=a,i.subscribe(a))}_prune(){this._pruneRequest=null;for(let e of Object.keys(this._resources)){let r=this._resources[e];!r.persistent&&!r.inUse()&&(r.delete(),delete this._resources[e])}}};var jB="layerManager.setLayers",WB="layerManager.activateViewport",Do=class{constructor(e,r){this._lastRenderedLayers=[],this._needsRedraw=!1,this._needsUpdate=!1,this._nextLayers=null,this._debug=!1,this._defaultShaderModulesChanged=!1,this.activateViewport=a=>{te(WB,this,a),a&&(this.context.viewport=a)};let{deck:i,stats:n,viewport:o,timeline:s}=r||{};this.layers=[],this.resourceManager=new No({device:e,protocol:"deck://"}),this.context={mousePosition:null,userData:{},layerManager:this,device:e,gl:e?.gl,deck:i,shaderAssembler:sx(e?.info?.shadingLanguage||"glsl"),defaultShaderModules:[Sh],renderPass:void 0,stats:n||new Xe({id:"deck.gl"}),viewport:o||new zi({id:"DEFAULT-INITIAL-VIEWPORT"}),timeline:s||new Yr,resourceManager:this.resourceManager,onError:void 0},Object.seal(this)}finalize(){this.resourceManager.finalize();for(let e of this.layers)this._finalizeLayer(e)}needsRedraw(e={clearRedrawFlags:!1}){let r=this._needsRedraw;e.clearRedrawFlags&&(this._needsRedraw=!1);for(let i of this.layers){let n=i.getNeedsRedraw(e);r=r||n}return r}needsUpdate(){return this._nextLayers&&this._nextLayers!==this._lastRenderedLayers?"layers changed":this._defaultShaderModulesChanged?"shader modules changed":this._needsUpdate}setNeedsRedraw(e){this._needsRedraw=this._needsRedraw||e}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e}getLayers({layerIds:e}={}){return e?this.layers.filter(r=>e.find(i=>r.id.indexOf(i)===0)):this.layers}setProps(e){"debug"in e&&(this._debug=e.debug),"userData"in e&&(this.context.userData=e.userData),"layers"in e&&(this._nextLayers=e.layers),"onError"in e&&(this.context.onError=e.onError)}setLayers(e,r){te(jB,this,r,e),this._lastRenderedLayers=e;let i=tt(e,Boolean);for(let n of i)n.context=this.context;this._updateLayers(this.layers,i)}updateLayers(){let e=this.needsUpdate();e&&(this.setNeedsRedraw(`updating layers: ${e}`),this.setLayers(this._nextLayers||this._lastRenderedLayers,e)),this._nextLayers=null}addDefaultShaderModule(e){let{defaultShaderModules:r}=this.context;r.find(i=>i.name===e.name)||(r.push(e),this._defaultShaderModulesChanged=!0)}removeDefaultShaderModule(e){let{defaultShaderModules:r}=this.context,i=r.findIndex(n=>n.name===e.name);i>=0&&(r.splice(i,1),this._defaultShaderModulesChanged=!0)}_handleError(e,r,i){i.raiseError(r,`${e} of ${i}`)}_updateLayers(e,r){let i={};for(let s of e)i[s.id]?P.warn(`Multiple old layers with same id ${s.id}`)():i[s.id]=s;if(this._defaultShaderModulesChanged){for(let s of e)s.setNeedsUpdate(),s.setChangeFlags({extensionsChanged:!0});this._defaultShaderModulesChanged=!1}let n=[];this._updateSublayersRecursively(r,i,n),this._finalizeOldLayers(i);let o=!1;for(let s of n)if(s.hasUniformTransition()){o=`Uniform transition in ${s}`;break}this._needsUpdate=o,this.layers=n}_updateSublayersRecursively(e,r,i){for(let n of e){n.context=this.context;let o=r[n.id];o===null&&P.warn(`Multiple new layers with same id ${n.id}`)(),r[n.id]=null;let s=null;try{this._debug&&o!==n&&n.validateProps(),o?(this._transferLayerState(o,n),this._updateLayer(n)):this._initializeLayer(n),i.push(n),s=n.isComposite?n.getSubLayers():null}catch(a){this._handleError("matching",a,n)}s&&this._updateSublayersRecursively(s,r,i)}}_finalizeOldLayers(e){for(let r in e){let i=e[r];i&&this._finalizeLayer(i)}}_initializeLayer(e){try{e._initialize(),e.lifecycle=br.INITIALIZED}catch(r){this._handleError("initialization",r,e)}}_transferLayerState(e,r){r._transferState(e),r.lifecycle=br.MATCHED,r!==e&&(e.lifecycle=br.AWAITING_GC)}_updateLayer(e){try{e._update()}catch(r){this._handleError("update",r,e)}}_finalizeLayer(e){this._needsRedraw=this._needsRedraw||`finalized ${e}`,e.lifecycle=br.AWAITING_FINALIZATION;try{e._finalize(),e.lifecycle=br.FINALIZED}catch(r){this._handleError("finalization",r,e)}}};function oe(t,e,r){if(t===e)return!0;if(!r||!t||!e)return!1;if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1;for(let i=0;i<t.length;i++)if(!oe(t[i],e[i],r-1))return!1;return!0}if(Array.isArray(e))return!1;if(typeof t=="object"&&typeof e=="object"){let i=Object.keys(t),n=Object.keys(e);if(i.length!==n.length)return!1;for(let o of i)if(!e.hasOwnProperty(o)||!oe(t[o],e[o],r-1))return!1;return!0}return!1}var Uo=class{constructor(e){this.views=[],this.width=100,this.height=100,this.viewState={},this.controllers={},this.timeline=e.timeline,this._viewports=[],this._viewportMap={},this._isUpdating=!1,this._needsRedraw="First render",this._needsUpdate="Initialize",this._eventManager=e.eventManager,this._eventCallbacks={onViewStateChange:e.onViewStateChange,onInteractionStateChange:e.onInteractionStateChange},this._pickPosition=e.pickPosition,Object.seal(this),this.setProps(e)}finalize(){for(let e in this.controllers){let r=this.controllers[e];r&&r.finalize()}this.controllers={}}needsRedraw(e={clearRedrawFlags:!1}){let r=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),r}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e,this._needsRedraw=this._needsRedraw||e}updateViewStates(){for(let e in this.controllers){let r=this.controllers[e];r&&r.updateTransition()}}getViewports(e){return e?this._viewports.filter(r=>r.containsPixel(e)):this._viewports}getViews(){let e={};return this.views.forEach(r=>{e[r.id]=r}),e}getView(e){return this.views.find(r=>r.id===e)}getViewState(e){let r=typeof e=="string"?this.getView(e):e,i=r&&this.viewState[r.getViewStateId()]||this.viewState;return r?r.filterViewState(i):i}getViewport(e){return this._viewportMap[e]}unproject(e,r){let i=this.getViewports(),n={x:e[0],y:e[1]};for(let o=i.length-1;o>=0;--o){let s=i[o];if(s.containsPixel(n)){let a=e.slice();return a[0]-=s.x,a[1]-=s.y,s.unproject(a,r)}}return null}setProps(e){e.views&&this._setViews(e.views),e.viewState&&this._setViewState(e.viewState),("width"in e||"height"in e)&&this._setSize(e.width,e.height),"pickPosition"in e&&(this._pickPosition=e.pickPosition),this._isUpdating||this._update()}_update(){this._isUpdating=!0,this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._isUpdating=!1}_setSize(e,r){(e!==this.width||r!==this.height)&&(this.width=e,this.height=r,this.setNeedsUpdate("Size changed"))}_setViews(e){e=tt(e,Boolean),this._diffViews(e,this.views)&&this.setNeedsUpdate("views changed"),this.views=e}_setViewState(e){e?(!oe(e,this.viewState,3)&&this.setNeedsUpdate("viewState changed"),this.viewState=e):P.warn("missing `viewState` or `initialViewState`")()}_createController(e,r){let i=r.type;return new i({timeline:this.timeline,eventManager:this._eventManager,onViewStateChange:this._eventCallbacks.onViewStateChange,onStateChange:this._eventCallbacks.onInteractionStateChange,makeViewport:o=>this.getView(e.id)?.makeViewport({viewState:o,width:this.width,height:this.height}),pickPosition:this._pickPosition})}_updateController(e,r,i,n){let o=e.controller;if(o&&i){let s={...r,...o,id:e.id,x:i.x,y:i.y,width:i.width,height:i.height};return(!n||n.constructor!==o.type)&&(n=this._createController(e,s)),n&&n.setProps(s),n}return null}_rebuildViewports(){let{views:e}=this,r=this.controllers;this._viewports=[],this.controllers={};let i=!1;for(let n=e.length;n--;){let o=e[n],s=this.getViewState(o),a=o.makeViewport({viewState:s,width:this.width,height:this.height}),c=r[o.id],l=!!o.controller;l&&!c&&(i=!0),(i||!l)&&c&&(c.finalize(),c=null),this.controllers[o.id]=this._updateController(o,s,a,c),a&&this._viewports.unshift(a)}for(let n in r){let o=r[n];o&&!this.controllers[n]&&o.finalize()}this._buildViewportMap()}_buildViewportMap(){this._viewportMap={},this._viewports.forEach(e=>{e.id&&(this._viewportMap[e.id]=this._viewportMap[e.id]||e)})}_diffViews(e,r){return e.length!==r.length?!0:e.some((i,n)=>!e[n].equals(r[n]))}};var GB=/^(?:\d+\.?\d*|\.\d+)$/;function Kt(t){switch(typeof t){case"number":if(!Number.isFinite(t))throw new Error(`Could not parse position string ${t}`);return{type:"literal",value:t};case"string":try{let e=XB(t);return new op(e).parseExpression()}catch(e){let r=e instanceof Error?e.message:String(e);throw new Error(`Could not parse position string ${t}: ${r}`)}default:throw new Error(`Could not parse position string ${t}`)}}function np(t,e){switch(t.type){case"literal":return t.value;case"percentage":return Math.round(t.value*e);case"binary":let r=np(t.left,e),i=np(t.right,e);return t.operator==="+"?r+i:r-i;default:throw new Error("Unknown layout expression type")}}function Yt(t,e){return np(t,e)}function XB(t){let e=[],r=0;for(;r<t.length;){let i=t[r];if(/\s/.test(i)){r++;continue}if(i==="+"||i==="-"||i==="("||i===")"||i==="%"){e.push({type:"symbol",value:i}),r++;continue}if(Fx(i)||i==="."){let n=r,o=i===".";for(r++;r<t.length;){let a=t[r];if(Fx(a)){r++;continue}if(a==="."&&!o){o=!0,r++;continue}break}let s=t.slice(n,r);if(!GB.test(s))throw new Error("Invalid number token");e.push({type:"number",value:parseFloat(s)});continue}if(Nx(i)){let n=r;for(;r<t.length&&Nx(t[r]);)r++;let o=t.slice(n,r).toLowerCase();e.push({type:"word",value:o});continue}throw new Error("Invalid token in position string")}return e}var op=class{constructor(e){this.index=0,this.tokens=e}parseExpression(){let e=this.parseBinaryExpression();if(this.index<this.tokens.length)throw new Error("Unexpected token at end of expression");return e}parseBinaryExpression(){let e=this.parseFactor(),r=this.peek();for(;$B(r);){this.index++;let i=this.parseFactor();e={type:"binary",operator:r.value,left:e,right:i},r=this.peek()}return e}parseFactor(){let e=this.peek();if(!e)throw new Error("Unexpected end of expression");if(e.type==="symbol"&&e.value==="+")return this.index++,this.parseFactor();if(e.type==="symbol"&&e.value==="-"){this.index++;let r=this.parseFactor();return{type:"binary",operator:"-",left:{type:"literal",value:0},right:r}}if(e.type==="symbol"&&e.value==="("){this.index++;let r=this.parseBinaryExpression();if(!this.consumeSymbol(")"))throw new Error("Missing closing parenthesis");return r}if(e.type==="word"&&e.value==="calc"){if(this.index++,!this.consumeSymbol("("))throw new Error("Missing opening parenthesis after calc");let r=this.parseBinaryExpression();if(!this.consumeSymbol(")"))throw new Error("Missing closing parenthesis");return r}if(e.type==="number"){this.index++;let r=e.value,i=this.peek();return i&&i.type==="symbol"&&i.value==="%"?(this.index++,{type:"percentage",value:r/100}):i&&i.type==="word"&&i.value==="px"?(this.index++,{type:"literal",value:r}):{type:"literal",value:r}}throw new Error("Unexpected token in expression")}consumeSymbol(e){let r=this.peek();return r&&r.type==="symbol"&&r.value===e?(this.index++,!0):!1}peek(){return this.tokens[this.index]||null}};function Fx(t){return t>="0"&&t<="9"}function Nx(t){return t>="a"&&t<="z"||t>="A"&&t<="Z"}function $B(t){return!!(t&&t.type==="symbol"&&(t.value==="+"||t.value==="-"))}function Dx(t,e){let r={...t};for(let i in e)i!=="id"&&(Array.isArray(r[i])&&Array.isArray(e[i])?r[i]=KB(r[i],e[i]):r[i]=e[i]);return r}function KB(t,e){t=t.slice();for(let r=0;r<e.length;r++){let i=e[r];Number.isFinite(i)&&(t[r]=i)}return t}var Zr=class{constructor(e){let{id:r,x:i=0,y:n=0,width:o="100%",height:s="100%",padding:a=null}=e;this.id=r||this.constructor.displayName||"view",this.props={...e,id:this.id},this._x=Kt(i),this._y=Kt(n),this._width=Kt(o),this._height=Kt(s),this._padding=a&&{left:Kt(a.left||0),right:Kt(a.right||0),top:Kt(a.top||0),bottom:Kt(a.bottom||0)},this.equals=this.equals.bind(this),Object.seal(this)}equals(e){return this===e?!0:this.constructor===e.constructor&&oe(this.props,e.props,2)}clone(e){let r=this.constructor;return new r({...this.props,...e})}makeViewport({width:e,height:r,viewState:i}){i=this.filterViewState(i);let n=this.getDimensions({width:e,height:r});if(!n.height||!n.width)return null;let o=this.getViewportType(i);return new o({...i,...this.props,...n})}getViewStateId(){let{viewState:e}=this.props;return typeof e=="string"?e:e?.id||this.id}filterViewState(e){return this.props.viewState&&typeof this.props.viewState=="object"?this.props.viewState.id?Dx(e,this.props.viewState):this.props.viewState:e}getDimensions({width:e,height:r}){let i={x:Yt(this._x,e),y:Yt(this._y,r),width:Yt(this._width,e),height:Yt(this._height,r)};return this._padding&&(i.padding={left:Yt(this._padding.left,e),top:Yt(this._padding.top,r),right:Yt(this._padding.right,e),bottom:Yt(this._padding.bottom,r)}),i}get controller(){let e=this.props.controller;return e?e===!0?{type:this.ControllerType}:typeof e=="function"?{type:e}:{type:this.ControllerType,...e}:null}};var ut=class{constructor(e){this._inProgress=!1,this._handle=null,this.time=0,this.settings={duration:0},this._timeline=e}get inProgress(){return this._inProgress}start(e){this.cancel(),this.settings=e,this._inProgress=!0,this.settings.onStart?.(this)}end(){this._inProgress&&(this._timeline.removeChannel(this._handle),this._handle=null,this._inProgress=!1,this.settings.onEnd?.(this))}cancel(){this._inProgress&&(this.settings.onInterrupt?.(this),this._timeline.removeChannel(this._handle),this._handle=null,this._inProgress=!1)}update(){if(!this._inProgress)return!1;if(this._handle===null){let{_timeline:e,settings:r}=this;this._handle=e.addChannel({delay:e.getTime(),duration:r.duration})}return this.time=this._timeline.getTime(this._handle),this._onUpdate(),this.settings.onUpdate?.(this),this._timeline.isFinished(this._handle)&&this.end(),!0}_onUpdate(){}};var Ux=()=>{},sp={BREAK:1,SNAP_TO_END:2,IGNORE:3},YB=t=>t,JB=sp.BREAK,ko=class{constructor(e){this._onTransitionUpdate=r=>{let{time:i,settings:{interpolator:n,startProps:o,endProps:s,duration:a,easing:c}}=r,l=c(i/a),f=n.interpolateProps(o,s,l);this.propsInTransition=this.getControllerState({...this.props,...f}).getViewportProps(),this.onViewStateChange({viewState:this.propsInTransition,oldViewState:this.props})},this.getControllerState=e.getControllerState,this.propsInTransition=null,this.transition=new ut(e.timeline),this.onViewStateChange=e.onViewStateChange||Ux,this.onStateChange=e.onStateChange||Ux}finalize(){this.transition.cancel()}getViewportInTransition(){return this.propsInTransition}processViewStateChange(e){let r=!1,i=this.props;if(this.props=e,!i||this._shouldIgnoreViewportChange(i,e))return!1;if(this._isTransitionEnabled(e)){let n=i;if(this.transition.inProgress){let{interruption:o,endProps:s}=this.transition.settings;n={...i,...o===sp.SNAP_TO_END?s:this.propsInTransition||i}}this._triggerTransition(n,e),r=!0}else this.transition.cancel();return r}updateTransition(){this.transition.update()}_isTransitionEnabled(e){let{transitionDuration:r,transitionInterpolator:i}=e;return(r>0||r==="auto")&&!!i}_isUpdateDueToCurrentTransition(e){return this.transition.inProgress&&this.propsInTransition?this.transition.settings.interpolator.arePropsEqual(e,this.propsInTransition):!1}_shouldIgnoreViewportChange(e,r){return this.transition.inProgress?this.transition.settings.interruption===sp.IGNORE||this._isUpdateDueToCurrentTransition(r):this._isTransitionEnabled(r)?r.transitionInterpolator.arePropsEqual(e,r):!0}_triggerTransition(e,r){let i=this.getControllerState(e),n=this.getControllerState(r).shortestPathFrom(i),o=r.transitionInterpolator,s=o.getDuration?o.getDuration(e,r):r.transitionDuration;if(s===0)return;let a=o.initializeProps(e,n);this.propsInTransition={};let c={duration:s,easing:r.transitionEasing||YB,interpolator:o,interruption:r.transitionInterruption||JB,startProps:a.start,endProps:a.end,onStart:r.onTransitionStart,onUpdate:this._onTransitionUpdate,onInterrupt:this._onTransitionEnd(r.onTransitionInterrupt),onEnd:this._onTransitionEnd(r.onTransitionEnd)};this.transition.start(c),this.onStateChange({inTransition:!0}),this.updateTransition()}_onTransitionEnd(e){return r=>{this.propsInTransition=null,this.onStateChange({inTransition:!1,isZooming:!1,isPanning:!1,isRotating:!1}),e?.(r)}}};function z(t,e){if(!t)throw new Error(e||"deck.gl: assertion failed.")}var Vo=class{constructor(e){let{compare:r,extract:i,required:n}=e;this._propsToCompare=r,this._propsToExtract=i||r,this._requiredProps=n}arePropsEqual(e,r){for(let i of this._propsToCompare)if(!(i in e)||!(i in r)||!kt(e[i],r[i]))return!1;return!0}initializeProps(e,r){let i={},n={};for(let o of this._propsToExtract)(o in e||o in r)&&(i[o]=e[o],n[o]=r[o]);return this._checkRequiredProps(i),this._checkRequiredProps(n),{start:i,end:n}}getDuration(e,r){return r.transitionDuration}_checkRequiredProps(e){this._requiredProps&&this._requiredProps.forEach(r=>{let i=e[r];z(Number.isFinite(i)||Array.isArray(i),`${r} is required for transition`)})}};var Nc=Math.PI/180,kx=180/Math.PI,Dc=6370972,Jt=256;function QB(){let t=Jt/Dc,e=Math.PI/180*Jt;return{unitsPerMeter:[t,t,t],unitsPerMeter2:[0,0,0],metersPerUnit:[1/t,1/t,1/t],unitsPerDegree:[e,e,t],unitsPerDegree2:[0,0,0],degreesPerUnit:[1/e,1/e,1/t]}}var Uc=class extends zi{constructor(e={}){let{longitude:r=0,zoom:i=0,nearZMultiplier:n=.5,farZMultiplier:o=1,resolution:s=10}=e,{latitude:a=0,height:c,altitude:l=1.5,fovy:f}=e;a=Math.max(Math.min(a,Me),-Me),c=c||1,f?l=Kr(f):f=jt(l);let u=Math.pow(2,i-wt(a)),d=e.nearZ??n,h=e.farZ??(l+Jt*2*u/c)*o,p=new V().lookAt({eye:[0,-l,0],up:[0,0,1]});p.rotateX(a*Nc),p.rotateZ(-r*Nc),p.scale(u/c),super({...e,height:c,viewMatrix:p,longitude:r,latitude:a,zoom:i,distanceScales:QB(),fovy:f,focalDistance:l,near:d,far:h}),this.scale=u,this.latitude=a,this.longitude=r,this.fovy=f,this.resolution=s}get projectionMode(){return fe.GLOBE}getDistanceScales(){return this.distanceScales}getBounds(e={}){let r={targetZ:e.z||0},i=this.unproject([0,this.height/2],r),n=this.unproject([this.width/2,0],r),o=this.unproject([this.width,this.height/2],r),s=this.unproject([this.width/2,this.height],r);return o[0]<this.longitude&&(o[0]+=360),i[0]>this.longitude&&(i[0]-=360),[Math.min(i[0],o[0],n[0],s[0]),Math.min(i[1],o[1],n[1],s[1]),Math.max(i[0],o[0],n[0],s[0]),Math.max(i[1],o[1],n[1],s[1])]}unproject(e,{topLeft:r=!0,targetZ:i}={}){let[n,o,s]=e,a=r?o:this.height-o,{pixelUnprojectionMatrix:c}=this,l;if(Number.isFinite(s))l=ap(c,[n,a,s,1]);else{let h=ap(c,[n,a,-1,1]),p=ap(c,[n,a,1,1]),g=((i||0)/Dc+1)*Jt,m=Ie.sqrLen(Ie.sub([],h,p)),b=Ie.sqrLen(h),y=Ie.sqrLen(p),A=4*((4*b*y-(m-b-y)**2)/16)/m,T=Math.sqrt(b-A),S=Math.sqrt(Math.max(0,g*g-A)),v=(T-S)/Math.sqrt(m);l=Ie.lerp([],h,p,v)}let[f,u,d]=this.unprojectPosition(l);return Number.isFinite(s)?[f,u,d]:Number.isFinite(i)?[f,u,i]:[f,u]}projectPosition(e){let[r,i,n=0]=e,o=r*Nc,s=i*Nc,a=Math.cos(s),c=(n/Dc+1)*Jt;return[Math.sin(o)*a*c,-Math.cos(o)*a*c,Math.sin(s)*c]}unprojectPosition(e){let[r,i,n]=e,o=Ie.len(e),s=Math.asin(n/o),c=Math.atan2(r,-i)*kx,l=s*kx,f=(o/Jt-1)*Dc;return[c,l,f]}projectFlat(e){return e}unprojectFlat(e){return e}panByPosition([e,r,i],n,o){let a=.25/Math.pow(2,this.zoom-wt(this.latitude)),c=e+a*(o[0]-n[0]),l=r-a*(o[1]-n[1]);l=Math.max(Math.min(l,Me),-Me);let f={longitude:c,latitude:l,zoom:i-wt(r)};return f.zoom+=wt(f.latitude),f}};Uc.displayName="GlobeViewport";var kc=Uc;function wt(t){let e=Math.PI*Math.cos(t*Math.PI/180);return Math.log2(e)}function ap(t,e){let r=Be.transformMat4([],e,t);return Be.scale(r,r,1/r[3]),r}var ZB=["longitude","latitude","zoom","bearing","pitch"],qB=["longitude","latitude","zoom"],Qt=class extends Vo{constructor(e={}){let r=Array.isArray(e)?e:e.transitionProps,i=Array.isArray(e)?{}:e;i.transitionProps=Array.isArray(r)?{compare:r,required:r}:r||{compare:ZB,required:qB},super(i.transitionProps),this.opts=i}initializeProps(e,r){let i=super.initializeProps(e,r),{makeViewport:n,around:o}=this.opts;if(n&&o)if(n(e)instanceof kc)P.warn("around not supported in GlobeView")();else{let a=n(e),c=n(r),l=a.unproject(o);i.start.around=o,Object.assign(i.end,{around:c.project(l),aroundPosition:l,width:r.width,height:r.height})}return i}interpolateProps(e,r,i){let n={};for(let o of this._propsToExtract)n[o]=Nr(e[o]||0,r[o]||0,i);if(r.aroundPosition&&this.opts.makeViewport){let o=this.opts.makeViewport({...r,...n});Object.assign(n,o.panByPosition(r.aroundPosition,Nr(e.around,r.around,i)))}return n}};var Zt={transitionDuration:0},e2=300,Vc=t=>1-(1-t)*(1-t),Xi={WHEEL:["wheel"],PAN:["panstart","panmove","panend"],PINCH:["pinchstart","pinchmove","pinchend"],MULTI_PAN:["multipanstart","multipanmove","multipanend"],DOUBLE_CLICK:["dblclick"],KEYBOARD:["keydown"]},qr={},ei=class{constructor(e){this.state={},this._events={},this._interactionState={isDragging:!1},this._customEvents=[],this._eventStartBlocked=null,this._panMove=!1,this.invertPan=!1,this.dragMode="rotate",this.inertia=0,this.scrollZoom=!0,this.dragPan=!0,this.dragRotate=!0,this.doubleClickZoom=!0,this.touchZoom=!0,this.touchRotate=!1,this.keyboard=!0,this.transitionManager=new ko({...e,getControllerState:r=>new this.ControllerState(r),onViewStateChange:this._onTransition.bind(this),onStateChange:this._setInteractionState.bind(this)}),this.handleEvent=this.handleEvent.bind(this),this.eventManager=e.eventManager,this.onViewStateChange=e.onViewStateChange||(()=>{}),this.onStateChange=e.onStateChange||(()=>{}),this.makeViewport=e.makeViewport,this.pickPosition=e.pickPosition}set events(e){this.toggleEvents(this._customEvents,!1),this.toggleEvents(e,!0),this._customEvents=e,this.props&&this.setProps(this.props)}finalize(){for(let e in this._events)this._events[e]&&this.eventManager?.off(e,this.handleEvent);this.transitionManager.finalize()}handleEvent(e){this._controllerState=void 0;let r=this._eventStartBlocked;switch(e.type){case"panstart":return r?!1:this._onPanStart(e);case"panmove":return this._onPan(e);case"panend":return this._onPanEnd(e);case"pinchstart":return r?!1:this._onPinchStart(e);case"pinchmove":return this._onPinch(e);case"pinchend":return this._onPinchEnd(e);case"multipanstart":return r?!1:this._onMultiPanStart(e);case"multipanmove":return this._onMultiPan(e);case"multipanend":return this._onMultiPanEnd(e);case"dblclick":return this._onDoubleClick(e);case"wheel":return this._onWheel(e);case"keydown":return this._onKeyDown(e);default:return!1}}get controllerState(){return this._controllerState=this._controllerState||new this.ControllerState({makeViewport:this.makeViewport,...this.props,...this.state}),this._controllerState}getCenter(e){let{x:r,y:i}=this.props,{offsetCenter:n}=e;return[n.x-r,n.y-i]}isPointInBounds(e,r){let{width:i,height:n}=this.props;if(r&&r.handled)return!1;let o=e[0]>=0&&e[0]<=i&&e[1]>=0&&e[1]<=n;return o&&r&&r.stopPropagation(),o}isFunctionKeyPressed(e){let{srcEvent:r}=e;return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}isDragging(){return this._interactionState.isDragging||!1}blockEvents(e){let r=setTimeout(()=>{this._eventStartBlocked===r&&(this._eventStartBlocked=null)},e);this._eventStartBlocked=r}setProps(e){e.dragMode&&(this.dragMode=e.dragMode);let r=this.props;this.props=e,"transitionInterpolator"in e||(e.transitionInterpolator=this._getTransitionProps().transitionInterpolator),this.transitionManager.processViewStateChange(e);let{inertia:i}=e;this.inertia=Number.isFinite(i)?i:i===!0?e2:0;let{scrollZoom:n=!0,dragPan:o=!0,dragRotate:s=!0,doubleClickZoom:a=!0,touchZoom:c=!0,touchRotate:l=!1,keyboard:f=!0}=e,u=!!this.onViewStateChange;if(this.toggleEvents(Xi.WHEEL,u&&n),this.toggleEvents(Xi.PAN,u),this.toggleEvents(Xi.PINCH,u&&(c||l)),this.toggleEvents(Xi.MULTI_PAN,u&&l),this.toggleEvents(Xi.DOUBLE_CLICK,u&&a),this.toggleEvents(Xi.KEYBOARD,u&&f),this.scrollZoom=n,this.dragPan=o,this.dragRotate=s,this.doubleClickZoom=a,this.touchZoom=c,this.touchRotate=l,this.keyboard=f,(!r||r.height!==e.height||r.width!==e.width||r.maxBounds!==e.maxBounds)&&e.maxBounds){let h=new this.ControllerState({...e,makeViewport:this.makeViewport}),p=h.getViewportProps();Object.keys(p).some(m=>!oe(p[m],e[m],1))&&this.updateViewport(h)}}updateTransition(){this.transitionManager.updateTransition()}toggleEvents(e,r){this.eventManager&&e.forEach(i=>{this._events[i]!==r&&(this._events[i]=r,r?this.eventManager.on(i,this.handleEvent):this.eventManager.off(i,this.handleEvent))})}updateViewport(e,r=null,i={}){let n={...e.getViewportProps(),...r},o=this.controllerState!==e;if(this.state=e.getState(),this._setInteractionState(i),o){let s=this.controllerState&&this.controllerState.getViewportProps();this.onViewStateChange&&this.onViewStateChange({viewState:n,interactionState:this._interactionState,oldViewState:s,viewId:this.props.id})}}_onTransition(e){this.onViewStateChange({...e,interactionState:this._interactionState,viewId:this.props.id})}_setInteractionState(e){Object.assign(this._interactionState,e),this.onStateChange(this._interactionState)}_onPanStart(e){let r=this.getCenter(e);if(!this.isPointInBounds(r,e))return!1;let i=this.isFunctionKeyPressed(e)||e.rightButton||!1;(this.invertPan||this.dragMode==="pan")&&(i=!i);let n=this.controllerState[i?"panStart":"rotateStart"]({pos:r});return this._panMove=i,this.updateViewport(n,Zt,{isDragging:!0}),!0}_onPan(e){return this.isDragging()?this._panMove?this._onPanMove(e):this._onPanRotate(e):!1}_onPanEnd(e){return this.isDragging()?this._panMove?this._onPanMoveEnd(e):this._onPanRotateEnd(e):!1}_onPanMove(e){if(!this.dragPan)return!1;let r=this.getCenter(e),i=this.controllerState.pan({pos:r});return this.updateViewport(i,Zt,{isDragging:!0,isPanning:!0}),!0}_onPanMoveEnd(e){let{inertia:r}=this;if(this.dragPan&&r&&e.velocity){let i=this.getCenter(e),n=[i[0]+e.velocityX*r/2,i[1]+e.velocityY*r/2],o=this.controllerState.pan({pos:n}).panEnd();this.updateViewport(o,{...this._getTransitionProps(),transitionDuration:r,transitionEasing:Vc},{isDragging:!1,isPanning:!0})}else{let i=this.controllerState.panEnd();this.updateViewport(i,null,{isDragging:!1,isPanning:!1})}return!0}_onPanRotate(e){if(!this.dragRotate)return!1;let r=this.getCenter(e),i=this.controllerState.rotate({pos:r});return this.updateViewport(i,Zt,{isDragging:!0,isRotating:!0}),!0}_onPanRotateEnd(e){let{inertia:r}=this;if(this.dragRotate&&r&&e.velocity){let i=this.getCenter(e),n=[i[0]+e.velocityX*r/2,i[1]+e.velocityY*r/2],o=this.controllerState.rotate({pos:n}).rotateEnd();this.updateViewport(o,{...this._getTransitionProps(),transitionDuration:r,transitionEasing:Vc},{isDragging:!1,isRotating:!0})}else{let i=this.controllerState.rotateEnd();this.updateViewport(i,null,{isDragging:!1,isRotating:!1})}return!0}_onWheel(e){if(!this.scrollZoom)return!1;let r=this.getCenter(e);if(!this.isPointInBounds(r,e))return!1;e.srcEvent.preventDefault();let{speed:i=.01,smooth:n=!1}=this.scrollZoom===!0?{}:this.scrollZoom,{delta:o}=e,s=2/(1+Math.exp(-Math.abs(o*i)));o<0&&s!==0&&(s=1/s);let a=n?{...this._getTransitionProps({around:r}),transitionDuration:250}:Zt,c=this.controllerState.zoom({pos:r,scale:s});return this.updateViewport(c,a,{isZooming:!0,isPanning:!0}),n||this._setInteractionState({isZooming:!1,isPanning:!1}),!0}_onMultiPanStart(e){let r=this.getCenter(e);if(!this.isPointInBounds(r,e))return!1;let i=this.controllerState.rotateStart({pos:r});return this.updateViewport(i,Zt,{isDragging:!0}),!0}_onMultiPan(e){if(!this.touchRotate||!this.isDragging())return!1;let r=this.getCenter(e);r[0]-=e.deltaX;let i=this.controllerState.rotate({pos:r});return this.updateViewport(i,Zt,{isDragging:!0,isRotating:!0}),!0}_onMultiPanEnd(e){if(!this.isDragging())return!1;let{inertia:r}=this;if(this.touchRotate&&r&&e.velocityY){let i=this.getCenter(e),n=[i[0],i[1]+=e.velocityY*r/2],o=this.controllerState.rotate({pos:n});this.updateViewport(o,{...this._getTransitionProps(),transitionDuration:r,transitionEasing:Vc},{isDragging:!1,isRotating:!0}),this.blockEvents(r)}else{let i=this.controllerState.rotateEnd();this.updateViewport(i,null,{isDragging:!1,isRotating:!1})}return!0}_onPinchStart(e){let r=this.getCenter(e);if(!this.isPointInBounds(r,e))return!1;let i=this.controllerState.zoomStart({pos:r}).rotateStart({pos:r});return qr._startPinchRotation=e.rotation,qr._lastPinchEvent=e,this.updateViewport(i,Zt,{isDragging:!0}),!0}_onPinch(e){if(!this.touchZoom&&!this.touchRotate||!this.isDragging())return!1;let r=this.controllerState;if(this.touchZoom){let{scale:i}=e,n=this.getCenter(e);r=r.zoom({pos:n,scale:i})}if(this.touchRotate){let{rotation:i}=e;r=r.rotate({deltaAngleX:qr._startPinchRotation-i})}return this.updateViewport(r,Zt,{isDragging:!0,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:this.touchRotate}),qr._lastPinchEvent=e,!0}_onPinchEnd(e){if(!this.isDragging())return!1;let{inertia:r}=this,{_lastPinchEvent:i}=qr;if(this.touchZoom&&r&&i&&e.scale!==i.scale){let n=this.getCenter(e),o=this.controllerState.rotateEnd(),s=Math.log2(e.scale),a=(s-Math.log2(i.scale))/(e.deltaTime-i.deltaTime),c=Math.pow(2,s+a*r/2);o=o.zoom({pos:n,scale:c}).zoomEnd(),this.updateViewport(o,{...this._getTransitionProps({around:n}),transitionDuration:r,transitionEasing:Vc},{isDragging:!1,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:!1}),this.blockEvents(r)}else{let n=this.controllerState.zoomEnd().rotateEnd();this.updateViewport(n,null,{isDragging:!1,isPanning:!1,isZooming:!1,isRotating:!1})}return qr._startPinchRotation=null,qr._lastPinchEvent=null,!0}_onDoubleClick(e){if(!this.doubleClickZoom)return!1;let r=this.getCenter(e);if(!this.isPointInBounds(r,e))return!1;let i=this.isFunctionKeyPressed(e),n=this.controllerState.zoom({pos:r,scale:i?.5:2});return this.updateViewport(n,this._getTransitionProps({around:r}),{isZooming:!0,isPanning:!0}),this.blockEvents(100),!0}_onKeyDown(e){if(!this.keyboard)return!1;let r=this.isFunctionKeyPressed(e),{zoomSpeed:i,moveSpeed:n,rotateSpeedX:o,rotateSpeedY:s}=this.keyboard===!0?{}:this.keyboard,{controllerState:a}=this,c,l={};switch(e.srcEvent.code){case"Minus":c=r?a.zoomOut(i).zoomOut(i):a.zoomOut(i),l.isZooming=!0;break;case"Equal":c=r?a.zoomIn(i).zoomIn(i):a.zoomIn(i),l.isZooming=!0;break;case"ArrowLeft":r?(c=a.rotateLeft(o),l.isRotating=!0):(c=a.moveLeft(n),l.isPanning=!0);break;case"ArrowRight":r?(c=a.rotateRight(o),l.isRotating=!0):(c=a.moveRight(n),l.isPanning=!0);break;case"ArrowUp":r?(c=a.rotateUp(s),l.isRotating=!0):(c=a.moveUp(n),l.isPanning=!0);break;case"ArrowDown":r?(c=a.rotateDown(s),l.isRotating=!0):(c=a.moveDown(n),l.isPanning=!0);break;default:return!1}return this.updateViewport(c,this._getTransitionProps(),l),!0}_getTransitionProps(e){let{transition:r}=this;return!r||!r.transitionInterpolator?Zt:e?{...r,transitionInterpolator:new Qt({...e,...r.transitionInterpolator.opts,makeViewport:this.controllerState.makeViewport})}:r}};var Ho=class{constructor(e,r,i){this.makeViewport=i,this._viewportProps=this.applyConstraints(e),this._state=r}getViewportProps(){return this._viewportProps}getState(){return this._state}};var Vx=5,t2=1.2,Hx=512,zx=[[-1/0,-90],[1/0,90]];function Hc([t,e]){if(Math.abs(e)>90&&(e=Math.sign(e)*90),Number.isFinite(t)){let[i,n]=Le([t,e]);return[i,re(n,0,Hx)]}let[,r]=Le([0,e]);return[t,re(r,0,Hx)]}var zo=class extends Ho{constructor(e){let{width:r,height:i,latitude:n,longitude:o,zoom:s,bearing:a=0,pitch:c=0,altitude:l=1.5,position:f=[0,0,0],maxZoom:u=20,minZoom:d=0,maxPitch:h=60,minPitch:p=0,startPanLngLat:g,startZoomLngLat:m,startRotatePos:b,startRotateLngLat:y,startBearing:_,startPitch:A,startZoom:T,normalize:S=!0}=e;z(Number.isFinite(o)),z(Number.isFinite(n)),z(Number.isFinite(s));let v=e.maxBounds||(S?zx:null);super({width:r,height:i,latitude:n,longitude:o,zoom:s,bearing:a,pitch:c,altitude:l,maxZoom:u,minZoom:d,maxPitch:h,minPitch:p,normalize:S,position:f,maxBounds:v},{startPanLngLat:g,startZoomLngLat:m,startRotatePos:b,startRotateLngLat:y,startBearing:_,startPitch:A,startZoom:T},e.makeViewport),this.getAltitude=e.getAltitude}panStart({pos:e}){return this._getUpdatedState({startPanLngLat:this._unproject(e)})}pan({pos:e,startPos:r}){let i=this.getState().startPanLngLat||this._unproject(r);if(!i)return this;let o=this.makeViewport(this.getViewportProps()).panByPosition(i,e);return this._getUpdatedState(o)}panEnd(){return this._getUpdatedState({startPanLngLat:null})}rotateStart({pos:e}){let r=this.getAltitude?.(e);return this._getUpdatedState({startRotatePos:e,startRotateLngLat:r!==void 0?this._unproject3D(e,r):void 0,startBearing:this.getViewportProps().bearing,startPitch:this.getViewportProps().pitch})}rotate({pos:e,deltaAngleX:r=0,deltaAngleY:i=0}){let{startRotatePos:n,startRotateLngLat:o,startBearing:s,startPitch:a}=this.getState();if(!n||s===void 0||a===void 0)return this;let c;if(e?c=this._getNewRotation(e,n,a,s):c={bearing:s+r,pitch:a+i},o){let l=this.makeViewport({...this.getViewportProps(),...c}),f="panByPosition3D"in l?"panByPosition3D":"panByPosition";return this._getUpdatedState({...c,...l[f](o,n)})}return this._getUpdatedState(c)}rotateEnd(){return this._getUpdatedState({startRotatePos:null,startRotateLngLat:null,startBearing:null,startPitch:null})}zoomStart({pos:e}){return this._getUpdatedState({startZoomLngLat:this._unproject(e),startZoom:this.getViewportProps().zoom})}zoom({pos:e,startPos:r,scale:i}){let{startZoom:n,startZoomLngLat:o}=this.getState();if(o||(n=this.getViewportProps().zoom,o=this._unproject(r)||this._unproject(e)),!o)return this;let s=this._constrainZoom(n+Math.log2(i)),a=this.makeViewport({...this.getViewportProps(),zoom:s});return this._getUpdatedState({zoom:s,...a.panByPosition(o,e)})}zoomEnd(){return this._getUpdatedState({startZoomLngLat:null,startZoom:null})}zoomIn(e=2){return this._zoomFromCenter(e)}zoomOut(e=2){return this._zoomFromCenter(1/e)}moveLeft(e=100){return this._panFromCenter([e,0])}moveRight(e=100){return this._panFromCenter([-e,0])}moveUp(e=100){return this._panFromCenter([0,e])}moveDown(e=100){return this._panFromCenter([0,-e])}rotateLeft(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing-e})}rotateRight(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing+e})}rotateUp(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch+e})}rotateDown(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch-e})}shortestPathFrom(e){let r=e.getViewportProps(),i={...this.getViewportProps()},{bearing:n,longitude:o}=i;return Math.abs(n-r.bearing)>180&&(i.bearing=n<0?n+360:n-360),Math.abs(o-r.longitude)>180&&(i.longitude=o<0?o+360:o-360),i}applyConstraints(e){let{maxPitch:r,minPitch:i,pitch:n,longitude:o,bearing:s,normalize:a,maxBounds:c}=e;if(a&&((o<-180||o>180)&&(e.longitude=Po(o+180,360)-180),(s<-180||s>180)&&(e.bearing=Po(s+180,360)-180)),e.pitch=re(n,i,r),e.zoom=this._constrainZoom(e.zoom,e),c){let l=Hc(c[0]),f=Hc(c[1]),u=2**e.zoom,d=e.width/2/u,h=e.height/2/u,[p,g]=Fe([l[0]+d,l[1]+h]),[m,b]=Fe([f[0]-d,f[1]-h]);e.longitude=re(e.longitude,p,m),e.latitude=re(e.latitude,g,b)}return e}_constrainZoom(e,r){r||(r=this.getViewportProps());let{maxZoom:i,maxBounds:n}=r,o=n!==null&&r.width>0&&r.height>0,{minZoom:s}=r;if(o){let a=Hc(n[0]),c=Hc(n[1]),l=c[0]-a[0],f=c[1]-a[1];Number.isFinite(l)&&l>0&&(s=Math.max(s,Math.log2(r.width/l))),Number.isFinite(f)&&f>0&&(s=Math.max(s,Math.log2(r.height/f))),s>i&&(s=i)}return re(e,s,i)}_zoomFromCenter(e){let{width:r,height:i}=this.getViewportProps();return this.zoom({pos:[r/2,i/2],scale:e})}_panFromCenter(e){let{width:r,height:i}=this.getViewportProps();return this.pan({startPos:[r/2,i/2],pos:[r/2+e[0],i/2+e[1]]})}_getUpdatedState(e){return new this.constructor({makeViewport:this.makeViewport,...this.getViewportProps(),...this.getState(),...e})}_unproject(e){let r=this.makeViewport(this.getViewportProps());return e&&r.unproject(e)}_unproject3D(e,r){return this.makeViewport(this.getViewportProps()).unproject(e,{targetZ:r})}_getNewRotation(e,r,i,n){let o=e[0]-r[0],s=e[1]-r[1],a=e[1],c=r[1],{width:l,height:f}=this.getViewportProps(),u=o/l,d=0;s>0?Math.abs(f-c)>Vx&&(d=s/(c-f)*t2):s<0&&c>Vx&&(d=1-a/c),d=re(d,-1,1);let{minPitch:h,maxPitch:p}=this.getViewportProps(),g=n+180*u,m=i;return d>0?m=i+d*(p-i):d<0&&(m=i-d*(h-i)),{pitch:m,bearing:g}}},jo=class extends ei{constructor(){super(...arguments),this.ControllerState=zo,this.transition={transitionDuration:300,transitionInterpolator:new Qt({transitionProps:{compare:["longitude","latitude","zoom","bearing","pitch","position"],required:["longitude","latitude","zoom"]}})},this.dragMode="pan",this.rotationPivot="center",this._getAltitude=e=>{if(this.rotationPivot==="2d")return 0;if(this.rotationPivot==="3d"&&this.pickPosition){let{x:r,y:i}=this.props,n=this.pickPosition(r+e[0],i+e[1]);if(n&&n.coordinate&&n.coordinate.length>=3)return n.coordinate[2]}}}setProps(e){"rotationPivot"in e&&(this.rotationPivot=e.rotationPivot||"center"),e.getAltitude=this._getAltitude,e.position=e.position||[0,0,0],e.maxBounds=e.maxBounds||(e.normalize===!1?null:zx),super.setProps(e)}updateViewport(e,r=null,i={}){let n=e.getState();i.isDragging&&n.startRotateLngLat?i={...i,rotationPivotPosition:n.startRotateLngLat}:i.isDragging===!1&&(i={...i,rotationPivotPosition:void 0}),super.updateViewport(e,r,i)}};var zc=class extends Zr{constructor(e={}){super(e)}getViewportType(){return ji}get ControllerType(){return jo}};zc.displayName="MapView";var Wo=zc;var r2=new ki;function i2(t,e){let r=t.order??1/0,i=e.order??1/0;return r-i}var Go=class{constructor(e){this._resolvedEffects=[],this._defaultEffects=[],this.effects=[],this._context=e,this._needsRedraw="Initial render",this._setEffects([])}addDefaultEffect(e){let r=this._defaultEffects;if(!r.find(i=>i.id===e.id)){let i=r.findIndex(n=>i2(n,e)>0);i<0?r.push(e):r.splice(i,0,e),e.setup(this._context),this._setEffects(this.effects)}}setProps(e){"effects"in e&&(oe(e.effects,this.effects,1)||this._setEffects(e.effects))}needsRedraw(e={clearRedrawFlags:!1}){let r=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),r}getEffects(){return this._resolvedEffects}_setEffects(e){let r={};for(let n of this.effects)r[n.id]=n;let i=[];for(let n of e){let o=r[n.id],s=n;o&&o!==n?o.setProps?(o.setProps(n.props),s=o):o.cleanup(this._context):o||n.setup(this._context),i.push(s),delete r[n.id]}for(let n in r)r[n].cleanup(this._context);this.effects=i,this._resolvedEffects=i.concat(this._defaultEffects),e.some(n=>n instanceof ki)||this._resolvedEffects.push(r2),this._needsRedraw="effects changed"}finalize(){for(let e of this._resolvedEffects)e.cleanup(this._context);this.effects.length=0,this._resolvedEffects.length=0,this._defaultEffects.length=0}};var Xo=class extends Wt{shouldDrawLayer(e){let{operation:r}=e.props;return r.includes("draw")||r.includes("terrain")}render(e){return this._render(e)}};var n2="deckRenderer.renderLayers",$o=class{constructor(e,r={}){this.device=e,this.stats=r.stats,this.layerFilter=null,this.drawPickingColors=!1,this.drawLayersPass=new Xo(e),this.pickLayersPass=new Qr(e),this.renderCount=0,this._needsRedraw="Initial render",this.renderBuffers=[],this.lastPostProcessEffect=null}setProps(e){this.layerFilter!==e.layerFilter&&(this.layerFilter=e.layerFilter,this._needsRedraw="layerFilter changed"),this.drawPickingColors!==e.drawPickingColors&&(this.drawPickingColors=e.drawPickingColors,this._needsRedraw="drawPickingColors changed")}renderLayers(e){if(!e.viewports.length)return;let r=this.drawPickingColors?this.pickLayersPass:this.drawLayersPass,i={layerFilter:this.layerFilter,isPicking:this.drawPickingColors,...e};i.effects&&this._preRender(i.effects,i);let n=this.lastPostProcessEffect?this.renderBuffers[0]:i.target;this.lastPostProcessEffect&&(i.clearColor=[0,0,0,0],i.clearCanvas=!0);let o=r.render({...i,target:n}),s="stats"in o?o.stats:o;i.effects&&(this.lastPostProcessEffect&&(i.clearCanvas=e.clearCanvas===void 0?!0:e.clearCanvas),this._postRender(i.effects,i)),this.renderCount++,te(n2,this,s,e),this._updateStats(s)}needsRedraw(e={clearRedrawFlags:!1}){let r=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),r}finalize(){let{renderBuffers:e}=this;for(let r of e)r.delete();e.length=0}_updateStats(e){if(!this.stats)return;let r=0;for(let{visibleCount:i}of e)r+=i;this.stats.get("Layers rendered").addCount(r)}_preRender(e,r){this.lastPostProcessEffect=null,r.preRenderStats=r.preRenderStats||{};for(let i of e)r.preRenderStats[i.id]=i.preRender(r),i.postRender&&(this.lastPostProcessEffect=i.id);this.lastPostProcessEffect&&this._resizeRenderBuffers()}_resizeRenderBuffers(){let{renderBuffers:e}=this,r=this.device.canvasContext.getDrawingBufferSize(),[i,n]=r;e.length===0&&[0,1].map(o=>{let s=this.device.createTexture({sampler:{minFilter:"linear",magFilter:"linear"},width:i,height:n});e.push(this.device.createFramebuffer({id:`deck-renderbuffer-${o}`,colorAttachments:[s]}))});for(let o of e)o.resize(r)}_postRender(e,r){let{renderBuffers:i}=this,n={...r,inputBuffer:i[0],swapBuffer:i[1]};for(let o of e)if(o.postRender){n.target=o.id===this.lastPostProcessEffect?r.target:void 0;let s=o.postRender(n);n.inputBuffer=s,n.swapBuffer=s===i[0]?i[1]:i[0]}}};L();var o2={pickedColor:null,pickedObjectIndex:-1};function cp({pickedColors:t,decodePickingColor:e,deviceX:r,deviceY:i,deviceRadius:n,deviceRect:o}){let{x:s,y:a,width:c,height:l}=o,f=n*n,u=-1,d=0;for(let h=0;h<l;h++){let p=h+a-i,g=p*p;if(g>f)d+=4*c;else for(let m=0;m<c;m++){if(t[d+3]-1>=0){let y=m+s-r,_=y*y+g;_<=f&&(f=_,u=d)}d+=4}}if(u>=0){let h=t.slice(u,u+4),p=e(h);if(p){let g=Math.floor(u/4/c),m=u/4-g*c;return{...p,pickedColor:h,pickedX:s+m,pickedY:a+g}}P.error("Picked non-existent layer. Is picking buffer corrupt?")()}return o2}function lp({pickedColors:t,decodePickingColor:e}){let r=new Map;if(t){for(let i=0;i<t.length;i+=4)if(t[i+3]-1>=0){let o=t.slice(i,i+4),s=o.join(",");if(!r.has(s)){let a=e(o);a?r.set(s,{...a,color:o}):P.error("Picked non-existent layer. Is picking buffer corrupt?")()}}}return Array.from(r.values())}function jc({pickInfo:t,viewports:e,pixelRatio:r,x:i,y:n,z:o}){let s=e[0];e.length>1&&(s=s2(t?.pickedViewports||e,{x:i,y:n}));let a;if(s){let c=[i-s.x,n-s.y];o!==void 0&&(c[2]=o),a=s.unproject(c)}return{color:null,layer:null,viewport:s,index:-1,picked:!1,x:i,y:n,pixel:[i,n],coordinate:a,devicePixel:t&&"pickedX"in t?[t.pickedX,t.pickedY]:void 0,pixelRatio:r}}function fp(t){let{pickInfo:e,lastPickedInfo:r,mode:i,layers:n}=t,{pickedColor:o,pickedLayer:s,pickedObjectIndex:a}=e,c=s?[s]:[];if(i==="hover"){let u=r.index,d=r.layerId,h=s?s.props.id:null;if(h!==d||a!==u){if(h!==d){let p=n.find(g=>g.props.id===d);p&&c.unshift(p)}r.layerId=h,r.index=a,r.info=null}}let l=jc(t),f=new Map;return f.set(null,l),c.forEach(u=>{let d={...l};u===s&&(d.color=o,d.index=a,d.picked=!0),d=Wc({layer:u,info:d,mode:i});let h=d.layer;u===s&&i==="hover"&&(r.info=d),f.set(h.id,d),i==="hover"&&h.updateAutoHighlight(d)}),f}function Wc({layer:t,info:e,mode:r}){for(;t&&e;){let i=e.layer||null;e.sourceLayer=i,e.layer=t,e=t.getPickingInfo({info:e,mode:r,sourceLayer:i}),t=t.parent}return e}function s2(t,e){for(let r=t.length-1;r>=0;r--){let i=t[r];if(i.containsPixel(e))return i}return t[0]}var Ko=class{constructor(e,r={}){this._pickable=!0,this.device=e,this.stats=r.stats,this.pickLayersPass=new Qr(e),this.lastPickedInfo={index:-1,layerId:null,info:null}}setProps(e){"layerFilter"in e&&(this.layerFilter=e.layerFilter),"_pickable"in e&&(this._pickable=e._pickable)}finalize(){this.pickingFBO&&this.pickingFBO.destroy(),this.depthFBO&&this.depthFBO.destroy()}pickObjectAsync(e){return this._pickClosestObjectAsync(e)}pickObjectsAsync(e){return this._pickVisibleObjectsAsync(e)}pickObject(e){return this._pickClosestObject(e)}pickObjects(e){return this._pickVisibleObjects(e)}getLastPickedObject({x:e,y:r,layers:i,viewports:n},o=this.lastPickedInfo.info){let s=o&&o.layer&&o.layer.id,a=o&&o.viewport&&o.viewport.id,c=s?i.find(d=>d.id===s):null,l=a&&n.find(d=>d.id===a)||n[0],f=l&&l.unproject([e-l.x,r-l.y]);return{...o,...{x:e,y:r,viewport:l,coordinate:f,layer:c}}}_resizeBuffer(){if(!this.pickingFBO){let r=this.device.createTexture({format:"rgba8unorm",width:1,height:1,usage:N.RENDER_ATTACHMENT|N.COPY_SRC});if(this.pickingFBO=this.device.createFramebuffer({colorAttachments:[r],depthStencilAttachment:"depth16unorm"}),this.device.isTextureFormatRenderable("rgba32float")){let i=this.device.createTexture({format:"rgba32float",width:1,height:1,usage:N.RENDER_ATTACHMENT|N.COPY_SRC}),n=this.device.createFramebuffer({colorAttachments:[i],depthStencilAttachment:"depth16unorm"});this.depthFBO=n}}let{canvas:e}=this.device.getDefaultCanvasContext();this.pickingFBO?.resize({width:e.width,height:e.height}),this.depthFBO?.resize({width:e.width,height:e.height})}_getPickable(e){if(this._pickable===!1)return null;let r=e.filter(i=>this.pickLayersPass.shouldDrawLayer(i)&&!i.isComposite);return r.length?r:null}async _pickClosestObjectAsync({layers:e,views:r,viewports:i,x:n,y:o,radius:s=0,depth:a=1,mode:c="query",unproject3D:l,onViewportActive:f,effects:u}){let d=this.device.canvasContext.cssToDeviceRatio(),h=this._getPickable(e);if(!h||i.length===0)return{result:[],emptyInfo:jc({viewports:i,x:n,y:o,pixelRatio:d})};this._resizeBuffer();let p=this.device.canvasContext.cssToDevicePixels([n,o],!0),g=[p.x+Math.floor(p.width/2),p.y+Math.floor(p.height/2)],m=Math.round(s*d),{width:b,height:y}=this.pickingFBO,_=this._getPickingRect({deviceX:g[0],deviceY:g[1],deviceRadius:m,deviceWidth:b,deviceHeight:y}),A={x:n-s,y:o-s,width:s*2+1,height:s*2+1},T,S=[],v=new Set;for(let M=0;M<a;M++){let C;if(_){let w=await this._drawAndSampleAsync({layers:h,views:r,viewports:i,onViewportActive:f,deviceRect:_,cullRect:A,effects:u,pass:`picking:${c}`});C=cp({...w,deviceX:g[0],deviceY:g[1],deviceRadius:m,deviceRect:_})}else C={pickedColor:null,pickedObjectIndex:-1};let R,I=this._getDepthLayers(C,h,l);if(I.length>0){let{pickedColors:w}=await this._drawAndSampleAsync({layers:I,views:r,viewports:i,onViewportActive:f,deviceRect:{x:C.pickedX??g[0],y:C.pickedY??g[1],width:1,height:1},cullRect:A,effects:u,pass:`picking:${c}:z`},!0);w[3]&&(R=w[0])}C.pickedLayer&&M+1<a&&(v.add(C.pickedLayer),C.pickedLayer.disablePickingIndex(C.pickedObjectIndex)),T=fp({pickInfo:C,lastPickedInfo:this.lastPickedInfo,mode:c,layers:h,viewports:i,x:n,y:o,z:R,pixelRatio:d});for(let w of T.values())w.layer&&S.push(w);if(!C.pickedColor)break}for(let M of v)M.restorePickingColors();return{result:S,emptyInfo:T.get(null)}}_pickClosestObject({layers:e,views:r,viewports:i,x:n,y:o,radius:s=0,depth:a=1,mode:c="query",unproject3D:l,onViewportActive:f,effects:u}){let d=this.device.canvasContext.cssToDeviceRatio(),h=this._getPickable(e);if(!h||i.length===0)return{result:[],emptyInfo:jc({viewports:i,x:n,y:o,pixelRatio:d})};this._resizeBuffer();let p=this.device.canvasContext.cssToDevicePixels([n,o],!0),g=[p.x+Math.floor(p.width/2),p.y+Math.floor(p.height/2)],m=Math.round(s*d),{width:b,height:y}=this.pickingFBO,_=this._getPickingRect({deviceX:g[0],deviceY:g[1],deviceRadius:m,deviceWidth:b,deviceHeight:y}),A={x:n-s,y:o-s,width:s*2+1,height:s*2+1},T,S=[],v=new Set;for(let M=0;M<a;M++){let C;if(_){let w=this._drawAndSample({layers:h,views:r,viewports:i,onViewportActive:f,deviceRect:_,cullRect:A,effects:u,pass:`picking:${c}`});C=cp({...w,deviceX:g[0],deviceY:g[1],deviceRadius:m,deviceRect:_})}else C={pickedColor:null,pickedObjectIndex:-1};let R,I=this._getDepthLayers(C,h,l);if(I.length>0){let{pickedColors:w}=this._drawAndSample({layers:I,views:r,viewports:i,onViewportActive:f,deviceRect:{x:C.pickedX??g[0],y:C.pickedY??g[1],width:1,height:1},cullRect:A,effects:u,pass:`picking:${c}:z`},!0);w[3]&&(R=w[0])}C.pickedLayer&&M+1<a&&(v.add(C.pickedLayer),C.pickedLayer.disablePickingIndex(C.pickedObjectIndex)),T=fp({pickInfo:C,lastPickedInfo:this.lastPickedInfo,mode:c,layers:h,viewports:i,x:n,y:o,z:R,pixelRatio:d});for(let w of T.values())w.layer&&S.push(w);if(!C.pickedColor)break}for(let M of v)M.restorePickingColors();return{result:S,emptyInfo:T.get(null)}}async _pickVisibleObjectsAsync({layers:e,views:r,viewports:i,x:n,y:o,width:s=1,height:a=1,mode:c="query",maxObjects:l=null,onViewportActive:f,effects:u}){let d=this._getPickable(e);if(!d||i.length===0)return[];this._resizeBuffer();let h=this.device.canvasContext.cssToDeviceRatio(),p=this.device.canvasContext.cssToDevicePixels([n,o],!0),g=p.x,m=p.y+p.height,b=this.device.canvasContext.cssToDevicePixels([n+s,o+a],!0),y=b.x+b.width,_=b.y,A={x:g,y:_,width:y-g,height:m-_},T=await this._drawAndSampleAsync({layers:d,views:r,viewports:i,onViewportActive:f,deviceRect:A,cullRect:{x:n,y:o,width:s,height:a},effects:u,pass:`picking:${c}`}),S=lp(T),v=new Map,M=[],C=Number.isFinite(l);for(let R=0;R<S.length&&!(C&&M.length>=l);R++){let I=S[R],w={color:I.pickedColor,layer:null,index:I.pickedObjectIndex,picked:!0,x:n,y:o,pixelRatio:h};w=Wc({layer:I.pickedLayer,info:w,mode:c});let U=w.layer.id;v.has(U)||v.set(U,new Set);let D=v.get(U),ee=w.object??w.index;D.has(ee)||(D.add(ee),M.push(w))}return M}_pickVisibleObjects({layers:e,views:r,viewports:i,x:n,y:o,width:s=1,height:a=1,mode:c="query",maxObjects:l=null,onViewportActive:f,effects:u}){let d=this._getPickable(e);if(!d||i.length===0)return[];this._resizeBuffer();let h=this.device.canvasContext.cssToDeviceRatio(),p=this.device.canvasContext.cssToDevicePixels([n,o],!0),g=p.x,m=p.y+p.height,b=this.device.canvasContext.cssToDevicePixels([n+s,o+a],!0),y=b.x+b.width,_=b.y,A={x:g,y:_,width:y-g,height:m-_},T=this._drawAndSample({layers:d,views:r,viewports:i,onViewportActive:f,deviceRect:A,cullRect:{x:n,y:o,width:s,height:a},effects:u,pass:`picking:${c}`}),S=lp(T),v=new Map,M=[],C=Number.isFinite(l);for(let R=0;R<S.length&&!(C&&M.length>=l);R++){let I=S[R],w={color:I.pickedColor,layer:null,index:I.pickedObjectIndex,picked:!0,x:n,y:o,pixelRatio:h};w=Wc({layer:I.pickedLayer,info:w,mode:c});let U=w.layer.id;v.has(U)||v.set(U,new Set);let D=v.get(U),ee=w.object??w.index;D.has(ee)||(D.add(ee),M.push(w))}return M}async _drawAndSampleAsync({layers:e,views:r,viewports:i,onViewportActive:n,deviceRect:o,cullRect:s,effects:a,pass:c},l=!1){let f=l?this.depthFBO:this.pickingFBO,u={layers:e,layerFilter:this.layerFilter,views:r,viewports:i,onViewportActive:n,pickingFBO:f,deviceRect:o,cullRect:s,effects:a,pass:c,pickZ:l,preRenderStats:{},isPicking:!0};for(let A of a)A.useInPicking&&(u.preRenderStats[A.id]=A.preRender(u));let{decodePickingColor:d,stats:h}=this.pickLayersPass.render(u);this._updateStats(h);let{x:p,y:g,width:m,height:b}=o,y=f.colorAttachments[0]?.texture;if(!y)throw new Error("Picking framebuffer color attachment is missing");let _=await this._readTextureDataAsync(y,{x:p,y:g,width:m,height:b},l?Float32Array:Uint8Array);if(!l){let A=!1;for(let T=3;T<_.length;T+=4)if(_[T]!==0){A=!0;break}!A&&_.length>0&&P.warn("Async pick readback returned only zero alpha values",{deviceRect:o,bytes:Array.from(_.subarray(0,Math.min(_.length,16)))})()}return{pickedColors:_,decodePickingColor:d}}async _readTextureDataAsync(e,r,i){let{width:n,height:o}=r,s=e.computeMemoryLayout(r),a=this.device.createBuffer({byteLength:s.byteLength,usage:F.COPY_DST|F.MAP_READ});try{e.readBuffer(r,a);let c=await a.readAsync(0,s.byteLength),l=i.BYTES_PER_ELEMENT;if(s.bytesPerRow%l!==0)throw new Error(`Texture readback row stride ${s.bytesPerRow} is not aligned to ${l}-byte elements.`);let f=new i(c.buffer,c.byteOffset,s.byteLength/l),u=n*4,d=s.bytesPerRow/l;if(d<u)throw new Error(`Texture readback row stride ${d} is smaller than packed row length ${u}.`);let h=new i(n*o*4);for(let p=0;p<o;p++){let g=p*d;h.set(f.subarray(g,g+u),p*u)}return h}finally{a.destroy()}}_drawAndSample({layers:e,views:r,viewports:i,onViewportActive:n,deviceRect:o,cullRect:s,effects:a,pass:c},l=!1){let f=l?this.depthFBO:this.pickingFBO,u={layers:e,layerFilter:this.layerFilter,views:r,viewports:i,onViewportActive:n,pickingFBO:f,deviceRect:o,cullRect:s,effects:a,pass:c,pickZ:l,preRenderStats:{},isPicking:!0};for(let _ of a)_.useInPicking&&(u.preRenderStats[_.id]=_.preRender(u));let{decodePickingColor:d,stats:h}=this.pickLayersPass.render(u);this._updateStats(h);let{x:p,y:g,width:m,height:b}=o,y=new(l?Float32Array:Uint8Array)(m*b*4);return this.device.readPixelsToArrayWebGL(f,{sourceX:p,sourceY:g,sourceWidth:m,sourceHeight:b,target:y}),{pickedColors:y,decodePickingColor:d}}_updateStats(e){if(!this.stats)return;let r=0;for(let{visibleCount:i}of e)r+=i;this.stats.get("Layers picked").addCount(r)}_getDepthLayers(e,r,i){if(!i||!this.depthFBO)return[];let{pickedLayer:n}=e,o=n?.state?.terrainDrawMode==="drape";return n&&!o?[n]:r.filter(s=>s.props.operation.includes("terrain"))}_getPickingRect({deviceX:e,deviceY:r,deviceRadius:i,deviceWidth:n,deviceHeight:o}){let s=Math.max(0,e-i),a=Math.max(0,r-i),c=Math.min(n,e+i+1)-s,l=Math.min(o,r+i+1)-a;return c<=0||l<=0?null:{x:s,y:a,width:c,height:l}}};var a2={"top-left":{top:0,left:0},"top-right":{top:0,right:0},"bottom-left":{bottom:0,left:0},"bottom-right":{bottom:0,right:0},fill:{top:0,left:0,bottom:0,right:0}},c2="top-left",jx="root",Gc=class{constructor({deck:e,parentElement:r}){this.defaultWidgets=[],this.widgets=[],this.resolvedWidgets=[],this.containers={},this.lastViewports={},this.deck=e,r?.classList.add("deck-widget-container"),this.parentElement=r}getWidgets(){return this.resolvedWidgets}setProps(e){if(e.widgets&&!oe(e.widgets,this.widgets,1)){let r=e.widgets.filter(Boolean);this._setWidgets(r)}}finalize(){for(let e of this.getWidgets())this._removeWidget(e);this.defaultWidgets.length=0,this.resolvedWidgets.length=0;for(let e in this.containers)this.containers[e].remove()}addDefault(e){this.defaultWidgets.find(r=>r.id===e.id)||(this._addWidget(e),this.defaultWidgets.push(e),this._setWidgets(this.widgets))}onRedraw({viewports:e,layers:r}){let i=e.reduce((n,o)=>(n[o.id]=o,n),{});for(let n of this.getWidgets()){let{viewId:o}=n;if(o){let s=i[o];s&&(n.onViewportChange&&n.onViewportChange(s),n.onRedraw?.({viewports:[s],layers:r}))}else{if(n.onViewportChange)for(let s of e)n.onViewportChange(s);n.onRedraw?.({viewports:e,layers:r})}}this.lastViewports=i,this._updateContainers()}onHover(e,r){for(let i of this.getWidgets()){let{viewId:n}=i;(!n||n===e.viewport?.id)&&i.onHover?.(e,r)}}onEvent(e,r){let i=Li[r.type];if(i)for(let n of this.getWidgets()){let{viewId:o}=n;(!o||o===e.viewport?.id)&&n[i]?.(e,r)}}_setWidgets(e){let r={};for(let i of this.resolvedWidgets)r[i.id]=i;this.resolvedWidgets.length=0;for(let i of this.defaultWidgets)r[i.id]=null,this.resolvedWidgets.push(i);for(let i of e){let n=r[i.id];n?n.viewId!==i.viewId||n.placement!==i.placement?(this._removeWidget(n),this._addWidget(i)):i!==n&&(n.setProps(i.props),i=n):this._addWidget(i),r[i.id]=null,this.resolvedWidgets.push(i)}for(let i in r){let n=r[i];n&&this._removeWidget(n)}this.widgets=e}_addWidget(e){let{viewId:r=null,placement:i=c2}=e,n=e.props._container??r;e.widgetManager=this,e.deck=this.deck,e.rootElement=e._onAdd({deck:this.deck,viewId:r}),e.rootElement&&this._getContainer(n,i).append(e.rootElement),e.updateHTML()}_removeWidget(e){e.onRemove?.(),e.rootElement&&e.rootElement.remove(),e.rootElement=void 0,e.deck=void 0,e.widgetManager=void 0}_getContainer(e,r){if(e&&typeof e!="string")return e;let i=e||jx,n=this.containers[i];n||(n=document.createElement("div"),n.style.pointerEvents="none",n.style.position="absolute",n.style.overflow="hidden",this.parentElement?.append(n),this.containers[i]=n);let o=n.querySelector(`.${r}`);return o||(o=globalThis.document.createElement("div"),o.className=r,o.style.position="absolute",o.style.zIndex="2",Object.assign(o.style,a2[r]),n.append(o)),o}_updateContainers(){let e=this.deck.width,r=this.deck.height;for(let i in this.containers){let n=this.lastViewports[i]||null,o=i===jx||n,s=this.containers[i];o?(s.style.display="block",s.style.left=`${n?n.x:0}px`,s.style.top=`${n?n.y:0}px`,s.style.width=`${n?n.width:e}px`,s.style.height=`${n?n.height:r}px`):s.style.display="none"}}};function up(t,e){e&&Object.entries(e).map(([r,i])=>{r.startsWith("--")?t.style.setProperty(r,i):t.style[r]=i})}function Wx(t,e){e&&Object.keys(e).map(r=>{r.startsWith("--")?t.style.removeProperty(r):t.style[r]=""})}var $i=class{constructor(e){this.viewId=null,this.props={...this.constructor.defaultProps,...e},this.id=this.props.id}setProps(e){let r=this.props,i=this.rootElement;i&&r.className!==e.className&&(r.className&&i.classList.remove(r.className),e.className&&i.classList.add(e.className)),i&&!oe(r.style,e.style,1)&&(Wx(i,r.style),up(i,e.style)),Object.assign(this.props,e),this.updateHTML()}updateHTML(){this.rootElement&&this.onRenderHTML(this.rootElement)}get viewIds(){return this.viewId?[this.viewId]:this.deck?.getViews().map(e=>e.id)??[]}getViewState(e){return this.deck?.viewManager?.getViewState(e)||{}}setViewState(e,r){this.deck?._onViewStateChange({viewId:e,viewState:r,interactionState:{}})}onCreateRootElement(){let e=["deck-widget",this.className,this.props.className],r=document.createElement("div");return e.filter(i=>typeof i=="string"&&i.length>0).forEach(i=>r.classList.add(i)),up(r,this.props.style),r}_onAdd(e){return this.onAdd(e)??this.onCreateRootElement()}onAdd(e){}onRemove(){}onViewportChange(e){}onRedraw(e){}onHover(e,r){}onClick(e,r){}onDrag(e,r){}onDragStart(e,r){}onDragEnd(e,r){}};$i.defaultProps={id:"widget",style:{},_container:null,className:""};var l2={zIndex:"1",position:"absolute",pointerEvents:"none",color:"#a0a7b4",backgroundColor:"#29323c",padding:"10px",top:"0",left:"0",display:"none"},Yo=class extends $i{constructor(e={}){super(e),this.id="default-tooltip",this.placement="fill",this.className="deck-tooltip",this.isVisible=!1,this.setProps(e)}onCreateRootElement(){let e=document.createElement("div");return e.className=this.className,Object.assign(e.style,l2),e}onRenderHTML(e){}onViewportChange(e){this.isVisible&&e.id===this.lastViewport?.id&&!e.equals(this.lastViewport)&&this.setTooltip(null),this.lastViewport=e}onHover(e){let{deck:r}=this,i=r&&r.props.getTooltip;if(!i)return;let n=i(e);this.setTooltip(n,e.x,e.y)}setTooltip(e,r,i){let n=this.rootElement;if(n){if(typeof e=="string")n.innerText=e;else if(e)e.text&&(n.innerText=e.text),e.html&&(n.innerHTML=e.html),e.className&&(n.className=e.className);else{this.isVisible=!1,n.style.display="none";return}this.isVisible=!0,n.style.display="block",n.style.transform=`translate(${r}px, ${i}px)`,e&&typeof e=="object"&&"style"in e&&Object.assign(n.style,e.style)}}};Yo.defaultProps={...$i.defaultProps};L();vl();Cn();function xr(){}var AO=({isDragging:t})=>t?"grabbing":"grab",pT={id:"",width:"100%",height:"100%",style:null,viewState:null,initialViewState:null,pickingRadius:0,pickAsync:"auto",layerFilter:null,parameters:{},parent:null,device:null,deviceProps:{},gl:null,canvas:null,layers:[],effects:[],views:null,controller:null,useDevicePixels:!0,touchAction:"none",eventRecognizerOptions:{},_framebuffer:null,_animate:!1,_pickable:!0,_typedArrayManagerProps:{},_customRender:null,widgets:[],onDeviceInitialized:xr,onWebGLInitialized:xr,onResize:xr,onViewStateChange:xr,onInteractionStateChange:xr,onBeforeRender:xr,onAfterRender:xr,onLoad:xr,onError:t=>P.error(t.message,t.cause)(),onHover:null,onClick:null,onDragStart:null,onDrag:null,onDragEnd:null,_onMetrics:null,getCursor:AO,getTooltip:null,debug:!1,drawPickingColors:!1},ns=class{constructor(e){this.width=0,this.height=0,this.userData={},this.device=null,this.canvas=null,this.viewManager=null,this.layerManager=null,this.effectManager=null,this.deckRenderer=null,this.deckPicker=null,this.eventManager=null,this.widgetManager=null,this.tooltip=null,this.animationLoop=null,this.cursorState={isHovering:!1,isDragging:!1},this.stats=new Xe({id:"deck.gl"}),this.metrics={fps:0,setPropsTime:0,layersCount:0,drawLayersCount:0,updateLayersCount:0,updateAttributesCount:0,updateAttributesTime:0,framesRedrawn:0,pickTime:0,pickCount:0,pickLayersCount:0,gpuTime:0,gpuTimePerFrame:0,cpuTime:0,cpuTimePerFrame:0,bufferMemory:0,textureMemory:0,renderbufferMemory:0,gpuMemory:0},this._metricsCounter=0,this._hoverPickSequence=0,this._pointerDownPickSequence=0,this._needsRedraw="Initial render",this._pickRequest={mode:"hover",x:-1,y:-1,radius:0,event:null,unproject3D:!1},this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this._onPointerMove=i=>{let{_pickRequest:n}=this;if(i.type==="pointerleave")n.x=-1,n.y=-1,n.radius=0;else{if(i.leftButton||i.rightButton)return;{let o=i.offsetCenter;if(!o)return;n.x=o.x,n.y=o.y,n.radius=this.props.pickingRadius}}this.layerManager&&(this.layerManager.context.mousePosition={x:n.x,y:n.y}),n.event=i},this._onEvent=i=>{let n=Li[i.type],o=i.offsetCenter;if(!n||!o||!this.layerManager)return;let s=this.layerManager.getLayers(),a=this._getInternalPickingMode();if(!a)return;if(a==="sync"){let l=i.type==="click"&&this._shouldUnproject3D(s)?this._getFirstPickedInfo(this._pickPointSync(this._getPointPickOptions(o.x,o.y,{unproject3D:!0},s))):this._getLastPointerDownPickingInfo(o.x,o.y,s);this._dispatchPickingEvent(l,i);return}(this._lastPointerDownInfoPromise||Promise.resolve(this._getLastPointerDownPickingInfo(o.x,o.y,s))).then(l=>{this._dispatchPickingEvent(l,i)}).catch(l=>this.props.onError?.(l))},this._onPointerDown=i=>{let n=i.offsetCenter;if(!n)return;let o=this._getInternalPickingMode();if(!o)return;let s=this.layerManager?.getLayers()||[],a=++this._pointerDownPickSequence;if(o==="sync"){let l=this._pickPointSync({x:n.x,y:n.y,radius:this.props.pickingRadius}),f=this._getFirstPickedInfo(l);this._lastPointerDownInfo=f,this._lastPointerDownInfoPromise=Promise.resolve(f);return}let c=this._pickPointAsync(this._getPointPickOptions(n.x,n.y,{},s)).then(l=>this._getFirstPickedInfo(l)).then(l=>(a===this._pointerDownPickSequence&&(this._lastPointerDownInfo=l),l)).catch(l=>{this.props.onError?.(l);let f=this.deckPicker&&this.viewManager?this._getLastPointerDownPickingInfo(n.x,n.y,s):{};return a===this._pointerDownPickSequence&&(this._lastPointerDownInfo=f),f});this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=c},this.props={...pT,...e},e=this.props,e.viewState&&e.initialViewState&&P.warn("View state tracking is disabled. Use either `initialViewState` for auto update or `viewState` for manual update.")(),this.viewState=this.props.initialViewState,e.device&&(this.device=e.device);let r=this.device;if(!r&&e.gl){e.gl instanceof WebGLRenderingContext&&P.error("WebGL1 context not supported.")();let i=this.props.deviceProps?.onResize;r=is.attach(e.gl,{_cacheShaders:!0,_cachePipelines:!0,...this.props.deviceProps,onResize:(n,o)=>{let{width:s,height:a}=n.canvas;n.setDrawingBufferSize(s,a),this._needsRedraw="Canvas resized",i?.(n,o)}})}r||(r=this._createDevice(e)),this.animationLoop=this._createAnimationLoop(r,e),this.setProps(e),e._typedArrayManagerProps&&lt.setOptions(e._typedArrayManagerProps),this.animationLoop.start()}finalize(){this.animationLoop?.stop(),this.animationLoop?.destroy(),this.animationLoop=null,this._hoverPickSequence++,this._pointerDownPickSequence++,this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this.layerManager?.finalize(),this.layerManager=null,this.viewManager?.finalize(),this.viewManager=null,this.effectManager?.finalize(),this.effectManager=null,this.deckRenderer?.finalize(),this.deckRenderer=null,this.deckPicker?.finalize(),this.deckPicker=null,this.eventManager?.destroy(),this.eventManager=null,this.widgetManager?.finalize(),this.widgetManager=null,!this.props.canvas&&!this.props.device&&!this.props.gl&&this.canvas&&(this.canvas.parentElement?.removeChild(this.canvas),this.canvas=null)}setProps(e){this.stats.get("setProps Time").timeStart(),"onLayerHover"in e&&P.removed("onLayerHover","onHover")(),"onLayerClick"in e&&P.removed("onLayerClick","onClick")(),e.initialViewState&&!oe(this.props.initialViewState,e.initialViewState,3)&&(this.viewState=e.initialViewState),Object.assign(this.props,e),this._validateInternalPickingMode(),this._setCanvasSize(this.props);let r=Object.create(this.props);Object.assign(r,{views:this._getViews(),width:this.width,height:this.height,viewState:this._getViewState()}),e.device&&e.device.id!==this.device?.id&&(this.animationLoop?.stop(),this.canvas!==e.device.canvasContext?.canvas&&(this.canvas?.remove(),this.eventManager?.destroy(),this.canvas=null),P.log(`recreating animation loop for new device! id=${e.device.id}`)(),this.animationLoop=this._createAnimationLoop(e.device,e),this.animationLoop.start()),this.animationLoop?.setProps(r),e.useDevicePixels!==void 0&&this.device?.canvasContext?.setProps&&this.device.canvasContext.setProps({useDevicePixels:e.useDevicePixels}),this.layerManager&&(this.viewManager.setProps(r),this.layerManager.activateViewport(this.getViewports()[0]),this.layerManager.setProps(r),this.effectManager.setProps(r),this.deckRenderer.setProps(r),this.deckPicker.setProps(r),this.widgetManager.setProps(r)),this.stats.get("setProps Time").timeEnd()}needsRedraw(e={clearRedrawFlags:!1}){if(!this.layerManager)return!1;if(this.props._animate)return"Deck._animate";let r=this._needsRedraw;e.clearRedrawFlags&&(this._needsRedraw=!1);let i=this.viewManager.needsRedraw(e),n=this.layerManager.needsRedraw(e),o=this.effectManager.needsRedraw(e),s=this.deckRenderer.needsRedraw(e);return r=r||i||n||o||s,r}redraw(e){if(!this.layerManager)return;let r=this.needsRedraw({clearRedrawFlags:!0});r=e||r,r&&(this.stats.get("Redraw Count").incrementCount(),this.props._customRender?this.props._customRender(r):this._drawLayers(r))}get isInitialized(){return this.viewManager!==null}getViews(){return z(this.viewManager),this.viewManager.views}getView(e){return z(this.viewManager),this.viewManager.getView(e)}getViewports(e){return z(this.viewManager),this.viewManager.getViewports(e)}getCanvas(){return this.canvas}async pickObjectAsync(e){let r=(await this._pickAsync("pickObjectAsync","pickObject Time",e)).result;return r.length?r[0]:null}async pickObjectsAsync(e){return await this._pickAsync("pickObjectsAsync","pickObjects Time",e)}pickObject(e){let r=this._pick("pickObject","pickObject Time",e).result;return r.length?r[0]:null}pickMultipleObjects(e){return e.depth=e.depth||10,this._pick("pickObject","pickMultipleObjects Time",e).result}pickObjects(e){return this._pick("pickObjects","pickObjects Time",e)}_pickPositionForController(e,r){return this._getInternalPickingMode()!=="sync"?null:this.pickObject({x:e,y:r,radius:0,unproject3D:!0})}_addResources(e,r=!1){for(let i in e)this.layerManager.resourceManager.add({resourceId:i,data:e[i],forceUpdate:r})}_removeResources(e){for(let r of e)this.layerManager.resourceManager.remove(r)}_addDefaultEffect(e){this.effectManager.addDefaultEffect(e)}_addDefaultShaderModule(e){this.layerManager.addDefaultShaderModule(e)}_removeDefaultShaderModule(e){this.layerManager?.removeDefaultShaderModule(e)}_resolveInternalPickingMode(){let{pickAsync:e}=this.props,r=this.device?.type||this.props.deviceProps?.type;if(e==="auto")return r==="webgpu"?"async":"sync";if(e==="sync"&&r==="webgpu")throw new Error('`pickAsync: "sync"` is not supported when Deck is using a WebGPU device.');return e}_getInternalPickingMode(){try{return this._resolveInternalPickingMode()}catch(e){return this.props.onError?.(e),null}}_validateInternalPickingMode(){this._getInternalPickingMode()}_getFirstPickedInfo({result:e,emptyInfo:r}){return e[0]||r}_shouldUnproject3D(e=this.layerManager?.getLayers()||[]){return e.some(r=>r.props.pickable==="3d")}_getPointPickOptions(e,r,i={},n=this.layerManager?.getLayers()||[]){return{x:e,y:r,radius:this.props.pickingRadius,unproject3D:this._shouldUnproject3D(n),...i}}_pickPointSync(e){return this._pick("pickObject","pickObject Time",e)}_pickPointAsync(e){return this._pickAsync("pickObjectAsync","pickObject Time",e)}_getLastPointerDownPickingInfo(e,r,i=this.layerManager?.getLayers()||[]){return this.deckPicker.getLastPickedObject({x:e,y:r,layers:i,viewports:this.getViewports({x:e,y:r})},this._lastPointerDownInfo)}_applyHoverCallbacks({result:e,emptyInfo:r},i){if(!this.widgetManager)return;this.cursorState.isHovering=e.length>0;let n=r,o=!1;for(let s of e)n=s,o=s.layer?.onHover(s,i)||o;o||(this.props.onHover?.(n,i),this.widgetManager.onHover(n,i))}_dispatchPickingEvent(e,r){if(!this.layerManager||!this.widgetManager)return;let i=Li[r.type];if(!i)return;let{layer:n}=e,o=n&&(n[i]||n.props[i]),s=this.props[i],a=!1;o&&(a=o.call(n,e,r)),a||(s?.(e,r),this.widgetManager.onEvent(e,r))}_pickAsync(e,r,i){z(this.deckPicker);let{stats:n}=this;n.get("Pick Count").incrementCount(),n.get(r).timeStart();let o=this.deckPicker[e]({layers:this.layerManager.getLayers(i),views:this.viewManager.getViews(),viewports:this.getViewports(i),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...i});return n.get(r).timeEnd(),o}_pick(e,r,i){z(this.deckPicker);let{stats:n}=this;n.get("Pick Count").incrementCount(),n.get(r).timeStart();let o=this.deckPicker[e]({layers:this.layerManager.getLayers(i),views:this.viewManager.getViews(),viewports:this.getViewports(i),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...i});return n.get(r).timeEnd(),o}_createCanvas(e){let r=e.canvas;return typeof r=="string"&&(r=document.getElementById(r),z(r)),r||(r=document.createElement("canvas"),r.id=e.id||"deckgl-overlay",e.width&&typeof e.width=="number"&&(r.width=e.width),e.height&&typeof e.height=="number"&&(r.height=e.height),(e.parent||document.body).appendChild(r)),Object.assign(r.style,e.style),r}_setCanvasSize(e){if(!this.canvas)return;let{width:r,height:i}=e;if(r||r===0){let n=Number.isFinite(r)?`${r}px`:r;this.canvas.style.width=n}if(i||i===0){let n=Number.isFinite(i)?`${i}px`:i;this.canvas.style.position=e.style?.position||"absolute",this.canvas.style.height=n}}_updateCanvasSize(){let{canvas:e}=this;if(!e)return;let r=e.clientWidth??e.width,i=e.clientHeight??e.height;(r!==this.width||i!==this.height)&&(this.width=r,this.height=i,this.viewManager?.setProps({width:r,height:i}),this.layerManager?.activateViewport(this.getViewports()[0]),this.props.onResize({width:r,height:i}))}_createAnimationLoop(e,r){let{gl:i,onError:n}=r;return new wo({device:e,autoResizeDrawingBuffer:!i,autoResizeViewport:!1,onInitialize:o=>this._setDevice(o.device),onRender:this._onRenderFrame.bind(this),onError:n})}_createDevice(e){let r=this.props.deviceProps?.createCanvasContext,i=typeof r=="object"?r:void 0,n={adapters:[],_cacheShaders:!0,_cachePipelines:!0,...e.deviceProps};n.adapters.includes(is)||n.adapters.push(is);let o={alphaMode:this.props.deviceProps?.type==="webgpu"?"premultiplied":void 0},s=this.props.deviceProps?.onResize;return Ri.createDevice({_reuseDevices:!0,type:"webgl",...n,createCanvasContext:{...o,...i,canvas:this._createCanvas(e),useDevicePixels:this.props.useDevicePixels,autoResize:!0},onResize:(a,c)=>{this._needsRedraw="Canvas resized",s?.(a,c)}})}_getViewState(){return this.props.viewState||this.viewState}_getViews(){let{views:e}=this.props,r=Array.isArray(e)?e:e?[e]:[new Wo({id:"default-view"})];return r.length&&this.props.controller&&(r[0].props.controller=this.props.controller),r}_onContextLost(){let{onError:e}=this.props;this.animationLoop&&e&&e(new Error("WebGL context is lost"))}_pickAndCallback(){let{_pickRequest:e}=this;if(e.event){let r=e.event,i=this.layerManager?.getLayers()||[],n=this._getPointPickOptions(e.x,e.y,{radius:e.radius,mode:e.mode},i),o=this._getInternalPickingMode(),s=++this._hoverPickSequence;if(e.event=null,!o)return;if(o==="sync"){this._applyHoverCallbacks(this._pickPointSync(n),r);return}this._pickPointAsync(n).then(({result:a,emptyInfo:c})=>{s===this._hoverPickSequence&&this._applyHoverCallbacks({result:a,emptyInfo:c},r)}).catch(a=>this.props.onError?.(a))}}_updateCursor(){let e=this.props.parent||this.canvas;e&&(e.style.cursor=this.props.getCursor(this.cursorState))}_setDevice(e){if(this.device=e,this._validateInternalPickingMode(),!this.animationLoop)return;this.canvas||(this.canvas=this.device.canvasContext?.canvas,!this.canvas.isConnected&&this.props.parent&&this.props.parent.insertBefore(this.canvas,this.props.parent.firstChild)),this.device.type==="webgl"&&this.device.setParametersWebGL({blend:!0,blendFunc:[770,771,1,771],polygonOffsetFill:!0,depthTest:!0,depthFunc:515}),this.props.onDeviceInitialized(this.device),this.device.type==="webgl"&&this.props.onWebGLInitialized(this.device.gl);let r=new Yr;r.play(),this.animationLoop.attachTimeline(r);let i=this.props.parent?.querySelector(".deck-events-root")||this.canvas;this.eventManager=new xo(i,{touchAction:this.props.touchAction,recognizers:Object.keys(Oh).map(s=>{let[a,c,l,f]=Oh[s],u=this.props.eventRecognizerOptions?.[s],d={...c,...u,event:s};return{recognizer:new a(d),recognizeWith:l,requestFailure:f}}),events:{pointerdown:this._onPointerDown,pointermove:this._onPointerMove,pointerleave:this._onPointerMove}});for(let s in Li)this.eventManager.on(s,this._onEvent);this.viewManager=new Uo({timeline:r,eventManager:this.eventManager,onViewStateChange:this._onViewStateChange.bind(this),onInteractionStateChange:this._onInteractionStateChange.bind(this),pickPosition:this._pickPositionForController.bind(this),views:this._getViews(),viewState:this._getViewState(),width:this.width,height:this.height});let n=this.viewManager.getViewports()[0];this.layerManager=new Do(this.device,{deck:this,stats:this.stats,viewport:n,timeline:r}),this.effectManager=new Go({deck:this,device:this.device}),this.deckRenderer=new $o(this.device,{stats:this.stats}),this.deckPicker=new Ko(this.device,{stats:this.stats});let o=this.props.parent?.querySelector(".deck-widgets-root")||this.canvas?.parentElement;this.widgetManager=new Gc({deck:this,parentElement:o}),this.widgetManager.addDefault(new Yo),this.setProps(this.props),this._updateCanvasSize(),this.props.onLoad()}_drawLayers(e,r){let{device:i,gl:n}=this.layerManager.context;this.props.onBeforeRender({device:i,gl:n});let o={target:this.props._framebuffer,layers:this.layerManager.getLayers(),viewports:this.viewManager.getViewports(),onViewportActive:this.layerManager.activateViewport,views:this.viewManager.getViews(),pass:"screen",effects:this.effectManager.getEffects(),...r};this.deckRenderer?.renderLayers(o),o.pass==="screen"&&this.widgetManager.onRedraw({viewports:o.viewports,layers:o.layers}),this.props.onAfterRender({device:i,gl:n})}_onRenderFrame(){this._getFrameStats(),this._metricsCounter++%60===0&&(this._getMetrics(),this.stats.reset(),P.table(4,this.metrics)(),this.props._onMetrics&&this.props._onMetrics(this.metrics)),this._updateCanvasSize(),this._updateCursor(),this.layerManager.updateLayers(),this._pickAndCallback(),this.redraw(),this.viewManager&&this.viewManager.updateViewStates()}_onViewStateChange(e){let r=this.props.onViewStateChange(e)||e.viewState;this.viewState&&(this.viewState={...this.viewState,[e.viewId]:r},this.props.viewState||this.viewManager&&this.viewManager.setProps({viewState:this.viewState}))}_onInteractionStateChange(e){this.cursorState.isDragging=e.isDragging||!1,this.props.onInteractionStateChange(e)}_getFrameStats(){let{stats:e}=this;e.get("frameRate").timeEnd(),e.get("frameRate").timeStart();let r=this.animationLoop.stats;e.get("GPU Time").addTime(r.get("GPU Time").lastTiming),e.get("CPU Time").addTime(r.get("CPU Time").lastTiming)}_getMetrics(){let{metrics:e,stats:r}=this;e.fps=r.get("frameRate").getHz(),e.setPropsTime=r.get("setProps Time").time,e.updateAttributesTime=r.get("Update Attributes").time,e.framesRedrawn=r.get("Redraw Count").count,e.pickTime=r.get("pickObject Time").time+r.get("pickMultipleObjects Time").time+r.get("pickObjects Time").time,e.pickCount=r.get("Pick Count").count,e.layersCount=this.layerManager?.layers.length??0,e.drawLayersCount=r.get("Layers rendered").lastSampleCount,e.pickLayersCount=r.get("Layers picked").lastSampleCount,e.updateAttributesCount=r.get("Layers updated").count,e.updateAttributesCount=r.get("Attributes updated").count,e.gpuTime=r.get("GPU Time").time,e.cpuTime=r.get("CPU Time").time,e.gpuTimePerFrame=r.get("GPU Time").getAverageTime(),e.cpuTimePerFrame=r.get("CPU Time").getAverageTime();let i=Ri.stats.get("GPU Time and Memory");e.bufferMemory=i.get("Buffer Memory").count,e.textureMemory=i.get("Texture Memory").count,e.renderbufferMemory=i.get("Renderbuffer Memory").count,e.gpuMemory=i.get("GPU Memory").count}};ns.defaultProps=pT;ns.VERSION=E_;var wl=ns;L();L();function gT(t){switch(t){case"float64":return Float64Array;case"uint8":case"unorm8":return Uint8ClampedArray;default:return uo(t)}}var mT=ve.getDataType.bind(ve);function os(t,e,r){if(e.size>4)return null;let i=r==="webgpu"&&e.type==="uint8"?"unorm8":e.type;return{attribute:t,format:e.size>1?`${i}x${e.size}`:e.type,byteOffset:e.offset||0}}function Tr(t){return t.stride||t.size*t.bytesPerElement}function _T(t,e){return t.type===e.type&&t.size===e.size&&Tr(t)===Tr(e)&&(t.offset||0)===(e.offset||0)}function Up(t,e){e.offset&&P.removed("shaderAttribute.offset","vertexOffset, elementOffset")();let r=Tr(t),i=e.vertexOffset!==void 0?e.vertexOffset:t.vertexOffset||0,n=e.elementOffset||0,o=i*r+n*t.bytesPerElement+(t.offset||0);return{...e,offset:o,stride:r}}function yO(t,e){let r=Up(t,e);return{high:r,low:{...r,offset:r.offset+t.size*4}}}var ss=class{constructor(e,r,i){this._buffer=null,this.device=e,this.id=r.id||"",this.size=r.size||1;let n=r.logicalType||r.type,o=n==="float64",{defaultValue:s}=r;s=Number.isFinite(s)?[s]:s||new Array(this.size).fill(0);let a;o?a="float32":!n&&r.isIndexed?a="uint32":a=n||"float32";let c=gT(n||a);this.doublePrecision=o,o&&r.fp64===!1&&(c=Float32Array),this.value=null,this.settings={...r,defaultType:c,defaultValue:s,logicalType:n,type:a,normalized:a.includes("norm"),size:this.size,bytesPerElement:c.BYTES_PER_ELEMENT},this.state={...i,externalBuffer:null,bufferAccessor:this.settings,allocatedValue:null,numInstances:0,bounds:null,constant:!1}}get isConstant(){return this.state.constant}get buffer(){return this._buffer}get byteOffset(){let e=this.getAccessor();return e.vertexOffset?e.vertexOffset*Tr(e):0}get numInstances(){return this.state.numInstances}set numInstances(e){this.state.numInstances=e}delete(){this._buffer&&(this._buffer.delete(),this._buffer=null),lt.release(this.state.allocatedValue)}getBuffer(){return this.state.constant?null:this.state.externalBuffer||this._buffer}getValue(e=this.id,r=null){let i={};if(this.state.constant){let n=this.value;if(r){let o=Up(this.getAccessor(),r),s=o.offset/n.BYTES_PER_ELEMENT,a=o.size||this.size;i[e]=n.subarray(s,s+a)}else i[e]=n}else i[e]=this.getBuffer();return this.doublePrecision&&(this.value instanceof Float64Array?i[`${e}64Low`]=i[e]:i[`${e}64Low`]=new Float32Array(this.size)),i}_getBufferLayout(e=this.id,r=null){let i=this.getAccessor(),n=[],o={name:this.id,byteStride:Tr(i)};if(this.doublePrecision){let s=yO(i,r||{});n.push(os(e,{...i,...s.high},this.device.type),os(`${e}64Low`,{...i,...s.low},this.device.type))}else if(r){let s=Up(i,r);n.push(os(e,{...i,...s},this.device.type))}else n.push(os(e,i,this.device.type));return o.attributes=n.filter(Boolean),o}setAccessor(e){this.state.bufferAccessor=e}getAccessor(){return this.state.bufferAccessor}getBounds(){if(this.state.bounds)return this.state.bounds;let e=null;if(this.state.constant&&this.value){let r=Array.from(this.value);e=[r,r]}else{let{value:r,numInstances:i,size:n}=this,o=i*n;if(r&&o&&r.length>=o){let s=new Array(n).fill(1/0),a=new Array(n).fill(-1/0);for(let c=0;c<o;)for(let l=0;l<n;l++){let f=r[c++];f<s[l]&&(s[l]=f),f>a[l]&&(a[l]=f)}e=[s,a]}}return this.state.bounds=e,e}setData(e){let{state:r}=this,i;ArrayBuffer.isView(e)?i={value:e}:e instanceof F?i={buffer:e}:i=e;let n={...this.settings,...i};if(ArrayBuffer.isView(i.value)){if(!i.type)if(this.doublePrecision&&i.value instanceof Float64Array)n.type="float32";else{let s=mT(i.value);n.type=n.normalized?s.replace("int","norm"):s}n.bytesPerElement=i.value.BYTES_PER_ELEMENT,n.stride=Tr(n)}if(r.bounds=null,i.constant){let o=i.value;if(o=this._normalizeValue(o,[],0),this.settings.normalized&&(o=this.normalizeConstant(o)),!(!r.constant||!this._areValuesEqual(o,this.value)))return!1;r.externalBuffer=null,r.constant=!0,this.value=ArrayBuffer.isView(o)?o:new Float32Array(o)}else if(i.buffer){let o=i.buffer;r.externalBuffer=o,r.constant=!1,this.value=i.value||null}else if(i.value){this._checkExternalBuffer(i);let o=i.value;r.externalBuffer=null,r.constant=!1,this.value=o;let{buffer:s}=this,a=Tr(n),c=(n.vertexOffset||0)*a;if(this.doublePrecision&&o instanceof Float64Array&&(o=Rc(o,n)),this.settings.isIndexed){let f=this.settings.defaultType;o.constructor!==f&&(o=new f(o))}let l=o.byteLength+c+a*2;(!s||s.byteLength<l)&&(s=this._createBuffer(l)),s.write(o,c)}return this.setAccessor(n),!0}updateSubBuffer(e={}){this.state.bounds=null;let r=this.value,{startOffset:i=0,endOffset:n}=e;this.buffer.write(this.doublePrecision&&r instanceof Float64Array?Rc(r,{size:this.size,startIndex:i,endIndex:n}):r.subarray(i,n),i*r.BYTES_PER_ELEMENT+this.byteOffset)}allocate(e,r=!1){let{state:i}=this,n=i.allocatedValue,o=lt.allocate(n,e+1,{size:this.size,type:this.settings.defaultType,copy:r});this.value=o;let{byteOffset:s}=this,{buffer:a}=this;return(!a||a.byteLength<o.byteLength+s)&&(a=this._createBuffer(o.byteLength+s),r&&n&&a.write(n instanceof Float64Array?Rc(n,this):n,s)),i.allocatedValue=o,i.constant=!1,i.externalBuffer=null,this.setAccessor(this.settings),!0}_checkExternalBuffer(e){let{value:r}=e;if(!ArrayBuffer.isView(r))throw new Error(`Attribute ${this.id} value is not TypedArray`);let i=this.settings.defaultType,n=!1;if(this.doublePrecision&&(n=r.BYTES_PER_ELEMENT<4),n)throw new Error(`Attribute ${this.id} does not support ${r.constructor.name}`);!(r instanceof i)&&this.settings.normalized&&!("normalized"in e)&&P.warn(`Attribute ${this.id} is normalized`)()}normalizeConstant(e){switch(this.settings.type){case"snorm8":return new Float32Array(e).map(r=>(r+128)/255*2-1);case"snorm16":return new Float32Array(e).map(r=>(r+32768)/65535*2-1);case"unorm8":return new Float32Array(e).map(r=>r/255);case"unorm16":return new Float32Array(e).map(r=>r/65535);default:return e}}_normalizeValue(e,r,i){let{defaultValue:n,size:o}=this.settings;if(Number.isFinite(e))return r[i]=e,r;if(!e){let s=o;for(;--s>=0;)r[i+s]=n[s];return r}switch(o){case 4:r[i+3]=Number.isFinite(e[3])?e[3]:n[3];case 3:r[i+2]=Number.isFinite(e[2])?e[2]:n[2];case 2:r[i+1]=Number.isFinite(e[1])?e[1]:n[1];case 1:r[i+0]=Number.isFinite(e[0])?e[0]:n[0];break;default:let s=o;for(;--s>=0;)r[i+s]=Number.isFinite(e[s])?e[s]:n[s]}return r}_areValuesEqual(e,r){if(!e||!r)return!1;let{size:i}=this;for(let n=0;n<i;n++)if(e[n]!==r[n])return!1;return!0}_createBuffer(e){this._buffer&&this._buffer.destroy();let{isIndexed:r,type:i}=this.settings;return this._buffer=this.device.createBuffer({...this._buffer?.props,id:this.id,usage:(r?F.INDEX:F.VERTEX)|F.COPY_DST,indexType:r?i:void 0,byteLength:e}),this._buffer}};var bT=[],AT=[];function Pe(t,e=0,r=1/0){let i=bT,n={index:-1,data:t,target:[]};return t?typeof t[Symbol.iterator]=="function"?i=t:t.length>0&&(AT.length=t.length,i=AT):i=bT,(e>0||Number.isFinite(r))&&(i=(Array.isArray(i)?i:Array.from(i)).slice(e,r),n.index=e-1),{iterable:i,objectInfo:n}}function Il(t){return t&&t[Symbol.asyncIterator]}function Bl(t,e){let{size:r,stride:i,offset:n,startIndices:o,nested:s}=e,a=t.BYTES_PER_ELEMENT,c=i?i/a:r,l=n?n/a:0,f=Math.floor((t.length-l)/c);return(u,{index:d,target:h})=>{if(!o){let b=d*c+l;for(let y=0;y<r;y++)h[y]=t[b+y];return h}let p=o[d],g=o[d+1]||f,m;if(s){m=new Array(g-p);for(let b=p;b<g;b++){let y=b*c+l;h=new Array(r);for(let _=0;_<r;_++)h[_]=t[y+_];m[b-p]=h}}else if(c===r)m=t.subarray(p*r+l,g*r+l);else{m=new t.constructor((g-p)*r);let b=0;for(let y=p;y<g;y++){let _=y*c+l;for(let A=0;A<r;A++)m[b++]=t[_+A]}}return m}}var yT=[],as=[[0,1/0]];function xT(t,e){if(t===as||(e[0]<0&&(e[0]=0),e[0]>=e[1]))return t;let r=[],i=t.length,n=0;for(let o=0;o<i;o++){let s=t[o];s[1]<e[0]?(r.push(s),n=o+1):s[0]>e[1]?r.push(s):e=[Math.min(s[0],e[0]),Math.max(s[1],e[1])]}return r.splice(n,0,e),r}var TO={interpolation:{duration:0,easing:t=>t},spring:{stiffness:.05,damping:.5}};function Ol(t,e){if(!t)return null;Number.isFinite(t)&&(t={type:"interpolation",duration:t});let r=t.type||"interpolation";return{...TO[r],...e,...t,type:r}}var ii=class extends ss{constructor(e,r){super(e,r,{startIndices:null,lastExternalBuffer:null,binaryValue:null,binaryAccessor:null,needsUpdate:!0,needsRedraw:!1,layoutChanged:!1,updateRanges:as}),this.constant=!1,this.settings.update=r.update||(r.accessor?this._autoUpdater:void 0),Object.seal(this.settings),Object.seal(this.state),this._validateAttributeUpdaters()}get startIndices(){return this.state.startIndices}set startIndices(e){this.state.startIndices=e}needsUpdate(){return this.state.needsUpdate}needsRedraw({clearChangedFlags:e=!1}={}){let r=this.state.needsRedraw;return this.state.needsRedraw=r&&!e,r}layoutChanged(){return this.state.layoutChanged}setAccessor(e){var r;(r=this.state).layoutChanged||(r.layoutChanged=!_T(e,this.getAccessor())),super.setAccessor(e)}getUpdateTriggers(){let{accessor:e}=this.settings;return[this.id].concat(typeof e!="function"&&e||[])}supportsTransition(){return!!this.settings.transition}getTransitionSetting(e){if(!e||!this.supportsTransition())return null;let{accessor:r}=this.settings,i=this.settings.transition,n=Array.isArray(r)?e[r.find(o=>e[o])]:e[r];return Ol(n,i)}setNeedsUpdate(e=this.id,r){if(this.state.needsUpdate=this.state.needsUpdate||e,this.setNeedsRedraw(e),r){let{startRow:i=0,endRow:n=1/0}=r;this.state.updateRanges=xT(this.state.updateRanges,[i,n])}else this.state.updateRanges=as}clearNeedsUpdate(){this.state.needsUpdate=!1,this.state.updateRanges=yT}setNeedsRedraw(e=this.id){this.state.needsRedraw=this.state.needsRedraw||e}allocate(e){let{state:r,settings:i}=this;return i.noAlloc?!1:i.update?(super.allocate(e,r.updateRanges!==as),!0):!1}updateBuffer({numInstances:e,data:r,props:i,context:n}){if(!this.needsUpdate())return!1;let{state:{updateRanges:o},settings:{update:s,noAlloc:a}}=this,c=!0;if(s){for(let[l,f]of o)s.call(n,this,{data:r,startRow:l,endRow:f,props:i,numInstances:e});if(this.value)if(this.constant||!this.buffer||this.buffer.byteLength<this.value.byteLength+this.byteOffset)this.constant?this.setConstantValue(n,this.value):this.setData({value:this.value,constant:this.constant}),this.constant=!1;else for(let[l,f]of o){let u=Number.isFinite(l)?this.getVertexOffset(l):0,d=Number.isFinite(f)?this.getVertexOffset(f):a||!Number.isFinite(e)?this.value.length:e*this.size;super.updateSubBuffer({startOffset:u,endOffset:d})}this._checkAttributeArray()}else c=!1;return this.clearNeedsUpdate(),this.setNeedsRedraw(),c}setConstantValue(e,r){if(r===void 0||typeof r=="function")return!1;let i=this.settings.transform&&e?this.settings.transform.call(e,r):r;return this.device.type==="webgpu"?this.setConstantBufferValue(i,this.numInstances):(this.setData({constant:!0,value:i})&&this.setNeedsRedraw(),this.clearNeedsUpdate(),!0)}setConstantBufferValue(e,r){let i=this.settings.defaultType,n=this._normalizeValue(e,new i(this.size),0);if(this._hasConstantBufferValue(n,r))return this.constant=!1,this.clearNeedsUpdate(),!1;let o=new i(Math.max(r,1)*this.size);for(let a=0;a<o.length;a+=this.size)o.set(n,a);let s=this.setData({value:o});return this.constant=!1,this.clearNeedsUpdate(),s&&this.setNeedsRedraw(),s}_hasConstantBufferValue(e,r){let i=this.value,n=Math.max(r,1)*this.size;if(!ArrayBuffer.isView(i)||i.length!==n||i.length%this.size!==0)return!1;for(let o=0;o<i.length;o+=this.size)for(let s=0;s<this.size;s++)if(i[o+s]!==e[s])return!1;return!0}setExternalBuffer(e){let{state:r}=this;return e?(this.clearNeedsUpdate(),r.lastExternalBuffer===e||(r.lastExternalBuffer=e,this.setNeedsRedraw(),this.setData(e)),!0):(r.lastExternalBuffer=null,!1)}setBinaryValue(e,r=null){let{state:i,settings:n}=this;if(!e)return i.binaryValue=null,i.binaryAccessor=null,!1;if(n.noAlloc)return!1;if(i.binaryValue===e)return this.clearNeedsUpdate(),!0;if(i.binaryValue=e,this.setNeedsRedraw(),n.transform||r!==this.startIndices){ArrayBuffer.isView(e)&&(e={value:e});let s=e;z(ArrayBuffer.isView(s.value),`invalid ${n.accessor}`);let a=!!s.size&&s.size!==this.size;return i.binaryAccessor=Bl(s.value,{size:s.size||this.size,stride:s.stride,offset:s.offset,startIndices:r,nested:a}),!1}return this.clearNeedsUpdate(),this.setData(e),!0}getVertexOffset(e){let{startIndices:r}=this;return(r?e<r.length?r[e]:this.numInstances:e)*this.size}getValue(){let e=this.settings.shaderAttributes,r=super.getValue();if(!e)return r;for(let i in e)Object.assign(r,super.getValue(i,e[i]));return r}getBufferLayout(e){this.state.layoutChanged=!1;let r=this.settings.shaderAttributes,i=super._getBufferLayout(),{stepMode:n}=this.settings;if(n==="dynamic"?i.stepMode=e?e.isInstanced?"instance":"vertex":"instance":i.stepMode=n??"vertex",!r)return i;for(let o in r){let s=super._getBufferLayout(o,r[o]);i.attributes.push(...s.attributes)}return i}_autoUpdater(e,{data:r,startRow:i,endRow:n,props:o,numInstances:s}){let{settings:a,state:c,value:l,size:f,startIndices:u}=e,{accessor:d,transform:h}=a,p=c.binaryAccessor||(typeof d=="function"?d:o[d]);z(typeof p=="function",`accessor "${d}" is not a function`);let g=e.getVertexOffset(i),{iterable:m,objectInfo:b}=Pe(r,i,n);for(let y of m){b.index++;let _=p(y,b);if(h&&(_=h.call(this,_)),u){let A=(b.index<u.length-1?u[b.index+1]:s)-u[b.index];if(_&&Array.isArray(_[0])){let T=g;for(let S of _)e._normalizeValue(S,l,T),T+=f}else _&&_.length>f?l.set(_,g):(e._normalizeValue(_,b.target,0),ip({target:l,source:b.target,start:g,count:A}));g+=A*f}else e._normalizeValue(_,l,g),g+=f}}_validateAttributeUpdaters(){let{settings:e}=this;if(!(e.noAlloc||typeof e.update=="function"))throw new Error(`Attribute ${this.id} missing update or accessor`)}_checkAttributeArray(){let{value:e}=this,r=Math.min(4,this.size);if(e&&e.length>=r){let i=!0;switch(r){case 4:i=i&&Number.isFinite(e[3]);case 3:i=i&&Number.isFinite(e[2]);case 2:i=i&&Number.isFinite(e[1]);case 1:i=i&&Number.isFinite(e[0]);break;default:i=!1}if(!i)throw new Error(`Illegal attribute generated for ${this.id}`)}}};function kp(t){let{source:e,target:r,start:i=0,size:n,getData:o}=t,s=t.end||r.length,a=e.length,c=s-i;if(a>c){r.set(e.subarray(0,c),i);return}if(r.set(e,i),!o)return;let l=a;for(;l<c;){let f=o(l,e);for(let u=0;u<n;u++)r[i+l]=f[u]||0,l++}}function TT({source:t,target:e,size:r,getData:i,sourceStartIndices:n,targetStartIndices:o}){if(!n||!o)return kp({source:t,target:e,size:r,getData:i}),e;let s=0,a=0,c=i&&((f,u)=>i(f+a,u)),l=Math.min(n.length,o.length);for(let f=1;f<l;f++){let u=n[f]*r,d=o[f]*r;kp({source:t.subarray(s,u),target:e,start:a,end:d,size:r,getData:c}),s=u,a=d}return a<e.length&&kp({source:[],target:e,start:a,size:r,getData:c}),e}function ST(t){let{device:e,settings:r,value:i}=t,n=new ii(e,r);return n.setData({value:i instanceof Float64Array?new Float64Array(0):new Float32Array(0),normalized:r.normalized}),n}function Ll(t){switch(t){case 1:return"float";case 2:return"vec2";case 3:return"vec3";case 4:return"vec4";default:throw new Error(`No defined attribute type for size "${t}"`)}}function Fl(t){switch(t){case 1:return"float32";case 2:return"float32x2";case 3:return"float32x3";case 4:return"float32x4";default:throw new Error("invalid type size")}}function Nl(t){t.push(t.shift())}function ET(t,e){let{doublePrecision:r,settings:i,value:n,size:o}=t,s=r&&n instanceof Float64Array?2:1,a=0,{shaderAttributes:c}=t.settings;if(c)for(let l of Object.values(c))a=Math.max(a,l.vertexOffset??0);return(i.noAlloc?n.length:(e+a)*o)*s}function Dl({device:t,source:e,target:r}){return(!r||r.byteLength<e.byteLength)&&(r?.destroy(),r=t.createBuffer({byteLength:e.byteLength,usage:e.usage})),r}function Ul({device:t,buffer:e,attribute:r,fromLength:i,toLength:n,fromStartIndices:o,getData:s=a=>a}){let a=r.doublePrecision&&r.value instanceof Float64Array?2:1,c=r.size*a,l=r.byteOffset,f=r.settings.bytesPerElement<4?l/r.settings.bytesPerElement*4:l,u=r.startIndices,d=o&&u,h=r.isConstant;if(!d&&e&&i>=n)return e;let p=r.value instanceof Float64Array?Float32Array:r.value.constructor,g=h?r.value:new p(r.getBuffer().readSyncWebGL(l,n*p.BYTES_PER_ELEMENT).buffer);if(r.settings.normalized&&!h){let _=s;s=(A,T)=>r.normalizeConstant(_(A,T))}let m=h?(_,A)=>s(g,A):(_,A)=>s(g.subarray(_+l,_+l+c),A),b=e?new Float32Array(e.readSyncWebGL(f,i*4).buffer):new Float32Array(0),y=new Float32Array(n);return TT({source:b,target:y,sourceStartIndices:o,targetStartIndices:u,size:c,getData:m}),(!e||e.byteLength<y.byteLength+f)&&(e?.destroy(),e=t.createBuffer({byteLength:y.byteLength+f,usage:35050})),e.write(y,f),e}var Zi=class{constructor({device:e,attribute:r,timeline:i}){this.buffers=[],this.currentLength=0,this.device=e,this.transition=new ut(i),this.attribute=r,this.attributeInTransition=ST(r),this.currentStartIndices=r.startIndices}get inProgress(){return this.transition.inProgress}start(e,r,i=1/0){this.settings=e,this.currentStartIndices=this.attribute.startIndices,this.currentLength=ET(this.attribute,r),this.transition.start({...e,duration:i})}update(){let e=this.transition.update();return e&&this.onUpdate(),e}setBuffer(e){this.attributeInTransition.setData({buffer:e,normalized:this.attribute.settings.normalized,value:this.attributeInTransition.value})}cancel(){this.transition.cancel()}delete(){this.cancel();for(let e of this.buffers)e.destroy();this.buffers.length=0}};var cs=class extends Zi{constructor({device:e,attribute:r,timeline:i}){super({device:e,attribute:r,timeline:i}),this.type="interpolation",this.transform=vO(e,r)}start(e,r){let i=this.currentLength,n=this.currentStartIndices;if(super.start(e,r,e.duration),e.duration<=0){this.transition.cancel();return}let{buffers:o,attribute:s}=this;Nl(o),o[0]=Ul({device:this.device,buffer:o[0],attribute:s,fromLength:i,toLength:this.currentLength,fromStartIndices:n,getData:e.enter}),o[1]=Dl({device:this.device,source:o[0],target:o[1]}),this.setBuffer(o[1]);let{transform:a}=this,c=a.model,l=Math.floor(this.currentLength/s.size);vT(s)&&(l/=2),c.setVertexCount(l),s.isConstant?(c.setAttributes({aFrom:o[0]}),c.setConstantAttributes({aTo:s.value})):c.setAttributes({aFrom:o[0],aTo:s.getBuffer()}),a.transformFeedback.setBuffers({vCurrent:o[1]})}onUpdate(){let{duration:e,easing:r}=this.settings,{time:i}=this.transition,n=i/e;r&&(n=r(n));let{model:o}=this.transform,s={time:n};o.shaderInputs.setProps({interpolation:s}),this.transform.run({discard:!0})}delete(){super.delete(),this.transform.destroy()}},SO=`layout(std140) uniform interpolationUniforms {
  float time;
} interpolation;
`,CT={name:"interpolation",vs:SO,uniformTypes:{time:"f32"}},EO=`#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vCurrent;

void main(void) {
  vCurrent = mix(aFrom, aTo, interpolation.time);
  gl_Position = vec4(0.0);
}
`,CO=`#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aFrom64Low;
in ATTRIBUTE_TYPE aTo;
in ATTRIBUTE_TYPE aTo64Low;
out ATTRIBUTE_TYPE vCurrent;
out ATTRIBUTE_TYPE vCurrent64Low;

vec2 mix_fp64(vec2 a, vec2 b, float x) {
  vec2 range = sub_fp64(b, a);
  return sum_fp64(a, mul_fp64(range, vec2(x, 0.0)));
}

void main(void) {
  for (int i=0; i<ATTRIBUTE_SIZE; i++) {
    vec2 value = mix_fp64(vec2(aFrom[i], aFrom64Low[i]), vec2(aTo[i], aTo64Low[i]), interpolation.time);
    vCurrent[i] = value.x;
    vCurrent64Low[i] = value.y;
  }
  gl_Position = vec4(0.0);
}
`;function vT(t){return t.doublePrecision&&t.value instanceof Float64Array}function vO(t,e){let r=e.size,i=Ll(r),n=Fl(r),o=e.getBufferLayout();return vT(e)?new mr(t,{vs:CO,bufferLayout:[{name:"aFrom",byteStride:8*r,attributes:[{attribute:"aFrom",format:n,byteOffset:0},{attribute:"aFrom64Low",format:n,byteOffset:4*r}]},{name:"aTo",byteStride:8*r,attributes:[{attribute:"aTo",format:n,byteOffset:0},{attribute:"aTo64Low",format:n,byteOffset:4*r}]}],modules:[Dd,CT],defines:{ATTRIBUTE_TYPE:i,ATTRIBUTE_SIZE:r},moduleSettings:{},varyings:["vCurrent","vCurrent64Low"],bufferMode:35980,disableWarnings:!0}):new mr(t,{vs:EO,bufferLayout:[{name:"aFrom",format:n},{name:"aTo",format:o.attributes[0].format}],modules:[CT],defines:{ATTRIBUTE_TYPE:i},varyings:["vCurrent"],disableWarnings:!0})}var ls=class extends Zi{constructor({device:e,attribute:r,timeline:i}){super({device:e,attribute:r,timeline:i}),this.type="spring",this.texture=BO(e),this.framebuffer=OO(e,this.texture),this.transform=IO(e,r)}start(e,r){let i=this.currentLength,n=this.currentStartIndices;super.start(e,r);let{buffers:o,attribute:s}=this;for(let c=0;c<2;c++)o[c]=Ul({device:this.device,buffer:o[c],attribute:s,fromLength:i,toLength:this.currentLength,fromStartIndices:n,getData:e.enter});o[2]=Dl({device:this.device,source:o[0],target:o[2]}),this.setBuffer(o[1]);let{model:a}=this.transform;a.setVertexCount(Math.floor(this.currentLength/s.size)),s.isConstant?a.setConstantAttributes({aTo:s.value}):a.setAttributes({aTo:s.getBuffer()})}onUpdate(){let{buffers:e,transform:r,framebuffer:i,transition:n}=this,o=this.settings;r.model.setAttributes({aPrev:e[0],aCur:e[1]}),r.transformFeedback.setBuffers({vNext:e[2]});let s={stiffness:o.stiffness,damping:o.damping};r.model.shaderInputs.setProps({spring:s}),r.run({framebuffer:i,discard:!1,parameters:{viewport:[0,0,1,1]},clearColor:[0,0,0,0]}),Nl(e),this.setBuffer(e[1]),this.device.readPixelsToArrayWebGL(i)[0]>0||n.end()}delete(){super.delete(),this.transform.destroy(),this.texture.destroy(),this.framebuffer.destroy()}},RO=`layout(std140) uniform springUniforms {
  float damping;
  float stiffness;
} spring;
`,MO={name:"spring",vs:RO,uniformTypes:{damping:"f32",stiffness:"f32"}},PO=`#version 300 es
#define SHADER_NAME spring-transition-vertex-shader

#define EPSILON 0.00001

in ATTRIBUTE_TYPE aPrev;
in ATTRIBUTE_TYPE aCur;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vNext;
out float vIsTransitioningFlag;

ATTRIBUTE_TYPE getNextValue(ATTRIBUTE_TYPE cur, ATTRIBUTE_TYPE prev, ATTRIBUTE_TYPE dest) {
  ATTRIBUTE_TYPE velocity = cur - prev;
  ATTRIBUTE_TYPE delta = dest - cur;
  ATTRIBUTE_TYPE force = delta * spring.stiffness;
  ATTRIBUTE_TYPE resistance = velocity * spring.damping;
  return force - resistance + velocity + cur;
}

void main(void) {
  bool isTransitioning = length(aCur - aPrev) > EPSILON || length(aTo - aCur) > EPSILON;
  vIsTransitioningFlag = isTransitioning ? 1.0 : 0.0;

  vNext = getNextValue(aCur, aPrev, aTo);
  gl_Position = vec4(0, 0, 0, 1);
  gl_PointSize = 100.0;
}
`,wO=`#version 300 es
#define SHADER_NAME spring-transition-is-transitioning-fragment-shader

in float vIsTransitioningFlag;

out vec4 fragColor;

void main(void) {
  if (vIsTransitioningFlag == 0.0) {
    discard;
  }
  fragColor = vec4(1.0);
}`;function IO(t,e){let r=Ll(e.size),i=Fl(e.size);return new mr(t,{vs:PO,fs:wO,bufferLayout:[{name:"aPrev",format:i},{name:"aCur",format:i},{name:"aTo",format:e.getBufferLayout().attributes[0].format}],varyings:["vNext"],modules:[MO],defines:{ATTRIBUTE_TYPE:r},parameters:{depthCompare:"always",blendColorOperation:"max",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"max",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one"}})}function BO(t){return t.createTexture({data:new Uint8Array(4),format:"rgba8unorm",width:1,height:1})}function OO(t,e){return t.createFramebuffer({id:"spring-transition-is-transitioning-framebuffer",width:1,height:1,colorAttachments:[e]})}var LO={interpolation:cs,spring:ls},fs=class{constructor(e,{id:r,timeline:i}){if(!e)throw new Error("AttributeTransitionManager is constructed without device");this.id=r,this.device=e,this.timeline=i,this.transitions={},this.needsRedraw=!1,this.numInstances=1}finalize(){for(let e in this.transitions)this._removeTransition(e)}update({attributes:e,transitions:r,numInstances:i}){this.numInstances=i||1;for(let n in e){let o=e[n],s=o.getTransitionSetting(r);s&&this._updateAttribute(n,o,s)}for(let n in this.transitions){let o=e[n];(!o||!o.getTransitionSetting(r))&&this._removeTransition(n)}}hasAttribute(e){let r=this.transitions[e];return r&&r.inProgress}getAttributes(){let e={};for(let r in this.transitions){let i=this.transitions[r];i.inProgress&&(e[r]=i.attributeInTransition)}return e}run(){if(this.numInstances===0)return!1;for(let r in this.transitions)this.transitions[r].update()&&(this.needsRedraw=!0);let e=this.needsRedraw;return this.needsRedraw=!1,e}_removeTransition(e){this.transitions[e].delete(),delete this.transitions[e]}_updateAttribute(e,r,i){let n=this.transitions[e],o=!n||n.type!==i.type;if(o){n&&this._removeTransition(e);let s=LO[i.type];s?this.transitions[e]=new s({attribute:r,timeline:this.timeline,device:this.device}):(P.error(`unsupported transition type '${i.type}'`)(),o=!1)}(o||r.needsRedraw())&&(this.needsRedraw=!0,this.transitions[e].start(i,this.numInstances))}};var RT="attributeManager.invalidate",FO="attributeManager.updateStart",NO="attributeManager.updateEnd",DO="attribute.updateStart",UO="attribute.allocate",kO="attribute.updateEnd",us=class{constructor(e,{id:r="attribute-manager",stats:i,timeline:n}={}){this.mergeBoundsMemoized=Rt(hx),this.id=r,this.device=e,this.attributes={},this.updateTriggers={},this.needsRedraw=!0,this.userData={},this.stats=i,this.attributeTransitionManager=new fs(e,{id:`${r}-transitions`,timeline:n}),Object.seal(this)}finalize(){for(let e in this.attributes)this.attributes[e].delete();this.attributeTransitionManager.finalize()}getNeedsRedraw(e={clearRedrawFlags:!1}){let r=this.needsRedraw;return this.needsRedraw=this.needsRedraw&&!e.clearRedrawFlags,r&&this.id}setNeedsRedraw(){this.needsRedraw=!0}add(e){this._add(e)}addInstanced(e){this._add(e,{stepMode:"instance"})}remove(e){for(let r of e)this.attributes[r]!==void 0&&(this.attributes[r].delete(),delete this.attributes[r])}invalidate(e,r){let i=this._invalidateTrigger(e,r);te(RT,this,e,i)}invalidateAll(e){for(let r in this.attributes)this.attributes[r].setNeedsUpdate(r,e);te(RT,this,"all")}update({data:e,numInstances:r,startIndices:i=null,transitions:n,props:o={},buffers:s={},context:a={}}){let c=!1;te(FO,this),this.stats&&this.stats.get("Update Attributes").timeStart();for(let l in this.attributes){let f=this.attributes[l],u=f.settings.accessor;f.startIndices=i,f.numInstances=r,o[l]&&P.removed(`props.${l}`,`data.attributes.${l}`)(),f.setExternalBuffer(s[l])||f.setBinaryValue(typeof u=="string"?s[u]:void 0,e.startIndices)||typeof u=="string"&&!s[u]&&f.setConstantValue(a,o[u])||f.needsUpdate()&&(c=!0,this._updateAttribute({attribute:f,numInstances:r,data:e,props:o,context:a})),this.needsRedraw=this.needsRedraw||f.needsRedraw()}c&&te(NO,this,r),this.stats&&(this.stats.get("Update Attributes").timeEnd(),c&&this.stats.get("Attributes updated").incrementCount()),this.attributeTransitionManager.update({attributes:this.attributes,numInstances:r,transitions:n})}updateTransition(){let{attributeTransitionManager:e}=this,r=e.run();return this.needsRedraw=this.needsRedraw||r,r}getAttributes(){return{...this.attributes,...this.attributeTransitionManager.getAttributes()}}getBounds(e){let r=e.map(i=>this.attributes[i]?.getBounds());return this.mergeBoundsMemoized(r)}getChangedAttributes(e={clearChangedFlags:!1}){let{attributes:r,attributeTransitionManager:i}=this,n={...i.getAttributes()};for(let o in r){let s=r[o];s.needsRedraw(e)&&!i.hasAttribute(o)&&(n[o]=s)}return n}getBufferLayouts(e){return Object.values(this.getAttributes()).map(r=>r.getBufferLayout(e))}_add(e,r){for(let i in e){let n=e[i],o={...n,id:i,size:n.isIndexed&&1||n.size||1,...r};this.attributes[i]=new ii(this.device,o)}this._mapUpdateTriggersToAttributes()}_mapUpdateTriggersToAttributes(){let e={};for(let r in this.attributes)this.attributes[r].getUpdateTriggers().forEach(n=>{e[n]||(e[n]=[]),e[n].push(r)});this.updateTriggers=e}_invalidateTrigger(e,r){let{attributes:i,updateTriggers:n}=this,o=n[e];return o&&o.forEach(s=>{let a=i[s];a&&a.setNeedsUpdate(a.id,r)}),o}_updateAttribute(e){let{attribute:r,numInstances:i}=e;if(te(DO,r),r.constant){r.setConstantValue(e.context,r.value);return}r.allocate(i)&&te(UO,r,i),r.updateBuffer(e)&&(this.needsRedraw=!0,te(kO,r,i))}};L();vl();var ds=class extends ut{get value(){return this._value}_onUpdate(){let{time:e,settings:{fromValue:r,toValue:i,duration:n,easing:o}}=this,s=o(e/n);this._value=Nr(r,i,s)}};var MT=1e-5;function PT(t,e,r,i,n){let o=e-t,a=(r-e)*n,c=-o*i;return a+c+o+e}function VO(t,e,r,i,n){if(Array.isArray(r)){let o=[];for(let s=0;s<r.length;s++)o[s]=PT(t[s],e[s],r[s],i,n);return o}return PT(t,e,r,i,n)}function wT(t,e){if(Array.isArray(t)){let r=0;for(let i=0;i<t.length;i++){let n=t[i]-e[i];r+=n*n}return Math.sqrt(r)}return Math.abs(t-e)}var hs=class extends ut{get value(){return this._currValue}_onUpdate(){let{fromValue:e,toValue:r,damping:i,stiffness:n}=this.settings,{_prevValue:o=e,_currValue:s=e}=this,a=VO(o,s,r,i,n),c=wT(a,r),l=wT(a,s);c<MT&&l<MT&&(a=r,this.end()),this._prevValue=s,this._currValue=a}};var HO={interpolation:ds,spring:hs},ps=class{constructor(e){this.transitions=new Map,this.timeline=e}get active(){return this.transitions.size>0}add(e,r,i,n){let{transitions:o}=this;if(o.has(e)){let c=o.get(e),{value:l=c.settings.fromValue}=c;r=l,this.remove(e)}if(n=Ol(n),!n)return;let s=HO[n.type];if(!s){P.error(`unsupported transition type '${n.type}'`)();return}let a=new s(this.timeline);a.start({...n,fromValue:r,toValue:i}),o.set(e,a)}remove(e){let{transitions:r}=this;r.has(e)&&(r.get(e).cancel(),r.delete(e))}update(){let e={};for(let[r,i]of this.transitions)i.update(),e[r]=i.value,i.inProgress||this.remove(r);return e}clear(){for(let e of this.transitions.keys())this.remove(e)}};function BT(t){let e=t[et];for(let r in e){let i=e[r],{validate:n}=i;if(n&&!n(t[r],i))throw new Error(`Invalid prop ${r}: ${t[r]}`)}}function OT(t,e){let r=LT({newProps:t,oldProps:e,propTypes:t[et],ignoreProps:{data:null,updateTriggers:null,extensions:null,transitions:null}}),i=jO(t,e),n=!1;return i||(n=WO(t,e)),{dataChanged:i,propsChanged:r,updateTriggersChanged:n,extensionsChanged:GO(t,e),transitionsChanged:zO(t,e)}}function zO(t,e){if(!t.transitions)return!1;let r={},i=t[et],n=!1;for(let o in t.transitions){let s=i[o],a=s&&s.type;(a==="number"||a==="color"||a==="array")&&Vp(t[o],e[o],s)&&(r[o]=!0,n=!0)}return n?r:!1}function LT({newProps:t,oldProps:e,ignoreProps:r={},propTypes:i={},triggerName:n="props"}){if(e===t)return!1;if(typeof t!="object"||t===null)return`${n} changed shallowly`;if(typeof e!="object"||e===null)return`${n} changed shallowly`;for(let o of Object.keys(t))if(!(o in r)){if(!(o in e))return`${n}.${o} added`;let s=Vp(t[o],e[o],i[o]);if(s)return`${n}.${o} ${s}`}for(let o of Object.keys(e))if(!(o in r)){if(!(o in t))return`${n}.${o} dropped`;if(!Object.hasOwnProperty.call(t,o)){let s=Vp(t[o],e[o],i[o]);if(s)return`${n}.${o} ${s}`}}return!1}function Vp(t,e,r){let i=r&&r.equal;return i&&!i(t,e,r)||!i&&(i=t&&e&&t.equals,i&&!i.call(t,e))?"changed deeply":!i&&e!==t?"changed shallowly":null}function jO(t,e){if(e===null)return"oldProps is null, initial diff";let r=!1,{dataComparator:i,_dataDiff:n}=t;return i?i(t.data,e.data)||(r="Data comparator detected a change"):t.data!==e.data&&(r="A new data container was supplied"),r&&n&&(r=n(t.data,e.data)||r),r}function WO(t,e){if(e===null)return{all:!0};if("all"in t.updateTriggers&&IT(t,e,"all"))return{all:!0};let r={},i=!1;for(let n in t.updateTriggers)n!=="all"&&IT(t,e,n)&&(r[n]=!0,i=!0);return i?r:!1}function GO(t,e){if(e===null)return!0;let r=e.extensions,{extensions:i}=t;if(i===r)return!1;if(!r||!i||i.length!==r.length)return!0;for(let n=0;n<i.length;n++)if(!i[n].equals(r[n]))return!0;return!1}function IT(t,e,r){let i=t.updateTriggers[r];i=i??{};let n=e.updateTriggers[r];return n=n??{},LT({oldProps:n,newProps:i,triggerName:r})}var XO="count(): argument not an object",$O="count(): argument not a container";function FT(t){if(!YO(t))throw new Error(XO);if(typeof t.count=="function")return t.count();if(Number.isFinite(t.size))return t.size;if(Number.isFinite(t.length))return t.length;if(KO(t))return Object.keys(t).length;throw new Error($O)}function KO(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function YO(t){return t!==null&&typeof t=="object"}function Hp(t,e){if(!e)return t;let r={...t,...e};if("defines"in e&&(r.defines={...t.defines,...e.defines}),"modules"in e&&(r.modules=(t.modules||[]).concat(e.modules),e.modules.some(i=>i.name==="project64"))){let i=r.modules.findIndex(n=>n.name==="project32");i>=0&&r.modules.splice(i,1)}if("inject"in e)if(!t.inject)r.inject=e.inject;else{let i={...t.inject};for(let n in e.inject)i[n]=(i[n]||"")+e.inject[n];r.inject=i}return r}L();var JO={minFilter:"linear",mipmapFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},zp={};function NT(t,e,r,i){if(r instanceof N)return r;r.constructor&&r.constructor.name!=="Object"&&(r={data:r});let n=null;r.compressed&&(n={minFilter:"linear",mipmapFilter:r.data.length>1?"nearest":"linear"});let{width:o,height:s}=r.data,a=e.createTexture({...r,sampler:{...JO,...n,...i},mipLevels:e.getMipLevelCount(o,s)});return e.type==="webgl"?a.generateMipmapsWebGL():e.type==="webgpu"&&e.generateMipmapsWebGPU(a),zp[a.id]=t,a}function DT(t,e){!e||!(e instanceof N)||zp[e.id]===t&&(e.delete(),delete zp[e.id])}var QO={boolean:{validate(t,e){return!0},equal(t,e,r){return!!t==!!e}},number:{validate(t,e){return Number.isFinite(t)&&(!("max"in e)||t<=e.max)&&(!("min"in e)||t>=e.min)}},color:{validate(t,e){return e.optional&&!t||jp(t)&&(t.length===3||t.length===4)},equal(t,e,r){return oe(t,e,1)}},accessor:{validate(t,e){let r=kl(t);return r==="function"||r===kl(e.value)},equal(t,e,r){return typeof e=="function"?!0:oe(t,e,1)}},array:{validate(t,e){return e.optional&&!t||jp(t)},equal(t,e,r){let{compare:i}=r,n=Number.isInteger(i)?i:i?1:0;return i?oe(t,e,n):t===e}},object:{equal(t,e,r){if(r.ignore)return!0;let{compare:i}=r,n=Number.isInteger(i)?i:i?1:0;return i?oe(t,e,n):t===e}},function:{validate(t,e){return e.optional&&!t||typeof t=="function"},equal(t,e,r){return!r.compare&&r.ignore!==!1||t===e}},data:{transform:(t,e,r)=>{if(!t)return t;let{dataTransform:i}=r.props;return i?i(t):typeof t.shape=="string"&&t.shape.endsWith("-table")&&Array.isArray(t.data)?t.data:t}},image:{transform:(t,e,r)=>{let i=r.context;return!i||!i.device?null:NT(r.id,i.device,t,{...e.parameters,...r.props.textureParameters})},release:(t,e,r)=>{DT(r.id,t)}}};function UT(t){let e={},r={},i={};for(let[n,o]of Object.entries(t)){let s=o?.deprecatedFor;if(s)i[n]=Array.isArray(s)?s:[s];else{let a=ZO(n,o);e[n]=a,r[n]=a.value}}return{propTypes:e,defaultProps:r,deprecatedProps:i}}function ZO(t,e){switch(kl(e)){case"object":return gs(t,e);case"array":return gs(t,{type:"array",value:e,compare:!1});case"boolean":return gs(t,{type:"boolean",value:e});case"number":return gs(t,{type:"number",value:e});case"function":return gs(t,{type:"function",value:e,compare:!0});default:return{name:t,type:"unknown",value:e}}}function gs(t,e){return"type"in e?{name:t,...QO[e.type],...e}:"value"in e?{name:t,type:kl(e.value),...e}:{name:t,type:"object",value:e}}function jp(t){return Array.isArray(t)||ArrayBuffer.isView(t)}function kl(t){return jp(t)?"array":t===null?"null":typeof t}function kT(t,e){let r;for(let o=e.length-1;o>=0;o--){let s=e[o];"extensions"in s&&(r=s.extensions)}let i=Wp(t.constructor,r),n=Object.create(i);n[Gi]=t,n[Pt]={},n[ft]={};for(let o=0;o<e.length;++o){let s=e[o];for(let a in s)n[a]=s[a]}return Object.freeze(n),n}var qO="_mergedDefaultProps";function Wp(t,e){if(!(t instanceof Vl.constructor))return{};let r=qO;if(e)for(let n of e){let o=n.constructor;o&&(r+=`:${o.extensionName||o.name}`)}let i=VT(t,r);return i||(t[r]=eL(t,e||[]))}function eL(t,e){if(!t.prototype)return null;let i=Object.getPrototypeOf(t),n=Wp(i),o=VT(t,"defaultProps")||{},s=UT(o),a=Object.assign(Object.create(null),n,s.defaultProps),c=Object.assign(Object.create(null),n?.[et],s.propTypes),l=Object.assign(Object.create(null),n?.[Fc],s.deprecatedProps);for(let f of e){let u=Wp(f.constructor);u&&(Object.assign(a,u),Object.assign(c,u[et]),Object.assign(l,u[Fc]))}return tL(a,t),iL(a,c),rL(a,l),a[et]=c,a[Fc]=l,e.length===0&&!Gp(t,"_propTypes")&&(t._propTypes=c),a}function tL(t,e){let r=oL(e);Object.defineProperties(t,{id:{writable:!0,value:r}})}function rL(t,e){for(let r in e)Object.defineProperty(t,r,{enumerable:!1,set(i){let n=`${this.id}: ${r}`;for(let o of e[r])Gp(this,o)||(this[o]=i);P.deprecated(n,e[r].join("/"))()}})}function iL(t,e){let r={},i={};for(let n in e){let o=e[n],{name:s,value:a}=o;o.async&&(r[s]=a,i[s]=nL(s))}t[$t]=r,t[Pt]={},Object.defineProperties(t,i)}function nL(t){return{enumerable:!0,set(e){typeof e=="string"||e instanceof Promise||Il(e)?this[Pt][t]=e:this[ft][t]=e},get(){if(this[ft]){if(t in this[ft])return this[ft][t]||this[$t][t];if(t in this[Pt]){let e=this[Gi]&&this[Gi].internalState;if(e&&e.hasAsyncProp(t))return e.getAsyncProp(t)||this[$t][t]}}return this[$t][t]}}}function Gp(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function VT(t,e){return Gp(t,e)&&t[e]}function oL(t){let e=t.componentName;return e||P.warn(`${t.name}.componentName not specified`)(),e||t.name}var sL=0,ms=class{constructor(...e){this.props=kT(this,e),this.id=this.props.id,this.count=sL++}clone(e){let{props:r}=this,i={};for(let n in r[$t])n in r[ft]?i[n]=r[ft][n]:n in r[Pt]&&(i[n]=r[Pt][n]);return new this.constructor({...r,...i,...e})}};ms.componentName="Component";ms.defaultProps={};var Vl=ms;var aL=Object.freeze({}),_s=class{constructor(e){this.component=e,this.asyncProps={},this.onAsyncPropUpdated=()=>{},this.oldProps=null,this.oldAsyncProps=null}finalize(){for(let e in this.asyncProps){let r=this.asyncProps[e];r&&r.type&&r.type.release&&r.type.release(r.resolvedValue,r.type,this.component)}this.asyncProps={},this.component=null,this.resetOldProps()}getOldProps(){return this.oldAsyncProps||this.oldProps||aL}resetOldProps(){this.oldAsyncProps=null,this.oldProps=this.component?this.component.props:null}hasAsyncProp(e){return e in this.asyncProps}getAsyncProp(e){let r=this.asyncProps[e];return r&&r.resolvedValue}isAsyncPropLoading(e){if(e){let r=this.asyncProps[e];return!!(r&&r.pendingLoadCount>0&&r.pendingLoadCount!==r.resolvedLoadCount)}for(let r in this.asyncProps)if(this.isAsyncPropLoading(r))return!0;return!1}reloadAsyncProp(e,r){this._watchPromise(e,Promise.resolve(r))}setAsyncProps(e){this.component=e[Gi]||this.component;let r=e[ft]||{},i=e[Pt]||e,n=e[$t]||{};for(let o in r){let s=r[o];this._createAsyncPropData(o,n[o]),this._updateAsyncProp(o,s),r[o]=this.getAsyncProp(o)}for(let o in i){let s=i[o];this._createAsyncPropData(o,n[o]),this._updateAsyncProp(o,s)}}_fetch(e,r){return null}_onResolve(e,r){}_onError(e,r){}_updateAsyncProp(e,r){if(this._didAsyncInputValueChange(e,r)){if(typeof r=="string"&&(r=this._fetch(e,r)),r instanceof Promise){this._watchPromise(e,r);return}if(Il(r)){this._resolveAsyncIterable(e,r);return}this._setPropValue(e,r)}}_freezeAsyncOldProps(){if(!this.oldAsyncProps&&this.oldProps){this.oldAsyncProps=Object.create(this.oldProps);for(let e in this.asyncProps)Object.defineProperty(this.oldAsyncProps,e,{enumerable:!0,value:this.oldProps[e]})}}_didAsyncInputValueChange(e,r){let i=this.asyncProps[e];return r===i.resolvedValue||r===i.lastValue?!1:(i.lastValue=r,!0)}_setPropValue(e,r){this._freezeAsyncOldProps();let i=this.asyncProps[e];i&&(r=this._postProcessValue(i,r),i.resolvedValue=r,i.pendingLoadCount++,i.resolvedLoadCount=i.pendingLoadCount)}_setAsyncPropValue(e,r,i){let n=this.asyncProps[e];n&&i>=n.resolvedLoadCount&&r!==void 0&&(this._freezeAsyncOldProps(),n.resolvedValue=r,n.resolvedLoadCount=i,this.onAsyncPropUpdated(e,r))}_watchPromise(e,r){let i=this.asyncProps[e];if(i){i.pendingLoadCount++;let n=i.pendingLoadCount;r.then(o=>{this.component&&(o=this._postProcessValue(i,o),this._setAsyncPropValue(e,o,n),this._onResolve(e,o))}).catch(o=>{this._onError(e,o)})}}async _resolveAsyncIterable(e,r){if(e!=="data"){this._setPropValue(e,r);return}let i=this.asyncProps[e];if(!i)return;i.pendingLoadCount++;let n=i.pendingLoadCount,o=[],s=0;for await(let a of r){if(!this.component)return;let{dataTransform:c}=this.component.props;c?o=c(a,o):o=o.concat(a),Object.defineProperty(o,"__diff",{enumerable:!1,value:[{startRow:s,endRow:o.length}]}),s=o.length,this._setAsyncPropValue(e,o,n)}this._onResolve(e,o)}_postProcessValue(e,r){let i=e.type;return i&&this.component&&(i.release&&i.release(e.resolvedValue,i,this.component),i.transform)?i.transform(r,i,this.component):r}_createAsyncPropData(e,r){if(!this.asyncProps[e]){let n=this.component&&this.component.props[et];this.asyncProps[e]={type:n&&n[e],lastValue:null,resolvedValue:r,pendingLoadCount:0,resolvedLoadCount:0}}}};var bs=class extends _s{constructor({attributeManager:e,layer:r}){super(r),this.attributeManager=e,this.needsRedraw=!0,this.needsUpdate=!0,this.subLayers=null,this.usesPickingColorCache=!1}get layer(){return this.component}_fetch(e,r){let i=this.layer,n=i?.props.fetch;return n?n(r,{propName:e,layer:i}):super._fetch(e,r)}_onResolve(e,r){let i=this.layer;if(i){let n=i.props.onDataLoad;e==="data"&&n&&n(r,{propName:e,layer:i})}}_onError(e,r){let i=this.layer;i&&i.raiseError(r,`loading ${e} of ${this.layer}`)}};var cL="layer.changeFlag",lL="layer.initialize",fL="layer.update",uL="layer.finalize",dL="layer.matched",HT=2**24-1,hL=Object.freeze([]),pL=Rt(({oldViewport:t,viewport:e})=>t.equals(e)),mt=new Uint8ClampedArray(0),gL={data:{type:"data",value:hL,async:!0},dataComparator:{type:"function",value:null,optional:!0},_dataDiff:{type:"function",value:t=>t&&t.__diff,optional:!0},dataTransform:{type:"function",value:null,optional:!0},onDataLoad:{type:"function",value:null,optional:!0},onError:{type:"function",value:null,optional:!0},fetch:{type:"function",value:(t,{propName:e,layer:r,loaders:i,loadOptions:n,signal:o})=>{let{resourceManager:s}=r.context;n=n||r.getLoadOptions(),i=i||r.props.loaders,o&&(n={...n,core:{...n?.core,fetch:{...n?.core?.fetch,signal:o}}});let a=s.contains(t);return!a&&!n&&(s.add({resourceId:t,data:ir(t,i),persistent:!1}),a=!0),a?s.subscribe({resourceId:t,onChange:c=>r.internalState?.reloadAsyncProp(e,c),consumerId:r.id,requestId:e}):ir(t,i,n)}},updateTriggers:{},visible:!0,pickable:!1,opacity:{type:"number",min:0,max:1,value:1},operation:"draw",onHover:{type:"function",value:null,optional:!0},onClick:{type:"function",value:null,optional:!0},onDragStart:{type:"function",value:null,optional:!0},onDrag:{type:"function",value:null,optional:!0},onDragEnd:{type:"function",value:null,optional:!0},coordinateSystem:"default",coordinateOrigin:{type:"array",value:[0,0,0],compare:!0},modelMatrix:{type:"array",value:null,compare:!0,optional:!0},wrapLongitude:!1,positionFormat:"XYZ",colorFormat:"RGBA",parameters:{type:"object",value:{},optional:!0,compare:2},loadOptions:{type:"object",value:null,optional:!0,ignore:!0},transitions:null,extensions:[],loaders:{type:"array",value:[],optional:!0,ignore:!0},getPolygonOffset:{type:"function",value:({layerIndex:t})=>[0,-t*100]},highlightedObjectIndex:null,autoHighlight:!1,highlightColor:{type:"accessor",value:[0,0,128,128]}},As=class extends Vl{constructor(){super(...arguments),this.internalState=null,this.lifecycle=br.NO_STATE,this.parent=null}static get componentName(){return Object.prototype.hasOwnProperty.call(this,"layerName")?this.layerName:""}get root(){let e=this;for(;e.parent;)e=e.parent;return e}toString(){return`${this.constructor.layerName||this.constructor.name}({id: '${this.props.id}'})`}project(e){z(this.internalState);let r=this.internalState.viewport||this.context.viewport,i=wc(e,{viewport:r,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem}),[n,o,s]=Ui(i,r.pixelProjectionMatrix);return e.length===2?[n,o]:[n,o,s]}unproject(e){return z(this.internalState),(this.internalState.viewport||this.context.viewport).unproject(e)}projectPosition(e,r){z(this.internalState);let i=this.internalState.viewport||this.context.viewport;return mx(e,{viewport:i,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem,...r})}get isComposite(){return!1}get isDrawable(){return!0}setState(e){this.setChangeFlags({stateChanged:!0}),Object.assign(this.state,e),this.setNeedsRedraw()}setNeedsRedraw(){this.internalState&&(this.internalState.needsRedraw=!0)}setNeedsUpdate(){this.internalState&&(this.context.layerManager.setNeedsUpdate(String(this)),this.internalState.needsUpdate=!0)}get isLoaded(){return this.internalState?!this.internalState.isAsyncPropLoading():!1}get wrapLongitude(){return this.props.wrapLongitude}isPickable(){return this.props.pickable&&this.props.visible}getModels(){let e=this.state;return e&&(e.models||e.model&&[e.model])||[]}setShaderModuleProps(...e){for(let r of this.getModels())r.shaderInputs.setProps(...e)}getAttributeManager(){return this.internalState&&this.internalState.attributeManager}getCurrentLayer(){return this.internalState&&this.internalState.layer}getLoadOptions(){return this.props.loadOptions}use64bitPositions(){let{coordinateSystem:e}=this.props;return e==="default"||e==="lnglat"||e==="cartesian"}onHover(e,r){return this.props.onHover&&this.props.onHover(e,r)||!1}onClick(e,r){return this.props.onClick&&this.props.onClick(e,r)||!1}nullPickingColor(){return[0,0,0]}encodePickingColor(e,r=[]){return r[0]=e+1&255,r[1]=e+1>>8&255,r[2]=e+1>>8>>8&255,r}decodePickingColor(e){z(e instanceof Uint8Array);let[r,i,n]=e;return r+i*256+n*65536-1}getNumInstances(){return Number.isFinite(this.props.numInstances)?this.props.numInstances:this.state&&this.state.numInstances!==void 0?this.state.numInstances:FT(this.props.data)}getStartIndices(){return this.props.startIndices?this.props.startIndices:this.state&&this.state.startIndices?this.state.startIndices:null}getBounds(){return this.getAttributeManager()?.getBounds(["positions","instancePositions"])}getShaders(e){e=Hp(e,{disableWarnings:!0,modules:this.context.defaultShaderModules});for(let r of this.props.extensions)e=Hp(e,r.getShaders.call(this,r));return e}shouldUpdateState(e){return e.changeFlags.propsOrDataChanged}updateState(e){let r=this.getAttributeManager(),{dataChanged:i}=e.changeFlags;if(i&&r)if(Array.isArray(i))for(let n of i)r.invalidateAll(n);else r.invalidateAll();if(r){let{props:n}=e,o=this.internalState.hasPickingBuffer,s=Number.isInteger(n.highlightedObjectIndex)||!!n.pickable||n.extensions.some(a=>a.getNeedsPickingBuffer.call(this,a));if(o!==s){this.internalState.hasPickingBuffer=s;let{pickingColors:a,instancePickingColors:c}=r.attributes,l=a||c;l&&(s&&l.constant&&(l.constant=!1,r.invalidate(l.id)),!l.value&&!s&&(l.constant=!0,l.value=[0,0,0]))}}}finalizeState(e){for(let i of this.getModels())i.destroy();let r=this.getAttributeManager();r&&r.finalize(),this.context&&this.context.resourceManager.unsubscribe({consumerId:this.id}),this.internalState&&(this.internalState.uniformTransitions.clear(),this.internalState.finalize())}draw(e){for(let r of this.getModels())r.draw(e.renderPass)}getPickingInfo({info:e,mode:r,sourceLayer:i}){let{index:n}=e;return n>=0&&Array.isArray(this.props.data)&&(e.object=this.props.data[n]),e}raiseError(e,r){r&&(e=new Error(`${r}: ${e.message}`,{cause:e})),this.props.onError?.(e)||this.context?.onError?.(e,this)}getNeedsRedraw(e={clearRedrawFlags:!1}){return this._getNeedsRedraw(e)}needsUpdate(){return this.internalState?this.internalState.needsUpdate||this.hasUniformTransition()||this.shouldUpdateState(this._getUpdateParams()):!1}hasUniformTransition(){return this.internalState?.uniformTransitions.active||!1}activateViewport(e){if(!this.internalState)return;let r=this.internalState.viewport;this.internalState.viewport=e,(!r||!pL({oldViewport:r,viewport:e}))&&(this.setChangeFlags({viewportChanged:!0}),this.isComposite?this.needsUpdate()&&this.setNeedsUpdate():this._update())}invalidateAttribute(e="all"){let r=this.getAttributeManager();r&&(e==="all"?r.invalidateAll():r.invalidate(e))}updateAttributes(e){let r=!1;for(let i in e)e[i].layoutChanged()&&(r=!0);for(let i of this.getModels())this._setModelAttributes(i,e,r)}_updateAttributes(){let e=this.getAttributeManager();if(!e)return;let r=this.props,i=this.getNumInstances(),n=this.getStartIndices();e.update({data:r.data,numInstances:i,startIndices:n,props:r,transitions:r.transitions,buffers:r.data.attributes,context:this});let o=e.getChangedAttributes({clearChangedFlags:!0});this.updateAttributes(o)}_updateAttributeTransition(){let e=this.getAttributeManager();e&&e.updateTransition()}_updateUniformTransition(){let{uniformTransitions:e}=this.internalState;if(e.active){let r=e.update(),i=Object.create(this.props);for(let n in r)Object.defineProperty(i,n,{value:r[n]});return i}return this.props}calculateInstancePickingColors(e,{numInstances:r}){if(e.constant)return;let i=Math.floor(mt.length/4);if(this.internalState.usesPickingColorCache=!0,i<r){r>HT&&P.warn("Layer has too many data objects. Picking might not be able to distinguish all objects.")(),mt=lt.allocate(mt,r,{size:4,copy:!0,maxCount:Math.max(r,HT)});let n=Math.floor(mt.length/4),o=[0,0,0];for(let s=i;s<n;s++)this.encodePickingColor(s,o),mt[s*4+0]=o[0],mt[s*4+1]=o[1],mt[s*4+2]=o[2],mt[s*4+3]=0}e.value=mt.subarray(0,r*4)}_setModelAttributes(e,r,i=!1){if(!Object.keys(r).length)return;if(i){let a=this.getAttributeManager();e.setBufferLayout(a.getBufferLayouts(e)),r=a.getAttributes()}let n=e.userData?.excludeAttributes||{},o={},s={};for(let a in r){if(n[a])continue;let c=r[a].getValue();for(let l in c){let f=c[l];f instanceof F?r[a].settings.isIndexed?e.setIndexBuffer(f):o[l]=f:f&&(s[l]=f)}}e.setAttributes(o),e.setConstantAttributes(s)}disablePickingIndex(e){let r=this.props.data;if(!("attributes"in r)){this._disablePickingIndex(e);return}let{pickingColors:i,instancePickingColors:n}=this.getAttributeManager().attributes,o=i||n,s=o&&r.attributes&&r.attributes[o.id];if(s&&s.value){let a=s.value,c=this.encodePickingColor(e);for(let l=0;l<r.length;l++){let f=o.getVertexOffset(l);a[f]===c[0]&&a[f+1]===c[1]&&a[f+2]===c[2]&&this._disablePickingIndex(l)}}else this._disablePickingIndex(e)}_disablePickingIndex(e){let{pickingColors:r,instancePickingColors:i}=this.getAttributeManager().attributes,n=r||i;if(!n)return;let o=n.getVertexOffset(e),s=n.getVertexOffset(e+1);n.buffer.write(new Uint8Array(s-o),o)}restorePickingColors(){let{pickingColors:e,instancePickingColors:r}=this.getAttributeManager().attributes,i=e||r;i&&(this.internalState.usesPickingColorCache&&i.value.buffer!==mt.buffer&&(i.value=mt.subarray(0,i.value.length)),i.updateSubBuffer({startOffset:0}))}_initialize(){z(!this.internalState),te(lL,this);let e=this._getAttributeManager();e&&e.addInstanced({instancePickingColors:{type:"uint8",size:4,noAlloc:!0,update:this.calculateInstancePickingColors}}),this.internalState=new bs({attributeManager:e,layer:this}),this._clearChangeFlags(),this.state={},Object.defineProperty(this.state,"attributeManager",{get:()=>(P.deprecated("layer.state.attributeManager","layer.getAttributeManager()")(),e)}),this.internalState.uniformTransitions=new ps(this.context.timeline),this.internalState.onAsyncPropUpdated=this._onAsyncPropUpdated.bind(this),this.internalState.setAsyncProps(this.props),this.initializeState(this.context);for(let r of this.props.extensions)r.initializeState.call(this,this.context,r);this.setChangeFlags({dataChanged:"init",propsChanged:"init",viewportChanged:!0,extensionsChanged:!0}),this._update()}_transferState(e){te(dL,this,this===e);let{state:r,internalState:i}=e;this!==e&&(this.internalState=i,this.state=r,this.internalState.setAsyncProps(this.props),this._diffProps(this.props,this.internalState.getOldProps()))}_update(){let e=this.needsUpdate();if(te(fL,this,e),!e)return;this.context.stats.get("Layer updates").incrementCount();let r=this.props,i=this.context,n=this.internalState,o=i.viewport,s=this._updateUniformTransition();n.propsInTransition=s,i.viewport=n.viewport||o,this.props=s;try{let a=this._getUpdateParams(),c=this.getModels();if(i.device)this.updateState(a);else try{this.updateState(a)}catch{}for(let f of this.props.extensions)f.updateState.call(this,a,f);this.setNeedsRedraw(),this._updateAttributes();let l=this.getModels()[0]!==c[0];this._postUpdate(a,l)}finally{i.viewport=o,this.props=r,this._clearChangeFlags(),n.needsUpdate=!1,n.resetOldProps()}}_finalize(){te(uL,this),this.finalizeState(this.context);for(let e of this.props.extensions)e.finalizeState.call(this,this.context,e)}_drawLayer({renderPass:e,shaderModuleProps:r=null,uniforms:i={},parameters:n={}}){this._updateAttributeTransition();let o=this.props,s=this.context;this.props=this.internalState.propsInTransition||o;try{r&&this.setShaderModuleProps(r);let{getPolygonOffset:a}=this.props,c=a&&a(i)||[0,0];s.device instanceof yr&&s.device.setParametersWebGL({polygonOffset:c});let l=s.device instanceof yr?null:mL(n);if(_L(this.getModels(),e,n,l),s.device instanceof yr)s.device.withParametersWebGL(n,()=>{let f={renderPass:e,shaderModuleProps:r,uniforms:i,parameters:n,context:s};for(let u of this.props.extensions)u.draw.call(this,f,u);this.draw(f)});else{l?.renderPassParameters&&e.setParameters(l.renderPassParameters);let f={renderPass:e,shaderModuleProps:r,uniforms:i,parameters:n,context:s};for(let u of this.props.extensions)u.draw.call(this,f,u);this.draw(f)}}finally{this.props=o}}getChangeFlags(){return this.internalState?.changeFlags}setChangeFlags(e){if(!this.internalState)return;let{changeFlags:r}=this.internalState;for(let n in e)if(e[n]){let o=!1;switch(n){case"dataChanged":let s=e[n],a=r[n];s&&Array.isArray(a)&&(r.dataChanged=Array.isArray(s)?a.concat(s):s,o=!0);default:r[n]||(r[n]=e[n],o=!0)}o&&te(cL,this,n,e)}let i=!!(r.dataChanged||r.updateTriggersChanged||r.propsChanged||r.extensionsChanged);r.propsOrDataChanged=i,r.somethingChanged=i||r.viewportChanged||r.stateChanged}_clearChangeFlags(){this.internalState.changeFlags={dataChanged:!1,propsChanged:!1,updateTriggersChanged:!1,viewportChanged:!1,stateChanged:!1,extensionsChanged:!1,propsOrDataChanged:!1,somethingChanged:!1}}_diffProps(e,r){let i=OT(e,r);if(i.updateTriggersChanged)for(let n in i.updateTriggersChanged)i.updateTriggersChanged[n]&&this.invalidateAttribute(n);if(i.transitionsChanged)for(let n in i.transitionsChanged)this.internalState.uniformTransitions.add(n,r[n],e[n],e.transitions?.[n]);return this.setChangeFlags(i)}validateProps(){BT(this.props)}updateAutoHighlight(e){this.props.autoHighlight&&!Number.isInteger(this.props.highlightedObjectIndex)&&this._updateAutoHighlight(e)}_updateAutoHighlight(e){let r={highlightedObjectColor:e.picked?e.color:null},{highlightColor:i}=this.props;e.picked&&typeof i=="function"&&(r.highlightColor=i(e)),this.setShaderModuleProps({picking:r}),this.setNeedsRedraw()}_getAttributeManager(){let e=this.context;return new us(e.device,{id:this.props.id,stats:e.stats,timeline:e.timeline})}_postUpdate(e,r){let{props:i,oldProps:n}=e,o=this.state.model;o?.isInstanced&&o.setInstanceCount(this.getNumInstances());let{autoHighlight:s,highlightedObjectIndex:a,highlightColor:c}=i;if(r||n.autoHighlight!==s||n.highlightedObjectIndex!==a||n.highlightColor!==c){let l={};Array.isArray(c)&&(l.highlightColor=c),(r||n.autoHighlight!==s||a!==n.highlightedObjectIndex)&&(l.highlightedObjectColor=Number.isFinite(a)&&a>=0?this.encodePickingColor(a):null),this.setShaderModuleProps({picking:l})}}_getUpdateParams(){return{props:this.props,oldProps:this.internalState.getOldProps(),context:this.context,changeFlags:this.internalState.changeFlags}}_getNeedsRedraw(e){if(!this.internalState)return!1;let r=!1;r=r||this.internalState.needsRedraw&&this.id;let i=this.getAttributeManager(),n=i?i.getNeedsRedraw(e):!1;if(r=r||n,r)for(let o of this.props.extensions)o.onNeedsRedraw.call(this,o);return this.internalState.needsRedraw=this.internalState.needsRedraw&&!e.clearRedrawFlags,r}_onAsyncPropUpdated(){this._diffProps(this.props,this.internalState.getOldProps()),this.setNeedsUpdate()}};As.defaultProps=gL;As.layerName="Layer";var we=As;function mL(t){let{blendConstant:e,...r}=t;return e?{pipelineParameters:r,renderPassParameters:{blendConstant:e}}:{pipelineParameters:r}}function _L(t,e,r,i){for(let n of t)n.device.type==="webgpu"?(bL(n,e),n.setParameters({...n.parameters,...i?.pipelineParameters})):n.setParameters(r)}function bL(t,e){let r=e.props.framebuffer||(e.framebuffer??null);if(!r)return;let i=r.colorAttachments.map(s=>s?.texture?.format??null),n=r.depthStencilAttachment?.texture?.format,o=t;(!AL(o.props.colorAttachmentFormats,i)||o.props.depthStencilAttachmentFormat!==n)&&(o.props.colorAttachmentFormats=i,o.props.depthStencilAttachmentFormat=n,o._setPipelineNeedsUpdate("attachment formats"))}function AL(t,e){if(t===e)return!0;if(!t||!e||t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}var yL="compositeLayer.renderLayers",Hl=class extends we{get isComposite(){return!0}get isDrawable(){return!1}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(e=>e.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(e){}setState(e){super.setState(e),this.setNeedsUpdate()}getPickingInfo({info:e}){let{object:r}=e;return r&&r.__source&&r.__source.parent&&r.__source.parent.id===this.id&&(e.object=r.__source.object,e.index=r.__source.index),e}filterSubLayer(e){return!0}shouldRenderSubLayer(e,r){return r&&r.length}getSubLayerClass(e,r){let{_subLayerProps:i}=this.props;return i&&i[e]&&i[e].type||r}getSubLayerRow(e,r,i){return e.__source={parent:this,object:r,index:i},e}getSubLayerAccessor(e){if(typeof e=="function"){let r={index:-1,data:this.props.data,target:[]};return(i,n)=>i&&i.__source?(r.index=i.__source.index,e(i.__source.object,r)):e(i,n)}return e}getSubLayerProps(e={}){let{opacity:r,pickable:i,visible:n,parameters:o,getPolygonOffset:s,highlightedObjectIndex:a,autoHighlight:c,highlightColor:l,coordinateSystem:f,coordinateOrigin:u,wrapLongitude:d,positionFormat:h,modelMatrix:p,extensions:g,fetch:m,operation:b,_subLayerProps:y}=this.props,_={id:"",updateTriggers:{},opacity:r,pickable:i,visible:n,parameters:o,getPolygonOffset:s,highlightedObjectIndex:a,autoHighlight:c,highlightColor:l,coordinateSystem:f,coordinateOrigin:u,wrapLongitude:d,positionFormat:h,modelMatrix:p,extensions:g,fetch:m,operation:b},A=y&&e.id&&y[e.id],T=A&&A.updateTriggers,S=e.id||"sublayer";if(A){let v=this.props[et],M=e.type?e.type._propTypes:{};for(let C in A){let R=M[C]||v[C];R&&R.type==="accessor"&&(A[C]=this.getSubLayerAccessor(A[C]))}}Object.assign(_,e,A),_.id=`${this.props.id}-${S}`,_.updateTriggers={all:this.props.updateTriggers?.all,...e.updateTriggers,...T};for(let v of g){let M=v.getSubLayerProps.call(this,v);M&&Object.assign(_,M,{updateTriggers:Object.assign(_.updateTriggers,M.updateTriggers)})}return _}_updateAutoHighlight(e){for(let r of this.getSubLayers())r.updateAutoHighlight(e)}_getAttributeManager(){return null}_postUpdate(e,r){let i=this.internalState.subLayers,n=!i||this.needsUpdate();if(n){let o=this.renderLayers();i=tt(o,Boolean),this.internalState.subLayers=i}te(yL,this,n,i);for(let o of i)o.parent=this}};Hl.layerName="CompositeLayer";var ni=Hl;var Xp=Math.PI/180,xL=180/Math.PI;function zT(t,e=0){let r=Math.min(180,t)*Xp;return Jt*2*Math.sin(r/2)*Math.pow(2,e)}function jT(t,e=0){let r=t/Math.pow(2,e);return Math.asin(Math.min(1,r/Jt/2))*2*xL}var $p=class extends zo{constructor(e){let{startPanPos:r,...i}=e;i.normalize=!1,super(i),r!==void 0&&(this._state.startPanPos=r)}panStart({pos:e}){let{latitude:r,longitude:i,zoom:n}=this.getViewportProps();return this._getUpdatedState({startPanLngLat:[i,r],startPanPos:e,startZoom:n})}pan({pos:e,startPos:r}){let i=this.getState(),n=i.startPanLngLat||this._unproject(r);if(!n)return this;let o=i.startZoom??this.getViewportProps().zoom,s=i.startPanPos||r,a=[n[0],n[1],o],l=this.makeViewport(this.getViewportProps()).panByPosition(a,e,s);return this._getUpdatedState(l)}panEnd(){return this._getUpdatedState({startPanLngLat:null,startPanPos:null,startZoom:null})}zoom({scale:e}){let i=(this.getState().startZoom||this.getViewportProps().zoom)+Math.log2(e);return this._getUpdatedState({zoom:i})}applyConstraints(e){let{longitude:r,latitude:i,maxBounds:n}=e;if(e.zoom=this._constrainZoom(e.zoom,e),(r<-180||r>180)&&(e.longitude=Po(r+180,360)-180),e.latitude=re(i,-Me,Me),n&&(e.longitude=re(e.longitude,n[0][0],n[1][0]),e.latitude=re(e.latitude,n[0][1],n[1][1])),n){let o=e.zoom-wt(i),s=n[1][0]-n[0][0],a=n[1][1]-n[0][1];if(a>0&&a<Me*2){let c=Math.min(jT(e.height,o),a)/2;e.latitude=re(e.latitude,n[0][1]+c,n[1][1]-c)}if(s>0&&s<360){let c=Math.min(jT(e.width/Math.cos(e.latitude*Xp),o),s)/2;e.longitude=re(e.longitude,n[0][0]+c,n[1][0]-c)}}return e.latitude!==i&&(e.zoom+=wt(e.latitude)-wt(i)),e}_constrainZoom(e,r){r||(r=this.getViewportProps());let{latitude:i,maxZoom:n,maxBounds:o}=r,{minZoom:s}=r,a=wt(0),c=wt(i)-a;if(o!==null&&r.width>0&&r.height>0){let f=o[0][1],u=o[1][1],d=Math.sign(f)===Math.sign(u)?Math.min(Math.abs(f),Math.abs(u)):0,h=zT(o[1][0]-o[0][0])*Math.cos(d*Xp),p=zT(o[1][1]-o[0][1]);h>0&&(s=Math.max(s,Math.log2(r.width/h)+a)),p>0&&(s=Math.max(s,Math.log2(r.height/p)+a)),s>n&&(s=n)}return re(e,s+c,n+c)}},ys=class extends ei{constructor(){super(...arguments),this.ControllerState=$p,this.transition={transitionDuration:300,transitionInterpolator:new Qt(["longitude","latitude","zoom"])},this.dragMode="pan"}setProps(e){super.setProps(e),this.dragRotate=!1,this.touchRotate=!1}};var TL={cullMode:"back"},zl=class extends Zr{constructor(e={}){super({...e,parameters:{...TL,...e.parameters}})}getViewportType(e){return e.zoom>12?ji:kc}get ControllerType(){return ys}};zl.displayName="GlobeView";var Kp=zl;L();var Sr=class{constructor(e){this.indexStarts=[0],this.vertexStarts=[0],this.vertexCount=0,this.instanceCount=0;let{attributes:r={}}=e;this.typedArrayManager=lt,this.attributes={},this._attributeDefs=r,this.opts=e,this.updateGeometry(e)}updateGeometry(e){Object.assign(this.opts,e);let{data:r,buffers:i={},getGeometry:n,geometryBuffer:o,positionFormat:s,dataChanged:a,normalize:c=!0}=this.opts;if(this.data=r,this.getGeometry=n,this.positionSize=o&&o.size||(s==="XY"?2:3),this.buffers=i,this.normalize=c,o&&(z(r.startIndices),this.getGeometry=this.getGeometryFromBuffer(o),c||(i.vertexPositions=o)),this.geometryBuffer=i.vertexPositions,Array.isArray(a))for(let l of a)this._rebuildGeometry(l);else this._rebuildGeometry()}updatePartialGeometry({startRow:e,endRow:r}){this._rebuildGeometry({startRow:e,endRow:r})}getGeometryFromBuffer(e){let r=e.value||e;return ArrayBuffer.isView(r)?Bl(r,{size:this.positionSize,offset:e.offset,stride:e.stride,startIndices:this.data.startIndices}):null}_allocate(e,r){let{attributes:i,buffers:n,_attributeDefs:o,typedArrayManager:s}=this;for(let a in o)if(a in n)s.release(i[a]),i[a]=null;else{let c=o[a];c.copy=r,i[a]=s.allocate(i[a],e,c)}}_forEachGeometry(e,r,i){let{data:n,getGeometry:o}=this,{iterable:s,objectInfo:a}=Pe(n,r,i);for(let c of s){a.index++;let l=o?o(c,a):null;e(l,a.index)}}_rebuildGeometry(e){if(!this.data)return;let{indexStarts:r,vertexStarts:i,instanceCount:n}=this,{data:o,geometryBuffer:s}=this,{startRow:a=0,endRow:c=1/0}=e||{},l={};if(e||(r=[0],i=[0]),this.normalize||!s)this._forEachGeometry((u,d)=>{let h=u&&this.normalizeGeometry(u);l[d]=h,i[d+1]=i[d]+(h?this.getGeometrySize(h):0)},a,c),n=i[i.length-1];else if(i=o.startIndices,n=i[o.length]||0,ArrayBuffer.isView(s))n=n||s.length/this.positionSize;else if(s instanceof F){let u=this.positionSize*4;n=n||s.byteLength/u}else if(s.buffer){let u=s.stride||this.positionSize*4;n=n||s.buffer.byteLength/u}else if(s.value){let u=s.value,d=s.stride/u.BYTES_PER_ELEMENT||this.positionSize;n=n||u.length/d}this._allocate(n,!!e),this.indexStarts=r,this.vertexStarts=i,this.instanceCount=n;let f={};this._forEachGeometry((u,d)=>{let h=l[d]||u;f.vertexStart=i[d],f.indexStart=r[d];let p=d<i.length-1?i[d+1]:n;f.geometrySize=p-i[d],f.geometryIndex=d,this.updateGeometryAttributes(h,f)},a,c),this.vertexCount=r[r.length-1]}};var xs=class{constructor(e){z(e.id,"id is required"),this.id=e.id,this.type="custom",this.renderingMode=e.renderingMode||"3d",this.slot=e.slot,this.beforeId=e.beforeId,this.map=null}onAdd(e,r){this.map=e}render(e,r){this.map&&WT(this.map.__deck,this.map,this,r)}};var Yp="__UNDEFINED__";function qi(t){return t.props.beforeId?`deck-layer-group-before:${t.props.beforeId}`:t.props.slot?`deck-layer-group-slot:${t.props.slot}`:"deck-layer-group-last"}function GT(t,e,r){if(!t||!t.style||!t.style._loaded)return;let i=tt(r,Boolean);if(e!==r){let s=tt(e,Boolean),a=new Set(s.map(l=>qi(l))),c=new Set(i.map(l=>qi(l)));for(let l of a)c.has(l)||t.getLayer(l)&&t.removeLayer(l)}let n={};for(let s of i){let a=qi(s),c=t.getLayer(a);if(c){let l=c.implementation||c;n[a]=l}else{let l=new xs({id:a,slot:s.props.slot,beforeId:s.props.beforeId});n[a]=l,t.addLayer(l,s.props.beforeId)}}let o=t.style._order;for(let[s,a]of Object.entries(n)){let c=a.beforeId||Yp,l=c===Yp?o.length:o.indexOf(c);if(o.indexOf(s)!==l-1){let u=c===Yp?void 0:c;t.moveLayer(s,u)}}}var oi="mapbox",Jp=512,SL=Math.PI/180;function $T({map:t,deck:e}){if(t.__deck)return t.__deck;let r=e.props._customRender,i=e.props.onLoad,n={...e.props,_customRender:()=>{t.triggerRepaint(),r?.("")}};return n.views||(n.views=Ts(t)),Object.assign(n,{width:null,height:null,touchAction:"unset",viewState:en(t)}),e.isInitialized?XT(e,t):n.onLoad=()=>{i?.(),XT(e,t)},e.setProps(n),t.__deck=e,t.on("render",()=>{e.isInitialized&&CL(e,t)}),e}function XT(t,e){let r=()=>{t.isInitialized?vL(t,e):e.off("move",r)};e.on("move",r)}function KT(t){t.__deck?.finalize(),t.__deck=null}function jl(t,e){return e?{depthWriteEnabled:!0,depthCompare:"less-equal",depthBias:0,blend:!0,blendColorSrcFactor:"src-alpha",blendColorDstFactor:"one-minus-src-alpha",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one-minus-src-alpha",blendColorOperation:"add",blendAlphaOperation:"add"}:{}}function WT(t,e,r,i){if(!t.isInitialized)return;let{currentViewport:n}=t.userData,o=!1;n||(n=YT(t,e,i),t.userData.currentViewport=n,o=!0),n&&t._drawLayers("mapbox-repaint",{viewports:[n],layerFilter:s=>{if(t.props.layerFilter&&!t.props.layerFilter(s))return!1;let a=s.layer;return a.props.beforeId===r.beforeId&&a.props.slot===r.slot},clearStack:o,clearCanvas:!1})}function Qp(t){let e=t.getProjection?.(),r=e?.type||e?.name;if(r==="globe")return"globe";if(r&&r!=="mercator")throw new Error("Unsupported projection");return"mercator"}function Ts(t){return Qp(t)==="globe"?new Kp({id:oi}):new Wo({id:oi})}function en(t){let{lng:e,lat:r}=t.getCenter(),i={longitude:(e+540)%360-180,latitude:r,zoom:t.getZoom(),bearing:t.getBearing(),pitch:t.getPitch(),padding:t.getPadding(),repeat:t.getRenderWorldCopies()};return t.getTerrain?.()&&EL(t,i),i}function EL(t,e){if(t.getFreeCameraOptions){let{position:r}=t.getFreeCameraOptions();if(!r||r.z===void 0)return;let i=t.transform.height,{longitude:n,latitude:o,pitch:s}=e,a=r.x*Jp,c=(1-r.y)*Jp,l=r.z*Jp,f=Le([n,o]),u=a-f[0],d=c-f[1],h=Math.sqrt(u*u+d*d),p=s*SL,g=1.5*i,m=p<.001?g*Math.cos(p)/l:g*Math.sin(p)/h;e.zoom=Math.log2(m);let b=g*Math.cos(p)/m,y=l-b;e.position=[0,0,y/$r(o)]}else typeof t.transform.elevation=="number"&&(e.position=[0,0,t.transform.elevation])}function YT(t,e,r){let i=en(e),n=t.getView(oi)||Ts(e);r&&(n.props.nearZMultiplier=.2);let o=r?.nearZ??e.transform._nearZ,s=r?.farZ??e.transform._farZ;return Number.isFinite(o)&&(i.nearZ=o/e.transform.height,i.farZ=s/e.transform.height),n.makeViewport({width:t.width,height:t.height,viewState:i})}function CL(t,e){let i=tt(t.props.layers,Boolean).some(a=>a&&!e.getLayer(qi(a))),n=t.getViewports(),o=n.findIndex(a=>a.id===oi),s=n.length>1||o<0;if(i||s){if(o>=0){n=n.slice();let a=YT(t,e);a?n[o]=a:n.splice(o,1)}t._drawLayers("mapbox-repaint",{viewports:n,layerFilter:a=>(!t.props.layerFilter||t.props.layerFilter(a))&&(a.viewport.id!==oi||!e.getLayer(qi(a.layer))),clearCanvas:!1})}else{let a=t.device,c=a?.gl;t.props.onBeforeRender?.({device:a,gl:c}),t.props.onAfterRender?.({device:a,gl:c})}t.userData.currentViewport=null}function vL(t,e){t.setProps({viewState:en(e)}),t.needsRedraw({clearRedrawFlags:!0})}var Ss=class{constructor(e){this._handleStyleChange=()=>{if(this._resolveLayers(this._map,this._deck,this._props.layers,this._props.layers),!this._map)return;Qp(this._map)&&this._deck?.setProps({views:this._getViews(this._map)})},this._updateContainerSize=()=>{if(this._map&&this._container){let{clientWidth:i,clientHeight:n}=this._map.getContainer();Object.assign(this._container.style,{width:`${i}px`,height:`${n}px`})}},this._updateViewState=()=>{let i=this._deck,n=this._map;i&&n&&(i.setProps({views:this._getViews(n),viewState:en(n)}),i.isInitialized&&i.redraw())},this._handleMouseEvent=i=>{let n=this._deck;if(!n||!n.isInitialized)return;let o={type:i.type,offsetCenter:i.point,srcEvent:i},s=this._lastMouseDownPoint;switch(!i.point&&s&&(o.deltaX=i.originalEvent.clientX-s.clientX,o.deltaY=i.originalEvent.clientY-s.clientY,o.offsetCenter={x:s.x+o.deltaX,y:s.y+o.deltaY}),o.type){case"mousedown":n._onPointerDown(o),this._lastMouseDownPoint={...i.point,clientX:i.originalEvent.clientX,clientY:i.originalEvent.clientY};break;case"dragstart":o.type="panstart",n._onEvent(o);break;case"drag":o.type="panmove",n._onEvent(o);break;case"dragend":o.type="panend",n._onEvent(o);break;case"click":o.tapCount=1,n._onEvent(o);break;case"dblclick":o.type="click",o.tapCount=2,n._onEvent(o);break;case"mousemove":o.type="pointermove",n._onPointerMove(o);break;case"mouseout":o.type="pointerleave",n._onPointerMove(o);break;default:return}};let{interleaved:r=!1}=e;this._interleaved=r,this._props=this.filterProps(e)}filterProps(e){let{interleaved:r=!1,useDevicePixels:i,...n}=e;return!r&&i!==void 0&&(n.useDevicePixels=i),n}setProps(e){this._interleaved&&e.layers&&this._resolveLayers(this._map,this._deck,this._props.layers,e.layers),Object.assign(this._props,this.filterProps(e)),this._deck&&this._map&&this._deck.setProps({...this._props,views:this._getViews(this._map),parameters:{...jl(this._map,this._interleaved),...this._props.parameters}})}onAdd(e){return this._map=e,this._interleaved?this._onAddInterleaved(e):this._onAddOverlaid(e)}_onAddOverlaid(e){let r=document.createElement("div");return Object.assign(r.style,{position:"absolute",left:0,top:0,textAlign:"initial",pointerEvents:"none"}),this._container=r,this._deck=new wl({...this._props,parent:r,parameters:{...jl(e,!1),...this._props.parameters},views:this._getViews(e),viewState:en(e)}),e.on("resize",this._updateContainerSize),e.on("render",this._updateViewState),e.on("mousedown",this._handleMouseEvent),e.on("dragstart",this._handleMouseEvent),e.on("drag",this._handleMouseEvent),e.on("dragend",this._handleMouseEvent),e.on("mousemove",this._handleMouseEvent),e.on("mouseout",this._handleMouseEvent),e.on("click",this._handleMouseEvent),e.on("dblclick",this._handleMouseEvent),this._updateContainerSize(),r}_onAddInterleaved(e){let r=e.painter.context.gl;return r instanceof WebGLRenderingContext&&P.warn("Incompatible basemap library. See: https://deck.gl/docs/api-reference/mapbox/overview#compatibility")(),this._deck=$T({map:e,deck:new wl({...this._props,views:this._getViews(e),gl:r,parameters:{...jl(e,!0),...this._props.parameters}})}),e.on("styledata",this._handleStyleChange),this._resolveLayers(e,this._deck,[],this._props.layers),document.createElement("div")}_resolveLayers(e,r,i,n){GT(e,i,n)}onRemove(){let e=this._map;e&&(this._interleaved?this._onRemoveInterleaved(e):this._onRemoveOverlaid(e)),this._deck=void 0,this._map=void 0,this._container=void 0}_onRemoveOverlaid(e){e.off("resize",this._updateContainerSize),e.off("render",this._updateViewState),e.off("mousedown",this._handleMouseEvent),e.off("dragstart",this._handleMouseEvent),e.off("drag",this._handleMouseEvent),e.off("dragend",this._handleMouseEvent),e.off("mousemove",this._handleMouseEvent),e.off("mouseout",this._handleMouseEvent),e.off("click",this._handleMouseEvent),e.off("dblclick",this._handleMouseEvent),this._deck?.finalize()}_onRemoveInterleaved(e){e.off("styledata",this._handleStyleChange),this._resolveLayers(e,this._deck,this._props.layers,[]),KT(e)}getDefaultPosition(){return"top-left"}pickObject(e){return z(this._deck),this._deck.pickObject(e)}pickMultipleObjects(e){return z(this._deck),this._deck.pickMultipleObjects(e)}pickObjects(e){return z(this._deck),this._deck.pickObjects(e)}finalize(){this._map&&this._map.removeControl(this)}getCanvas(){return this._map?this._interleaved?this._map.getCanvas():this._deck.getCanvas():null}_getViews(e){if(!this._props.views)return Ts(e);let r=Array.isArray(this._props.views)?this._props.views:[this._props.views];return r.some(n=>n.id===oi)?this._props.views:[Ts(e),...r]}};var JT=`layout(std140) uniform iconUniforms {
  float sizeScale;
  vec2 iconsTextureDim;
  float sizeBasis;
  float sizeMinPixels;
  float sizeMaxPixels;
  bool billboard;
  highp int sizeUnits;
  float alphaCutoff;
} icon;
`,QT={name:"icon",vs:JT,fs:JT,uniformTypes:{sizeScale:"f32",iconsTextureDim:"vec2<f32>",sizeBasis:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",billboard:"f32",sizeUnits:"i32",alphaCutoff:"f32"}};var ZT=`#version 300 es
#define SHADER_NAME icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in vec3 instancePickingColors;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float iconConstraint = icon.sizeBasis == 0.0 ? iconSize.x : iconSize.y;
float instanceScale = iconConstraint == 0.0 ? 0.0 : sizePixels / iconConstraint;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`;var qT=`#version 300 es
#define SHADER_NAME icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in float vColorMode;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
vec4 texColor = texture(iconsTexture, vTextureCoords);
vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);
float a = texColor.a * layer.opacity * vColor.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color, a);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;var eS=`struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, s), vec2<f32>(-s, c));
  return rotation * vertex;
}

struct Attributes {
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instancePickingColors: vec3<f32>,
  @location(7) instanceIconFrames: vec4<f32>,
  @location(8) instanceColorModes: f32,
  @location(9) instanceOffsets: vec2<f32>,
  @location(10) instancePixelOffset: vec2<f32>,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  // write geometry fields used by filters + FS
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = inp.instancePickingColors;

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  // convert size in meters to pixels, then clamp
  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );

  // scale icon height to match instanceSize
  let iconConstraint = select(iconSize.y, iconSize.x, icon.sizeBasis == 0.0);
  let instanceScale = select(sizePixels / iconConstraint, 0.0, iconConstraint == 0.0);

  // scale and rotate vertex in "pixel" units; then add per-instance pixel offset
  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  if (icon.billboard != 0) {
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0)); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);

    var offset = vec3<f32>(pixelOffset, 0.0);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipOffset = project_pixel_size_to_clipspace(offset.xy);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
    outp.position = pos;
  } else {
    var offset_common = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    // DECKGL_FILTER_SIZE(offset_common, geometry);
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offset_common); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);
    outp.position = pos;
  }

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.vColor = inp.instanceColors;
  // DECKGL_FILTER_COLOR(outp.vColor, geometry);

  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = inp.instancePickingColors;

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  // expose to deck.gl filter hooks
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);

  // if colorMode == 0, use pixel color from the texture
  // if colorMode == 1 (or picking), use texture as transparency mask
  let rgb = mix(texColor.rgb, inp.vColor.rgb, inp.vColorMode);
  let a = texColor.a * layer.opacity * inp.vColor.a;

  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`;var RL=1024,ML=4,tS=()=>{},rS={minFilter:"linear",mipmapFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},PL={x:0,y:0,width:0,height:0};function wL(t){return Math.pow(2,Math.ceil(Math.log2(t)))}function IL(t,e,r,i){let n=Math.min(r/e.width,i/e.height),o=Math.floor(e.width*n),s=Math.floor(e.height*n);return n===1?{image:e,width:o,height:s}:(t.canvas.height=s,t.canvas.width=o,t.clearRect(0,0,o,s),t.drawImage(e,0,0,e.width,e.height,0,0,o,s),{image:t.canvas,width:o,height:s})}function Es(t){return t&&(t.id||t.url)}function nS(t){let{device:e}=t;e.type==="webgl"?t.generateMipmapsWebGL():e.type==="webgpu"&&e.generateMipmapsWebGPU(t)}function BL(t,e,r,i){let{width:n,height:o,device:s}=t,a=s.createTexture({format:"rgba8unorm",width:e,height:r,sampler:i,mipLevels:s.getMipLevelCount(e,r)}),c=s.createCommandEncoder();c.copyTextureToTexture({sourceTexture:t,destinationTexture:a,width:n,height:o});let l=c.finish();return s.submit(l),nS(a),t.destroy(),a}function iS(t,e,r){for(let i=0;i<e.length;i++){let{icon:n,xOffset:o}=e[i],s=Es(n);t[s]={...n,x:o,y:r}}}function OL({icons:t,buffer:e,mapping:r={},xOffset:i=0,yOffset:n=0,rowHeight:o=0,canvasWidth:s}){let a=[];for(let c=0;c<t.length;c++){let l=t[c],f=Es(l);if(!r[f]){let{height:u,width:d}=l;i+d+e>s&&(iS(r,a,n),i=0,n=o+n+e,o=0,a=[]),a.push({icon:l,xOffset:i}),i=i+d+e,o=Math.max(o,u)}}return a.length>0&&iS(r,a,n),{mapping:r,rowHeight:o,xOffset:i,yOffset:n,canvasWidth:s,canvasHeight:wL(o+n+e)}}function LL(t,e,r){if(!t||!e)return null;r=r||{};let i={},{iterable:n,objectInfo:o}=Pe(t);for(let s of n){o.index++;let a=e(s,o),c=Es(a);if(!a)throw new Error("Icon is missing.");if(!a.url)throw new Error("Icon url is missing.");!i[c]&&(!r[c]||a.url!==r[c].url)&&(i[c]={...a,source:s,sourceIndex:o.index})}return i}var Cs=class{constructor(e,{onUpdate:r=tS,onError:i=tS}){this._loadOptions=null,this._texture=null,this._externalTexture=null,this._mapping={},this._samplerParameters=null,this._pendingCount=0,this._autoPacking=!1,this._xOffset=0,this._yOffset=0,this._rowHeight=0,this._buffer=ML,this._canvasWidth=RL,this._canvasHeight=0,this._canvas=null,this.device=e,this.onUpdate=r,this.onError=i}finalize(){this._texture?.delete()}getTexture(){return this._texture||this._externalTexture}getIconMapping(e){let r=this._autoPacking?Es(e):e;return this._mapping[r]||PL}setProps({loadOptions:e,autoPacking:r,iconAtlas:i,iconMapping:n,textureParameters:o}){e&&(this._loadOptions=e),r!==void 0&&(this._autoPacking=r),n&&(this._mapping=n),i&&(this._texture?.delete(),this._texture=null,this._externalTexture=i),o&&(this._samplerParameters=o)}get isLoaded(){return this._pendingCount===0}packIcons(e,r){if(!this._autoPacking||typeof document>"u")return;let i=Object.values(LL(e,r,this._mapping)||{});if(i.length>0){let{mapping:n,xOffset:o,yOffset:s,rowHeight:a,canvasHeight:c}=OL({icons:i,buffer:this._buffer,canvasWidth:this._canvasWidth,mapping:this._mapping,rowHeight:this._rowHeight,xOffset:this._xOffset,yOffset:this._yOffset});this._rowHeight=a,this._mapping=n,this._xOffset=o,this._yOffset=s,this._canvasHeight=c,this._texture||(this._texture=this.device.createTexture({format:"rgba8unorm",data:null,width:this._canvasWidth,height:this._canvasHeight,sampler:this._samplerParameters||rS,mipLevels:this.device.getMipLevelCount(this._canvasWidth,this._canvasHeight)})),this._texture.height!==this._canvasHeight&&(this._texture=BL(this._texture,this._canvasWidth,this._canvasHeight,this._samplerParameters||rS)),this.onUpdate(!0),this._canvas=this._canvas||document.createElement("canvas"),this._loadIcons(i)}}_loadIcons(e){let r=this._canvas.getContext("2d",{willReadFrequently:!0});for(let i of e)this._pendingCount++,ir(i.url,this._loadOptions).then(n=>{let o=Es(i),s=this._mapping[o],{x:a,y:c,width:l,height:f}=s,{image:u,width:d,height:h}=IL(r,n,l,f),p=a+(l-d)/2,g=c+(f-h)/2;this._texture?.copyExternalImage({image:u,x:p,y:g,width:d,height:h}),s.x=p,s.y=g,s.width=d,s.height=h,this._texture&&nS(this._texture),this.onUpdate(d!==l||h!==f)}).catch(n=>{this.onError({url:i.url,source:i.source,sourceIndex:i.sourceIndex,loadOptions:this._loadOptions,error:n})}).finally(()=>{this._pendingCount--})}};var oS=[0,0,0,255],FL={iconAtlas:{type:"image",value:null,async:!0},iconMapping:{type:"object",value:{},async:!0},sizeScale:{type:"number",value:1,min:0},billboard:!0,sizeUnits:"pixels",sizeBasis:"height",sizeMinPixels:{type:"number",min:0,value:0},sizeMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},alphaCutoff:{type:"number",value:.05,min:0,max:1},getPosition:{type:"accessor",value:t=>t.position},getIcon:{type:"accessor",value:t=>t.icon},getColor:{type:"accessor",value:oS},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},onIconError:{type:"function",value:null,optional:!0},textureParameters:{type:"object",ignore:!0,value:null}},vs=class extends we{getShaders(){return super.getShaders({vs:ZT,fs:qT,source:eS,modules:[Oe,Ii,Ne,QT]})}initializeState(){this.state={iconManager:new Cs(this.context.device,{onUpdate:this._onUpdate.bind(this),onError:this._onError.bind(this)})},this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceSizes:{size:1,transition:!0,accessor:"getSize",defaultValue:1},instanceIconDefs:{size:7,accessor:"getIcon",transform:this.getInstanceIconDef,shaderAttributes:{instanceOffsets:{size:2,elementOffset:0},instanceIconFrames:{size:4,elementOffset:2},instanceColorModes:{size:1,elementOffset:6}}},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getColor",defaultValue:oS},instanceAngles:{size:1,transition:!0,accessor:"getAngle"},instancePixelOffset:{size:2,transition:!0,accessor:"getPixelOffset"}})}updateState(e){super.updateState(e);let{props:r,oldProps:i,changeFlags:n}=e,o=this.getAttributeManager(),{iconAtlas:s,iconMapping:a,data:c,getIcon:l,textureParameters:f}=r,{iconManager:u}=this.state;if(typeof s=="string")return;let d=s||this.internalState.isAsyncPropLoading("iconAtlas");u.setProps({loadOptions:r.loadOptions,autoPacking:!d,iconAtlas:s,iconMapping:d?a:null,textureParameters:f}),d?i.iconMapping!==r.iconMapping&&o.invalidate("getIcon"):(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getIcon))&&u.packIcons(c,l),n.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),o.invalidateAll())}get isLoaded(){return super.isLoaded&&this.state.iconManager.isLoaded}finalizeState(e){super.finalizeState(e),this.state.iconManager.finalize()}draw({uniforms:e}){let{sizeScale:r,sizeBasis:i,sizeMinPixels:n,sizeMaxPixels:o,sizeUnits:s,billboard:a,alphaCutoff:c}=this.props,{iconManager:l}=this.state,f=l.getTexture();if(f){let u=this.state.model,d={iconsTexture:f,iconsTextureDim:[f.width,f.height],sizeUnits:xe[s],sizeScale:r,sizeBasis:i==="height"?1:0,sizeMinPixels:n,sizeMaxPixels:o,billboard:a,alphaCutoff:c};u.shaderInputs.setProps({icon:d}),u.draw(this.context.renderPass)}}_getModel(){let e=[-1,-1,1,-1,-1,1,1,1];return new ae(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new Te({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array(e)}}}),isInstanced:!0})}_onUpdate(e){e?(this.getAttributeManager()?.invalidate("getIcon"),this.setNeedsUpdate()):this.setNeedsRedraw()}_onError(e){let r=this.getCurrentLayer()?.props.onIconError;r?r(e):P.error(e.error.message)()}getInstanceIconDef(e){let{x:r,y:i,width:n,height:o,mask:s,anchorX:a=n/2,anchorY:c=o/2}=this.state.iconManager.getIconMapping(e);return[n/2-a,o/2-c,r,i,n,o,s?1:0]}};vs.defaultProps=FL;vs.layerName="IconLayer";var Wl=vs;var sS=`layout(std140) uniform scatterplotUniforms {
  float radiusScale;
  float radiusMinPixels;
  float radiusMaxPixels;
  float lineWidthScale;
  float lineWidthMinPixels;
  float lineWidthMaxPixels;
  float stroked;
  float filled;
  bool antialiasing;
  bool billboard;
  highp int radiusUnits;
  highp int lineWidthUnits;
} scatterplot;
`,aS={name:"scatterplot",vs:sS,fs:sS,source:"",uniformTypes:{radiusScale:"f32",radiusMinPixels:"f32",radiusMaxPixels:"f32",lineWidthScale:"f32",lineWidthMinPixels:"f32",lineWidthMaxPixels:"f32",stroked:"f32",filled:"f32",antialiasing:"f32",billboard:"f32",radiusUnits:"i32",lineWidthUnits:"i32"}};var cS=`#version 300 es
#define SHADER_NAME scatterplot-layer-vertex-shader
in vec3 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in vec3 instancePickingColors;
in vec2 instancePixelOffset;
out vec4 vFillColor;
out vec4 vLineColor;
out vec2 unitPosition;
out float innerUnitRadius;
out float outerRadiusPixels;
void main(void) {
geometry.worldPosition = instancePositions;
outerRadiusPixels = clamp(
project_size_to_pixel(scatterplot.radiusScale * instanceRadius, scatterplot.radiusUnits),
scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
);
float lineWidthPixels = clamp(
project_size_to_pixel(scatterplot.lineWidthScale * instanceLineWidths, scatterplot.lineWidthUnits),
scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
);
outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
float edgePadding = scatterplot.antialiasing ? (outerRadiusPixels + SMOOTH_EDGE_RADIUS) / outerRadiusPixels : 1.0;
unitPosition = edgePadding * positions.xy;
geometry.uv = unitPosition;
geometry.pickingColor = instancePickingColors;
innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / outerRadiusPixels;
if (scatterplot.billboard) {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = edgePadding * positions * outerRadiusPixels;
offset.xy += instancePixelOffset;
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset = edgePadding * positions * project_pixel_size(outerRadiusPixels);
offset.xy += project_pixel_size(instancePixelOffset);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`;var lS=`#version 300 es
#define SHADER_NAME scatterplot-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in vec2 unitPosition;
in float innerUnitRadius;
in float outerRadiusPixels;
out vec4 fragColor;
void main(void) {
geometry.uv = unitPosition;
float distToCenter = length(unitPosition) * outerRadiusPixels;
float inCircle = scatterplot.antialiasing ?
smoothedge(distToCenter, outerRadiusPixels) :
step(distToCenter, outerRadiusPixels);
if (inCircle == 0.0) {
discard;
}
if (scatterplot.stroked > 0.5) {
float isLine = scatterplot.antialiasing ?
smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :
step(innerUnitRadius * outerRadiusPixels, distToCenter);
if (scatterplot.filled > 0.5) {
fragColor = mix(vFillColor, vLineColor, isLine);
} else {
if (isLine == 0.0) {
discard;
}
fragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);
}
} else if (scatterplot.filled < 0.5) {
discard;
} else {
fragColor = vFillColor;
}
fragColor.a *= inCircle;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;var fS=`// Main shaders

struct ScatterplotUniforms {
  radiusScale: f32,
  radiusMinPixels: f32,
  radiusMaxPixels: f32,
  lineWidthScale: f32,
  lineWidthMinPixels: f32,
  lineWidthMaxPixels: f32,
  stroked: f32,
  filled: i32,
  antialiasing: i32,
  billboard: i32,
  radiusUnits: i32,
  lineWidthUnits: i32,
};

struct ConstantAttributeUniforms {
 instancePositions: vec3<f32>,
 instancePositions64Low: vec3<f32>,
 instanceRadius: f32,
 instanceLineWidths: f32,
 instanceFillColors: vec4<f32>,
 instanceLineColors: vec4<f32>,
 instancePickingColors: vec3<f32>,
 instancePixelOffset: vec2<f32>,

 instancePositionsConstant: i32,
 instancePositions64LowConstant: i32,
 instanceRadiusConstant: i32,
 instanceLineWidthsConstant: i32,
 instanceFillColorsConstant: i32,
 instanceLineColorsConstant: i32,
 instancePickingColorsConstant: i32,
 instancePixelOffsetConstant: i32
};

@group(0) @binding(0) var<uniform> scatterplot: ScatterplotUniforms;

struct ConstantAttributes {
  instancePositions: vec3<f32>,
  instancePositions64Low: vec3<f32>,
  instanceRadius: f32,
  instanceLineWidths: f32,
  instanceFillColors: vec4<f32>,
  instanceLineColors: vec4<f32>,
  instancePickingColors: vec3<f32>,
  instancePixelOffset: vec2<f32>
};

const constants = ConstantAttributes(
  vec3<f32>(0.0),
  vec3<f32>(0.0),
  0.0,
  0.0,
  vec4<f32>(0.0, 0.0, 0.0, 1.0),
  vec4<f32>(0.0, 0.0, 0.0, 1.0),
  vec3<f32>(0.0),
  vec2<f32>(0.0)
);

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @builtin(vertex_index) vertexIndex : u32,
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceRadius: f32,
  @location(4) instanceLineWidths: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instancePickingColors: vec3<f32>,
  @location(8) instancePixelOffset: vec2<f32>
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) unitPosition: vec2<f32>,
  @location(3) innerUnitRadius: f32,
  @location(4) outerRadiusPixels: f32,
  @location(5) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  // Draw an inline geometry constant array clip space triangle to verify that rendering works.
  // var positions = array<vec2<f32>, 3>(vec2(0.0, 0.5), vec2(-0.5, -0.5), vec2(0.5, -0.5));
  // if (attributes.instanceIndex == 0) {
  //   varyings.position = vec4<f32>(positions[attributes.vertexIndex], 0.0, 1.0);
  //   return varyings;
  // }

  geometry.worldPosition = attributes.instancePositions;

  // Multiply out radius and clamp to limits
  varyings.outerRadiusPixels = clamp(
    project_unit_size_to_pixel(scatterplot.radiusScale * attributes.instanceRadius, scatterplot.radiusUnits),
    scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
  );

  // Multiply out line width and clamp to limits
  let lineWidthPixels = clamp(
    project_unit_size_to_pixel(scatterplot.lineWidthScale * attributes.instanceLineWidths, scatterplot.lineWidthUnits),
    scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
  );

  // outer radius needs to offset by half stroke width
  varyings.outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
  // Expand geometry to accommodate edge smoothing
  let edgePadding = select(
    (varyings.outerRadiusPixels + SMOOTH_EDGE_RADIUS) / varyings.outerRadiusPixels,
    1.0,
    scatterplot.antialiasing != 0
  );

  // position on the containing square in [-1, 1] space
  varyings.unitPosition = edgePadding * attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = attributes.instancePickingColors;

  varyings.innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / varyings.outerRadiusPixels;

  if (scatterplot.billboard != 0) {
    varyings.position = project_position_to_clipspace(attributes.instancePositions, attributes.instancePositions64Low, vec3<f32>(0.0)); // TODO , geometry.position);
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
    var offset = edgePadding * attributes.positions * varyings.outerRadiusPixels;
    offset = vec3<f32>(offset.xy + attributes.instancePixelOffset, offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipPixels = project_pixel_size_to_clipspace(offset.xy);
    varyings.position = vec4<f32>(varyings.position.x + clipPixels.x, varyings.position.y + clipPixels.y, varyings.position.z, varyings.position.w);
  } else {
    var offset = edgePadding * attributes.positions * project_pixel_size_float(varyings.outerRadiusPixels);
    offset = vec3<f32>(offset.xy + project_pixel_size_vec2(attributes.instancePixelOffset), offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    varyings.position = project_position_to_clipspace(attributes.instancePositions, attributes.instancePositions64Low, offset); // TODO , geometry.position);
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
  }

  // Apply opacity to instance color, or return instance picking color
  varyings.vFillColor = vec4<f32>(attributes.instanceFillColors.rgb, attributes.instanceFillColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vFillColor, geometry);
  varyings.vLineColor = vec4<f32>(attributes.instanceLineColors.rgb, attributes.instanceLineColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vLineColor, geometry);
  varyings.pickingColor = attributes.instancePickingColors;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition;

  let distToCenter = length(varyings.unitPosition) * varyings.outerRadiusPixels;
  let inCircle = select(
    smoothedge(distToCenter, varyings.outerRadiusPixels),
    step(distToCenter, varyings.outerRadiusPixels),
    scatterplot.antialiasing != 0
  );

  if (inCircle == 0.0) {
    discard;
  }

  var fragColor: vec4<f32>;

  if (scatterplot.stroked != 0) {
    let isLine = select(
      smoothedge(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      step(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      scatterplot.antialiasing != 0
    );

    if (scatterplot.filled != 0) {
      fragColor = mix(varyings.vFillColor, varyings.vLineColor, isLine);
    } else {
      if (isLine == 0.0) {
        discard;
      }
      fragColor = vec4<f32>(varyings.vLineColor.rgb, varyings.vLineColor.a * isLine);
    }
  } else if (scatterplot.filled == 0) {
    discard;
  } else {
    fragColor = varyings.vFillColor;
  }

  fragColor.a *= inCircle;

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
  // return vec4<f32>(0, 0, 1, 1);
}
`;var uS=[0,0,0,255],NL={radiusUnits:"meters",radiusScale:{type:"number",min:0,value:1},radiusMinPixels:{type:"number",min:0,value:0},radiusMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},lineWidthUnits:"meters",lineWidthScale:{type:"number",min:0,value:1},lineWidthMinPixels:{type:"number",min:0,value:0},lineWidthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},stroked:!1,filled:!0,billboard:!1,antialiasing:!0,getPosition:{type:"accessor",value:t=>t.position},getRadius:{type:"accessor",value:1},getFillColor:{type:"accessor",value:uS},getLineColor:{type:"accessor",value:uS},getLineWidth:{type:"accessor",value:1},getPixelOffset:{type:"accessor",value:[0,0]},strokeWidth:{deprecatedFor:"getLineWidth"},outline:{deprecatedFor:"stroked"},getColor:{deprecatedFor:["getFillColor","getLineColor"]}},Rs=class extends we{getShaders(){return super.getShaders({vs:cS,fs:lS,source:fS,modules:[Oe,Ii,Ne,aS]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1},instancePixelOffset:{size:2,transition:!0,accessor:"getPixelOffset"}})}updateState(e){super.updateState(e),e.changeFlags.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{radiusUnits:r,radiusScale:i,radiusMinPixels:n,radiusMaxPixels:o,stroked:s,filled:a,billboard:c,antialiasing:l,lineWidthUnits:f,lineWidthScale:u,lineWidthMinPixels:d,lineWidthMaxPixels:h}=this.props,p={stroked:s,filled:a,billboard:c,antialiasing:l,radiusUnits:xe[r],radiusScale:i,radiusMinPixels:n,radiusMaxPixels:o,lineWidthUnits:xe[f],lineWidthScale:u,lineWidthMinPixels:d,lineWidthMaxPixels:h},g=this.state.model;g.shaderInputs.setProps({scatterplot:p}),g.draw(this.context.renderPass)}_getModel(){let e=[-1,-1,0,1,-1,0,-1,1,0,1,1,0];return new ae(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new Te({topology:"triangle-strip",attributes:{positions:{size:3,value:new Float32Array(e)}}}),isInstanced:!0})}};Rs.defaultProps=NL;Rs.layerName="ScatterplotLayer";var Gl=Rs;var Xl={CLOCKWISE:1,COUNTER_CLOCKWISE:-1};function Ms(t,e,r={}){return dS(t,r)!==e?(DL(t,r),!0):!1}function dS(t,e={}){return Math.sign($l(t,e))}var Zp={x:0,y:1,z:2};function $l(t,e={}){let{start:r=0,end:i=t.length,plane:n="xy"}=e,o=e.size||2,s=0,a=Zp[n[0]],c=Zp[n[1]];for(let l=r,f=i-o;l<i;l+=o)s+=(t[l+a]-t[f+a])*(t[l+c]+t[f+c]),f=l;return s/2}function DL(t,e){let{start:r=0,end:i=t.length,size:n=2}=e,o=(i-r)/n,s=Math.floor(o/2);for(let a=0;a<s;++a){let c=r+a*n,l=r+(o-1-a)*n;for(let f=0;f<n;++f){let u=t[c+f];t[c+f]=t[l+f],t[l+f]=u}}}function De(t,e){let r=e.length,i=t.length;if(i>0){let n=!0;for(let o=0;o<r;o++)if(t[i-r+o]!==e[o]){n=!1;break}if(n)return!1}for(let n=0;n<r;n++)t[i+n]=e[n];return!0}function Ps(t,e){let r=e.length;for(let i=0;i<r;i++)t[i]=e[i]}function Er(t,e,r,i,n=[]){let o=i+e*r;for(let s=0;s<r;s++)n[s]=t[o+s];return n}function Kl(t,e,r,i,n=[]){let o,s;if(r&8)o=(i[3]-t[1])/(e[1]-t[1]),s=3;else if(r&4)o=(i[1]-t[1])/(e[1]-t[1]),s=1;else if(r&2)o=(i[2]-t[0])/(e[0]-t[0]),s=2;else if(r&1)o=(i[0]-t[0])/(e[0]-t[0]),s=0;else return null;for(let a=0;a<t.length;a++)n[a]=(s&1)===a?i[s]:o*(e[a]-t[a])+t[a];return n}function ws(t,e){let r=0;return t[0]<e[0]?r|=1:t[0]>e[2]&&(r|=2),t[1]<e[1]?r|=4:t[1]>e[3]&&(r|=8),r}function Is(t,e){let{size:r=2,broken:i=!1,gridResolution:n=10,gridOffset:o=[0,0],startIndex:s=0,endIndex:a=t.length}=e||{},c=(a-s)/r,l=[],f=[l],u=Er(t,0,r,s),d,h,p=gS(u,n,o,[]),g=[];De(l,u);for(let m=1;m<c;m++){for(d=Er(t,m,r,s,d),h=ws(d,p);h;){Kl(u,d,h,p,g);let b=ws(g,p);b&&(Kl(u,g,b,p,g),h=b),De(l,g),Ps(u,g),VL(p,n,h),i&&l.length>r&&(l=[],f.push(l),De(l,u)),h=ws(d,p)}De(l,d),Ps(u,d)}return i?f:f[0]}var hS=0,kL=1;function Bs(t,e=null,r){if(!t.length)return[];let{size:i=2,gridResolution:n=10,gridOffset:o=[0,0],edgeTypes:s=!1}=r||{},a=[],c=[{pos:t,types:s?new Array(t.length/i).fill(kL):null,holes:e||[]}],l=[[],[]],f=[];for(;c.length;){let{pos:u,types:d,holes:h}=c.shift();HL(u,i,h[0]||u.length,l),f=gS(l[0],n,o,f);let p=ws(l[1],f);if(p){let g=pS(u,d,i,0,h[0]||u.length,f,p),m={pos:g[0].pos,types:g[0].types,holes:[]},b={pos:g[1].pos,types:g[1].types,holes:[]};c.push(m,b);for(let y=0;y<h.length;y++)g=pS(u,d,i,h[y],h[y+1]||u.length,f,p),g[0]&&(m.holes.push(m.pos.length),m.pos=Yl(m.pos,g[0].pos),s&&(m.types=Yl(m.types,g[0].types))),g[1]&&(b.holes.push(b.pos.length),b.pos=Yl(b.pos,g[1].pos),s&&(b.types=Yl(b.types,g[1].types)))}else{let g={positions:u};s&&(g.edgeTypes=d),h.length&&(g.holeIndices=h),a.push(g)}}return a}function pS(t,e,r,i,n,o,s){let a=(n-i)/r,c=[],l=[],f=[],u=[],d=[],h,p,g,m=Er(t,a-1,r,i),b=Math.sign(s&8?m[1]-o[3]:m[0]-o[2]),y=e&&e[a-1],_=0,A=0;for(let T=0;T<a;T++)h=Er(t,T,r,i,h),p=Math.sign(s&8?h[1]-o[3]:h[0]-o[2]),g=e&&e[i/r+T],p&&b&&b!==p&&(Kl(m,h,s,o,d),De(c,d)&&f.push(y),De(l,d)&&u.push(y)),p<=0?(De(c,h)&&f.push(g),_-=p):f.length&&(f[f.length-1]=hS),p>=0?(De(l,h)&&u.push(g),A+=p):u.length&&(u[u.length-1]=hS),Ps(m,h),b=p,y=g;return[_?{pos:c,types:e&&f}:null,A?{pos:l,types:e&&u}:null]}function gS(t,e,r,i){let n=Math.floor((t[0]-r[0])/e)*e+r[0],o=Math.floor((t[1]-r[1])/e)*e+r[1];return i[0]=n,i[1]=o,i[2]=n+e,i[3]=o+e,i}function VL(t,e,r){r&8?(t[1]+=e,t[3]+=e):r&4?(t[1]-=e,t[3]-=e):r&2?(t[0]+=e,t[2]+=e):r&1&&(t[0]-=e,t[2]-=e)}function HL(t,e,r,i){let n=1/0,o=-1/0,s=1/0,a=-1/0;for(let c=0;c<r;c+=e){let l=t[c],f=t[c+1];n=l<n?l:n,o=l>o?l:o,s=f<s?f:s,a=f>a?f:a}return i[0][0]=n,i[0][1]=s,i[1][0]=o,i[1][1]=a,i}function Yl(t,e){for(let r=0;r<e.length;r++)t.push(e[r]);return t}var zL=85.051129;function qp(t,e){let{size:r=2,startIndex:i=0,endIndex:n=t.length,normalize:o=!0}=e||{},s=t.slice(i,n);mS(s,r,0,n-i);let a=Is(s,{size:r,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(o)for(let c of a)_S(c,r);return a}function eg(t,e=null,r){let{size:i=2,normalize:n=!0,edgeTypes:o=!1}=r||{};e=e||[];let s=[],a=[],c=0,l=0;for(let u=0;u<=e.length;u++){let d=e[u]||t.length,h=l,p=jL(t,i,c,d);for(let g=p;g<d;g++)s[l++]=t[g];for(let g=c;g<p;g++)s[l++]=t[g];mS(s,i,h,l),WL(s,i,h,l,r?.maxLatitude),c=d,a[u]=l}a.pop();let f=Bs(s,a,{size:i,gridResolution:360,gridOffset:[-180,-180],edgeTypes:o});if(n)for(let u of f)_S(u.positions,i);return f}function jL(t,e,r,i){let n=-1,o=-1;for(let s=r+1;s<i;s+=e){let a=Math.abs(t[s]);a>n&&(n=a,o=s-1)}return o}function WL(t,e,r,i,n=zL){let o=t[r],s=t[i-e];if(Math.abs(o-s)>180){let a=Er(t,0,e,r);a[0]+=Math.round((s-o)/360)*360,De(t,a),a[1]=Math.sign(a[1])*n,De(t,a),a[0]=o,De(t,a)}}function mS(t,e,r,i){let n=t[0],o;for(let s=r;s<i;s+=e){o=t[s];let a=o-n;(a>180||a<-180)&&(o-=Math.round(a/360)*360),t[s]=n=o}}function _S(t,e){let r,i=t.length/e;for(let o=0;o<i&&(r=t[o*e],(r+180)%360===0);o++);let n=-Math.round(r/360)*360;if(n!==0)for(let o=0;o<i;o++)t[o*e]+=n}function bS(t,e,r,i){let n;if(Array.isArray(t[0])){let o=t.length*e;n=new Array(o);for(let s=0;s<t.length;s++)for(let a=0;a<e;a++)n[s*e+a]=t[s][a]||0}else n=t;return r?Is(n,{size:e,gridResolution:r}):i?qp(n,{size:e}):n}var XL=1,$L=2,tg=4,Os=class extends Sr{constructor(e){super({...e,attributes:{positions:{size:3,padding:18,initialize:!0,type:e.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:Uint8ClampedArray}}})}get(e){return this.attributes[e]}getGeometryFromBuffer(e){return this.normalize?super.getGeometryFromBuffer(e):null}normalizeGeometry(e){return this.normalize?bS(e,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):e}getGeometrySize(e){if(AS(e)){let i=0;for(let n of e)i+=this.getGeometrySize(n);return i}let r=this.getPathLength(e);return r<2?0:this.isClosed(e)?r<3?0:r+2:r}updateGeometryAttributes(e,r){if(r.geometrySize!==0)if(e&&AS(e))for(let i of e){let n=this.getGeometrySize(i);r.geometrySize=n,this.updateGeometryAttributes(i,r),r.vertexStart+=n}else this._updateSegmentTypes(e,r),this._updatePositions(e,r)}_updateSegmentTypes(e,r){let i=this.attributes.segmentTypes,n=e?this.isClosed(e):!1,{vertexStart:o,geometrySize:s}=r;i.fill(0,o,o+s),n?(i[o]=tg,i[o+s-2]=tg):(i[o]+=XL,i[o+s-2]+=$L),i[o+s-1]=tg}_updatePositions(e,r){let{positions:i}=this.attributes;if(!i||!e)return;let{vertexStart:n,geometrySize:o}=r,s=new Array(3);for(let a=n,c=0;c<o;a++,c++)this.getPointOnPath(e,c,s),i[a*3]=s[0],i[a*3+1]=s[1],i[a*3+2]=s[2]}getPathLength(e){return e.length/this.positionSize}getPointOnPath(e,r,i=[]){let{positionSize:n}=this;r*n>=e.length&&(r+=1-e.length/n);let o=r*n;return i[0]=e[o],i[1]=e[o+1],i[2]=n===3&&e[o+2]||0,i}isClosed(e){if(!this.normalize)return!!this.opts.loop;let{positionSize:r}=this,i=e.length-r;return e[0]===e[i]&&e[1]===e[i+1]&&(r===2||e[2]===e[i+2])}};function AS(t){return Array.isArray(t[0])}var yS=`layout(std140) uniform pathUniforms {
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  float jointType;
  float capType;
  float miterLimit;
  bool billboard;
  highp int widthUnits;
} path;
`,xS={name:"path",vs:yS,fs:yS,uniformTypes:{widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",jointType:"f32",capType:"f32",miterLimit:"f32",billboard:"f32",widthUnits:"i32"}};var TS=`#version 300 es
#define SHADER_NAME path-layer-vertex-shader
in vec2 positions;
in float instanceTypes;
in vec3 instanceStartPositions;
in vec3 instanceEndPositions;
in vec3 instanceLeftPositions;
in vec3 instanceRightPositions;
in vec3 instanceLeftPositions64Low;
in vec3 instanceStartPositions64Low;
in vec3 instanceEndPositions64Low;
in vec3 instanceRightPositions64Low;
in float instanceStrokeWidths;
in vec4 instanceColors;
in vec3 instancePickingColors;
uniform float opacity;
out vec4 vColor;
out vec2 vCornerOffset;
out float vMiterLength;
out vec2 vPathPosition;
out float vPathLength;
out float vJointType;
const float EPSILON = 0.001;
const vec3 ZERO_OFFSET = vec3(0.0);
float flipIfTrue(bool flag) {
return -(float(flag) * 2. - 1.);
}
vec3 getLineJoinOffset(
vec3 prevPoint, vec3 currPoint, vec3 nextPoint,
vec2 width
) {
bool isEnd = positions.x > 0.0;
float sideOfPath = positions.y;
float isJoint = float(sideOfPath == 0.0);
vec3 deltaA3 = (currPoint - prevPoint);
vec3 deltaB3 = (nextPoint - currPoint);
mat3 rotationMatrix;
bool needsRotation = !path.billboard && project_needs_rotation(currPoint, rotationMatrix);
if (needsRotation) {
deltaA3 = deltaA3 * rotationMatrix;
deltaB3 = deltaB3 * rotationMatrix;
}
vec2 deltaA = deltaA3.xy / width;
vec2 deltaB = deltaB3.xy / width;
float lenA = length(deltaA);
float lenB = length(deltaB);
vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);
vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);
vec2 perpA = vec2(-dirA.y, dirA.x);
vec2 perpB = vec2(-dirB.y, dirB.x);
vec2 tangent = dirA + dirB;
tangent = length(tangent) > 0. ? normalize(tangent) : perpA;
vec2 miterVec = vec2(-tangent.y, tangent.x);
vec2 dir = isEnd ? dirA : dirB;
vec2 perp = isEnd ? perpA : perpB;
float L = isEnd ? lenA : lenB;
float sinHalfA = abs(dot(miterVec, perp));
float cosHalfA = abs(dot(dirA, miterVec));
float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
float cornerPosition = sideOfPath * turnDirection;
float miterSize = 1.0 / max(sinHalfA, EPSILON);
miterSize = mix(
min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
miterSize,
step(0.0, cornerPosition)
);
vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))
* (sideOfPath + isJoint * turnDirection);
bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
bool isCap = isStartCap || isEndCap;
if (isCap) {
offsetVec = mix(perp * sideOfPath, dir * path.capType * 4.0 * flipIfTrue(isStartCap), isJoint);
vJointType = path.capType;
} else {
vJointType = path.jointType;
}
vPathLength = L;
vCornerOffset = offsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
dot(offsetFromStartOfPath, dir)
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(offsetVec * width * isValid, 0.0);
if (needsRotation) {
offset = rotationMatrix * offset;
}
return offset;
}
void clipLine(inout vec4 position, vec4 refPosition) {
if (position.w < EPSILON) {
float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
position = refPosition + (position - refPosition) * r;
}
}
void main() {
geometry.pickingColor = instancePickingColors;
vColor = vec4(instanceColors.rgb, instanceColors.a * layer.opacity);
float isEnd = positions.x;
vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);
vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);
vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);
vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);
vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);
vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);
geometry.worldPosition = currPosition;
vec2 widthPixels = vec2(clamp(
project_size_to_pixel(instanceStrokeWidths * path.widthScale, path.widthUnits),
path.widthMinPixels, path.widthMaxPixels) / 2.0);
vec3 width;
if (path.billboard) {
vec4 prevPositionScreen = project_position_to_clipspace(prevPosition, prevPosition64Low, ZERO_OFFSET);
vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);
vec4 nextPositionScreen = project_position_to_clipspace(nextPosition, nextPosition64Low, ZERO_OFFSET);
clipLine(prevPositionScreen, currPositionScreen);
clipLine(nextPositionScreen, currPositionScreen);
clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));
width = vec3(widthPixels, 0.0);
DECKGL_FILTER_SIZE(width, geometry);
vec3 offset = getLineJoinOffset(
prevPositionScreen.xyz / prevPositionScreen.w,
currPositionScreen.xyz / currPositionScreen.w,
nextPositionScreen.xyz / nextPositionScreen.w,
project_pixel_size_to_clipspace(width.xy)
);
DECKGL_FILTER_GL_POSITION(currPositionScreen, geometry);
gl_Position = vec4(currPositionScreen.xyz + offset * currPositionScreen.w, currPositionScreen.w);
} else {
prevPosition = project_position(prevPosition, prevPosition64Low);
currPosition = project_position(currPosition, currPosition64Low);
nextPosition = project_position(nextPosition, nextPosition64Low);
width = vec3(project_pixel_size(widthPixels), 0.0);
DECKGL_FILTER_SIZE(width, geometry);
vec3 offset = getLineJoinOffset(prevPosition, currPosition, nextPosition, width.xy);
geometry.position = vec4(currPosition + offset, 1.0);
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`;var SS=`#version 300 es
#define SHADER_NAME path-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 vCornerOffset;
in float vMiterLength;
in vec2 vPathPosition;
in float vPathLength;
in float vJointType;
out vec4 fragColor;
void main(void) {
geometry.uv = vPathPosition;
if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {
if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {
discard;
}
if (vJointType < 0.5 && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;var ES=[0,0,0,255],KL={widthUnits:"meters",widthScale:{type:"number",min:0,value:1},widthMinPixels:{type:"number",min:0,value:0},widthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},jointRounded:!1,capRounded:!1,miterLimit:{type:"number",min:0,value:4},billboard:!1,_pathType:null,getPath:{type:"accessor",value:t=>t.path},getColor:{type:"accessor",value:ES},getWidth:{type:"accessor",value:1},rounded:{deprecatedFor:["jointRounded","capRounded"]}},rg={enter:(t,e)=>e.length?e.subarray(e.length-t.length):t},Ls=class extends we{getShaders(){return super.getShaders({vs:TS,fs:SS,modules:[Oe,Ne,xS]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds(["vertexPositions"])}initializeState(){this.getAttributeManager().addInstanced({vertexPositions:{size:3,vertexOffset:1,type:"float64",fp64:this.use64bitPositions(),transition:rg,accessor:"getPath",update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}},instanceTypes:{size:1,type:"uint8",update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:"getWidth",transition:rg,defaultValue:1},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",accessor:"getColor",transition:rg,defaultValue:ES},instancePickingColors:{size:4,type:"uint8",accessor:(i,{index:n,target:o})=>this.encodePickingColor(i&&i.__source?i.__source.index:n,o)}}),this.setState({pathTesselator:new Os({fp64:this.use64bitPositions()})})}updateState(e){super.updateState(e);let{props:r,changeFlags:i}=e,n=this.getAttributeManager();if(i.dataChanged||i.updateTriggersChanged&&(i.updateTriggersChanged.all||i.updateTriggersChanged.getPath)){let{pathTesselator:s}=this.state,a=r.data.attributes||{};s.updateGeometry({data:r.data,geometryBuffer:a.getPath,buffers:a,normalize:!r._pathType,loop:r._pathType==="loop",getGeometry:r.getPath,positionFormat:r.positionFormat,wrapLongitude:r.wrapLongitude,resolution:this.context.viewport.resolution,dataChanged:i.dataChanged}),this.setState({numInstances:s.instanceCount,startIndices:s.vertexStarts}),i.dataChanged||n.invalidateAll()}i.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),n.invalidateAll())}getPickingInfo(e){let r=super.getPickingInfo(e),{index:i}=r,n=this.props.data;return n[0]&&n[0].__source&&(r.object=n.find(o=>o.__source.index===i)),r}disablePickingIndex(e){let r=this.props.data;if(r[0]&&r[0].__source)for(let i=0;i<r.length;i++)r[i].__source.index===e&&this._disablePickingIndex(i);else super.disablePickingIndex(e)}draw({uniforms:e}){let{jointRounded:r,capRounded:i,billboard:n,miterLimit:o,widthUnits:s,widthScale:a,widthMinPixels:c,widthMaxPixels:l}=this.props,f=this.state.model,u={jointType:Number(r),capType:Number(i),billboard:n,widthUnits:xe[s],widthScale:a,miterLimit:o,widthMinPixels:c,widthMaxPixels:l};f.shaderInputs.setProps({path:u}),f.draw(this.context.renderPass)}_getModel(){let e=[0,1,2,1,4,2,1,3,4,3,5,4],r=[0,0,0,-1,0,1,1,-1,1,1,1,0];return new ae(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new Te({topology:"triangle-list",attributes:{indices:new Uint16Array(e),positions:{value:new Float32Array(r),size:2}}}),isInstanced:!0})}calculatePositions(e){let{pathTesselator:r}=this.state;e.startIndices=r.vertexStarts,e.value=r.get("positions")}calculateSegmentTypes(e){let{pathTesselator:r}=this.state;e.startIndices=r.vertexStarts,e.value=r.get("segmentTypes")}};Ls.defaultProps=KL;Ls.layerName="PathLayer";var tn=Ls;var LS=ev(PS(),1);var ef=Xl.CLOCKWISE,wS=Xl.COUNTER_CLOCKWISE,Cr={isClosed:!0};function fF(t){if(t=t&&t.positions||t,!Array.isArray(t)&&!ArrayBuffer.isView(t))throw new Error("invalid polygon")}function nn(t){return"positions"in t?t.positions:t}function Us(t){return"holeIndices"in t?t.holeIndices:null}function uF(t){return Array.isArray(t[0])}function dF(t){return t.length>=1&&t[0].length>=2&&Number.isFinite(t[0][0])}function hF(t){let e=t[0],r=t[t.length-1];return e[0]===r[0]&&e[1]===r[1]&&e[2]===r[2]}function pF(t,e,r,i){for(let n=0;n<e;n++)if(t[r+n]!==t[i-e+n])return!1;return!0}function IS(t,e,r,i,n){let o=e,s=r.length;for(let a=0;a<s;a++)for(let c=0;c<i;c++)t[o++]=r[a][c]||0;if(!hF(r))for(let a=0;a<i;a++)t[o++]=r[0][a]||0;return Cr.start=e,Cr.end=o,Cr.size=i,Ms(t,n,Cr),o}function BS(t,e,r,i,n=0,o,s){o=o||r.length;let a=o-n;if(a<=0)return e;let c=e;for(let l=0;l<a;l++)t[c++]=r[n+l];if(!pF(r,i,n,o))for(let l=0;l<i;l++)t[c++]=r[n+l];return Cr.start=e,Cr.end=c,Cr.size=i,Ms(t,s,Cr),c}function tf(t,e){fF(t);let r=[],i=[];if("positions"in t){let{positions:n,holeIndices:o}=t;if(o){let s=0;for(let a=0;a<=o.length;a++)s=BS(r,s,n,e,o[a-1],o[a],a===0?ef:wS),i.push(s);return i.pop(),{positions:r,holeIndices:i}}t=n}if(!uF(t))return BS(r,0,t,e,0,r.length,ef),r;if(!dF(t)){let n=0;for(let[o,s]of t.entries())n=IS(r,n,s,e,o===0?ef:wS),i.push(n);return i.pop(),{positions:r,holeIndices:i}}return IS(r,0,t,e,ef),r}function ag(t,e,r){let i=t.length/3,n=0;for(let o=0;o<i;o++){let s=(o+1)%i;n+=t[o*3+e]*t[s*3+r],n-=t[s*3+e]*t[o*3+r]}return Math.abs(n/2)}function OS(t,e,r,i){let n=t.length/3;for(let o=0;o<n;o++){let s=o*3,a=t[s+0],c=t[s+1],l=t[s+2];t[s+e]=a,t[s+r]=c,t[s+i]=l}}function FS(t,e,r,i){let n=Us(t);n&&(n=n.map(a=>a/e));let o=nn(t),s=i&&e===3;if(r){let a=o.length;o=o.slice();let c=[];for(let l=0;l<a;l+=e){c[0]=o[l],c[1]=o[l+1],s&&(c[2]=o[l+2]);let f=r(c);o[l]=f[0],o[l+1]=f[1],s&&(o[l+2]=f[2])}}if(s){let a=ag(o,0,1),c=ag(o,0,2),l=ag(o,1,2);if(!a&&!c&&!l)return[];a>c&&a>l||(c>l?(r||(o=o.slice()),OS(o,0,2,1)):(r||(o=o.slice()),OS(o,2,0,1)))}return(0,LS.default)(o,n,e)}var ks=class extends Sr{constructor(e){let{fp64:r,IndexType:i=Uint32Array}=e;super({...e,attributes:{positions:{size:3,type:r?Float64Array:Float32Array},vertexValid:{type:Uint16Array,size:1},indices:{type:i,size:1}}})}get(e){let{attributes:r}=this;return e==="indices"?r.indices&&r.indices.subarray(0,this.vertexCount):r[e]}updateGeometry(e){super.updateGeometry(e);let r=this.buffers.indices;if(r)this.vertexCount=(r.value||r).length;else if(this.data&&!this.getGeometry)throw new Error("missing indices buffer")}normalizeGeometry(e){if(this.normalize){let r=tf(e,this.positionSize);return this.opts.resolution?Bs(nn(r),Us(r),{size:this.positionSize,gridResolution:this.opts.resolution,edgeTypes:!0}):this.opts.wrapLongitude?eg(nn(r),Us(r),{size:this.positionSize,maxLatitude:86,edgeTypes:!0}):r}return e}getGeometrySize(e){if(DS(e)){let r=0;for(let i of e)r+=this.getGeometrySize(i);return r}return nn(e).length/this.positionSize}getGeometryFromBuffer(e){return this.normalize||!this.buffers.indices?super.getGeometryFromBuffer(e):null}updateGeometryAttributes(e,r){if(e&&DS(e))for(let i of e){let n=this.getGeometrySize(i);r.geometrySize=n,this.updateGeometryAttributes(i,r),r.vertexStart+=n,r.indexStart=this.indexStarts[r.geometryIndex+1]}else{let i=e;this._updateIndices(i,r),this._updatePositions(i,r),this._updateVertexValid(i,r)}}_updateIndices(e,{geometryIndex:r,vertexStart:i,indexStart:n}){let{attributes:o,indexStarts:s,typedArrayManager:a}=this,c=o.indices;if(!c||!e)return;let l=n,f=FS(e,this.positionSize,this.opts.preproject,this.opts.full3d);c=a.allocate(c,n+f.length,{copy:!0});for(let u=0;u<f.length;u++)c[l++]=f[u]+i;s[r+1]=n+f.length,o.indices=c}_updatePositions(e,{vertexStart:r,geometrySize:i}){let{attributes:{positions:n},positionSize:o}=this;if(!n||!e)return;let s=nn(e);for(let a=r,c=0;c<i;a++,c++){let l=s[c*o],f=s[c*o+1],u=o>2?s[c*o+2]:0;n[a*3]=l,n[a*3+1]=f,n[a*3+2]=u}}_updateVertexValid(e,{vertexStart:r,geometrySize:i}){let{positionSize:n}=this,o=this.attributes.vertexValid,s=e&&Us(e);if(e&&e.edgeTypes?o.set(e.edgeTypes,r):o.fill(1,r,r+i),s)for(let a=0;a<s.length;a++)o[r+s[a]/n-1]=0;o[r+i-1]=0}};function DS(t){return Array.isArray(t)&&t.length>0&&!Number.isFinite(t[0])}var US=`layout(std140) uniform solidPolygonUniforms {
  bool extruded;
  bool isWireframe;
  float elevationScale;
} solidPolygon;
`,kS={name:"solidPolygon",vs:US,fs:US,uniformTypes:{extruded:"f32",isWireframe:"f32",elevationScale:"f32"}};var rf=`in vec4 fillColors;
in vec4 lineColors;
in vec3 pickingColors;
out vec4 vColor;
struct PolygonProps {
vec3 positions;
vec3 positions64Low;
vec3 normal;
float elevations;
};
vec3 project_offset_normal(vec3 vector) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
return normalize(vector * project.commonUnitsPerWorldUnit);
}
return project_normal(vector);
}
void calculatePosition(PolygonProps props) {
vec3 pos = props.positions;
vec3 pos64Low = props.positions64Low;
vec3 normal = props.normal;
vec4 colors = solidPolygon.isWireframe ? lineColors : fillColors;
geometry.worldPosition = props.positions;
geometry.pickingColor = pickingColors;
if (solidPolygon.extruded) {
pos.z += props.elevations * solidPolygon.elevationScale;
}
gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (solidPolygon.extruded) {
#ifdef IS_SIDE_VERTEX
normal = project_offset_normal(normal);
#else
normal = project_normal(normal);
#endif
geometry.normal = normal;
vec3 lightColor = lighting_getLightColor(colors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, colors.a * layer.opacity);
} else {
vColor = vec4(colors.rgb, colors.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`;var VS=`#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader
in vec3 vertexPositions;
in vec3 vertexPositions64Low;
in float elevations;
${rf}
void main(void) {
PolygonProps props;
props.positions = vertexPositions;
props.positions64Low = vertexPositions64Low;
props.elevations = elevations;
props.normal = vec3(0.0, 0.0, 1.0);
calculatePosition(props);
}
`;var HS=`#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader-side
#define IS_SIDE_VERTEX
in vec2 positions;
in vec3 vertexPositions;
in vec3 nextVertexPositions;
in vec3 vertexPositions64Low;
in vec3 nextVertexPositions64Low;
in float elevations;
in float instanceVertexValid;
${rf}
void main(void) {
if(instanceVertexValid < 0.5){
gl_Position = vec4(0.);
return;
}
PolygonProps props;
vec3 pos;
vec3 pos64Low;
vec3 nextPos;
vec3 nextPos64Low;
#if RING_WINDING_ORDER_CW == 1
pos = vertexPositions;
pos64Low = vertexPositions64Low;
nextPos = nextVertexPositions;
nextPos64Low = nextVertexPositions64Low;
#else
pos = nextVertexPositions;
pos64Low = nextVertexPositions64Low;
nextPos = vertexPositions;
nextPos64Low = vertexPositions64Low;
#endif
props.positions = mix(pos, nextPos, positions.x);
props.positions64Low = mix(pos64Low, nextPos64Low, positions.x);
props.normal = vec3(
pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
0.0);
props.elevations = elevations * positions.y;
calculatePosition(props);
}
`;var zS=`#version 300 es
#define SHADER_NAME solid-polygon-layer-fragment-shader
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;var of=[0,0,0,255],gF={filled:!0,extruded:!1,wireframe:!1,_normalize:!0,_windingOrder:"CW",_full3d:!1,elevationScale:{type:"number",min:0,value:1},getPolygon:{type:"accessor",value:t=>t.polygon},getElevation:{type:"accessor",value:1e3},getFillColor:{type:"accessor",value:of},getLineColor:{type:"accessor",value:of},material:!0},nf={enter:(t,e)=>e.length?e.subarray(e.length-t.length):t},Vs=class extends we{getShaders(e){return super.getShaders({vs:e==="top"?VS:HS,fs:zS,defines:{RING_WINDING_ORDER_CW:!this.props._normalize&&this.props._windingOrder==="CCW"?0:1},modules:[Oe,wi,Ne,kS]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds(["vertexPositions"])}initializeState(){let{viewport:e}=this.context,{coordinateSystem:r}=this.props,{_full3d:i}=this.props;e.isGeospatial&&r==="default"&&(r="lnglat");let n;r==="lnglat"&&(i?n=e.projectPosition.bind(e):n=e.projectFlat.bind(e)),this.setState({numInstances:0,polygonTesselator:new ks({preproject:n,fp64:this.use64bitPositions(),IndexType:Uint32Array})});let o=this.getAttributeManager(),s=!0;o.remove(["instancePickingColors"]),o.add({indices:{size:1,isIndexed:!0,update:this.calculateIndices,noAlloc:s},vertexPositions:{size:3,type:"float64",stepMode:"dynamic",fp64:this.use64bitPositions(),transition:nf,accessor:"getPolygon",update:this.calculatePositions,noAlloc:s,shaderAttributes:{nextVertexPositions:{vertexOffset:1}}},instanceVertexValid:{size:1,type:"uint16",stepMode:"instance",update:this.calculateVertexValid,noAlloc:s},elevations:{size:1,stepMode:"dynamic",transition:nf,accessor:"getElevation"},fillColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:nf,accessor:"getFillColor",defaultValue:of},lineColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:nf,accessor:"getLineColor",defaultValue:of},pickingColors:{size:4,type:"uint8",stepMode:"dynamic",accessor:(a,{index:c,target:l})=>this.encodePickingColor(a&&a.__source?a.__source.index:c,l)}})}getPickingInfo(e){let r=super.getPickingInfo(e),{index:i}=r,n=this.props.data;return n[0]&&n[0].__source&&(r.object=n.find(o=>o.__source.index===i)),r}disablePickingIndex(e){let r=this.props.data;if(r[0]&&r[0].__source)for(let i=0;i<r.length;i++)r[i].__source.index===e&&this._disablePickingIndex(i);else super.disablePickingIndex(e)}draw({uniforms:e}){let{extruded:r,filled:i,wireframe:n,elevationScale:o}=this.props,{topModel:s,sideModel:a,wireframeModel:c,polygonTesselator:l}=this.state,f={extruded:!!r,elevationScale:o,isWireframe:!1};c&&n&&(c.setInstanceCount(l.instanceCount-1),c.shaderInputs.setProps({solidPolygon:{...f,isWireframe:!0}}),c.draw(this.context.renderPass)),a&&i&&(a.setInstanceCount(l.instanceCount-1),a.shaderInputs.setProps({solidPolygon:f}),a.draw(this.context.renderPass)),s&&i&&(s.setVertexCount(l.vertexCount),s.shaderInputs.setProps({solidPolygon:f}),s.draw(this.context.renderPass))}updateState(e){super.updateState(e),this.updateGeometry(e);let{props:r,oldProps:i,changeFlags:n}=e,o=this.getAttributeManager();(n.extensionsChanged||r.filled!==i.filled||r.extruded!==i.extruded)&&(this.state.models?.forEach(a=>a.destroy()),this.setState(this._getModels()),o.invalidateAll())}updateGeometry({props:e,oldProps:r,changeFlags:i}){if(i.dataChanged||i.updateTriggersChanged&&(i.updateTriggersChanged.all||i.updateTriggersChanged.getPolygon)){let{polygonTesselator:o}=this.state,s=e.data.attributes||{};o.updateGeometry({data:e.data,normalize:e._normalize,geometryBuffer:s.getPolygon,buffers:s,getGeometry:e.getPolygon,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,fp64:this.use64bitPositions(),dataChanged:i.dataChanged,full3d:e._full3d}),this.setState({numInstances:o.instanceCount,startIndices:o.vertexStarts}),i.dataChanged||this.getAttributeManager().invalidateAll()}}_getModels(){let{id:e,filled:r,extruded:i}=this.props,n,o,s;if(r){let a=this.getShaders("top");a.defines.NON_INSTANCED_MODEL=1;let c=this.getAttributeManager().getBufferLayouts({isInstanced:!1});n=new ae(this.context.device,{...a,id:`${e}-top`,topology:"triangle-list",bufferLayout:c,isIndexed:!0,userData:{excludeAttributes:{instanceVertexValid:!0}}})}if(i){let a=this.getAttributeManager().getBufferLayouts({isInstanced:!0});o=new ae(this.context.device,{...this.getShaders("side"),id:`${e}-side`,bufferLayout:a,geometry:new Te({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,1,1,0,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}}),s=new ae(this.context.device,{...this.getShaders("side"),id:`${e}-wireframe`,bufferLayout:a,geometry:new Te({topology:"line-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,0,1,1,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}})}return{models:[o,s,n].filter(Boolean),topModel:n,sideModel:o,wireframeModel:s}}calculateIndices(e){let{polygonTesselator:r}=this.state;e.startIndices=r.indexStarts,e.value=r.get("indices")}calculatePositions(e){let{polygonTesselator:r}=this.state;e.startIndices=r.vertexStarts,e.value=r.get("positions")}calculateVertexValid(e){e.value=this.state.polygonTesselator.get("vertexValid")}};Vs.defaultProps=gF;Vs.layerName="SolidPolygonLayer";var sf=Vs;function af({data:t,getIndex:e,dataRange:r,replace:i}){let{startRow:n=0,endRow:o=1/0}=r,s=t.length,a=s,c=s;for(let d=0;d<s;d++){let h=e(t[d]);if(a>d&&h>=n&&(a=d),h>=o){c=d;break}}let l=a,u=c-a!==i.length?t.slice(c):void 0;for(let d=0;d<i.length;d++)t[l++]=i[d];if(u){for(let d=0;d<u.length;d++)t[l++]=u[d];t.length=l}return{startRow:a,endRow:a+i.length}}var jS=[0,0,0,255],mF=[0,0,0,255],_F={stroked:!0,filled:!0,extruded:!1,elevationScale:1,wireframe:!1,_normalize:!0,_windingOrder:"CW",lineWidthUnits:"meters",lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:Number.MAX_SAFE_INTEGER,lineJointRounded:!1,lineMiterLimit:4,getPolygon:{type:"accessor",value:t=>t.polygon},getFillColor:{type:"accessor",value:mF},getLineColor:{type:"accessor",value:jS},getLineWidth:{type:"accessor",value:1},getElevation:{type:"accessor",value:1e3},material:!0},Hs=class extends ni{initializeState(){this.state={paths:[],pathsDiff:null},this.props.getLineDashArray&&P.removed("getLineDashArray","PathStyleExtension")()}updateState({changeFlags:e}){let r=e.dataChanged||e.updateTriggersChanged&&(e.updateTriggersChanged.all||e.updateTriggersChanged.getPolygon);if(r&&Array.isArray(e.dataChanged)){let i=this.state.paths.slice(),n=e.dataChanged.map(o=>af({data:i,getIndex:s=>s.__source.index,dataRange:o,replace:this._getPaths(o)}));this.setState({paths:i,pathsDiff:n})}else r&&this.setState({paths:this._getPaths(),pathsDiff:null})}_getPaths(e={}){let{data:r,getPolygon:i,positionFormat:n,_normalize:o}=this.props,s=[],a=n==="XY"?2:3,{startRow:c,endRow:l}=e,{iterable:f,objectInfo:u}=Pe(r,c,l);for(let d of f){u.index++;let h=i(d,u);o&&(h=tf(h,a));let{holeIndices:p}=h,g=h.positions||h;if(p)for(let m=0;m<=p.length;m++){let b=g.slice(p[m-1]||0,p[m]||g.length);s.push(this.getSubLayerRow({path:b},d,u.index))}else s.push(this.getSubLayerRow({path:g},d,u.index))}return s}renderLayers(){let{data:e,_dataDiff:r,stroked:i,filled:n,extruded:o,wireframe:s,_normalize:a,_windingOrder:c,elevationScale:l,transitions:f,positionFormat:u}=this.props,{lineWidthUnits:d,lineWidthScale:h,lineWidthMinPixels:p,lineWidthMaxPixels:g,lineJointRounded:m,lineMiterLimit:b,lineDashJustified:y}=this.props,{getFillColor:_,getLineColor:A,getLineWidth:T,getLineDashArray:S,getElevation:v,getPolygon:M,updateTriggers:C,material:R}=this.props,{paths:I,pathsDiff:w}=this.state,U=this.getSubLayerClass("fill",sf),D=this.getSubLayerClass("stroke",tn),ee=this.shouldRenderSubLayer("fill",I)&&new U({_dataDiff:r,extruded:o,elevationScale:l,filled:n,wireframe:s,_normalize:a,_windingOrder:c,getElevation:v,getFillColor:_,getLineColor:o&&s?A:jS,material:R,transitions:f},this.getSubLayerProps({id:"fill",updateTriggers:C&&{getPolygon:C.getPolygon,getElevation:C.getElevation,getFillColor:C.getFillColor,lineColors:o&&s,getLineColor:C.getLineColor}}),{data:e,positionFormat:u,getPolygon:M}),Z=!o&&i&&this.shouldRenderSubLayer("stroke",I)&&new D({_dataDiff:w&&(()=>w),widthUnits:d,widthScale:h,widthMinPixels:p,widthMaxPixels:g,jointRounded:m,miterLimit:b,dashJustified:y,_pathType:"loop",transitions:f&&{getWidth:f.getLineWidth,getColor:f.getLineColor,getPath:f.getPolygon},getColor:this.getSubLayerAccessor(A),getWidth:this.getSubLayerAccessor(T),getDashArray:this.getSubLayerAccessor(S)},this.getSubLayerProps({id:"stroke",updateTriggers:C&&{getWidth:C.getLineWidth,getColor:C.getLineColor,getDashArray:C.getLineDashArray}}),{data:I,positionFormat:u,getPath:K=>K.path});return[!o&&ee,Z,o&&ee]}};Hs.layerName="PolygonLayer";Hs.defaultProps=_F;var WS=Hs;function GS(t,e){if(!t)return null;let r="startIndices"in t?t.startIndices[e]:e,i=t.featureIds.value[r];return r!==-1?bF(t,i,r):null}function bF(t,e,r){let i={properties:{...t.properties[e]}};for(let n in t.numericProps)i.properties[n]=t.numericProps[n].value[r];return i}function XS(t,e){let r={points:null,lines:null,polygons:null};for(let i in r){let n=t[i].globalFeatureIds.value;r[i]=new Uint8ClampedArray(n.length*4);let o=[];for(let s=0;s<n.length;s++)e(n[s],o),r[i][s*4+0]=o[0],r[i][s*4+1]=o[1],r[i][s*4+2]=o[2],r[i][s*4+3]=255}return r}var $S=`layout(std140) uniform sdfUniforms {
  float gamma;
  bool enabled;
  float buffer;
  float outlineBuffer;
  vec4 outlineColor;
} sdf;
`,KS={name:"sdf",vs:$S,fs:$S,uniformTypes:{gamma:"f32",enabled:"f32",buffer:"f32",outlineBuffer:"f32",outlineColor:"vec4<f32>"}};var zs={none:0,start:1,center:2,end:3},AF=`layout(std140) uniform textUniforms {
  highp vec2 cutoffPixels;
  highp ivec2 align;
  highp float fontSize;
  bool flipY;
} text;

#define ALIGN_MODE_START ${zs.start}
#define ALIGN_MODE_CENTER ${zs.center}
#define ALIGN_MODE_END ${zs.end}
`,cf={name:"text",vs:AF,getUniforms:({contentCutoffPixels:t=[0,0],contentAlignHorizontal:e="none",contentAlignVertical:r="none",fontSize:i,viewport:n})=>({cutoffPixels:t,align:[zs[e],zs[r]],fontSize:i,flipY:n?.flipY??!1}),uniformTypes:{cutoffPixels:"vec2<f32>",align:"vec2<i32>",fontSize:"f32",flipY:"f32"}};var YS=`#version 300 es
#define SHADER_NAME multi-icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in vec3 instancePickingColors;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
in vec4 instanceClipRect;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
float getPixelOffsetFromAlignment(float anchor, float extent, float clipStart, float clipEnd, int mode) {
if (clipEnd < clipStart) return 0.0;
if (mode == ALIGN_MODE_START) {
return max(- (anchor + clipStart), 0.0);
}
if (mode == ALIGN_MODE_CENTER) {
float _min = max(0., anchor + clipStart);
float _max = min(extent, anchor + clipEnd);
return _min < _max ? (_min + _max) / 2.0 - anchor : 0.0;
}
if (mode == ALIGN_MODE_END) {
return min(extent - (anchor + clipEnd), 0.);
}
return 0.0;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
vec2 anchorPosScreen;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
anchorPosScreen = gl_Position.xy / gl_Position.w;
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
vec4 anchorPos = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0));
anchorPosScreen = anchorPos.xy / anchorPos.w;
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
anchorPosScreen = vec2(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 * project.viewportSize / project.devicePixelRatio;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (text.align.x > 0 || text.align.y > 0) {
vec2 viewportPixels = project.viewportSize / project.devicePixelRatio;
vec2 scrollPixels = vec2(
getPixelOffsetFromAlignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
-getPixelOffsetFromAlignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
);
pixelOffset += scrollPixels;
gl_Position.xy += project_pixel_size_to_clipspace(scrollPixels);
}
if (instanceClipRect.z >= 0.) {
if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.x > 0.) {
float vpWidth = project.viewportSize.x / project.devicePixelRatio;
float l = max(anchorPosScreen.x + xy.x, 0.0);
float r = min(anchorPosScreen.x + xy.x + wh.x, vpWidth);
if (r - l < text.cutoffPixels.x) {
gl_Position = vec4(0.0);
}
}
}
if (instanceClipRect.w >= 0.) {
if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.y > 0.) {
float vpHeight = project.viewportSize.y / project.devicePixelRatio;
float t = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
float b = min(anchorPosScreen.y - xy.y, vpHeight);
if (b - t < text.cutoffPixels.y) {
gl_Position = vec4(0.0);
}
}
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`;var JS=`#version 300 es
#define SHADER_NAME multi-icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
if (!bool(picking.isActive)) {
float alpha = texture(iconsTexture, vTextureCoords).a;
vec4 color = vColor;
if (sdf.enabled) {
float distance = alpha;
alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);
if (sdf.outlineBuffer > 0.0) {
float inFill = alpha;
float inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
color = mix(sdf.outlineColor, vColor, inFill);
alpha = inBorder;
}
}
float a = alpha * color.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color.rgb, a * layer.opacity);
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;var cg=192/256;var yF={getIconOffsets:{type:"accessor",value:t=>t.offsets},getContentBox:{type:"accessor",value:[0,0,-1,-1]},fontSize:1,alphaCutoff:.001,smoothing:.1,outlineWidth:0,outlineColor:{type:"color",value:[0,0,0,255]},contentCutoffPixels:{type:"array",value:[0,0]},contentAlignHorizontal:"none",contentAlignVertical:"none"},js=class extends Wl{getShaders(){let e=super.getShaders();return{...e,modules:[...e.modules,cf,KS],vs:YS,fs:JS}}initializeState(){super.initializeState();let e=this.getAttributeManager(),r=e.attributes.instanceIconDefs;r.settings.update=this.calculateInstanceIconDefs,e.addInstanced({instancePickingColors:{type:"uint8",size:4,accessor:(i,{index:n,target:o})=>this.encodePickingColor(n,o)},instanceClipRect:{size:4,accessor:"getContentBox",defaultValue:[0,0,-1,-1]}})}updateState(e){super.updateState(e);let{props:r,oldProps:i,changeFlags:n}=e,{outlineColor:o}=r;if(n.updateTriggersChanged&&(n.updateTriggersChanged.getIcon||n.updateTriggersChanged.getIconOffsets)&&this.getAttributeManager().invalidate("instanceIconDefs"),o!==i.outlineColor){let s=[o[0]/255,o[1]/255,o[2]/255,(o[3]??255)/255];this.setState({outlineColor:s})}!r.sdf&&r.outlineWidth&&P.warn(`${this.id}: fontSettings.sdf is required to render outline`)()}draw(e){let{sdf:r,smoothing:i,fontSize:n,outlineWidth:o,contentCutoffPixels:s,contentAlignHorizontal:a,contentAlignVertical:c}=this.props,{outlineColor:l}=this.state,f=o?Math.max(i,cg*(1-o)):-1,u=this.state.model,d={buffer:cg,outlineBuffer:f,gamma:i,enabled:!!r,outlineColor:l},h={contentCutoffPixels:s,contentAlignHorizontal:a,contentAlignVertical:c,fontSize:n,viewport:this.context.viewport};if(u.shaderInputs.setProps({sdf:d,text:h}),super.draw(e),r&&o){let{iconManager:p}=this.state;p.getTexture()&&(u.shaderInputs.setProps({sdf:{...d,outlineBuffer:cg}}),u.draw(this.context.renderPass))}}calculateInstanceIconDefs(e,{startRow:r,endRow:i}){let{data:n,getIcon:o,getIconOffsets:s}=this.props,a=e.getVertexOffset(r),c=e.value,{iterable:l,objectInfo:f}=Pe(n,r,i);for(let u of l){f.index++;let d=o(u,f),h=s(u,f);if(d){let p=0;for(let g of Array.from(d)){let m=super.getInstanceIconDef(g);m[0]=h[p*2],m[1]+=h[p*2+1],m[6]=1,c.set(m,a),a+=e.size,p++}}}}};js.defaultProps=yF;js.layerName="MultiIconLayer";var QS=js;var lg=new Float64Array(256);for(let t=0;t<256;t++){let e=.5-Math.pow(t/255,.45454545454545453);lg[t]=e*Math.abs(e)}lg[255]=-1e20;var Ws=class{constructor({fontSize:e=24,buffer:r=3,radius:i=8,cutoff:n=.25,fontFamily:o="sans-serif",fontWeight:s="normal",fontStyle:a="normal",lang:c=null}={}){this.buffer=r,this.radius=i,this.cutoff=n,this.lang=c;let l=this.size=e+r*4,f=this._createCanvas(l),u=this.ctx=f.getContext("2d",{willReadFrequently:!0});u.font=`${a} ${s} ${e}px ${o}`,u.textBaseline="alphabetic",u.textAlign="left",u.fillStyle="black",this.gridOuter=new Float64Array(l*l),this.gridInner=new Float64Array(l*l),this.f=new Float64Array(l),this.z=new Float64Array(l+1),this.v=new Uint16Array(l)}_createCanvas(e){if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(e,e);let r=document.createElement("canvas");return r.width=r.height=e,r}draw(e){let{width:r,actualBoundingBoxAscent:i,actualBoundingBoxDescent:n,actualBoundingBoxLeft:o,actualBoundingBoxRight:s}=this.ctx.measureText(e),a=Math.ceil(i),c=Math.floor(-o),l=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(s)-c)),f=Math.max(0,Math.min(this.size-this.buffer,a+Math.ceil(n))),u=l+2*this.buffer,d=f+2*this.buffer,h=Math.max(u*d,0),p=new Uint8ClampedArray(h),g={data:p,width:u,height:d,glyphWidth:l,glyphHeight:f,glyphTop:a,glyphLeft:c,glyphAdvance:r};if(l===0||f===0)return g;let{ctx:m,buffer:b,gridInner:y,gridOuter:_}=this;this.lang&&(m.lang=this.lang),m.clearRect(b,b,l,f),m.fillText(e,b-c,b+a);let A=m.getImageData(b,b,l,f);_.fill(1e20,0,h),y.fill(0,0,h);let T=3;for(let C=0;C<f;C++){let R=(C+b)*u+b;for(let I=0;I<l;I++,T+=4,R++){let w=A.data[T];if(w===0)continue;let U=lg[w];_[R]=Math.max(0,U),y[R]=Math.max(0,-U)}}ZS(_,0,0,u,d,u,this.f,this.v,this.z);let S=Math.min(b,1);ZS(y,b-S,b-S,l+2*S,f+2*S,u,this.f,this.v,this.z);let v=255/this.radius,M=255*(1-this.cutoff);for(let C=0;C<h;C++){let R=Math.sqrt(_[C])-Math.sqrt(y[C]);p[C]=Math.round(M-v*R)}return g}};function ZS(t,e,r,i,n,o,s,a,c){for(let l=e;l<e+i;l++)qS(t,r*o+l,o,n,s,a,c);for(let l=r;l<r+n;l++)qS(t,l*o+e,1,i,s,a,c)}function qS(t,e,r,i,n,o,s){o[0]=0,s[0]=-1e20,s[1]=1e20,n[0]=t[e];for(let a=1,c=0,l=0;a<i;a++){n[a]=t[e+a*r];let f=a*a;do{let u=o[c];l=(n[a]-n[u]+f-u*u)/(a-u)/2}while(l<=s[c]&&--c>-1);c++,o[c]=a,s[c]=l,s[c+1]=1e20}for(let a=0,c=0;a<i;a++){for(;s[c+1]<a;)c++;let l=o[c],f=a-l;t[e+a*r]=n[l]+f*f}}var xF=32,TF=[];function SF(t){return Math.pow(2,Math.ceil(Math.log2(t)))}function eE({characterSet:t,measureText:e,buffer:r,maxCanvasWidth:i,mapping:n={},xOffset:o=0,yOffsetMin:s=0,yOffsetMax:a=0}){let l=o,f=s,u=a;for(let d of t)if(!n[d]){let{advance:h,width:p,ascent:g,descent:m}=e(d),b=g+m;l+p+r*2>i&&(l=0,f=u),n[d]={x:l+r,y:f+r,width:p,height:b,advance:h,anchorX:p/2,anchorY:g},l+=p+r*2,u=Math.max(u,f+b+r*2)}return{mapping:n,xOffset:l,yOffsetMin:f,yOffsetMax:u,canvasHeight:SF(u)}}function tE(t,e,r,i){let n=0;for(let o=e;o<r;o++){let s=t[o];n+=i[s]?.advance||0}return n}function rE(t,e,r,i,n,o){let s=e,a=0;for(let c=e;c<r;c++){let l=tE(t,c,c+1,n);a+l>i&&(s<c&&o.push(c),s=c,a=0),a+=l}return a}function EF(t,e,r,i,n,o){let s=e,a=e,c=e,l=0;for(let f=e;f<r;f++)if((t[f]===" "||t[f+1]===" "||f+1===r)&&(c=f+1),c>a){let u=tE(t,a,c,n);l+u>i&&(s<a&&(o.push(a),s=a,l=0),u>i&&(u=rE(t,a,c,i,n,o),s=o[o.length-1])),a=c,l+=u}return l}function CF(t,e,r,i,n=0,o){o===void 0&&(o=t.length);let s=[];return e==="break-all"?rE(t,n,o,r,i,s):EF(t,n,o,r,i,s),s}function vF(t,e,r,i,n,o){let s=0,a=0;for(let c=e;c<r;c++){let l=t[c],f=i[l];f&&(a=Math.max(a,f.height))}for(let c=e;c<r;c++){let l=t[c],f=i[l];f?(n[c]=s+f.anchorX,s+=f.advance):(P.warn(`Missing character: ${l} (${l.codePointAt(0)})`)(),n[c]=s,s+=xF)}o[0]=s,o[1]=a}function iE(t,e,r,i,n,o){let s=Array.from(t),a=s.length,c=new Array(a),l=new Array(a),f=new Array(a),u=(i==="break-word"||i==="break-all")&&isFinite(n)&&n>0,d=[0,0],h=[0,0],p=0,g=e+r/2,m=0,b=0;for(let y=0;y<=a;y++){let _=s[y];if((_===`
`||y===a)&&(b=y),b>m){let A=u?CF(s,i,n,o,m,b):TF;for(let T=0;T<=A.length;T++){let S=T===0?m:A[T-1],v=T<A.length?A[T]:b;vF(s,S,v,o,c,h);for(let M=S;M<v;M++)l[M]=g,f[M]=h[0];p++,g+=r,d[0]=Math.max(d[0],h[0])}m=b}_===`
`&&(c[m]=0,l[m]=0,f[m]=0,m++)}return d[1]=p*r,{x:c,y:l,rowWidth:f,size:d}}function nE({value:t,length:e,stride:r,offset:i,startIndices:n,characterSet:o}){let s=t.BYTES_PER_ELEMENT,a=r?r/s:1,c=i?i/s:0,l=n[e]||Math.ceil((t.length-c)/a),f=o&&new Set,u=new Array(e),d=t;if(a>1||c>0){let h=t.constructor;d=new h(l);for(let p=0;p<l;p++)d[p]=t[p*a+c]}for(let h=0;h<e;h++){let p=n[h],g=n[h+1]||l,m=d.subarray(p,g);u[h]=String.fromCodePoint.apply(null,m),f&&m.forEach(f.add,f)}if(f)for(let h of f)o.add(String.fromCodePoint(h));return{texts:u,characterCount:l}}var on=class{constructor(e=5){this._cache={},this._order=[],this.limit=e}get(e){let r=this._cache[e];return r&&(this._deleteOrder(e),this._appendOrder(e)),r}set(e,r){this._cache[e]?(this.delete(e),this._cache[e]=r,this._appendOrder(e)):(Object.keys(this._cache).length===this.limit&&this.delete(this._order[0]),this._cache[e]=r,this._appendOrder(e))}delete(e){this._cache[e]&&(delete this._cache[e],this._deleteOrder(e))}_deleteOrder(e){let r=this._order.indexOf(e);r>=0&&this._order.splice(r,1)}_appendOrder(e){this._order.push(e)}};function RF(){let t=[];for(let e=32;e<128;e++)t.push(String.fromCharCode(e));return t}var ai={fontFamily:"Monaco, monospace",fontWeight:"normal",characterSet:RF(),fontSize:64,buffer:4,sdf:!1,cutoff:.25,radius:12,smoothing:.1},oE=1024,sE=.9,aE=.3,lE=3,lf=new on(lE);function MF(t,e){let r;typeof e=="string"?r=new Set(Array.from(e)):r=new Set(e);let i=lf.get(t);if(!i)return r;for(let n in i.mapping)r.has(n)&&r.delete(n);return r}function PF(t,e){for(let r=0;r<t.length;r++)e.data[4*r+3]=t[r]}function cE(t,e,r,i){t.font=`${i} ${r}px ${e}`,t.fillStyle="#000",t.textBaseline="alphabetic",t.textAlign="left"}function wF(t,e,r){if(r===void 0){let n=t.measureText("A");return n.fontBoundingBoxAscent?{advance:0,width:0,ascent:Math.ceil(n.fontBoundingBoxAscent),descent:Math.ceil(n.fontBoundingBoxDescent)}:{advance:0,width:0,ascent:e*sE,descent:e*aE}}let i=t.measureText(r);return i.actualBoundingBoxAscent?{advance:i.width,width:Math.ceil(i.actualBoundingBoxRight-i.actualBoundingBoxLeft),ascent:Math.ceil(i.actualBoundingBoxAscent),descent:Math.ceil(i.actualBoundingBoxDescent)}:{advance:i.width,width:i.width,ascent:e*sE,descent:e*aE}}function fE(t){P.assert(Number.isFinite(t)&&t>=lE,"Invalid cache limit"),lf=new on(t)}var Gs=class{constructor(){this.props={...ai}}get atlas(){return this._atlas}get mapping(){return this._atlas&&this._atlas.mapping}setProps(e={}){Object.assign(this.props,e),e._getFontRenderer&&(this._getFontRenderer=e._getFontRenderer),this._key=this._getKey();let r=MF(this._key,this.props.characterSet),i=lf.get(this._key);if(i&&r.size===0){this._atlas!==i&&(this._atlas=i);return}let n=this._generateFontAtlas(r,i);this._atlas=n,lf.set(this._key,n)}_generateFontAtlas(e,r){let{fontFamily:i,fontWeight:n,fontSize:o,buffer:s,sdf:a,radius:c,cutoff:l}=this.props,f=r&&r.data;f||(f=document.createElement("canvas"),f.width=oE);let u=f.getContext("2d",{willReadFrequently:!0});cE(u,i,o,n);let d=A=>wF(u,o,A),h;this._getFontRenderer?h=this._getFontRenderer(this.props):a&&(h={measure:d,draw:IF(this.props)});let{mapping:p,canvasHeight:g,xOffset:m,yOffsetMin:b,yOffsetMax:y}=eE({measureText:A=>h?h.measure(A):d(A),buffer:s,characterSet:e,maxCanvasWidth:oE,...r&&{mapping:r.mapping,xOffset:r.xOffset,yOffsetMin:r.yOffsetMin,yOffsetMax:r.yOffsetMax}});if(f.height!==g){let A=f.height>0?u.getImageData(0,0,f.width,f.height):null;f.height=g,A&&u.putImageData(A,0,0)}if(cE(u,i,o,n),h)for(let A of e){let T=p[A],{data:S,left:v=0,top:M=0}=h.draw(A),C=T.x-v,R=T.y-M,I=Math.max(0,Math.round(C)),w=Math.max(0,Math.round(R)),U=Math.min(S.width,f.width-I),D=Math.min(S.height,f.height-w);u.putImageData(S,I,w,0,0,U,D),T.x+=I-C,T.y+=w-R}else for(let A of e){let T=p[A];u.fillText(A,T.x,T.y+T.anchorY)}let _=h?h.measure():d();return{baselineOffset:(_.ascent-_.descent)/2,xOffset:m,yOffsetMin:b,yOffsetMax:y,mapping:p,data:f,width:f.width,height:f.height}}_getKey(){let{fontFamily:e,fontWeight:r,fontSize:i,buffer:n,sdf:o,radius:s,cutoff:a}=this.props;return o?`${e} ${r} ${i} ${n} ${s} ${a}`:`${e} ${r} ${i} ${n}`}};function IF({fontSize:t,buffer:e,radius:r,cutoff:i,fontFamily:n,fontWeight:o}){let s=new Ws({fontSize:t,buffer:e,radius:r,cutoff:i,fontFamily:n,fontWeight:`${o}`});return a=>{let{data:c,width:l,height:f}=s.draw(a),u=new ImageData(l,f);return PF(c,u),{data:u,left:e,top:e}}}var uE=`layout(std140) uniform textBackgroundUniforms {
  bool billboard;
  float sizeScale;
  float sizeMinPixels;
  float sizeMaxPixels;
  vec4 borderRadius;
  vec4 padding;
  highp int sizeUnits;
  bool stroked;
} textBackground;
`,dE={name:"textBackground",vs:uE,fs:uE,uniformTypes:{billboard:"f32",sizeScale:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",borderRadius:"vec4<f32>",padding:"vec4<f32>",sizeUnits:"i32",stroked:"f32"}};var hE=`#version 300 es
#define SHADER_NAME text-background-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceRects;
in vec4 instanceClipRect;
in float instanceSizes;
in float instanceAngles;
in vec2 instancePixelOffsets;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in vec3 instancePickingColors;
out vec4 vFillColor;
out vec4 vLineColor;
out float vLineWidth;
out vec2 uv;
out vec2 dimensions;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = radians(angle);
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vLineWidth = instanceLineWidths;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * textBackground.sizeScale, textBackground.sizeUnits),
textBackground.sizeMinPixels, textBackground.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
dimensions = instanceRects.zw * instanceScale + textBackground.padding.xy + textBackground.padding.zw;
vec2 pixelOffset = (positions * instanceRects.zw + instanceRects.xy) * instanceScale + mix(-textBackground.padding.xy, textBackground.padding.zw, positions);
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles);
pixelOffset += instancePixelOffsets;
pixelOffset.y *= -1.0;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (instanceClipRect.z >= 0.0) {
dimensions.x = wh.x;
pixelOffset.x = xy.x + uv.x * wh.x + mix(-textBackground.padding.x, textBackground.padding.z, uv.x);
}
if (instanceClipRect.w >= 0.0) {
dimensions.y = wh.y;
pixelOffset.y = xy.y + uv.y * wh.y + mix(-textBackground.padding.y, textBackground.padding.w, uv.y);
}
if (textBackground.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`;var pE=`#version 300 es
#define SHADER_NAME text-background-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in float vLineWidth;
in vec2 uv;
in vec2 dimensions;
out vec4 fragColor;
float round_rect(vec2 p, vec2 size, vec4 radii) {
vec2 pixelPositionCB = (p - 0.5) * size;
vec2 sizeCB = size * 0.5;
float maxBorderRadius = min(size.x, size.y) * 0.5;
vec4 borderRadius = vec4(min(radii, maxBorderRadius));
borderRadius.xy =
(pixelPositionCB.x > 0.0) ? borderRadius.xy : borderRadius.zw;
borderRadius.x = (pixelPositionCB.y > 0.0) ? borderRadius.x : borderRadius.y;
vec2 q = abs(pixelPositionCB) - sizeCB + borderRadius.x;
return -(min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - borderRadius.x);
}
float rect(vec2 p, vec2 size) {
vec2 pixelPosition = p * size;
return min(min(pixelPosition.x, size.x - pixelPosition.x),
min(pixelPosition.y, size.y - pixelPosition.y));
}
vec4 get_stroked_fragColor(float dist) {
float isBorder = smoothedge(dist, vLineWidth);
return mix(vFillColor, vLineColor, isBorder);
}
void main(void) {
geometry.uv = uv;
if (textBackground.borderRadius != vec4(0.0)) {
float distToEdge = round_rect(uv, dimensions, textBackground.borderRadius);
float shapeAlpha = smoothedge(-distToEdge, 0.0);
if (shapeAlpha == 0.0) {
discard;
}
if (textBackground.stroked) {
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
fragColor.a *= shapeAlpha;
} else {
if (textBackground.stroked) {
float distToEdge = rect(uv, dimensions);
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;var BF={billboard:!0,sizeScale:1,sizeUnits:"pixels",sizeMinPixels:0,sizeMaxPixels:Number.MAX_SAFE_INTEGER,fontSize:1,borderRadius:{type:"object",value:0},padding:{type:"array",value:[0,0,0,0]},getPosition:{type:"accessor",value:t=>t.position},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},getBoundingRect:{type:"accessor",value:[0,0,0,0]},getClipRect:{type:"accessor",value:[0,0,-1,-1]},getFillColor:{type:"accessor",value:[0,0,0,255]},getLineColor:{type:"accessor",value:[0,0,0,255]},getLineWidth:{type:"accessor",value:1}},Xs=class extends we{getShaders(){return super.getShaders({vs:hE,fs:pE,modules:[Oe,Ne,dE,cf]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceSizes:{size:1,transition:!0,accessor:"getSize",defaultValue:1},instanceAngles:{size:1,transition:!0,accessor:"getAngle"},instanceRects:{size:4,accessor:"getBoundingRect"},instanceClipRect:{size:4,accessor:"getClipRect",defaultValue:[0,0,-1,-1]},instancePixelOffsets:{size:2,transition:!0,accessor:"getPixelOffset"},instanceFillColors:{size:4,transition:!0,type:"unorm8",accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:4,transition:!0,type:"unorm8",accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1}})}updateState(e){super.updateState(e);let{changeFlags:r}=e;r.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{billboard:r,sizeScale:i,sizeUnits:n,sizeMinPixels:o,sizeMaxPixels:s,getLineWidth:a,fontSize:c}=this.props,{padding:l,borderRadius:f}=this.props;l.length<4&&(l=[l[0],l[1],l[0],l[1]]),Array.isArray(f)||(f=[f,f,f,f]);let u=this.state.model,d={billboard:r,stroked:!!a,borderRadius:f,padding:l,sizeUnits:xe[n],sizeScale:i,sizeMinPixels:o,sizeMaxPixels:s},h={fontSize:c,viewport:this.context.viewport};u.shaderInputs.setProps({textBackground:d,text:h}),u.draw(this.context.renderPass)}_getModel(){let e=[0,0,1,0,0,1,1,1];return new ae(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new Te({topology:"triangle-strip",vertexCount:4,attributes:{positions:{size:2,value:new Float32Array(e)}}}),isInstanced:!0})}};Xs.defaultProps=BF;Xs.layerName="TextBackgroundLayer";var gE=Xs;var mE={start:1,middle:0,end:-1},_E={top:1,center:0,bottom:-1},fg=[0,0,0,255],OF=1,LF={billboard:!0,sizeScale:1,sizeUnits:"pixels",sizeMinPixels:0,sizeMaxPixels:Number.MAX_SAFE_INTEGER,background:!1,getBackgroundColor:{type:"accessor",value:[255,255,255,255]},getBorderColor:{type:"accessor",value:fg},getBorderWidth:{type:"accessor",value:0},backgroundBorderRadius:{type:"object",value:0},backgroundPadding:{type:"array",value:[0,0,0,0]},characterSet:{type:"object",value:ai.characterSet},fontFamily:ai.fontFamily,fontWeight:ai.fontWeight,lineHeight:OF,outlineWidth:{type:"number",value:0,min:0},outlineColor:{type:"color",value:fg},fontSettings:{type:"object",value:{},compare:1},wordBreak:"break-word",maxWidth:{type:"number",value:-1},contentCutoffPixels:{type:"array",value:[0,0]},contentAlignHorizontal:"none",contentAlignVertical:"none",getText:{type:"accessor",value:t=>t.text},getPosition:{type:"accessor",value:t=>t.position},getColor:{type:"accessor",value:fg},getSize:{type:"accessor",value:32},getAngle:{type:"accessor",value:0},getTextAnchor:{type:"accessor",value:"middle"},getAlignmentBaseline:{type:"accessor",value:"center"},getPixelOffset:{type:"accessor",value:[0,0]},getContentBox:{type:"accessor",value:[0,0,-1,-1]},backgroundColor:{deprecatedFor:["background","getBackgroundColor"]}},$s=class extends ni{constructor(){super(...arguments),this.getBoundingRect=(e,r)=>{let{size:[i,n]}=this.transformParagraph(e,r),{getTextAnchor:o,getAlignmentBaseline:s}=this.props,a=mE[typeof o=="function"?o(e,r):o],c=_E[typeof s=="function"?s(e,r):s];return[(a-1)*i/2,(c-1)*n/2,i,n]},this.getIconOffsets=(e,r)=>{let{getTextAnchor:i,getAlignmentBaseline:n}=this.props,{x:o,y:s,rowWidth:a,size:[,c]}=this.transformParagraph(e,r),l=mE[typeof i=="function"?i(e,r):i],f=_E[typeof n=="function"?n(e,r):n],u=o.length,d=new Array(u*2),h=0;for(let p=0;p<u;p++)d[h++]=(l-1)*a[p]/2+o[p],d[h++]=(f-1)*c/2+s[p];return d}}initializeState(){this.state={styleVersion:0,fontAtlasManager:new Gs},this.props.maxWidth>0&&P.once(1,"v8.9 breaking change: TextLayer maxWidth is now relative to text size")()}updateState(e){let{props:r,oldProps:i,changeFlags:n}=e;(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getText))&&this._updateText(),(this._updateFontAtlas()||r.lineHeight!==i.lineHeight||r.wordBreak!==i.wordBreak||r.maxWidth!==i.maxWidth)&&this.setState({styleVersion:this.state.styleVersion+1})}getPickingInfo({info:e}){return e.object=e.index>=0?this.props.data[e.index]:null,e}_updateFontAtlas(){let{fontSettings:e,fontFamily:r,fontWeight:i,_getFontRenderer:n}=this.props,{fontAtlasManager:o,characterSet:s}=this.state,a={...e,characterSet:s,fontFamily:r,fontWeight:i,_getFontRenderer:n};if(!o.mapping)return o.setProps(a),!0;for(let c in a)if(a[c]!==o.props[c])return o.setProps(a),!0;return!1}_updateText(){let{data:e,characterSet:r}=this.props,i=e.attributes?.getText,{getText:n}=this.props,o=e.startIndices,s,a=r==="auto"&&new Set;if(i&&o){let{texts:c,characterCount:l}=nE({...ArrayBuffer.isView(i)?{value:i}:i,length:e.length,startIndices:o,characterSet:a});s=l,n=(f,{index:u})=>c[u]}else{let{iterable:c,objectInfo:l}=Pe(e);o=[0],s=0;for(let f of c){l.index++;let u=Array.from(n(f,l)||"");a&&u.forEach(a.add,a),s+=u.length,o.push(s)}}this.setState({getText:n,startIndices:o,numInstances:s,characterSet:a||r})}transformParagraph(e,r){let{fontAtlasManager:i}=this.state,n=i.mapping,{baselineOffset:o}=i.atlas,{fontSize:s}=i.props,a=this.state.getText,{wordBreak:c,lineHeight:l,maxWidth:f}=this.props,u=a(e,r)||"";return iE(u,o,l*s,c,f*s,n)}renderLayers(){let{startIndices:e,numInstances:r,getText:i,fontAtlasManager:{atlas:n,mapping:o},styleVersion:s}=this.state,{data:a,_dataDiff:c,getPosition:l,getColor:f,getSize:u,getAngle:d,getPixelOffset:h,getBackgroundColor:p,getBorderColor:g,getBorderWidth:m,getContentBox:b,backgroundBorderRadius:y,backgroundPadding:_,background:A,billboard:T,fontSettings:S,outlineWidth:v,outlineColor:M,sizeScale:C,sizeUnits:R,sizeMinPixels:I,sizeMaxPixels:w,contentCutoffPixels:U,contentAlignHorizontal:D,contentAlignVertical:ee,transitions:Z,updateTriggers:K}=this.props,oa=this.getSubLayerClass("characters",QS),sa=this.getSubLayerClass("background",gE),{fontSize:em}=this.state.fontAtlasManager.props;return[A&&new sa({getFillColor:p,getLineColor:g,getLineWidth:m,borderRadius:y,padding:_,getPosition:l,getSize:u,getAngle:d,getPixelOffset:h,getClipRect:b,billboard:T,sizeScale:C,sizeUnits:R,sizeMinPixels:I,sizeMaxPixels:w,fontSize:em,transitions:Z&&{getPosition:Z.getPosition,getAngle:Z.getAngle,getSize:Z.getSize,getFillColor:Z.getBackgroundColor,getLineColor:Z.getBorderColor,getLineWidth:Z.getBorderWidth,getPixelOffset:Z.getPixelOffset}},this.getSubLayerProps({id:"background",updateTriggers:{getPosition:K.getPosition,getAngle:K.getAngle,getSize:K.getSize,getFillColor:K.getBackgroundColor,getLineColor:K.getBorderColor,getLineWidth:K.getBorderWidth,getPixelOffset:K.getPixelOffset,getBoundingRect:{getText:K.getText,getTextAnchor:K.getTextAnchor,getAlignmentBaseline:K.getAlignmentBaseline,styleVersion:s}}}),{data:a.attributes&&a.attributes.background?{length:a.length,attributes:a.attributes.background}:a,_dataDiff:c,autoHighlight:!1,getBoundingRect:this.getBoundingRect}),new oa({sdf:S.sdf,smoothing:Number.isFinite(S.smoothing)?S.smoothing:ai.smoothing,outlineWidth:v/(S.radius||ai.radius),outlineColor:M,iconAtlas:n,iconMapping:o,getPosition:l,getColor:f,getSize:u,getAngle:d,getPixelOffset:h,getContentBox:b,billboard:T,sizeScale:C,sizeUnits:R,sizeMinPixels:I,sizeMaxPixels:w,fontSize:em,contentCutoffPixels:U,contentAlignHorizontal:D,contentAlignVertical:ee,transitions:Z&&{getPosition:Z.getPosition,getAngle:Z.getAngle,getColor:Z.getColor,getSize:Z.getSize,getPixelOffset:Z.getPixelOffset,getContentBox:Z.getContentBox}},this.getSubLayerProps({id:"characters",updateTriggers:{all:K.getText,getPosition:K.getPosition,getAngle:K.getAngle,getColor:K.getColor,getSize:K.getSize,getPixelOffset:K.getPixelOffset,getContentBox:K.getContentBox,getIconOffsets:{getTextAnchor:K.getTextAnchor,getAlignmentBaseline:K.getAlignmentBaseline,styleVersion:s}}}),{data:a,_dataDiff:c,startIndices:e,numInstances:r,getIconOffsets:this.getIconOffsets,getIcon:i})]}static set fontAtlasCacheLimit(e){fE(e)}};$s.defaultProps=LF;$s.layerName="TextLayer";var bE=$s;var Ks={circle:{type:Gl,props:{filled:"filled",stroked:"stroked",lineWidthMaxPixels:"lineWidthMaxPixels",lineWidthMinPixels:"lineWidthMinPixels",lineWidthScale:"lineWidthScale",lineWidthUnits:"lineWidthUnits",pointRadiusMaxPixels:"radiusMaxPixels",pointRadiusMinPixels:"radiusMinPixels",pointRadiusScale:"radiusScale",pointRadiusUnits:"radiusUnits",pointAntialiasing:"antialiasing",pointBillboard:"billboard",getFillColor:"getFillColor",getLineColor:"getLineColor",getLineWidth:"getLineWidth",getPointRadius:"getRadius"}},icon:{type:Wl,props:{iconAtlas:"iconAtlas",iconMapping:"iconMapping",iconSizeMaxPixels:"sizeMaxPixels",iconSizeMinPixels:"sizeMinPixels",iconSizeScale:"sizeScale",iconSizeUnits:"sizeUnits",iconAlphaCutoff:"alphaCutoff",iconBillboard:"billboard",getIcon:"getIcon",getIconAngle:"getAngle",getIconColor:"getColor",getIconPixelOffset:"getPixelOffset",getIconSize:"getSize"}},text:{type:bE,props:{textSizeMaxPixels:"sizeMaxPixels",textSizeMinPixels:"sizeMinPixels",textSizeScale:"sizeScale",textSizeUnits:"sizeUnits",textBackground:"background",textBackgroundPadding:"backgroundPadding",textFontFamily:"fontFamily",textFontWeight:"fontWeight",textLineHeight:"lineHeight",textMaxWidth:"maxWidth",textOutlineColor:"outlineColor",textOutlineWidth:"outlineWidth",textWordBreak:"wordBreak",textCharacterSet:"characterSet",textBillboard:"billboard",textFontSettings:"fontSettings",getText:"getText",getTextAngle:"getAngle",getTextColor:"getColor",getTextPixelOffset:"getPixelOffset",getTextSize:"getSize",getTextAnchor:"getTextAnchor",getTextAlignmentBaseline:"getAlignmentBaseline",getTextBackgroundColor:"getBackgroundColor",getTextBorderColor:"getBorderColor",getTextBorderWidth:"getBorderWidth"}}},Ys={type:tn,props:{lineWidthUnits:"widthUnits",lineWidthScale:"widthScale",lineWidthMinPixels:"widthMinPixels",lineWidthMaxPixels:"widthMaxPixels",lineJointRounded:"jointRounded",lineCapRounded:"capRounded",lineMiterLimit:"miterLimit",lineBillboard:"billboard",getLineColor:"getColor",getLineWidth:"getWidth"}},ff={type:sf,props:{extruded:"extruded",filled:"filled",wireframe:"wireframe",elevationScale:"elevationScale",material:"material",_full3d:"_full3d",getElevation:"getElevation",getFillColor:"getFillColor",getLineColor:"getLineColor"}};function sn({type:t,props:e}){let r={};for(let i in e)r[i]=t.defaultProps[e[i]];return r}function uf(t,e){let{transitions:r,updateTriggers:i}=t.props,n={updateTriggers:{},transitions:r&&{getPosition:r.geometry}};for(let o in e){let s=e[o],a=t.props[o];o.startsWith("get")&&(a=t.getSubLayerAccessor(a),n.updateTriggers[s]=i[o],r&&(n.transitions[s]=r[o])),n[s]=a}return n}function yE(t){if(Array.isArray(t))return t;switch(P.assert(t.type,"GeoJSON does not have type"),t.type){case"Feature":return[t];case"FeatureCollection":return P.assert(Array.isArray(t.features),"GeoJSON does not have features array"),t.features;default:return[{geometry:t}]}}function ug(t,e,r={}){let i={pointFeatures:[],lineFeatures:[],polygonFeatures:[],polygonOutlineFeatures:[]},{startRow:n=0,endRow:o=t.length}=r;for(let s=n;s<o;s++){let a=t[s],{geometry:c}=a;if(c)if(c.type==="GeometryCollection"){P.assert(Array.isArray(c.geometries),"GeoJSON does not have geometries array");let{geometries:l}=c;for(let f=0;f<l.length;f++){let u=l[f];AE(u,i,e,a,s)}}else AE(c,i,e,a,s)}return i}function AE(t,e,r,i,n){let{type:o,coordinates:s}=t,{pointFeatures:a,lineFeatures:c,polygonFeatures:l,polygonOutlineFeatures:f}=e;if(!NF(o,s)){P.warn(`${o} coordinates are malformed`)();return}switch(o){case"Point":a.push(r({geometry:t},i,n));break;case"MultiPoint":s.forEach(u=>{a.push(r({geometry:{type:"Point",coordinates:u}},i,n))});break;case"LineString":c.push(r({geometry:t},i,n));break;case"MultiLineString":s.forEach(u=>{c.push(r({geometry:{type:"LineString",coordinates:u}},i,n))});break;case"Polygon":l.push(r({geometry:t},i,n)),s.forEach(u=>{f.push(r({geometry:{type:"LineString",coordinates:u}},i,n))});break;case"MultiPolygon":s.forEach(u=>{l.push(r({geometry:{type:"Polygon",coordinates:u}},i,n)),u.forEach(d=>{f.push(r({geometry:{type:"LineString",coordinates:d}},i,n))})});break;default:}}var FF={Point:1,MultiPoint:2,LineString:2,MultiLineString:3,Polygon:3,MultiPolygon:4};function NF(t,e){let r=FF[t];for(P.assert(r,`Unknown GeoJSON type ${t}`);e&&--r>0;)e=e[0];return e&&Number.isFinite(e[0])}function xE(){return{points:{},lines:{},polygons:{},polygonsOutline:{}}}function df(t){return t.geometry.coordinates}function TE(t,e){let r=xE(),{pointFeatures:i,lineFeatures:n,polygonFeatures:o,polygonOutlineFeatures:s}=t;return r.points.data=i,r.points._dataDiff=e.pointFeatures&&(()=>e.pointFeatures),r.points.getPosition=df,r.lines.data=n,r.lines._dataDiff=e.lineFeatures&&(()=>e.lineFeatures),r.lines.getPath=df,r.polygons.data=o,r.polygons._dataDiff=e.polygonFeatures&&(()=>e.polygonFeatures),r.polygons.getPolygon=df,r.polygonsOutline.data=s,r.polygonsOutline._dataDiff=e.polygonOutlineFeatures&&(()=>e.polygonOutlineFeatures),r.polygonsOutline.getPath=df,r}function SE(t,e){let r=xE(),{points:i,lines:n,polygons:o}=t,s=XS(t,e);r.points.data={length:i.positions.value.length/i.positions.size,attributes:{...i.attributes,getPosition:i.positions,instancePickingColors:{size:4,value:s.points}},properties:i.properties,numericProps:i.numericProps,featureIds:i.featureIds},r.lines.data={length:n.pathIndices.value.length-1,startIndices:n.pathIndices.value,attributes:{...n.attributes,getPath:n.positions,instancePickingColors:{size:4,value:s.lines}},properties:n.properties,numericProps:n.numericProps,featureIds:n.featureIds},r.lines._pathType="open";let a=o.positions.value.length/o.positions.size,c=Array(a).fill(1);for(let l of o.primitivePolygonIndices.value)c[l-1]=0;return r.polygons.data={length:o.polygonIndices.value.length-1,startIndices:o.polygonIndices.value,attributes:{...o.attributes,getPolygon:o.positions,instanceVertexValid:{size:1,value:new Uint16Array(c)},pickingColors:{size:4,value:s.polygons}},properties:o.properties,numericProps:o.numericProps,featureIds:o.featureIds},r.polygons._normalize=!1,o.triangles&&(r.polygons.data.attributes.indices=o.triangles.value),r.polygonsOutline.data={length:o.primitivePolygonIndices.value.length-1,startIndices:o.primitivePolygonIndices.value,attributes:{...o.attributes,getPath:o.positions,instancePickingColors:{size:4,value:s.polygons}},properties:o.properties,numericProps:o.numericProps,featureIds:o.featureIds},r.polygonsOutline._pathType="open",r}var DF=["points","linestrings","polygons"],UF={...sn(Ks.circle),...sn(Ks.icon),...sn(Ks.text),...sn(Ys),...sn(ff),stroked:!0,filled:!0,extruded:!1,wireframe:!1,_full3d:!1,iconAtlas:{type:"object",value:null},iconMapping:{type:"object",value:{}},getIcon:{type:"accessor",value:t=>t.properties.icon},getText:{type:"accessor",value:t=>t.properties.text},pointType:"circle",getRadius:{deprecatedFor:"getPointRadius"}},Js=class extends ni{initializeState(){this.state={layerProps:{},features:{},featuresDiff:{}}}updateState({props:e,changeFlags:r}){if(!r.dataChanged)return;let{data:i}=this.props,n=i&&"points"in i&&"polygons"in i&&"lines"in i;this.setState({binary:n}),n?this._updateStateBinary({props:e,changeFlags:r}):this._updateStateJSON({props:e,changeFlags:r})}_updateStateBinary({props:e,changeFlags:r}){let i=SE(e.data,this.encodePickingColor);this.setState({layerProps:i})}_updateStateJSON({props:e,changeFlags:r}){let i=yE(e.data),n=this.getSubLayerRow.bind(this),o={},s={};if(Array.isArray(r.dataChanged)){let c=this.state.features;for(let l in c)o[l]=c[l].slice(),s[l]=[];for(let l of r.dataChanged){let f=ug(i,n,l);for(let u in c)s[u].push(af({data:o[u],getIndex:d=>d.__source.index,dataRange:l,replace:f[u]}))}}else o=ug(i,n);let a=TE(o,s);this.setState({features:o,featuresDiff:s,layerProps:a})}getPickingInfo(e){let r=super.getPickingInfo(e),{index:i,sourceLayer:n}=r;return r.featureType=DF.find(o=>n.id.startsWith(`${this.id}-${o}-`)),i>=0&&n.id.startsWith(`${this.id}-points-text`)&&this.state.binary&&(r.index=this.props.data.points.globalFeatureIds.value[i]),r}_updateAutoHighlight(e){let r=`${this.id}-points-`,i=e.featureType==="points";for(let n of this.getSubLayers())n.id.startsWith(r)===i&&n.updateAutoHighlight(e)}_renderPolygonLayer(){let{extruded:e,wireframe:r}=this.props,{layerProps:i}=this.state,n="polygons-fill",o=this.shouldRenderSubLayer(n,i.polygons?.data)&&this.getSubLayerClass(n,ff.type);if(o){let s=uf(this,ff.props),a=e&&r;return a||delete s.getLineColor,s.updateTriggers.lineColors=a,new o(s,this.getSubLayerProps({id:n,updateTriggers:s.updateTriggers}),i.polygons)}return null}_renderLineLayers(){let{extruded:e,stroked:r}=this.props,{layerProps:i}=this.state,n="polygons-stroke",o="linestrings",s=!e&&r&&this.shouldRenderSubLayer(n,i.polygonsOutline?.data)&&this.getSubLayerClass(n,Ys.type),a=this.shouldRenderSubLayer(o,i.lines?.data)&&this.getSubLayerClass(o,Ys.type);if(s||a){let c=uf(this,Ys.props);return[s&&new s(c,this.getSubLayerProps({id:n,updateTriggers:c.updateTriggers}),i.polygonsOutline),a&&new a(c,this.getSubLayerProps({id:o,updateTriggers:c.updateTriggers}),i.lines)]}return null}_renderPointLayers(){let{pointType:e}=this.props,{layerProps:r,binary:i}=this.state,{highlightedObjectIndex:n}=this.props;!i&&Number.isFinite(n)&&(n=r.points.data.findIndex(a=>a.__source.index===n));let o=new Set(e.split("+")),s=[];for(let a of o){let c=`points-${a}`,l=Ks[a],f=l&&this.shouldRenderSubLayer(c,r.points?.data)&&this.getSubLayerClass(c,l.type);if(f){let u=uf(this,l.props),d=r.points;if(a==="text"&&i){let{instancePickingColors:h,...p}=d.data.attributes;d={...d,data:{...d.data,attributes:p}}}s.push(new f(u,this.getSubLayerProps({id:c,updateTriggers:u.updateTriggers,highlightedObjectIndex:n}),d))}}return s}renderLayers(){let{extruded:e}=this.props,r=this._renderPolygonLayer(),i=this._renderLineLayers(),n=this._renderPointLayers();return[!e&&r,i,n,e&&r]}getSubLayerAccessor(e){let{binary:r}=this.state;return!r||typeof e!="function"?super.getSubLayerAccessor(e):(i,n)=>{let{data:o,index:s}=n,a=GS(o,s);return e(a,n)}}};Js.layerName="GeoJsonLayer";Js.defaultProps=UF;var EE=Js;var dg=Math.PI/180,hf=new Float32Array(16),CE=new Float32Array(12);function vE(t,e,r){let i=e[0]*dg,n=e[1]*dg,o=e[2]*dg,s=Math.sin(o),a=Math.sin(i),c=Math.sin(n),l=Math.cos(o),f=Math.cos(i),u=Math.cos(n),d=r[0],h=r[1],p=r[2];t[0]=d*u*f,t[1]=d*c*f,t[2]=d*-a,t[3]=h*(-c*l+u*a*s),t[4]=h*(u*l+c*a*s),t[5]=h*f*s,t[6]=p*(c*s+u*a*l),t[7]=p*(-u*s+c*a*l),t[8]=p*f*l}function RE(t){return t[0]=t[0],t[1]=t[1],t[2]=t[2],t[3]=t[4],t[4]=t[5],t[5]=t[6],t[6]=t[8],t[7]=t[9],t[8]=t[10],t[9]=t[12],t[10]=t[13],t[11]=t[14],t.subarray(0,12)}var ME={size:12,accessor:["getOrientation","getScale","getTranslation","getTransformMatrix"],shaderAttributes:{instanceModelMatrixCol0:{size:3,elementOffset:0},instanceModelMatrixCol1:{size:3,elementOffset:3},instanceModelMatrixCol2:{size:3,elementOffset:6},instanceTranslation:{size:3,elementOffset:9}},update(t,{startRow:e,endRow:r}){let{data:i,getOrientation:n,getScale:o,getTranslation:s,getTransformMatrix:a}=this.props,c=Array.isArray(a),l=c&&a.length===16,f=Array.isArray(o),u=Array.isArray(n),d=Array.isArray(s),h=l||!c&&!!a(i[0]);h?t.constant=l:t.constant=u&&f&&d;let p=t.value;if(t.constant){let g;h?(hf.set(a),g=RE(hf)):(g=CE,vE(g,n,o),g.set(s,9)),t.value=new Float32Array(g)}else{let g=e*t.size,{iterable:m,objectInfo:b}=Pe(i,e,r);for(let y of m){b.index++;let _;if(h)hf.set(l?a:a(y,b)),_=RE(hf);else{_=CE;let A=u?n:n(y,b),T=f?o:o(y,b);vE(_,A,T),_.set(d?s:s(y,b),9)}p[g++]=_[0],p[g++]=_[1],p[g++]=_[2],p[g++]=_[3],p[g++]=_[4],p[g++]=_[5],p[g++]=_[6],p[g++]=_[7],p[g++]=_[8],p[g++]=_[9],p[g++]=_[10],p[g++]=_[11]}}}};function PE(t,e){return e==="cartesian"||e==="meter-offsets"||e==="default"&&!t.isGeospatial}var wE="4.4.2";var pf={TRANSCODER:"basis_transcoder.js",TRANSCODER_WASM:"basis_transcoder.wasm",ENCODER:"basis_encoder.js",ENCODER_WASM:"basis_encoder.wasm"},IE;async function pg(t){pa(t.modules);let e=Yf("basis");return e||(IE||=kF(t),await IE)}async function kF(t){let e=null,r=null;return[e,r]=await Promise.all([await Ge(pf.TRANSCODER,"textures",t),await Ge(pf.TRANSCODER_WASM,"textures",t)]),e=e||globalThis.BASIS,await VF(e,r)}function VF(t,e){let r={};return e&&(r.wasmBinary=e),new Promise(i=>{t(r).then(n=>{let{BasisFile:o,initializeBasis:s}=n;s(),i({BasisFile:o})})})}var hg;async function gg(t){let e=t.modules||{};return e.basisEncoder?e.basisEncoder:(hg=hg||HF(t),await hg)}async function HF(t){let e=null,r=null;return[e,r]=await Promise.all([await Ge(pf.ENCODER,"textures",t),await Ge(pf.ENCODER_WASM,"textures",t)]),e=e||globalThis.BASIS,await zF(e,r)}function zF(t,e){let r={};return e&&(r.wasmBinary=e),new Promise(i=>{t(r).then(n=>{let{BasisFile:o,KTX2File:s,initializeBasis:a,BasisEncoder:c}=n;a(),i({BasisFile:o,KTX2File:s,BasisEncoder:c})})})}var jF=["","WEBKIT_","MOZ_"],BE={WEBGL_compressed_texture_s3tc:["bc1-rgb-unorm-webgl","bc1-rgba-unorm","bc2-rgba-unorm","bc3-rgba-unorm"],WEBGL_compressed_texture_s3tc_srgb:["bc1-rgb-unorm-srgb-webgl","bc1-rgba-unorm-srgb","bc2-rgba-unorm-srgb","bc3-rgba-unorm-srgb"],EXT_texture_compression_rgtc:["bc4-r-unorm","bc4-r-snorm","bc5-rg-unorm","bc5-rg-snorm"],EXT_texture_compression_bptc:["bc6h-rgb-ufloat","bc6h-rgb-float","bc7-rgba-unorm","bc7-rgba-unorm-srgb"],WEBGL_compressed_texture_etc1:["etc1-rgb-unorm-webgl"],WEBGL_compressed_texture_etc:["etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","eac-r11unorm","eac-r11snorm","eac-rg11unorm","eac-rg11snorm"],WEBGL_compressed_texture_pvrtc:["pvrtc-rgb4unorm-webgl","pvrtc-rgba4unorm-webgl","pvrtc-rgb2unorm-webgl","pvrtc-rgba2unorm-webgl"],WEBGL_compressed_texture_atc:["atc-rgb-unorm-webgl","atc-rgba-unorm-webgl","atc-rgbai-unorm-webgl"],WEBGL_compressed_texture_astc:["astc-4x4-unorm","astc-4x4-unorm-srgb","astc-5x4-unorm","astc-5x4-unorm-srgb","astc-5x5-unorm","astc-5x5-unorm-srgb","astc-6x5-unorm","astc-6x5-unorm-srgb","astc-6x6-unorm","astc-6x6-unorm-srgb","astc-8x5-unorm","astc-8x5-unorm-srgb","astc-8x6-unorm","astc-8x6-unorm-srgb","astc-8x8-unorm","astc-8x8-unorm-srgb","astc-10x5-unorm","astc-10x5-unorm-srgb","astc-10x6-unorm","astc-10x6-unorm-srgb","astc-10x8-unorm","astc-10x8-unorm-srgb","astc-10x10-unorm","astc-10x10-unorm-srgb","astc-12x10-unorm","astc-12x10-unorm-srgb","astc-12x12-unorm","astc-12x12-unorm-srgb"]};var gf=null;function OE(t){if(!gf){t=t||WF()||void 0,gf=new Set;for(let e of jF)for(let r in BE)if(t&&t.getExtension(`${e}${r}`))for(let i of BE[r])gf.add(i)}return gf}function WF(){try{return document.createElement("canvas").getContext("webgl")}catch{return null}}var We=[171,75,84,88,32,50,48,187,13,10,26,10];function LE(t){let e=new Uint8Array(t);return!(e.byteLength<We.length||e[0]!==We[0]||e[1]!==We[1]||e[2]!==We[2]||e[3]!==We[3]||e[4]!==We[4]||e[5]!==We[5]||e[6]!==We[6]||e[7]!==We[7]||e[8]!==We[8]||e[9]!==We[9]||e[10]!==We[10]||e[11]!==We[11])}var FE=Promise.resolve(),UE={etc1:{basisFormat:0,compressed:!0,format:36196,textureFormat:"etc1-rgb-unorm-webgl"},etc2:{basisFormat:1,compressed:!0,format:37493,textureFormat:"etc2-rgba8unorm"},bc1:{basisFormat:2,compressed:!0,format:33776,textureFormat:"bc1-rgb-unorm-webgl"},bc3:{basisFormat:3,compressed:!0,format:33779,textureFormat:"bc3-rgba-unorm"},bc4:{basisFormat:4,compressed:!0,format:36283,textureFormat:"bc4-r-unorm"},bc5:{basisFormat:5,compressed:!0,format:36285,textureFormat:"bc5-rg-unorm"},"bc7-m6-opaque-only":{basisFormat:6,compressed:!0,format:36492,textureFormat:"bc7-rgba-unorm"},"bc7-m5":{basisFormat:7,compressed:!0,format:36492,textureFormat:"bc7-rgba-unorm"},"pvrtc1-4-rgb":{basisFormat:8,compressed:!0,format:35840,textureFormat:"pvrtc-rgb4unorm-webgl"},"pvrtc1-4-rgba":{basisFormat:9,compressed:!0,format:35842,textureFormat:"pvrtc-rgba4unorm-webgl"},"astc-4x4":{basisFormat:10,compressed:!0,format:37808,textureFormat:"astc-4x4-unorm"},"atc-rgb":{basisFormat:11,compressed:!0,format:35986,textureFormat:"atc-rgb-unorm-webgl"},"atc-rgba-interpolated-alpha":{basisFormat:12,compressed:!0,format:34798,textureFormat:"atc-rgbai-unorm-webgl"},rgba32:{basisFormat:13,compressed:!1,format:32856,textureFormat:"rgba8unorm"},rgb565:{basisFormat:14,compressed:!1,format:36194,textureFormat:"rgb565unorm-webgl"},bgr565:{basisFormat:15,compressed:!1,format:36194,textureFormat:"rgb565unorm-webgl"},rgba4444:{basisFormat:16,compressed:!1,format:32854,textureFormat:"rgba4unorm-webgl"}},Lce=Object.freeze(Object.keys(UE));async function $F(t){let e=FE,r;FE=new Promise(i=>{r=i}),await e;try{return await t()}finally{r()}}async function kE(t,e={}){let r=Tn(e);return await $F(async()=>{if(!e.basis?.containerFormat||e.basis.containerFormat==="auto"){if(LE(t)){let n=await gg(r);return NE(n.KTX2File,t,e)}let{BasisFile:i}=await pg(r);return mg(i,t,e)}switch(e.basis.module){case"encoder":let i=await gg(r);switch(e.basis.containerFormat){case"ktx2":return NE(i.KTX2File,t,e);case"basis":default:return mg(i.BasisFile,t,e)}case"transcoder":default:let{BasisFile:n}=await pg(r);return mg(n,t,e)}})}function mg(t,e,r){let i=new t(new Uint8Array(e));try{if(!i.startTranscoding())throw new Error("Failed to start basis transcoding");let n=i.getNumImages(),o=[];for(let s=0;s<n;s++){let a=i.getNumLevels(s),c=[];for(let l=0;l<a;l++)c.push(KF(i,s,l,r));o.push(c)}return o}finally{i.close(),i.delete()}}function KF(t,e,r,i){let n=t.getImageWidth(e,r),o=t.getImageHeight(e,r),s=t.getHasAlpha(),{compressed:a,format:c,basisFormat:l,textureFormat:f}=VE(i,s),u=t.getImageTranscodedSizeInBytes(e,r,l),d=new Uint8Array(u);if(!t.transcodeImage(d,e,r,l,0,0))throw new Error("failed to start Basis transcoding");return{shape:"texture-level",width:n,height:o,data:d,compressed:a,...c!==void 0?{format:c}:{},...f!==void 0?{textureFormat:f}:{},hasAlpha:s}}function NE(t,e,r){let i=new t(new Uint8Array(e));try{if(!i.startTranscoding())throw new Error("failed to start KTX2 transcoding");let n=i.getLevels(),o=[];for(let s=0;s<n;s++)o.push(YF(i,s,r));return[o]}finally{i.close(),i.delete()}}function YF(t,e,r){let{alphaFlag:i,height:n,width:o}=t.getImageLevelInfo(e,0,0),{compressed:s,format:a,basisFormat:c,textureFormat:l}=VE(r,i),f=t.getImageTranscodedSizeInBytes(e,0,0,c),u=new Uint8Array(f);if(!t.transcodeImage(u,e,0,0,c,0,-1,-1))throw new Error("Failed to transcode KTX2 image");return{shape:"texture-level",width:o,height:n,data:u,compressed:s,...a!==void 0?{format:a}:{},...l!==void 0?{textureFormat:l}:{},levelSize:f,hasAlpha:i}}function VE(t,e){let r=t.basis?.format||"auto";r==="auto"&&(r=t.basis?.supportedTextureFormats?DE(t.basis.supportedTextureFormats):DE()),typeof r=="object"&&(r=e?r.alpha:r.noAlpha);let i=r.toLowerCase(),n=UE[i];if(!n)throw new Error(`Unknown Basis format ${r}`);return n}function DE(t=OE()){let e=new Set(t);return an(e,["astc-4x4-unorm","astc-4x4-unorm-srgb"])?"astc-4x4":an(e,["bc7-rgba-unorm","bc7-rgba-unorm-srgb"])?{alpha:"bc7-m5",noAlpha:"bc7-m6-opaque-only"}:an(e,["bc1-rgb-unorm-webgl","bc1-rgb-unorm-srgb-webgl","bc1-rgba-unorm","bc1-rgba-unorm-srgb","bc2-rgba-unorm","bc2-rgba-unorm-srgb","bc3-rgba-unorm","bc3-rgba-unorm-srgb"])?{alpha:"bc3",noAlpha:"bc1"}:an(e,["pvrtc-rgb4unorm-webgl","pvrtc-rgba4unorm-webgl","pvrtc-rgb2unorm-webgl","pvrtc-rgba2unorm-webgl"])?{alpha:"pvrtc1-4-rgba",noAlpha:"pvrtc1-4-rgb"}:an(e,["etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","eac-r11unorm","eac-r11snorm","eac-rg11unorm","eac-rg11snorm"])?"etc2":e.has("etc1-rgb-unorm-webgl")?"etc1":an(e,["atc-rgb-unorm-webgl","atc-rgba-unorm-webgl","atc-rgbai-unorm-webgl"])?{alpha:"atc-rgba-interpolated-alpha",noAlpha:"atc-rgb"}:"rgb565"}function an(t,e){return e.some(r=>t.has(r))}var HE={dataType:null,batchType:null,name:"Basis",id:"basis",module:"textures",version:wE,worker:!0,extensions:["basis","ktx2"],mimeTypes:["application/octet-stream","image/ktx2"],tests:["sB"],binary:!0,options:{basis:{format:"auto",containerFormat:"auto",module:"transcoder"}}},_g={...HE,parse:kE};L();var W;(function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN",t[t.ONE=1]="ONE",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.FUNC_ADD=32774]="FUNC_ADD",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST=9728]="NEAREST",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR",t[t.TEXTURE_MIN_FILTER=10241]="TEXTURE_MIN_FILTER",t[t.TEXTURE_WRAP_S=10242]="TEXTURE_WRAP_S",t[t.TEXTURE_WRAP_T=10243]="TEXTURE_WRAP_T",t[t.REPEAT=10497]="REPEAT",t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",t[t.UNPACK_FLIP_Y_WEBGL=37440]="UNPACK_FLIP_Y_WEBGL"})(W||(W={}));function jE(t){return{addressModeU:zE(t.wrapS),addressModeV:zE(t.wrapT),magFilter:JF(t.magFilter),...QF(t.minFilter)}}function zE(t){switch(t){case W.CLAMP_TO_EDGE:return"clamp-to-edge";case W.REPEAT:return"repeat";case W.MIRRORED_REPEAT:return"mirror-repeat";default:return}}function JF(t){switch(t){case W.NEAREST:return"nearest";case W.LINEAR:return"linear";default:return}}function QF(t){switch(t){case W.NEAREST:return{minFilter:"nearest"};case W.LINEAR:return{minFilter:"linear"};case W.NEAREST_MIPMAP_NEAREST:return{minFilter:"nearest",mipmapFilter:"nearest"};case W.LINEAR_MIPMAP_NEAREST:return{minFilter:"linear",mipmapFilter:"nearest"};case W.NEAREST_MIPMAP_LINEAR:return{minFilter:"nearest",mipmapFilter:"linear"};case W.LINEAR_MIPMAP_LINEAR:return{minFilter:"linear",mipmapFilter:"linear"};default:return{}}}var bg=[_e("baseColor","pbr_baseColorSampler","baseColorTexture",["pbrMetallicRoughness","baseColorTexture"]),_e("metallicRoughness","pbr_metallicRoughnessSampler","metallicRoughnessTexture",["pbrMetallicRoughness","metallicRoughnessTexture"]),_e("normal","pbr_normalSampler","normalTexture",["normalTexture"]),_e("occlusion","pbr_occlusionSampler","occlusionTexture",["occlusionTexture"]),_e("emissive","pbr_emissiveSampler","emissiveTexture",["emissiveTexture"]),_e("specularColor","pbr_specularColorSampler","KHR_materials_specular.specularColorTexture",["extensions","KHR_materials_specular","specularColorTexture"]),_e("specularIntensity","pbr_specularIntensitySampler","KHR_materials_specular.specularTexture",["extensions","KHR_materials_specular","specularTexture"]),_e("transmission","pbr_transmissionSampler","KHR_materials_transmission.transmissionTexture",["extensions","KHR_materials_transmission","transmissionTexture"]),_e("thickness","pbr_thicknessSampler","KHR_materials_volume.thicknessTexture",["extensions","KHR_materials_volume","thicknessTexture"]),_e("clearcoat","pbr_clearcoatSampler","KHR_materials_clearcoat.clearcoatTexture",["extensions","KHR_materials_clearcoat","clearcoatTexture"]),_e("clearcoatRoughness","pbr_clearcoatRoughnessSampler","KHR_materials_clearcoat.clearcoatRoughnessTexture",["extensions","KHR_materials_clearcoat","clearcoatRoughnessTexture"]),_e("clearcoatNormal","pbr_clearcoatNormalSampler","KHR_materials_clearcoat.clearcoatNormalTexture",["extensions","KHR_materials_clearcoat","clearcoatNormalTexture"]),_e("sheenColor","pbr_sheenColorSampler","KHR_materials_sheen.sheenColorTexture",["extensions","KHR_materials_sheen","sheenColorTexture"]),_e("sheenRoughness","pbr_sheenRoughnessSampler","KHR_materials_sheen.sheenRoughnessTexture",["extensions","KHR_materials_sheen","sheenRoughnessTexture"]),_e("iridescence","pbr_iridescenceSampler","KHR_materials_iridescence.iridescenceTexture",["extensions","KHR_materials_iridescence","iridescenceTexture"]),_e("iridescenceThickness","pbr_iridescenceThicknessSampler","KHR_materials_iridescence.iridescenceThicknessTexture",["extensions","KHR_materials_iridescence","iridescenceThicknessTexture"]),_e("anisotropy","pbr_anisotropySampler","KHR_materials_anisotropy.anisotropyTexture",["extensions","KHR_materials_anisotropy","anisotropyTexture"])],ZF=new Map(bg.map(t=>[t.slot,t]));function _e(t,e,r,i){return{slot:t,binding:e,displayName:r,pathSegments:i,uvSetUniform:`${t}UVSet`,uvTransformUniform:`${t}UVTransform`}}function WE(){return bg}function _f(t){let e=ZF.get(t);if(!e)throw new Error(`Unknown PBR texture transform slot ${t}`);return e}function bf(t){let e=t?.extensions?.KHR_texture_transform;return{offset:e?.offset?[e.offset[0],e.offset[1]]:[0,0],rotation:e?.rotation??0,scale:e?.scale?[e.scale[0],e.scale[1]]:[1,1]}}function Ag(t){return t?.extensions?.KHR_texture_transform?.texCoord??t?.texCoord??0}function GE(t){return bg.find(e=>e.pathSegments.length===t.length&&e.pathSegments.every((r,i)=>t[i]===r))||null}function mf(t){let e=new Ae().set(1,0,0,0,1,0,t.offset[0],t.offset[1],1),r=new Ae().set(Math.cos(t.rotation),Math.sin(t.rotation),0,-Math.sin(t.rotation),Math.cos(t.rotation),0,0,0,1),i=new Ae().set(t.scale[0],0,0,0,t.scale[1],0,0,0,1);return Array.from(e.multiplyRight(r).multiplyRight(i))}function XE(t,e){let r=new Ae(mf(t)),i=new Ae(mf(e)),n=new Ae(r).invert();return Array.from(i.multiplyRight(n))}function xg(t,e,r,i){let n={defines:{MANUAL_SRGB:!0,SRGB_FAST_APPROXIMATION:!0},bindings:{},uniforms:{camera:[0,0,0],metallicRoughnessValues:[1,1]},parameters:{},glParameters:{},generatedTextures:[]};n.defines.USE_TEX_LOD=!0;let{imageBasedLightingEnvironment:o}=i;return o&&(n.bindings.pbr_diffuseEnvSampler=o.diffuseEnvSampler.texture,n.bindings.pbr_specularEnvSampler=o.specularEnvSampler.texture,n.bindings.pbr_brdfLUT=o.brdfLutTexture.texture,n.uniforms.IBLenabled=!0,n.uniforms.scaleIBLAmbient=[1,1]),i?.pbrDebug&&(n.defines.PBR_DEBUG=!0,n.uniforms.scaleDiffBaseMR=[0,0,0,0],n.uniforms.scaleFGDSpec=[0,0,0,0]),r.NORMAL&&(n.defines.HAS_NORMALS=!0),r.TANGENT&&i?.useTangents&&(n.defines.HAS_TANGENTS=!0),r.TEXCOORD_0&&(n.defines.HAS_UV=!0),r.TEXCOORD_1&&(n.defines.HAS_UV_1=!0),r.JOINTS_0&&r.WEIGHTS_0&&(n.defines.HAS_SKIN=!0),r.COLOR_0&&(n.defines.HAS_COLORS=!0),i?.imageBasedLightingEnvironment&&(n.defines.USE_IBL=!0),i?.lights&&(n.defines.USE_LIGHTS=!0),e&&(i.validateAttributes!==!1&&qF(e,r),tN(t,e,n,r,i.gltf)),n}function qF(t,e){let r=$E(t,0);r.length>0&&!e.TEXCOORD_0&&x.warn(`glTF material uses ${r.join(", ")} but primitive is missing TEXCOORD_0; textured shading will sample the default UV coordinates`)();let i=$E(t,1);if(i.length>0&&!e.TEXCOORD_1&&x.warn(`glTF material uses ${i.join(", ")} with TEXCOORD_1 but primitive is missing TEXCOORD_1; those textures will be skipped`)(),!!(t.unlit||t.extensions?.KHR_materials_unlit)||e.NORMAL)return;let o=t.normalTexture?"lit PBR shading with normalTexture":"lit PBR shading";x.warn(`glTF primitive is missing NORMAL while using ${o}; shading will fall back to geometric normals`)()}function $E(t,e){let r=[];for(let i of WE()){let n=eN(t,i.pathSegments);n&&Ag(n)===e&&r.push(i.displayName)}return r}function eN(t,e){let r=t;for(let i of e)if(r=r?.[i],!r)return null;return r}function tN(t,e,r,i,n){if(r.uniforms.unlit=!!(e.unlit||e.extensions?.KHR_materials_unlit),e.pbrMetallicRoughness&&nN(t,e.pbrMetallicRoughness,r,i,n),e.normalTexture){be(t,e.normalTexture,"pbr_normalSampler",r,{featureOptions:{define:"HAS_NORMALMAP",enabledUniformName:"normalMapEnabled"},gltf:n,attributes:i,textureTransformSlot:"normal"});let{scale:o=1}=e.normalTexture;r.uniforms.normalScale=o}if(e.occlusionTexture){be(t,e.occlusionTexture,"pbr_occlusionSampler",r,{featureOptions:{define:"HAS_OCCLUSIONMAP",enabledUniformName:"occlusionMapEnabled"},gltf:n,attributes:i,textureTransformSlot:"occlusion"});let{strength:o=1}=e.occlusionTexture;r.uniforms.occlusionStrength=o}switch(r.uniforms.emissiveFactor=e.emissiveFactor||[0,0,0],e.emissiveTexture&&be(t,e.emissiveTexture,"pbr_emissiveSampler",r,{featureOptions:{define:"HAS_EMISSIVEMAP",enabledUniformName:"emissiveMapEnabled"},gltf:n,attributes:i,textureTransformSlot:"emissive"}),oN(t,e.extensions,r,n,i),e.alphaMode||"OPAQUE"){case"OPAQUE":break;case"MASK":{let{alphaCutoff:o=.5}=e;r.defines.ALPHA_CUTOFF=!0,r.uniforms.alphaCutoffEnabled=!0,r.uniforms.alphaCutoff=o;break}case"BLEND":x.warn("glTF BLEND alphaMode might not work well because it requires mesh sorting")(),rN(r);break}}function rN(t){t.parameters.blend=!0,t.parameters.blendColorOperation="add",t.parameters.blendColorSrcFactor="src-alpha",t.parameters.blendColorDstFactor="one-minus-src-alpha",t.parameters.blendAlphaOperation="add",t.parameters.blendAlphaSrcFactor="one",t.parameters.blendAlphaDstFactor="one-minus-src-alpha",t.glParameters.blend=!0,t.glParameters.blendEquation=W.FUNC_ADD,t.glParameters.blendFunc=[W.SRC_ALPHA,W.ONE_MINUS_SRC_ALPHA,W.ONE,W.ONE_MINUS_SRC_ALPHA]}function iN(t){t.parameters.blend=!0,t.parameters.depthWriteEnabled=!1,t.parameters.blendColorOperation="add",t.parameters.blendColorSrcFactor="one",t.parameters.blendColorDstFactor="one-minus-src-alpha",t.parameters.blendAlphaOperation="add",t.parameters.blendAlphaSrcFactor="one",t.parameters.blendAlphaDstFactor="one-minus-src-alpha",t.glParameters.blend=!0,t.glParameters.depthMask=!1,t.glParameters.blendEquation=W.FUNC_ADD,t.glParameters.blendFunc=[W.ONE,W.ONE_MINUS_SRC_ALPHA,W.ONE,W.ONE_MINUS_SRC_ALPHA]}function nN(t,e,r,i,n){e.baseColorTexture&&be(t,e.baseColorTexture,"pbr_baseColorSampler",r,{featureOptions:{define:"HAS_BASECOLORMAP",enabledUniformName:"baseColorMapEnabled"},gltf:n,attributes:i,textureTransformSlot:"baseColor"}),r.uniforms.baseColorFactor=e.baseColorFactor||[1,1,1,1],e.metallicRoughnessTexture&&be(t,e.metallicRoughnessTexture,"pbr_metallicRoughnessSampler",r,{featureOptions:{define:"HAS_METALROUGHNESSMAP",enabledUniformName:"metallicRoughnessMapEnabled"},gltf:n,attributes:i,textureTransformSlot:"metallicRoughness"});let{metallicFactor:o=1,roughnessFactor:s=1}=e;r.uniforms.metallicRoughnessValues=[o,s]}function oN(t,e,r,i,n={}){e&&(sN(e)&&(r.defines.USE_MATERIAL_EXTENSIONS=!0),aN(t,e.KHR_materials_specular,r,i,n),cN(e.KHR_materials_ior,r),lN(t,e.KHR_materials_transmission,r,i,n),fN(t,e.KHR_materials_volume,r,i,n),uN(t,e.KHR_materials_clearcoat,r,i,n),dN(t,e.KHR_materials_sheen,r,i,n),hN(t,e.KHR_materials_iridescence,r,i,n),pN(t,e.KHR_materials_anisotropy,r,i,n),gN(e.KHR_materials_emissive_strength,r))}function sN(t){return!!(t.KHR_materials_specular||t.KHR_materials_ior||t.KHR_materials_transmission||t.KHR_materials_volume||t.KHR_materials_clearcoat||t.KHR_materials_sheen||t.KHR_materials_iridescence||t.KHR_materials_anisotropy)}function aN(t,e,r,i,n={}){e&&(e.specularColorFactor&&(r.uniforms.specularColorFactor=e.specularColorFactor),e.specularFactor!==void 0&&(r.uniforms.specularIntensityFactor=e.specularFactor),e.specularColorTexture&&be(t,e.specularColorTexture,"pbr_specularColorSampler",r,{featureOptions:{define:"HAS_SPECULARCOLORMAP",enabledUniformName:"specularColorMapEnabled"},gltf:i,attributes:n,textureTransformSlot:"specularColor"}),e.specularTexture&&be(t,e.specularTexture,"pbr_specularIntensitySampler",r,{featureOptions:{define:"HAS_SPECULARINTENSITYMAP",enabledUniformName:"specularIntensityMapEnabled"},gltf:i,attributes:n,textureTransformSlot:"specularIntensity"}))}function cN(t,e){t?.ior!==void 0&&(e.uniforms.ior=t.ior)}function lN(t,e,r,i,n={}){e&&(e.transmissionFactor!==void 0&&(r.uniforms.transmissionFactor=e.transmissionFactor),e.transmissionTexture&&be(t,e.transmissionTexture,"pbr_transmissionSampler",r,{featureOptions:{define:"HAS_TRANSMISSIONMAP",enabledUniformName:"transmissionMapEnabled"},gltf:i,attributes:n,textureTransformSlot:"transmission"}),((e.transmissionFactor??0)>0||e.transmissionTexture)&&(x.warn("KHR_materials_transmission uses a premultiplied-alpha blending approximation and may require mesh sorting")(),iN(r)))}function fN(t,e,r,i,n={}){e&&(e.thicknessFactor!==void 0&&(r.uniforms.thicknessFactor=e.thicknessFactor),e.thicknessTexture&&be(t,e.thicknessTexture,"pbr_thicknessSampler",r,{featureOptions:{define:"HAS_THICKNESSMAP"},gltf:i,attributes:n,textureTransformSlot:"thickness"}),e.attenuationDistance!==void 0&&(r.uniforms.attenuationDistance=e.attenuationDistance),e.attenuationColor&&(r.uniforms.attenuationColor=e.attenuationColor))}function uN(t,e,r,i,n={}){e&&(e.clearcoatFactor!==void 0&&(r.uniforms.clearcoatFactor=e.clearcoatFactor),e.clearcoatRoughnessFactor!==void 0&&(r.uniforms.clearcoatRoughnessFactor=e.clearcoatRoughnessFactor),e.clearcoatTexture&&be(t,e.clearcoatTexture,"pbr_clearcoatSampler",r,{featureOptions:{define:"HAS_CLEARCOATMAP",enabledUniformName:"clearcoatMapEnabled"},gltf:i,attributes:n,textureTransformSlot:"clearcoat"}),e.clearcoatRoughnessTexture&&be(t,e.clearcoatRoughnessTexture,"pbr_clearcoatRoughnessSampler",r,{featureOptions:{define:"HAS_CLEARCOATROUGHNESSMAP",enabledUniformName:"clearcoatRoughnessMapEnabled"},gltf:i,attributes:n,textureTransformSlot:"clearcoatRoughness"}),e.clearcoatNormalTexture&&be(t,e.clearcoatNormalTexture,"pbr_clearcoatNormalSampler",r,{featureOptions:{define:"HAS_CLEARCOATNORMALMAP"},gltf:i,attributes:n,textureTransformSlot:"clearcoatNormal"}))}function dN(t,e,r,i,n={}){e&&(e.sheenColorFactor&&(r.uniforms.sheenColorFactor=e.sheenColorFactor),e.sheenRoughnessFactor!==void 0&&(r.uniforms.sheenRoughnessFactor=e.sheenRoughnessFactor),e.sheenColorTexture&&be(t,e.sheenColorTexture,"pbr_sheenColorSampler",r,{featureOptions:{define:"HAS_SHEENCOLORMAP",enabledUniformName:"sheenColorMapEnabled"},gltf:i,attributes:n,textureTransformSlot:"sheenColor"}),e.sheenRoughnessTexture&&be(t,e.sheenRoughnessTexture,"pbr_sheenRoughnessSampler",r,{featureOptions:{define:"HAS_SHEENROUGHNESSMAP",enabledUniformName:"sheenRoughnessMapEnabled"},gltf:i,attributes:n,textureTransformSlot:"sheenRoughness"}))}function hN(t,e,r,i,n={}){e&&(e.iridescenceFactor!==void 0&&(r.uniforms.iridescenceFactor=e.iridescenceFactor),e.iridescenceIor!==void 0&&(r.uniforms.iridescenceIor=e.iridescenceIor),(e.iridescenceThicknessMinimum!==void 0||e.iridescenceThicknessMaximum!==void 0)&&(r.uniforms.iridescenceThicknessRange=[e.iridescenceThicknessMinimum??100,e.iridescenceThicknessMaximum??400]),e.iridescenceTexture&&be(t,e.iridescenceTexture,"pbr_iridescenceSampler",r,{featureOptions:{define:"HAS_IRIDESCENCEMAP",enabledUniformName:"iridescenceMapEnabled"},gltf:i,attributes:n,textureTransformSlot:"iridescence"}),e.iridescenceThicknessTexture&&be(t,e.iridescenceThicknessTexture,"pbr_iridescenceThicknessSampler",r,{featureOptions:{define:"HAS_IRIDESCENCETHICKNESSMAP"},gltf:i,attributes:n,textureTransformSlot:"iridescenceThickness"}))}function pN(t,e,r,i,n={}){e&&(e.anisotropyStrength!==void 0&&(r.uniforms.anisotropyStrength=e.anisotropyStrength),e.anisotropyRotation!==void 0&&(r.uniforms.anisotropyRotation=e.anisotropyRotation),e.anisotropyTexture&&be(t,e.anisotropyTexture,"pbr_anisotropySampler",r,{featureOptions:{define:"HAS_ANISOTROPYMAP",enabledUniformName:"anisotropyMapEnabled"},gltf:i,attributes:n,textureTransformSlot:"anisotropy"}))}function gN(t,e){t?.emissiveStrength!==void 0&&(e.uniforms.emissiveStrength=t.emissiveStrength)}function be(t,e,r,i,n={}){let{featureOptions:o={},gltf:s,attributes:a={},textureTransformSlot:c}=n,{define:l,enabledUniformName:f}=o,u=Ag(e);if(u>1){x.warn(`Skipping ${String(r)} because ${u} is not supported; only TEXCOORD_0 and TEXCOORD_1 are currently available`)();return}if(u===1&&!a.TEXCOORD_1){x.warn(`Skipping ${String(r)} because it requires TEXCOORD_1 but the primitive does not provide TEXCOORD_1`)();return}let d=mN(e,s),h=d.texture?.source?.image;if(!h){x.warn(`Skipping unresolved glTF texture for ${String(r)}`)();return}let p={wrapS:10497,wrapT:10497,minFilter:9729,magFilter:9729,...d?.texture?.sampler},g={id:d.uniformName||d.id,sampler:jE(p)},m;if(h.compressed)m=bN(t,h,g);else{let{width:b,height:y}=t.getExternalImageSize(h);m=t.createTexture({...g,width:b,height:y,data:h})}if(i.bindings[r]=m,l&&(i.defines[l]=!0),f&&(i.uniforms[f]=!0),c){let b=_f(c);i.uniforms[b.uvSetUniform]=u,i.uniforms[b.uvTransformUniform]=mf(bf(e))}i.generatedTextures.push(m)}function mN(t,e){if(t.texture||t.index===void 0||!e?.textures)return t;let r=e.textures[t.index];return r?"texture"in r&&r.texture?{...r,...t,texture:r.texture}:"source"in r?{...t,texture:r}:t:t}function yg(t,e){return t.createTexture({...e,format:"rgba8unorm",width:1,height:1,mipLevels:1})}function KE(t){return t.textureFormat}function _N(t,e,r){let{blockWidth:i=1,blockHeight:n=1}=me.getInfo(r),o=1;for(let s=1;;s++){let a=Math.max(1,t>>s),c=Math.max(1,e>>s);if(a<i||c<n)break;o++}return o}function bN(t,e,r){let i;if(Array.isArray(e.data)&&e.data[0]?.data?i=e.data:"mipmaps"in e&&Array.isArray(e.mipmaps)?i=e.mipmaps:i=[],i.length===0||!i[0]?.data)return x.warn("createCompressedTexture: compressed image has no valid mip levels, creating fallback")(),yg(t,r);let n=i[0],o=n.width??e.width??0,s=n.height??e.height??0;if(o<=0||s<=0)return x.warn("createCompressedTexture: base level has invalid dimensions, creating fallback")(),yg(t,r);let a=KE(n);if(!a)return x.warn("createCompressedTexture: compressed image has no textureFormat, creating fallback")(),yg(t,r);let c=_N(o,s,a),l=Math.min(i.length,c),f=1;for(let d=1;d<l;d++){let h=i[d];if(!h.data||h.width<=0||h.height<=0){x.warn(`createCompressedTexture: mip level ${d} has invalid data/dimensions, truncating`)();break}let p=KE(h);if(p&&p!==a){x.warn(`createCompressedTexture: mip level ${d} format '${p}' differs from base '${a}', truncating`)();break}let g=Math.max(1,o>>d),m=Math.max(1,s>>d);if(h.width!==g||h.height!==m){x.warn(`createCompressedTexture: mip level ${d} dimensions ${h.width}x${h.height} don't match expected ${g}x${m}, truncating`)();break}f++}let u=t.createTexture({...r,format:a,usage:N.TEXTURE|N.COPY_DST,width:o,height:s,mipLevels:f,data:n.data});for(let d=1;d<f;d++)u.writeData(i[d].data,{width:i[d].width,height:i[d].height,mipLevel:d});return u}function YE(t,e={}){let r=t.lights||t.extensions?.KHR_lights_punctual?.lights;if(!r||!Array.isArray(r)||r.length===0)return[];let i=[],n=SN(t.nodes||[]),o=new Map;for(let s of t.nodes||[]){let a=s.light??s.extensions?.KHR_lights_punctual?.light;if(typeof a!="number")continue;let c=r[a];if(!c)continue;let l=AN(c.color||[1,1,1],e.useByteColors??!0),f=c.intensity??1,u=c.range,d=JE(s,n,o);switch(c.type){case"directional":i.push(xN(d,l,f));break;case"point":i.push(yN(d,l,f,u));break;case"spot":i.push(TN(d,l,f,u,c.spot));break;default:break}}return i}function AN(t,e){return e?t.map(r=>r*255):Ei(t,!1)}function yN(t,e,r,i){let n=QE(t),o=[1,0,0];return i!==void 0&&i>0&&(o=[1,0,1/(i*i)]),{type:"point",position:n,color:e,intensity:r,attenuation:o}}function xN(t,e,r){return{type:"directional",direction:ZE(t),color:e,intensity:r}}function TN(t,e,r,i,n={}){let o=QE(t),s=ZE(t),a=[1,0,0];return i!==void 0&&i>0&&(a=[1,0,1/(i*i)]),{type:"spot",position:o,direction:s,color:e,intensity:r,attenuation:a,innerConeAngle:n.innerConeAngle??0,outerConeAngle:n.outerConeAngle??Math.PI/4}}function SN(t){let e=new Map;for(let r of t)for(let i of r.children||[])e.set(i.id,r);return e}function JE(t,e,r){let i=r.get(t.id);if(i)return i;let n=EN(t),o=e.get(t.id),s=o?new V(JE(o,e,r)).multiplyRight(n):n;return r.set(t.id,s),s}function EN(t){if(t.matrix)return new V(t.matrix);let e=new V;return t.translation&&e.translate(t.translation),t.rotation&&e.multiplyRight(new V().fromQuaternion(t.rotation)),t.scale&&e.scale(t.scale),e}function QE(t){return t.transformAsPoint([0,0,0])}function ZE(t){return t.transformDirection([0,0,-1])}function qE(t){switch(t){case W.POINTS:return"point-list";case W.LINES:return"line-list";case W.LINE_STRIP:return"line-strip";case W.TRIANGLES:return"triangle-list";case W.TRIANGLE_STRIP:return"triangle-strip";default:throw new Error(String(t))}}L();var CN=`
struct VertexInputs {
  @location(0) positions: vec3f,
#ifdef HAS_NORMALS
  @location(1) normals: vec3f,
#endif
#ifdef HAS_TANGENTS
  @location(2) TANGENT: vec4f,
#endif
#ifdef HAS_UV
  @location(3) texCoords: vec2f,
#endif
#ifdef HAS_UV_1
  @location(4) texCoords1: vec2f,
#endif
#ifdef HAS_SKIN
  @location(5) JOINTS_0: vec4u,
  @location(6) WEIGHTS_0: vec4f,
#endif
};

struct FragmentInputs {
  @builtin(position) position: vec4f,
  @location(0) pbrPosition: vec3f,
  @location(1) pbrUV0: vec2f,
  @location(2) pbrUV1: vec2f,
  @location(3) pbrNormal: vec3f,
#ifdef HAS_TANGENTS
  @location(4) pbrTangent: vec4f,
#endif
};

@vertex
fn vertexMain(inputs: VertexInputs) -> FragmentInputs {
  var outputs: FragmentInputs;
  var position = vec4f(inputs.positions, 1.0);
  var normal = vec3f(0.0, 0.0, 1.0);
  var tangent = vec4f(1.0, 0.0, 0.0, 1.0);
  var uv0 = vec2f(0.0, 0.0);
  var uv1 = vec2f(0.0, 0.0);

#ifdef HAS_NORMALS
  normal = inputs.normals;
#endif
#ifdef HAS_UV
  uv0 = inputs.texCoords;
#endif
#ifdef HAS_UV_1
  uv1 = inputs.texCoords1;
#endif
#ifdef HAS_TANGENTS
  tangent = inputs.TANGENT;
#endif
#ifdef HAS_SKIN
  let skinMatrix = getSkinMatrix(inputs.WEIGHTS_0, inputs.JOINTS_0);
  position = skinMatrix * position;
  normal = normalize((skinMatrix * vec4f(normal, 0.0)).xyz);
#ifdef HAS_TANGENTS
  tangent = vec4f(normalize((skinMatrix * vec4f(tangent.xyz, 0.0)).xyz), tangent.w);
#endif
#endif

  let worldPosition = pbrProjection.modelMatrix * position;

#ifdef HAS_NORMALS
  normal = normalize((pbrProjection.normalMatrix * vec4f(normal, 0.0)).xyz);
#endif
#ifdef HAS_TANGENTS
  let worldTangent = normalize((pbrProjection.modelMatrix * vec4f(tangent.xyz, 0.0)).xyz);
  outputs.pbrTangent = vec4f(worldTangent, tangent.w);
#endif

  outputs.position = pbrProjection.modelViewProjectionMatrix * position;
  outputs.pbrPosition = worldPosition.xyz / worldPosition.w;
  outputs.pbrUV0 = uv0;
  outputs.pbrUV1 = uv1;
  outputs.pbrNormal = normal;
  return outputs;
}

@fragment
fn fragmentMain(inputs: FragmentInputs) -> @location(0) vec4f {
  fragmentInputs.pbr_vPosition = inputs.pbrPosition;
  fragmentInputs.pbr_vUV0 = inputs.pbrUV0;
  fragmentInputs.pbr_vUV1 = inputs.pbrUV1;
  fragmentInputs.pbr_vNormal = inputs.pbrNormal;
#ifdef HAS_TANGENTS
  let tangent = normalize(inputs.pbrTangent.xyz);
  let bitangent = normalize(cross(inputs.pbrNormal, tangent)) * inputs.pbrTangent.w;
  fragmentInputs.pbr_vTBN = mat3x3f(tangent, bitangent, inputs.pbrNormal);
#endif
  return pbr_filterColor(vec4f(1.0));
}
`,vN=`#version 300 es

  // in vec4 POSITION;
  in vec4 positions;

  #ifdef HAS_NORMALS
    // in vec4 NORMAL;
    in vec4 normals;
  #endif

  #ifdef HAS_TANGENTS
    in vec4 TANGENT;
  #endif

  #ifdef HAS_UV
    // in vec2 TEXCOORD_0;
    in vec2 texCoords;
  #endif

  #ifdef HAS_UV_1
    in vec2 texCoords1;
  #endif

  #ifdef HAS_SKIN
    in uvec4 JOINTS_0;
    in vec4 WEIGHTS_0;
  #endif

  void main(void) {
    vec4 _NORMAL = vec4(0.);
    vec4 _TANGENT = vec4(0.);
    vec2 _TEXCOORD_0 = vec2(0.);
    vec2 _TEXCOORD_1 = vec2(0.);

    #ifdef HAS_NORMALS
      _NORMAL = normals;
    #endif

    #ifdef HAS_TANGENTS
      _TANGENT = TANGENT;
    #endif

    #ifdef HAS_UV
      _TEXCOORD_0 = texCoords;
    #endif

    #ifdef HAS_UV_1
      _TEXCOORD_1 = texCoords1;
    #endif

    vec4 pos = positions;

    #ifdef HAS_SKIN
      mat4 skinMat = getSkinMatrix(WEIGHTS_0, JOINTS_0);
      pos = skinMat * pos;
      _NORMAL = skinMat * _NORMAL;
      _TANGENT = vec4((skinMat * vec4(_TANGENT.xyz, 0.)).xyz, _TANGENT.w);
    #endif

    pbr_setPositionNormalTangentUV(pos, _NORMAL, _TANGENT, _TEXCOORD_0, _TEXCOORD_1);
    gl_Position = pbrProjection.modelViewProjectionMatrix * pos;
  }
`,RN=`#version 300 es
  out vec4 fragmentColor;

  void main(void) {
    vec3 pos = pbr_vPosition;
    fragmentColor = pbr_filterColor(vec4(1.0));
  }
`;function Tg(t,e){let r=e.materialFactory||new Gt(t,{modules:[fr]}),i={...e.parsedPPBRMaterial.uniforms};delete i.camera;let n=Object.fromEntries(Object.entries({...i,...e.parsedPPBRMaterial.bindings}).filter(([s,a])=>r.ownsBinding(s)&&MN(a))),o=r.createMaterial({id:e.id,bindings:n});return o.setProps({pbrMaterial:i}),o}function eC(t,e){let{id:r,geometry:i,parsedPPBRMaterial:n,vertexCount:o,modelOptions:s={}}=e;x.info(4,"createGLTFModel defines: ",n.defines)();let a=[],c={depthWriteEnabled:!0,depthCompare:"less",depthFormat:"depth24plus",cullMode:"back"},l={id:r,source:CN,vs:vN,fs:RN,geometry:i,topology:i.topology,vertexCount:o,modules:[fr,Ud],...s,defines:{...n.defines,...s.defines},parameters:{...c,...n.parameters,...s.parameters}},f=e.material||Tg(t,{id:r?`${r}-material`:void 0,parsedPPBRMaterial:n});l.material=f;let u=new ae(t,l),d={...n.uniforms,...s.uniforms,...n.bindings,...s.bindings},h=PN(u.shaderInputs.getModules(),f,d);return u.shaderInputs.setProps(h),new _r({managedResources:a,model:u})}function MN(t){return t instanceof F||t instanceof He||t instanceof Re||t instanceof N||t instanceof st}function PN(t,e,r){let i=new Map;for(let o of t){for(let s of Object.keys(o.uniformTypes||{}))i.set(s,o.name);for(let s of o.bindingLayout||[])i.set(s.name,o.name)}let n={};for(let[o,s]of Object.entries(r)){if(s===void 0)continue;let a=i.get(o);!a||e.ownsModule(a)||(n[a]||={},n[a][o]=s)}return n}var wN={modelOptions:{},pbrDebug:!1,imageBasedLightingEnvironment:void 0,lights:!0,useTangents:!1,useByteColors:!0};function tC(t,e,r={}){let i={...wN,...r},n=new Gt(t,{modules:[fr]}),o=(e.materials||[]).map((u,d)=>Tg(t,{id:NN(u,d),parsedPPBRMaterial:xg(t,u,{},{...i,gltf:e,validateAttributes:!1}),materialFactory:n})),s=new Map;(e.materials||[]).forEach((u,d)=>{s.set(u.id,o[d])});let a=new Map;e.meshes.forEach((u,d)=>{let h=BN(t,u,e,s,i);a.set(u.id,h)});let c=new Map,l=new Map;return e.nodes.forEach((u,d)=>{let h=IN(t,u,i);c.set(d,h),l.set(u.id,h)}),e.nodes.forEach((u,d)=>{if(c.get(d).add((u.children??[]).map(({id:h})=>{let p=l.get(h);if(!p)throw new Error(`Cannot find child ${h} of node ${d}`);return p})),u.mesh){let h=a.get(u.mesh.id);if(!h)throw new Error(`Cannot find mesh child ${u.mesh.id} of node ${d}`);c.get(d).add(h)}}),{scenes:e.scenes.map(u=>{let d=(u.nodes||[]).map(({id:h})=>{let p=l.get(h);if(!p)throw new Error(`Cannot find child ${h} of scene ${u.name||u.id}`);return p});return new Xt({id:u.name||u.id,children:d})}),materials:o,gltfMeshIdToNodeMap:a,gltfNodeIdToNodeMap:l,gltfNodeIndexToNodeMap:c}}function IN(t,e,r){return new Xt({id:e.name||e.id,children:[],matrix:e.matrix,position:e.translation,rotation:e.rotation,scale:e.scale})}function BN(t,e,r,i,n){let s=(e.primitives||[]).map((c,l)=>ON({device:t,gltfPrimitive:c,primitiveIndex:l,gltfMesh:e,gltf:r,gltfMaterialIdToMaterialMap:i,options:n}));return new Xt({id:e.name||e.id,children:s})}function ON({device:t,gltfPrimitive:e,primitiveIndex:r,gltfMesh:i,gltf:n,gltfMaterialIdToMaterialMap:o,options:s}){let a=e.name||`${i.name||i.id}-primitive-${r}`,c=qE(e.mode??4),l=e.indices?e.indices.count:LN(e.attributes),f=FN(a,e,c),u=xg(t,e.material,f.attributes,{...s,gltf:n}),d=eC(t,{id:a,geometry:f,material:e.material&&o.get(e.material.id)||null,parsedPPBRMaterial:u,modelOptions:s.modelOptions,vertexCount:l});return d.bounds=[e.attributes.POSITION.min,e.attributes.POSITION.max],d}function LN(t){let e=1/0;for(let r of Object.values(t))if(r){let{value:i,size:n,components:o}=r,s=n??o;i?.length!==void 0&&s>=1&&(e=Math.min(e,i.length/s))}if(!Number.isFinite(e))throw new Error("Could not determine vertex count from attributes");return e}function FN(t,e,r){let i={};for(let[n,o]of Object.entries(e.attributes)){let{components:s,size:a,value:c,normalized:l}=o;i[n]={size:a??s,value:c,normalized:l}}return new Te({id:t,topology:r,indices:e.indices?.value,attributes:i})}function NN(t,e){return t.name||t.id||`material-${e}`}L();L();function DN(t,e,r){switch(e){case"translation":return t.setPosition(r).updateMatrix();case"rotation":return t.setRotation(r).updateMatrix();case"scale":return t.setScale(r).updateMatrix();default:return x.warn(`Bad animation path ${e}`)(),null}}function rC(t,{input:e,interpolation:r,output:i},n,o){let s=Sg(t,{input:e,interpolation:r,output:i},o);s&&DN(n,o,s)}function Sg(t,{input:e,interpolation:r,output:i},n){let o=e[e.length-1];if(!Number.isFinite(o)||o<=0)return i[0]||null;let s=t%o,a=e.findIndex(u=>u>=s);if(a<0)return i[i.length-1]||null;let c=Math.max(0,a-1),l=e[c],f=e[a];switch(r){case"STEP":return i[c];case"LINEAR":if(f>l){let u=(s-l)/(f-l);return UN(n,i[c],i[a],u)}return i[c]||null;case"CUBICSPLINE":if(f>l){let u=(s-l)/(f-l),d=f-l,h=i[3*c+1],p=i[3*c+2],g=i[3*a+0],m=i[3*a+1];return kN({p0:h,outTangent0:p,inTangent1:g,p1:m,tDiff:d,ratio:u})}return i[3*c+1]||null;default:return x.warn(`Interpolation ${r} not supported`)(),null}}function UN(t,e,r,i){if(t==="rotation")return new jn().slerp({start:e,target:r,ratio:i});let n=[];for(let o=0;o<e.length;o++)n[o]=i*r[o]+(1-i)*e[o];return n}function kN({p0:t,outTangent0:e,inTangent1:r,p1:i,tDiff:n,ratio:o}){let s=[];for(let a=0;a<t.length;a++){let c=e[a]*n,l=r[a]*n;s[a]=(2*Math.pow(o,3)-3*Math.pow(o,2)+1)*t[a]+(Math.pow(o,3)-2*Math.pow(o,2)+o)*c+(-2*Math.pow(o,3)+3*Math.pow(o,2))*i[a]+(Math.pow(o,3)-Math.pow(o,2))*l}return s}var Eg=class{animation;gltfNodeIdToNodeMap;materials;startTime=0;playing=!0;speed=1;materialTextureTransformState=new Map;constructor(e){if(this.animation=e.animation,this.gltfNodeIdToNodeMap=e.gltfNodeIdToNodeMap,this.materials=e.materials||[],this.animation.name||="unnamed",Object.assign(this,e),this.animation.channels.some(r=>r.type!=="node")&&!this.materials.length)throw new Error(`Animation ${this.animation.name} targets materials, but GLTFAnimator was created without a materials array`)}setTime(e){if(!this.playing)return;let i=(e/1e3-this.startTime)*this.speed;this.animation.channels.forEach(n=>{if(n.type==="node"){let{sampler:a,targetNodeId:c,path:l}=n,f=this.gltfNodeIdToNodeMap.get(c);if(!f)throw new Error(`Cannot find animation target node ${c}`);rC(i,a,f,l);return}let o=this.materials[n.targetMaterialIndex];if(!o)throw new Error(`Cannot find animation target material ${n.targetMaterialIndex} for ${n.pointer}`);let s=Sg(i,n.sampler);s&&(n.type==="material"?VN(o,n,s):jN(o,n,s,this.materialTextureTransformState))})}},Af=class{animations;constructor(e){this.animations=e.animations.map((r,i)=>{let n=r.name||`Animation-${i}`;return new Eg({gltfNodeIdToNodeMap:e.gltfNodeIdToNodeMap,materials:e.materials,animation:{name:n,channels:r.channels}})})}animate(e){x.warn("GLTFAnimator#animate is deprecated. Use GLTFAnimator#setTime instead")(),this.setTime(e)}setTime(e){this.animations.forEach(r=>r.setTime(e))}getAnimations(){return this.animations}};function VN(t,e,r){let i=e.component!==void 0?{[e.property]:zN(HN(t,e.property),e.component,r[0])}:{[e.property]:r.length===1?r[0]:r};t.setProps({pbrMaterial:i})}function HN(t,e){let i=t.shaderInputs.getUniformValues().pbrMaterial?.[e];return Array.isArray(i)?[...i]:[]}function zN(t,e,r){let i=[...t];return i[e]=r,i}function jN(t,e,r,i){let n=_f(e.textureSlot),o=WN(i,t,e);switch(e.path){case"offset":e.component!==void 0?o.offset[e.component]=r[0]:o.offset=[r[0],r[1]];break;case"rotation":o.rotation=r[0];break;case"scale":e.component!==void 0?o.scale[e.component]=r[0]:o.scale=[r[0],r[1]];break}t.setProps({pbrMaterial:{[n.uvTransformUniform]:XE(e.baseTransform,o)}})}function WN(t,e,r){let i=t.get(e)||{},n=i[r.textureSlot];return n||(n={offset:[...r.baseTransform.offset],rotation:r.baseTransform.rotation,scale:[...r.baseTransform.scale]},i[r.textureSlot]=n,t.set(e,i)),n}L();var GN={supportLevel:"none",comment:"Not currently listed in the luma.gl glTF extension support registry."},iC={KHR_draco_mesh_compression:{supportLevel:"built-in",comment:"Decoded by loaders.gl before luma.gl builds the scenegraph."},EXT_meshopt_compression:{supportLevel:"built-in",comment:"Meshopt-compressed primitives are decoded during load."},KHR_mesh_quantization:{supportLevel:"built-in",comment:"Quantized accessors are unpacked before geometry creation."},KHR_lights_punctual:{supportLevel:"built-in",comment:"Parsed into luma.gl Light objects."},KHR_materials_unlit:{supportLevel:"built-in",comment:"Unlit materials bypass the default lighting path."},KHR_materials_emissive_strength:{supportLevel:"built-in",comment:"Applied by the stock PBR shader."},KHR_texture_basisu:{supportLevel:"built-in",comment:"BasisU / KTX2 textures pass through when the device supports them."},KHR_texture_transform:{supportLevel:"built-in",comment:"UV transforms are applied during load."},EXT_texture_webp:{supportLevel:"loader-only",comment:"Texture source is resolved during load; final support depends on browser and device decode support."},EXT_texture_avif:{supportLevel:"loader-only",comment:"Texture source is resolved during load; final support depends on browser and device decode support."},KHR_materials_specular:{supportLevel:"built-in",comment:"The stock shader now applies specular factors and textures to the dielectric F0 term."},KHR_materials_ior:{supportLevel:"built-in",comment:"The stock shader now drives dielectric reflectance from the glTF IOR value."},KHR_materials_transmission:{supportLevel:"built-in",comment:"The stock shader now applies transmission to the base layer and exposes transparency through alpha, without a scene-color refraction buffer."},KHR_materials_volume:{supportLevel:"built-in",comment:"Thickness and attenuation now tint transmitted light in the stock shader."},KHR_materials_clearcoat:{supportLevel:"built-in",comment:"The stock shader now adds a secondary clearcoat specular lobe."},KHR_materials_sheen:{supportLevel:"built-in",comment:"The stock shader now adds a sheen lobe for cloth-like materials."},KHR_materials_iridescence:{supportLevel:"built-in",comment:"The stock shader now tints specular response with a view-dependent thin-film iridescence approximation."},KHR_materials_anisotropy:{supportLevel:"built-in",comment:"The stock shader now shapes highlights and IBL response with an anisotropy-direction approximation."},KHR_materials_pbrSpecularGlossiness:{supportLevel:"loader-only",comment:"Extension data can be loaded, but it is not translated into the default metallic-roughness material path."},KHR_materials_variants:{supportLevel:"loader-only",comment:"Variant metadata can be loaded, but applications must choose and apply variants."},EXT_mesh_gpu_instancing:{supportLevel:"none",comment:"GPU instancing data is not yet converted into luma.gl instanced draw setup."},KHR_node_visibility:{supportLevel:"none",comment:"Node-visibility animations and toggles are not mapped onto runtime scenegraph state."},KHR_animation_pointer:{supportLevel:"parsed-and-wired",comment:"Selected node TRS, material factor, and KHR_texture_transform offset/rotation/scale pointers are wired to runtime updates; unsupported targets are skipped."},KHR_materials_diffuse_transmission:{supportLevel:"none",comment:"Diffuse-transmission shading is not implemented in the stock PBR shader."},KHR_materials_dispersion:{supportLevel:"none",comment:"Chromatic dispersion is not implemented in the stock PBR shader."},KHR_materials_volume_scatter:{supportLevel:"none",comment:"Volume scattering is not implemented in the stock PBR shader."},KHR_xmp:{supportLevel:"none",comment:"Metadata payloads remain in the loaded glTF, but luma.gl does not interpret them."},KHR_xmp_json_ld:{supportLevel:"none",comment:"Metadata is preserved in the glTF, but luma.gl does not interpret it."},EXT_lights_image_based:{supportLevel:"none",comment:"Use loadPBREnvironment() or custom environment setup instead."},EXT_texture_video:{supportLevel:"none",comment:"Video textures are not created automatically by the stock pipeline."},MSFT_lod:{supportLevel:"none",comment:"Level-of-detail switching is not implemented in the stock scenegraph loader."}};function nC(t){let r=Array.from(XN(t)).sort().map(i=>{let n=iC[i]||GN;return[i,{extensionName:i,supported:n.supportLevel==="built-in"||n.supportLevel==="parsed-and-wired",supportLevel:n.supportLevel,comment:n.comment}]});return new Map(r)}function Cg(t){return iC[t]||null}function XN(t){let e=t,r=new Set;return yf(r,t.extensionsUsed),yf(r,t.extensionsRequired),yf(r,e.extensionsRemoved),yf(r,Object.keys(t.extensions||{})),(e.lights?.length||(t.nodes||[]).some(i=>"light"in i))&&r.add("KHR_lights_punctual"),(t.materials||[]).some(i=>{let n=i;return n.unlit||n.extensions?.KHR_materials_unlit})&&r.add("KHR_materials_unlit"),r}function yf(t,e=[]){for(let r of e)t.add(r)}var $N={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},KN={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array};function vg(t){let e=KN[t.componentType],r=$N[t.type],i=r*t.count,{buffer:n,byteOffset:o=0}=t.bufferView?.data??{};return{typedArray:new e(n,o+(t.byteOffset||0),i),components:r}}function oC(t){let e=t.animations||[],r=new Map,i=new Map;return e.flatMap((n,o)=>{let s=n.name||`Animation-${o}`,a=new Map,c=n.channels.flatMap(({sampler:l,target:f})=>{let u=a.get(l);if(!u){let h=n.samplers[l];if(!h)throw new Error(`Cannot find animation sampler ${l}`);let{input:p,interpolation:g="LINEAR",output:m}=h;u={input:nD(t.accessors[p],r),interpolation:g,output:oD(t.accessors[m],i)},a.set(l,u)}let d=YN(t,f,u);return d?[d]:[]});return c.length?[{name:s,channels:c}]:[]})}function YN(t,e,r){if(e.path==="pointer")return JN(t,e,r);let i=sC(e.path);if(!i)return null;let n=t.nodes[e.node??0];if(!n)throw new Error(`Cannot find animation target ${e.node}`);return{type:"node",sampler:r,targetNodeId:n.id,path:i}}function JN(t,e,r){let i=e.extensions?.KHR_animation_pointer?.pointer;if(typeof i!="string"||!i.startsWith("/"))return x.warn("KHR_animation_pointer channel is missing a valid JSON pointer and will be skipped")(),null;let n=rD(i);switch(n[0]){case"nodes":return QN(t,n,r,i);case"materials":return ZN(t,n,r,i);default:return Qs(i,`top-level target "${n[0]}" has no runtime animation mapping`),null}}function QN(t,e,r,i){if(e.length!==3)return Qs(i,"node pointers must use /nodes/{index}/{translation|rotation|scale|weights}"),null;let n=Number(e[1]),o=t.nodes[n];if(!Number.isInteger(n)||!o)return x.warn(`KHR_animation_pointer target ${i} references a missing node and will be skipped`)(),null;let s=sC(e[2]);return s?s==="weights"?(x.warn(`KHR_animation_pointer target ${i} will be skipped because morph weights are not implemented in GLTFAnimator`)(),null):{type:"node",sampler:r,targetNodeId:o.id,path:s}:(Qs(i,`node property "${e[2]}" has no runtime animation mapping`),null)}function ZN(t,e,r,i){if(e.length<3)return Qs(i,"material pointers must include a material index and target property path"),null;let n=Number(e[1]),o=t.materials[n];if(!Number.isInteger(n)||!o)return x.warn(`KHR_animation_pointer target ${i} references a missing material and will be skipped`)(),null;let s=qN(o,e.slice(2));return"reason"in s?(Qs(i,s.reason),null):{sampler:r,pointer:i,targetMaterialIndex:n,...s}}function sC(t){switch(t){case"translation":case"rotation":case"scale":case"weights":return t;default:return null}}function qN(t,e){let r=eD(t,e);if(!("reason"in r)||r.reason!=="not-a-texture-transform-target")return r;switch(e.join("/")){case"pbrMetallicRoughness/baseColorFactor":return t.pbrMetallicRoughness?{type:"material",property:"baseColorFactor"}:{reason:Q(e)};case"pbrMetallicRoughness/metallicFactor":return t.pbrMetallicRoughness?{type:"material",property:"metallicRoughnessValues",component:0}:{reason:Q(e)};case"pbrMetallicRoughness/roughnessFactor":return t.pbrMetallicRoughness?{type:"material",property:"metallicRoughnessValues",component:1}:{reason:Q(e)};case"normalTexture/scale":return t.normalTexture?{type:"material",property:"normalScale"}:{reason:Q(e)};case"occlusionTexture/strength":return t.occlusionTexture?{type:"material",property:"occlusionStrength"}:{reason:Q(e)};case"emissiveFactor":return{type:"material",property:"emissiveFactor"};case"alphaCutoff":return{type:"material",property:"alphaCutoff"};case"extensions/KHR_materials_specular/specularFactor":return t.extensions?.KHR_materials_specular?{type:"material",property:"specularIntensityFactor"}:{reason:Q(e)};case"extensions/KHR_materials_specular/specularColorFactor":return t.extensions?.KHR_materials_specular?{type:"material",property:"specularColorFactor"}:{reason:Q(e)};case"extensions/KHR_materials_ior/ior":return t.extensions?.KHR_materials_ior?{type:"material",property:"ior"}:{reason:Q(e)};case"extensions/KHR_materials_transmission/transmissionFactor":return t.extensions?.KHR_materials_transmission?{type:"material",property:"transmissionFactor"}:{reason:Q(e)};case"extensions/KHR_materials_volume/thicknessFactor":return t.extensions?.KHR_materials_volume?{type:"material",property:"thicknessFactor"}:{reason:Q(e)};case"extensions/KHR_materials_volume/attenuationDistance":return t.extensions?.KHR_materials_volume?{type:"material",property:"attenuationDistance"}:{reason:Q(e)};case"extensions/KHR_materials_volume/attenuationColor":return t.extensions?.KHR_materials_volume?{type:"material",property:"attenuationColor"}:{reason:Q(e)};case"extensions/KHR_materials_clearcoat/clearcoatFactor":return t.extensions?.KHR_materials_clearcoat?{type:"material",property:"clearcoatFactor"}:{reason:Q(e)};case"extensions/KHR_materials_clearcoat/clearcoatRoughnessFactor":return t.extensions?.KHR_materials_clearcoat?{type:"material",property:"clearcoatRoughnessFactor"}:{reason:Q(e)};case"extensions/KHR_materials_sheen/sheenColorFactor":return t.extensions?.KHR_materials_sheen?{type:"material",property:"sheenColorFactor"}:{reason:Q(e)};case"extensions/KHR_materials_sheen/sheenRoughnessFactor":return t.extensions?.KHR_materials_sheen?{type:"material",property:"sheenRoughnessFactor"}:{reason:Q(e)};case"extensions/KHR_materials_iridescence/iridescenceFactor":return t.extensions?.KHR_materials_iridescence?{type:"material",property:"iridescenceFactor"}:{reason:Q(e)};case"extensions/KHR_materials_iridescence/iridescenceIor":return t.extensions?.KHR_materials_iridescence?{type:"material",property:"iridescenceIor"}:{reason:Q(e)};case"extensions/KHR_materials_iridescence/iridescenceThicknessMinimum":return t.extensions?.KHR_materials_iridescence?{type:"material",property:"iridescenceThicknessRange",component:0}:{reason:Q(e)};case"extensions/KHR_materials_iridescence/iridescenceThicknessMaximum":return t.extensions?.KHR_materials_iridescence?{type:"material",property:"iridescenceThicknessRange",component:1}:{reason:Q(e)};case"extensions/KHR_materials_anisotropy/anisotropyStrength":return t.extensions?.KHR_materials_anisotropy?{type:"material",property:"anisotropyStrength"}:{reason:Q(e)};case"extensions/KHR_materials_anisotropy/anisotropyRotation":return t.extensions?.KHR_materials_anisotropy?{type:"material",property:"anisotropyRotation"}:{reason:Q(e)};case"extensions/KHR_materials_emissive_strength/emissiveStrength":return t.extensions?.KHR_materials_emissive_strength?{type:"material",property:"emissiveStrength"}:{reason:Q(e)};default:return{reason:Q(e)}}}function eD(t,e){let r=e.lastIndexOf("extensions");if(r<0||e[r+1]!=="KHR_texture_transform"||r<1)return{reason:"not-a-texture-transform-target"};let i=GE(e.slice(0,r));if(!i)return{reason:iD(e.slice(0,r))};let n=tD(t,i.pathSegments);if(!n)return{reason:`texture-transform target "${e.slice(0,r).join("/")}" does not exist on the referenced material`};let o=e[r+2];if(o==="texCoord")return{reason:"animated KHR_texture_transform.texCoord is unsupported because texCoord selection is structural, not a runtime float/vector update"};if(o!=="offset"&&o!=="rotation"&&o!=="scale")return{reason:`KHR_texture_transform property "${o}" is not animatable; supported properties are offset, rotation, and scale`};let s=e[r+3];if(e.length>r+4)return{reason:`KHR_texture_transform.${o} does not support nested property paths`};let a;if(s!==void 0){if(a=Number(s),o==="rotation")return{reason:"KHR_texture_transform.rotation does not support component indices"};if(!Number.isInteger(a)||a<0||a>1)return{reason:`KHR_texture_transform.${o} component index "${s}" is invalid; only 0 and 1 are supported`}}return{type:"textureTransform",textureSlot:i.slot,path:o,component:a,baseTransform:bf(n)}}function tD(t,e){let r=t;for(let i of e)if(r=r?.[i],!r)return null;return r}function rD(t){return t.slice(1).split("/").map(e=>e.replace(/~1/g,"/").replace(/~0/g,"~"))}function Q(t){let e=aC(t);if(e){let r=Cg(e);if(r?.supportLevel==="none")return`${e} is referenced by this pointer, but ${r.comment.charAt(0).toLowerCase()}${r.comment.slice(1)}`}return`no runtime target exists for material property "${t.join("/")}"`}function iD(t){let e=aC(t);if(e){let r=Cg(e);if(r?.supportLevel==="none")return`${e} is referenced by this pointer, but ${r.comment.charAt(0).toLowerCase()}${r.comment.slice(1)}`}return`texture-transform target "${t.join("/")}" has no runtime texture-slot mapping`}function aC(t){let e=t.indexOf("extensions"),r=t[e+1];return e>=0&&r?r:null}function Qs(t,e){x.warn(`KHR_animation_pointer target ${t} will be skipped because ${e}`)()}function nD(t,e){if(e.has(t))return e.get(t);let{typedArray:r,components:i}=vg(t);cC(i===1,"accessorToJsArray1D must have exactly 1 component");let n=Array.from(r);return e.set(t,n),n}function oD(t,e){if(e.has(t))return e.get(t);let{typedArray:r,components:i}=vg(t);cC(i>=1,"accessorToJsArray2D must have at least 1 component");let n=[];for(let o=0;o<r.length;o+=i)n.push(Array.from(r.slice(o,o+i)));return e.set(t,n),n}function cC(t,e){if(!t)throw new Error(e)}function Rg(t,e,r){let{scenes:i,materials:n,gltfMeshIdToNodeMap:o,gltfNodeIdToNodeMap:s,gltfNodeIndexToNodeMap:a}=tC(t,e,r),c=oC(e),l=new Af({animations:c,gltfNodeIdToNodeMap:s,materials:n}),f=YE(e,{useByteColors:r?.useByteColors??!0}),u=nC(e),d=i.map(p=>lC(p.getBounds())),h=sD(d);return{scenes:i,materials:n,animator:l,lights:f,extensionSupport:u,sceneBounds:d,modelBounds:h,gltfMeshIdToNodeMap:o,gltfNodeIdToNodeMap:s,gltfNodeIndexToNodeMap:a,gltf:e}}function lC(t){if(!t)return{bounds:null,center:[0,0,0],size:[0,0,0],radius:.5,recommendedOrbitDistance:1};let e=[[t[0][0],t[0][1],t[0][2]],[t[1][0],t[1][1],t[1][2]]],r=[e[1][0]-e[0][0],e[1][1]-e[0][1],e[1][2]-e[0][2]],i=[e[0][0]+r[0]*.5,e[0][1]+r[1]*.5,e[0][2]+r[2]*.5],n=Math.max(r[0],r[1],r[2])*.5,o=Math.max(.5*Math.hypot(r[0],r[1],r[2]),.001);return{bounds:e,center:i,size:r,radius:o,recommendedOrbitDistance:Math.max(Math.max(n,.001)/Math.tan(Math.PI/6)*1.15,o*1.1)}}function sD(t){let e=null;for(let r of t)if(r.bounds){if(!e){e=[[...r.bounds[0]],[...r.bounds[1]]];continue}for(let i=0;i<3;i++)e[0][i]=Math.min(e[0][i],r.bounds[0][i]),e[1][i]=Math.max(e[1][i],r.bounds[1][i])}return lC(e)}var Mg={};he(Mg,{createExtMeshFeatures:()=>TD,decode:()=>_D,encode:()=>bD,name:()=>mD});function ue(t,e){if(!t)throw new Error(e||"assert failed: gltf")}var xf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Tf={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4};var fC=["SCALAR","VEC2","VEC3","VEC4"],aD=[[Int8Array,5120],[Uint8Array,5121],[Int16Array,5122],[Uint16Array,5123],[Uint32Array,5125],[Float32Array,5126],[Float64Array,5130]],cD=new Map(aD),lD={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fD={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},uD={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array};function Sf(t){return fC[t-1]||fC[0]}function vr(t){let e=cD.get(t.constructor);if(!e)throw new Error("Illegal typed array");return e}function cn(t,e){let r=uD[t.componentType],i=lD[t.type],n=fD[t.componentType],o=t.count*i,s=t.count*i*n;ue(s>=0&&s<=e.byteLength);let a=Tf[t.componentType],c=xf[t.type];return{ArrayType:r,length:o,byteLength:s,componentByteSize:a,numberOfComponentsInElement:c}}function uC(t,e,r){let i=t.bufferViews[r];ue(i);let n=i.buffer,o=e[n];ue(o);let s=(i.byteOffset||0)+o.byteOffset;return new Uint8Array(o.arrayBuffer,s,i.byteLength)}function dC(t,e,r){let i=typeof r=="number"?t.accessors?.[r]:r;if(!i)throw new Error(`No gltf accessor ${JSON.stringify(r)}`);let n=t.bufferViews?.[i.bufferView||0];if(!n)throw new Error(`No gltf buffer view for accessor ${n}`);let{arrayBuffer:o,byteOffset:s}=e[n.buffer],a=(s||0)+(i.byteOffset||0)+(n.byteOffset||0),{ArrayType:c,length:l,componentByteSize:f,numberOfComponentsInElement:u}=cn(i,n),d=f*u,h=n.byteStride||d;if(typeof n.byteStride>"u"||n.byteStride===d)return new c(o,a,l);let p=new c(l);for(let g=0;g<i.count;g++){let m=new c(o,a+g*h,u);p.set(m,g*u)}return p}function dD(){return{asset:{version:"2.0",generator:"loaders.gl"},buffers:[],extensions:{},extensionsRequired:[],extensionsUsed:[]}}var j=class{gltf;sourceBuffers;byteLength;constructor(e){this.gltf={json:e?.json||dD(),buffers:e?.buffers||[],images:e?.images||[]},this.sourceBuffers=[],this.byteLength=0,this.gltf.buffers&&this.gltf.buffers[0]&&(this.byteLength=this.gltf.buffers[0].byteLength,this.sourceBuffers=[this.gltf.buffers[0]])}get json(){return this.gltf.json}getApplicationData(e){return this.json[e]}getExtraData(e){return(this.json.extras||{})[e]}hasExtension(e){let r=this.getUsedExtensions().find(n=>n===e),i=this.getRequiredExtensions().find(n=>n===e);return typeof r=="string"||typeof i=="string"}getExtension(e){let r=this.getUsedExtensions().find(n=>n===e),i=this.json.extensions||{};return r?i[e]:null}getRequiredExtension(e){return this.getRequiredExtensions().find(i=>i===e)?this.getExtension(e):null}getRequiredExtensions(){return this.json.extensionsRequired||[]}getUsedExtensions(){return this.json.extensionsUsed||[]}getRemovedExtensions(){return this.json.extensionsRemoved||[]}getObjectExtension(e,r){return(e.extensions||{})[r]}getScene(e){return this.getObject("scenes",e)}getNode(e){return this.getObject("nodes",e)}getSkin(e){return this.getObject("skins",e)}getMesh(e){return this.getObject("meshes",e)}getMaterial(e){return this.getObject("materials",e)}getAccessor(e){return this.getObject("accessors",e)}getTexture(e){return this.getObject("textures",e)}getSampler(e){return this.getObject("samplers",e)}getImage(e){return this.getObject("images",e)}getBufferView(e){return this.getObject("bufferViews",e)}getBuffer(e){return this.getObject("buffers",e)}getObject(e,r){if(typeof r=="object")return r;let i=this.json[e]&&this.json[e][r];if(!i)throw new Error(`glTF file error: Could not find ${e}[${r}]`);return i}getTypedArrayForBufferView(e){e=this.getBufferView(e);let r=e.buffer,i=this.gltf.buffers[r];ue(i);let n=(e.byteOffset||0)+i.byteOffset;return new Uint8Array(i.arrayBuffer,n,e.byteLength)}getTypedArrayForAccessor(e){let r=this.getAccessor(e);return dC(this.gltf.json,this.gltf.buffers,r)}getTypedArrayForImageData(e){e=this.getAccessor(e);let r=this.getBufferView(e.bufferView),n=this.getBuffer(r.buffer).data,o=r.byteOffset||0;return new Uint8Array(n,o,r.byteLength)}addApplicationData(e,r){return this.json[e]=r,this}addExtraData(e,r){return this.json.extras=this.json.extras||{},this.json.extras[e]=r,this}addObjectExtension(e,r,i){return e.extensions=e.extensions||{},e.extensions[r]=i,this.registerUsedExtension(r),this}setObjectExtension(e,r,i){let n=e.extensions||{};n[r]=i}removeObjectExtension(e,r){let i=e?.extensions||{};if(i[r]){this.json.extensionsRemoved=this.json.extensionsRemoved||[];let n=this.json.extensionsRemoved;n.includes(r)||n.push(r)}delete i[r]}addExtension(e,r={}){return ue(r),this.json.extensions=this.json.extensions||{},this.json.extensions[e]=r,this.registerUsedExtension(e),r}addRequiredExtension(e,r={}){return ue(r),this.addExtension(e,r),this.registerRequiredExtension(e),r}registerUsedExtension(e){this.json.extensionsUsed=this.json.extensionsUsed||[],this.json.extensionsUsed.find(r=>r===e)||this.json.extensionsUsed.push(e)}registerRequiredExtension(e){this.registerUsedExtension(e),this.json.extensionsRequired=this.json.extensionsRequired||[],this.json.extensionsRequired.find(r=>r===e)||this.json.extensionsRequired.push(e)}removeExtension(e){if(this.json.extensions?.[e]){this.json.extensionsRemoved=this.json.extensionsRemoved||[];let r=this.json.extensionsRemoved;r.includes(e)||r.push(e)}this.json.extensions&&delete this.json.extensions[e],this.json.extensionsRequired&&this._removeStringFromArray(this.json.extensionsRequired,e),this.json.extensionsUsed&&this._removeStringFromArray(this.json.extensionsUsed,e)}setDefaultScene(e){this.json.scene=e}addScene(e){let{nodeIndices:r}=e;return this.json.scenes=this.json.scenes||[],this.json.scenes.push({nodes:r}),this.json.scenes.length-1}addNode(e){let{meshIndex:r,matrix:i}=e;this.json.nodes=this.json.nodes||[];let n={mesh:r};return i&&(n.matrix=i),this.json.nodes.push(n),this.json.nodes.length-1}addMesh(e){let{attributes:r,indices:i,material:n,mode:o=4}=e,a={primitives:[{attributes:this._addAttributes(r),mode:o}]};if(i){let c=this._addIndices(i);a.primitives[0].indices=c}return Number.isFinite(n)&&(a.primitives[0].material=n),this.json.meshes=this.json.meshes||[],this.json.meshes.push(a),this.json.meshes.length-1}addPointCloud(e){let i={primitives:[{attributes:this._addAttributes(e),mode:0}]};return this.json.meshes=this.json.meshes||[],this.json.meshes.push(i),this.json.meshes.length-1}addImage(e,r){let i=Br(e),n=r||i?.mimeType,s={bufferView:this.addBufferView(e),mimeType:n};return this.json.images=this.json.images||[],this.json.images.push(s),this.json.images.length-1}addBufferView(e,r=0,i=this.byteLength){let n=e.byteLength;ue(Number.isFinite(n)),this.sourceBuffers=this.sourceBuffers||[],this.sourceBuffers.push(e);let o={buffer:r,byteOffset:i,byteLength:n};return this.byteLength+=tr(n,4),this.json.bufferViews=this.json.bufferViews||[],this.json.bufferViews.push(o),this.json.bufferViews.length-1}addAccessor(e,r){let i={bufferView:e,type:Sf(r.size),componentType:r.componentType,count:r.count,max:r.max,min:r.min};return this.json.accessors=this.json.accessors||[],this.json.accessors.push(i),this.json.accessors.length-1}addBinaryBuffer(e,r={size:3}){let i=this.addBufferView(e),n={min:r.min,max:r.max};(!n.min||!n.max)&&(n=this._getAccessorMinMax(e,r.size));let o={size:r.size,componentType:vr(e),count:Math.round(e.length/r.size),min:n.min,max:n.max};return this.addAccessor(i,Object.assign(o,r))}addTexture(e){let{imageIndex:r}=e,i={source:r};return this.json.textures=this.json.textures||[],this.json.textures.push(i),this.json.textures.length-1}addMaterial(e){return this.json.materials=this.json.materials||[],this.json.materials.push(e),this.json.materials.length-1}createBinaryChunk(){let e=this.byteLength,r=new ArrayBuffer(e),i=new Uint8Array(r),n=0;for(let o of this.sourceBuffers||[])n=au(o,i,n);this.json?.buffers?.[0]?this.json.buffers[0].byteLength=e:this.json.buffers=[{byteLength:e}],this.gltf.binary=r,this.sourceBuffers=[r],this.gltf.buffers=[{arrayBuffer:r,byteOffset:0,byteLength:r.byteLength}]}_removeStringFromArray(e,r){let i=!0;for(;i;){let n=e.indexOf(r);n>-1?e.splice(n,1):i=!1}}_addAttributes(e={}){let r={};for(let i in e){let n=e[i],o=this._getGltfAttributeName(i),s=this.addBinaryBuffer(n.value,n);r[o]=s}return r}_addIndices(e){return this.addBinaryBuffer(e,{size:1})}_getGltfAttributeName(e){switch(e.toLowerCase()){case"position":case"positions":case"vertices":return"POSITION";case"normal":case"normals":return"NORMAL";case"color":case"colors":return"COLOR_0";case"texcoord":case"texcoords":return"TEXCOORD_0";default:return e}}_getAccessorMinMax(e,r){let i={min:null,max:null};if(e.length<r)return i;i.min=[],i.max=[];let n=e.subarray(0,r);for(let o of n)i.min.push(o),i.max.push(o);for(let o=r;o<e.length;o+=r)for(let s=0;s<r;s++)i.min[0+s]=Math.min(i.min[0+s],e[o+s]),i.max[0+s]=Math.max(i.max[0+s],e[o+s]);return i}};function hC(t){return(t%1+1)%1}var pC={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16,BOOLEAN:1,STRING:1,ENUM:1},hD={INT8:Int8Array,UINT8:Uint8Array,INT16:Int16Array,UINT16:Uint16Array,INT32:Int32Array,UINT32:Uint32Array,INT64:BigInt64Array,UINT64:BigUint64Array,FLOAT32:Float32Array,FLOAT64:Float64Array},gC={INT8:1,UINT8:1,INT16:2,UINT16:2,INT32:4,UINT32:4,INT64:8,UINT64:8,FLOAT32:4,FLOAT64:8};function Zs(t,e){return gC[e]*pC[t]}function ln(t,e,r,i){if(r!=="UINT8"&&r!=="UINT16"&&r!=="UINT32"&&r!=="UINT64")return null;let n=t.getTypedArrayForBufferView(e),o=fn(n,"SCALAR",r,i+1);return o instanceof BigInt64Array||o instanceof BigUint64Array?null:o}function fn(t,e,r,i=1){let n=pC[e],o=hD[r],s=gC[r],a=i*n,c=a*s,l=t.buffer,f=t.byteOffset;return f%s!==0&&(l=new Uint8Array(l).slice(f,f+c).buffer,f=0),new o($e(l),f,a)}function un(t,e,r){let i=`TEXCOORD_${e.texCoord||0}`,n=r.attributes[i],o=t.getTypedArrayForAccessor(n),s=t.gltf.json,a=e.index,c=s.textures?.[a]?.source;if(typeof c<"u"){let l=s.images?.[c]?.mimeType,f=t.gltf.images?.[c];if(f&&typeof f.width<"u"){let u=[];for(let d=0;d<o.length;d+=2){let h=pD(f,l,o,d,e.channels);u.push(h)}return u}}return[]}function Ef(t,e,r,i,n){if(!r?.length)return;let o=[];for(let f of r){let u=i.findIndex(d=>d===f);u===-1&&(u=i.push(f)-1),o.push(u)}let s=new Uint32Array(o),a=t.gltf.buffers.push({arrayBuffer:s.buffer,byteOffset:s.byteOffset,byteLength:s.byteLength})-1,c=t.addBufferView(s,a,0),l=t.addAccessor(c,{size:1,componentType:vr(s),count:s.length});n.attributes[e]=l}function pD(t,e,r,i,n=[0]){let o={r:{offset:0,shift:0},g:{offset:1,shift:8},b:{offset:2,shift:16},a:{offset:3,shift:24}},s=r[i],a=r[i+1],c=1;e&&(e.indexOf("image/jpeg")!==-1||e.indexOf("image/png")!==-1)&&(c=4);let l=gD(s,a,t,c),f=0;for(let u of n){let d=typeof u=="number"?Object.values(o)[u]:o[u],h=l+d.offset,p=In(t);if(p.data.length<=h)throw new Error(`${p.data.length} <= ${h}`);let g=p.data[h];f|=g<<d.shift}return f}function gD(t,e,r,i=1){let n=r.width,o=hC(t)*(n-1),s=Math.round(o),a=r.height,c=hC(e)*(a-1),l=Math.round(c),f=r.components?r.components:i;return(l*n+s)*f}function Cf(t,e,r,i,n){let o=[];for(let s=0;s<e;s++){let a=r[s],c=r[s+1]-r[s];if(c+a>i)break;let l=a/n,f=c/n;o.push(t.slice(l,l+f))}return o}function vf(t,e,r){let i=[];for(let n=0;n<e;n++){let o=n*r;i.push(t.slice(o,o+r))}return i}function Rf(t,e,r,i){if(r)throw new Error("Not implemented - arrayOffsets for strings is specified");if(i){let n=[],o=new TextDecoder("utf8"),s=0;for(let a=0;a<t;a++){let c=i[a+1]-i[a];if(c+s<=e.length){let l=e.subarray(s,c+s),f=o.decode(l);n.push(f),s+=c}}return n}return[]}var dn="EXT_mesh_features",mD=dn;async function _D(t,e){let r=new j(t);AD(r,e)}function bD(t,e){let r=new j(t);return xD(r,e),r.createBinaryChunk(),r.gltf}function AD(t,e){let r=t.gltf.json;if(r.meshes)for(let i of r.meshes)for(let n of i.primitives)yD(t,n,e)}function yD(t,e,r){if(!r?.gltf?.loadBuffers)return;let n=e.extensions?.[dn]?.featureIds;if(n)for(let o of n){let s;if(typeof o.attribute<"u"){let a=`_FEATURE_ID_${o.attribute}`,c=e.attributes[a];s=t.getTypedArrayForAccessor(c)}else typeof o.texture<"u"&&r?.gltf?.loadImages?s=un(t,o.texture,e):s=[];o.data=s}}function xD(t,e){let r=t.gltf.json.meshes;if(r)for(let i of r)for(let n of i.primitives)SD(t,n)}function TD(t,e,r,i){e.extensions||(e.extensions={});let n=e.extensions[dn];n||(n={featureIds:[]},e.extensions[dn]=n);let{featureIds:o}=n,s={featureCount:r.length,propertyTable:i,data:r};o.push(s),t.addObjectExtension(e,dn,n)}function SD(t,e){let r=e.extensions?.[dn];if(!r)return;let i=r.featureIds;i.forEach((n,o)=>{if(n.data){let{accessorKey:s,index:a}=ED(e.attributes),c=new Uint32Array(n.data);i[o]={featureCount:c.length,propertyTable:n.propertyTable,attribute:a},t.gltf.buffers.push({arrayBuffer:c.buffer,byteOffset:c.byteOffset,byteLength:c.byteLength});let l=t.addBufferView(c),f=t.addAccessor(l,{size:1,componentType:vr(c),count:c.length});e.attributes[s]=f}})}function ED(t){let e="_FEATURE_ID_",r=Object.keys(t).filter(o=>o.indexOf(e)===0),i=-1;for(let o of r){let s=Number(o.substring(e.length));s>i&&(i=s)}return i++,{accessorKey:`${e}${i}`,index:i}}var Ig={};he(Ig,{createExtStructuralMetadata:()=>XD,decode:()=>vD,encode:()=>RD,name:()=>CD});var hn="EXT_structural_metadata",CD=hn;async function vD(t,e){let r=new j(t);MD(r,e)}function RD(t,e){let r=new j(t);return WD(r,e),r.createBinaryChunk(),r.gltf}function MD(t,e){if(!e.gltf?.loadBuffers)return;let r=t.getExtension(hn);r&&(e.gltf?.loadImages&&PD(t,r),wD(t,r))}function PD(t,e){let r=e.propertyTextures,i=t.gltf.json;if(r&&i.meshes)for(let n of i.meshes)for(let o of n.primitives)BD(t,r,o,e)}function wD(t,e){let r=e.schema;if(!r)return;let i=r.classes,n=e.propertyTables;if(i&&n)for(let o in i){let s=ID(n,o);s&&LD(t,r,s)}}function ID(t,e){for(let r of t)if(r.class===e)return r;return null}function BD(t,e,r,i){if(!e)return;let o=r.extensions?.[hn]?.propertyTextures;if(o)for(let s of o){let a=e[s];OD(t,a,r,i)}}function OD(t,e,r,i){if(!e.properties)return;i.dataAttributeNames||(i.dataAttributeNames=[]);let n=e.class;for(let o in e.properties){let s=`${n}_${o}`,a=e.properties?.[o];if(!a)continue;a.data||(a.data=[]);let c=a.data,l=un(t,a,r);l!==null&&(Ef(t,s,l,c,r),a.data=c,i.dataAttributeNames.push(s))}}function LD(t,e,r){let i=e.classes?.[r.class];if(!i)throw new Error(`Incorrect data in the EXT_structural_metadata extension: no schema class with name ${r.class}`);let n=r.count;for(let o in i.properties){let s=i.properties[o],a=r.properties?.[o];if(a){let c=FD(t,e,s,n,a);a.data=c}}}function FD(t,e,r,i,n){let o=[],s=n.values,a=t.getTypedArrayForBufferView(s),c=ND(t,r,n,i),l=DD(t,n,i);switch(r.type){case"SCALAR":case"VEC2":case"VEC3":case"VEC4":case"MAT2":case"MAT3":case"MAT4":{o=UD(r,i,a,c);break}case"BOOLEAN":throw new Error(`Not implemented - classProperty.type=${r.type}`);case"STRING":{o=Rf(i,a,c,l);break}case"ENUM":{o=kD(e,r,i,a,c);break}default:throw new Error(`Unknown classProperty type ${r.type}`)}return o}function ND(t,e,r,i){return e.array&&typeof e.count>"u"&&typeof r.arrayOffsets<"u"?ln(t,r.arrayOffsets,r.arrayOffsetType||"UINT32",i):null}function DD(t,e,r){return typeof e.stringOffsets<"u"?ln(t,e.stringOffsets,e.stringOffsetType||"UINT32",r):null}function UD(t,e,r,i){let n=t.array,o=t.count,s=Zs(t.type,t.componentType),a=r.byteLength/s,c;return t.componentType?c=fn(r,t.type,t.componentType,a):c=r,n?i?Cf(c,e,i,r.length,s):o?vf(c,e,o):[]:c}function kD(t,e,r,i,n){let o=e.enumType;if(!o)throw new Error("Incorrect data in the EXT_structural_metadata extension: classProperty.enumType is not set for type ENUM");let s=t.enums?.[o];if(!s)throw new Error(`Incorrect data in the EXT_structural_metadata extension: schema.enums does't contain ${o}`);let a=s.valueType||"UINT16",c=Zs(e.type,a),l=i.byteLength/c,f=fn(i,e.type,a,l);if(f||(f=i),e.array){if(n)return VD({valuesData:f,numberOfElements:r,arrayOffsets:n,valuesDataBytesLength:i.length,elementSize:c,enumEntry:s});let u=e.count;return u?HD(f,r,u,s):[]}return wg(f,0,r,s)}function VD(t){let{valuesData:e,numberOfElements:r,arrayOffsets:i,valuesDataBytesLength:n,elementSize:o,enumEntry:s}=t,a=[];for(let c=0;c<r;c++){let l=i[c],f=i[c+1]-i[c];if(f+l>n)break;let u=l/o,d=f/o,h=wg(e,u,d,s);a.push(h)}return a}function HD(t,e,r,i){let n=[];for(let o=0;o<e;o++){let s=r*o,a=wg(t,s,r,i);n.push(a)}return n}function wg(t,e,r,i){let n=[];for(let o=0;o<r;o++)if(t instanceof BigInt64Array||t instanceof BigUint64Array)n.push("");else{let s=t[e+o],a=zD(i,s);a?n.push(a.name):n.push("")}return n}function zD(t,e){for(let r of t.values)if(r.value===e)return r;return null}var jD="schemaClassId";function WD(t,e){let r=t.getExtension(hn);if(r&&r.propertyTables)for(let i of r.propertyTables){let n=i.class,o=r.schema?.classes?.[n];i.properties&&o&&GD(i,o,t)}}function GD(t,e,r){for(let i in t.properties){let n=t.properties[i].data;if(n){let o=e.properties[i];if(o){let s=YD(n,o,r);t.properties[i]=s}}}}function XD(t,e,r=jD){let i=t.getExtension(hn);i||(i=t.addExtension(hn)),i.schema=$D(e,r,i.schema);let n=KD(e,r,i.schema);return i.propertyTables||(i.propertyTables=[]),i.propertyTables.push(n)-1}function $D(t,e,r){let i=r??{id:"schema_id"},n={properties:{}};for(let o of t){let s={type:o.elementType,componentType:o.componentType};n.properties[o.name]=s}return i.classes={},i.classes[e]=n,i}function KD(t,e,r){let i={class:e,count:0},n=0,o=r.classes?.[e];for(let s of t){if(n===0&&(n=s.values.length),n!==s.values.length&&s.values.length)throw new Error("Illegal values in attributes");o?.properties[s.name]&&(i.properties||(i.properties={}),i.properties[s.name]={values:0,data:s.values})}return i.count=n,i}function YD(t,e,r){let i={values:0};if(e.type==="STRING"){let{stringData:n,stringOffsets:o}=ZD(t);i.stringOffsets=Pg(o,r),i.values=Pg(n,r)}else if(e.type==="SCALAR"&&e.componentType){let n=QD(t,e.componentType);i.values=Pg(n,r)}return i}var JD={INT8:Int8Array,UINT8:Uint8Array,INT16:Int16Array,UINT16:Uint16Array,INT32:Int32Array,UINT32:Uint32Array,INT64:Int32Array,UINT64:Uint32Array,FLOAT32:Float32Array,FLOAT64:Float64Array};function QD(t,e){let r=[];for(let n of t)r.push(Number(n));let i=JD[e];if(!i)throw new Error("Illegal component type");return new i(r)}function ZD(t){let e=new TextEncoder,r=[],i=0;for(let c of t){let l=e.encode(c);i+=l.length,r.push(l)}let n=new Uint8Array(i),o=[],s=0;for(let c of r)n.set(c,s),o.push(s),s+=c.length;o.push(s);let a=new Uint32Array(o);return{stringData:n,stringOffsets:a}}function Pg(t,e){return e.gltf.buffers.push({arrayBuffer:$e(t.buffer),byteOffset:t.byteOffset,byteLength:t.byteLength}),e.addBufferView(t)}var Bg={};he(Bg,{decode:()=>eU,name:()=>qD});var mC="EXT_feature_metadata",qD=mC;async function eU(t,e){let r=new j(t);tU(r,e)}function tU(t,e){if(!e.gltf?.loadBuffers)return;let r=t.getExtension(mC);r&&(e.gltf?.loadImages&&rU(t,r),iU(t,r))}function rU(t,e){let r=e.schema;if(!r)return;let i=r.classes,{featureTextures:n}=e;if(i&&n)for(let o in i){let s=i[o],a=oU(n,o);a&&aU(t,a,s)}}function iU(t,e){let r=e.schema;if(!r)return;let i=r.classes,n=e.featureTables;if(i&&n)for(let o in i){let s=nU(n,o);s&&sU(t,r,s)}}function nU(t,e){for(let r in t){let i=t[r];if(i.class===e)return i}return null}function oU(t,e){for(let r in t){let i=t[r];if(i.class===e)return i}return null}function sU(t,e,r){if(!r.class)return;let i=e.classes?.[r.class];if(!i)throw new Error(`Incorrect data in the EXT_structural_metadata extension: no schema class with name ${r.class}`);let n=r.count;for(let o in i.properties){let s=i.properties[o],a=r.properties?.[o];if(a){let c=cU(t,e,s,n,a);a.data=c}}}function aU(t,e,r){let i=e.class;for(let n in r.properties){let o=e?.properties?.[n];if(o){let s=hU(t,o,i);o.data=s}}}function cU(t,e,r,i,n){let o=[],s=n.bufferView,a=t.getTypedArrayForBufferView(s),c=lU(t,r,n,i),l=fU(t,r,n,i);return r.type==="STRING"||r.componentType==="STRING"?o=Rf(i,a,c,l):uU(r)&&(o=dU(r,i,a,c)),o}function lU(t,e,r,i){return e.type==="ARRAY"&&typeof e.componentCount>"u"&&typeof r.arrayOffsetBufferView<"u"?ln(t,r.arrayOffsetBufferView,r.offsetType||"UINT32",i):null}function fU(t,e,r,i){return typeof r.stringOffsetBufferView<"u"?ln(t,r.stringOffsetBufferView,r.offsetType||"UINT32",i):null}function uU(t){let e=["UINT8","INT16","UINT16","INT32","UINT32","INT64","UINT64","FLOAT32","FLOAT64"];return e.includes(t.type)||typeof t.componentType<"u"&&e.includes(t.componentType)}function dU(t,e,r,i){let n=t.type==="ARRAY",o=t.componentCount,s="SCALAR",a=t.componentType||t.type,c=Zs(s,a),l=r.byteLength/c,f=fn(r,s,a,l);return n?i?Cf(f,e,i,r.length,c):o?vf(f,e,o):[]:f}function hU(t,e,r){let i=t.gltf.json;if(!i.meshes)return[];let n=[];for(let o of i.meshes)for(let s of o.primitives)pU(t,r,e,n,s);return n}function pU(t,e,r,i,n){let o={channels:r.channels,...r.texture},s=un(t,o,n);s&&Ef(t,e,s,i,n)}var _C="4.4.2";var pn=!0,bC=1735152710,Fg=12,Mf=8,gU=1313821514,mU=5130562,_U=0,bU=0,AU=1;function yU(t,e=0){return`${String.fromCharCode(t.getUint8(e+0))}${String.fromCharCode(t.getUint8(e+1))}${String.fromCharCode(t.getUint8(e+2))}${String.fromCharCode(t.getUint8(e+3))}`}function AC(t,e=0,r={}){let i=new DataView(t),{magic:n=bC}=r,o=i.getUint32(e,!1);return o===n||o===bC}function yC(t,e,r=0,i={}){let n=new DataView(e),o=yU(n,r+0),s=n.getUint32(r+4,pn),a=n.getUint32(r+8,pn);switch(Object.assign(t,{header:{byteOffset:r,byteLength:a,hasBinChunk:!1},type:o,version:s,json:{},binChunks:[]}),r+=Fg,t.version){case 1:return xU(t,n,r);case 2:return TU(t,n,r,i={});default:throw new Error(`Invalid GLB version ${t.version}. Only supports version 1 and 2.`)}}function xU(t,e,r){Se(t.header.byteLength>Fg+Mf);let i=e.getUint32(r+0,pn),n=e.getUint32(r+4,pn);return r+=Mf,Se(n===_U),Og(t,e,r,i),r+=i,r+=Lg(t,e,r,t.header.byteLength),r}function TU(t,e,r,i){return Se(t.header.byteLength>Fg+Mf),SU(t,e,r,i),r+t.header.byteLength}function SU(t,e,r,i){for(;r+8<=t.header.byteLength;){let n=e.getUint32(r+0,pn),o=e.getUint32(r+4,pn);switch(r+=Mf,o){case gU:Og(t,e,r,n);break;case mU:Lg(t,e,r,n);break;case bU:i.strict||Og(t,e,r,n);break;case AU:i.strict||Lg(t,e,r,n);break;default:break}r+=tr(n,4)}return r}function Og(t,e,r,i){let n=new Uint8Array(e.buffer,r,i),s=new TextDecoder("utf8").decode(n);return t.json=JSON.parse(s),tr(i,4)}function Lg(t,e,r,i){return t.header.hasBinChunk=!0,t.binChunks.push({byteOffset:r,byteLength:i,arrayBuffer:e.buffer}),tr(i,4)}function Ng(t,e,r){if(t.startsWith("data:")||t.startsWith("http:")||t.startsWith("https:"))return t;let n=r?.baseUrl||EU(e?.core?.baseUrl);if(!n)throw new Error(`'baseUrl' must be provided to resolve relative url ${t}`);return n.endsWith("/")?`${n}${t}`:`${n}/${t}`}function EU(t){if(!t)return;if(t.endsWith("/"))return t;let e=t.lastIndexOf("/");return e>=0?t.slice(0,e+1):""}var Ug={};he(Ug,{decode:()=>NU,name:()=>FU});var CU="B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB",vU="B9h9z9tFBBBF8dL9gBB9gLaaaaaFa9gEaaaB9gGaaB9gFaFaEQSBBFBFFGEGEGIILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBNn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBcI9z9iqlBMc/j9JSIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMkRIbaG97FaK978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAnDeBJAeCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAnDeBJAeCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAnDeBJAeCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAnDeBJAeCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAnDeBJAeCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAnDeBJAeCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAnDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAnDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAnDeBJAeCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPD8dBhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBAeCx+YUUBJDBBBHnAnDQBBBBBBBBBBBBBBBBAPD8dFhUg/8/4/w/goB9+h84k7HeCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAnDeBJAeCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBRnCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBHiCFD9tAiAPD9OD9hD9RHiDQBTFtGmEYIPLdKeOnH8ZAIAQJDBIBHpCFD9tApAPD9OD9hD9RHpAIASJDBIBHyCFD9tAyAPD9OD9hD9RHyDQBTFtGmEYIPLdKeOnH8cDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAnD9uHnDyBjGBAEAGJHIAnAPAPDQILKOILKOILKOILKOD9uHnDyBjGBAIAGJHIAnAPAPDQNVcMNVcMNVcMNVcMD9uHnDyBjGBAIAGJHIAnAPAPDQSQfbSQfbSQfbSQfbD9uHnDyBjGBAIAGJHIAnA8ZA8cDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHnDyBjGBAIAGJHIAnAPAPDQILKOILKOILKOILKOD9uHnDyBjGBAIAGJHIAnAPAPDQNVcMNVcMNVcMNVcMD9uHnDyBjGBAIAGJHIAnAPAPDQSQfbSQfbSQfbSQfbD9uHnDyBjGBAIAGJHIAnAdAiDQNiV8ZcpMyS8cQ8df8eb8fHdApAyDQNiV8ZcpMyS8cQ8df8eb8fHiDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHnDyBjGBAIAGJHIAnAPAPDQILKOILKOILKOILKOD9uHnDyBjGBAIAGJHIAnAPAPDQNVcMNVcMNVcMNVcMD9uHnDyBjGBAIAGJHIAnAPAPDQSQfbSQfbSQfbSQfbD9uHnDyBjGBAIAGJHIAnAdAiDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHnDyBjGBAIAGJHIAnAPAPDQILKOILKOILKOILKOD9uHnDyBjGBAIAGJHIAnAPAPDQNVcMNVcMNVcMNVcMD9uHnDyBjGBAIAGJHIAnAPAPDQSQfbSQfbSQfbSQfbD9uHnDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/xLGEaK978jUUUUBCAlHE8kUUUUBGXGXAGCI9HQBGXAFC98ZHI9FQBABRGCBRLEXAGAGDBBBHKCiD+rFCiD+sFD/6FHOAKCND+rFCiD+sFD/6FAOD/gFAKCTD+rFCiD+sFD/6FHND/gFD/kFD/lFHVCBDtD+2FHcAOCUUUU94DtHMD9OD9RD/kFHO9DBB/+hDYAOAOD/mFAVAVD/mFANAcANAMD9OD9RD/kFHOAOD/mFD/kFD/kFD/jFD/nFHND/mF9DBBX9LDYHcD/kFCgFDtD9OAKCUUU94DtD9OD9QAOAND/mFAcD/kFCND+rFCU/+EDtD9OD9QAVAND/mFAcD/kFCTD+rFCUU/8ODtD9OD9QDMBBAGCTJRGALCIJHLAI9JQBMMAIAF9PQFAEAFCEZHLCGWHGqCBCTAGl/8MBAEABAICGWJHIAG/8cBBGXAL9FQBAEAEDBIBHKCiD+rFCiD+sFD/6FHOAKCND+rFCiD+sFD/6FAOD/gFAKCTD+rFCiD+sFD/6FHND/gFD/kFD/lFHVCBDtD+2FHcAOCUUUU94DtHMD9OD9RD/kFHO9DBB/+hDYAOAOD/mFAVAVD/mFANAcANAMD9OD9RD/kFHOAOD/mFD/kFD/kFD/jFD/nFHND/mF9DBBX9LDYHcD/kFCgFDtD9OAKCUUU94DtD9OD9QAOAND/mFAcD/kFCND+rFCU/+EDtD9OD9QAVAND/mFAcD/kFCTD+rFCUU/8ODtD9OD9QDMIBMAIAEAG/8cBBSFMABAFC98ZHGT+HUUUBAGAF9PQBAEAFCEZHICEWHLJCBCAALl/8MBAEABAGCEWJHGAL/8cBBAEAIT+HUUUBAGAEAL/8cBBMAECAJ8kUUUUBM+yEGGaO97GXAF9FQBCBRGEXABCTJHEAEDBBBHICBDtHLCUU98D8cFCUU98D8cEHKD9OABDBBBHOAIDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAOAIDQBFGENVcMTtmYi8ZpyHICTD+sFD/6FHND/gFAICTD+rFCTD+sFD/6FHVD/gFD/kFD/lFHI9DB/+g6DYAVAIALD+2FHLAVCUUUU94DtHcD9OD9RD/kFHVAVD/mFAIAID/mFANALANAcD9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHND/mF9DBBX9LDYHLD/kFCTD+rFAVAND/mFALD/kFCggEDtD9OD9QHVAIAND/mFALD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHIDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAOAKD9OAVAIDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM94FEa8jUUUUBCAlHE8kUUUUBABAFC98ZHIT+JUUUBGXAIAF9PQBAEAFCEZHLCEWHFJCBCAAFl/8MBAEABAICEWJHBAF/8cBBAEALT+JUUUBABAEAF/8cBBMAECAJ8kUUUUBM/hEIGaF97FaL978jUUUUBCTlRGGXAF9FQBCBREEXAGABDBBBHIABCTJHLDBBBHKDQILKOSQfbPden8c8d8e8fHOCTD+sFHNCID+rFDMIBAB9DBBU8/DY9D/zI818/DYANCEDtD9QD/6FD/nFHNAIAKDQBFGENVcMTtmYi8ZpyHICTD+rFCTD+sFD/6FD/mFHKAKD/mFANAICTD+sFD/6FD/mFHVAVD/mFANAOCTD+rFCTD+sFD/6FD/mFHOAOD/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHND/mF9DBBX9LDYHID/kFCggEDtHcD9OAVAND/mFAID/kFCTD+rFD9QHVAOAND/mFAID/kFCTD+rFAKAND/mFAID/kFAcD9OD9QHNDQBFTtGEmYILPdKOenHID8dBAGDBIBDyB+t+J83EBABCNJAID8dFAGDBIBDyF+t+J83EBALAVANDQNVi8ZcMpySQ8c8dfb8e8fHND8dBAGDBIBDyG+t+J83EBABCiJAND8dFAGDBIBDyE+t+J83EBABCAJRBAECIJHEAF9JQBMMM/3FGEaF978jUUUUBCoBlREGXAGCGrAF9sHIC98ZHL9FQBCBRGABRFEXAFAFDBBBHKCND+rFCND+sFD/6FAKCiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBAFCTJRFAGCIJHGAL9JQBMMGXALAI9PQBAEAICEZHGCGWHFqCBCoBAFl/8MBAEABALCGWJHLAF/8cBBGXAG9FQBAEAEDBIBHKCND+rFCND+sFD/6FAKCiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMIBMALAEAF/8cBBMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB",RU=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),MU=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]),PU={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},wU={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};async function xC(t,e,r,i,n,o="NONE"){let s=await IU();LU(s,s.exports[wU[n]],t,e,r,i,s.exports[PU[o||"NONE"]])}var Dg;async function IU(){return Dg||(Dg=BU()),Dg}async function BU(){let t=CU;WebAssembly.validate(RU)&&(t=vU,console.log("Warning: meshopt_decoder is using experimental SIMD support"));let e=await WebAssembly.instantiate(OU(t),{});return await e.instance.exports.__wasm_call_ctors(),e.instance}function OU(t){let e=new Uint8Array(t.length);for(let i=0;i<t.length;++i){let n=t.charCodeAt(i);e[i]=n>96?n-71:n>64?n-65:n>47?n+4:n>46?63:62}let r=0;for(let i=0;i<t.length;++i)e[r++]=e[i]<60?MU[e[i]]:(e[i]-60)*64+e[++i];return e.buffer.slice(0,r)}function LU(t,e,r,i,n,o,s){let a=t.exports.sbrk,c=i+3&-4,l=a(c*n),f=a(o.length),u=new Uint8Array(t.exports.memory.buffer);u.set(o,f);let d=e(l,i,n,f,o.length);if(d===0&&s&&s(l,c,n),r.set(u.subarray(l,l+i*n)),a(l-a(0)),d!==0)throw new Error(`Malformed buffer data: ${d}`)}var Pf="EXT_meshopt_compression",FU=Pf;async function NU(t,e){let r=new j(t);if(!e?.gltf?.decompressMeshes||!e.gltf?.loadBuffers)return;let i=[];for(let n of t.json.bufferViews||[])i.push(DU(r,n));await Promise.all(i),r.removeExtension(Pf)}async function DU(t,e){let r=t.getObjectExtension(e,Pf);if(r){let{byteOffset:i=0,byteLength:n=0,byteStride:o,count:s,mode:a,filter:c="NONE",buffer:l}=r,f=t.gltf.buffers[l],u=new Uint8Array(f.arrayBuffer,f.byteOffset+i,n),d=new Uint8Array(t.gltf.buffers[e.buffer].arrayBuffer,e.byteOffset,e.byteLength);await xC(d,s,o,u,a,c),t.removeObjectExtension(e,Pf)}}var kg={};he(kg,{name:()=>UU,preprocess:()=>kU});var gn="EXT_texture_webp",UU=gn;function kU(t,e){let r=new j(t);if(!Bu("image/webp")){if(r.getRequiredExtensions().includes(gn))throw new Error(`gltf: Required extension ${gn} not supported by browser`);return}let{json:i}=r;for(let n of i.textures||[]){let o=r.getObjectExtension(n,gn);o&&(n.source=o.source),r.removeObjectExtension(n,gn)}r.removeExtension(gn)}var Vg={};he(Vg,{name:()=>VU,preprocess:()=>HU});var wf="KHR_texture_basisu",VU=wf;function HU(t,e){let r=new j(t),{json:i}=r;for(let n of i.textures||[]){let o=r.getObjectExtension(n,wf);o&&(n.source=o.source,r.removeObjectExtension(n,wf))}r.removeExtension(wf)}var Gg={};he(Gg,{decode:()=>i4,encode:()=>n4,name:()=>t4,preprocess:()=>r4});var zU="1.5.6",jU="1.4.1",Hg=`https://www.gstatic.com/draco/versioned/decoders/${zU}`,de={DECODER:"draco_wasm_wrapper.js",DECODER_WASM:"draco_decoder.wasm",FALLBACK_DECODER:"draco_decoder.js",ENCODER:"draco_encoder.js"},qs={[de.DECODER]:`${Hg}/${de.DECODER}`,[de.DECODER_WASM]:`${Hg}/${de.DECODER_WASM}`,[de.FALLBACK_DECODER]:`${Hg}/${de.FALLBACK_DECODER}`,[de.ENCODER]:`https://raw.githubusercontent.com/google/draco/${jU}/javascript/${de.ENCODER}`},zg;async function SC(t={},e){let r=t.modules||{};return r.draco3d?zg||=r.draco3d.createDecoderModule({}).then(i=>({draco:i})):zg||=WU(t,e),await zg}function TC(t,e){if(t&&typeof t=="object"){if(t.default)return t.default;if(t[e])return t[e]}return t}async function WU(t,e){let r,i;switch(e){case"js":r=await Ge(qs[de.FALLBACK_DECODER],"draco",t,de.FALLBACK_DECODER);break;case"wasm":default:try{[r,i]=await Promise.all([await Ge(qs[de.DECODER],"draco",t,de.DECODER),await Ge(qs[de.DECODER_WASM],"draco",t,de.DECODER_WASM)])}catch{r=null,i=null}}return r=TC(r,"DracoDecoderModule"),r=r||globalThis.DracoDecoderModule,!r&&!se&&([r,i]=await Promise.all([await Ge(qs[de.DECODER],"draco",{...t,useLocalLibraries:!0},de.DECODER),await Ge(qs[de.DECODER_WASM],"draco",{...t,useLocalLibraries:!0},de.DECODER_WASM)]),r=TC(r,"DracoDecoderModule"),r=r||globalThis.DracoDecoderModule),await GU(r,i)}function GU(t,e){if(typeof t!="function")throw new Error("DracoDecoderModule could not be loaded");let r={};return e&&(r.wasmBinary=e),new Promise(i=>{t({...r,onModuleLoaded:n=>i({draco:n})})})}var EC="4.4.2";function vC(t,e,r){let i=RC(e.metadata),n=[],o=XU(e.attributes);for(let s in t){let a=t[s],c=CC(s,a,o[s]);n.push(c)}if(r){let s=CC("indices",r);n.push(s)}return{fields:n,metadata:i}}function XU(t){let e={};for(let r in t){let i=t[r];e[i.name||"undefined"]=i}return e}function CC(t,e,r){let i=r?RC(r.metadata):void 0;return vu(t,e,i)}function RC(t){Object.entries(t);let e={};for(let r in t)e[`${r}.string`]=JSON.stringify(t[r]);return e}var MC={POSITION:"POSITION",NORMAL:"NORMAL",COLOR:"COLOR_0",TEX_COORD:"TEXCOORD_0"},$U={1:Int8Array,2:Uint8Array,3:Int16Array,4:Uint16Array,5:Int32Array,6:Uint32Array,9:Float32Array},KU=4,ea=class{draco;decoder;metadataQuerier;constructor(e){this.draco=e,this.decoder=new this.draco.Decoder,this.metadataQuerier=new this.draco.MetadataQuerier}destroy(){this.draco.destroy(this.decoder),this.draco.destroy(this.metadataQuerier)}parseSync(e,r={}){let i=new this.draco.DecoderBuffer;i.Init(new Int8Array(e),e.byteLength),this._disableAttributeTransforms(r);let n=this.decoder.GetEncodedGeometryType(i),o=n===this.draco.TRIANGULAR_MESH?new this.draco.Mesh:new this.draco.PointCloud;try{let s;switch(n){case this.draco.TRIANGULAR_MESH:s=this.decoder.DecodeBufferToMesh(i,o);break;case this.draco.POINT_CLOUD:s=this.decoder.DecodeBufferToPointCloud(i,o);break;default:throw new Error("DRACO: Unknown geometry type.")}if(!s.ok()||!o.ptr){let d=`DRACO decompression failed: ${s.error_msg()}`;throw new Error(d)}let a=this._getDracoLoaderData(o,n,r),c=this._getMeshData(o,a,r),l=Cu(c.attributes),f=vC(c.attributes,a,c.indices);return{loader:"draco",loaderData:a,header:{vertexCount:o.num_points(),boundingBox:l},...c,schema:f}}finally{this.draco.destroy(i),o&&this.draco.destroy(o)}}_getDracoLoaderData(e,r,i){let n=this._getTopLevelMetadata(e),o=this._getDracoAttributes(e,i);return{geometry_type:r,num_attributes:e.num_attributes(),num_points:e.num_points(),num_faces:e instanceof this.draco.Mesh?e.num_faces():0,metadata:n,attributes:o}}_getDracoAttributes(e,r){let i={};for(let n=0;n<e.num_attributes();n++){let o=this.decoder.GetAttribute(e,n),s=this._getAttributeMetadata(e,n);i[o.unique_id()]={unique_id:o.unique_id(),attribute_type:o.attribute_type(),data_type:o.data_type(),num_components:o.num_components(),byte_offset:o.byte_offset(),byte_stride:o.byte_stride(),normalized:o.normalized(),attribute_index:n,metadata:s};let a=this._getQuantizationTransform(o,r);a&&(i[o.unique_id()].quantization_transform=a);let c=this._getOctahedronTransform(o,r);c&&(i[o.unique_id()].octahedron_transform=c)}return i}_getMeshData(e,r,i){let n=this._getMeshAttributes(r,e,i);if(!n.POSITION)throw new Error("DRACO: No position attribute found.");if(e instanceof this.draco.Mesh)switch(i.topology){case"triangle-strip":return{topology:"triangle-strip",mode:4,attributes:n,indices:{value:this._getTriangleStripIndices(e),size:1}};case"triangle-list":default:return{topology:"triangle-list",mode:5,attributes:n,indices:{value:this._getTriangleListIndices(e),size:1}}}return{topology:"point-list",mode:0,attributes:n}}_getMeshAttributes(e,r,i){let n={};for(let o of Object.values(e.attributes)){let s=this._deduceAttributeName(o,i);o.name=s;let a=this._getAttributeValues(r,o);if(a){let{value:c,size:l}=a;n[s]={value:c,size:l,byteOffset:o.byte_offset,byteStride:o.byte_stride,normalized:o.normalized}}}return n}_getTriangleListIndices(e){let i=e.num_faces()*3,n=i*KU,o=this.draco._malloc(n);try{return this.decoder.GetTrianglesUInt32Array(e,n,o),new Uint32Array(this.draco.HEAPF32.buffer,o,i).slice()}finally{this.draco._free(o)}}_getTriangleStripIndices(e){let r=new this.draco.DracoInt32Array;try{return this.decoder.GetTriangleStripsFromMesh(e,r),QU(r)}finally{this.draco.destroy(r)}}_getAttributeValues(e,r){let i=$U[r.data_type];if(!i)return console.warn(`DRACO: Unsupported attribute type ${r.data_type}`),null;let n=r.num_components,s=e.num_points()*n,a=s*i.BYTES_PER_ELEMENT,c=YU(this.draco,i),l,f=this.draco._malloc(a);try{let u=this.decoder.GetAttribute(e,r.attribute_index);this.decoder.GetAttributeDataArrayForAllPoints(e,u,c,a,f),l=new i(this.draco.HEAPF32.buffer,f,s).slice()}finally{this.draco._free(f)}return{value:l,size:n}}_deduceAttributeName(e,r){let i=e.unique_id;for(let[s,a]of Object.entries(r.extraAttributes||{}))if(a===i)return s;let n=e.attribute_type;for(let s in MC)if(this.draco[s]===n)return MC[s];let o=r.attributeNameEntry||"name";return e.metadata[o]?e.metadata[o].string:`CUSTOM_ATTRIBUTE_${i}`}_getTopLevelMetadata(e){let r=this.decoder.GetMetadata(e);return this._getDracoMetadata(r)}_getAttributeMetadata(e,r){let i=this.decoder.GetAttributeMetadata(e,r);return this._getDracoMetadata(i)}_getDracoMetadata(e){if(!e||!e.ptr)return{};let r={},i=this.metadataQuerier.NumEntries(e);for(let n=0;n<i;n++){let o=this.metadataQuerier.GetEntryName(e,n);r[o]=this._getDracoMetadataField(e,o)}return r}_getDracoMetadataField(e,r){let i=new this.draco.DracoInt32Array;try{this.metadataQuerier.GetIntEntryArray(e,r,i);let n=JU(i);return{int:this.metadataQuerier.GetIntEntry(e,r),string:this.metadataQuerier.GetStringEntry(e,r),double:this.metadataQuerier.GetDoubleEntry(e,r),intArray:n}}finally{this.draco.destroy(i)}}_disableAttributeTransforms(e){let{quantizedAttributes:r=[],octahedronAttributes:i=[]}=e,n=[...r,...i];for(let o of n)this.decoder.SkipAttributeTransform(this.draco[o])}_getQuantizationTransform(e,r){let{quantizedAttributes:i=[]}=r,n=e.attribute_type();if(i.map(s=>this.decoder[s]).includes(n)){let s=new this.draco.AttributeQuantizationTransform;try{if(s.InitFromAttribute(e))return{quantization_bits:s.quantization_bits(),range:s.range(),min_values:new Float32Array([1,2,3]).map(a=>s.min_value(a))}}finally{this.draco.destroy(s)}}return null}_getOctahedronTransform(e,r){let{octahedronAttributes:i=[]}=r,n=e.attribute_type();if(i.map(s=>this.decoder[s]).includes(n)){let s=new this.draco.AttributeQuantizationTransform;try{if(s.InitFromAttribute(e))return{quantization_bits:s.quantization_bits()}}finally{this.draco.destroy(s)}}return null}};function YU(t,e){switch(e){case Float32Array:return t.DT_FLOAT32;case Int8Array:return t.DT_INT8;case Int16Array:return t.DT_INT16;case Int32Array:return t.DT_INT32;case Uint8Array:return t.DT_UINT8;case Uint16Array:return t.DT_UINT16;case Uint32Array:return t.DT_UINT32;default:return t.DT_INVALID}}function JU(t){let e=t.size(),r=new Int32Array(e);for(let i=0;i<e;i++)r[i]=t.GetValue(i);return r}function QU(t){let e=t.size(),r=new Int32Array(e);for(let i=0;i<e;i++)r[i]=t.GetValue(i);return r}var PC={dataType:null,batchType:null,name:"Draco",id:"draco",module:"draco",version:EC,worker:!0,extensions:["drc"],mimeTypes:["application/octet-stream"],binary:!0,tests:["DRACO"],options:{draco:{decoderType:typeof WebAssembly=="object"?"wasm":"js",extraAttributes:{},attributeNameEntry:void 0}}},jg={...PC,parse:ZU};async function ZU(t,e){let{draco:r}=await SC(Tn(e),e?.draco?.decoderType||"wasm"),i=new ea(r);try{return i.parseSync(t,e?.draco)}finally{i.destroy()}}function wC(t){let e={};for(let r in t){let i=t[r];if(r!=="indices"){let n=Wg(i);e[r]=n}}return e}function Wg(t){let{buffer:e,size:r,count:i}=qU(t);return{value:e,size:r,byteOffset:0,count:i,type:Sf(r),componentType:vr(e)}}function qU(t){let e=t,r=1,i=0;return t&&t.value&&(e=t.value,r=t.size||1),e&&(ArrayBuffer.isView(e)||(e=e4(e,Float32Array)),i=e.length/r),{buffer:e,size:r,count:i}}function e4(t,e,r=!1){return t?Array.isArray(t)?new e(t):r&&!(t instanceof e)?new e(t):t:null}var Rr="KHR_draco_mesh_compression",t4=Rr;function r4(t,e,r){let i=new j(t);for(let n of IC(i))i.getObjectExtension(n,Rr)}async function i4(t,e,r){if(!e?.gltf?.decompressMeshes)return;let i=new j(t),n=[];for(let o of IC(i))i.getObjectExtension(o,Rr)&&n.push(o4(i,o,e,r));await Promise.all(n),i.removeExtension(Rr)}function n4(t,e={}){let r=new j(t);for(let i of r.json.meshes||[])s4(i,e),r.addRequiredExtension(Rr)}async function o4(t,e,r,i){let n=t.getObjectExtension(e,Rr);if(!n)return;let o=t.getTypedArrayForBufferView(n.bufferView),s=Sn(o.buffer,o.byteOffset),a={...r};delete a["3d-tiles"];let c=await mn(s,jg,a,i),l=wC(c.attributes);for(let[f,u]of Object.entries(l))if(f in e.attributes){let d=e.attributes[f],h=t.getAccessor(d);h?.min&&h?.max&&(u.min=h.min,u.max=h.max)}e.attributes=l,c.indices&&(e.indices=Wg(c.indices)),t.removeObjectExtension(e,Rr),a4(e)}function s4(t,e,r=4,i,n){if(!i.DracoWriter)throw new Error("options.gltf.DracoWriter not provided");let o=i.DracoWriter.encodeSync({attributes:t}),s=n?.parseSync?.({attributes:t}),a=i._addFauxAttributes(s.attributes),c=i.addBufferView(o);return{primitives:[{attributes:a,mode:r,extensions:{[Rr]:{bufferView:c,attributes:a}}}]}}function a4(t){if(!t.attributes&&Object.keys(t.attributes).length>0)throw new Error("glTF: Empty primitive detected: Draco decompression failure?")}function*IC(t){for(let e of t.json.meshes||[])for(let r of e.primitives)yield r}var Xg={};he(Xg,{decode:()=>u4,name:()=>c4});var Bf="KHR_texture_transform",c4=Bf,If=new Y,l4=new Ae,f4=new Ae;async function u4(t,e){if(!new j(t).hasExtension(Bf)||!e.gltf?.loadBuffers)return;let n=t.json.materials||[];for(let o=0;o<n.length;o++)d4(o,t)}function d4(t,e){let r=e.json.materials?.[t],i=[r?.pbrMetallicRoughness?.baseColorTexture,r?.emissiveTexture,r?.normalTexture,r?.occlusionTexture,r?.pbrMetallicRoughness?.metallicRoughnessTexture],n=[];for(let o of i)o&&o?.extensions?.[Bf]&&h4(e,t,o,n)}function h4(t,e,r,i){let n=p4(r,i);if(!n)return;let o=t.json.meshes||[];for(let s of o)for(let a of s.primitives){let c=a.material;Number.isFinite(c)&&e===c&&g4(t,a,n)}}function p4(t,e){let r=t.extensions?.[Bf],{texCoord:i=0}=t,{texCoord:n=i}=r;if(!(e.findIndex(([s,a])=>s===i&&a===n)!==-1)){let s=b4(r);return i!==n&&(t.texCoord=n),e.push([i,n]),{originalTexCoord:i,texCoord:n,matrix:s}}return null}function g4(t,e,r){let{originalTexCoord:i,texCoord:n,matrix:o}=r,s=e.attributes[`TEXCOORD_${i}`];if(Number.isFinite(s)){let a=t.json.accessors?.[s];if(a&&a.bufferView!==void 0){let c=t.json.bufferViews?.[a.bufferView];if(c){let{arrayBuffer:l,byteOffset:f}=t.buffers[c.buffer],u=(f||0)+(a.byteOffset||0)+(c.byteOffset||0),{ArrayType:d,length:h}=cn(a,c),p=Tf[a.componentType],g=xf[a.type],m=c.byteStride||p*g,b=new Float32Array(h);for(let y=0;y<a.count;y++){let _=new d(l,u+y*m,2);If.set(_[0],_[1],1),If.transformByMatrix3(o),b.set([If[0],If[1]],y*g)}i===n?m4(a,t,b,a.bufferView):_4(n,a,e,t,b)}}}}function m4(t,e,r,i){t.componentType=5126,t.byteOffset=0;let s=(e.json.accessors||[]).reduce((l,f)=>f.bufferView===i?l+1:l,0)>1;e.buffers.push({arrayBuffer:$e(r.buffer),byteOffset:0,byteLength:r.buffer.byteLength});let a=e.buffers.length-1;if(e.json.bufferViews=e.json.bufferViews||[],s){e.json.bufferViews.push({buffer:a,byteLength:r.buffer.byteLength,byteOffset:0}),t.bufferView=e.json.bufferViews.length-1;return}let c=e.json.bufferViews[i];c&&(c.buffer=a,c.byteOffset=0,c.byteLength=r.buffer.byteLength,c.byteStride!==void 0&&delete c.byteStride)}function _4(t,e,r,i,n){i.buffers.push({arrayBuffer:$e(n.buffer),byteOffset:0,byteLength:n.buffer.byteLength}),i.json.bufferViews=i.json.bufferViews||[];let o=i.json.bufferViews;o.push({buffer:i.buffers.length-1,byteLength:n.buffer.byteLength,byteOffset:0});let s=i.json.accessors;s&&(s.push({bufferView:o?.length-1,byteOffset:0,componentType:5126,count:e.count,type:"VEC2"}),r.attributes[`TEXCOORD_${t}`]=s.length-1)}function b4(t){let{offset:e=[0,0],rotation:r=0,scale:i=[1,1]}=t,n=new Ae().set(1,0,0,0,1,0,e[0],e[1],1),o=l4.set(Math.cos(r),Math.sin(r),0,-Math.sin(r),Math.cos(r),0,0,0,1),s=f4.set(i[0],0,0,0,i[1],0,0,0,1);return n.multiplyRight(o).multiplyRight(s)}var $g={};he($g,{decode:()=>y4,encode:()=>x4,name:()=>A4});var ci="KHR_lights_punctual",A4=ci;async function y4(t){let e=new j(t),{json:r}=e,i=e.getExtension(ci);i&&(e.json.lights=i.lights,e.removeExtension(ci));for(let n of r.nodes||[]){let o=e.getObjectExtension(n,ci);o&&(n.light=o.light),e.removeObjectExtension(n,ci)}}async function x4(t){let e=new j(t),{json:r}=e;if(r.lights){let i=e.addExtension(ci);ue(!i.lights),i.lights=r.lights,delete r.lights}if(e.json.lights){for(let i of e.json.lights){let n=i.node;e.addObjectExtension(n,ci,i)}delete e.json.lights}}var Kg={};he(Kg,{decode:()=>S4,encode:()=>E4,name:()=>T4});var ta="KHR_materials_unlit",T4=ta;async function S4(t){let e=new j(t),{json:r}=e;for(let i of r.materials||[])i.extensions&&i.extensions.KHR_materials_unlit&&(i.unlit=!0),e.removeObjectExtension(i,ta);e.removeExtension(ta)}function E4(t){let e=new j(t),{json:r}=e;if(e.materials)for(let i of r.materials||[])i.unlit&&(delete i.unlit,e.addObjectExtension(i,ta,{}),e.addExtension(ta))}var Yg={};he(Yg,{decode:()=>v4,encode:()=>R4,name:()=>C4});var ra="KHR_techniques_webgl",C4=ra;async function v4(t){let e=new j(t),{json:r}=e,i=e.getExtension(ra);if(i){let n=M4(i,e);for(let o of r.materials||[]){let s=e.getObjectExtension(o,ra);s&&(o.technique=Object.assign({},s,n[s.technique]),o.technique.values=P4(o.technique,e)),e.removeObjectExtension(o,ra)}e.removeExtension(ra)}}async function R4(t,e){}function M4(t,e){let{programs:r=[],shaders:i=[],techniques:n=[]}=t,o=new TextDecoder;return i.forEach(s=>{if(Number.isFinite(s.bufferView))s.code=o.decode(e.getTypedArrayForBufferView(s.bufferView));else throw new Error("KHR_techniques_webgl: no shader code")}),r.forEach(s=>{s.fragmentShader=i[s.fragmentShader],s.vertexShader=i[s.vertexShader]}),n.forEach(s=>{s.program=r[s.program]}),n}function P4(t,e){let r=Object.assign({},t.values);return Object.keys(t.uniforms||{}).forEach(i=>{t.uniforms[i].value&&!(i in r)&&(r[i]=t.uniforms[i].value)}),Object.keys(r).forEach(i=>{typeof r[i]=="object"&&r[i].index!==void 0&&(r[i].texture=e.getTexture(r[i].index))}),r}var BC=[Ig,Mg,Ug,kg,Vg,Gg,$g,Kg,Yg,Xg,Bg];function OC(t,e={},r){let i=BC.filter(n=>FC(n.name,e));for(let n of i)n.preprocess?.(t,e,r)}async function LC(t,e={},r){let i=BC.filter(n=>FC(n.name,e));for(let n of i)await n.decode?.(t,e,r)}function FC(t,e){let r=e?.gltf?.excludeExtensions||{};return!(t in r&&!r[t])}var Jg="KHR_binary_glTF";function NC(t){let e=new j(t),{json:r}=e;for(let i of r.images||[]){let n=e.getObjectExtension(i,Jg);n&&Object.assign(i,n),e.removeObjectExtension(i,Jg)}r.buffers&&r.buffers[0]&&delete r.buffers[0].uri,e.removeExtension(Jg)}var DC={accessors:"accessor",animations:"animation",buffers:"buffer",bufferViews:"bufferView",images:"image",materials:"material",meshes:"mesh",nodes:"node",samplers:"sampler",scenes:"scene",skins:"skin",textures:"texture"},I4={accessor:"accessors",animations:"animation",buffer:"buffers",bufferView:"bufferViews",image:"images",material:"materials",mesh:"meshes",node:"nodes",sampler:"samplers",scene:"scenes",skin:"skins",texture:"textures"},Qg=class{idToIndexMap={animations:{},accessors:{},buffers:{},bufferViews:{},images:{},materials:{},meshes:{},nodes:{},samplers:{},scenes:{},skins:{},textures:{}};json;normalize(e,r){this.json=e.json;let i=e.json;switch(i.asset&&i.asset.version){case"2.0":return;case void 0:case"1.0":break;default:console.warn(`glTF: Unknown version ${i.asset.version}`);return}if(!r.normalize)throw new Error("glTF v1 is not supported.");console.warn("Converting glTF v1 to glTF v2 format. This is experimental and may fail."),this._addAsset(i),this._convertTopLevelObjectsToArrays(i),NC(e),this._convertObjectIdsToArrayIndices(i),this._updateObjects(i),this._updateMaterial(i)}_addAsset(e){e.asset=e.asset||{},e.asset.version="2.0",e.asset.generator=e.asset.generator||"Normalized to glTF 2.0 by loaders.gl"}_convertTopLevelObjectsToArrays(e){for(let r in DC)this._convertTopLevelObjectToArray(e,r)}_convertTopLevelObjectToArray(e,r){let i=e[r];if(!(!i||Array.isArray(i))){e[r]=[];for(let n in i){let o=i[n];o.id=o.id||n;let s=e[r].length;e[r].push(o),this.idToIndexMap[r][n]=s}}}_convertObjectIdsToArrayIndices(e){for(let r in DC)this._convertIdsToIndices(e,r);"scene"in e&&(e.scene=this._convertIdToIndex(e.scene,"scene"));for(let r of e.textures)this._convertTextureIds(r);for(let r of e.meshes)this._convertMeshIds(r);for(let r of e.nodes)this._convertNodeIds(r);for(let r of e.scenes)this._convertSceneIds(r)}_convertTextureIds(e){e.source&&(e.source=this._convertIdToIndex(e.source,"image"))}_convertMeshIds(e){for(let r of e.primitives){let{attributes:i,indices:n,material:o}=r;for(let s in i)i[s]=this._convertIdToIndex(i[s],"accessor");n&&(r.indices=this._convertIdToIndex(n,"accessor")),o&&(r.material=this._convertIdToIndex(o,"material"))}}_convertNodeIds(e){e.children&&(e.children=e.children.map(r=>this._convertIdToIndex(r,"node"))),e.meshes&&(e.meshes=e.meshes.map(r=>this._convertIdToIndex(r,"mesh")))}_convertSceneIds(e){e.nodes&&(e.nodes=e.nodes.map(r=>this._convertIdToIndex(r,"node")))}_convertIdsToIndices(e,r){e[r]||(console.warn(`gltf v1: json doesn't contain attribute ${r}`),e[r]=[]);for(let i of e[r])for(let n in i){let o=i[n],s=this._convertIdToIndex(o,n);i[n]=s}}_convertIdToIndex(e,r){let i=I4[r];if(i in this.idToIndexMap){let n=this.idToIndexMap[i][e];if(!Number.isFinite(n))throw new Error(`gltf v1: failed to resolve ${r} with id ${e}`);return n}return e}_updateObjects(e){for(let r of this.json.buffers)delete r.type}_updateMaterial(e){for(let r of e.materials){r.pbrMetallicRoughness={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1};let i=r.values?.tex||r.values?.texture2d_0||r.values?.diffuseTex,n=e.textures.findIndex(o=>o.id===i);n!==-1&&(r.pbrMetallicRoughness.baseColorTexture={index:n})}}};function UC(t,e={}){return new Qg().normalize(t,e)}async function kC(t,e,r=0,i,n){return B4(t,e,r,i),UC(t,{normalize:i?.gltf?.normalize}),OC(t,i,n),i?.gltf?.loadBuffers&&t.json.buffers&&await O4(t,i,n),i?.gltf?.loadImages&&await L4(t,i,n),await LC(t,i,n),t}function B4(t,e,r,i){if(i.core?.baseUrl&&(t.baseUri=i.core?.baseUrl),e instanceof ArrayBuffer&&!AC(e,r,i.glb)&&(e=new TextDecoder().decode(e)),typeof e=="string")t.json=nu(e);else if(e instanceof ArrayBuffer){let s={};r=yC(s,e,r,i.glb),ue(s.type==="glTF",`Invalid GLB magic string ${s.type}`),t._glb=s,t.json=s.json}else ue(!1,"GLTF: must be ArrayBuffer or string");let n=t.json.buffers||[];if(t.buffers=new Array(n.length).fill(null),t._glb&&t._glb.header.hasBinChunk){let{binChunks:s}=t._glb;t.buffers[0]={arrayBuffer:s[0].arrayBuffer,byteOffset:s[0].byteOffset,byteLength:s[0].byteLength}}let o=t.json.images||[];t.images=new Array(o.length).fill({})}async function O4(t,e,r){let i=t.json.buffers||[];for(let n=0;n<i.length;++n){let o=i[n];if(o.uri){let{fetch:s}=r;ue(s);let a=Ng(o.uri,e,r),l=await(await r?.fetch?.(a))?.arrayBuffer?.();t.buffers[n]={arrayBuffer:l,byteOffset:0,byteLength:l.byteLength},delete o.uri}else t.buffers[n]===null&&(t.buffers[n]={arrayBuffer:new ArrayBuffer(o.byteLength),byteOffset:0,byteLength:o.byteLength})}}async function L4(t,e,r){let i=F4(t),n=t.json.images||[],o=[];for(let s of i)o.push(N4(t,n[s],s,e,r));return await Promise.all(o)}function F4(t){let e=new Set,r=t.json.textures||[];for(let i of r)i.source!==void 0&&e.add(i.source);return Array.from(e).sort()}async function N4(t,e,r,i,n){let o;if(e.uri&&!e.hasOwnProperty("bufferView")){let l=Ng(e.uri,i,n),{fetch:f}=n;o=await(await f(l)).arrayBuffer(),e.bufferView={data:o}}if(Number.isFinite(e.bufferView)){let l=uC(t.json,t.buffers,e.bufferView);o=Sn(l.buffer,l.byteOffset,l.byteLength)}ue(o,"glTF image has no data");let s=i,a={...s,core:{...s?.core,mimeType:e.mimeType}},c=await mn(o,[Ln,_g],a,n);c&&c[0]&&(c={compressed:!0,mipmaps:!1,width:c[0].width,height:c[0].height,data:c[0]}),t.images=t.images||[],t.images[r]=c}var ia={dataType:null,batchType:null,name:"glTF",id:"gltf",module:"gltf",version:_C,extensions:["gltf","glb"],mimeTypes:["model/gltf+json","model/gltf-binary"],text:!0,binary:!0,tests:["glTF"],parse:D4,options:{gltf:{normalize:!0,loadBuffers:!0,loadImages:!0,decompressMeshes:!0}}};async function D4(t,e={},r){let i={...ia.options,...e};i.gltf={...ia.options.gltf,...i.gltf};let n=e?.glb?.byteOffset||0;return await kC({},t,n,i,r)}var U4={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},k4={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},rt={TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,REPEAT:10497,LINEAR:9729,NEAREST_MIPMAP_LINEAR:9986},V4={magFilter:rt.TEXTURE_MAG_FILTER,minFilter:rt.TEXTURE_MIN_FILTER,wrapS:rt.TEXTURE_WRAP_S,wrapT:rt.TEXTURE_WRAP_T},H4={[rt.TEXTURE_MAG_FILTER]:rt.LINEAR,[rt.TEXTURE_MIN_FILTER]:rt.NEAREST_MIPMAP_LINEAR,[rt.TEXTURE_WRAP_S]:rt.REPEAT,[rt.TEXTURE_WRAP_T]:rt.REPEAT};function z4(){return{id:"default-sampler",parameters:H4}}function j4(t){return k4[t]}function W4(t){return U4[t]}var Zg=class{baseUri="";jsonUnprocessed;json;buffers=[];images=[];postProcess(e,r={}){let{json:i,buffers:n=[],images:o=[]}=e,{baseUri:s=""}=e;return ue(i),this.baseUri=s,this.buffers=n,this.images=o,this.jsonUnprocessed=i,this.json=this._resolveTree(e.json,r),this.json}_resolveTree(e,r={}){let i={...e};return this.json=i,e.bufferViews&&(i.bufferViews=e.bufferViews.map((n,o)=>this._resolveBufferView(n,o))),e.images&&(i.images=e.images.map((n,o)=>this._resolveImage(n,o))),e.samplers&&(i.samplers=e.samplers.map((n,o)=>this._resolveSampler(n,o))),e.textures&&(i.textures=e.textures.map((n,o)=>this._resolveTexture(n,o))),e.accessors&&(i.accessors=e.accessors.map((n,o)=>this._resolveAccessor(n,o))),e.materials&&(i.materials=e.materials.map((n,o)=>this._resolveMaterial(n,o))),e.meshes&&(i.meshes=e.meshes.map((n,o)=>this._resolveMesh(n,o))),e.nodes&&(i.nodes=e.nodes.map((n,o)=>this._resolveNode(n,o)),i.nodes=i.nodes.map((n,o)=>this._resolveNodeChildren(n))),e.skins&&(i.skins=e.skins.map((n,o)=>this._resolveSkin(n,o))),e.scenes&&(i.scenes=e.scenes.map((n,o)=>this._resolveScene(n,o))),typeof this.json.scene=="number"&&i.scenes&&(i.scene=i.scenes[this.json.scene]),i}getScene(e){return this._get(this.json.scenes,e)}getNode(e){return this._get(this.json.nodes,e)}getSkin(e){return this._get(this.json.skins,e)}getMesh(e){return this._get(this.json.meshes,e)}getMaterial(e){return this._get(this.json.materials,e)}getAccessor(e){return this._get(this.json.accessors,e)}getCamera(e){return this._get(this.json.cameras,e)}getTexture(e){return this._get(this.json.textures,e)}getSampler(e){return this._get(this.json.samplers,e)}getImage(e){return this._get(this.json.images,e)}getBufferView(e){return this._get(this.json.bufferViews,e)}getBuffer(e){return this._get(this.json.buffers,e)}_get(e,r){if(typeof r=="object")return r;let i=e&&e[r];return i||console.warn(`glTF file error: Could not find ${e}[${r}]`),i}_resolveScene(e,r){return{...e,id:e.id||`scene-${r}`,nodes:(e.nodes||[]).map(i=>this.getNode(i))}}_resolveNode(e,r){let i={...e,id:e?.id||`node-${r}`};return e.mesh!==void 0&&(i.mesh=this.getMesh(e.mesh)),e.camera!==void 0&&(i.camera=this.getCamera(e.camera)),e.skin!==void 0&&(i.skin=this.getSkin(e.skin)),e.meshes!==void 0&&e.meshes.length&&(i.mesh=e.meshes.reduce((n,o)=>{let s=this.getMesh(o);return n.id=s.id,n.primitives=n.primitives.concat(s.primitives),n},{primitives:[]})),i}_resolveNodeChildren(e){return e.children&&(e.children=e.children.map(r=>this.getNode(r))),e}_resolveSkin(e,r){let i=typeof e.inverseBindMatrices=="number"?this.getAccessor(e.inverseBindMatrices):void 0;return{...e,id:e.id||`skin-${r}`,inverseBindMatrices:i}}_resolveMesh(e,r){let i={...e,id:e.id||`mesh-${r}`,primitives:[]};return e.primitives&&(i.primitives=e.primitives.map(n=>{let o={...n,attributes:{},indices:void 0,material:void 0},s=n.attributes;for(let a in s)o.attributes[a]=this.getAccessor(s[a]);return n.indices!==void 0&&(o.indices=this.getAccessor(n.indices)),n.material!==void 0&&(o.material=this.getMaterial(n.material)),o})),i}_resolveMaterial(e,r){let i={...e,id:e.id||`material-${r}`};if(i.normalTexture&&(i.normalTexture={...i.normalTexture},i.normalTexture.texture=this.getTexture(i.normalTexture.index)),i.occlusionTexture&&(i.occlusionTexture={...i.occlusionTexture},i.occlusionTexture.texture=this.getTexture(i.occlusionTexture.index)),i.emissiveTexture&&(i.emissiveTexture={...i.emissiveTexture},i.emissiveTexture.texture=this.getTexture(i.emissiveTexture.index)),i.emissiveFactor||(i.emissiveFactor=i.emissiveTexture?[1,1,1]:[0,0,0]),i.pbrMetallicRoughness){i.pbrMetallicRoughness={...i.pbrMetallicRoughness};let n=i.pbrMetallicRoughness;n.baseColorTexture&&(n.baseColorTexture={...n.baseColorTexture},n.baseColorTexture.texture=this.getTexture(n.baseColorTexture.index)),n.metallicRoughnessTexture&&(n.metallicRoughnessTexture={...n.metallicRoughnessTexture},n.metallicRoughnessTexture.texture=this.getTexture(n.metallicRoughnessTexture.index))}return i}_resolveAccessor(e,r){let i=j4(e.componentType),n=W4(e.type),o=i*n,s={...e,id:e.id||`accessor-${r}`,bytesPerComponent:i,components:n,bytesPerElement:o,value:void 0,bufferView:void 0,sparse:void 0};if(e.bufferView!==void 0&&(s.bufferView=this.getBufferView(e.bufferView)),s.bufferView){let a=s.bufferView.buffer,{ArrayType:c,byteLength:l}=cn(s,s.bufferView),f=(s.bufferView.byteOffset||0)+(s.byteOffset||0)+a.byteOffset,u=pi(a.arrayBuffer,f,l);s.bufferView.byteStride&&(u=this._getValueFromInterleavedBuffer(a,f,s.bufferView.byteStride,s.bytesPerElement,s.count)),s.value=new c(u)}return s}_getValueFromInterleavedBuffer(e,r,i,n,o){let s=new Uint8Array(o*n);for(let a=0;a<o;a++){let c=r+a*i;s.set(new Uint8Array(e.arrayBuffer.slice(c,c+n)),a*n)}return s.buffer}_resolveTexture(e,r){return{...e,id:e.id||`texture-${r}`,sampler:typeof e.sampler=="number"?this.getSampler(e.sampler):z4(),source:typeof e.source=="number"?this.getImage(e.source):void 0}}_resolveSampler(e,r){let i={id:e.id||`sampler-${r}`,...e,parameters:{}};for(let n in i){let o=this._enumSamplerParameter(n);o!==void 0&&(i.parameters[o]=i[n])}return i}_enumSamplerParameter(e){return V4[e]}_resolveImage(e,r){let i={...e,id:e.id||`image-${r}`,image:null,bufferView:e.bufferView!==void 0?this.getBufferView(e.bufferView):void 0},n=this.images[r];return n&&(i.image=n),i}_resolveBufferView(e,r){let i=e.buffer,n=this.buffers[i].arrayBuffer,o=this.buffers[i].byteOffset||0;return e.byteOffset&&(o+=e.byteOffset),{id:`bufferView-${r}`,...e,buffer:this.buffers[i],data:new Uint8Array(n,o,e.byteLength)}}_resolveCamera(e,r){let i={...e,id:e.id||`camera-${r}`};return i.perspective,i.orthographic,i}};function qg(t,e){return new Zg().postProcess(t,e)}async function VC(t){let e=[];return t.scenes.forEach(r=>{r.traverse(i=>{})}),await G4(()=>e.some(r=>!r.loaded))}async function G4(t){for(;t();)await new Promise(e=>requestAnimationFrame(e))}var HC=`layout(std140) uniform scenegraphUniforms {
  float sizeScale;
  float sizeMinPixels;
  float sizeMaxPixels;
  mat4 sceneModelMatrix;
  bool composeModelMatrix;
} scenegraph;
`,zC={name:"scenegraph",vs:HC,fs:HC,uniformTypes:{sizeScale:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",sceneModelMatrix:"mat4x4<f32>",composeModelMatrix:"f32"}};var jC=`#version 300 es
#define SHADER_NAME scenegraph-layer-vertex-shader
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceColors;
in vec3 instancePickingColors;
in vec3 instanceModelMatrixCol0;
in vec3 instanceModelMatrixCol1;
in vec3 instanceModelMatrixCol2;
in vec3 instanceTranslation;
in vec3 positions;
#ifdef HAS_UV
in vec2 texCoords;
#endif
#ifdef LIGHTING_PBR
#ifdef HAS_NORMALS
in vec3 normals;
#endif
#endif
out vec4 vColor;
#ifndef LIGHTING_PBR
#ifdef HAS_UV
out vec2 vTEXCOORD_0;
#endif
#endif
void main(void) {
#if defined(HAS_UV) && !defined(LIGHTING_PBR)
vTEXCOORD_0 = texCoords;
geometry.uv = texCoords;
#endif
geometry.worldPosition = instancePositions;
geometry.pickingColor = instancePickingColors;
mat3 instanceModelMatrix = mat3(instanceModelMatrixCol0, instanceModelMatrixCol1, instanceModelMatrixCol2);
vec3 normal = vec3(0.0, 0.0, 1.0);
#ifdef LIGHTING_PBR
#ifdef HAS_NORMALS
normal = instanceModelMatrix * (scenegraph.sceneModelMatrix * vec4(normals, 0.0)).xyz;
#endif
#endif
float originalSize = project_size_to_pixel(scenegraph.sizeScale);
float clampedSize = clamp(originalSize, scenegraph.sizeMinPixels, scenegraph.sizeMaxPixels);
vec3 pos = (instanceModelMatrix * (scenegraph.sceneModelMatrix * vec4(positions, 1.0)).xyz) * scenegraph.sizeScale * (clampedSize / originalSize) + instanceTranslation;
if(scenegraph.composeModelMatrix) {
DECKGL_FILTER_SIZE(pos, geometry);
geometry.normal = project_normal(normal);
geometry.worldPosition += pos;
gl_Position = project_position_to_clipspace(pos + instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
}
else {
pos = project_size(pos);
DECKGL_FILTER_SIZE(pos, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, pos, geometry.position);
geometry.normal = project_normal(normal);
}
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
#ifdef LIGHTING_PBR
pbr_vPosition = geometry.position.xyz;
#ifdef HAS_NORMALS
pbr_vNormal = geometry.normal;
#endif
#ifdef HAS_UV
pbr_vUV0 = texCoords;
#else
pbr_vUV0 = vec2(0., 0.);
#endif
pbr_vUV1 = vec2(0., 0.);
geometry.uv = pbr_vUV0;
#endif
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
}
`;var WC=`#version 300 es
#define SHADER_NAME scenegraph-layer-fragment-shader
in vec4 vColor;
out vec4 fragColor;
#ifndef LIGHTING_PBR
#if defined(HAS_UV) && defined(HAS_BASECOLORMAP)
in vec2 vTEXCOORD_0;
uniform sampler2D pbr_baseColorSampler;
#endif
#endif
void main(void) {
#ifdef LIGHTING_PBR
fragColor = vColor * pbr_filterColor(vec4(0));
geometry.uv = pbr_vUV0;
#else
#if defined(HAS_UV) && defined(HAS_BASECOLORMAP)
fragColor = vColor * texture(pbr_baseColorSampler, vTEXCOORD_0);
geometry.uv = vTEXCOORD_0;
#else
fragColor = vColor;
#endif
#endif
fragColor.a *= layer.opacity;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;var GC=[255,255,255,255],X4={scenegraph:{type:"object",value:null,async:!0},getScene:t=>t&&t.scenes?typeof t.scene=="object"?t.scene:t.scenes[t.scene||0]:t,getAnimator:t=>t&&t.animator,_animations:null,onFirstDraw:{type:"function",value:()=>{}},sizeScale:{type:"number",value:1,min:0},sizeMinPixels:{type:"number",min:0,value:0},sizeMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},getPosition:{type:"accessor",value:t=>t.position},getColor:{type:"accessor",value:GC},_lighting:"flat",_imageBasedLightingEnvironment:void 0,getOrientation:{type:"accessor",value:[0,0,0]},getScale:{type:"accessor",value:[1,1,1]},getTranslation:{type:"accessor",value:[0,0,0]},getTransformMatrix:{type:"accessor",value:[]},loaders:[ia]},na=class extends we{getShaders(){let e={},r;this.props._lighting==="pbr"?(r=fr,e.LIGHTING_PBR=1):r={name:"pbrMaterial"};let i=[Oe,Ne,zC,r];return super.getShaders({defines:e,vs:jC,fs:WC,modules:i})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),accessor:"getPosition",transition:!0},instanceColors:{type:"unorm8",size:this.props.colorFormat.length,accessor:"getColor",defaultValue:GC,transition:!0},instanceModelMatrix:ME})}updateState(e){super.updateState(e);let{props:r,oldProps:i}=e;r.scenegraph!==i.scenegraph?this._updateScenegraph():r._animations!==i._animations&&this._applyAnimationsProp(this.state.animator,r._animations)}finalizeState(e){super.finalizeState(e),this._destroyScenegraphAssets()}get isLoaded(){return!!(this.state?.scenegraph&&super.isLoaded)}_updateScenegraph(){let e=this.props,{device:r}=this.context,i=null;if(e.scenegraph instanceof Mt)i={scenes:[e.scenegraph]};else if(e.scenegraph&&typeof e.scenegraph=="object"){let a=e.scenegraph,c=a.json?qg(a):a,l=Rg(r,c,this._getModelOptions());i=l,VC(l).then(()=>this.setNeedsRedraw()).catch(f=>{this.raiseError(f,"loading glTF")})}let n={layer:this,device:this.context.device},o=e.getScene(i,n),s=e.getAnimator(i,n);if(o instanceof Xt){this._destroyScenegraphAssets(),this._applyAnimationsProp(s,e._animations);let a=[];o.traverse(c=>{c instanceof _r&&a.push(c.model)}),this.setState({scenegraph:o,animator:s,materials:i?.materials||null,models:a,firstDrawSignaled:!1}),this.getAttributeManager().invalidateAll()}else o!==null&&P.warn("invalid scenegraph:",o)()}_destroyScenegraphAssets(){this.state.scenegraph?.destroy(),this.state.materials?.forEach(e=>e.destroy()),this.state.scenegraph=null,this.state.animator=null,this.state.materials=null,this.state.models=[]}_applyAnimationsProp(e,r){if(!e||!r)return;let i=e.getAnimations();Object.keys(r).sort().forEach(n=>{let o=r[n];if(n==="*")i.forEach(s=>{Object.assign(s,o)});else if(Number.isFinite(Number(n))){let s=Number(n);s>=0&&s<i.length?Object.assign(i[s],o):P.warn(`animation ${n} not found`)()}else{let s=i.find(({animation:a})=>a.name===n);s?Object.assign(s,o):P.warn(`animation ${n} not found`)()}})}_getModelOptions(){let{_imageBasedLightingEnvironment:e}=this.props,r;return e&&(typeof e=="function"?r=e({gl:this.context.gl,layer:this}):r=e),{imageBasedLightingEnvironment:r,modelOptions:{id:this.props.id,isInstanced:!0,bufferLayout:this.getAttributeManager().getBufferLayouts(),...this.getShaders()},useTangents:!1}}draw({context:e}){if(!this.state.scenegraph)return;this.props._animations&&this.state.animator&&(this.state.animator.setTime(e.timeline.getTime()),this.setNeedsRedraw());let{viewport:r,renderPass:i}=this.context,{sizeScale:n,sizeMinPixels:o,sizeMaxPixels:s,coordinateSystem:a}=this.props,c={camera:r.cameraPosition},l=this.getNumInstances();this.state.scenegraph.traverse((f,{worldMatrix:u})=>{if(f instanceof _r){let{model:d}=f;d.setInstanceCount(l);let h={sizeScale:n,sizeMinPixels:o,sizeMaxPixels:s,composeModelMatrix:PE(r,a),sceneModelMatrix:u};d.shaderInputs.setProps({pbrProjection:c,scenegraph:h}),d.draw(i)}}),this.state.firstDrawSignaled||(this.state.firstDrawSignaled=!0,this.props.onFirstDraw?.())}};na.defaultProps=X4;na.layerName="ScenegraphLayer";var XC=na;export{EE as GeoJsonLayer,Ss as MapboxOverlay,tn as PathLayer,WS as PolygonLayer,Gl as ScatterplotLayer,XC as ScenegraphLayer};
