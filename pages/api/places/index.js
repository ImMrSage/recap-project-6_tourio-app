import dbConnect from "@/db/models/dbConnect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Place.find();
    return response.status(200).json(places);
  } else {
    return response.status(405).json({ status: "Method not allowed" });
  }
}
