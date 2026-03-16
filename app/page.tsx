import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Profile */}
      <section className="flex flex-col sm:flex-row gap-8 items-start">
        <Image
          src="/Tenzer_pic.jpg"
          alt="Yaniv Tenzer"
          width={192}
          height={192}
          className="w-48 h-60 shrink-0 rounded-sm object-cover"
          priority
        />
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            In modern settings, ML models are highly complex, trained on partly labeled and even
            synthetic data and then deployed in dynamic environments, making inference on
            unstructured data. Unfortunately, this challenges the classical statistical inference
            tools and procedures to a large extent. Indeed, classical inference methods were not
            designed for this new landscape, and most often are not valid when deployed in such
            settings. To ensure that data driven conclusions are truly reliable in real-world
            settings, statistical tools need to be updated, and this requires substantial practical
            and theoretical development.
          </p>
          <p>
            My work is focused on the development of new learning algorithms that bridge the gap
            between the ability to generate predictions and the ability to ensure that these
            predictions are reliable and suitable for guiding real-world decisions.
          </p>
          <div className="space-y-2">
            <p className="font-semibold text-gray-900">My current research interests include:</p>
            <p>
              <span className="font-medium text-gray-900">Statistical Inference:</span> advancing
              techniques in machine learning and statistical inference to make new, replicable
              data-driven discoveries.
            </p>
            <p>
              <span className="font-medium text-gray-900">Robustness:</span> developing principled
              strategies to measure, monitor, and adapt to train–test mismatch, aiming to maintain
              reliability when deployment conditions differ from training.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-gray-900">Other topics I&apos;ve worked on are:</p>
            <p>
              <span className="font-medium text-gray-900">Probabilistic Graphical Models:</span>{" "}
              representation of high-dimensional distributions, and inference using Markov and
              Bayesian Networks.
            </p>
            <p>
              <span className="font-medium text-gray-900">Dependence-Structure modeling:</span> part
              of my early work has been focused on the copula construction. Together with my PhD
              advisor, Prof. Gal Elidan, we introduced the Copula-Bayesian-Network construction that
              allows flexible modeling of high-dimensional distribution. I was also lucky to make
              some contribution to the theory of copula construction.
            </p>
          </div>
        </div>
      </section>


    </div>
  );
}
