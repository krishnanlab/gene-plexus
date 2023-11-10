import Heading from "@/components/Heading";
import Meta from "@/components/Meta";
import Section from "@/components/Section";
import classes from "./Home.module.css";

function Home() {
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
        <Heading level={1}>Heading 1</Heading>

        <Heading level={2}>Heading 2</Heading>
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
        <Heading level={3}>Heading 3</Heading>
        <p>
          <a href="#test">Ut enim blandit</a> volutpat maecenas volutpat blandit
          aliquam etiam. Volutpat est velit egestas dui id ornare arcu odio.
          Fringilla phasellus faucibus scelerisque eleifend. Mattis enim ut
          tellus elementum. Fames ac turpis egestas sed tempus urna et pharetra
          pharetra. Ac feugiat sed lectus vestibulum mattis. Cras adipiscing
          enim eu turpis egestas. Enim nunc faucibus a pellentesque. Potenti
          nullam ac tortor vitae purus faucibus ornare suspendisse. Suspendisse
          sed nisi lacus sed viverra tellus. Erat nam at lectus urna duis
          convallis convallis. Eu non diam phasellus vestibulum. Egestas purus
          viverra accumsan in. At volutpat diam ut venenatis. Volutpat blandit
          aliquam etiam erat velit. Magnis dis parturient montes nascetur
          ridiculus. Curabitur vitae nunc sed velit dignissim sodales.
        </p>
        <Heading level={4}>Heading 4</Heading>
        <p>
          Diam donec adipiscing tristique risus nec. Venenatis cras sed felis
          eget velit aliquet sagittis id. Diam sit amet nisl suscipit adipiscing
          bibendum est ultricies integer. Egestas sed tempus urna et pharetra.
          Habitasse platea dictumst quisque sagittis purus sit amet. Mi eget
          mauris pharetra et ultrices. Facilisis sed odio morbi quis. Fermentum
          et sollicitudin ac orci phasellus egestas tellus. Netus et malesuada
          fames ac. Morbi tincidunt augue interdum velit euismod in pellentesque
          massa. Libero justo laoreet sit amet cursus sit amet dictum. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a. Tempor commodo
          ullamcorper a lacus vestibulum sed arcu non odio. Donec massa sapien
          faucibus et molestie ac feugiat. A cras semper auctor neque vitae
          tempus quam pellentesque. Pellentesque diam volutpat commodo sed
          egestas egestas fringilla phasellus. Ac turpis egestas sed tempus
          urna.
        </p>
      </Section>
    </>
  );
}

export default Home;
