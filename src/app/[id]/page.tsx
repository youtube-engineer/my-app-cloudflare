// import Form from "./form";

import { createSharedText } from "../../actions/text-share";

// export const runtime = "edge";

// export default async function Page({ params }: { params: Promise<{ id: string }> }) {
//     const { id } = await params;
//     return (
//         <main>
//             <h1>
//                 Page {id}
//             </h1>
//             <Form />
//         </main>
//     );
// }
export const runtime = "edge";

export default async function ShareText({ params }: { params: Promise<any> }) {
    const { id } = await params
    const result = await createSharedText()
    return (
        <>
            <h1 className="p-16">
                {id}
            </h1>
            <p>{result.text}</p>
        </>
    );
}


