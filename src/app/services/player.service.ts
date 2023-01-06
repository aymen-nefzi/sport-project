import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerURL: string = "http://localhost:3000/players"
  constructor(private httpClient: HttpClient) { }
  displayAllPlayers() {
    return this.httpClient.get<{ playersTable: any }>(this.playerURL)
  }

  displayPlayerById(id) {
    return this.httpClient.get<{ player: any }>(`${this.playerURL}/${id}`)

  }

  deletePlayerId(id) {
    return this.httpClient.delete<{ message: string }>(`${this.playerURL}/${id}`)
  }



  addPlayer(playerObj, img: File) {
    let formData = new FormData();
    formData.append("playerName", playerObj.playerName)
    formData.append("age", playerObj.age)
    formData.append("position", playerObj.position)
    formData.append("number", playerObj.number)
    formData.append("img", img)
    return this.httpClient.post<{ message: string }>(this.playerURL, formData)
  }

  editPlayer(playerObj) {
    return this.httpClient.put<{ player: any }>(`${this.playerURL}/${playerObj._id}`, playerObj)
  }

}
