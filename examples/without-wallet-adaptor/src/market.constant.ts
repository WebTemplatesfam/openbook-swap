import { SwapMarket } from "@thespidercode/openbook-swap";
import { PublicKey } from "@solana/web3.js";

export const marketPairs: SwapMarket[] =[
    {
        address: new PublicKey('DboZUDQE6up8rjsiYjpSHGR6f7DWFsDUJyyhWgCa4Jqe'),
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
