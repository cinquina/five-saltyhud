AddEventHandler('SaltyChat_PluginStateChanged', function(state)
    SendNUIMessage({type = 'toggle', toggle = state <= 1})
end)