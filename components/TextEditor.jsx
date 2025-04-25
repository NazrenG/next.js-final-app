"use client";  
import { SimpleEditor } from "./tiptap-templates/simple/simple-editor";

export default function TextEditor({setBlogBody}) {
  // const [blogBody, setBlogBody] = useState("");

  // useEffect(() => {
  //   console.log(blogBody);
  // }, [blogBody]);

  return (
    <div className="w-full max-w-[770px] h-[360px] border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-[#1e1e1e] text-black dark:text-white rounded-[2px]">
      <SimpleEditor setBlogBody={setBlogBody} />
    </div>
  );
}
