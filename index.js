let boxshadowvalues=[];

function shadowValues(num)
{
    for(let i=0;i<num;i++)
    {
        let x=Math.floor(Math.random() * 2000);
        let y=Math.floor(Math.random() * 2000);
        let c="white"
        let addvalue=x+"px "+y+"px "+c+",";
        boxshadowvalues.push(addvalue)
    }
}
shadowValues(200)
for (let i = 0; i < boxshadowvalues.length; i++) {
    // console.log(boxshadowvalues[i]);
  }

    let barIcon = document.querySelector(".icon");
    let header = document.querySelector("header");
    let crossIcon = document.querySelector(".cross");
    let sideBar = document.querySelector(".sidebar");
    let body=document.querySelector("body")

    function handleResize() {
        if (window.innerWidth >= 992) {
        sideBar.style.display="none"
        barIcon.style.display="none"
        crossIcon.style.display = "none";

        } else {
            barIcon.style.display="block"
            sideBar.style.display = "block";
        }
    }

    barIcon.addEventListener("click", () => {
        header.style.opacity = "0.6";
        barIcon.style.display = "none";
        crossIcon.style.display = "block";
        crossIcon.style.zIndex = "1051";
        sideBar.style.right = "-15%";
        body.style.overflow="hidden"
    });

    crossIcon.addEventListener("click", () => {
        header.style.opacity = "1";
        barIcon.style.display = "block";
        crossIcon.style.display = "none";
        sideBar.style.right = "-90%";
        body.style.overflow="auto"

    });

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);


 