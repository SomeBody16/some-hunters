const messages = [
    'Jesteś moją kremóweczką ;)',
    'Kremówkuj z tym B)',
    'Gdy się człowiek śpieszy to się papież cieszy',
    'Toż to żarcik apetyczny, papież polak magnetyczny',
    'Jeszcze jak',
    'Mały chłopcze trzymaj toster, papież polak to imposter',
    'Toż to rzecz nie spotykana, papież polak je banana',
    'Żarcik troche nieetyczny, papież polak elektryczny 2137 Volt',
    'Chować dzieci papież leci',
    'Toć to jest zupełnie nowy papież polak cytrynowy',
    'Rewelacja znad bałtyku, papież polak na patyku',
    'Toż to sprawa niebywała, papież polak małpia skała',
    'Co mówi Papież do Papieża? Nic bo nie ma dwóch Papieży :rofl:',
    'Chować dzieci papież leci',
    'To już nie mieści się w dyni, papież polak na pustyni',
    'Mały chłopcze trzymaj toster, papież polak to imposter',
    'Przestań walić konia czubie, papież polak w ciasnej tubie',
    'Toż to moment niebezpieczny, papież polak wrzucił wsteczny',
    'Toż to obraz niebanalny, papież polak łatwopalny',
]

export const randMessage = (): any => messages[Math.floor(Math.random() * messages.length)]

export const id: Record<string, any> = {
    krem0wka: 'kubejs:krem0wka',
    ciast0: 'kubejs:krem0wka_ciast0',
    kr3m: 'kubejs:krem0wka_kr3m',
    smi3tana: 'kubejs:krem0wka_smi3tana',
}
