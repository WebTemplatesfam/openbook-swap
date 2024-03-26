import { SwapMarket } from "@thespidercode/openbook-swap";
import { PublicKey } from "@solana/web3.js";

export const marketPairs: SwapMarket[] =[
    {
        address: new PublicKey('8PhnCfgqpgFM7ZJvttGdBVMXHuU4Q23ACxCvWkbs1M71'),
        base: {
            name: "CAPY",
            logo: "https://i.imgur.com/FAsGdjU.png",
            mint: new PublicKey('6zz62u9yEoZTe2efnnCyyHx5UUaPiThCngVxdYi8i4ix'),
            vault: new PublicKey('A9yRKSx8SyqNdCtCMUgr6wDXUs1JmVFkVno6FcscSD6m'),
        },
        quote: {
            name: "USDC",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Circle_USDC_Logo.svg/512px-Circle_USDC_Logo.svg.png",
            mint: new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
            vault: new PublicKey('D9dojzvwJGs4q3Cx8ytvD8kWVVZszoVKvPZEZ5D8PV1Y'),
        },
        minBase: 1000,
        swapMargin: 0.0004
    },
    {
        address: new PublicKey('FF2cofkAp3ELzd2KQtugxstDfw9TkGqEBJmGxPtB3hVU'),
        base: {
            name: "CAPY",
            logo: "https://i.imgur.com/FAsGdjU.png",
            mint: new PublicKey('6zz62u9yEoZTe2efnnCyyHx5UUaPiThCngVxdYi8i4ix'),
            vault: new PublicKey('EdukFLbSRoMyVreLYiZAGMccNNN9VDmgWXnk5PNu85iK'),
        },
        quote: {
            name: "SOL",
            logo: "https://i.imgur.com/3mrpE3x.png",
            mint: new PublicKey('So11111111111111111111111111111111111111112'),
            vault: new PublicKey('FERjPVNEa7Udq8CEv68h6tPL46Tq7ieE49HrE2wea3XT'),
        },
        minBase: 1,
        swapMargin: 0.0004
    },
]
