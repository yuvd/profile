AOS.init();

const panels = document.querySelectorAll('.panel');
const navItems = document.querySelectorAll('.nav-item');

const changeNavbarActiveItem = () => {
  let fromTop = window.scrollY
  navItems.forEach (link => {
    let section = document.querySelector(link.children[0].hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }  
    });
};
  
window.addEventListener("scroll", changeNavbarActiveItem);



const cl = new cloudinary.Cloudinary({cloud_name: "yuvd", secure: true});
const projectVids = document.querySelectorAll('video')

projectVids.forEach(video => {
  video.addEventListener('mouseover', autoPlay = () =>
  {
    video.play();
    video.parentElement.setAttribute("style", "color: white;")
    vidCardSelector = "#" + video.parentElement.id;
    vidAtTimestampUrl = video.currentSrc.substring(0,(video.currentSrc.indexOf('upload/') + 7)) + "so_" + Math.round(video.currentTime) + "/" + video.currentSrc.substring(video.currentSrc.indexOf('upload/') + 7);
    videoBg = new vidbg(vidCardSelector, {
      mp4: vidAtTimestampUrl,
      overlay: true,
      overlayColor: '#000',
      overlayAlpha: 0.8
    });
  });

  video.addEventListener('mouseleave', autoPause = () => {
    video.pause();
    video.parentElement.setAttribute("style", "background-color: white; color: black;")
  });
});

  