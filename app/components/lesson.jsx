import React from 'react';

function Lesson({ lesson }) {
  const { content, image, title } = lesson;
  return (
    <div className="c-lesson">
      <section className="o-container">
        <style jsx="true">
          {`
            .c-lesson {
                background-image: linear-gradient(to right, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.9)), url("${image.data.attributes.url}");
                background-size: cover;
                background-repeat: no-repeat;
            }
          `}
        </style>
        <div className="c-lesson__grid">
          <div className="c-lesson__content">
            <h2 className="c-heading">{title}</h2>
            <p className="c-lesson__text">{content}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Lesson;
