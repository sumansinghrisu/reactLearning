import CustomHook from "../AllHooks/CustomHook";

export default function Home() {
    const { data, loading, error } = CustomHook(
        "https://jsonplaceholder.typicode.com/users"
    );

    console.log(data);

    if (error) return <p>Error!</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <>
            <h1>Custom Hook Fetch Data</h1>
            <ul>
                {data && data.map((item,i) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}