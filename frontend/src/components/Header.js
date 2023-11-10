export default function Header() {
  return (
    <div className="navbar bg-base-100 bg-white text-black sticky top-0">
      <div className="flex-1">
        {/* <a className="btn btn-ghost normal-case text-xl">WLB</a> */}
        <label
          tabIndex={0}
          className="btn btn-ghost bg-black btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img src="/wlbIcon1.jpeg" />
          </div>
        </label>
      </div>
      <div className="flex-none">
        <a className="btn btn-ghost normal-case text-xl">Contact</a>
      </div>
    </div>
  );
}
