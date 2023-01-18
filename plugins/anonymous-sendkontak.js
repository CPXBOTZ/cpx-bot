let { MessageType, Presence } = (await import('@adiwajshing/baileys')).default

async function handler(m, { command, conn, text }) {
	this.anonymous = this.anonymous ? this.anonymous : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let room = Object.values(this.anonymous).find(room => room.check(who))
	if (!room) throw 'LU LAGI GA DI ANONYMOUS ROOM GOBLOK'
	let other = room.other(who)
  var name
  if (text) name = text
  else name = conn.getName(m.sender)
	var number = who.split('@')[0]
	let tks = `➔ Nomor: ${m.sender.split`@`[0]}
➔ Nama: ${name}`
    this.reply(m.chat, 'SEDANG MENGIRIMKAN KONTAK BRO...')
	if (other) this.reply(other, `PARTNER LU NGIRIM KONTAK KE LU`)
	if (other) this.sendHydrated(other, `${htki} ᴀɴᴏɴʏᴍᴏᴜs ᴄʜᴀᴛs ${htka}`, tks, await conn.profilePictureUrl(m.sender, 'image').catch(_ => './src/avatar_contact.png'), `wa.me/${m.sender.split`@`[0]}`, 'ᴛᴜʀɴ ᴄʜᴀᴛ ᴘᴀʀᴛɴᴇʀ', null,null, [['ʟᴇᴀᴠᴇ', '.leave'],[null,null],[null,null]], 0,  { mentionedJid: [m.sender]})
}
handler.help = ['sendkontak']
handler.tags = 'anonymous'
handler.command = /^(sendkontak)$/i
handler.private = true

export default handler
