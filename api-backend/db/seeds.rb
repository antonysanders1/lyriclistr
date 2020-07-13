Song.destroy_all
Comment.destroy_all
Song.create([
    {title: "Blinding Lights", artist:"The Weekend", lyrics: "Yeah\n\n
        I been tryna call\n
        I been on my own for long enough\n
        Maybe you can show me how to love, maybe\n
        I'm going through withdrawals\n
        You don't even have to do too much\n
        You can turn me on with just a touch, baby\n\n
        I look around and Sin City's cold and empty (oh)\n
        No one's around to judge me (oh)\n
        I can't see clearly when you're gone\n\n
        I said, ooh, I'm blinded by the lights\n
        No, I can't sleep until I feel your touch\n
        I said, ooh, I'm drowning in the night\n
        Oh, when I'm like this, you're the one I trust\n
        Hey, hey, hey"},
    {title: "Intentions", artist:"Justin Beiber", lyrics: "Picture-perfect, you don't need no filter\n
        Gorgeous, make 'em drop dead, you a killer\n
        Shower you with all my attention\n
        Yeah, these are my only intentions\n
        Stay in the kitchen, cooking up, cut your own bread\n
        Heart full of equity, you're an asset\n
        Make sure that you don't need no mentions\n
        Yeah, these are my only intentions\n\n
        Shout out to your mom and dad for making you\n
        Standing ovation, they did a great job raising you\n
        When I create, you're my muse\n
        The kind of smile that makes the news\n
        Can't nobody throw shade on your name in these streets\n
        Triple threat, you a boss, you a bae, you a beast\n
        You make it easy to choose\n
        You got a mean touch I can't refuse (no, I can't refuse it)"},
    {title: "Toosie Slide", artist:"Drake", lyrics: "
        Black leather gloves, no sequins\nBuckles on the jacket, it's Alyx shit\n
        Nike crossbody, got a piece in it\nGot a dance, but it's really on some street shit\n
        I'ma show you how to get it\n\n
        It go, right foot up, left foot slide\nLeft foot up, right foot slide\n
        Basically, I'm saying either way, we 'bout to slide, ayy\nCan't let this one slide, ayy\n\n
        Don't you wanna dance with me? No?\nI could dance like Michael Jackson\n
        I could give you thug passion\nIt's a Thriller in the trap where we from\n
        Baby, don't you want to dance with me? No?\nI could dance like Michael Jackson\n
        I could give you satisfaction\nAnd you know we out here everyday with it\n
        I'ma show you how to get it\n\n
        It go, right foot up, left foot slide\nLeft foot up, right foot slide\n
        Basically, I'm saying either way, we 'bout to slide, ayy\n
        Can't let this one slide, ayy (who's bad?)"},
    {title: "Don't Start", artist:"Dua Lipa", lyrics: "Did a full 180, crazy\n
        Thinking 'bout the way I was\n
        Did the heartbreak change me? Maybe\n
        But look at where I ended up\n
        I'm all good already\n
        So moved on, it's scary\n
        I'm not where you left me at all, so\n\n
        If you don't wanna see me dancing with somebody\n
        If you wanna believe that anything could stop me\n\n
        Don't show up, don't come out\n
        Don't start caring about me now\n
        Walk away, you know how\n
        Don't start caring about me now"}
])

Comment.create([
    {name: "Rob F", body: "I love this song!!", song_id: 1}, 
    {name: "Julia S", body: "Ahh I love the Beibs!! His lyrics are always awesome!", song_id: 2}, 
    {name: "Kristen B", body: "Looooooove!!!", song_id: 3}, 
    {name: "Tony S", body: "Love dancing to this record! Lyrics are fun!", song_id: 4}])