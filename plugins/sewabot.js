let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '15'
let ss = '20'
let sp = '35'
let sv = '40'
//premium
let ph = '5'
let pn = '15'
let pp = '25'
let pv = '35'
let ppm = '35'
//jasa run
let ri = '25'
let pk = '30'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _${sh}k/grup (3 Hari)_
┊⫹⫺ *Normal:* _${sn}k/grup (7 hari)_                                         
┊⫹⫺ *permanen:* = _${sv}k/grup (1 bulan)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _${ph}k (7 Hari)_
┊⫹⫺ *Normal:* _${pn}k (1 bulan)_                                       
┊⫹⫺ *Permanent:* = _${ppm}k (Unlimited)_
╰═┅═━––––––๑
╭━━━━「 *PERPANJANG SEWA* 」
┊⫹⫺ *Hemat:* _5k (7 Hari)_
┊⫹⫺ *Normal:* _6k (1 bulan)_                                       
╰═┅═━––––––๑
╭━━━━「 *PERPANJANG PREMIUM* 」
┊⫹⫺ *Hemat:* _3k (7 Hari)_
┊⫹⫺ *Normal:* _6k (1 bulan)_                                       
╰═┅═━––––––๑
╭━━━━「 *JUAL SC* 」
┊⫹⫺ *Tidak Di Rename:* _${ri}k (PERMANENT)_
┊⫹⫺ *Direname:* _${pk}k (PERMANENT)_                                       
╰═┅═━––––––๑
༅ _*FITUR BOT*

✧ *Virtex Menu✅*
✧ *Menu Keren✅*
✧ *Anti Link✅*
✧ *Button Menu✅*
✧ *Anti Sticker✅*
✧ *Anti Toxic↗️*
✧ *DLL*
✧ *MEMBELI BERATI SETUJU*

_Total Fitur:_ 570++

*⫹⫺ PAYMENT:*
• *Dana:*
• *Gopay:*(-)
• *Ovo:*(-)
• *QRIS*(-)
• *ALL PAYMENT*
–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* 8K • Sewa', description: 'PRICE: ' + sh + 'k (3 Hari)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* 15K • Sewa', description: 'PRICE: ' + sn + 'k (7 hari)' },
	{title: "🔖 Permanen", rowId: '.order *Paket:* 30K • Sewa', description: 'PRICE: ' + sv + 'k (1 bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* 5K • Premium', description: 'PRICE: ' + ph + 'k (7 Hari)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* 10K • Premium', description: 'PRICE: ' + pn + 'k (1 bulan)' },
	{title: "🌟 PERMANENT", rowId: '.order *Paket:* 35K • Premium', description: 'PRICE: ' + ppm + 'k (UNLIMITED)' },
	]
    }, {
        title: `${htjava} JUAL SC ✦-------`,
	rows: [
	    {title: "🌟 TIDAK DI RENAME", rowId: '.order *Paket:* 25K • BELI SC', description: 'PRICE: ' + ri + 'k (PERMANENT)' },
	    {title: "🌟 DIRENAME", rowId: '.order *Paket:* 30K • BELI SC', description: 'PRICE: ' + pk + 'k (PERMANENT)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "KLIK DISINI BRO!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler