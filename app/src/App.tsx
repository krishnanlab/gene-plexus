import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import "modern-normalize/modern-normalize.css";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Section fill={true}>
          <p>
            Et tortor at <a href="">risus</a> viverra adipiscing. Urna nec
            tincidunt praesent semper feugiat nibh sed pulvinar.
          </p>
        </Section>

        <Section>
          <h2>Heading 2</h2>

          <h3>Heading 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Facilisis sed odio morbi quis commodo odio aenean sed. Urna cursus
            eget nunc scelerisque viverra mauris in aliquam. Elementum integer
            enim neque volutpat ac tincidunt vitae semper quis. Non diam
            phasellus vestibulum lorem sed risus. Amet luctus venenatis lectus
            magna. Vestibulum mattis ullamcorper velit sed ullamcorper morbi
            tincidunt. Turpis nunc eget lorem dolor sed viverra ipsum nunc
            aliquet. Ullamcorper dignissim cras tincidunt lobortis feugiat
            vivamus at augue. Blandit cursus risus at ultrices mi tempus. Odio
            aenean sed adipiscing diam donec. Ut pharetra sit amet aliquam. Amet
            cursus sit amet dictum sit amet justo donec. Porttitor massa id
            neque aliquam vestibulum morbi blandit cursus. Nunc eget lorem dolor
            sed viverra ipsum nunc. Amet est placerat in egestas erat. Suscipit
            tellus mauris a diam maecenas sed. Egestas fringilla phasellus
            faucibus scelerisque eleifend donec. Mauris pharetra et ultrices
            neque ornare. Phasellus egestas tellus rutrum tellus pellentesque eu
            tincidunt tortor aliquam.
          </p>
        </Section>

        <Section>
          <h4>Heading 4</h4>
          <p>
            <a href="">Ut enim blandit</a> volutpat maecenas volutpat blandit
            aliquam etiam. Volutpat est velit egestas dui id ornare arcu odio.
            Fringilla phasellus faucibus scelerisque eleifend. Mattis enim ut
            tellus elementum. Fames ac turpis egestas sed tempus urna et
            pharetra pharetra. Ac feugiat sed lectus vestibulum mattis. Cras
            adipiscing enim eu turpis egestas. Enim nunc faucibus a
            pellentesque. Potenti nullam ac tortor vitae purus faucibus ornare
            suspendisse. Suspendisse sed nisi lacus sed viverra tellus. Erat nam
            at lectus urna duis convallis convallis. Eu non diam phasellus
            vestibulum. Egestas purus viverra accumsan in. At volutpat diam ut
            venenatis. Volutpat blandit aliquam etiam erat velit. Magnis dis
            parturient montes nascetur ridiculus. Curabitur vitae nunc sed velit
            dignissim sodales.
          </p>
        </Section>

        <Section>
          <ul>
            <li>
              Ac tincidunt vitae semper quis lectus nulla at volutpat diam.
            </li>
            <li>Morbi quis commodo odio aenean sed adipiscing diam.</li>
            <li>
              <code>Vitae semper quis</code> lectus nulla at volutpat diam ut
              venenatis.
            </li>
          </ul>
          <pre>
            <code>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
              <br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </code>
          </pre>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;
