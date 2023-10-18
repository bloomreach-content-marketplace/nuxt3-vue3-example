import axios from 'axios'
import {Configuration, initialize} from "@bloomreach/spa-sdk";
import TitleAndText from '~/cms/TitleAndText.vue';
import Banner from '~/cms/BrBanner.vue';
import Content from '~/cms/BrContent.vue';
import Menu from '~/cms/BrMenu.vue';
import NewsList from '~/cms/BrNewsList.vue';
import {buildConfiguration} from "~/utils/buildConfiguration";

export const usePage = (environment: string, channel: string, path: string) => {

    const configuration = {
        path: path ?? '/',
        endpoint: `https://${environment}.bloomreach.io/delivery/site/v1/channels/${channel}/pages`,
        httpClient: axios,
    } as Configuration

    console.log('config', configuration)

    const page = initialize({
        ...configuration,
        httpClient: axios
    })

    const mapping = {Banner, Content, Menu, NewsList, TitleAndText}

    return {page, configuration, mapping}
}
