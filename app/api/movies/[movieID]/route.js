import jsonData from "@/DB/db.json";
import { NextResponse } from "next/server";

// TODO : after a delete req the data will be assign .

let data = jsonData;
let removedData = [];

export async function GET(request, { params: { movieID } }) {
  try {
    const matchingMovie = data.results.find(
      (movie) => movie.id === Number(movieID)
    );
    if (matchingMovie) {
      return NextResponse.json([matchingMovie]);
    }
    throw Error(
      `${movieID} is a Wrong Id! , provide Valid Id || no data found`
    );
  } catch (err) {
    return NextResponse.json({
      status: 404,
      message: err.message,
    });
  }
}

export async function PATCH(request, { params: { movieID } }) {
  try {
    const title = await request.json();

    const matchingMovie = data.results.find(
      (movie) => movie.id === Number(movieID)
    );

    if (title && matchingMovie) {
      matchingMovie.title = title.title;
      return NextResponse.json([matchingMovie]);
    }
    throw Error(`${movieID} is a Wrong Id! , provide Valid Id`);
  } catch (err) {
    return NextResponse.json({
      status: 422,
      message: err.message,
    });
  }
}

export async function DELETE(request, { params: { movieID } }) {
  try {
    const matchingMovieFind = data.results.find(
      (movie) => movie.id === Number(movieID)
    );

    const isAlreadyRemoved =
      removedData.length >= 1 &&
      removedData.find((movie) => movie.id === Number(movieID));

    const removedMovieFind = jsonData.results.find(
      (movie) => movie.id === Number(movieID)
    );

    if (removedMovieFind && isAlreadyRemoved) {
      throw Error(`${isAlreadyRemoved.title} Already deleted`);
    }

    if (matchingMovieFind === undefined) {
      throw Error(`${movieID} is a Wrong Id! , provide Valid Id`);
    }

    const matchingMovieRemove = data.results.filter((movie) => {
      return movie.id !== Number(movieID);
    });

    data = {
      newData: jsonData,
      results: matchingMovieRemove,
    };

    removedData = [...removedData, matchingMovieFind];

    return NextResponse.json({
      message: "Movie Deleted Successfully",
      data: matchingMovieRemove,
    });
  } catch (err) {
    return NextResponse.json({
      status: 404,
      message: err.message,
    });
  }
}
