export default function Header() {
  return (
    <div className="navbar sticky top-0 bg-base-100 bg-white text-black">
      <div className="flex-1">
        {/* <a className="btn btn-ghost normal-case text-xl">WLB</a> */}
        <label
          tabIndex={0}
          className="avatar btn btn-circle btn-ghost bg-black"
        >
          <div className="w-10 rounded-full">
            <img src="/wlbIcon1.jpeg" />
          </div>
        </label>
      </div>
      <div className="flex-none">
        <a className="btn btn-ghost text-xl normal-case">Contact</a>
      </div>
    </div>
  );
}
