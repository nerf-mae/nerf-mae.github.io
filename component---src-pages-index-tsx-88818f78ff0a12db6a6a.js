"use strict";(self.webpackChunkfeature_fields_manipulation=self.webpackChunkfeature_fields_manipulation||[]).push([[691],{7812:function(e,t,a){a.r(t),a.d(t,{Head:function(){return D},default:function(){return A}});var r=a(7294),n=a(9583),l=a(7735),s=a(8193),i=a(1451),o=a.p+"static/nerf-mae_teaser3-4838b3bf9d746618ffe1558dbc206751.png",c=a.p+"static/dataset_1-9d512f297155913e25e3f7e16695bde8.png",m=a.p+"static/dataset_2-390fe4f59b6f5bdbdc386c1f47fb619f.png",d=a.p+"static/architecture_2-9239a5bf4bb7ee2cb1e87e5e36300170.jpg",u=a.p+"static/comparison_mae-97e3e6da845335bfda99a61d3b0bd3eb.jpeg",f=a.p+"static/qualitative_reconstruction_eccv-633102368c9950f4ec85be890ac151ca.jpeg",p=a.p+"static/comparison_charts_2-7c1ede1352005bef562bc720953a4d05.jpeg",g=a.p+"static/comparison_chart2-d02e3575c7f39e82495ffaa0115a0009.jpg",x=a.p+"static/qualitative_reconstruction_3-9ee081328db088fab4de47134e2c4bec.jpg",b=a.p+"static/qualitative_reconstruction_4-267ed16babf77d60b7f788784dc14c03.jpg",h=a.p+"static/tri_logo_new-9ea2bbbf4de1f2980ea2eedf9a282a90.svg",v=a.p+"static/gatech_logo_new-8369b37f40d41e43c7450f296faee366.svg";const w=e=>{let{children:t}=e;return r.createElement("h1",{className:"pb-1 mb-5 sm:mb-4 sm:leading-tight md:leading-tight lg:leading-tight font-bold text-center"},t)},E=e=>{let{website:t,children:a}=e;return r.createElement("div",{className:"flex flex-wrap justify-center text-2xl lg:text-2xl mb-6 sm:mb-5"},r.createElement("a",{className:"no-underline",href:t,target:"_blank"},a))},N=e=>{let{children:t}=e;return r.createElement("div",null,r.createElement("div",{className:"flex justify-center content-center"},r.createElement("p",{className:"font-semibold text-2xl sm:text-3xl m-1 sm:m-2"},"Abstract")),r.createElement("div",{className:"flex justify-center content-center"},r.createElement("p",{className:"text-justify font-light text-base sm:text-lg m-1 sm:m-1 max-w-[100%] sm:max-w-[800px]"},t)))},y=e=>{let{children:t,website:a,firstAuthor:n,affiliations:l,lastAuthor:s}=e;return r.createElement("span",{className:"text-center inline-block"},r.createElement("a",{href:a,target:"_blank",className:"font-normal no-underline text-stone-600 hover:underline underline-offset-3 hover:transition-all"},t),n||l?r.createElement("sup",{className:"pl-0.5"},n?r.createElement("span",{className:"font-bold"},"*"):null,l||null):null,s?null:r.createElement(r.Fragment,null,", "))},k=e=>{let{children:t,website:a,number:n}=e;return r.createElement("span",{className:"text-center inline-block mr-4"},r.createElement("sup",{className:"mr-0.5"},n),r.createElement("a",{href:a,target:"_blank",className:"font-light no-underline text-stone-600 hover:underline underline-offset-3 hover:transition-all"},t))},R=e=>{let{children:t,url:a,icon:n}=e;return r.createElement("span",{className:"text-center inline-block my-3.5 sm:my-2 mx-2"},r.createElement("a",{href:a,target:a.startsWith("#")?"_self":"_blank",className:"text-xl no-underline font-normal text-[#009cff] bg-[#f9f9f9] hover:bg-[#f4f4f4] hover:transition-all px-4 py-3 rounded-xl"},r.createElement("span",{className:"align-middle inline-flex justify-center mr-0.25"},n," "),r.createElement("span",null,t)))},j=e=>{let{children:t}=e;return r.createElement("div",{className:"mx-auto w-full max-w-[90%] format format-md md:format-base lg:max-w-5xl lg:format-lg format-blue dark:format-invert"},t)},F=e=>{let{children:t}=e;return r.createElement("main",{className:"pt-6 lg:pt-12 bg-white dark:bg-gray-900"},t)},D=()=>r.createElement("title",null,"NeRF-MAE: Masked AutoEncoders for Self-Supervised 3D representation Learning for Neural Radiance Fields");var A=()=>r.createElement(r.Fragment,null,r.createElement(F,null,r.createElement(j,null,r.createElement(w,null,r.createElement("span",{className:"font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-indigo-600 to-emerald-400"},"NeRF-MAE:")," ",r.createElement("span",{className:"text-stone-800"},"Masked AutoEncoders for Self-Supervised 3D representation Learning for Neural Radiance Fields")),r.createElement(E,{website:"https://www.corl2023.org/"},r.createElement("span",{className:"font-normal text-stone-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-indigo-600 hover:to-emerald-400 hover:transition-all"},"CVPR Neural Rendering Intelligence Workshop, 2024")),r.createElement("div",{className:"flex flex-wrap justify-center text-xl lg:text-xl mb-4"},r.createElement(y,{website:"https://zubairirshad.com/",affiliations:"1,2"},"Muhammad Zubair Irshad"),r.createElement(y,{website:"https://zakharos.github.io/",affiliations:"1"},"Sergey Zakahrov"),r.createElement(y,{website:"https://www.linkedin.com/in/vitorguizilini/",affiliations:"1"},"Vitor Guizilini"),r.createElement(y,{website:"https://adriengaidon.com/",affiliations:"1"},"Adrien Gaidon"),r.createElement(y,{website:"https://faculty.cc.gatech.edu/~zk15/",affiliations:"2"},"Zsolt Kira"),r.createElement(y,{website:"https://www.linkedin.com/in/rare%C8%99-ambru%C8%99-b04812125/",lastAuthor:!0,affiliations:"1"},"Rares Ambrus")),r.createElement("div",{className:"flex flex-wrap justify-center text-xl lg:text-xl"},r.createElement(k,{website:"https://www.tri.global/",number:"1"},"Toyota Research Institute"),r.createElement(k,{website:"https://www.gatech.edu/",number:"2"},"Georgia Tech")),r.createElement("div",{className:"flex flex-wrap justify-center text-xl lg:text-xl py-0 md:py-0"},r.createElement("div",{className:"flex w-full lg:w-1/2"},r.createElement("sup",null)," ",r.createElement("a",{href:"https://www.tri.global/"}," ",r.createElement("img",{src:h,alt:"TRI logo",className:"lg:float-right border-slate-100 rounded-xl mx-auto max-w-[45%] sm:max-w-[45%] larger-image"})," ")),r.createElement("div",{className:"flex w-full lg:w-1/2"},r.createElement("sup",null)," ",r.createElement("a",{href:"https://www.gatech.edu/"},r.createElement("img",{src:v,alt:"Gatech logo",className:"lg:float-left border-slate-100 rounded-xl mx-auto max-w-[45%] sm:max-w-[45%] larger-image"})," "))),r.createElement("p",{className:"flex flex-wrap justify-center"},r.createElement(R,{url:"https://arxiv.org/pdf/2404.01300.pdf",icon:r.createElement(n.yRW,null)},"Paper"),r.createElement(R,{url:"https://arxiv.org/abs/2404.01300",icon:r.createElement(l.DnF,null)},"arXiv"),r.createElement(R,{url:"https://github.com/zubair-irshad/NeRF-MAE",icon:r.createElement(s.RrF,null)},"Code (Coming Soon)")),r.createElement("div",{className:"flex justify-center content-center"},r.createElement("img",{src:o,alt:"Teaser Image",className:"border-2 border-slate-100 rounded-xl mx-auto max-w-[100%] sm:max-w-[100%]  larger-image"})),r.createElement("div",{className:"flex justify-center"},r.createElement("p",{className:"text-center text-xl !mt-0 !mb-2 max-w-[100%] md:max-w-[100%]"},"Overview: a) We present ",r.createElement("b",null,"NeRF-MAE"),", the first large-scale self-supervised pretraining utilizing Neural Radiance Field’s (NeRF) radiance and density grid as an input modality. Our ap- proach uses a standard 3D Swin Transformer encoder and a voxel decoder to learn a powerful rep- resentation in (a) ",r.createElement("b",null,"an opacity-aware dense volumetric masked self-supervised learning objective directly in 3D"),". (b) Our representation, when fine-tuned on a small subset of data, improves many 3D downstream tasks such as 3D object detection, voxel super-resolution, and voxel-labeling."))),r.createElement("div",{className:"my-6 pt-6 pb-4 bg-gradient-to-r from-pink-100/70 via-indigo-100/70 to-emerald-100/70"},r.createElement("div",{className:"mx-auto w-full max-w-[97.5%] lg:max-w-7xl py-2 md:py-4 px-2 md:px-4"},r.createElement("div",{className:"relative pb-8 mb-3"},r.createElement("div",{className:"flex"},r.createElement("div",{className:"w-1/2"},r.createElement("img",{src:c,alt:"Teaser Image 1",className:"border-2 border-slate-100 rounded-xl mx-auto max-w-[100%] sm:max-w-[100%] larger-image"})),r.createElement("div",{className:"w-1/2"},r.createElement("img",{src:m,alt:"Teaser Image 2",className:"border-2 border-slate-100 rounded-xl mx-auto max-w-[100%] sm:max-w-[100%] larger-image"})))),r.createElement("p",{className:"text-center text-lg md:text-xl md:max-w-[85%] mx-auto"},"We pretrain a single Transformer model on diverse scenes from 4 different data sources i.e. ",r.createElement("b",null,"Front3D"),", ",r.createElement("b",null,"Hypersim"),", ",r.createElement("b",null,"Habitat-Matterport 3D")," and test on hold-out ",r.createElement("b",null,"ScanNet")," scenes. Our dataset-mix totals over ",r.createElement("b",null,"3500 scenes")," and over ",r.createElement("b",null,"1.7M images")," used for pertaining neural radiance fields using our single model i.e. NeRF-MAE"))),r.createElement(j,null,r.createElement(N,null,"Neural fields have shown remarkable success in computer vision and robotics due to their ability to understand the 3D visual world such as inferring semantics, geometry, and dynamics. Given the capabilities of neural fields in densely representing a 3D scene from 2D images, we ask the question: Can we scale their self-supervised pretraining, specifically using masked autoencoders, to generate effective 3D representations from posed RGB images. Given the astounding success of extending transformers to novel data modalities, we employ standard 3D Vision Transformers to suit the unique formulation of NeRFs. We leverage NeRF's volumetric grid as a dense input to the transformer, contrasting it with other 3D representations such as pointclouds where the information density can be uneven, and the representation can be irregular. Due to the difficulty of applying masked autoencoders to an implicit representation, such as NeRF, we opt for extracting an explicit representation that canonicalizes scenes across domains by employing the camera trajectory for sampling.  Our goal is made possible by first masking random patches from NeRF's radiance and density grid and employing a standard 3D Swin Transformer to reconstruct the masked patches. In doing so, the model can learn the semantic and spatial structure of complete scenes. We are able to pretrain this representation at scale on our proposed carefully curated posed-RGB data, totaling over 1.6 million images. Once pretrained, the encoder backbone is used for effective 3D transfer learning. Our novel self-supervised pretraining approach for NeRFs, NeRF-MAE, scales remarkably well and improves performance on various challenging 3D tasks including 3D object detection, voxel super-resolution, and semantic labeling. Utilizing unlabeled posed 2D data for pretraining, NeRF-MAE significantly outperforms self-supervised 3D pretraining and NeRF scene understanding baselines on Front3D and ScanNet datasets with an absolute performance improvement of over 20% AP50 and 8% AP25 for 3D object detection."),r.createElement("h2",{className:"text-center font-semibold border-b-[1px]",id:"video"},"NeRF-MAE Comparison"),r.createElement("p",{className:"text-justify font-light text-base sm:text-lg md:max-w-[85%] mx-auto"},"We show detailed comparison to point-based pretraining approaches in our paper. We note their limitation as they model surface-level sparse points, where our approach is similar to images in terms of high-information density and regularity of structure; hence making NeRF-MAE a direct extension of image MAE to 3D. We leverage NeRF’s dense volumetric information along rays and introduce an opacity-aware reconstruction loss, enabling us to achieve superior representation learning. For detailed results, please refer to our paper's experimental section."),r.createElement("div",{className:"flex justify-center content-center"},r.createElement("img",{src:u,alt:"Teaser Image",className:"border-2 border-slate-100 rounded-xl mx-auto max-w-[100%] sm:max-w-[90%]  larger-image"})),r.createElement("h2",{className:"text-center font-semibold border-b-[1px]",id:"video"},"Method"),r.createElement("p",{className:"text-justify font-light text-base sm:text-lg md:max-w-[85%] mx-auto"},"Our method utilizes a U-Net style architecture employing Swin Transformer as the encoder to encode the RGB/density grid into meaningful multi-resolution low-level features, and transposed convolution layers at each stage with skip connections using residual blocks from the features of the encoder. We use mask volume region reconstruction, and enforce a faithful and accurate reconstruction of masked patches with a custom opacity and radiance-aware loss function suited to the unique formulation of NeRFs."),r.createElement("div",{className:"flex justify-center content-center"},r.createElement("img",{src:d,alt:"Teaser Image",className:"border-2 border-slate-100 rounded-xl mx-auto max-w-[100%] sm:max-w-[90%]  larger-image"})),r.createElement("h2",{className:"text-center font-semibold border-b-[1px]",id:"video"},"Qualitative NeRF-MAE Reconstructions"),r.createElement("p",{className:"text-justify font-light text-base sm:text-lg md:max-w-[85%] mx-auto"},r.createElement("b",null,"Left:")," For each triplet, we show ground truth (left), masked radiance and density grid (middle) and our NeRF-MAE reconstruction overlayed with unmasked GT grid (right). The masking ratio is 75%, leaving only 250 patches out of 1000 patches. ",r.createElement("b",null,"Right:")," shows different masking strategies along with the reconstructed output"),r.createElement("div",{className:"flex justify-center content-center"},r.createElement("img",{src:f,alt:"Teaser Image",className:"border-2 border-slate-100 rounded-xl mx-auto max-w-[100%] sm:max-w-[90%]  larger-image"})),r.createElement("h2",{className:"text-center font-semibold border-b-[1px]",id:"video"},"Quantitative Comparisons"),r.createElement("p",{className:"text-justify font-light text-base sm:text-lg md:max-w-[85%] mx-auto"},"Quantitative evaluation results shows our pretraining improves a variety of downstream 3D tasks on both unseen in-domain data (Front3D) and out-of-domain data (ScanNet). We also show that adding unlabelled posed 2D data from different sources improves performance on 3D OBB prediction downstream task. For detailed analysis, please refer to our paper's experimental section."),r.createElement("div",{className:"flex justify-center content-center"},r.createElement("img",{src:g,alt:"Quantiative Image",className:"border-2 border-slate-100 rounded-xl mx-auto max-w-[100%] sm:max-w-[90%]  larger-image"})),r.createElement("h2",{className:"text-center font-semibold border-b-[1px]",id:"video"},"Scaling Performance and Ablation Analysis"),r.createElement("p",{className:"text-justify font-light text-base sm:text-lg md:max-w-[85%] mx-auto"},"Quantitative results showing our representation improves with more unsupervised data and as well as better reconstruction quality of input NeRF."),r.createElement("div",{className:"flex justify-center content-center"},r.createElement("img",{src:p,alt:"Quantiative Image",className:"border-2 border-slate-100 rounded-xl mx-auto max-w-[100%] sm:max-w-[90%]  larger-image"})),r.createElement("h2",{className:"text-center font-semibold border-b-[1px]",id:"video"},"Downstream 3D Tasks Results"),r.createElement("p",{className:"text-justify font-light text-base sm:text-lg md:max-w-[85%] mx-auto"},r.createElement("b",null,"Left"),": Qualitative 3D OBB prediction: showing our approach’s superior results compared with NeRF-RPN ",r.createElement("b",null,"Right"),": Qualitative voxel-labelling downstream task gneralization comparison: showing our approach’s superior results compared with NeRF-RPN."),r.createElement("div",{className:"mx-auto w-full max-w-[97.5%] lg:max-w-7xl py-0 md:py-0 px-2 md:px-2"},r.createElement("div",{className:"flex"},r.createElement("div",{className:"w-1/2"},r.createElement("img",{src:x,alt:"Downstream Results 1",className:"border-2 border-slate-100 rounded-xl mx-auto max-w-[100%] sm:max-w-[83%] larger-image"})),r.createElement("div",{className:"w-1/2"},r.createElement("img",{src:b,alt:"Downstream Results 2",className:"border-2 border-slate-100 rounded-xl mx-auto max-w-[100%] sm:max-w-[100%] larger-image"})))),r.createElement("h2",{id:"citation",className:"border-b-[1px]"},"Citation"),r.createElement("div",{className:"relative overflow-auto"},r.createElement("pre",{className:"bg-gradient-to-r from-pink-100 via-indigo-100 to-emerald-100 !my-0"},r.createElement("code",{id:"citation-bib",className:"font-medium text-slate-800"},"@misc{irshad2024nerfmae,\n    title={NeRF-MAE: Masked AutoEncoders for Self-Supervised 3D representation Learning for Neural Radiance Fields}, \n    author={Muhammad Zubair Irshad and Sergey Zakahrov and Vitor Guizilini and Adrien Gaidon and Zsolt Kira and Rares Ambrus},\n    year={2024},\n    eprint={2404.01300},\n    archivePrefix={arXiv},\n    primaryClass={cs.CV}\n}")),r.createElement("div",{className:"absolute top-0 right-0"},r.createElement("button",{className:"float-right text-2xl text-indigo-500 bg-white hover:bg-slate-50 hover:text-indigo-600 hover:transition-all rounded-full p-2 m-3 invisible md:visible",onClick:()=>{let e=document.getElementById("citation-bib"),t=document.createRange(),a=window.getSelection();null!=e&&null!=t&&null!=a&&(t.selectNode(e),a.removeAllRanges(),a.addRange(t))}},r.createElement(i.DV2,null))))),r.createElement("footer",{className:"flex flex-col justify-center bg-gray-50 mt-8 py-8"},r.createElement("div",{className:"flex justify-center align-middle text-lg"},r.createElement("a",{role:"button",className:"text-blue-500",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},r.createElement("span",{className:"align-text-top inline-flex justify-center mr-0.25"},r.createElement(n.ZTc,null)," "),r.createElement("span",null,"Back to Top"))),r.createElement("div",{className:"mt-2.5 text-center"},"Website source code borrowred from  ",r.createElement("a",{href:"https://github.com/f3rm/f3rm.github.io",target:"_blank",className:"text-blue-500"},r.createElement("span",{className:"align-text-top inline-flex justify-center mr-0.25"},r.createElement(s.RrF,null)," "),r.createElement("span",null,"GitHub"))))))},4405:function(e,t,a){a.d(t,{w_:function(){return c}});var r=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(n),s=function(){return s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},i=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function o(e){return e&&e.map((function(e,t){return r.createElement(e.tag,s({key:t},e.attr),o(e.child))}))}function c(e){return function(t){return r.createElement(m,s({attr:s({},e.attr)},t),o(e.child))}}function m(e){var t=function(t){var a,n=e.attr,l=e.size,o=e.title,c=i(e,["attr","size","title"]),m=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:a,style:s(s({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(n)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-88818f78ff0a12db6a6a.js.map