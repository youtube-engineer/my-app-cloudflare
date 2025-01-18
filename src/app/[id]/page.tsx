export const runtime = "edge";

export default async function ShareText({ params }: { params: { id: string } }) {
    const { id } = await params

    return (
        <h1 className="p-16">
            {id}
        </h1>
    );
}


