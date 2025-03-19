type requirementsProps = {
    title: string;
};

export default function Requirements({ title }: requirementsProps) {
    return (
        <div className="text-center text-4xl font-bold">
            <h1>{title}</h1>
        </div>
    );
}
