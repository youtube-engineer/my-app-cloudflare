"use server";

export async function addition(a: number, b: number): Promise<number> {
    "use server";
    return a + b;
}

export async function getIP(): Promise<string> {
    "use server";
    const url = "https://api.ipify.org?format=json"; // IP取得サービス
    try {
        const response = await fetch(url); // リクエストを送信
        if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status}`);
        }
        const data = await response.json(); // JSONレスポンスを解析
        return data.ip; // IPアドレスを返す
    } catch (error) {
        console.error("IP取得中にエラーが発生しました:", error);
        throw new Error("IPアドレスの取得に失敗しました。");
    }
}