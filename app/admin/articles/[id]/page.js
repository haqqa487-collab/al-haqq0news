import Link from "next/link";
import { notFound } from "next/navigation";
import { requireEditor } from "@/lib/auth";
import { getById } from "@/lib/content";
import { deleteArticle } from "@/lib/admin-actions";
import ArticleForm from "@/app/admin/ArticleForm";
import DeleteButton from "./DeleteButton";

export default async function EditArticle({ params, searchParams }) {
  await requireEditor();
  const { id } = await params;
  const { saved } = await searchParams;
  const a = await getById(Number(id));
  if (!a) notFound();
  return (
    <>
      <div className="actions" style={{ justifyContent: "space-between", marginBottom: 16 }}>
        <div>
          <h1>Edit article</h1>
          <p className="meta">/article/{a.slug} · {a.status}</p>
        </div>
        <div className="actions">
          <Link className="btn btn--ghost btn--sm" href={`/article/${a.slug}`} target="_blank">{a.status === "published" ? "View" : "Preview"} ↗</Link>
          <form action={deleteArticle}><input type="hidden" name="id" value={a.id} /><DeleteButton /></form>
        </div>
      </div>
      {saved && <div className="flash">Saved.</div>}
      <ArticleForm key={a.updated_at} a={a} />
    </>
  );
}
