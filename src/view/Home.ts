import { BodyNode, DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import { View, ViewParams } from "skyrouter";
import MinterContract from "../contracts/MinterContract";
import Klaytn from "../klaytn/Klaytn";
import Wallet from "../klaytn/Wallet";

export default class Home implements View {

    private container: DomNode;
    private interval: any;

    constructor() {
        BodyNode.append(
            this.container = el("section.home-view",
                el("header",
                    el("nav",
                        el("img", { src: "/images/shared/logo/klubs.svg", alt: "klubs" }),
                    ),
                ),
                el("article",
                    el(".content-container",
                        el("img", { src: "/images/shared/logo/babyping.png", alt: "babyping logo" }),
                        el("h2", "Welcome to"),
                        el("h1", "BabyPing"),
                    ),
                    el("hr"),
                    el(".menu-container",
                        el(".menu",
                            el("a.item", "KLUBS"),
                            el("a.item", "Official PFP Site "),
                            el("a.item", "Opensea"),
                        ),
                        el(".wallet", "Connect\n to my\n Wallet"),
                        el(".discord", "Join \nOUR\nDiscord"),
                    ),
                    el(".mobile-menu-container",
                        el("img", { src: "/images/shared/logo/klubs_none_text_color.png" }),
                        el(".menu",
                            el("a.item", "KLUBS"),
                            el("a.item", "Official PFP Site "),
                            el("a.item", "Opensea"),
                        ),
                    ),
                ),
            ),
        );
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}