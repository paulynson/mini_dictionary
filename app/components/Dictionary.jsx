import React, { Suspense } from "react";

const Dictionary = ({ search, results, noSearchResult, loading }) => {
  return (
    <div className="my-0 mx-auto">
      <Suspense fallback={<p>Loading feed...</p>}>
        {loading && <p className="animate-bounce">Loading result...</p>}{" "}
      </Suspense>
      {/* Results */}
      <div className="my-4">
        {Object.keys(results).length > 0 ? (
          <>
            {results.map((result) => (
              <div key={result.id}>
                <div className="py-3">
                  <div className="flex items-center gap-2">
                    <p className="text-3xl font-bold first-letter:uppercase">
                      {" "}
                      {result.word}
                    </p>
                    <p>{result.phonetic}</p>
                  </div>
                  <p>
                    {result.phonetics.map((phonne) => (
                      <div className="my-2">
                        <audio
                          controls
                          src={phonne.audio}
                          className="sm:min-w-[80px]"
                        ></audio>
                      </div>
                    ))}
                  </p>
                </div>
                <hr />
                {/* Meaning */}
                <div>
                  <p>
                    {result.meanings.map((meaning) => (
                      <div>
                        <p className="font-bold first-letter:uppercase my-2">
                          {meaning.partOfSpeech}
                        </p>
                        <div className="mb-3">
                          {meaning.definitions.map((definition) => (
                            <div>
                              <p className="mb-2 list-item ml-6">
                                {definition.definition}
                              </p>

                              {/* Examples */}
                              <div className=" ">
                                <span className="ml-2 text-slate-500 italic text-sm">
                                  {definition.example}
                                </span>
                              </div>
                              <hr className="px-6" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </>
        ) : (
          noSearchResult && (
            <>
              <div>
                No results found for{" "}
                <span className="font-bold">{`${search}`}</span>{" "}
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Dictionary;
