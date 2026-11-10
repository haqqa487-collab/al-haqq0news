"use client";
export default function DeleteButton() {
  return (
    <button
      className="btn btn--danger btn--sm"
      onClick={(e) => { if (!confirm("Delete this article permanently? This cannot be undone. (To hide it, unpublish it instead.)")) e.preventDefault(); }}
    >
      Delete
    </button>
  );
}
