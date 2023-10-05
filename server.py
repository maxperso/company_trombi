import asyncio
import websockets

async def echo(websocket, path):
    print("Nouvel utilisateur connecté!")
    async for message in websocket:
        await websocket.send(message)

start_server = websockets.serve(echo, "127.0.0.1", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
