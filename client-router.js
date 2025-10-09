(() => {
    const isString = x => typeof x === 'string' || x instanceof String || x?.constructor?.name == 'String';
    (() => {
        const _fetch = self.fetch;
        self.fetch = Object.setPrototypeOf(async function fetch(...args) {
            try {
                const newArgs = args.map(x => isString(x) ? String(x).replace('www.crowdstrike.com', location.host) : x);
                return await _fetch.apply(this, newArgs);
            } catch (e) {
                return new Response(e?.stack, {
                    status: 469,
                    statusText: e?.message
                });
            }
        }, _fetch);
    })();
})();
