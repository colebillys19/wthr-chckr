import { CSSProperties, useEffect, useState } from "react";

import { HomeSectionContainer } from "../../SharedComponentsAux";

const parseXmlData = (data: any) => {
  const rssElement = data.documentElement;
  // const contentNamespace = rssElement.getAttributeNS(
  //   "http://www.w3.org/2000/xmlns/",
  //   "content"
  // );
  const mediaNamespace = rssElement.getAttributeNS(
    "http://www.w3.org/2000/xmlns/",
    "media"
  );
  const items = Array.from(data.querySelectorAll("item"));
  return items.slice(0, 5).map((item: any) => {
    // const contentEncoded = item.getElementsByTagNameNS(
    //   contentNamespace,
    //   "encoded"
    // );
    // const contentEncodedTextContent = contentEncoded[0]?.textContent;
    const mediaContent = item.getElementsByTagNameNS(mediaNamespace, "content");
    const imgUrl = mediaContent[0]?.getAttribute("url");
    const imgType = mediaContent[0]?.getAttribute("type");
    const categoriesXmlArr = Array.from(item.querySelectorAll("category"));
    const categoriesArr: string[] = [];
    categoriesXmlArr.forEach((catEl: any) => {
      if (catEl) {
        const catStr = catEl.textContent;
        if (catStr.slice(0, 12) === "fox-weather/") {
          categoriesArr.push(catStr.slice(12));
        }
      }
    });
    return {
      title: item.querySelector("title")?.textContent,
      date: item.querySelector("pubDate")?.textContent,
      link: item.querySelector("link")?.textContent,
      // contentEncodedTextContent,
      imgUrl,
      isGif: imgType === "image/gif",
      description: item.querySelector("description")?.textContent,
      categories: categoriesArr,
    };
  });
};

const tempStylesA: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  rowGap: "12px",
};

// const tempStylesB: CSSProperties = {
//   display: 'inline-block',
//   // width: 'auto',
//   height: '144px',
//   outline: '1px solid purple',
//   backgroundAttachment: 'fixed',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
// };

const tempStylesB: CSSProperties = {
  display: "relative",
  height: "144px",
};

const tempStylesC: CSSProperties = {
  display: "absolute",
  top: "0",
  left: "0",
  width: "auto",
  height: "144px",
};

function HomeNews() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://moxie.foxweather.com/google-publisher/latest.xml")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Issue fetching Fox Weather RSS.");
        }
        return response.text();
      })
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((data: any) => {
        setData(parseXmlData(data));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!!error) {
    return (
      <HomeSectionContainer>
        <h3>news</h3>
        <div className="spacer" />
        <div>{error}</div>
      </HomeSectionContainer>
    );
  }

  if (isLoading) {
    return (
      <HomeSectionContainer>
        <h3>news</h3>
        <div className="spacer" />
        <div>loading</div>
      </HomeSectionContainer>
    );
  }

  if (data.length === 0) {
    return (
      <HomeSectionContainer>
        <h3>news</h3>
        <div className="spacer" />
        <div>no data</div>
      </HomeSectionContainer>
    );
  }

  return (
    <HomeSectionContainer>
      <h3>news</h3>
      <div className="spacer" />
      <ul style={tempStylesA}>
        {data.map((item) => (
          <li key={item.title}>
            <div style={tempStylesB}>
              <img
                src={item.imgUrl}
                alt={item.title.slice(0, 20)}
                style={tempStylesC}
              />
            </div>
            <h4>
              <b>{item.title}</b>
            </h4>
            <span>{item.date}</span>
            <p>{item.description}</p>
            <a href={item.link} target="_blank">
              Visit
            </a>
          </li>
        ))}
      </ul>
    </HomeSectionContainer>
  );
}

export default HomeNews;

/*

title: "Bright fireball seen over Berlin was rare Aubrite asteroid, astronomers say",
link: "https://www.foxweather.com/earth-space/fireball-berlin-rare-aubrite-asteroid",
contentEncodedTextContent: '<p><strong>BERLIN</strong> – Scientists tracked down pieces of the bright asteroid seen streaking across the <a href="https://www.foxweather.com/category/europe" target="_blank">Berlin</a> sky in January and said it’s not just any space rock but a rare class known as an Aubrite.</p><p>On Jan. 21, astronomers closely tracked and photographed the asteroid as it lit up the sky west of Berlin near the city of Rathenow.</p><p>According to the <a href="https://www.seti.org/press-release/asteroid-impacted-near-berlin-identified-rare-aubrite" target="_blank">SETI Institute</a>, astronomers tracked pieces of the small asteroid 2024 BX1 and <a href="https://www.foxweather.com/earth-space/asteroid-germany-forecasted" target="_blank">predicted the impact on Earth’s atmosphere</a> using NASA’s Scout and ESA’s Meerkat Asteroid Guard impact hazard assessment systems. </p><p><a href="https://www.foxweather.com/earth-space/asteroid-germany-forecasted" target="_blank"><strong>WATCH: FIREBALL LIGHTS UP BERLIN SKY</strong></a></p><p><a href="https://www.foxweather.com/category/nasa" target="_blank">NASA</a> said its <a href="https://cneos.jpl.nasa.gov/scout/intro.html" target="_blank">Scout system</a> detected the 3-foot wide asteroid about 95 minutes before it harmlessly broke up over Germany, producing a fireball seen as far away as the Czech Republic. The asteroid was first detected by an observatory in Hungary three hours before impact. </p><p>NASA Jet Propulsion Scientist Davide Farnocchia provided trajectory updates, helping astronomers track the asteroid as it zoomed across the sky in Germany.</p><p>According to the Museum für Naturkunde in Berlin, this was only the eighth guided recovery of an asteroid impact leading to the recovery of pieces of meteorite. Four, including this latest find, were made by SETI Institute meteor astronomer Peter Jenniskens, who made previous recoveries in Sudan in 2008, Botswana in 2018 and France in 2023. Jenniskens flew from <a href="https://www.foxweather.com/category/california" target="_blank">California</a> to Germany to be part of the search for the Berlin fireball.</p><p>After the meteor impact, the hunt was on. Using the trajectory directions and calculating where strong <a href="https://www.foxweather.com/category/wind" target="_blank">winds</a> blew the meteorites, the team began scouring the fields south of the village of Ribbeck, Germany. </p><p>An international team of astronomers and students from universities and research organizations, including SETI, participated in the search. However, unlike many other meteors, which have a thin crust of black glass, making them easier to spot, Aubrites have translucent glass, making them look more like gray granite.</p><p><a href="https://www.foxweather.com/earth-space/see-asteroid-sample-bennu-nasa-osiris-rex" target="_blank"><strong>SEE THE ASTEROID SAMPLE A NASA SPACECRAFT TOOK 7 YEARS TO BRING BACK TO EARTH</strong></a></p><p>"They were devilishly difficult to find because, from a distance, they look like other rocks on Earth," Jenniskens said. "Close up, not so much."</p><p>A team from Poland made the first meteorite find, and after that, the rest of the search party knew what to look for, according to Jenniskens. More than 20 meteorite samples were collected over the past few days.</p><p>SETI and the <a href="https://www.museumfuernaturkunde.berlin/en/press/press-releases/meteor-near-berlin-classified-extremely-rare-aubrite-type-meteorite" target="_blank">Museum für Naturkunde</a> announced Monday that after examining one of the asteroid pieces with an electron beam microprobe, they have determined it contains the chemical composition and mineralogy of an Aubrite-type asteroid. </p><p>"Aubrites do not look like what people generally imagine meteorites to look like. Aubrites look more like a gray granite and consist mainly of the magnesium silicates enstatite and forsterite," said Christopher Hamann from the Museum für Naturkunde. "It contains hardly any iron, and the glassy crust, which is usually a good way to recognize meteorites, looks completely different than that of most other meteorites. Aubrites are therefore difficult to detect in the field."</p><p><a href="https://www.foxweather.com/earth-space/everything-scientists-would-want-to-know-if-an-asteroid-was-heading-toward-earth" target="_blank"><strong>EVERYTHING SCIENTISTS WOULD WANT TO KNOW IF AN ASTEROID WAS HEADING TOWARD EARTH</strong></a></p><p>Aubrite asteroids are named after the French village of Aubrés, where this type of meteorite was first recovered in 1836.</p><p>According to Ansgar Greshake, Ph.D., scientific head of Museum für Naturkunde’s meteorite collection, only eleven other pieces of this type of meteorite are part of collections worldwide.</p><p>The International Nomenclature Commission of the Meteoritical Society is reviewing the findings for official confirmation of the Aubrite.</p>',
mediaContentUrl: "https://static.foxweather.com/www.foxweather.com/content/uploads/2024/02/Meteoritenfund-im-Havelland-c-Cevin-Dettlaff-3.png",
description: "Scientists tracked down pieces of the bright asteroid seen streaking across the Berlin sky in January and say it’s not just any space rock, but a rare class known as an Aubrite.",
categories: [
  "earth-space/astronomy",
  "earth-space/nasa",
  "weather-news/world/world-regions/europe",
  "earth-space",
],

*/
