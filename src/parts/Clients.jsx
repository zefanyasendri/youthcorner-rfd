import React from 'react'

export default function Clients() {
    return (
        <React.Fragment>
            <section className="container mx-auto">
                <div className="flex justify-center flex-wrap">
                    <div
                    className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                    >
                        <img src="/images/content/logo-react.svg" alt="" className="mx-auto" />
                    </div>
                    <div
                    className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                    >
                        <img src="/images/content/logo-figma.svg" alt="" className="mx-auto" />
                    </div>
                    <div
                    className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                    >
                        <img src="/images/content/logo-postman.svg" alt="" className="mx-auto" />
                    </div>
                    <div
                    className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                    >
                        <img src="/images/content/logo-bwa.svg" alt="" className="mx-auto" />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
