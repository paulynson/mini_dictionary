import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="my-6">
      <p>
        API Credit:{" "}
        <Link href="https://dictionaryapi.dev" className="text-sm font-bold">
          https://dictionaryapi.dev
        </Link>
      </p>

      <p className="my-4">
        The idea of the program is to get word definitions from dictionary, with
        the sound and the meanings
      </p>
    </div>
  );
};

export default AboutPage;
