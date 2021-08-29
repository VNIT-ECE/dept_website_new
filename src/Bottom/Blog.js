export default function Blog(){
    return (
        <section id="blog">
        <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20 ">
                <div className="mx-auto text-center mt-20 mb-10">
                    <div className="text-3xl sm:text-5xl font-bold text-black">Quick Links</div>
                    <p className="sm:text-lg text-black font-normal mt-5 px-16">Get important books, notes, youtube channel, assignment and  syllabus at one place.</p>
                </div>
                <div className="grid gap-5 mb-8 lg:grid-cols-3 sm:p-10 rounded-3xl w-full bg-gradient-to-r from-teal-300 via-teal-accent-600 to-teal-accent-400">
                <div className="px-10 m-5 rounded-3xl bg-white py-20 text-center rounded lg:px-5 lg:py-10 xl:py-10 shadow-xl hover:shadow-2xl">
                    <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                        GUIDE
                    </p>
                    <p
                        className="inline-block max-w-xs mx-auto mb-3 text-xl sm:text-2xl font-extrabold leading-7"
                        aria-label="Read article"
                            title="Software Installation Guide" 
                    >
                        Software Installation Guide
                    </p>
                    {/* <p className="max-w-xs mx-auto mb-2 text-sm sm:text-base text-gray-700">
                       Learn how to install the softwares you may encounter with.
                    </p> */}
                    <a
                            href="https://hackmd.io/@vedantphuse/ece-sy-resources"
                            target="_blank"
                            rel="noreferrer"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-teal-accent-accent-400 hover:text-teal-accent-400"
                    >
                        Read more
                    </a>
                </div>
                <div className="px-10 m-5 rounded-3xl bg-white py-20 text-center rounded lg:px-5 lg:py-10 xl:py-10 shadow-xl hover:shadow-2xl">
                    <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                        Gallery
                    </p>
                        <p
                            className="inline-block max-w-xs mx-auto mb-3 text-xl sm:text-2xl font-extrabold leading-7"
                            aria-label="Department Gallery"
                            title="Department Gallery"
                        >
                            Department Gallery
                        </p>
                    <a
                        href="/"
                        className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-teal-accent-400"
                        aria-label="Read article"
                        title="Well, the way they make shows is, they make one"
                    >
                        
                    </a>
                    <p className="max-w-xs mx-auto mb-2 text-gray-700">
                    </p>
                    <a
                        href="/gallery"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-teal-accent-accent-400 hover:text-teal-accent-400"
                    >
                        Read more
                    </a>
                </div>
                <div className="px-10 m-5 rounded-3xl bg-white py-20 text-center rounded lg:px-5 lg:py-10 xl:py-10 shadow-xl hover:shadow-2xl">
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            MAGAZINE
                        </p>
                    <p
                    
                        className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-teal-accent-400"
                        aria-label="Read article"
                        title="Pommy ipsum smeg head whizz morris himer due"
                    >
                        Dept Magazine
                    </p>
                    <p className="max-w-xs mx-auto mb-2 text-sm sm:text-base text-gray-700">
                        Coming Soon...
                    </p>
                    {/* <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-teal-accent-accent-400 hover:text-teal-accent-400"
                    >
                        Read more
                    </a> */}
                </div>
            </div>
        </div>
        </section>
    );
};