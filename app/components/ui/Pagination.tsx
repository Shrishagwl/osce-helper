import Button from "./Button";

export default function Pagination() {
  return (
    <div className="flex items-center justify-between text-sm text-slate-500">
      <span>Showing 1-5 of 32</span>
      <div className="flex gap-2">
        <Button variant="secondary" size="sm">
          Previous
        </Button>
        <Button variant="secondary" size="sm">
          Next
        </Button>
      </div>
    </div>
  );
}
