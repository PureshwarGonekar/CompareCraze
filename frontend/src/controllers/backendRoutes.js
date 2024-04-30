const base = process.env.REACT_APP_BASE;

export const loginUser = async(obj) => {
    const res = await fetch(`${base}/api/auth/login`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type" : "application/json",
        },
    });
    const ans = await res.json();
    return ans;
}

export const createUser = async(obj) => {
    const res = await fetch(`${base}/api/auth/signup`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const ans = await res.json();
    return ans;
}

export const updateUser = async(obj,id) => {
    console.log("going to update",id,obj)
    const res = await fetch(`${base}/api/user/updateuser/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    });
    const ans = await res.json();
    console.log("resp",ans)
    return ans;
}

export const getUserDetails = async(id) => {
    const res = await fetch(`${base}/api/user/getUserDetails/${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    });
    const ans = await res.json();
    return ans;
}

export const uploadProfilePic = async (id, formData) => {
     try {
        const response = await fetch(`${base}/api/user/imageUpload/${id}`, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
        //   console.log(data.message); // File uploaded successfully
          return data;
        } else {
          console.error('Failed to upload file');
        }
      } catch (error) {
        console.error(error);
      }
}