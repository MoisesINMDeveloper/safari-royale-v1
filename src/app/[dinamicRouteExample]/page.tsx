export default function Page({
  params,
}: {
  params: { dinamicRouteExample: string };
}) {
  console.log(params);
  return (
    // Ejemplo de como se usaria un layout necesario en algunas rutas especificas
    <main className="flex flex-col justify-center py-[60px] w-screen h-screen">
      <div className="text-white">My Post: {params.dinamicRouteExample}</div>
    </main>
  );
}
