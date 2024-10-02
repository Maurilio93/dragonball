export function Dashboard() {
  const user = localStorage.getItem("username")
  return (
    <div>
      <h1 className= " font-bold flex justify-center items-center min-h-screen">
        BENVENUTO NELLA DASHBOARD {user}
      </h1>
    </div>
  );
}

