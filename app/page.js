"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import thumbnail from "../public/Assets/Images/thumbnail.png";
import Image from "next/image";
import Modal from "./components/Modal/Modal";
function App() {
  const [OpenVideoModal, setOpenVideoModal] = useState(false);
  const [currentAmbassadorVideo, setCurrentAmbassadorVideo] = useState("");
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    OpenVideoModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [OpenVideoModal]);
  const ambassadorArr = [
    {
      name: "Eneko Atxa",
      desc: "3 Michelin Stars",
      poster:
        "https://spaincollection.com/wp-content/uploads/2020/10/caratula_eneko.jpg",
      src: "https://spaincollection.com/wp-content/uploads/2020/10/eneko_atxa.mp4",
    },
    {
      name: "Pedro Subijana",
      desc: "3 Michelin Stars",
      poster:
        "https://spaincollection.com/wp-content/uploads/2020/10/caratula_pedro.jpg",
      src: "https://spaincollection.com/wp-content/uploads/2020/10/Akelarre-1.mp4",
    },
    {
      name: "Germán Jiménez",
      desc: "Journalist specialized in Fashion & Lifestyle",
      poster:
        "https://spaincollection.com/wp-content/uploads/2020/12/caratula_german.jpg",
      src: "https://spaincollection.com/wp-content/uploads/2020/12/German-gimenez.mp4",
    },
  ];

  const whyArr = [
    {
      desc: "Because our passion is people, travel and our country, it’s what makes us get out of bed in the morning.",
      src: "https://spaincollection.com/wp-content/uploads/2020/10/modulo_Why_11.jpg",
    },
    {
      desc: "Because nothing is more fulfilling than creating something from scratch and seeing it come to life.",
      src: "https://spaincollection.com/wp-content/uploads/2020/10/Capa-1.jpg",
    },
    {
      desc: "Because of that blissful moment, after months of planning, when your clients thank you for giving them have the time of their lives.",
      src: "https://spaincollection.com/wp-content/uploads/2020/11/Capa-3.jpg",
    },
  ];

  const discoverArr = [
    {
      header: "Food & Wine IN Barcelona",
      subheader: "Michelin Stars Galore",
      desc: "Catalonia has some of the best restaurants in the world. Here is where the whole concept of cuisine was transformed, where the first laboratory of modern cuisine was created.",
      src: "https://spaincollection.com/wp-content/uploads/2020/10/01-278.jpg",
    },
    {
      header: "Fashion & Shopping IN Andalusia",
      subheader: "Flamenco Fashion",
      desc: "The world of Flamenco is so rich that it not only encompasses dancing, music and art, but it also has a huge influence on Spanish fashion. Experience for yourself how a flamenco dress is not simply something you ‘wear’, it is about posture, the way you move and the way you feel.",
      src: "https://spaincollection.com/wp-content/uploads/2020/10/01-91.jpg",
    },
    {
      header: "Culture  IN Barcelona",
      subheader:
        "Gaudi, the genius of Modernist architecture, was a revolutionary Catalan artist who incorporated nature’s geometry into wondrous shapes and buildings known and admired today across the world.",
      src: "https://spaincollection.com/wp-content/uploads/2020/10/01-303.jpg",
    },
    {
      header: "Sports in portugal",
      subheader: "Snorkeling with Seahorses",
      desc: "The waterways and lagoons of the Ria Formosa Natural Park are a delight in themselves but let’s also discover the underwater world of the Algarve, and the area’s fascinating seahorse population.",
      src: "https://spaincollection.com/wp-content/uploads/2020/10/01-466.jpg",
    },
    {
      header: "culture in madrid",
      subheader: "Cervantes, A Timeless Literary Journey",
      desc: "Cervantes and his Don Quixote are arguably as universal as characters can get. No other fictional character has been so notorious and influential as the man from La Mancha.",
      src: "https://spaincollection.com/wp-content/uploads/2020/10/01-182.jpg",
    },
    {
      header: "traditions in madrid",
      subheader: "ceramics of talavera",
      desc: "Talavera is home to communities of artisans who make ceramics for decorative and architectural use. The most significant aspect of their work, however, is that most of their manufacturing, decoration and glazing processes have remained unchanged since the 16th century.",
      src: "https://spaincollection.com/wp-content/uploads/2020/10/009-scaled.jpg",
    },
    {
      header: "sports in madrid",
      subheader: "A real madrid experience",
      desc: "Football is an obsession for the Spanish and seeing Real Madrid in action tops the must-see list for any sports aficionado visiting the capital of Spain.",
      src: "https://spaincollection.com/wp-content/uploads/2020/10/01-213.jpg",
    },
    {
      header: "fashion & shopping in andalusia",
      subheader: "flamenco catwalk",
      desc: "The catwalk is where fashion comes alive. Be a model for a day and lose yourself in the backstage world of nerves and frenetic preparations before stepping out into the spotlights and onto the catwalk.",
      src: "https://spaincollection.com/wp-content/uploads/2020/10/01-96.jpg",
    },
  ];

  function LandingPageScrollTrigger() {
    gsap.to("body", {
      opacity: 1,
      duration: 5,
    });

    let LandingPageScrollTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: "#ImgWrapper",
        start: "0% 0%",
        end: "500% 0%",
        pin: "#ImgWrapper",
        scrub: 2.2,
        // markers: true,
      },
    });
    LandingPageScrollTrigger.to(
      "#ImgWrapper #img7",
      { transform: "translateZ(4500px)" },
      0
    )
      .to("#ImgWrapper #img6", { transform: "translateZ(3700px)" }, 0)
      .to(
        "#ImgWrapper #img5",
        {
          transform: "translateZ(1590px)",
          left: "34%",
          bottom: "36%",
          width: "30vw",
          height: "28vh",
        },
        0
      )
      .to("#ImgWrapper #img4", { transform: "translateZ(2800px)" }, 0)
      .to("#ImgWrapper #img3", { transform: "translateZ(2600px)" }, 0)
      .to("#ImgWrapper #img2", { transform: "translateZ(2400px)" }, 0)
      .to("#ImgWrapper #img1", { transform: "translateZ(2200px)" }, 0)
      .from("#end div", { y: 130, opacity: 0, backgroundColor: "#000" }, 0.31);
  }

  window.onload = () => {
    !OpenVideoModal && LandingPageScrollTrigger();
    gsap.to("#ambassadors_wrapper", {
      backgroundColor: "#fff",
      scrollTrigger: {
        trigger: "#ambassadors_wrapper",
        start: "0% 0%",
        end: "60% 0%",
        // markers: true,
        scrub: true,
      },
    });

    gsap.to("#why_cards0", {
      y: -500,
      scrollTrigger: {
        trigger: "#why_cards0",
        start: "-80% 0%",
        end: "80% 0%",
        markers: true,
        scrub: 2.2,
      },
    });
    gsap.to("#why_cards1", {
      y: -500,
      scrollTrigger: {
        trigger: "#why_cards1",
        start: "-40% 0%",
        end: "80% 0%",
        markers: true,
        scrub: 2.2,
      },
    });
    gsap.to("#why_cards2", {
      y: -500,
      scrollTrigger: {
        trigger: "#why_cards2",
        start: "-80% 0%",
        end: "80% 0%",
        markers: true,
        scrub: 2.2,
      },
    });

    gsap.set(".marquee__line", { x: "0%" });

    const mq = document.querySelectorAll(".marquee__line");

    mq.forEach((el, index) => {
      const tl = gsap.timeline({});
      const tween = gsap.to(el, {
        x: index % 2 === 0 ? `+=30%` : `-=30%`,
        repeat: -1,
        duration: 20,
        ease: "linear",
        // scrollTrigger: {
        //   start: 0,
        //   end: 'max',
        //   markers: true,
        //   onUpdate: () => {
        //     tl.timeScale(2);
        //     tween.invalidate().restart();
        //   },
        // },
      });
    });
  };

  function submit(e) {
    const data = {};

    e.preventDefault();

    let id = document.querySelectorAll("input");
    id.forEach((userItem) => {
      let name = userItem.name.split(".");
      console.log(name[1]);
      if (name[1] !== undefined) {
        if (name[2] !== undefined) {
          console.log("2");
          data[name[0]] = {
            [name[1]]: {
              [name[2]]: userItem.value,
            },
          };
        } else if (name[2] !== undefined) {
          console.log(name[1], "1");
          data[name[0]] = {
            [name[1]]: userItem.value,
          };
        }
      } else {
        data[name[0]] = userItem.value;
      }
    });
    let output = {
      foo: {
        bat: "val", //Actual value of 1st text box
        bar: {
          baz: "val", // Value of 2nd text box
        },
      },
      fizz: "val", // Value of 3rd text box
    };
    console.log(data);
    console.log(output);
  }

  const playVideo = (videoId) => {
    var video = document.getElementById("video_player");
    var play_btn = document.getElementById("play_btn");
    video.play();
    video.controls = true;
    play_btn.style.display = "none";
    console.log(video.pause());
  };

  return (
    <div className="main_page_wrapper">
      {/* <form id="parent" ref={inputRef} onSubmit={submit}>
        <input
          id={"p"}
          type="text"
          name="foo.bat"
          onChange={(e) => console.log(e.target.value)}
        />
        <input
          id={"p"}
          type="text"
          name="foo.bar.baz"
          onChange={(e) => console.log(e.target.value)}
        />
        <input
          id={"p"}
          type="text"
          name="fizz"
          onChange={(e) => console.log(e.target.value)}
        />
        <button className="submit_btn" type="submit" value="Send">
          submit
        </button>
      </form> */}
      <div className="main_page_desc">
        <p className="desc_">
          Spain Collection is your expert partner for deluxe bespoke travel
          experiences in
        </p>
        <p className="country_">Spain & portugal</p>
      </div>
      <div id="ImgWrapper">
        <video
          // controls
          autoPlay
          preload="none"
          muted="muted"
          playsInline
          loop
          style={{ objectFit: "cover" }}
          src={
            "https://spaincollection.com/wp-content/uploads/2020/10/Bg_Home.mp4#t=00,02"
          }
          id="img1"
          alt="greensocklogo"
        />
        <video
          // controls
          autoPlay
          preload="none"
          muted="muted"
          playsInline
          loop
          style={{ objectFit: "cover" }}
          src={
            "https://spaincollection.com/wp-content/uploads/2020/10/Bg_Home.mp4#t=03,04"
          }
          id="img2"
          alt="greensocklogo"
        />
        <video
          // controls
          autoPlay
          // preload="none"
          muted="muted"
          // playsInline
          loop
          style={{ objectFit: "cover" }}
          src={
            "https://spaincollection.com/wp-content/uploads/2020/10/Bg_Home.mp4#t=06,09"
          }
          id="img3"
          alt="greensocklogo"
        />
        <video
          // controls
          autoPlay
          preload="none"
          muted="muted"
          playsInline
          loop
          style={{ objectFit: "cover" }}
          src={
            "https://spaincollection.com/wp-content/uploads/2020/10/Bg_Home.mp4#t=08,10"
          }
          id="img4"
          alt="greensocklogo"
        />
        <video
          // controls
          autoPlay
          preload="none"
          muted="muted"
          playsInline
          loop
          style={{ objectFit: "cover" }}
          src={
            "https://spaincollection.com/wp-content/uploads/2020/10/Bg_Home.mp4"
          }
          id="img5"
          alt="greensocklogo"
        />
        <video
          // controls
          autoPlay
          preload="none"
          muted="muted"
          playsInline
          loop
          style={{ objectFit: "cover" }}
          src={
            "https://spaincollection.com/wp-content/uploads/2020/10/Bg_Home.mp4#t=01,03"
          }
          id="img6"
          alt="greensocklogo"
        />
        <video
          // controls
          autoPlay
          preload="none"
          muted="muted"
          playsInline
          loop
          style={{ objectFit: "cover" }}
          src={
            "https://spaincollection.com/wp-content/uploads/2020/10/Bg_Home.mp4#t=05,07"
          }
          id="img7"
          alt="greensocklogo"
        />
        {/* <div className="video_player_wrapper" id="end">
          <div>
            <span>End</span>
          </div>
        </div> */}
      </div>
      <div className="about_us_wrapper">
        <p className="about_">about us</p>
        <video
          poster="https://stop.es/wp-content/uploads/2017/10/stop-staff-abene-mendizabal.png"
          className="video_"
          preload="none"
          muted="muted"
          playsInline
          id="video_player"
          src="https://spaincollection.com/wp-content/uploads/2020/11/Abene_Home.mp4"
        />
        <img
          id="play_btn"
          className="play_btn"
          src="https://spaincollection.com/wp-content/themes/spaincollection/img/player.svg"
          onClick={() => {
            console.log("click");
            playVideo();
          }}
        />
        <p className="name">Abene Mendizabal</p>
        <p className="role">Founder & CEO Spain Collection</p>
      </div>
      <div id="ambassadors_wrapper" className="ambassadors_wrapper">
        <p className="ambassaodors_">ambassaodors</p>
        <div className="ambassadors_video_wrapper">
          {ambassadorArr.map((item) => {
            return (
              <div className="card_">
                <video poster={item.poster} src={item.src} />
                <img
                  id="play_btn"
                  className="play_btn"
                  src="https://spaincollection.com/wp-content/themes/spaincollection/img/player.svg"
                  onClick={() => {
                    console.log("click");
                    setOpenVideoModal(true);
                    setCurrentAmbassadorVideo(item.src);
                  }}
                />
                <p className="name">{item.name}</p>
                <p className="role">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div id="why" className="why_wrapper">
        <p className="why_tag">why CHOOSE SPAIN COLLEC-TION?</p>
        <div className="why_images">
          {whyArr.map((item, index) => {
            return (
              <div id={"why_cards" + index} className="card_">
                <img className="card_images" src={item.src} />
                <p className="num_">{"0" + (index + 1) + "/"}</p>
                <p className="desc_">{item.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="marquee-wrapper">
          <p className="marquee__line" style={{ top: "0%" }}>
            {[
              "Madrid",
              "Barcelona",
              "Lisbon",
              "Porto",
              "Valencia",
              "Algarve",
            ].map((item) => {
              return <p className="marquee__item">{item}</p>;
            })}
          </p>
          <p className="marquee__line" style={{ bottom: "30%" }}>
            {[
              "Culture",
              "Food&Wine",
              "Shopping",
              "Fashion",
              "Sports",
              "Traditions",
            ].map((item) => {
              return <p className="marquee__item">{item}</p>;
            })}
          </p>
        </div>
      </div>
      <div className="discover_wrapper">
        <p className="discover_sent">
          Discover the luxury of travelling with us
        </p>
        <div className="discover_slider">
          {discoverArr.map((item) => {
            return (
              <div className="slider_card">
                <p className="header_">{item.header}</p>
                <p className="subheader_">{item.subheader}</p>
                <p className="desc_">{item.desc}</p>
                <img className="image_" src={item.src} />
              </div>
            );
          })}
        </div>
      </div>
      <div>

      </div>

      {OpenVideoModal && (
        <Modal
          className={"ambassador_video_modal"}
          onClose={() => setOpenVideoModal(false)}
        >
          <video
            className="video_"
            controls
            autoPlay
            playsInline
            style={{ objectFit: "cover" }}
            src={currentAmbassadorVideo}
          />
        </Modal>
      )}
    </div>
  );
}
export default App;
