import { requireEditor } from "@/lib/auth";
import ArticleForm from "@/app/admin/ArticleForm";

export default async function NewArticle() {
  await requireEditor();
  return (
    <>
      <h1>New article</h1>
      <p className="meta" style={{ marginBottom: 20 }}>Drafts are visible only to you until you publish.</p>
      <ArticleForm />
    </>
  );
}
