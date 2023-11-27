import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useRef } from "react";
import JoditEditor from "jodit-react";
export default function EditArtikel(props) {
    const editor = useRef(null);
    const { data, setData, errors, post, progress } = useForm({
        title: props.artikel.title,
        content: props.artikel.content,
        description: props.artikel.description,
        image: null,
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        let reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setData("image", reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
        post(route("artikel.edit", props.artikel.id));

        setData("title", "");
        setData("description", "");
        setData("content", "");
        setData("image", null);
    };

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Posting Artikel Terbaru
                </h2>
            }
        >
            <Head title={props.title} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col w-full"
                            >
                                <label htmlFor="">Old Image</label>

                                <img
                                    src={`/storage/${props.artikel.image}`}
                                    alt=""
                                    className="w-40"
                                />
                                <label htmlFor="title">Title</label>
                                <input
                                    id="title"
                                    type="text"
                                    label="title"
                                    name="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                                {errors.title && (
                                    <span className="text-red-600 my-1">
                                        {errors.title}
                                    </span>
                                )}
                                <label htmlFor="image">Gambar</label>
                                <img src={data.image} alt="" />
                                <input
                                    id="image"
                                    type="file"
                                    label="image"
                                    name="image"
                                    className="file-input file-input-ghost w-full"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                />
                                {errors.image && (
                                    <span className="text-red-600 my-1">
                                        {errors.image}
                                    </span>
                                )}
                                {progress && (
                                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div
                                            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                            width={progress.percentage}
                                        >
                                            {progress.percentage}%
                                        </div>
                                    </div>
                                )}
                                <label htmlFor="content">Content</label>
                                <JoditEditor
                                    className="w-full h-96"
                                    ref={editor}
                                    name="content"
                                    tabIndex={1}
                                    value={data.content}
                                    onChange={(newContent) => {
                                        setData("content", newContent);
                                    }}
                                />

                                {errors.content && (
                                    <span className="text-red-600 my-1">
                                        {errors.content}
                                    </span>
                                )}
                                <label htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    label="Description"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                {errors.description && (
                                    <span className="text-red-600 my-1">
                                        {errors.description}
                                    </span>
                                )}
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Add
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
