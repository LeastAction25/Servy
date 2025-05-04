import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SampleProjects.css"; // Import your custom CSS file

const sampleProjects = [
  {
    title: "Book App",
    description:
      "A smart and seamless app to explore, read, and organise your favourite books – anytime, anywhere..",
    imageUrl:
      "https://cdn.dribbble.com/userupload/28277525/file/original-bfbbc29b26102f1107b2282d38066029.gif",
    demoUrl: "https://book-appgd.netlify.app/",
  },
  {
    title: "Wild Lens Tourism",
    description:
      "Explore nature up close with Wild Lens Tourism – your gateway to the wild.",
    imageUrl:
      "https://i.pinimg.com/originals/df/0a/3e/df0a3e2ec30abb1c92d145ef165b714f.gif",
    demoUrl: "https://tubular-horse-ae26a5.netlify.app/home",
  },
  {
    title: "Counselling System",
    description:
      "An easy-to-use platform for booking confidential counselling sessions with qualified mental health professionals, anytime, anywhere",
    imageUrl: "https://svespsychologybvrm.in/images/Anim_Psychology.gif",
    demoUrl: "http://kaviyab-capstone-ft.netlify.app/login",
  },
  {
    title: "Tamil Letters Learning",
    description:
      "Learn Tamil letters – Uyir (vowels), Mei (consonants), and Uyirmei (combined letters) with pronunciation and simple examples.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/42464860/file/original-d356504cbdfc92d2738d3b9deadbdc5c.gif",
    demoUrl: "https://gdgiri.github.io/tamil-letters1/",
  },
  {
    title: "Tour Planning",
    description:
      "Plan your perfect trip with ease – customize destinations, set budgets, and manage your itinerary all in one place.",
    imageUrl: "https://img95.lovepik.com/photo/40107/3064.gif_wh860.gif",
    demoUrl: "https://capable-palmier-4f3501.netlify.app/",
  },
  {
    title: "Recipe App",
    description: "Find, cook, and save tasty recipes in one easy app.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/21599935/file/original-9b652c706eaa0e47ef9d833716315a8e.gif",
    demoUrl: "https://kitchen-whiz.netlify.app/",
  },
];

const SampleProjects = () => {
  const defaultCount = 3;
  const [visibleCount, setVisibleCount] = useState(defaultCount);

  useEffect(() => {
    const savedCount = localStorage.getItem("visibleCount");
    if (savedCount) {
      setVisibleCount(Number(savedCount));
    }
  }, []);

  const isAllVisible = visibleCount >= sampleProjects.length;

  const handleToggleProjects = () => {
    const newCount = isAllVisible ? defaultCount : sampleProjects.length;
    setVisibleCount(newCount);
    localStorage.setItem("visibleCount", newCount);
  };

  return (
    <div className="sample-container">
      <div className="container ">
        <h2 className="sample-heading">Our Projects</h2>
        <div className="row justify-content-center">
          {sampleProjects.slice(0, visibleCount).map((project, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 sample-card">
                <img
                  src={project.imageUrl}
                  className="card-img-top sample-img"
                  alt={project.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title sample-title fw-semibold">
                    {project.title}
                  </h5>
                  <p className="card-text sample-desc ">
                    {project.description}
                  </p>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-pill btn royal-btn mt-auto"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="rounded-pill btn royals-btn mt-4"
            onClick={handleToggleProjects}
          >
            {isAllVisible ? "Show Less" : "Load More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SampleProjects;
