"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

const MAX_LIMIT = 8;

export async function fetchAnime(page: number) {
    try {
        // Updated URL with proper API endpoint structure
        const response = await fetch(
            `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=ranked`,
            {
                headers: {
                    'User-Agent': 'anime-vault-app/1.0',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Add error handling for empty responses
        if (!Array.isArray(data) || data.length === 0) {
            console.log('No anime data received');
            return [];
        }

        return data.map((anime: AnimeProp, index: number) => (
            <AnimeCard key={anime.id} anime={anime} index={index} />
        ));
    } catch (error) {
        console.error('Error fetching anime:', error);
        return [];
    }
}