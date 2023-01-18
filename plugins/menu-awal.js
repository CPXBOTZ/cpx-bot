import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*━━━━「 MENU CPX」━━━━
*JASA BUAT BOT WHASTAPP*
*SEDIA KAN 1 NOMORBOT DAN 2 HP BUAT SCAN!*
*SEWA  5K 7 HARI*
*KEUNTUNGAN ?? BISA DI SEWA KAN BOT NYA!*
vitur nya apa aja bg ?
pokonya all vitur
- anti link✅
- sambutan welcome✅
- bikin stiker✅
- download video youtube,facebook,instagram,tiktok✅
DLL
Chat owner ketika ingin membeli atau menyewa bot.\n`,wm + '\n\n' + botdate, giflogo, [['SEMUA MENU','.? all'],['PAPAN MENU','.siuuu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Total Cintaku Padamu',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = /^(menu|help|co)$/i
export default handler