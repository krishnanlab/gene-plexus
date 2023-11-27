import { useEffect, useState } from "react";
import type { Test } from "@/api/test";
import { test } from "@/api/test";
import Meta from "@/components/Meta";
import Section from "@/components/Section";
import classes from "./Home.module.css";

const Home = () => {
  const [data, setData] = useState<Test>();

  /** test api call */
  useEffect(() => {
    let latest = true;
    test().then((response) => {
      if (latest) setData(response);
    });
    return () => {
      latest = false;
    };
  }, []);

  return (
    <>
      <Meta title="Home" />

      <Section fill={true}>
        <p className={classes.hero}>
          GenePlexus enables researchers to predict novel genes similar to genes
          of interest based on their patterns of connectivity in human
          genome-scale networks.
        </p>
      </Section>

      <Section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis
          sed odio morbi quis commodo odio aenean sed. Urna cursus eget nunc
          scelerisque viverra mauris in aliquam. Elementum integer enim neque
          volutpat ac tincidunt vitae semper quis. Non diam phasellus vestibulum
          lorem sed risus. Amet luctus venenatis lectus magna. Vestibulum mattis
          ullamcorper velit sed ullamcorper morbi tincidunt. Turpis nunc eget
          lorem dolor sed viverra ipsum nunc aliquet. Ullamcorper dignissim cras
          tincidunt lobortis feugiat vivamus at augue. Blandit cursus risus at
          ultrices mi tempus. Odio aenean sed adipiscing diam donec. Ut pharetra
          sit amet aliquam. Amet cursus sit amet dictum sit amet justo donec.
          Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Nunc
          eget lorem dolor sed viverra ipsum nunc. Amet est placerat in egestas
          erat. Suscipit tellus mauris a diam maecenas sed. Egestas fringilla
          phasellus faucibus scelerisque eleifend donec. Mauris pharetra et
          ultrices neque ornare. Phasellus egestas tellus rutrum tellus
          pellentesque eu tincidunt tortor aliquam.
        </p>
      </Section>

      <Section>
        {!data && "Loading data"}
        {data?.map((item, index) => (
          <div key={index} style={{ opacity: item.id < 200 ? 1 : 0.5 }}>
            {item.name} ({item.id})
          </div>
        ))}
      </Section>
    </>
  );
};

export default Home;
