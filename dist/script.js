let generate = document.querySelector(".generate");
let input = document.querySelector("input[type=number]");
let range = document.querySelector("input[type=range");

let paragraphs = [
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Impeditratione vel explicabo deleniti tempore ipsa in quaerat placeatnecessitatibus et eligendi facilis aspernatur, blanditiis fuga,consectetur quam expedita ipsum beatae!",
  "Sed nulla lorem, maximus in mattis et, auctor nec nisi. Nam vitae ultrices diam. Ut malesuada porttitor faucibus. Nulla faucibus tincidunt sagittis. Praesent at libero eget metus aliquam vulputate. Nam cursus sapien ac mollis bibendum. Praesent eu massa non nulla pulvinar vestibulum. Ut vulputate leo erat, id tincidunt diam aliquet pulvinar. Pellentesque consectetur quam elit, eu aliquet mi rhoncus ac. Fusce erat nulla, ornare sit amet dignissim sit amet, egestas et ante. Praesent ac pretium justo. Pellentesque risus elit, tincidunt scelerisque tincidunt ut, molestie ut magna. Sed mattis tellus sed sagittis hendrerit. Sed accumsan viverra turpis. Phasellus risus nisl, cursus quis aliquam eu, molestie eu quam. Maecenas hendrerit tortor sit amet erat tristique posuere. ",
  " Sed vel odio semper, aliquet dolor quis, blandit velit. Nulla feugiat purus at tellus lobortis pulvinar. Ut commodo suscipit felis, id mattis lectus tempor ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit scelerisque viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce diam justo, scelerisque nec libero id, posuere tristique velit. Etiam sapien ipsum, accumsan vitae sollicitudin a, auctor vel leo. ",
  "Donec id nunc sem. Ut ut purus purus. Mauris vestibulum tellus ut dui venenatis gravida. Sed nulla nisi, iaculis sed efficitur in, pulvinar eu tortor. Donec accumsan justo a magna sodales auctor. Cras tincidunt dapibus mattis. Quisque lectus diam, dignissim ut erat sit amet, molestie placerat odio. ",
  "Ut bibendum tristique pharetra. Vestibulum tortor sapien, ornare et libero nec, euismod iaculis odio. Donec a erat vel lectus pellentesque pulvinar. Nunc sagittis lectus vitae efficitur fermentum. Sed non porta elit. Vivamus sed lacus in orci feugiat vehicula. Proin interdum libero quis mi porttitor, ac porta nunc efficitur. Phasellus neque erat, suscipit at luctus sed, egestas id diam. Cras aliquet consectetur turpis vel porttitor. ",
  "Vestibulum vitae nibh nibh. Maecenas pulvinar, nunc eu scelerisque auctor, lectus turpis suscipit nisi, a pharetra orci neque non augue. Fusce molestie dui ac tempus posuere. Duis tincidunt odio sed eros iaculis, nec cursus mi auctor. Nunc iaculis accumsan felis sed pretium. Quisque lacinia massa quam, at efficitur tellus consectetur id. Aenean eu sagittis libero. Ut non tortor bibendum lectus ultricies sodales. In finibus in urna eget cursus. Curabitur bibendum augue at sagittis consectetur. Nam tempor gravida metus. Curabitur et elit placerat, euismod orci in, ullamcorper quam. Vivamus commodo, orci vitae eleifend aliquet, enim libero scelerisque sapien, ac accumsan sapien purus eu nunc.",
  "Proin egestas justo sem, nec posuere mi commodo nec. Ut maximus porttitor arcu, et venenatis turpis rutrum ac. Donec a pretium tellus. Vestibulum suscipit lectus vel pharetra condimentum. Aenean condimentum bibendum nulla iaculis finibus. Aliquam laoreet eros vitae est sagittis aliquet. Nam tincidunt ut mauris vitae aliquam. Sed placerat tellus id tristique vulputate. Nullam venenatis mi nec velit dignissim finibus. Ut efficitur aliquet ipsum, ac laoreet elit bibendum vitae. Nullam tincidunt magna ac ante iaculis iaculis. In cursus turpis sed risus rutrum, eget rutrum nulla dictum. ",
  "Proin egestas justo sem, nec posuere mi commodo nec. Ut maximus porttitor arcu, et venenatis turpis rutrum ac. Donec a pretium tellus. Vestibulum suscipit lectus vel pharetra condimentum. Aenean condimentum bibendum nulla iaculis finibus. Aliquam laoreet eros vitae est sagittis aliquet. Nam tincidunt ut mauris vitae aliquam. Sed placerat tellus id tristique vulputate. Nullam venenatis mi nec velit dignissim finibus. Ut efficitur aliquet ipsum, ac laoreet elit bibendum vitae. Nullam tincidunt magna ac ante iaculis iaculis. In cursus turpis sed risus rutrum, eget rutrum nulla dictum. ",
  "Proin egestas justo sem, nec posuere mi commodo nec. Ut maximus porttitor arcu, et venenatis turpis rutrum ac. Donec a pretium tellus. Vestibulum suscipit lectus vel pharetra condimentum. Aenean condimentum bibendum nulla iaculis finibus. Aliquam laoreet eros vitae est sagittis aliquet. Nam tincidunt ut mauris vitae aliquam. Sed placerat tellus id tristique vulputate. Nullam venenatis mi nec velit dignissim finibus. Ut efficitur aliquet ipsum, ac laoreet elit bibendum vitae. Nullam tincidunt magna ac ante iaculis iaculis. In cursus turpis sed risus rutrum, eget rutrum nulla dictum.",
];

let p = document.querySelector("p");
let allP = document.querySelector(".allParagraphs");
let copy = document.querySelector(".copy");
let textCopy = document.querySelector(".textCopy");

generate.addEventListener("click", (e) => {
  allP.textContent = "";
  textCopy.innerHTML = "Copy";
  for (let i = 0; i < range.value; i++) {
    const p = document.createElement("p");
    let par = paragraphs[i];
    const newContent = document.createTextNode(par);
    p.appendChild(newContent);
    p.style.paddingTop = "2%";
    p.classList.remove("hide");
    allP.appendChild(p);
    allP.style.height = "15%";
    allP.style.overflowY = "scroll";
    allP.style.width = "100%";
  }
});

function toCopy() {
  let toCopy1 = allP.innerText;
  navigator.clipboard.writeText(toCopy1);
}

copy.addEventListener("click", function () {
  textCopy.innerHTML = "Copied!";
  toCopy();
});
